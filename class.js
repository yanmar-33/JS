// クラスを定義する
class Product {
    // コンストラクタを使ってインスタンス化するときに初期化する
    constructor() {
        // インスタンス（オブジェクト）にプロパティを持たせる
        this.name = 'シャンプー';
        this.price = 500;
        this.category = '生活雑貨';
    }
}

// インスタンス化する
const shampoo = new Product();

 // インスタンス（オブジェクト）の値を出力する
 console.log(shampoo);