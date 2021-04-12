var storage = (function() {
    var items = {}
    function put(key, value) {
        items[key] = value;
    }
    function getItem(key) {
        if (has(key)) {
            return items[key]
        } else {
            return null;
        }
    }
    function has(key) {
        return items.hasOwnProperty(key)
    }
    return {
        put: put, get: getItem
    }

})()
