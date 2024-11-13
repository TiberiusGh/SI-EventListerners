import { template } from './my-div-box-template.js'

customElements.define('my-div-box',
    class extends HTMLElement {
        #divBox
        #colorOne
        #colorTwo
        #boundDivBoxOver
        #boundDivBoxOut

        constructor () {
            super()
            this.attachShadow({mode: 'open'})
            this.shadowRoot.appendChild(template.content.cloneNode(true))
            this.#divBox = this.shadowRoot.querySelector('#divBox')

        }

        static get observedAttributes () {
            return ['colorone', 'colortwo']
        }

        attributeChangedCallback (name, oldValue, newValue) {
            if (name === 'colorone' && oldValue !== newValue){
                this.#colorOne = newValue
            } else if (name === 'colortwo' && oldValue !== newValue) {
                this.#colorTwo = newValue
                this.#setColor(newValue)
            }
        }

        connectedCallback () {
            this.#divBox.addEventListener('mouseover',
                this.#boundDivBoxOver = (event) => {
                    this.#setColor(this.#colorOne)
                }
            )

            this.#divBox.addEventListener('mouseleave', 
                this.#boundDivBoxOut = (event) => {
                    this.#setColor(this.#colorTwo)
                }
            )
        }

        disconnectedCallback () {
            this.#divBox.removeEventListener('', this.#boundDivBoxOver)
            this.#divBox.removeEventListener('', this.#boundDivBoxOut)
        }

        #setColor (color) {
            this.#divBox.style.background = color
        }
    }
)