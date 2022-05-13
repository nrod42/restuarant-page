export default function makeContact() {

    const contact = document.createElement('div');
    contact.classList.add('contactTab');

    const title = document.createElement('h1');  
    title.textContent = 'Get in Touch!';
    
    const contactMessage = document.createElement('p');
    contactMessage.textContent = 'We\'d love to here from you! Contact us and make your reservation today!';

    const address = document.createElement('p');
    address.textContent = '1 Star Road, Brooklyn, NY';

    const phone = document.createElement('p');
    phone.textContent = '(888)-913-1985';

    const email = document.createElement('p');
    email.textContent = 'mlbrothers@star.com';

    contact.appendChild(title);
    contact.appendChild(contactMessage);
    contact.appendChild(address);
    contact.appendChild(phone);
    contact.appendChild(email);

    return contact;
};