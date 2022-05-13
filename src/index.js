import makeHome from './home.js';
import makeMenu from './menu.js';
import makeContact from './contact.js';
import './style.css';

const content = document.getElementById('content');

const navbar = document.createElement('div');
navbar.classList.add('navbar');
content.appendChild(navbar);

const tab = document.createElement('div');
tab.classList.add('tab');
content.appendChild(tab);
tab.appendChild(makeHome());


//Home Tab
const homeBtn = document.createElement('button');
homeBtn.textContent = 'Home';
navbar.appendChild(homeBtn);
homeBtn.addEventListener('click', switchTab)


//Menu Tab
const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
navbar.appendChild(menuBtn);
menuBtn.addEventListener('click', switchTab)


//Contact Tab
const contactBtn = document.createElement('button');
contactBtn.textContent = 'Contact Us';
navbar.appendChild(contactBtn);
contactBtn.addEventListener('click', switchTab)


//Wipes currrent tab and inserts selected tab
function switchTab (e) {
    tab.removeChild(tab.firstElementChild);
    e.target.textContent == 'Home' ? tab.appendChild(makeHome()) 
    : e.target.textContent == 'Menu' ? tab.appendChild(makeMenu())
    : tab.appendChild(makeContact());
}