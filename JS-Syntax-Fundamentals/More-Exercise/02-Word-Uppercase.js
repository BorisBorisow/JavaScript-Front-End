function WordUppercase(string) {
    const words = string.match(/\b\w+\b/g) || [];
    const upperCaseWords = words.map(word => word.toUpperCase());
    console.log(upperCaseWords.join(', '));
}
WordUppercase('Hi, how are you?')