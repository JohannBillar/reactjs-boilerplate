import sum from '../app/utils/sum';

test('add 1 + 2 to equel 3', () => {
  expect(sum(1, 2)).toBe(3)
});
