import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('Función fibonacci(n)', () => {
  it('debe lanzar un RangeError si n < 0', () => {
    expect(() => fibonacci(-1)).toThrowError(RangeError);
    expect(() => fibonacci(-1)).toThrow('solo números enteros >= 0');
  });

  it('debe devolver 0 si n = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('debe devolver 1 si n = 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it('debe calcular correctamente el valor de Fibonacci para n >= 2', () => {
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(8)).toBe(21);
  });
});