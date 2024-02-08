import { rest } from "msw";
import { faker } from "@faker-js/faker";

const apiUrl =
  process.env.REVAS_OS_WEB_UI_WEB_CDN_URL || "https://api.example.com/";

// eslint-disable-next-line @typescript-eslint/no-empty-interface

const website = {
  id: faker.string.uuid(),
  languageCode: faker.helpers.arrayElement(["it-IT", "en-US"]),
  title: faker.lorem.words(),
  metadata: {
    "class": "custom-class"
  },
  theme: {
    logoUrl: faker.image.avatar(),
    iconUrl: faker.image.urlPicsumPhotos(),
    accentColor: faker.helpers.arrayElement(["#8153ec", "fe736f"]),
    borderRadius: faker.helpers.arrayElement(["0", "1", "4", "8", "12"]),
    fontFamily: faker.helpers.arrayElement(["Inter", "Poppins", "IBM Plex Sans", "Roboto"]),
    fontFamilyUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    metadata: {}
  },
  notification: null,
  navigation: [
    {
      title: faker.lorem.words(),
      url: faker.internet.url(),
      metadata: {}
    },
    {
      title: faker.lorem.words(),
      url: faker.internet.url(),
      metadata: {}
    },
    {
      title: faker.lorem.words(),
      url: "/it-IT/page",
      metadata: {}
    }
  ],
  links: [
    {
      title: faker.lorem.words(),
      url: faker.internet.url(),
      metadata: {}
    },
    {
      title: faker.lorem.words(),
      url: faker.internet.url(),
      metadata: {}
    },
    {
      title: faker.lorem.words(),
      url: "/it-IT/page",
      metadata: {}
    }
  ],
  authors: [
    {
      title: "Author",
      imageUrl: faker.image.urlPicsumPhotos(),
      description: faker.lorem.sentence(),
      links: [
        {
          title: faker.lorem.words(),
          url: faker.internet.url(),
          metadata: {}
        },
        {
          title: faker.lorem.words(),
          url: faker.internet.url(),
          metadata: {}
        },
        {
          title: faker.lorem.words(),
          url: "/it-IT/page",
          metadata: {}
        }
      ],
      metadata: {}
    }
  ],
  mainLink: {
    title: faker.lorem.words(),
    url: faker.internet.url(),
    metadata: {}
  },
  mainItem: null,
  headCodeInjection: "",
  bodyCodeInjection: "",
  alternates: [
    { languageCode: "it-IT"},
    { languageCode: "en-US"},
    { languageCode: "fr-FR"}
  ]
}

export const handlers = [
  // user
  rest.post(`${apiUrl}websites/v2/websites/www.example.com`, (req, res, ctx) => {
    return res(ctx.json(website));
  }),
];
