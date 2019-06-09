const get = (attr) => (obj) => {
    const value = eval(`obj.${attr}`);
    return value ? value : null;
};

module.exports = get;