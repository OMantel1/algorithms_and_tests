function myReplace(str, before, after) {
    let index = str.indexOf(before);
    console.log(index);
    if (index === 0) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        if (before.charAt(0) === before.charAt(0).toUpperCase()) {
            after = after.charAt(0).toUpperCase() + after.slice(1);
            str = str.replace(before, after);
        } else {
            after = after.charAt(0).toLowerCase() + after.slice(1);
            str = str.replace(before, after);
        }
    }
    return str;
}