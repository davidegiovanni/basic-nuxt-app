export default ({ title, description, image, url, robots, type, theme, twitter } : { title:string, description:string, image:string, url:string, robots: string, type: string, theme?: string, twitter?: string }) => {
  let meta: any = {
    "og:type": type,
    "og:url": url,
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "title":  title,
    "description": description,
    "image": image,
    "robots": robots,
    "theme-color": theme ? theme : '#ffffff',
    "twitter:card": twitter ? twitter : 'summary'
  }
  
  return meta
}