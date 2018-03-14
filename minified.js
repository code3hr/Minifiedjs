const fs = require('fs');
const args = process.argv;

var file = args[2];
fs.readFile(file, 'utf8', function(err, data) {

    data = data.replace(/[\s]+/g, "");

    fs.writeFile('min_' + file, data, 'utf-8', function(err) {
        if (err) throw err;
        console.log('filelistAsync complete');
    });

});