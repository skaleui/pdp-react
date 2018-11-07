import delay from './delay';
import products from '../mock/product-mock';

class ProductApi {
  static getAllProducts(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], products));
      }, delay);
    });
  }

  static getProduct(id){
    return new Promise((resolve, reject) => {
      setTimeout( () => {
         let product = products.find((a) => { if(a.id == id) return a; });
          resolve(Object.assign({}, product));
      }, delay);
    });
  }
}



export default ProductApi;
