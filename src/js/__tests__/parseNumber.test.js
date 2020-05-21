import parseNumber from '../parseNumber';

test('is number', () => {
  const result = parseNumber(18);

  expect(result).toBe(18);
});

test('not a number', () => {
  const result = parseNumber('Один');

  expect(result).toBe('Ошибка, введите число!');
});