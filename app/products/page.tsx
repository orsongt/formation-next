import styles from "../page.module.css";
import { Products } from "../lib/types";
import { getProducts } from "../services/ProductService";
import Link from "next/link";

export default async function Productos() {
    const products = await getProducts<Products>();

    return (
        <main className={styles.main}>
            <h2>Produits</h2>
        {products.map(
            (product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                    <strong>
                        {product.title}
                    </strong>
                </Link>
            )
        )}
        </main>
    );
}
