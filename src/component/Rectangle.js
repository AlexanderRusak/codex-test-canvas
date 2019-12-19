import React, { Component } from 'react';
class Rectangle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width,
            height: this.props.height,
            x1: null,
            y1: "",
            x2: "",
            y2: "",
            enabled:"disabled"

        }
        this.rectangleX1Update = this.rectangleX1Update.bind(this);
        this.rectangleY1Update = this.rectangleY1Update.bind(this);
        this.rectangleX2Update = this.rectangleX2Update.bind(this);
        this.rectangleY2Update = this.rectangleY2Update.bind(this);
    }
    rectangleX1Update(rectangleX1) {
        rectangleX1.persist();
        (+rectangleX1.target.value <= this.state.width && +rectangleX1.target.value > 0)
            ? (this.setState({ x1: rectangleX1.target.value },
                () => {
                    (rectangleX1.target.className = "");
                    this.props.updateRectangleStateX1(this.state.x1);
                    console.log(this.state.x1);
                })) :
            (rectangleX1.target.className = "invalidValueStyleError");
    }
    rectangleY1Update(rectangleY1) {
        rectangleY1.persist();
        (+rectangleY1.target.value <= this.state.height && +rectangleY1.target.value > 0)
            ? (this.setState({ y1: rectangleY1.target.value },
                () => {
                    (rectangleY1.target.className = "");
                    this.props.updateRectangleStateY1(this.state.y1);
                })) :
            (rectangleY1.target.className = "invalidValueStyleError");
    }
    rectangleX2Update(rectangleX2) {
        rectangleX2.persist();
        (+rectangleX2.target.value <= this.state.width && +rectangleX2.target.value > 0)
            ? (this.setState({ x2: rectangleX2.target.value },
                () => {
                    (rectangleX2.target.className = "");
                    this.props.updateRectangleStateX2(this.state.x2);
                })) :
            (rectangleX2.target.className = "invalidValueStyleError");
    }
    rectangleY2Update(rectangleY2) {
        rectangleY2.persist();
        (+rectangleY2.target.value <= this.state.height && +rectangleY2.target.value > 0)
            ? (this.setState({ y2: rectangleY2.target.value },
                () => {
                    (rectangleY2.target.className = "");
                    this.props.updateRectangleStateY2(this.state.y2);
                })) :
            (rectangleY2.target.className = "invalidValueStyleError");
    }
    static getDerivedStateFromProps(props, state) {
        if (
            props.width !== state.width ||
            props.height !== state.height) {
            return {
              
                height: props.height,
                width: props.width
            }
        }
        return null
    }
    render() {
        return (
            <div className="inputsForGenerateField">
                <p>R</p>
                <input onChange={this.rectangleX1Update} type="number" placeholder="x1" disabled={(this.state.width && this.state.height > 0) ? "" : this.state.enabled} />
                <input onChange={this.rectangleY1Update} type="number" placeholder="y1" disabled={(this.state.width && this.state.height > 0) ? "" : this.state.enabled} />
                <input onChange={this.rectangleX2Update} type="number" placeholder="x2" disabled={(this.state.width && this.state.height > 0) ? "" : this.state.enabled} />
                <input onChange={this.rectangleY2Update} type="number" placeholder="y2"disabled={(this.state.width && this.state.height > 0) ? "" : this.state.enabled} />
            </div>
        )
    }
}


export default Rectangle;