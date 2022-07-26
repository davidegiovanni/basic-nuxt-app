export default ({ canonical, alternate } : { canonical:string, alternate?:string }) => {
    let links: any = [
      {
        rel: 'canonical',
        href: canonical,
      }
    ]
    if (alternate) {
      links.push({
        rel: 'alternate',
        href: alternate,
      })
    }
    return links
}