// # 환경 설정 관련 폴더
// # 설정 파일 (DB 정보 등)
// module.exports = {
//   database: {
//     host: 'localhost',
//     username: 'root',
//     password: 'password',
//     database: 'mydb',
//     dialect: 'mysql',
//   },
// };

// firebaseConfig.js
const admin = require('firebase-admin');
const serviceAccount = require('../path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
