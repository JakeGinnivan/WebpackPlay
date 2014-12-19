var tile = require('./spotTile');

module.exports = {
    write: function (){
        var element = document.createElement('div');
        document.body.appendChild(element);
        tile(element, 'eurusd');
    }
}