import { PolymerElement, html } from '@polymer/polymer';
import template from './template.html';
import style from './style.styl';
import '@polymer/app-route/app-route.js';
import '@polymer/app-route/app-location.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
class BeezApp extends PolymerElement {
     static get template()   {
         return html([`
           ${style}
           ${template}
    `]);
}
static get observers() {
    return [
      '_routePageChanged(routeData.page)',
    ];
  }
    static get properties() { return {
        page: {
            type: String,
            notify: true,
            observer: '_pageChanged'
          },
          routeData: Object,
        
        app: {
            type: String,
            value: 'Beeeez'
        },
       }}

    _routePageChanged(page) {   
        this.page = page || 'home';
    }
    _pageChanged(page){
        switch (page) {
            case 'home':
                return import('../beez-home')
                break;
            case 'tutz':
                return import('../beez-tutz')
                break;
        }
    }
   
}

window.customElements.define('beez-app', BeezApp);