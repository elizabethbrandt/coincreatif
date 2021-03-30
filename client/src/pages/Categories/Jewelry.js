import { Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import API from "../../utils/products";

function Jewelry() {


    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        API.getProductData()
            .then(({ data }) => {
                setProducts(data)
            })
    }, []);

    useEffect(() => {
        let items = products.length
            ? products.filter((data) => {
                const condition =
                data.category.includes("Jewelry")
                return condition;
            })
            : [];
        setFilteredProducts(items);
    }, [products]);

    return (
        <Grid container style={{marginBottom:"60px"}}>
            <div style={{marginLeft:"auto",marginRight:"auto", marginTop:"10px", marginBottom: "10px", textAlign:"center",}}>

            <Typography variant="h3" style={{width:"auto"}} >Marketplace</Typography>

            </div>
            
            <Grid item container>

                {/* Gutter space */}
                <Grid item xs={1} sm={2}></Grid>

                <Grid item container xs={10} sm={8} spacing={2}>

                    {filteredProducts.map(product => (
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

export default Jewelry;
