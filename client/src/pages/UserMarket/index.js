import React, { useContext, useEffect, useState } from "react";
import { Grid, makeStyles,CardActionArea, Card, Typography, CardContent } from "@material-ui/core";
import ProfileCard from "../../components/ProfileCard";
import UploadModal from "../../components/UploadModal";
// import Alert from '@material-ui/lab/Alert';
import { AuthContext } from "../../utils/Auth";
import API from "../../utils/products";
import ProductCard from "../../components/ProductCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    margin: "20px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
    minWidth: "100px",
    marginBottom: "50px"
  },
}));

function Market() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
      API.getProductData()
          .then(({ data }) => {
              setProducts(data)
          })
  }, []);

  // const seller = products.map(productSeller => productSeller.sellerId)

  useEffect(() => {
    let items = products.length
        ? products.filter((data) => {
          const condition = currentUser.uid === data.sellerId;
          console.log("condition", currentUser.uid === data.sellerId)
          return condition;
        })
        : [];
    setFilteredProducts(items);
}, [currentUser.uid, products]);

  return (
    <div className={classes.root}>
      <Typography variant ="h3">MY MARKET</Typography>

      <Grid container spacing={2}>

        <Grid item xs={12}>
          <ProfileCard />
        </Grid>

        <Grid item xs={12}>

        <Card className={classes.paper}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                My Products:
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {console.log(currentUser.uid)}
                {console.log(filteredProducts)}
                {/* {console.log()} */}
                {filteredProducts.length ? 
                  filteredProducts.map(product => (
                    <Grid item xs={12} sm={4}>
                        <ProductCard product={product} key={product._id}  />
                    </Grid>
                ))
                : <Typography>You do not have any products on the market</Typography>}

                {/* <Alert severity="warning" style={{justifyContent:"center"}}>Coming soon! Here will be where you will be
                  able to maintain your products you have posted.</Alert>
                    <br></br> */}
                  {/* <Alert severity="success" style={{justifyContent:"center"}}>You are able to add items below!</Alert> */}
              </Typography>
            </CardContent>
          </CardActionArea>

              <UploadModal />

        </Card>
        </Grid>

      </Grid>
    </div>
  );
}

export default Market;