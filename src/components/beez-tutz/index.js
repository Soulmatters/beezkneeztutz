import { PolymerElement, html } from '@polymer/polymer';
import template from './template.html';
import style from './style.styl';
import  Prismic  from 'prismic-javascript';
import '@polymer/iron-image';
class BeezTutz extends PolymerElement {
     static get template()   {
         return html([`
           <style>${style}</style>
           ${template}
    `]);
}
    static get properties() { return {
        apiEndpoint: {
            type: String,
            value: 'https://beezkneeztutorials.prismic.io/api/v2'
         },
         tutz: {
             type: Array,
             value: () => []
         }
    }}
    ready(){
        super.ready();
        	
	
        Prismic.getApi(this.apiEndpoint).then(api => {
	
            api.query(
                Prismic.Predicates.at('document.type', 'blog'),
            ).then(response => {
              this.tutz = response.results;
              console.log(response.results)
            });
        })
}
}
window.customElements.define('beez-tutz', BeezTutz);