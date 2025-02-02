import { cart as myCart } from '../data/cart.js'; //.. переходит на папку выше, импорт переменной карт из отдельного файла , as ** позволяет переназначить имя импортированного 

let productsHTML = ''; //сохраняем результаты форича в переменную
products.forEach((product) => {    //продукты грузятся из отдельного файла
  productsHTML = productsHTML + `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars*10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents/100).toFixed(2) /* делает цену с 2 знаками после запятой*/ } 
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart" 
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
}); 



document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart') //выбирает все кнопки Add в массиве
  .forEach((button) => {
    button.addEventListener('click', () => {
     const productId = button.dataset.productId; //dataset получает все данные записанные в тэге после data-name, в JS все "-" заменяются было product-name стало productName
     
     let matchingItem; //задаем переменную для проверки есть ли в корзине повторяющийся элемент 
     cart.forEach((item) => {   //перебирает каждый объект в массиве корзины
      if (productId === item.productId) { //сравниваем имя выбраного кликом объекта с находящимися в массиве корзины объектами 
        matchingItem = item; //если имена совпадают, они попадают в переменную 
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
      let cartQuantity = 0;

      cart.forEach((item) => {
          cartQuantity += item.quantity;
        });
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
      });
     });

