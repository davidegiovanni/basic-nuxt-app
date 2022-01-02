import { lerp, getMousePos, calcWinsize, distance } from '@/utils/utils'
import { EventEmitter } from 'events'


let winsize = calcWinsize()
process.browser ? window.addEventListener('resize', () => winsize = calcWinsize()) : null

let mousepos = {x: 0, y: 0}
process.browser ? window.addEventListener('mousemove', ev => mousepos = getMousePos(ev)) : null

export default class ButtonCtrl extends EventEmitter {
    [x: string]: any
    renderedStyles: any
    state: { hover: boolean }
    rect: any
    distanceToTrigger: number = 0
    onResize: () => void = (() => {})
    DOM: { el: any }
    constructor(el: any) {
        super()
        // DOM elements
        // el: main button
        // text/textinner: inner text elements
        this.DOM = {el: el  }
        // amounts the button will translate
        this.renderedStyles = {
            tx: {previous: 0, current: 0, amt: 0.1},
            ty: {previous: 0, current: 0, amt: 0.1}
        }
        // button state (hover)
        this.state = {
            hover: false
        }
        // calculate size/position
        this.calculateSizePosition()
        // init events
        this.initEvents()
        // loop fn
        requestAnimationFrame(() => this.render())
    }
    calculateSizePosition() {
        // size/position
        this.rect = this.DOM.el.getBoundingClientRect()
        // the movement will take place when the distance from the mouse to the center of the button is lower than this value
        this.distanceToTrigger = this.rect.width*0.7
    }
    initEvents() {
        this.onResize = () => this.calculateSizePosition()
        window.addEventListener('resize', this.onResize)
    }
    render() {
        // calculate the distance from the mouse to the center of the button
        const distanceMouseButton = distance(mousepos.x+window.scrollX, mousepos.y+window.scrollY, this.rect.left + this.rect.width/2, this.rect.top + this.rect.height/2)
        // new values for the translations
        let x = 0
        let y = 0

        if ( distanceMouseButton < this.distanceToTrigger ) {
            if ( !this.state.hover ) {
                this.enter()
            }
            x = (mousepos.x + window.scrollX - (this.rect.left + this.rect.width/2))*.3
            y = (mousepos.y + window.scrollY - (this.rect.top + this.rect.height/2))*.3
        }
        else if ( this.state.hover ) {
            this.leave()
        }

        this.renderedStyles['tx'].current = x
        this.renderedStyles['ty'].current = y
        
        for (const key in this.renderedStyles ) {
            this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt)
        }

        this.DOM.el.style.transform = `translate3d(${this.renderedStyles['tx'].previous}px, ${this.renderedStyles['ty'].previous}px, 0)`

        requestAnimationFrame(() => this.render())
    }
    enter() {
        this.emit('enter')

        this.state.hover = true
    }
    leave() {
        this.emit('leave')
        
        this.state.hover = false
    }
}