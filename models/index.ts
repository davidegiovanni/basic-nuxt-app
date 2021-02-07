// Contents

export interface Section {
  contentSlug?: string
  directorySlug?: string
  content?: Content
  directory?: Directory
  contents?: Content[]
  error?: boolean
}

export interface Directory {
  id?: string
  slug: string
  title: string
  description: string
  language?: string
  metadata?: Metadata[]
}

export interface Content {
  id?: string
  uuid?: string
  slug: string
  title: string
  description: string
  thumbnail: string
  language?: string
  metadata?: Metadata[]
  markdown: string
  publishedOn?: Date
}

export interface Metadata {
  key: string
  value: string
}

// Website

export class WebData {
  publicKey = ''
  organization = new OrganizationWebData()
  website = new WebsiteWebData()
  theme = new ThemeWebData()
  members = new MembersWebData()
}

export class ThemeWebData {
  primaryColor = ''
  invertPrimaryColor = ''
  fontFamily = ''
  fontFamilyUrl = ''
  borderRadius = ''
}

export class MembersWebData {
  policy = ''
}

export class OrganizationWebData {
  title = ''
  description = ''
  name = ''
  logoUrl = ''
  faviconUrl = ''
  email = ''
  phone = ''
  iban = ''
  taxCode = ''
  vat = ''
  legalEmail = ''
  address = ''
  socials: LinkWebData[] = []
}

export class LinkWebData {
  label = ''
  href = ''
  directory = ''
  content = ''
}

export class WebsiteWebData {
  footer = new NavbarWebData()
  navbar = new NavbarWebData()
  cta = new SectionWebData()
  home = new PageWebData()
}

export class NavbarWebData {
  primaryAction = new LinkWebData()
  secondaryAction = new LinkWebData()
  items: LinkWebData[] = []
}

export class SectionWebData {
  directory = ''
  content = ''
  title = ''
  description = ''
  image = ''
  primaryAction = new LinkWebData()
  secondaryAction = new LinkWebData()
}

export interface UISectionWebData {
  directory: Directory | null;
  content: Content | null;
  contents: Content[] | null;
  title: string;
  description: string;
  image: string;
  primaryAction:  LinkWebData;
  secondaryAction:  LinkWebData;
}

export class PageWebData {
  header = new SectionWebData()
  sections: SectionWebData[] = []
}
