export default function makeHome() {

    const home = document.createElement('div');
    home.classList.add('homeTab');

    const title = document.createElement('h1');  
    title.textContent = 'Mario & Luigi\'s Italian Restuarant';

    const tagline = document.createElement('p');
    tagline.textContent = 'The best japanese-made italian restuarant in the world!';
    
    const about = document.createElement('p');
    about.textContent = 'Mario and Luigi\'s, founded in 1985 in Brooklyn NY, is the best italian restuarant made by japanese plumbers';

/*
<img src="/img/logo.jpg">
<p>Come and try our mushroom pasta!</p>
*/

    home.appendChild(title);
    home.appendChild(tagline);
    home.appendChild(about);
    return home;
};

