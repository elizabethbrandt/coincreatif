import { Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import SearchBar from "../../components/Nav/Searchbar";
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

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
      };

    useEffect(() => {
        let items = searchInput.length
            ? products.filter((data) => {
                const condition =
                data.itemName.toLowerCase().includes(searchInput.toLowerCase()) ||
                data.category
                    .toLowerCase()
                    .includes(searchInput.toString().toLowerCase()) ||
                data.description.toLowerCase().includes(searchInput.toLowerCase());
                return condition;
            })
            : [];
        setFilteredProducts(items);
    }, [searchInput, products]);

    const searchCondition =
    filteredProducts.length === 0 ? products : filteredProducts;


    return (
        <Grid container style={{marginBottom:"60px"}}>
            <div style={{marginLeft:"auto",marginRight:"auto", marginTop:"10px", marginBottom: "10px", textAlign:"center",}}>

            <Typography variant="h3" style={{width:"auto"}} >PRODUCTS:</Typography>

                <SearchBar 
                products={products} 
                handleInputChange={handleInputChange} 
                searchInput={searchInput}/>
            </div>
            
            <Grid item container>

                {/* Gutter space */}
                <Grid item xs={1} sm={2}></Grid>

                <Grid item container xs={10} sm={8} spacing={2}>

                    {searchCondition.length ? searchCondition.map(product => (
                        <Grid item xs={12} sm={4}>
                            <ProductCard product={product} key={product._id}  />
                        </Grid>
                    )) : "" }

                </Grid>

                {/* Gutter space */}
                <Grid item xs={1} sm={2}></Grid>

            </Grid>

        </Grid>
        
    )
}

export default Products;
