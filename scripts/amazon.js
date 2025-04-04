import { cart, addToCart } from '../data/cart.js'; //.. переходит на папку выше, импорт переменной карт из отдельного файла , as ** позволяет переназначить имя импортированного 
import { products } from '../data/products.js';
import { fromatCurrency } from './utils/money.js';
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
          src="${product.getStarsUrl()}">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        ${product.getPrice()}
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

      ${product.extraInfoHTML()}

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
function updateCartQuantity () {
  let cartQuantity = 0;
      cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
      });
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}
document.querySelectorAll('.js-add-to-cart') //выбирает все кнопки Add в массиве
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId; //dataset получает все данные записанные в тэге после data-name, в JS все "-" заменяются было product-name стало productName
    addToCart(productId);
    updateCartQuantity();
     });
  });

