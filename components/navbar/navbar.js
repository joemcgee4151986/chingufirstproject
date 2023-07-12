class navbar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
      function myFunction() {
        var x = document.getElementById("myTopNavbar");
        if (x.className === "topNavbar") {
          x.className += " responsive";
        } else {
          x.className = "topNavbar";
        }
      }
      .topNavbar {
        overflow: hidden;
        background-color: #333;
      }
      .topNavbar a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      }
      .dropdown {
        float: left;
        overflow: hidden;
      }
      .dropdown-content{
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        z-index: 1;
      }
      .dropdown-content a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
      }
      .dropdown:hover .dropdown-content {
        display: block;
      }
 

@media only screen and (max-width: 768px) {
  
}
        </style>
        <div class="topNavbar" id = myTopNavbar>
          <div class="dropbtn">
          <a href="#home" class="active">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <div class="dropdown">
          <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
      </div>
      `;
    }
  }
  
  customElements.define('navbar-component', navbar);
  