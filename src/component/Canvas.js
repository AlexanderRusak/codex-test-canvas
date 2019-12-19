import React, { Component } from 'react';

function drawField(width, height, lineFirstX1, lineFirstY1, lineFirstX2, lineFirstY2, lineSecondX1, lineSecondY1, lineSecondX2, lineSecondY2, rectangleX1, rectangleY1, rectangleX2, rectangleY2, fillX, fillY, fillSymbol) {
    let field = Array.from(generateCanvas(width, height, lineFirstX1, lineFirstY1, lineFirstX2, lineFirstY2, lineSecondX1, lineSecondY1, lineSecondX2, lineSecondY2, rectangleX1, rectangleY1, rectangleX2, rectangleY2, fillX, fillY, fillSymbol));
    let canvasField = [];
    canvasField = field.map((item) =>
        item.map(el => <i>{el}</i>)
    )
    field = canvasField.map(item => <text> <i>|</i>{item}<i>|</i></text>);
    return field;
}

function generateCanvas(widthCanvas, heightCanvas, lfx1, lfy1, lfx2, lfy2, lsx1, lsy1, lsx2, lsy2, rx1, ry1, rx2, ry2, fx, fy, fs) {
    let fieldArray = new Array(heightCanvas);
    for (let height = 0; height < heightCanvas; height++) {
        fieldArray[height] = new Array(widthCanvas);
        for (let width = 0; width < widthCanvas; width++) {
            fieldArray[height][width] = "";
        }
    }
    (rx2 && ry2 && rx1 && ry1 !== " ") ? rectangle(rx1, ry1, rx2, ry2, fieldArray) : console.log(rx1, ry1, rx2, ry2, "test");
    (lfx2 && lfy2 && lfx1 && lfy1 !== " ") ? ((lfy1 == lfy2) ?
        horizontalLine(lfx1, lfy1, lfx2, lfy2, fieldArray) :
        verticalLine(lfx1, lfy1, lfx2, lfy2, fieldArray))
        : console.log(lfx1, lfy1, lfx2, lfy2, "test");
    (lsx2 && lsy2 && lsx1 && lsy1 !== " ") ? ((lsy1 == lsy2) ?
        horizontalLine(lsx1, lsy1, lsx2, lsy2, fieldArray) :
        verticalLine(lsx1, lsy1, lsx2, lsy2, fieldArray))
        : console.log(lsx1, lsy1, lsx2, lsy2, "test");
    bucketFill(fx, fy, fs, fieldArray);
    return fieldArray;
}
function bucketFill(fx, fy, fs, arr) {

    console.log(fx, fy, fs);


}
function verticalLine(x1, y1, x2, y2, arr) {
    x1 = x1 - 1;
    x2 = x2 - 1;
    y1 = y1 - 1;
    y2 = y2 - 1;
    console.log(x1, y1, x2, y2, "bug");
    arr[y2][x2] = "X";
    arr[y1][x1] = "X";
    if (x1 == x2) {
        if (y2 > y1) {
            for (let i = y1; i < y2; i++) {
                arr[i][x1] = "X";
            }
        }
        if (y1 > y2) {
            for (let i = y1; i >= y2; i--) {
                arr[i][x1] = "X";
            }
        }

    }



}
function horizontalLine(x1, y1, x2, y2, arr) {
    x1 = x1 - 1;
    x2 = x2 - 1;
    y1 = y1 - 1;
    y2 = y2 - 1;
    arr[y2][x2] = "X";
    arr[y1][x1] = "X";
    console.log(x1, y1, x2, y2, "bug");
    if (y1 == y2) {
        if (x2 > x1) {
            for (let i = x1; i <= x2; i++) {
                arr[y2][i] = "X";
            }
        }
        if (x1 > x2) {
            for (let i = x1; i >= x2; i--) {
                arr[y2][i] = "X";
            }
        }

    }

}
function rectangle(x1, y1, x2, y2, arr) {
    x1 = x1 - 1;
    x2 = x2 - 1;
    y1 = y1 - 1;
    y2 = y2 - 1;
    if (x2 > x1 && y2 > y1) {

        for (let i = x1; i <= x2; i++) {
            arr[i][y1] = "X";
            console.log("work");
        }
        for (let i = y1; i <= y2; i++) {
            arr[x1][i] = "X";
        }
        for (let i = x2; i >= x1; i--) {
            arr[i][y2] = "X";
        }
        for (let i = y2; i >= y1; i--) {
            arr[x2][i] = "X"
        }
    }
    if (x1 > x2 && y2 > y1) {
        for (let i = x1; i >= x2; i--) {
            arr[i][y1] = "X";
        }
        for (let i = y1; i <= y2; i++) {
            arr[x1][i] = "X";
        }
        for (let i = x2; i <= x1; i++) {
            arr[i][y2] = "X";
        }
        for (let i = y2; i >= y1; i--) {
            arr[x2][i] = "X"
        }
    }
    if (x1 > x2 && y1 > y2) {
        for (let i = x1; i >= x2; i--) {
            arr[i][y1] = "X";
        }
        for (let i = y1; i >= y2; i--) {
            arr[x1][i] = "X";
        }
        for (let i = x2; i <= x1; i++) {
            arr[i][y2] = "X";
        }
        for (let i = y2; i <= y1; i++) {
            arr[x2][i] = "X"
        }
    }
    if (x2 > x1 && y1 > y2) {
        for (let i = x2; i >= x1; i--) {
            arr[i][y2] = "X";
        }
        for (let i = y2; i <= y1; i++) {
            arr[x2][i] = "X"
        }
        for (let i = y1; i >= y2; i--) {
            arr[x1][i] = "X";
        }
        for (let i = x1; i <= x2; i++) {
            arr[i][y1] = "X";
        }
    }
}
function DrawHorizontalEdge(width) {
    let edgeH = [];
    for (let i = 0; i < (width + 2); i++) {
        edgeH.push("-");
    }
    return (<div>{edgeH.map((item) => <i>{item}</i>)}</div>);
}





