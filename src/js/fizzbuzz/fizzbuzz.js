
export function checkNumber(numb) {
    
    if (typeof numb !== 'number') {
        return 'No es un número. ¡Booh!'
    }

    const isDivisibleBy3AND5 = numb % 3 == 0 && numb % 5 == 0;
    const isDivisibleBy3 = numb % 3 == 0;
    const isDivisibleBy5 = numb % 5 == 0;
    const isIndivisibleby3AND5 = numb;

    if (isDivisibleBy3AND5) return 'FizzBuzz';
    if (isDivisibleBy3) return 'Fizz';
    if (isDivisibleBy5) return 'Buzz';
    if (isIndivisibleby3AND5) return '';
}