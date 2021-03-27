import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import Search2 from "../../components/Nav/search2";
import ProductCard from "../../components/ProductCard";
import API from "../../utils/products";

function Products() {


    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        API.getProductData()
            .then(({ data }) => {
                setProducts(data)
            })
    }, []);

    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = e => {
        console.log(e)
        setSearchInput({search: e.target.value})
    }

    console.log(searchInput)

    
    useEffect(() => {
        
        const items = products.map((data) => {
            const input = searchInput.search.toString()
            console.log(searchInput)
            console.log(data.itemName)
            console.log((data.itemName.toLowerCase().includes(input.toLowerCase())))
            
            // || data.category.toLowerCase().includes(input.toLowerCase())
            // || data.description.toLowerCase().includes(input.toLowerCase())
            
        })
        setFilteredProducts(items)
        console.log("items", items)

    }, [searchInput, products])

    const searchCondition = 
        filteredProducts.length === 0 ? products : filteredProducts
    
    console.log("searchCondition", searchCondition)


    return (
        <Grid container>

            <Grid item>
                <Search2 products={products} handleInputChange={handleInputChange} searchInput={searchInput}/>
            </Grid>
            
            <Grid item container>

                {/* Gutter space */}
                <Grid item xs={1} sm={2}></Grid>

                <Grid item container xs={10} sm={8} spacing={2}>

                    {searchCondition.map(product => (
                        <Grid item xs={12} sm={4}>
                            <ProductCard product={product}  />
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
