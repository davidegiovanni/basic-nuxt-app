import { z } from "zod";

// link
const websiteLinkSchema = z.object({
  title: z.coerce.string(),
  url: z.coerce.string(),
  metadata: z.record(z.string()),
});
export type WebsiteLink = z.infer<typeof websiteLinkSchema>;

// mediaType
const attachmentMediaTypeSchema = z.enum([
  "image/*",
  "application/vnd.youtube.video",
]);
export type AttachmentMediaType = z.infer<typeof attachmentMediaTypeSchema>;

// attachment
const attachmentSchema = z.object({
  mediaType: attachmentMediaTypeSchema,
  url: z.coerce.string(),
  description: z.coerce.string(),
  caption: z.coerce.string(),
  metadata: z.record(z.string()),
});
export type Attachment = z.infer<typeof attachmentSchema>;

// website notification
const websiteNotificationSchema = z.object({
  title: z.coerce.string(),
  description: z.coerce.string(),
  link: websiteLinkSchema.nullable(),
  metadata: z.record(z.string()),
});
export type WebsiteNotification = z.infer<typeof websiteNotificationSchema>;

// block item
const blockItemSchema = z.object({
  title: z.coerce.string(),
  description: z.coerce.string(),
  link: websiteLinkSchema.nullable(),
  attachment: attachmentSchema.nullable(),
  metadata: z.record(z.string()),
});
export type BlockItem = z.infer<typeof blockItemSchema>;
export const blockItemValidator = (data: unknown) => {
  const parsedData = blockItemSchema.safeParse(data);
  return parsedData;
};

// block layout
const blockLayoutSchema = z.enum(["main", "default"]);
export type BlockLayout = z.infer<typeof blockLayoutSchema>;

const blockItemsLayoutSchema = z.enum(["linear", "grid", "columns", ""]);
export type ItemsLayout = z.infer<typeof blockItemsLayoutSchema>;

// block
const blockSchema = z.object({
  html: z.coerce.string(),

  blockLayout: blockLayoutSchema,
  title: z.coerce.string(),
  description: z.coerce.string(),
  link: websiteLinkSchema.nullable(),
  attachment: attachmentSchema.nullable(),

  itemsLayout: blockItemsLayoutSchema,
  items: z.array(blockItemSchema),
  metadata: z.record(z.string()),
});
export type Block = z.infer<typeof blockSchema>;
export const blockValidator = (data: unknown) => {
  const parsedData = blockSchema.safeParse(data);
  return parsedData;
};

// author
const authorSchema = z.object({
  title: z.coerce.string(),
  description: z.coerce.string(),
  imageUrl: z.coerce.string(),
  links: z.array(websiteLinkSchema),
  metadata: z.record(z.string()),
});
export type Author = z.infer<typeof authorSchema>;
export const authorValidator = (data: unknown) => {
  const parsedData = authorSchema.safeParse(data);
  return parsedData;
};

const alternateWebsiteSchema = z.object({
  languageCode: z.coerce.string()
})
export type AlternateWebsite = z.infer<typeof alternateWebsiteSchema>
// website theme
const websiteThemeSchema = z.object({
  logoUrl: z.coerce.string(),
  iconUrl: z.coerce.string(),
  accentColor: z.coerce.string(),
  borderRadius: z.coerce.string(),
  fontFamily: z.coerce.string(),
  fontFamilyUrl: z.coerce.string(),
  metadata: z.record(z.string()),
});
export type WebsiteTheme = z.infer<typeof websiteThemeSchema>;

// website
const websiteSchema = z.object({
  id: z.coerce.string(),
  languageCode: z.coerce.string(),

  title: z.coerce.string(),

  theme: websiteThemeSchema.nullable(),

  notification: websiteNotificationSchema.nullable(),
  navigation: z.array(websiteLinkSchema),
  links: z.array(websiteLinkSchema),
  authors: z.array(authorSchema),
  mainLink: websiteLinkSchema.nullable(),
  mainItem: blockItemSchema.nullable(),

  metadata: z.record(z.string()),

  alternates: z.array(alternateWebsiteSchema),

  headCodeInjection: z.coerce.string(),
  bodyCodeInjection: z.coerce.string(),
});
export type Website = z.infer<typeof websiteSchema>;
export const websiteValidator = (data: unknown) => {
  const parsedData = websiteSchema.safeParse(data);
  return parsedData;
};

