import { useEffect } from "react";


export default function DefaultTheme() {
    const DEFAULT_THEME: Record<string, any> = {
        "--primary-color": "black",
        "--darker-primary-color": "black",
        "--primary-contrast-color": "white",
        "--border-radius": `4px`,
        "--border-radius-inner": `2px`,
        "--custom-font": `'Inter', sans-serif`,
        "font-family": `'Inter', sans-serif`,
      };

  useEffect(() => {
    for (const key in DEFAULT_THEME) {
      if (DEFAULT_THEME.hasOwnProperty(key)) {
        document.body.style.setProperty(key, DEFAULT_THEME[key]);
      }
    }
    const links = document.getElementsByTagName('link');
    const fontLinks = Array.from(links).filter(link => link.rel  === 'stylesheet' && link.href.includes("https://fonts.googleapis.com/"))

    if (fontLinks.length === 0) {
      const fontLink = document.createElement('link');
      fontLink.rel = 'stylesheet';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
      document.body.appendChild(fontLink);
    }

    const faviconLinks = Array.from(links).filter(link => link.type === "image/x-icon" && link.rel  === 'icon')

    if (faviconLinks.length === 0) {
      const faviconLink = document.createElement('link');
      faviconLink.type = 'image/x-icon';
      faviconLink.rel = 'icon';
      faviconLink.href = '/default-favicon.png';
      document.head.appendChild(faviconLink);
    }

    document.documentElement.classList.add('light')
  });

  return null
}
