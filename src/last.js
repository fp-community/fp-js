const last = (arr) => {
    const length = typeof arr === 'object' && arr !== null && arr.length > 0 ? arr.length : -1;
    return length !== -1 ? arr[length-1] : null;
};

module.exports = last;