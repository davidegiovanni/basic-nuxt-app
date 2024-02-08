import { describe, expect, it } from "vitest";
import { newLoader } from "./index";

import type { Author, BlockItem, Website, WebsiteLink, WebsiteNotification, AlternateWebsite } from "~/models";

describe("loader", async () => {
  it("should return default a11y settings from cookies and set cookies", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {},
    });
    const res: any = await response.json()

    expect(res.textBaseUnit).toBe(0.155)
    expect(res.textLineBaseUnit).toBe(0.155)
    expect(res.spacingBaseUnit).toBe(0.155)
    expect(res.isHighContrastMode).toBe(false)
    expect(response.headers.get("Set-Cookie")).toBe("www.example.com/a11y=eyJjb250cmFzdE1vZGUiOiJkZWZhdWx0IiwidGV4dEluY3JlYXNlQW1vdW50IjoiZGVmYXVsdCJ9; Max-Age=86400; Path=/; HttpOnly; SameSite=Lax, www.example.com/i18n=eyJzZWxlY3RlZExvY2FsZSI6IiJ9; Max-Age=86400; Path=/; HttpOnly; SameSite=Lax")
  });
  it("should return text increase amount from queries and set cookies", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "100"
      }
    });

    const response = await loader({
      request: new Request(`https://www.example.com?textIncrease=100`),
      context: {},
      params: {},
    });
    const res: any = await response.json()

    expect(res.textBaseUnit).toBe(0.31)
    expect(res.textLineBaseUnit).toBe(0.255)
    expect(res.spacingBaseUnit).toBe(0.105)
    expect(response.headers.get("Set-Cookie")).toBe("www.example.com/a11y=eyJjb250cmFzdE1vZGUiOiJkZWZhdWx0IiwidGV4dEluY3JlYXNlQW1vdW50IjoiMTAwIn0%3D; Max-Age=86400; Path=/; HttpOnly; SameSite=Lax, www.example.com/i18n=eyJzZWxlY3RlZExvY2FsZSI6IiJ9; Max-Age=86400; Path=/; HttpOnly; SameSite=Lax")
  });
  it("should return contrast mode from queries and set cookies", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com?contrastMode=high"),
      context: {},
      params: {
        organizationId: "organization1",
      },
    });
    const res: any = await response.json()

    expect(res.isHighContrastMode).toBe(true)
    expect(response.headers.get("Set-Cookie")).toBe("www.example.com/a11y=eyJjb250cmFzdE1vZGUiOiJoaWdoIiwidGV4dEluY3JlYXNlQW1vdW50IjoiZGVmYXVsdCJ9; Max-Age=86400; Path=/; HttpOnly; SameSite=Lax, www.example.com/i18n=eyJzZWxlY3RlZExvY2FsZSI6IiJ9; Max-Age=86400; Path=/; HttpOnly; SameSite=Lax")
  });

  it("should return selected locale from cookies and set cookies", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: "it-IT"},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {},
    });
    const res: any = await response.json()

    expect(res.selectedLocale).toBe("it-IT")
    expect(response.headers.get("Set-Cookie")).toBe("www.example.com/a11y=eyJjb250cmFzdE1vZGUiOiJkZWZhdWx0IiwidGV4dEluY3JlYXNlQW1vdW50IjoiZGVmYXVsdCJ9; Max-Age=86400; Path=/; HttpOnly; SameSite=Lax, www.example.com/i18n=eyJzZWxlY3RlZExvY2FsZSI6Iml0LUlUIn0%3D; Max-Age=86400; Path=/; HttpOnly; SameSite=Lax")
  });
  it("should return selected locale from queries and set cookies", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: "it-IT"},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com?selectedLocale=en-US"),
      context: {},
      params: {},
    });
    const res: any = await response.json()

    expect(res.selectedLocale).toBe("en-US")
    expect(response.headers.get("Set-Cookie")).toBe("www.example.com/a11y=eyJjb250cmFzdE1vZGUiOiJkZWZhdWx0IiwidGV4dEluY3JlYXNlQW1vdW50IjoiZGVmYXVsdCJ9; Max-Age=86400; Path=/; HttpOnly; SameSite=Lax, www.example.com/i18n=eyJzZWxlY3RlZExvY2FsZSI6ImVuLVVTIn0%3D; Max-Age=86400; Path=/; HttpOnly; SameSite=Lax")
  });
  it("should return empty selected locale when not set and set cookies", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {},
    });
    const res: any = await response.json()

    expect(res.selectedLocale).toBe("")
    expect(response.headers.get("Set-Cookie")).toBe("www.example.com/a11y=eyJjb250cmFzdE1vZGUiOiJkZWZhdWx0IiwidGV4dEluY3JlYXNlQW1vdW50IjoiZGVmYXVsdCJ9; Max-Age=86400; Path=/; HttpOnly; SameSite=Lax, www.example.com/i18n=eyJzZWxlY3RlZExvY2FsZSI6IiJ9; Max-Age=86400; Path=/; HttpOnly; SameSite=Lax")
  });

  it("should call get website", async () => {
    let getWebsiteAssert = false
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      },
      asyncGetWebsite: async () => {
        getWebsiteAssert = true
        return [
          {
            website: {
              alternates: [] as AlternateWebsite[]
            } as Website
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {},
    });
    await response.json()

    expect(getWebsiteAssert).toBe(true)
  });
  it("should call set cookies when throwing error", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      },
      asyncGetWebsite: async () => {
        return [
          {
            website: {
              alternates: [] as AlternateWebsite[]
            } as Website
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {},
    });
    await response.json()

    expect(response.headers.get("Set-Cookie")).toBe("www.example.com/a11y=eyJjb250cmFzdE1vZGUiOiJkZWZhdWx0IiwidGV4dEluY3JlYXNlQW1vdW50IjoiZGVmYXVsdCJ9; Max-Age=86400; Path=/; HttpOnly; SameSite=Lax, www.example.com/i18n=eyJzZWxlY3RlZExvY2FsZSI6IiJ9; Max-Age=86400; Path=/; HttpOnly; SameSite=Lax")
  });
  it("should throw 404 error when website is not found", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      },
      asyncGetWebsite: async () => {
        return [
          {
            website: {
              alternates: [] as AlternateWebsite[]
            } as Website,
            languageCodes: ["it-IT"]
          },
          {
            code: 5,
            message: "Error"
          }
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {
        locale: "it-IT"
      },
    });
    const res = await response.json()

    expect(response.status).toBe(404)
    expect(res.errors?.getWebsite).toBe(true)
  });
  it("should throw 500 error when get website fails", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      },
      asyncGetWebsite: async () => {
        return [
          {
            website: {
              alternates: [] as AlternateWebsite[]
            } as Website,
            languageCodes: ["it-IT"]
          },
          {
            code: 1,
            message: "Error"
          }
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {
        locale: "it-IT"
      },
    });
    const res = await response.json()

    expect(response.status).toBe(500)
    expect(res.errors?.getWebsite).toBe(true)
  });

  it("should return available locales when present", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      },
      asyncGetWebsite: async () => {
        return [
          {
            website: {
              languageCode: "it-IT",
              alternates: [
                { languageCode: "it-IT" },
                { languageCode: "en-US" },
                { languageCode: "fr-FR" }
              ]
            } as Website
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {
        locale: "it-IT"
      },
    });
    const res: any = await response.json()

    expect(res.availableLanguages).toStrictEqual([
      "it-IT", "en-US", "fr-FR"
    ])
    expect(res.websiteLocale).toBe("it-IT")
  });

  it("should return code injection when present", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      },
      asyncGetWebsite: async () => {
        return [
          {
            website: {
              headCodeInjection: "headCodeInjection",
              bodyCodeInjection: "bodyCodeInjection",
              alternates: [] as AlternateWebsite[]
            } as Website,
            languageCodes: ["it-IT"]
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {},
    });
    const res: any = await response.json()

    expect(res.headCodeInjection).toBe("headCodeInjection")
    expect(res.bodyCodeInjection).toBe("bodyCodeInjection")
  });
  it("should return theme", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      },
      asyncGetWebsite: async () => {
        return [
          {
            website: {
              theme: {
                logoUrl: "logoUrl",
                iconUrl: "iconUrl",
                accentColor: "#8154ec",
                borderRadius: "18",
                fontFamily: "fontFamily",
                fontFamilyUrl: "fontFamilyUrl",
              },
              alternates: [] as AlternateWebsite[]
            } as Website,
            languageCodes: ["it-IT"]
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {},
    });
    const res: any = await response.json()

    expect(res.primaryColor).toBe("#8154ec")
    expect(res.contrastColor).toBe("white")
    expect(res.borderRadiusAmount).toBe(18)
    expect(res.fontFamily).toBe("fontFamily")
    expect(res.fontFamilyUrl).toBe("fontFamilyUrl")
    expect(res.faviconUrl).toBe("iconUrl")
    expect(res.websiteLogoUrl).toBe("logoUrl")
  });
  it("should return locale and language codes", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      },
      asyncGetWebsite: async () => {
        return [
          {
            website: {
              languageCode: "it-IT",
              alternates: [
                { languageCode: "it-IT"},
                { languageCode: "en-US"}
              ] as AlternateWebsite[]
            } as Website,
            languageCodes: ["it-IT", "en-US"]
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {},
    });
    const res: any = await response.json()

    expect(res.websiteLocale).toBe("it-IT")
    expect(res.availableLanguages).toStrictEqual(["it-IT", "en-US"])
  });
  it("should return canonical url", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      },
      asyncGetWebsite: async () => {
        return [
          {
            website: {
              languageCode: "it-IT",
              alternates: [] as AlternateWebsite[]
            } as Website,
            languageCodes: ["it-IT", "en-US"]
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {
        locale: "it-IT"
      },
    });
    const res: any = await response.json()

    expect(res.canonicalUrl).toBe("https://www.example.com/it-IT")
  });
  it("should return notification", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      },
      asyncGetWebsite: async () => {
        return [
          {
            website: {
              notification: {
                title: "Notification title",
                description: "Notification description",
                link: {
                  title: "Notification link",
                  url: "notificationurl",
                  metadata: {
                    "key": "value"
                  }
                },
                metadata: {
                  "key": "value"
                }
              } as WebsiteNotification,
              alternates: [] as AlternateWebsite[]
            } as Website,
            languageCodes: ["it-IT", "en-US"]
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {
        locale: "it-IT"
      },
    });
    const res: any = await response.json()

    expect(res.notification).toStrictEqual({
      title: "Notification title",
      description: "Notification description",
      linkTitle: "Notification link",
      linkUrl: "notificationurl",
      linkMetadata: {
        "key": "value"
      },
      metadata: {
        "key": "value"
      }
    })
  });
  it("should return mainItem", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      },
      asyncGetWebsite: async () => {
        return [
          {
            website: {
              mainItem: {
                title: "Main item title",
                description: "Main item description",
                link: {
                  title: "Main item link",
                  url: "mainitemurl",
                  metadata: {
                    "key": "value"
                  }
                },
                metadata: {
                  "key": "value"
                },
                attachment: null
              } as BlockItem,
              alternates: [] as AlternateWebsite[]
            } as Website,
            languageCodes: ["it-IT", "en-US"]
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {
        locale: "it-IT"
      },
    });
    const res: any = await response.json()

    expect(res.mainItem).toStrictEqual({
      title: "Main item title",
      description: "Main item description",
      linkTitle: "Main item link",
      linkUrl: "mainitemurl",
      linkMetadata: {
        "key": "value"
      },
      metadata: {
        "key": "value"
      },
      "attachmentCaption": "",
      "attachmentDescription": "",
      "attachmentMediaType": "image/*",
      "attachmentMetadata": {},
      "attachmentUrl": "",
    })
  });
  it("should return links and socials", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      },
      asyncGetWebsite: async () => {
        return [
          {
            website: {
              links: [
                {
                  title: "Internal",
                  url: "internal",
                  metadata: {
                    "key": "value"
                  }
                },
                {
                  title: "External",
                  url: "https://external",
                  metadata: {
                    "key": "value"
                  }
                },
                {
                  title: "Social",
                  url: "https://facebook.com",
                  metadata: {
                    "key": "value"
                  }
                },
              ] as WebsiteLink[],
              navigation: [
                {
                  title: "Internal",
                  url: "internal",
                  metadata: {
                    "key": "value"
                  }
                },
                {
                  title: "External",
                  url: "https://external",
                  metadata: {
                    "key": "value"
                  }
                },
                {
                  title: "Social",
                  url: "https://facebook.com",
                  metadata: {
                    "key": "value"
                  }
                },
              ] as WebsiteLink[],
              alternates: [] as AlternateWebsite[]
            } as Website,
            languageCodes: ["it-IT", "en-US"]
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {
        locale: "it-IT"
      },
    });
    const res: any = await response.json()

    expect(res.links).toStrictEqual([
      {
        title: "Internal",
        url: "internal",
        metadata: {
          "key": "value"
        }
      },
      {
        title: "External",
        url: "https://external",
        metadata: {
          "key": "value"
        }
      },
    ])
    expect(res.navigation).toStrictEqual([
      {
        title: "Internal",
        url: "internal",
        metadata: {
          "key": "value"
        }
      },
      {
        title: "External",
        url: "https://external",
        metadata: {
          "key": "value"
        }
      },
      {
        title: "Social",
        url: "https://facebook.com",
        metadata: {
          "key": "value"
        }
      },
    ])
    expect(res.socials).toStrictEqual([
      {
        type: "facebook",
        title: "Social",
        url: "https://facebook.com",
        metadata: {
          "key": "value"
        }
      }
    ])
  });
  it("should return authors", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      },
      asyncGetWebsite: async () => {
        return [
          {
            website: {
              authors: [
                {
                  title: "Author title",
                  description: "Author description",
                  imageUrl: "imageurl",
                  links: [{
                      title: "Link title",
                      url: "linkurl",
                      metadata: {}
                  }],
                  metadata: {
                    "key": "value"
                  }
                }
              ] as Author[],
              alternates: [] as AlternateWebsite[]
            } as Website,
            languageCodes: ["it-IT", "en-US"]
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {
        locale: "it-IT"
      },
    });
    const res: any = await response.json()

    expect(res.authors).toStrictEqual([
      {
        title: "Author title",
        metadata: {
          "key": "value",
        },
        description: "Author description",
        links: [{
            title: "Link title",
            url: "linkurl",
            metadata: {},
        }],
        attachmentMediaType: "image/*",
        attachmentUrl: "imageurl",
        attachmentDescription: "Author title",
        attachmentCaption: "",
        attachmentMetadata: {}
      }
    ])
  });
  it("should return main link", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: ""},
      a11yWebsiteCookie: {
        contrastMode: "default",
        textIncreaseAmount: "default"
      },
      asyncGetWebsite: async () => {
        return [
          {
            website: {
              mainLink: {
                title: "Internal",
                url: "internal",
                metadata: {
                  "key": "value"
                }
              } as WebsiteLink,
              alternates: [] as AlternateWebsite[]
            } as Website,
            languageCodes: ["it-IT", "en-US"]
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {
        locale: "it-IT"
      },
    });
    const res: any = await response.json()

    expect(res.mainLink).toStrictEqual( {
      title: "Internal",
      url: "internal",
      metadata: {
        "key": "value"
      }
    })
  });
});