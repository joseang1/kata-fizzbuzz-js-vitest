export function containsEnglish(str) {
    if (typeof str !== 'string') return false;
    return /English/i.test(str);
}