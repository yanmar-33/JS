// クラスを定義する
class Product {
    // コンストラクタを使ってインスタンス化するときに初期化する
    constructor(name, price, category) {
        // インスタンス（オブジェクト）にプロパティを持たせる
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

// インスタンス化する
const shampoo = new Product('シャンプー', '500', '生活雑貨');
const coffee = new Product('コーヒー', '1500' , '飲料')

 // インスタンス（オブジェクト）の値を出力する
 console.log(shampoo);
 console.log(coffee);