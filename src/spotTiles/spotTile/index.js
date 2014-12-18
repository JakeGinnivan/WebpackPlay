var fs = require('fs');

module.exports = {
    write: function(){
        var html = fs.readFileSync(__dirname + '/index.html', 'utf8');

        console.log(html);
        document.body.innerHTML = html;
    }
}