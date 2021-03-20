import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import {
    Paper
} from '@material-ui/core'

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

            <img alt="product" src={props.item.image} style={{height: props.item.height, maxHeight: props.item.maxHeight, width: props.item.width, objectFit: props.item.objectFit}}/>

            <p>{props.item.description}</p> 
        </Paper>
    )
}

const items = [
    {
        image: "https://www.nasa.gov/sites/default/files/thumbnails/image/blackhole.png",
        height: "auto",
        maxHeight: "300px",
        width: "100%",
        objectFit: "cover"
    },
    {
        image: "https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/2008_m87_labeled.jpg?itok=0OP-A6Eq",
        height: "auto",
        maxHeight: "300px",
        width: "100%",
        objectFit: "cover"
    },
    {
        image: "https://www.nasa.gov/sites/default/files/thumbnails/image/blackhole.png",
        height: "auto",
        maxHeight: "300px",
        width: "100%",
        objectFit: "cover"
    },
    {
        image: "https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/2008_m87_labeled.jpg?itok=0OP-A6Eq",
        height: "auto",
        maxHeight: "300px",
        width: "100%",
        objectFit: "cover"
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
                    style={{ color: "#494949" }}
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

            </div>
        )
    }
}