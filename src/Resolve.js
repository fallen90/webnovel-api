module.exports = tuple => ({ 
    data : tuple[1], 
    error : tuple[0], 
    toJSONString : (indent=0) => JSON.stringify(tuple[1], null, indent),
    toString : () => JSON.stringify(tuple[1])
});