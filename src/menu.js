export default function makeMenu() {

    const menu = document.createElement('div');
    menu.classList.add('menuTab');

    const title = document.createElement('h1');  
    title.textContent = 'Menu';

    menu.appendChild(title);

    const menuList = {
        Drinks: ['Chuckola Cola', 'Jaeger Bob-ombs', 'Fireball Whiskey'],
        Entrees: ['Super Mushroom Pasta', 'Spaghetti and Goombas', 'Cheeps and Chips'],
        Deserts: ['Princess Peach Cobbler', 'Pipe-ing Hot Apple Pie', 'Superstar Sugar Cookies'] 
    };
    
    //Iterates through menuList to make 'ul' elements then iterates though each food array and makes an 'li' element for each food. Each 'li' element is then appened to the parent 'ul' element
    for (let [menuType, items] of Object.entries(menuList)) {
        let menuSection = document.createElement('ul')
        menuSection.textContent = menuType;

        items.forEach(item => {
            let listItem = document.createElement('li');
            listItem.innerHTML = item;
            menuSection.appendChild(listItem);
        })
        
        //append each complete 'ul' element to the main 'menu' div element
        menu.appendChild(menuSection)
    }


    return menu;
};