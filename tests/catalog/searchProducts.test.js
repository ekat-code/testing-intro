const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test('"Наушники" возвращает товар с ID 1', () => {
    const productsId = searchProducts(products, 'Наушники').map((item) => item.id);
    expect(productsId).toEqual([1]);
  });

  test('"Чистый код" возвращает товар с ID 6', () => {
    const productsId = searchProducts(products, 'Чистый код').map((item) => item.id);
    expect(productsId).toEqual([6]);
  });

  test('"Настольная лампа" возвращает товар с ID 4', () => {
    const productsId = searchProducts(products, 'Настольная лампа').map((item) => item.id);
    expect(productsId).toEqual([4]);
  });
  
  test('"javascript" возвращает товар с ID 3', () => {
    const productsId = searchProducts(products, 'javascript').map((item) => item.id);
    expect(productsId).toEqual([3]);
  });

  test('"ЧЕХОЛ" возвращает товар с ID 5', () => {
    const productsId = searchProducts(products, 'ЧЕХОЛ').map((item) => item.id);
    expect(productsId).toEqual([5]);
  });

  test('"наушники" возвращает товар с ID 1', () => {
    const productsId = searchProducts(products, 'наушники').map((item) => item.id);
    expect(productsId).toEqual([1]);
  });

  test('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const productsId = searchProducts(products, '').map((item) => item.id);
    expect(productsId).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const productsId = searchProducts(products, '   ').map((item) => item.id);
    expect(productsId).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('"\\t\\n" возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const productsId = searchProducts(products, '\t\n').map((item) => item.id);
    expect(productsId).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
