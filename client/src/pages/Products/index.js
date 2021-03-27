import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import API from "../../utils/products";

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        API.getProductData()
            .then(({ data }) => {
                setProducts(data)
            })
    }, []);

    return (
        <Grid container>
            <Grid item container>

                {/* Gutter space */}
                <Grid item xs={1} sm={2}></Grid>

                <Grid item container xs={10} sm={8} spacing={2}>

                    {products.map(product => (
                        <Grid item xs={12} sm={4}>
                            <ProductCard product={product} key={product._id}  />
                        </Grid>
                    ))}

                </Grid>

                {/* Gutter space */}
                <Grid item xs={1} sm={2}></Grid>

            </Grid>
        </Grid>
    )
}

export default Products;