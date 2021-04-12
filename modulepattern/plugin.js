(function(lib){
    lib.map = function(collection, mapper) {
        if (Array.isArray(collection)) {
            return collection.map(mapper);
        } else {
            return mapper(collection);
        }
    } 
})($)
