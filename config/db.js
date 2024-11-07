// db.js
const { Pool } = require('pg');
require('dotenv').config();

// PostgreSQL 연결 풀 생성
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// 연결 테스트
pool.connect((err, client, release) => {
  if (err) {
    return console.error('PostgreSQL 연결 오류:', err.stack);
  }
  console.log('PostgreSQL에 연결되었습니다.');
  release();
});

module.exports = pool;