class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: +this.props.width,
            height: +this.props.height,
            lineFirstX1: this.props.lineFirstX1,
            lineFirstY1: this.props.lineFirstY1,
            lineFirstX2: this.props.lineFirstX2,
            lineFirstY2: this.props.lineFirstY2,


            lineSecondX1: this.props.lineSecondX1,
            lineSecondY1: this.props.lineSecondY1,
            lineSecondX2: this.props.lineSecondX2,
            lineSecondY2: this.props.lineSecondY2,

            rectangleX1: this.props.rectangleX1,
            rectangleY1: this.props.rectangleY1,
            rectangleX2: this.props.rectangleX2,
            rectangleY2: this.props.rectangleY2,

            fillX: this.props.fillX,
            fillY: this.props.fillY,
            fillSymbol: this.fillSymbol,


        }

    }
    static getDerivedStateFromProps(props, state) {
        if (props.width !== state.width ||
            props.height !== state.height ||
            props.lineFirstX1 !== state.lineFirstX1 ||
            props.lineFirstY1 !== state.lineFirstY1 ||
            props.lineFirstX2 !== state.lineFirstX2 ||
            props.lineFirstY2 !== state.lineFirstY2 ||

            props.lineSecondX1 !== state.lineSecondX1 ||
            props.lineSecondY1 !== state.lineSecondY1 ||
            props.lineSecondX2 !== state.lineSecondX2 ||
            props.lineSecondY2 !== state.lineSecondY2 ||

            props.rectangleX1 !== state.rectangleX1 ||
            props.rectangleY1 !== state.rectangleY1 ||
            props.rectangleX2 !== state.rectangleX2 ||
            props.rectangleY2 !== state.rectangleY2 ||

            props.fillX !== state.fillX ||
            props.fillY !== state.fillY ||
            props.fillSymbol !== state.fillSymbol
        ) {
            return {
                width: props.width,
                height: props.height,
                lineFirstX1: props.lineFirstX1,
                lineFirstY1: props.lineFirstY1,
                lineFirstX2: props.lineFirstX2,
                lineFirstY2: props.lineFirstY2,

                lineSecondX1: props.lineSecondX1,
                lineSecondY1: props.lineSecondY1,
                lineSecondX2: props.lineSecondX2,
                lineSecondY2: props.lineSecondY2,

                rectangleX1: props.rectangleX1,
                rectangleY1: props.rectangleY1,
                rectangleX2: props.rectangleX2,
                rectangleY2: props.rectangleY2,

                fillX: props.fillX,
                fillY: props.fillY,
                fillSymbol: props.fillSymbol

            }
        }
        return null
    }
    render() {



        return (
            <div>
                {DrawHorizontalEdge(this.state.width)}
                {drawField(this.state.width, this.state.height,
                    this.state.lineFirstX1,
                    this.state.lineFirstY1,
                    this.state.lineFirstX2,
                    this.state.lineFirstY2,

                    this.state.lineSecondX1,
                    this.state.lineSecondY1,
                    this.state.lineSecondX2,
                    this.state.lineSecondY2,

                    this.state.rectangleX1,
                    this.state.rectangleY1,
                    this.state.rectangleX2,
                    this.state.rectangleY2,

                    this.state.fillX,
                    this.state.fillY,
                    this.state.fillSymbol,
                )}
                {DrawHorizontalEdge(this.state.width)}
            </div>
        )
    }
}
export default Canvas;