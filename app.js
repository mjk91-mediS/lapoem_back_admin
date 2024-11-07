// const express = require('express');
// const bodyParser = require('body-parser');
// const adminRoutes = require('./routes/adminRoutes');

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Set view engine
// app.set('view engine', 'handlebars');

// // Routes
// app.use('/admin', adminRoutes);

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/adminRoutes'); // 관리자 관련 라우트

const app = express();

const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes'); // 도서 추가

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handlebars 설정
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// 정적 파일 경로 설정 (CSS, JS 등)
app.use(express.static(path.join(__dirname, 'public')));

// 라우트 설정
app.use('/admin', adminRoutes);

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // 도서 추가

  dotenv.config();

  const app = express();
  app.use(express.json());

  app.use('/api/books', bookRoutes);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
