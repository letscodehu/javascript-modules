var storage = require('./storage')

var storageInstance = new storage();
var storageInstance2 = new storage();

storageInstance.put('some', 'thing')
console.log(storageInstance2.get('some'))
