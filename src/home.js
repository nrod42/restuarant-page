import Logo from './img/ml-logo.png';

const makeHome = () => {

    const home = document.createElement('div');
    home.classList.add('homeTab');

    const mlLogo = new Image();
    mlLogo.src = Logo;
    mlLogo.classList.add('mlLogo');
    
    const title = document.createElement('h1');  
    title.textContent = 'Italian Restuarant';

    const tagline = document.createElement('p');
    tagline.textContent = 'Authentic japanese-made italian cuisine';
    
    const about = document.createElement('p');
    about.textContent = 'Founded in 1985 in Brooklyn, NY by Japanese brothers, Mario & Luigi, this 5 star restuarant is often regarded as THE best italian restuarant (made by japanese plumbers) in the world!'; 
    
    //Restuarant Hours Div
    const hours = document.createElement('div');
    hours.classList.add('hours');

    const hoursTitle = document.createElement('h1');
    hoursTitle.innerHTML = 'Hours';

    const weekdays = document.createElement('p');
    weekdays.innerHTML = 'Monday - Friday: 11am - 10pm';

    const saturday = document.createElement('p');
    saturday.innerHTML = 'Saturday: 11am - 11pm';

    const sunday = document.createElement('p');
    sunday.innerHTML = 'Sunday: 11am - 8pm';

    hours.appendChild(hoursTitle);
    hours.appendChild(weekdays);
    hours.appendChild(saturday);
    hours.appendChild(sunday);

    home.appendChild(mlLogo);
    home.appendChild(title);
    home.appendChild(tagline);
    home.appendChild(about);
    home.appendChild(hours);

    return home;
};

export default makeHome;