import ProductList from "../../../components/product/product-list";
import {getLatestProducts} from "../../../lib/actions/product.actions";
import {convertToPlainObject} from "../../../lib/utils";

export const metadata = {
    title: 'Home',
}

const Page =async () => {
    const latestProducts = await getLatestProducts();
    return (
        <>
            <ProductList data={latestProducts} title='Newest Arrivals' limit={4} />
        </>
    );
}

export default Page;