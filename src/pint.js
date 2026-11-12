/**
 * Valida si un PIN cumple con los requisitos de seguridad y formato.
 * @param {string} pin - El PIN a validar.
 * @returns {boolean} true si es válido, false en caso contrario.
 */
export function esPinValido(pin) {
  if (typeof pin !== 'string') {
    return false;
  }

  // Verifica que tenga exactamente 4 o 6 dígitos numéricos
  if (!/^(?:\d{4}|\d{6})$/.test(pin)) {
    return false;
  }

  // Prohíbe que todos los dígitos sean iguales (ej. '1111', '888888')
  const todosIguales = new Set(pin).size === 1;
  
  return !todosIguales;
}