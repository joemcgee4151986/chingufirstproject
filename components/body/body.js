const bodyTemplate = document.createElement('template');


       
bodyTemplate.innerHTML = `
<style>
*{
box-sizing: border-box;
}
@media screen and (max-width: 600px) {
  .column {
    float: left;
  width: 25%;
  padding: 10px;
  }
}
.column {
  float: left;
  width: 25%;
}
</style>
<div class="row">
<div class="column">f</div>
<div class="column">f</div>
<div class="column">f</div>
<div class="column">f</div>
</div> 
      `;
 

  class body extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'closed' });
  
      shadowRoot.appendChild(bodyTemplate.content);
    }
  }
  
  customElements.define('body-component', body);
  