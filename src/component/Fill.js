import React, { Component } from 'react';
class Fill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width,
            height: this.props.height,
            FillX: "",
            FillY: "",
            fillSymbol: " ",
            enabled: "disabled"

        }
        this.fillXUpdate = this.fillXUpdate.bind(this);
        this.fillYUpdate = this.fillYUpdate.bind(this);
        this.fillSymbolUpdate = this.fillSymbolUpdate.bind(this);
    }
    fillXUpdate(FillX) {
        FillX.persist();
        (+FillX.target.value <= this.state.width && +FillX.target.value > 0)
            ? (this.setState({ FillX: FillX.target.value },
                () => {
                    (FillX.target.className = "");
                    this.props.updateFillStateX(this.state.FillX);
                })) :
            (FillX.target.className = "invalidValueStyleError");
    }
    fillYUpdate(FillY) {
        FillY.persist();
        (+FillY.target.value <= this.state.height && +FillY.target.value > 0)
            ? (this.setState({ FillY: FillY.target.value },
                () => {
                    (FillY.target.className = "");
                    this.props.updateFillStateY(this.state.FillY);
                })) :
            (FillY.target.className = "invalidValueStyleError");
    }
    fillSymbolUpdate(fillSymbol) {
        fillSymbol.persist();

        (this.setState({ fillSymbol: fillSymbol.target.value },
            () => {

                this.props.updateFillSymbol(this.state.fillSymbol);
            }));
    }

    static getDerivedStateFromProps(props, state) {
        if (
            props.width !== state.width ||
            props.height !== state.height) {
            return {

                height: props.height,
                width: props.width,
                FillY:"",
                FillX:"",
            }
        }
        return null
    }
    render() {
        return (
            <div className="inputsForGenerateField">
                <p>B</p>
                <input onChange={this.fillXUpdate} type="number" placeholder="x" disabled={(this.state.width && this.state.height > 0) ? "" : this.state.enabled} value={this.state.FillX} />
                <input onChange={this.fillYUpdate} type="number" placeholder="y" disabled={(this.state.width && this.state.height > 0) ? "" : this.state.enabled} value={this.state.FillY} />
                <input onChange={this.fillSymbolUpdate} maxLength="1" type="text" placeholder="C" disabled={(this.state.width && this.state.height > 0) ? "" : this.state.enabled} />
            </div>
        )
    }
}


export default Fill;