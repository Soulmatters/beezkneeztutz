import { PolymerElement, html } from '@polymer/polymer';
import template from './template.html'
import style from './style.styl'
class BeezHome extends PolymerElement {
     static get template()   {
         return html([`
           ${style}
           ${template}
    `]);
}
    static get properties() { return {
    }}
}
window.customElements.define('beez-home', BeezHome);