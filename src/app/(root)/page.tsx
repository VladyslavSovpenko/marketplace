import ProductList from "../../../components/product/product-list";
import {getLatestProducts} from "../../../lib/actions/product.actions";
import {convertToPlainObject} from "../../../lib/utils";
import {list} from "postcss";
import sampleData from "../../../db/sample-data";

export const metadata = {
    title: 'Home',
}

const Page = async () => {
    // const latestProducts = await getLatestProducts();
    return (
        <>
            <ProductList data={sampleData.products} title='Newest Arrivals' limit={4}/>
        </>
    );
}

export default Page;