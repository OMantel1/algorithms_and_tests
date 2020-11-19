function translatePigLatin(str) {
    let regex = /^[^aeiou]+/;
    let matched = str.match(regex);
    let result;
    console.log(matched);
    if (matched != null) {
        result = str.concat(matched).replace(matched, "").concat("ay");
    } else {
        result = str + "way";
    }
    return result;
}

translatePigLatin("consonant");