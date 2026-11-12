import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('Función esPinValido(pin)', () => {
  it('debe devolver false si el PIN es null o undefined', () => {
    expect(esPinValido(null)).toBe(false);
    expect(esPinValido(undefined)).toBe(false);
  });

  it('debe devolver false si el PIN está vacío', () => {
    expect(esPinValido('')).toBe(false);
  });

  it('debe devolver false si la longitud no es 4 ni 6', () => {
    expect(esPinValido('123')).toBe(false);
    expect(esPinValido('12345')).toBe(false);
    expect(esPinValido('1234567')).toBe(false);
  });

  it('debe devolver false si contiene caracteres que no son dígitos', () => {
    expect(esPinValido('123a')).toBe(false);
    expect(esPinValido('12-4')).toBe(false);
    expect(esPinValido(' 234')).toBe(false);
  });

  it('debe devolver false si todos los dígitos son iguales', () => {
    expect(esPinValido('1111')).toBe(false);
    expect(esPinValido('888888')).toBe(false);
    expect(esPinValido('0000')).toBe(false);
  });

  it('debe devolver true para PINes válidos de 4 o 6 dígitos sin dígitos repetidos idénticos', () => {
    expect(esPinValido('1234')).toBe(true);
    expect(esPinValido('692014')).toBe(true);
    expect(esPinValido('012345')).toBe(true);
  });
});