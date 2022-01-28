import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Map number x from range [a, b] to [c, d]
const map = (x: number, a: number, b: number, c: number, d: number) => (x - a) * (d - c) / (b - a) + c;

// Linear interpolation
const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

const calcWinsize = () => {
    return {width: process.browser ? window.innerWidth : 0, height: process.browser ? window.innerHeight : 0};
};

// Gets the mouse position
const getMousePos = (e: { clientX: any; clientY: any; }) => {
    return { 
        x : e.clientX, 
        y : e.clientY 
    };
};

const distance = (x1: number,y1: number,x2: number,y2: number) => {
    var a = x1 - x2;
    var b = y1 - y2;

    return Math.hypot(a,b);
}

const span = (text: any, index: any) => {
    const node = document.createElement('span')
  
    node.textContent = text
    node.style.setProperty('--index', index)
  
    return node
  }

const splitByLetter = (text: any) =>
  [...text].map(span)

const splitByWord = (text: any) =>
  text.split(' ').map(span)

// Generate a random float.
const getRandomFloat = (min: number, max: number) => (Math.random() * (max - min) + min).toFixed(2);

const splitText = (selector: string, type: string) => {
    const splitTargets = document.getElementsByClassName(selector)

    for (let node of splitTargets) {
        let nodes = null
    
        if (type === 'letter') {
            nodes = splitByLetter((node as HTMLElement).innerText)
        }
        else if (type === 'word') {
            nodes = splitByLetter((node as HTMLElement).innerText)
        }
    
        if (nodes) {
            node.firstChild?.replaceWith(...nodes)
        }
    }
}

const smoothScroll = (content: any, viewport: any, smoothness: any) => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }
    content = gsap.utils.toArray(content)[0];
    smoothness = smoothness || 1;
  
    gsap.set(viewport || content.parentNode, {overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0});
    gsap.set(content, {overflow: "visible", width: "100%"});
  
    let getProp = gsap.getProperty(content),
      setProp = gsap.quickSetter(content, "y", "px"),
      setScroll = ScrollTrigger.getScrollFunc(window),
      removeScroll = () => content.style.overflow = "visible",
      killScrub = (trigger: any) => {
        let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
        scrub && scrub.kill();
        trigger.animation.progress(trigger.progress);
      },
      height: number, isProxyScrolling: boolean;
  
    function refreshHeight() {
      height = content.clientHeight;
      content.style.overflow = "visible"
      document.body.style.height = height + "px";
      return height - document.documentElement.clientHeight;
    }
  
    ScrollTrigger.addEventListener("refresh", () => {
      removeScroll();
      requestAnimationFrame(removeScroll);
    })
    ScrollTrigger.defaults({scroller: content});
    ScrollTrigger.prototype.update = (p: any) => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)
  
    ScrollTrigger.scrollerProxy(content, {
      scrollTop(value: any) {
        if (arguments.length) {
          isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
          setProp(-value);
          setScroll(value);
          return;
        }
        return -getProp("y");
      },
      scrollHeight: () => document.body.scrollHeight,
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      }
    });
  
    return ScrollTrigger.create({
      animation: gsap.fromTo(content, {y:0}, {
        y: () => document.documentElement.clientHeight - height,
        ease: "none",
        onUpdate: ScrollTrigger.update
      }),
      scroller: window,
      invalidateOnRefresh: true,
      start: 0,
      end: refreshHeight,
      refreshPriority: -999,
      scrub: smoothness,
      onUpdate: (self: any) => {
        if (isProxyScrolling) {
          killScrub(self);
          isProxyScrolling = false;
        }
      },
      onRefresh: killScrub // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
    });
  }

const fluidType = (minType: number, maxType: number, minScreen: number, maxScreen: number, lineHeightMultiplier: number) => {
  // 32px + (96 - 32) * ((100vw - 300px) / (2400 - 300))
  const fluidSizeFormula = `font-size: calc(${minType}px + (${maxType} - ${minType}) * ((100vw - ${minScreen}px) / (${maxScreen} - ${minScreen}))); line-height: calc((${minType}px + (${maxType} - ${minType}) * ((100vw - ${minScreen}px) / (${maxScreen} - ${minScreen}))) * ${lineHeightMultiplier});`
  return fluidSizeFormula
}

export { 
    map, 
    lerp, 
    calcWinsize, 
    getMousePos,
    distance,
    getRandomFloat,
    splitByLetter,
    splitByWord,
    splitText,
    smoothScroll,
    fluidType
};