// page
const pageSchema = z.object({
  id: z.coerce.string(),
  slug: z.coerce.string(),
  languageCode: z.coerce.string(),

  title: z.coerce.string(),
  description: z.coerce.string(),
  imageUrl: z.coerce.string(),
  openGraphTitle: z.coerce.string(),
  openGraphDescription: z.coerce.string(),
  openGraphImageUrl: z.coerce.string(),
  twitterTitle: z.coerce.string(),
  twitterDescription: z.coerce.string(),
  twitterImageUrl: z.coerce.string(),

  blocks: z.array(blockSchema),
  authors: z.array(authorSchema),
  metadata: z.record(z.string()),
});
export type Page = z.infer<typeof pageSchema>;
export const pageValidator = (data: unknown) => {
  const parsedData = pageSchema.safeParse(data);
  return parsedData;
};

const feedItemSchema =  z.object({
  id:  z.coerce.string(),
  title: z.coerce.string(),
  summary: z.coerce.string().optional(),
  image: z.coerce.string().optional(),
  date_published: z.coerce.string().optional(),
  date_modified: z.coerce.string().optional(),
  content_html: z.coerce.string().optional()
})
export type FeedItem = z.infer<typeof feedItemSchema>

const feedSchema = z.object({
  title: z.coerce.string(),
  description: z.coerce.string(),
  items: z.array(feedItemSchema),
})
export type Feed = z.infer<typeof feedSchema>
export const feedValidator = (data: unknown) => {
  const parsedData = feedSchema.safeParse(data);
  return parsedData;
};

// revas error
export interface RevasError {
  code: number;
  message: string;
}

//UI Models

// link UI
const websiteLinkUISchema = z.object({
  title: z.coerce.string(),
  url: z.coerce.string(),
  metadata: z.record(z.string()),
});
export type WebsiteLinkUI = z.infer<typeof websiteLinkUISchema>;

// link
const socialLinkUISchema = z.object({
  type: z.coerce.string(),
  title: z.coerce.string(),
  url: z.coerce.string(),
  metadata: z.record(z.string()),
});
export type SocialLinkUI = z.infer<typeof socialLinkUISchema>;

// mediaType UI
const attachmentMediaUITypeSchema = z.enum([
  "image/*",
  "application/vnd.youtube.video",
]);
export type AttachmentMediaUIType = z.infer<typeof attachmentMediaUITypeSchema>;

// attachment UI
const attachmentUISchema = z.object({
  mediaType: attachmentMediaUITypeSchema,
  url: z.coerce.string(),
  description: z.coerce.string(),
  caption: z.coerce.string(),
  metadata: z.record(z.string()),
});
export type AttachmentUI = z.infer<typeof attachmentUISchema>;

// website notification UI
const websiteNotificationUISchema = z.object({
  title: z.coerce.string(),
  description: z.coerce.string(),

  linkTitle: z.coerce.string(),
  linkUrl: z.coerce.string(),
  linkMetadata: z.record(z.string()),

  metadata: z.record(z.string()),
});
export type WebsiteNotificationUI = z.infer<typeof websiteNotificationUISchema>;

// block item UI
const blockItemUISchema = z.object({
  title: z.coerce.string(),
  description: z.coerce.string(),

  linkTitle: z.coerce.string(),
  linkUrl: z.coerce.string(),
  linkMetadata: z.record(z.string()),

  attachmentMediaType: attachmentMediaUITypeSchema,
  attachmentUrl: z.coerce.string(),
  attachmentDescription: z.coerce.string(),
  attachmentCaption: z.coerce.string(),
  attachmentMetadata: z.record(z.string()),

  metadata: z.record(z.string()),
});
export type BlockItemUI = z.infer<typeof blockItemUISchema>;
export const blockItemUIValidator = (data: unknown) => {
  const parsedData = blockItemUISchema.safeParse(data);
  return parsedData;
};

// block layout UI
const blockLayoutUISchema = z.enum(["main", "default"]);
export type BlockUILayout = z.infer<typeof blockLayoutSchema>;

const blockItemsLayoutUISchema = z.enum(["linear", "grid", "columns", ""]);
export type ItemsUILayout = z.infer<typeof blockItemsLayoutSchema>;

