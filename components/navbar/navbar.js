class navbar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <navbar>
        <style>
       
li{
    display: inline;
    font-size: 40px;
    float: left;
    margin:0 auto;
    
}
a{
  
    padding: 8px;
    background-color: #383B3C;
    text-decoration: none;
    color:white;
   
}
navbar{
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 600px) {
    .column {
      width: 100%;
    }
  }
        </style>
        <div class="topnav">
        <ul style="list-style-type:none;">
            <li><a href = "#">Homepage</a></li>
            <li><a href = "#">About Us</a></li>
            <li><a href = "#">Services</a></li>
            <li><a href = "#">Contact</a></li>
            <li><a href = "#">External </a></li>
        </ul>
    </div>
      `;
    }
  }
  
  customElements.define('navbar-component', navbar);
  