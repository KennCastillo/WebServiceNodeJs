const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname + '/views/index.html'));
    res.render('index.html', { title: 'AbrContratos' });
});

router.get('/contact', (req, res) => {
    //res.sendFile(path.join(__dirname + '/views/index.html'));
    res.render('contact.html', { title: 'Iniciar sesión' });
});

module.exports = router;