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
  
  // type: external > https://example.com/lol
  // type: page > revasos://page?pageName=...
  // type: content > revasos://content?directorySlug=....&contentSlug=...
  // type: directory > revasos://directory?directorySlug=....
  
  export class WebLinkModel {
    title: string = ''
    url: string = ''
  }
  
  // HeroWebSectionType   WebSectionType = "hero"
  // SimpleWebSectionType WebSectionType = "simple"
  
  export class WebSectionModel {
    type: string = '' // hero or simple
    title: string = ''
    description: string = ''
    image: string = ''
    itemsUrl: string = '' // type: directory > revasos://directory?directorySlug=....
    primaryLink: WebLinkModel = {
      title: '',
      url: ''
    }
    secondaryLink: WebLinkModel = {
      title: '',
      url: ''
    }
  }
  
  export class WebPageModel {
    id: string = ''
    organizationId: string = ''
    websiteId: string = ''
    createTime: Date = new Date()
    updateTime: Date = new Date()
    name: string = ''
    title: string = ''
    description: string = ''
    image: string = ''
    sections: WebSectionModel[] = []
  }
  
  export class Metadata {
    key: string = ''
  }
  
  export class WebNav {
    links: WebLinkModel[] = []
    primaryLink: WebLinkModel = new WebLinkModel()
    secondaryLink: WebLinkModel = new WebLinkModel()
  }
  
  export class OrganizationModel {
    id: string = ''
    title: string = ''
    description: string = ''
    alias: string = ''
    picture: string = ''
    name: string = ''
    email: string = ''
    phone: string = ''
    taxCode: string = ''
    vatCode: string = ''
    legalEmail: string = ''
    legalAddress: Address = new Address()
  }
  
  export class Address {
    street: string = ''
    details: string = ''
    postalCode: string = ''
    city: string = ''
    province: string = ''
    country: string = ''
    notes: string = ''
  }
  
  export class Website {
    id: string = ''
    organizationId: string = ''
    name: string = ''
    languageCode: string = ''
    theme: WebsiteTheme = new WebsiteTheme()
    headerNav: WebNav = new WebNav()
    headerSection: WebSectionModel = new WebSectionModel()
    footerNav: WebNav = new WebNav()
    footerSection: WebSectionModel = new WebSectionModel()
    title: string = ''
    description: string = ''
    image: string = ''
    socialsLinks: WebLinkModel[] = []
    privacyMarkdown: string = ''
    privacyHtml: string = ''
    segmentPublicKey: string = ''
  }
  
  export class WebsiteTheme {
    templateName: string = ''
    logoUrl: string = ''
    faviconUrl: string = ''
    primaryColor: string = ''
    invertedPrimaryColor: string = ''
    borderRadius: string = ''
    fontFamily: string = ''
    fontFamilyUrl: string = ''
  }
  
  export class WebsiteResponse {
    website: Website = new Website()
    organization: OrganizationModel = new OrganizationModel()
    languageCodes: string[] = []
    privacyHtml: string = ''
  }
  
  export class PageResponse {
    page: WebPageModel = new WebPageModel()
  }
  
  export class MetadataObject {
    titleTemplate: string = ''
    title: string = ''
    description: string = ''
    image: string = ''
  }
  