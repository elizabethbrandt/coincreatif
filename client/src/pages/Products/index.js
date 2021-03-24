import { Grid } from "@material-ui/core";
import ProductCard from "../../components/ProductCard";
import ProductInfo from "../../seeds"

function Products() {

    const getProductInfo = (ProductObj) => {
        return (
            <Grid item xs={12} sm={4}>
                <ProductCard {...ProductObj} />
            </Grid>
        )
    }

    return (
        <Grid container>
            <Grid item container>

                {/* Gutter space */}
                <Grid item xs={1} sm={2}></Grid>

                <Grid item container xs={10} sm={8} spacing={2}>

                    {ProductInfo.map(ProductObj => getProductInfo(ProductObj))}

                </Grid>

                {/* Gutter space */}
                <Grid item xs={1} sm={2}></Grid>

            </Grid>
        </Grid>
    )
}

export default Products;