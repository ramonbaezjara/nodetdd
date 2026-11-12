/**
 * Valida si un PIN cumple con los requisitos de seguridad y formato.
 * @param {string|number} pin - El PIN a validar.
 * @returns {boolean} true si es válido, false en caso contrario.
 */
export function esPinValido(pin) {
  if (pin === null || pin === undefined) {
    return false;
  }

  const pinStr = String(pin);

  if (pinStr === '') {
    return false;
  }

  // Longitud debe ser 4 o 6
  if (pinStr.length !== 4 && pinStr.length !== 6) {
    return false;
  }

  // Debe contener solo dígitos del 0 al 9
  if (!/^\d+$/.test(pinStr)) {
    return false;
  }

  // Prohibir que todos los dígitos sean iguales
  const primerDigito = pinStr[0];
  const todosIguales = pinStr.split('').every(char => char === primerDigito);
  if (todosIguales) {
    return false;
  }

  return true;
}