module.exports = function check(str, bracketsConfig) {
    let brackets = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        brackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }
    let valid = true;
    while (str.length > 1 && valid) {
        let newStr = replaceBrackets(str, brackets);
        if (str == newStr) {
            valid = false;
        } else {
            str = newStr;
        }
    }
    if (!valid || str.length == 1) {
      return false;
    }
    return true;
}

function replaceBrackets(str, brackets) {
    for (let i = 0; i < brackets.length; i++) {
        if (str.includes(brackets[i])) {
            str = str.replace(brackets[i], '');
        }
    }
    return str;
};
