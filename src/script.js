const basket = 'basket';

localStorage.setItem(basket, JSON.stringify([]));

const addItem = (params) => {
    const prevBasket = JSON.parse(localStorage.getItem(basket));
    localStorage.setItem(basket, JSON.stringify([ ...prevBasket, params ]));
};

const openBasket = () => {

};
