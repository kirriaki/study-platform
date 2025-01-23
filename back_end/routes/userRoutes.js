const express = require('express');

const { registerUser, loginUser } = require('../controllers/userController');
const User = require('../models/User'); // Проверь путь

const router = express.Router();



router.post('/register', registerUser);
router.post('/login', loginUser);
// Создание нового пользователя
router.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Получение всех пользователей
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;