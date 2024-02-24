const express = require('express');
const app = express();

const path = require('path');

app.get('/', (req, res) => {
    const file_path = path.resolve(__dirname, 'index.html')
    res.sendFile(file_path);
    }
);

app.listen(3000, () => {
    console.log('Server is up on 3000');
    }
);