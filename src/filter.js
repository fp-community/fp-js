const filter = (condFn) => (col) => {
    const result = [];
    col.forEach((obj) => {
        condFn(obj) ? result.push(obj) : null;
    });

    return result;
}

module.exports = filter;