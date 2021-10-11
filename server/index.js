const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('./config/dev');
const FakeDB = require('./face-db');
const productRouters = require('./routers/products');

mongoose.connect(config.DB_PATH)
.then(() => {
  const fakeDB = new FakeDB();
  fakeDB.initDB();
})
mongoose.connection.once('open', () => {
  console.log('mongoDB 接続完了');
})

// APIエンドポイント
app.use('/api/v1/products', productRouters);

app.get('/products', (req, res) => {
  res.json({'success':true });
});

const PORT = process.env.PORT || '3001';
app.listen(PORT, () => {
  console.log('サーバー起動');
});
