const bodyTemplate = document.createElement('template');


       
bodyTemplate.innerHTML = `
      <div>
        <p>Rofl</p>
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
  