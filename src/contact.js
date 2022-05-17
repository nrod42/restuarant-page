import Bros from './img/bros.jpg';

export default function makeContact() {

    const contact = document.createElement('div');
    contact.classList.add('contactTab');

    const title = document.createElement('h1');  
    title.textContent = 'Get in Touch!';
    
    const contactMessageOne = document.createElement('p');
    contactMessageOne.textContent = 'We\'d love to hear from you!';

    const contactMessageTwo = document.createElement('p');
    contactMessageTwo.textContent = 'Contact us and make your reservation today!';

    const address = document.createElement('p');
    address.textContent = '1 Star Road, Brooklyn, NY';

    const phone = document.createElement('p');
    phone.textContent = '(888) 913-1985';

    const email = document.createElement('p');
    email.textContent = 'mlbrothers@star.com';

    const bros = new Image();
    bros.src = Bros;
    bros.classList.add('bros');

    contact.appendChild(title);
    contact.appendChild(contactMessageOne);
    contact.appendChild(contactMessageTwo);
    contact.appendChild(address);
    contact.appendChild(phone);
    contact.appendChild(email);
    contact.appendChild(bros);

    return contact;
};