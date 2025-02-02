export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];  //export позволяет использовать код, не записывая новый тег скрипт



export function addToCart (productId) {
  let matchingItem; //задаем переменную для проверки есть ли в корзине повторяющийся элемент 
  cart.forEach((cartItem) => {   //перебирает каждый объект в массиве корзины
  if (productId === cartItem.productId) { //сравниваем имя выбраного кликом объекта с находящимися в массиве корзины объектами 
    matchingItem = cartItem; //если имена совпадают, они попадают в переменную 
  }
  });

  if (matchingItem) {  //если имя совпадает то в его объекте просто добавляется +1 к количеству
  matchingItem.quantity +=1;
  } else {              //если не совпадает - то в корзине нет таких вещей и создается новый (пушится) объект массива
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
}