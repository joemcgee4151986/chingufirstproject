class navbar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <navbar>
      <style>
      nav{
        position: sticky;
        display: flex;
  align-items: center;
      }
ul{
  overflow: hidden;
  ext-decoration: none;
  color:white;
  background-color: #383B3C;
}
       
li{
  float: left;
}

li a {
  display: block;
  padding: 8px;
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
        <nav>
        <div class="topnav">
        <ul style="list-style-type:none;">
            <li><a href = "#">Homepage</a></li>
            <li><a href = "#">About Us</a></li>
            <li><a href = "#">Services</a></li>
            <li><a href = "#">Contact</a></li>
            <li><a href = "#">External </a></li>
        </ul>
        <button class="burger-menu" id="burger-menu">
        <ion-icon class="bars" name="menu-outline"></ion-icon>
        </button>
        <section = section1>
        <header id = header></header>
        <img src = "https://images.unsplash.com/photo-1688408958776-00a5c1b17c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80">
    </div>
    </nav>
      `;
    }
  }
  
  customElements.define('navbar-component', navbar);
  