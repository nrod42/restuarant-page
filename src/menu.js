import Coin from './img/coin-icon.png'

const makeMenu = () => {

    const menu = document.createElement('div');
    menu.classList.add('menuTab');

    const title = document.createElement('h1');  
    title.textContent = 'Menu';

    menu.appendChild(title);

    const menuList = {
        Drinks: [{food: 'Jaeger Bob-ombs', price: '25'}, {food: 'Fireball Whiskey', price: '20'}, {food: 'Chuckola Cola', price: '10'}],
        Entrees: [{food: 'Super Mushroom Pasta', price: '40'}, {food: 'Spaghetti and Goombas', price: '30'}, {food: 'Cheeps and Chips', price: '20'}],
        Desserts: [{food: 'Princess Peach Cobbler', price: '20'}, {food: 'Pipe-ing Hot Apple Pie', price: '20'}, {food: 'Superstar Sugar Cookies', price: '10'}] 
    }

    //Iterates throughs menuList object above to make ul sections for each meal type
    for (let courseType in menuList) {  
        let courseSection = document.createElement('ul');
        courseSection.innerHTML = courseType;

        menuList[courseType].forEach(item => {
            const listItem =  document.createElement('li');

            let food = document.createElement('p');
            food.innerHTML = item.food + ' ... ';

            let coinIcon = new Image();
            coinIcon.src = Coin;
            coinIcon.classList.add('coinIcon');

            let price = document.createElement('p');
            price.innerHTML = item.price; 
        
            listItem.appendChild(food);
            listItem.appendChild(coinIcon);
            listItem.appendChild(price);

            courseSection.appendChild(listItem);
        })

        menu.appendChild(courseSection);
    }

    return menu;
};

export default makeMenu;