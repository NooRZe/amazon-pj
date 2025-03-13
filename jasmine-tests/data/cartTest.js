import { addToCart,cart, loadFromStorge } from "../../data/cart.js";

describe('add to cart', () => {
  it('adds an existing product', () => {
    spyOn(localStorage, 'setItem'); //отрубает сетайтем чтобы тест не менял локал стор
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });
    loadFromStorge();
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2)
  });

  it('adds a new product', () => {
    spyOn(localStorage, 'setItem'); //отрубает сетайтем чтобы тест не менял локал стор
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    }); //мимикриурет под реальный локал стор, заменяя его для теста тем, что надо 
    loadFromStorge();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1)
  });
});