const Product = require('./model/product');

class FaceDB {
  constructor(){
    this.products = [
      {
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        header1: 'sample',
        header2: 'text',
        header3: 'Phone XL',
        headingText: 'サンプルテキスト1',
        image: './assets/img/phone-cover.jpg',
      },
      {
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        header1: 'sample2',
        header2: 'text',
        header3: 'Phone Mini',
        headingText: 'サンプルテキスト2',
        image: './assets/img/phone-cover.jpg',
      },
      {
        name: 'Phone Standard',
        price: 299,
        description: '',
        header1: 'sample3',
        header2: 'text',
        header3: 'Phone stand',
        headingText: 'サンプルテキスト3',
        image: './assets/img/phone-cover.jpg',
      }
    ]
  }


  pushProductsToDB() {
    this.products.forEach((product) => {
      // オブジェクトの作成（new演算子）
      const newProduct = new Product(product)
      newProduct.save();
    })
  }
  
  async clearDB() {
    await Product.deleteMany({});
  }
  async initDB() {
    await this.clearDB();
    this.pushProductsToDB();
  }
}

module.exports = FaceDB;