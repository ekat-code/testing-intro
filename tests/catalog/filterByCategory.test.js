const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test.todo("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test.todo("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");

  test('"electronics" возвращает товары с ID [1, 2]', () => {
    const filterId = filterByCategory(products, 'electronics').map((item) => item.id);
    expect(filterId).toEqual([1, 2]);
  })
  test('"books" возвращает товары с ID [3, 6]', () => {
    const filterId = filterByCategory(products, 'books').map((item) => item.id);
    expect(filterId).toEqual([3, 6]);
  });
  test('"home" возвращает товары с ID [4, 5]', () => {
    const filterId = filterByCategory(products, 'home').map((item) => item.id);
    expect(filterId).toEqual([4, 5]);
  });
  test('"clothes" возвращает пустой массив', () => {
    const category = 'clothes';
    expect(filterByCategory(products, category)).toEqual([]);
  });
  test('"toys" возвращает пустой массив', () => {
    const category = 'toys';
    expect(filterByCategory(products, category)).toEqual([]);
  });
  test('"sports" возвращает пустой массив', () => {
    const category = 'sports';
    expect(filterByCategory(products, category)).toEqual([]);
  });
});
