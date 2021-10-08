const express = require('express');
const mongoose = require('mongoose');

const config = require('./config/dev');
const app = express();
const PORT = process.env.PORT || '3001';

mongoose.connect(config.DB_PATH);
mongoose.connection.once('open', () => {
  console.log('mongoDB 接続完了');
})

app.get('/products', (req, res) => {
  res.json({'success':true });
});

app.listen(PORT, () => {
  console.log('サーバー起動');
});
