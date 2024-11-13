import './webcomponents/my-div-box'

const myCustomElement = document.createElement('my-div-box')
myCustomElement.setAttribute('colorone', 'black')
myCustomElement.setAttribute('colortwo', 'red')

const body = document.querySelector('body')

body.appendChild(myCustomElement)