const pipe = (...fnCol) => input => {
    const _fn = (arg) => {
        result = arg;
        fnCol.forEach((fn) => {
            result = fn(result)
        });
        return result;
    }
    
    return _fn(input);
}

module.exports = pipe;