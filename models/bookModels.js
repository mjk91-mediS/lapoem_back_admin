// bookModels.js
const db = require('../config/firebaseConfig');
const booksRef = db.collection('books');

// 신간 도서 추가
async function addNewBook(bookData) {
  const newBook = await booksRef.add(bookData);
  return newBook.id;
}

// 모든 신간 도서 가져오기
async function getNewBooks() {
  const snapshot = await booksRef.get();
  const books = [];
  snapshot.forEach((doc) => {
    books.push({ id: doc.id, ...doc.data() });
  });
  return books;
}

module.exports = { addNewBook, getNewBooks };
