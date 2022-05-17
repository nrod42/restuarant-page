import makeNav from './nav.js';
import makeHome from './home.js';
import makeMenu from './menu.js';
import makeContact from './contact.js';
import './style.css';

const content = document.getElementById('content');

//Creates navigation bar with tab switching buttons
content.appendChild(makeNav());

//Adds event listeners to the home button
const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', switchTab);
homeBtn.addEventListener('click', switchButton);

//Adds event listeners to the menu button
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', switchTab);
menuBtn.addEventListener('click', switchButton);

//Adds event listeners to the contact us button
const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', switchTab);
contactBtn.addEventListener('click', switchButton);

//Container div where all the generated pages will be in
const tab = document.createElement('div');
tab.classList.add('tab');
content.appendChild(tab);
tab.appendChild(makeHome());

//Footer
const footer = document.createElement('footer');
footer.innerHTML = "By: Nigel Rodriguez";
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