// block UI
const blockUISchema = z.object({
  html: z.coerce.string(),

  blockLayout: blockLayoutUISchema,
  title: z.coerce.string(),
  description: z.coerce.string(),

  linkTitle: z.coerce.string(),
  linkUrl: z.coerce.string(),
  linkMetadata: z.record(z.string()),

  attachmentMediaType: attachmentMediaUITypeSchema,
  attachmentUrl: z.coerce.string(),
  attachmentDescription: z.coerce.string(),
  attachmentCaption: z.coerce.string(),
  attachmentMetadata: z.record(z.string()),

  itemsLayout: blockItemsLayoutUISchema,
  items: z.array(blockItemUISchema),
  metadata: z.record(z.string()),
});
export type BlockUI = z.infer<typeof blockUISchema>;
export const blockUIValidator = (data: unknown) => {
  const parsedData = blockUISchema.safeParse(data);
  return parsedData;
};

// author UI
const authorUISchema = z.object({
  title: z.coerce.string(),
  description: z.coerce.string(),

  attachmentMediaType: attachmentMediaUITypeSchema,
  attachmentUrl: z.coerce.string(),
  attachmentDescription: z.coerce.string(),
  attachmentCaption: z.coerce.string(),
  attachmentMetadata: z.record(z.string()),

  links: z.array(websiteLinkUISchema),
  metadata: z.record(z.string()),
});
export type AuthorUI = z.infer<typeof authorUISchema>;
export const authorUIValidator = (data: unknown) => {
  const parsedData = authorUISchema.safeParse(data);
  return parsedData;
};

// website theme UI
const websiteThemeUISchema = z.object({
  logoUrl: z.coerce.string(),
  iconUrl: z.coerce.string(),
  accentColor: z.coerce.string(),
  borderRadius: z.coerce.string(),
  fontFamily: z.coerce.string(),
  fontFamilyUrl: z.coerce.string(),
  metadata: z.record(z.string()),
});
export type WebsiteUITheme = z.infer<typeof websiteThemeUISchema>;

// website UI
const websiteUISchema = z.object({
  id: z.coerce.string(),
  languageCode: z.coerce.string(),

  title: z.coerce.string(),

  theme: websiteThemeSchema.nullable(),

  notification: websiteNotificationUISchema.nullable(),
  navigation: z.array(websiteLinkUISchema),
  links: z.array(websiteLinkUISchema),
  authors: z.array(authorUISchema),
  mainLink: websiteLinkUISchema.nullable(),
  mainItem: blockItemUISchema.nullable(),

  metadata: z.record(z.string()),

  headCodeInjection: z.coerce.string(),
  bodyCodeInjection: z.coerce.string(),
});
export type WebsiteUI = z.infer<typeof websiteUISchema>;
export const websiteUIValidator = (data: unknown) => {
  const parsedData = websiteSchema.safeParse(data);
  return parsedData;
};

const websiteResponseSchema = z.object({
  website: websiteSchema
})
export type WebsiteResponse = z.infer<typeof websiteResponseSchema>

export const websiteResponseValidator = (data: unknown) => {
  const parsedData = websiteResponseSchema.safeParse(data);
  return parsedData;
};

// page UI
const pageUISchema = z.object({
  id: z.coerce.string(),
  slug: z.coerce.string(),
  languageCode: z.coerce.string(),

  title: z.coerce.string(),
  description: z.coerce.string(),
  imageUrl: z.coerce.string(),
  openGraphTitle: z.coerce.string(),
  openGraphDescription: z.coerce.string(),
  openGraphImageUrl: z.coerce.string(),
  twitterTitle: z.coerce.string(),
  twitterDescription: z.coerce.string(),
  twitterImageUrl: z.coerce.string(),

  blocks: z.array(blockUISchema),
  authors: z.array(authorUISchema),
  metadata: z.record(z.string()),
});
export type PageUI = z.infer<typeof pageUISchema>;
export const pageUIValidator = (data: unknown) => {
  const parsedData = pageSchema.safeParse(data);
  return parsedData;
};

export type Attributes = { [key: string]: string | number | boolean };

const feedItemUISchema =  z.object({
  title: z.coerce.string(),
  description: z.coerce.string(),
  attachmentMediaType: z.coerce.string(),
  attachmentUrl: z.coerce.string(),
  attachmentCaption: z.coerce.string(),
  attachmentDescription: z.coerce.string(),
  attachmentMetadata: z.record(z.string()),
  publishedOn: z.coerce.string(),
  content: z.coerce.string(),
  metadata: z.record(z.string()),
  url: z.coerce.string(),
})
export type FeedItemUI = z.infer<typeof feedItemUISchema>
