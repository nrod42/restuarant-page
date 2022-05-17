import makeHome from './home.js';
import makeMenu from './menu.js';
import makeContact from './contact.js';
import './style.css';

const content = document.getElementById('content');

//Crears navigation bar with tab switching buttons
const navbar = document.createElement('div');
navbar.classList.add('navbar');
content.appendChild(navbar);

//Container where all the generated pages will be in
const tab = document.createElement('div');
tab.classList.add('tab');
content.appendChild(tab);
tab.appendChild(makeHome());

//Home Button
const homeBtn = document.createElement('button');
homeBtn.textContent = 'Home';
navbar.appendChild(homeBtn);
homeBtn.addEventListener('click', switchTab);
homeBtn.addEventListener('click', switchButton);

//Menu Button
const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
navbar.appendChild(menuBtn);
menuBtn.addEventListener('click', switchTab);
menuBtn.addEventListener('click', switchButton);

//Contact Us Button
const contactBtn = document.createElement('button');
contactBtn.textContent = 'Contact Us';
navbar.appendChild(contactBtn);
contactBtn.addEventListener('click', switchTab);
contactBtn.addEventListener('click', switchButton);

const footer = document.createElement('footer');
footer.innerHTML = "By Nigel Rodriguez";
content.appendChild(footer);



//Wipes currrent tab and inserts selected tab
function switchTab (e) {
    tab.removeChild(tab.firstElementChild);
    e.target.textContent == 'Home' ? tab.appendChild(makeHome()) 
        : e.target.textContent == 'Menu' ? tab.appendChild(makeMenu())
        : tab.appendChild(makeContact());
}

//Changes button background when clicked
function switchButton (e) {
    e.target.classList.add('hitBlock');
};

//fix main background when zooming in
//gitignore file?