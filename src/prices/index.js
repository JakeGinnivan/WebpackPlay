module.exports = function(ccyPair) {
    return {
        subscribe: function(onNext) {
            var price = 0;
            setInterval(function() {
                onNext(price++);
            }, 500);
        }
    }
}