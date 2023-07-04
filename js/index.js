const template = document.createElement('template');

template.innerHTML = `
<navbar>    
<div class="topnav"
    <ul style="list-style-type:none;">
        <li><a href = "#">Homepage</a></li>
        <li><a href = "#">About Us</a></li>
        <li><a href = "#">Services</a></li>
        <li><a href = "#">Contact</a></li>
        <li><a href = "#">External </a></li>
    </ul>
</div>
`;

document.body.appendChild(template.content);
