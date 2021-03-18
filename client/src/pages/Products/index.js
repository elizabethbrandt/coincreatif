import { Grid } from "@material-ui/core";
import ProductCard from "../../components/ProductCard";

function Products() {
    return (
        <Grid container direction="column">
            <Grid item container>
                <Grid item xs={1} sm={2}></Grid>
                <Grid item container xs={10} sm={8}>
                    <Grid item xs={12} sm={4}>
                        <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ProductCard />
                    </Grid>
                </Grid>
                <Grid item xs={1} sm={2}></Grid>
            </Grid>
        </Grid>
    )
}

export default Products;