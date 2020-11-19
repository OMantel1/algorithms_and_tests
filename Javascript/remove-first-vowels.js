function translatePigLatin(str) {
    let vowelsRegex = /[aeiouy]/;
    str = str.split("");
    console.log(str[0]);

    for(let i = 0 ; i <= str.length ; i++){
        let x;
        if (!vowelsRegex.test(str[i])){
            x = str[i];
            str.push(x);
            str.shift(1);
            
            console.log(str[i]);
            
        }
        if (vowelsRegex.test(str[i])){
            break
        }
    }
    str.push("way")
    str = str.join("")
    console.log(str);
}

translatePigLatin("schwartz");