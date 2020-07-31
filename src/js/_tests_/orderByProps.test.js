import orderByProps from '../app';
import { obj, props } from '../base';

describe('orderByProps should', () => {
  test('order obj by props and then by alphabet', () => {
    const result = orderByProps(obj, props);
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });
  test('return error if obj and props are null', () => {
    expect(() => {
      orderByProps();
    }).toThrow();
  });
});
