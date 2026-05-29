import { describe, expect, test } from 'vitest'
import { reversedStringWords, reversedStringSpace, reversedStringInBetween } from '../src/js/reversingwords/reversingwords.js'

describe("reverses the order", () => {

    test('should return reversed order', () => {
        const strWords = "Hello, world, I'm new to this!";
        const result = reversedStringWords();

        expect(result).toBe("this! to new I'm world, Hello,");
    });

    test('leading and trailing whitespaces', () => {
        const strSpace = "   espacios al rededor   ";
        const result = reversedStringSpace(strSpace);

        expect(result).toBe("rededor al espacios");
    });

    test('many spaces in between words', () => {
        const strInBetween = "Muchos   espacios   intermedios";
        const result = reversedStringInBetween(strInBetween);

        expect(result).toBe("intermedios espacios Muchos");
    });
});