export type Website = {
  id: string;
  title: string;
  languageCode: string;
  timeZone: string;
  theme: Theme;
  notification: Notification | null;
  navigation: Link[];
  links: Link[];
  authors: Author[];
  mainLink: Link | null;
  mainItem: BlockItem | null;
  metadata: { [key: string]: string };
};

export type Link = {
  title: string;
  url: string;
  metadata: { [key: string]: string };
};

export type Author = {
  title: string;
  description: string;
  imageUrl: string;
  links: Link[];
  metadata: { [key: string]: string };
};

export type Theme = {
  logoUrl: string;
  iconUrl: string;
  accentColor: string;
  borderRadius: string;
  fontFamily: string;
  fontFamilyUrl: string;
  metadata: { [key: string]: string };
};

export type Notification = {
  title: string;
  description: string;
  link: Link | null;
  metadata: { [key: string]: string };
};

export type Attachment = {
  mediaType: string;
  url: string;
  description: string;
  metadata: { [key: string]: string };
};

export type BlockItem = {
  id: string;
  title: string;
  description: string;
  link: Link | null;
  attachment: Attachment | null;
  metadata: { [key: string]: string };
};

type BlockLayout = "linear" | "grid" | "columns" | "main";

export type Block = {
  id: string;
  layout: BlockLayout;
  feedUrl: string;
  items: BlockItem[];
  metadata: { [key: string]: string };
};

export type Page = {
  id: string;
  slug: string;
  languageCode: string;
  timeZone: string;

  title: string;
  description: string;
  imageUrl: string;
  openGraphTitle: string;
  openGraphDescription: string;
  openGraphImageUrl: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImageUrl: string;

  createTime: string;
  updateTime: string;

  blocks: Block[];
  authors: Author[];
  metadata: { [key: string]: string };
};

export class Feed {
  title: string = ''
  description: string = ''
  items: FeedItem[] = []
}

export class FeedItem {
  id: string = ''
  title: string = ''
  summary: string = ''
  image: string = ''
  date_published: Date = new Date()
  content_html: string = ''
}
