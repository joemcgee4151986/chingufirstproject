const footerTemplate = document.createElement('template');


       
footerTemplate.innerHTML = `
    <style>
    .footer {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    </style>
    <div id = footer>Copyright@ 2023</div>
       
        `;
    
  
  
  class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'closed' });
  
      shadowRoot.appendChild(footerTemplate.content);
    }
  }
  
  customElements.define('footer-component', Footer);
  