export default function makeNav () {

    //Creates navigation bar with tab switching buttons
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    navbar.id = 'navbar'

    //Home Button
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.id = 'homeBtn';

    //Menu Button
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.id = 'menuBtn';

    //Contact Us Button
    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact Us';
    contactBtn.id = 'contactBtn';

    navbar.appendChild(homeBtn);
    navbar.appendChild(menuBtn);
    navbar.appendChild(contactBtn);

    return navbar;

}