var fs = require('fs');
var ko = require('knockout');
var prices = require('../../prices');

var tileViewModelFactory = function(ccyPair) {
    var viewModel = {
        ccyPair: ccyPair,
        price: ko.observable(0)
    };
    prices(ccyPair).subscribe(function(price) {
       viewModel.price(price);
    });
    return viewModel;
};

module.exports = function(elem, ccyPair) {
    var tile = fs.readFileSync(__dirname + '/index.html', 'utf8');
    elem.innerHTML = tile;
    var viewModel = tileViewModelFactory(ccyPair);
    ko.applyBindings(viewModel, elem);
}