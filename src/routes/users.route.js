const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/auth/register', async (req, res) => {
    try {
        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(hashedPassword);
        console.log(password);
        res.status(201).json({ password })
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: "Erro desconhecido." })
    }
})

module.exports = router;