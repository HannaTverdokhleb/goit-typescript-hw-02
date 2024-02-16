/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object>(objA: T, objB: T): T {   // merge<T, U>(objA: T, objB: U) - видає помилку
  return Object.assign(objA, objB);
}

export {}