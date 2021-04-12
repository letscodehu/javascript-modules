
var text = "This is running inside a closure";

(function () {
    var test = function () {
        console.log(text)
    }
    test()
})()

