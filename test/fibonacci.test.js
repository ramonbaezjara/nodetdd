import { describe, it } from 'node:test';
import assert from 'node:assert';
import { fibonacci } from '../src/fibonacci.js';

describe('Función fibonacci(n)', () => {
  it('debe lanzar un RangeError si n <= 0', () => {
    assert.throws(() => {
      fibonacci(-1);
    }, {
      name: 'RangeError',
      message: 'solo números enteros >= 0'
    });
  });

  it('debe devolver 0 si n = 0', () => {
    assert.strictEqual(fibonacci(0), 0);
  });

  it('debe devolver 1 si n = 1', () => {
    assert.strictEqual(fibonacci(1), 1);
  });

  it('debe calcular correctamente el valor de Fibonacci para n >= 2', () => {
    assert.strictEqual(fibonacci(2), 1);
    assert.strictEqual(fibonacci(3), 2);
    assert.strictEqual(fibonacci(4), 3);
    assert.strictEqual(fibonacci(5), 5);
    assert.strictEqual(fibonacci(6), 8);
  });
});