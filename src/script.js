const basket = 'basket';

const addItem = (name, objectID) => {
    const prevBasket = localStorage.getItem(basket) ? JSON.parse(localStorage.getItem(basket)) : [];
    const index = prevBasket.findIndex(item => item.objectID === objectID);

    if (index === -1) {
        const widget = {
            name,
            objectID,
            count: 1,
        };
        localStorage.setItem(basket, JSON.stringify([ ...prevBasket, widget ]));
    } else {
        prevBasket[index].count++;
        localStorage.setItem(basket, JSON.stringify(prevBasket));
    }
};

const openBasket = () => {
    const parent = document.getElementById(basket);
    document.getElementsByClassName(basket + '-mask')[0].style.visibility = 'visible';

    JSON.parse(localStorage.getItem(basket))?.forEach((item, index) => {
       const element = document.createElement('div');
       element.innerText = `${index + 1}) ${item.objectID} - ` + item.name + ` ${item.count}шт.`;
       parent.appendChild(element);
    });
};

document.addEventListener('keydown', (e) => {
    if(e.keyCode === 27) {
        document.getElementsByClassName(basket + '-mask')[0].style.visibility = 'hidden';
        document.getElementById(basket).innerHTML = '';
    }
});
