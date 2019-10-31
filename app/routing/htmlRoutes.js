const express = require('express');
const path = require('path');

const app = express();


module.exports = app => {
    app.get('/:file', (req, res) => {
        const { file: filePath } = req.params;
        let fileName;

        switch (filePath) {
            case 'home':
            case 'survey':
                fileName = filePath;
                break;
            default:
                fileName = 'home';
        }

        res.sendFile(path.join(__dirname, `.././public/${fileName}.html`))
    })
}