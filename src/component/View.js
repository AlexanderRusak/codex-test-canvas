import React, { Component } from 'react';
import Canvas from './Canvas';
import Line from './Line';
import Line2 from './Line2';
import Rectangle from './Rectangle';
import Fill from './Fill';




class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            invalidValue: "",
            canvas: false,
            enabled: "disabled",
            validStyle: "",
            lineFirstX1: "",
            lineFirstY1: "",
            lineFirstX2: "",
            lineFirstY2: "",
            lineSecondX1: "",
            lineSecondY1: "",
            lineSecondX2: "",
            lineSecondY2: "",
            rectangleX1: "",
            rectangleY1: "",
            rectangleX2: "",
            rectangleY2: "",
            fillX: "",
            fillY: "",
            fillSymbol: " ",

        }
        this.generate = this.generate.bind(this);
        this.canvasWidthUpdate = this.canvasWidthUpdate.bind(this);
        this.canvasHeightUpdate = this.canvasHeightUpdate.bind(this);


    }
    generate() {
        (this.state.width && this.state.height) ?
            (this.setState({ canvas: true })) :
            (this.setState({ canvas: false }))
    }
    canvasWidthUpdate(width) {

        this.setState({ width: width.target.value }, () => {
            if ((this.state.width && this.state.height) > 0) {
                this.setState({ enabled: "" });
            }
            else {
                this.setState({ enabled: "disabled" })
                this.setState({ canvas: false })
            }
        })
    }


    canvasHeightUpdate(height) {

        this.setState({ height: height.target.value }, () => {
            if ((this.state.width && this.state.height) > 0) {
                this.setState({ enabled: "" });
                
            }
            else {
                this.setState({ enabled: "disabled" })
                this.setState({ canvas: false })
            }
        })
    }
    updateFirstLineStateX1 = (value) => {
        this.setState({ lineFirstX1: value })
    }
    updateFirstLineStateY1 = (value) => {
        this.setState({ lineFirstY1: value })
    }
    updateFirstLineStateX2 = (value) => {
        this.setState({ lineFirstX2: value })
    }
    updateFirstLineStateY2 = (value) => {
        this.setState({ lineFirstY2: value })
    }

    /////
    updateSecondLineStateX1 = (value) => {
        this.setState({ lineSecondX1: value })
    }
    updateSecondLineStateY1 = (value) => {
        this.setState({ lineSecondY1: value })
    }
    updateSecondLineStateX2 = (value) => {
        this.setState({ lineSecondX2: value })
    }
    updateSecondLineStateY2 = (value) => {
        this.setState({ lineSecondY2: value })
    }


    //////
    updateRectangleStateX1 = (value) => {
        this.setState({ rectangleX1: value })
    }
    updateRectangleStateY1 = (value) => {
        this.setState({ rectangleY1: value })
    }
    updateRectangleStateX2 = (value) => {
        this.setState({ rectangleX2: value })
    }
    updateRectangleStateY2 = (value) => {
        this.setState({ rectangleY2: value })
    }
    ////////

    updateFillStateX = (value) => {
        this.setState({ fillX: value })
    }
    updateFillStateY = (value) => {
        this.setState({ fillY: value })
    }
    updateFillSymbol = (value) => {
        this.setState({ fillSymbol: value })
    }
    render() {
        return (
            <section>

                <div className="inputsForGenerateField">
                    <p>C</p>
                    <input onChange={this.canvasWidthUpdate} type="number" placeholder="W" />
                    <i> x</i>
                    <input onChange={this.canvasHeightUpdate} type="number" placeholder="H" />

                </div>
                <Line
                    updateFirstLineStateX1={this.updateFirstLineStateX1}
                    updateFirstLineStateY1={this.updateFirstLineStateY1}
                    updateFirstLineStateX2={this.updateFirstLineStateX2}
                    updateFirstLineStateY2={this.updateFirstLineStateY2}
                    width={this.state.width}
                    height={this.state.height}
                />
                <Line2
                    updateSecondLineStateX1={this.updateSecondLineStateX1}
                    updateSecondLineStateY1={this.updateSecondLineStateY1}
                    updateSecondLineStateX2={this.updateSecondLineStateX2}
                    updateSecondLineStateY2={this.updateSecondLineStateY2}
                    width={this.state.width}
                    height={this.state.height}
                />
                <Rectangle
                    updateRectangleStateX1={this.updateRectangleStateX1}
                    updateRectangleStateY1={this.updateRectangleStateY1}
                    updateRectangleStateX2={this.updateRectangleStateX2}
                    updateRectangleStateY2={this.updateRectangleStateY2}
                    width={this.state.width}
                    height={this.state.height}
                />
                <Fill
                    width={this.state.width}
                    height={this.state.height}
                    updateFillStateX={this.updateFillStateX}
                    updateFillStateY={this.updateFillStateY}
                    updateFillSymbol={this.updateFillSymbol}
                />


           {/*   <input onClick={this.generate} type="button" value="Go!" disabled={this.state.enabled} /> */}
                {((this.state.width&&this.state.height)&&(this.state.width&&this.state.height!==0)) ?
                    <div>
                        
                        {console.log(this.state.fillSymbol, this.state.fillX, this.state.fillY)}
                        <Canvas

                            width={+this.state.width}
                            height={+this.state.height}
                            lineFirstX1={this.state.lineFirstX1}
                            lineFirstY1={this.state.lineFirstY1}
                            lineFirstX2={this.state.lineFirstX2}
                            lineFirstY2={this.state.lineFirstY2}
                            lineSecondX1={this.state.lineSecondX1}
                            lineSecondY1={this.state.lineSecondY1}
                            lineSecondX2={this.state.lineSecondX2}
                            lineSecondY2={this.state.lineSecondY2}
                            rectangleX1={this.state.rectangleX1}
                            rectangleY1={this.state.rectangleY1}
                            rectangleX2={this.state.rectangleX2}
                            rectangleY2={this.state.rectangleY2}
                            fillX={this.state.fillX}
                            fillY={this.state.fillY}
                            fillSymbol={this.state.fillSymbol}
                        />
                        
                    </div>
                    :
                    <div></div>}
            </section>

        );
    }
}

export default View;