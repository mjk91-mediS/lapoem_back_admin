// bookControllers.js
const { addNewBook } = require('../models/bookModels');
const { notifyUsersForNewBooks } = require('./notificationControllers');

async function addBook(req, res) {
  const { title, author, genre, description } = req.body;

  try {
    const newBookId = await addNewBook({ title, author, genre, description });
    const newBookData = { title, genre, description };

    // 신간 도서 추가 후 알림 전송
    await notifyUsersForNewBooks(newBookData);

    res
      .status(201)
      .json({
        message: 'New book added and notifications sent',
        bookId: newBookId,
      });
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).json({ message: 'Error adding book' });
  }
}

module.exports = { addBook };
