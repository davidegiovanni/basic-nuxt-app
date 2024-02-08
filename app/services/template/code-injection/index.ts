import { useEffect, useState } from "react";

export type InjectionProps = {
  code: string;
  position: "head" | "body" | "inline";
  targetDiv?: React.RefObject<any>;
};

export default function Injection({
  code,
  position,
  targetDiv,
}: InjectionProps) {
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      const container = document.createElement("div");
      container.innerHTML = code;

      const nodesLenght = container.childNodes.length

      container.childNodes.forEach((node, index) => {
        if (position === "body") {
          if (node.nodeName.toLowerCase() === "script") {
            const tag: HTMLScriptElement = node as HTMLScriptElement;
            const scriptElement = document.createElement("script");
            Array.from(tag.attributes).forEach((attr: any) => {
              scriptElement.setAttribute(attr.name, attr.value);
            });
            
            if (tag.src) {
              scriptElement.onload = () => {};
            } else {
              scriptElement.textContent = node.textContent;
            }
            document.body.appendChild(scriptElement)
          } else {
            document.body.appendChild(node.cloneNode(true)); // Use cloneNode to avoid moving the node
          }
        } else if (position === "head") {
          if (node.nodeName.toLowerCase() === "script") {
            const tag: HTMLScriptElement = node as HTMLScriptElement;
            const scriptElement = document.createElement("script");
            Array.from(tag.attributes).forEach((attr: any) => {
              scriptElement.setAttribute(attr.name, attr.value);
            });
            
            if (tag.src) {
              scriptElement.onload = () => {};
            } else {
              scriptElement.textContent = node.textContent;
            }
  
            document.head.appendChild(scriptElement)
          } else {
            document.head.appendChild(node.cloneNode(true));
          }
        } else {
          const targetElement = targetDiv?.current;
          const parent = targetElement.parentElement;

          if (node.nodeName.toLowerCase() === "script") {
            const tag: HTMLScriptElement = node as HTMLScriptElement;
            const scriptElement = document.createElement("script");
            Array.from(tag.attributes).forEach((attr: any) => {
              scriptElement.setAttribute(attr.name, attr.value);
            });
            
            if (tag.src) {
              scriptElement.onload = () => {};
            } else {
              scriptElement.textContent = node.textContent;
            }
            parent.insertBefore(scriptElement, targetElement);
          } else {
            parent.insertBefore(node.cloneNode(true), targetElement);
          }

          // Remove the original targetElement
          if (index === nodesLenght - 1) parent.removeChild(targetElement);
        }
      });
    }
  }, [code, hydrated, position, targetDiv]);

  return null;
}
