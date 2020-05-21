export default function parseNumber(input) {
  const error = Error('Ошибка, введите число!');
  try {
    if (Number.isNaN(Number(input))) {
      throw error;
    }
    return input;
  } catch (e) {
    return error.message;
  }
}