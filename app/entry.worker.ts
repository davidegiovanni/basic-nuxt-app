/// <reference lib="WebWorker" />

export type {};
declare let self: ServiceWorkerGlobalScope;

function debug(...messages: any[]) {
  if (process.env.NODE_ENV === "development") {
    console.debug(...messages);
  }
}

async function handleInstall(event: ExtendableEvent) {
  debug("Service worker installed");
}

async function handleActivate(event: ExtendableEvent) {
  debug("Service worker activated");
}

async function handleFetch(event: FetchEvent): Promise<Response> {
  if (!navigator.onLine) {
    return new Response(
      '<div style="display: flex;flex-flow: column;justify-content: center;align-items: center;font-family: sans-serif;"><h2>Oh no sei offline</h2><p>Controlla di avere una connessione internet</p></div>',
      {
        headers: {
          "Content-type": "text/html",
        },
      },
    );
  }
  return fetch(event.request.clone());
}

self.addEventListener("install", (event) => {
  event.waitUntil(handleInstall(event).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(handleActivate(event).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const result = {} as
        | { error: unknown; response: Response }
        | { error: undefined; response: Response };
      try {
        result.response = await handleFetch(event);
      } catch (error) {
        result.error = error;
      }

      return appHandleFetch(event, result);
    })(),
  );
});

async function appHandleFetch(
  event: FetchEvent,
  {
    error,
    response,
  }:
    | { error: unknown; response: Response }
    | { error: undefined; response: Response },
): Promise<Response> {
  return response;
}
