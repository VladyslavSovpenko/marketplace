import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ProductPrice from "./product-price";
import {Product} from "../../types";

const ProductCard = ({product}: { product: Product }) => {
    console.log(product);
    return (
        <Card className={"w-full max-w-sm"}>
            <CardHeader className={"p-0 items-center"}>
                <Link href={`/product/${product.slug}`}>
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        height={300}
                        width={300}
                        layout={"responsive"}
                        priority={true}/>
                </Link>
            </CardHeader>
            <CardContent className={"p-4 grid gap-4"}>
                <div className="text-sx">{product.brand}</div>
                <Link href={`/product/${product.slug}`}>
                    <h3 className="text-sm font-medium">{product.name}</h3>
                </Link>
                <div className="flex-between gap-4 ">
                    <p>{product.rating} Stars</p>
                    {product.stock > 0 ? <p className={"font-bold"}>
                            <ProductPrice value={product.price} className={"text-red-500"}/>
                    </p> :
                        <p className={"text-destructive"}>Out of Stock</p>}
                </div>
            </CardContent>
        </Card>
    );
}

export default ProductCard;