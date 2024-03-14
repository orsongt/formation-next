import { Product, Products } from "../lib/types";

const getProducts = async<T>(): Promise<T> => {    
    try {
        const res: Response = await fetch('https://fakestoreapi.com/products');
        const data: Awaited<Products> = await res.json();
        return data as T;
    } catch (error) {
        console.error('Ce n\'est pas possible recuperer des produits: ', error);
        throw error;
    }
};

const getProduct = async<T>(id: number): Promise<Product> => {
    try {
        const res: Response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const products: Awaited<Product> = await res.json();
        return products;
    } catch (error) {
        console.error('Ce n\'est pas possible recuperer le produit: ', error);
        throw error;
    }
}
 
export {getProducts, getProduct};