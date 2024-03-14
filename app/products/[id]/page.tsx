import type { Product, ProductsPageProps } from "@/app/lib/types";
import { getProduct } from "@/app/services/ProductService";
import Image from "next/image";

const Product = async ({params: {id}}: ProductsPageProps) => {
  const product = await getProduct<Product>(id);

    return (
        <>
        { product &&
            <div>
                <h3>
                    {product.title}
                </h3>
                <p>
                    {product.description}
                </p>
                <Image alt={product.title} src={product.image} width={500} height={300} />
            </div>
        }
        </>
    );
}
 
export default Product;