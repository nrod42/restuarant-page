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
    tagline.textContent = 'The best japanese-made italian restuarant in the world!';
    
    const about = document.createElement('p');
    about.textContent = 'Mario and Luigi was founded in 1985 in Brooklyn, NY'; 
    
    const aboutTwo = document.createElement('p');
    aboutTwo.textContent = 'It is regarded as the best italian restuarant (made by japanese plumbers) in the world!';

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
    home.appendChild(aboutTwo);
    home.appendChild(hours);

    return home;
};

export default makeHome;