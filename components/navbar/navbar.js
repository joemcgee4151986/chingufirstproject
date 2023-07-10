class navbar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <navbar>
      <style>
      nav {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:  #333;
      }
      ul li {
        list-style: none;
        display: inline;
      }
      a {
        text-decoration: none;
        color: white;
      }
      .btn {
        background-color:  #333;
        color: white;
        border: 1px solid gray;
        padding: 6px 28px;
      }
      .btn:hover {
        background-color: #49505F;
        
      }
.burger-menu {
  color: var(--primary-color);
  font-size: 2rem;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  display: none;
}

@media only screen and (max-width: 800px) {
  header nav {
    
  }
      </navbar>
        </style>
        <header>
        <nav>
        <ul id ="navbar">
          <li>
            <a href="#" button class = "btn">Home</a>
          </li>
          <li>
            <a href="#" button class = "btn">About</a>
          </li>
          <li>
            <a href="#" button class = "btn">Services</a>
          </li>
          <li>
          <a href="#" button class = "btn">Contact</a>
        </li>
        <li>
          <a href="#" button class = "btn">External</a>
        </li>
        </ul>
        </nav>
        </header>
      `;
    }
  }
  
  customElements.define('navbar-component', navbar);
  