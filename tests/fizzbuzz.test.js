import { describe, expect, test } from 'vitest';
import { checkNumber } from '../src/js/fizzbuzz/fizzbuzz.js';

describe('FizzBuzz', () => {

    test('should return Fizz', () => {
        const n = 3;
        const expected = 'Fizz';
        const result = checkNumber(n);
        expect(result).toBe(expected);
    })


})

describe('FizzBuzz', () => {

    test('should return Buzz', () => {
        const n = 5;
        const expected = 'Buzz';
        const result = checkNumber(n);
        expect(result).toBe(expected);
    })
})

describe('FizzBuzz', () => {

    test('should return FizzBuZZ', () => {
        const n = 15;
        const expected = 'FizzBuzz';
        const result = checkNumber(n);
        expect(result).toBe(expected);
    })
})

describe('', () => {

    test('should return numb', () => {
        const n = 7;
        const expected = 'numb';
        const result = checkNumber(n);
        expect(result).toBe(expected);
    })
})