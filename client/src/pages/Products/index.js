import { Grid } from "@material-ui/core";
import ProductCard from "../../components/ProductCard";
import API from "../../utils/products"

function Products() {

    API.getProductData(productObj)

    return (
        <Grid container>
            <Grid item container>

                {/* Gutter space */}
                <Grid item xs={1} sm={2}></Grid>

                <Grid item container xs={10} sm={8} spacing={2}>

                    <Grid item xs={12} sm={4}>
                        <ProductCard {...productObj} />
                    </Grid>
                    {/* {ProductsSeed.map(ProductObj => getProductInfo(ProductObj))} */}

                </Grid>

                {/* Gutter space */}
                <Grid item xs={1} sm={2}></Grid>

            </Grid>
        </Grid>
    )
}

export default Products;