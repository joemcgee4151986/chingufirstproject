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
      .topNavbar .icon {
        display: none;
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
      .dropdown-content a:hover {
        background-color: #ddd;
        color: black;
      }
      .dropdown .dropbtn {
        font-size: 17px;    
        border: none;
        outline: none;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
      }
      .topNavbar.responsive .dropdown {float: none;}
      .topNavbar.responsive .dropdown-content {position: relative;}
      .topNavbar.responsive .dropdown .dropbtn {
        display: block;
        width: 100%;
        text-align: left;
 

@media only screen and (max-width: 768px) {
  .topNavbar a:not(:first-child), .dropdown .dropbtn {
    display: none;
  }
  .topNavbar a.icon {
    float: right;
    display: block;
    .topNavbar.responsive .dropdown .dropbtn {
      display: block;
      width: 100%;
      text-align: left;
}
        </style>
        <div class="topNavbar" id = myTopNavbar>
          <div class="dropbtn">
          <a href="#home" class="active">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <div class="dropdown">
          <button class="dropbtn">Dropdown</button>
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
  