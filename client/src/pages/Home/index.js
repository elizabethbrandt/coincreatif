import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import {Paper} from '@material-ui/core';
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
            <img alt="product"
                src={props.item.image}
                style={{
                height: "auto",
                maxHeight: "550px",
                width: "100%",
                objectFit: "cover",
                display: "flex"
                }}/>
        </Paper>
    )
}

const items = [

    {
        image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        image: "https://images.pexels.com/photos/1676126/pexels-photo-1676126.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
        image: "https://images.pexels.com/photos/6157712/pexels-photo-6157712.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
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
            <div>

                <Carousel
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