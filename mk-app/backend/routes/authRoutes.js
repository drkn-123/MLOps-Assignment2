const express = require('express');
const { signup, login, forgotPassword, protectedRoute } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.get('/dashboard', authMiddleware, protectedRoute);

module.exports = router;
