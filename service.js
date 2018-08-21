const fs = require('fs');

const getRandomFileFromDirectory = (path, callback) => {
    return fs.readdir(path, (err, list) => {
        const listItems = list.length - 1;
        const randomNumber = Math.floor(Math.random() * listItems);
        
        return callback(err, list[randomNumber]);
    });
}

const readFile = (path, callback) => {
    return fs.readFile(path, (err, image) => {
        const timeout = Math.floor(Math.random() * 4) * 1000;
        setTimeout(() => { return callback(err, image)}, timeout);
    });
}

module.exports = {
    getRandomFileFromDirectory,
    readFile
}