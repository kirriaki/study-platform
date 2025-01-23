const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });


console.log('Loading .env file content...');
console.log(fs.readFileSync('./back_end/.env', 'utf8'));

dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI || 'Undefined');

// Загрузка переменных окружения
dotenv.config();

// Создание экземпляра приложения
const app = express();

// Подключение к MongoDB
// @ts-ignore
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


require('dotenv').config({ path: './back_end/.env' });


console.log('MONGO_URI from .env:', process.env.MONGO_URI || 'Undefined');
console.log('PORT from .env:', process.env.PORT || 'Undefined');

// Middleware для CORS
app.use(cors());

// Middleware для обработки JSON
app.use(express.json());

// Подключение маршрутов
app.use('/api', userRoutes);

// Пример маршрута
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
