import React, { Component } from 'react';

class Line2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width,
            height: this.props.height,
            enabled: "disabled",
            xs1:null,
            ys1:null,
            xs2:null,
            ys2:null,

        }
        this.lineX1Update = this.lineX1Update.bind(this);
        this.lineY1Update = this.lineY1Update.bind(this);
        this.lineX2Update = this.lineX2Update.bind(this);
        this.lineY2Update = this.lineY2Update.bind(this);
    }
    lineX1Update(lineX1) {
        lineX1.persist();
        (+lineX1.target.value <= this.state.width && +lineX1.target.value > 0 )
            ? (this.setState({ xs1: lineX1.target.value },
                () => {
                    (lineX1.target.className = "");
                    this.props.updateSecondLineStateX1(this.state.xs1);
                    
                })) :
            (lineX1.target.className = "invalidValueStyleError");
    }
    lineY1Update(lineY1) {
        lineY1.persist();
        (+lineY1.target.value <= this.state.height && +lineY1.target.value > 0)
            ? (this.setState({ ys1: lineY1.target.value },
                () => {
                    (lineY1.target.className = "");
                    this.props.updateSecondLineStateY1(this.state.ys1);
                    
                })) :
            (lineY1.target.className = "invalidValueStyleError");
    }
    lineX2Update(lineX2) {
        lineX2.persist();
        (+lineX2.target.value <= this.state.width && +lineX2.target.value > 0)
            ? (this.setState({ xs2: lineX2.target.value },
                () => {
                    (lineX2.target.className = "");
                    this.props.updateSecondLineStateX2(this.state.xs2);
                    
                })) :
            (lineX2.target.className = "invalidValueStyleError");
    }
    lineY2Update(lineY2) {
        lineY2.persist();
        (+lineY2.target.value <= this.state.height && +lineY2.target.value > 0)
            ? (this.setState({ ys2: lineY2.target.value },
                () => {
                    (lineY2.target.className = "");
                    this.props.updateSecondLineStateY2(this.state.ys2);

                })) :
            (lineY2.target.className = "invalidValueStyleError");
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
            <div>

                <div className="inputsForGenerateField">
                    <p>L</p>
                  
                    <input onChange={this.lineX1Update} type="number" placeholder="x1" disabled={(this.state.width && this.state.height > 0) ? "" : this.state.enabled} />
                    <input onChange={this.lineY1Update} type="number" placeholder="y1" disabled={(this.state.width && this.state.height > 0) ? "" : this.state.enabled} />
                    <input onChange={this.lineX2Update} type="number" placeholder="x2" disabled={(this.state.width && this.state.height > 0) ? "" : this.state.enabled} />
                    <input onChange={this.lineY2Update} type="number" placeholder="y2" disabled={(this.state.width && this.state.height > 0) ? "" : this.state.enabled} />
                </div>
            </div>
        )
    }
}

export default Line2;