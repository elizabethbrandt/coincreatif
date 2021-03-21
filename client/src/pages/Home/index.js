import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import {
    Paper
} from '@material-ui/core';
import SimplePaper from './aboutUs';

function Project(props) {
    return (
        <Paper
            className="Project"
            style={{
                backgroundColor: props.item.color,
            }}
            elevation={10}
        >
            <h2>{props.item.name}</h2>

            <img alt="product" 
                src={props.item.image} 
                style={{
                height: "500px",
                width: "100%",
                backgroundSize: "cover" }}/>

            <p>{props.item.description}</p> 
        </Paper>
    )
}

const items = [

    {
        image: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        image: "https://images.pexels.com/photos/2973392/pexels-photo-2973392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        image: "https://images.pexels.com/photos/1035683/pexels-photo-1035683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }

]

export default class MyProjectsExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: true,
            animation: "fade",
            indicators: true,
            timeout: 800,
            navButtonsAlwaysInvisible: true
        }

        autoBind(this);
    }

    render() {
        return (
            <div style={{ color: "#494949" }}>
                <h2>Coin Créatif</h2>

                <Carousel
                    style={{ }}
                    className="SecondExample"
                    autoPlay={this.state.autoPlay}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                
                >
                    {
                        items.map((item, index) => {
                            return <Project item={item} key={index} />
                        })
                    }
                </Carousel>

                <SimplePaper/>
            </div>
        )
    }
}