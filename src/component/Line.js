import React, { Component } from 'react';
class Line extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width,
            height: this.props.height,
            enabled: "disabled",
            xf1:"",
            yf1:"",
            xf2:"",
            yf2:"",

        }
        this.lineX1Update = this.lineX1Update.bind(this);
        this.lineY1Update = this.lineY1Update.bind(this);
        this.lineX2Update = this.lineX2Update.bind(this);
        this.lineY2Update = this.lineY2Update.bind(this);
    }
    lineX1Update(lineX1) {
        lineX1.persist();
        (+lineX1.target.value <= this.state.width && +lineX1.target.value > 0 )
            ? (this.setState({ xf1: lineX1.target.value },
                () => {
                    (lineX1.target.className = "");
                    this.props.updateFirstLineStateX1(this.state.xf1);
                    
                })) :
            (lineX1.target.className = "invalidValueStyleError");
    }
    lineY1Update(lineY1) {
        lineY1.persist();
        (+lineY1.target.value <= this.state.height && +lineY1.target.value > 0)
            ? (this.setState({ yf1: lineY1.target.value },
                () => {
                    (lineY1.target.className = "");
                    this.props.updateFirstLineStateY1(this.state.yf1);
                    
                })) :
            (lineY1.target.className = "invalidValueStyleError");
    }
    lineX2Update(lineX2) {
        lineX2.persist();
        (+lineX2.target.value <= this.state.width && +lineX2.target.value > 0)
            ? (this.setState({ xf2: lineX2.target.value },
                () => {
                    (lineX2.target.className = "");
                    this.props.updateFirstLineStateX2(this.state.xf2);
                    
                })) :
            (lineX2.target.className = "invalidValueStyleError");
    }
    lineY2Update(lineY2) {
        lineY2.persist();
        (+lineY2.target.value <= this.state.height && +lineY2.target.value > 0)
            ? (this.setState({ yf2: lineY2.target.value },
                () => {
                    (lineY2.target.className = "");
                    this.props.updateFirstLineStateY2(this.state.yf2);

                })) :
            (lineY2.target.className = "invalidValueStyleError");
    }
    static getDerivedStateFromProps(props, state) {
        if (
            props.width !== state.width ||
            props.height !== state.height) {
            return {
               
                height: props.height,
                width: props.width,
                xf1:"",
                yf1:"",
                xf2:"",
                yf2:"",
            }
        }
        return null
    }
    render() {
        return (
            <div>

                <div className="inputsForGenerateField">
                    <p>L</p>
                  
                    <input onChange={this.lineX1Update} type="number" placeholder="x1" disabled={(this.state.width && this.state.height > 0) ? "" : this.state.enabled} value={this.state.xf1}/>
                    <input onChange={this.lineY1Update} type="number" placeholder="y1" disabled={(this.state.width && this.state.height > 0) ? "" : this.state.enabled }value={this.state.yf1}/>
                    <input onChange={this.lineX2Update} type="number" placeholder="x2" disabled={(this.state.width && this.state.height > 0) ? "" : this.state.enabled} value={this.state.xf2} />
                    <input onChange={this.lineY2Update} type="number" placeholder="y2" disabled={(this.state.width && this.state.height > 0) ? "" : this.state.enabled} value={this.state.yf2} />
                </div>
            </div>
        )
    }
}


export default Line;