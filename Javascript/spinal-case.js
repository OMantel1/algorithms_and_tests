function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2") //replace uppercase letters by lowercase and add white apsce before
    str = str.split(/\s|_/).join("-"); 
    // \s => global search for whitespace characters in a string
    // | _ => OR _ underscore
    str = str.toLowerCase();

    console.log(str);
}

spinalCase("TheAndyGriffith_Show");