const strWords = "Hello, world, I'm new to this!";
const strSpace = "   espacios al rededor   ";
const strInBetween = "Muchos   espacios   intermedios";
const reversedWords = reversedStringWords();
const reversedSpace = reversedStringSpace();
const reversedInBetween = reversedStringInBetween();

export function reversedStringWords() {
    return strWords.split(" ").reverse().join(" ");
}

export function reversedStringSpace() {
    return strSpace.trim().split(" ").reverse().join(" ");
}

export function reversedStringInBetween() {
    return strInBetween.replace(/\s+/g, " ").split(" ").reverse().join(" ");
}