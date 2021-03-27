import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: [], total: 0 }
    }

    componentDidMount() {
        let cart = localStorage.getItem('cart');
        if (!cart) return;
        getCartProducts(cart).then((products) => {
            let total = 0;
            for (var i = 0; i < products.length; i++) {
                total += products[i].price * products[i].qty;
            }
            this.setState({ products, total });
            });
    }

    removeFromCart = (products) => {
        let products = this.state.products.filter((item) => item.id !== product.id);
        let cart = JSON.parse(localStorage.getItem('cart'));
        delete cart[product.id.toString()];
        localStorage.setItem('cart', JSON.stringify(cart));
        let total = this.state.total - (product.qty * product.price)
        this.setState({ products, total });
    }

    clearCart = () => {
        localStorage.removeItem('cart');
        this.setState({ products: [] });
    }
}