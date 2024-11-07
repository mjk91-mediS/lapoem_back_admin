// bookRoutes.js
const express = require('express');
const { addBook } = require('../controllers/bookControllers');

const router = express.Router();

// 신간 도서 추가 라우트
router.post('/add', addBook);

module.exports = router;
