const first = (obj) => {
    const data = obj[0];
    return data ? data : null;
};

module.exports = first;