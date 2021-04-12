function storage() {

    var items = {}

    this.put = function(key, value) {
        items[key] = value
    }
    this.has = function(key) {
        return items.hasOwnProperty(key)
    }

    this.get = function(key) {
        return items[key]
    }
}

module.exports = storage;
