// notificationControllers.js
const { sendNewBookAlertEmail } = require('../utils/emailSender');
const { getNewBooks } = require('../models/bookModels');
const db = require('../config/firebaseConfig');

async function notifyUsersForNewBooks(newBookData) {
  try {
    // 도서와 일치하는 취향을 가진 사용자 필터링
    const usersRef = db.collection('users');
    const snapshot = await usersRef
      .where('preferences', 'array-contains', newBookData.genre)
      .get();

    if (snapshot.empty) {
      console.log('No matching users found.');
      return;
    }

    // 각 사용자에게 이메일 전송
    snapshot.forEach((doc) => {
      const user = doc.data();
      const subject = `신간 도서 알림: ${newBookData.title}`;
      const text = `${newBookData.title} - ${newBookData.description}`;

      sendNewBookAlertEmail(user.email, subject, text);
    });
  } catch (error) {
    console.error('Error notifying users:', error);
  }
}

module.exports = { notifyUsersForNewBooks };
