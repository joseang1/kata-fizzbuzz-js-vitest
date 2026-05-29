import { describe, test, expect } from 'vitest';
import { containsEnglish } from '../src/js/englishwords/englishwords.js';

describe('containsEnglish', () => {
    test('matches contiguous substring anywhere', () => {
        expect(containsEnglish('abcEnglishdef')).toBe(true);
    });

    test('does not match when letters are out of order', () => {
        expect(containsEnglish('abcnEglishsef')).toBe(false);
    });

    test('is case-insensitive', () => {
        expect(containsEnglish('eNglisH')).toBe(true);
    });

    test('matches inside other words', () => {
        expect(containsEnglish('MyEnglishTest')).toBe(true);
    });

    test('returns false for non-string input', () => {
        expect(containsEnglish(123)).toBe(false);
    });
});