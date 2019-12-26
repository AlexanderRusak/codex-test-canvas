import React, { Component } from 'react';

function drawField(width, height, defaultSymbol, lineFirstX1, lineFirstY1, lineFirstX2, lineFirstY2, lineSecondX1, lineSecondY1, lineSecondX2, lineSecondY2, rectangleX1, rectangleY1, rectangleX2, rectangleY2, fillX, fillY, fillSymbol) {
    let field = Array.from(generateCanvas(width, height, defaultSymbol, lineFirstX1, lineFirstY1, lineFirstX2, lineFirstY2, lineSecondX1, lineSecondY1, lineSecondX2, lineSecondY2, rectangleX1, rectangleY1, rectangleX2, rectangleY2, fillX, fillY, fillSymbol));
    let canvasField = [];
    canvasField = field.map((item) =>
        item.map(el => <i>{el}</i>)
    )
    field = canvasField.map(item => <text> <i>|</i>{item}<i>|</i></text>);
    return field;
}

function generateCanvas(widthCanvas, heightCanvas, defSymb, lfx1, lfy1, lfx2, lfy2, lsx1, lsy1, lsx2, lsy2, rx1, ry1, rx2, ry2, fx, fy, fs) {
    let fieldArray = new Array(heightCanvas);

    for (let height = 0; height < heightCanvas; height++) {
        fieldArray[height] = new Array(widthCanvas);
        for (let width = 0; width < widthCanvas; width++) {
            fieldArray[height][width] = "";
        }
    }
    //fx, fy, fs
    if (widthCanvas < lfx1 ||
        widthCanvas < lfx2 ||
        widthCanvas < lsx1 ||
        widthCanvas < lsx2 ||
        widthCanvas < rx1 ||
        widthCanvas < rx2 ||
        widthCanvas < fx ||
        widthCanvas < fy) {
        lfx1 = widthCanvas;
        lfx2 = widthCanvas;
        lsx1 = widthCanvas;
        lsx2 = widthCanvas;
        rx1 = widthCanvas;
        rx2 = widthCanvas;
        fx = widthCanvas;
        fy = widthCanvas;
    }
    if (heightCanvas < lfy1 ||
        heightCanvas < lfy2 ||
        heightCanvas < lsy1 ||
        heightCanvas < lsy2 ||
        heightCanvas < ry1 ||
        heightCanvas < ry2 ||
        heightCanvas < fx ||
        heightCanvas < fy) {
        lfy1 = heightCanvas;
        lfy2 = heightCanvas;
        lsy1 = heightCanvas;
        lsy2 = heightCanvas;
        ry1 = heightCanvas;
        ry2 = heightCanvas;
        fx = heightCanvas;
        fy = heightCanvas;
    }
    (rx2 && ry2 && rx1 && ry1 !== " ") ? rectangle(rx1, ry1, rx2, ry2, fieldArray, defSymb) : console.log(rx1, ry1, rx2, ry2, "test");
    (lfx2 && lfy2 && lfx1 && lfy1 !== " ") ? ((lfy1 === lfy2) ?
        horizontalLine(lfx1, lfy1, lfx2, lfy2, fieldArray, defSymb) :
        verticalLine(lfx1, lfy1, lfx2, lfy2, fieldArray, defSymb))
        : console.log(lfx1, lfy1, lfx2, lfy2, "test");
    (lsx2 && lsy2 && lsx1 && lsy1 !== " ") ? ((lsy1 === lsy2) ?
        horizontalLine(lsx1, lsy1, lsx2, lsy2, fieldArray, defSymb) :
        verticalLine(lsx1, lsy1, lsx2, lsy2, fieldArray, defSymb))
        : console.log(lsx1, lsy1, lsx2, lsy2, "test");
    (fx && fy !== "" ) ? bucketFill(fx, fy, fs, fieldArray, defSymb, heightCanvas, widthCanvas) : console.log("error")
    return fieldArray;
}



///ATTENTION !!!!!!!!!!!!!!!!!!!! DONT'T SHOW BUCKETFILL FUNCTION
function bucketFill(fx, fy, fs, arr, ds, wc, hc) {
    fx = fx - 1;
    fy = fy - 1;
    if (arr[fy][fx] !== ds) {

        for (let i = fy; i < wc; i++) {
            if (arr[i][fx] !== ds) {
                for (let j = fx; j < hc; j++) {
                    if (arr[i][j] !== ds) {

                        for (let k = i; k < wc; k++) {
                            if (arr[k][j] !== ds) {

                                for (let m = j; m < hc; m++) {
                                    if (arr[k][m] !== ds) {

                                        for (let n = k; n < wc; n++) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        for (let n = k; n >= 0; n--) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }

                                    }
                                    else {
                                        break;
                                    }
                                }
                                for (let m = j; m >= 0; m--) {
                                    if (arr[k][m] !== ds) {
                                        for (let n = k; n < wc; n++) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        for (let n = k; n >= 0; n--) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }

                                    }
                                    else {
                                        break;
                                    }
                                }
                            }
                            else {
                                break;
                            }
                        }
                        for (let k = i; k >= 0; k--) {
                            if (arr[k][j] !== ds) {
                                for (let m = j; m < hc; m++) {
                                    if (arr[k][m] !== ds) {
                                        for (let n = k; n < wc; n++) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        for (let n = k; n >= 0; n--) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }

                                    }
                                    else {
                                        break;
                                    }
                                }
                                for (let m = j; m >= 0; m--) {
                                    if (arr[k][m] !== ds) {
                                        for (let n = k; n < wc; n++) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        for (let n = k; n >= 0; n--) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }

                                    }
                                    else {
                                        break;
                                    }
                                }

                            }
                            else {
                                break;
                            }
                        }
                    }
                    else {
                        break;
                    }
                }
            }
            else {
                break;
            }
        }

        /////
        for (let i = fy; i < wc; i++) {
            if (arr[i][fx] !== ds) {
                for (let j = fx; j >= 0; j--) {
                    if (arr[i][j] !== ds) {
                        for (let k = i; k < wc; k++) {
                            if (arr[k][j] !== ds) {
                                for (let m = j; m < hc; m++) {
                                    if (arr[k][m] !== ds) {
                                        for (let n = k; n < wc; n++) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        for (let n = k; n >= 0; n--) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        break;
                                    }
                                }
                                for (let m = j; m >= 0; m--) {
                                    if (arr[k][m] !== ds) {
                                        for (let n = k; n < wc; n++) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        for (let n = k; n >= 0; n--) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        break;
                                    }
                                }
                            }
                            else {
                                break;
                            }

                        }
                        for (let k = i; k >= 0; k--) {
                            if (arr[k][j] !== ds) {
                                for (let m = j; m < hc; m++) {
                                    if (arr[k][m] !== ds) {
                                        for (let n = k; n < wc; n++) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        for (let n = k; n >= 0; n--) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        break;
                                    }
                                }
                                for (let m = j; m >= 0; m--) {
                                    if (arr[k][m] !== ds) {
                                        for (let n = k; n < wc; n++) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        for (let n = k; n >= 0; n--) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        break;
                                    }
                                }
                            }
                            else {
                                break;
                            }

                        }
                    }
                    else {
                        break;
                    }
                }
            }
            else {
                break;
            }
        }
        ////////////////////
        for (let i = fy; i >= 0; i--) {
            if (arr[i][fx] !== ds) {
                for (let j = fx; j < hc; j++) {
                    if (arr[i][j] !== ds) {
                        for (let k = i; k < hc; k++) {
                            if (arr[k][j] !== ds) {
                                for (let m = j; m < hc; m++) {
                                    if (arr[k][m] !== ds) {
                                        for (let n = k; n < wc; n++) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        for (let n = k; n >= 0; n--) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        break;
                                    }
                                }
                                for (let m = j; m >= 0; m--) {
                                    if (arr[k][m] !== ds) {
                                        for (let m = j; m < hc; m++) {
                                            if (arr[k][m] !== ds) {
                                                for (let n = k; n < wc; n++) {
                                                    if (arr[n][m] !== ds) {
                                                        arr[n][m] = fs;
                                                    }
                                                    else {
                                                        break;
                                                    }
                                                }
                                                for (let n = k; n >= 0; n--) {
                                                    if (arr[n][m] !== ds) {
                                                        arr[n][m] = fs;
                                                    }
                                                    else {
                                                        break;
                                                    }
                                                }
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        for (let m = j; m >= 0; m--) {
                                            if (arr[k][m] !== ds) {
                                                for (let n = k; n < wc; n++) {
                                                    if (arr[n][m] !== ds) {
                                                        arr[n][m] = fs;
                                                    }
                                                    else {
                                                        break;
                                                    }
                                                }
                                                for (let n = k; n >= 0; n--) {
                                                    if (arr[n][m] !== ds) {
                                                        arr[n][m] = fs;
                                                    }
                                                    else {
                                                        break;
                                                    }
                                                }
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        break;
                                    }
                                }
                            }
                            else {
                                break;
                            }
                        }
                        for (let k = i; k >= 0; k--) {
                            if (arr[k][j] !== ds) {
                                for (let m = j; m < hc; m++) {
                                    if (arr[k][m] !== ds) {
                                        for (let n = k; n < wc; n++) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        for (let n = k; n >= 0; n--) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        break;
                                    }
                                }
                                for (let m = j; m >= 0; m--) {
                                    if (arr[k][m] !== ds) {
                                        for (let n = k; n < wc; n++) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        for (let n = k; n >= 0; n--) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        break;
                                    }
                                }
                            }
                            else {
                                break;
                            }
                        }
                    }
                    else {
                        break;
                    }
                }
            }
            else {
                break;
            }
        }
        for (let i = fy; i >= 0; i--) {
            if (arr[i][fx] !== ds) {
                for (let j = fx; j >= 0; j--) {
                    if (arr[i][j] !== ds) {
                        for (let k = i; k < wc; k++) {
                            if (arr[k][j] !== ds) {
                                for (let m = j; m < hc; m++) {
                                    if (arr[k][m] !== ds) {
                                        for (let n = k; n < wc; n++) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        for (let n = k; n >= 0; n--) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        break;
                                    }
                                }
                                for (let m = j; m >= 0; m--) {
                                    if (arr[k][m] !== ds) {
                                        for (let n = k; n < wc; n++) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        for (let n = k; n >= 0; n--) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        break;
                                    }
                                }
                            }
                            else {
                                break;
                            }
                        }
                        for (let k = i; k >= 0; k--) {
                            if (arr[k][j] !== ds) {
                                for (let m = j; m < hc; m++) {
                                    if (arr[k][m] !== ds) {
                                        for (let n = k; n < wc; n++) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        for (let n = k; n >= 0; n--) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        break;
                                    }
                                }
                                for (let m = j; m >= 0; m--) {
                                    if (arr[k][m] !== ds) {
                                        for (let n = k; n < wc; n++) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        for (let n = k; n >= 0; n--) {
                                            if (arr[n][m] !== ds) {
                                                arr[n][m] = fs;
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        break;
                                    }
                                }
                            }
                            else {
                                break;
                            }
                        }
                    }
                    else {
                        break;
                    }
                }
            }
            else {
                break;
            }
        }
    }






    ////////////////////////////////////////////////////////////////



    else {


        for (let i = fy; i < wc; i++) {
            if (arr[i][fx] === ds | arr[i][fx] === fs) {
                for (let j = fx; j < hc; j++) {
                    if (arr[i][j] === ds || arr[i][j] === fs) {
                        for (let k = i; k < wc; k++) {
                            if (arr[k][j] === ds || arr[k][j] === fs) {
                                for (let m = j; m < hc; m++) {
                                    if (arr[k][m] === ds || arr[k][m] === fs) {
                                        arr[k][m] = fs;
                                    }
                                    else {
                                        break;
                                    }
                                }
                                for (let m = j; m >= 0; m--) {
                                    if (arr[k][m] === ds || arr[k][m] === fs) {
                                        arr[k][m] = fs;
                                    }
                                    else {
                                        break;
                                    }
                                }
                            }
                            else {
                                break;
                            }
                        }
                        for (let k = i; k >= 0; k--) {
                            if (arr[k][j] === ds || arr[k][j] === fs) {
                                for (let m = j; m < hc; m++) {
                                    if (arr[k][m] === ds || arr[k][m] === fs) {
                                        arr[k][m] = fs;
                                    }
                                    else {
                                        break;
                                    }
                                }
                                for (let m = j; m >= 0; m--) {
                                    if (arr[k][m] === ds || arr[k][m] === fs) {
                                        arr[k][m] = fs;
                                    }
                                    else {
                                        break;
                                    }
                                }
                            }
                            else {
                                break;
                            }
                        }
                    }
                    else {
                        break;
                    }
                }

                for (let j = fx; j >= 0; j--) {
                    console.log("test")
                    if (arr[i][j] === ds || arr[i][j] === fs) {
                        for (let k = i; k < wc; k++) {
                            if (arr[k][j] === ds || arr[k][j] === fs) {
                                for (let m = j; m < hc; m++) {
                                    if (arr[k][m] === ds || arr[k][m] === fs) {
                                        arr[k][m] = fs;
                                    }
                                    else {
                                        break;
                                    }
                                }
                                for (let m = j; m >= 0; m--) {
                                    if (arr[k][m] === ds || arr[k][m] === fs) {
                                        arr[k][m] = fs;
                                    }
                                    else {
                                        break;
                                    }
                                }
                            }
                            else {
                                break;
                            }
                        }
                        for (let k = i; k >= 0; k--) {
                            if (arr[k][j] === ds || arr[k][j] === fs) {
                                for (let m = j; m < wc; m++) {
                                    if (arr[k][m] === ds || arr[k][m] === fs) {
                                        arr[k][m] = fs;
                                    }
                                    else {
                                        break;
                                    }
                                }
                                for (let m = j; m >= 0; m--) {
                                    if (arr[k][m] === ds || arr[k][m] === fs) {
                                        arr[k][m] = fs;
                                    }
                                    else {
                                        break;
                                    }
                                }
                            }
                            else {
                                break;
                            }
                        }
                    }
                    else {
                        break;
                    }
                }
            }
        }
        for (let i = fy; i >= 0; i--) {

            if (arr[i][fx] === ds || arr[i][fx] === fs) {
                for (let j = fx; j < hc; j++) {
                    if (arr[i][j] === ds || arr[i][j] === fs) {
                        for (let k = i; k < wc; k++) {
                            if (arr[k][j] === ds || arr[k][j] === fs) {
                                for (let m = j; m < hc; m++) {
                                    if (arr[k][m] === ds || arr[k][m] === fs) {
                                        arr[k][m] = fs;
                                    }
                                    else {
                                        break;
                                    }
                                }
                                for (let m = j; m >= 0; m--) {
                                    if (arr[k][m] === ds || arr[k][m] === fs) {
                                        arr[k][m] = fs;
                                    }
                                    else {
                                        break;
                                    }
                                }
                            }
                            else {
                                break;
                            }
                        }
                        for (let k = i; k >= 0; k--) {
                            if (arr[k][j] === ds || arr[k][j] === fs) {
                                for (let m = j; m < hc; m++) {
                                    if (arr[k][m] === ds || arr[k][m] === fs) {
                                        arr[k][m] = fs;
                                    }
                                    else {
                                        break;
                                    }
                                }
                                for (let m = j; m >= 0; m--) {
                                    if (arr[k][m] === ds || arr[k][m] === fs) {
                                        arr[k][m] = fs;
                                    }
                                    else {
                                        break;
                                    }
                                }
                            }
                            else {
                                break;
                            }
                        }
                    }
                    else {
                        break;
                    }
                }
                for (let j = fx; j >= 0; j--) {
                    if (arr[i][j] === ds || arr[i][j] === fs) {
                        for (let k = i; k < wc; k++) {
                            if (arr[k][j] === ds || arr[k][j] === fs) {
                                for (let m = j; m < hc; m++) {
                                    if (arr[k][m] === ds || arr[k][m] === fs) {
                                        arr[k][m] = fs;
                                    }
                                    else {
                                        break;
                                    }
                                }
                                for (let m = j; m >= 0; m--) {
                                    if (arr[k][m] === ds || arr[k][m] === fs) {
                                        arr[k][m] = fs;
                                    }
                                    else {
                                        break;
                                    }
                                }
                            }
                            else {
                                break;
                            }
                        }
                        for (let k = i; k >= 0; k--) {
                            if (arr[k][j] === ds || arr[k][j] === fs) {
                                for (let m = j; m < hc; m++) {
                                    if (arr[k][m] === ds || arr[k][m] === fs) {
                                        arr[k][m] = fs;
                                    }
                                    else {
                                        break;
                                    }
                                }
                                for (let m = j; m >= 0; m--) {
                                    if (arr[k][m] === ds || arr[k][m] === fs) {
                                        arr[k][m] = fs;
                                    }
                                    else {
                                        break;
                                    }
                                }
                            }
                            else {
                                break;
                            }
                        }
                    }
                    else {
                        break;
                    }

                }

            }

        }




        /////

    }


}
///ATTENTION !!!!!!!!!!!!!!!!!!!! DONT'T SHOW BUCKETFILL FUNCTION
function verticalLine(x1, y1, x2, y2, arr, ds) {
    x1 = x1 - 1;
    x2 = x2 - 1;
    y1 = y1 - 1;
    y2 = y2 - 1;
    if (x1 === x2) {
        if (y2 > y1) {
            for (let i = y1; i <= y2; i++) {
                arr[i][x1] = ds;
            }
        }
        if (y1 > y2) {
            for (let i = y1; i >= y2; i--) {
                arr[i][x1] = ds;
            }
        }

    }



}
function horizontalLine(x1, y1, x2, y2, arr, ds) {
    x1 = x1 - 1;
    x2 = x2 - 1;
    y1 = y1 - 1;
    y2 = y2 - 1;

    if (y1 === y2) {
        if (x2 > x1) {
            for (let i = x1; i <= x2; i++) {
                arr[y2][i] = ds;
            }
        }
        if (x1 > x2) {
            for (let i = x1; i >= x2; i--) {
                arr[y2][i] = ds;
            }
        }

    }

}
function rectangle(x1, y1, x2, y2, arr, ds) {
    x1 = x1 - 1;
    x2 = x2 - 1;
    y1 = y1 - 1;
    y2 = y2 - 1;
    if (x2 > x1 && y2 > y1) {

        for (let i = x1; i <= x2; i++) {
            arr[y1][i] = ds;
        }
        for (let i = y1; i <= y2; i++) {
            arr[i][x1] = ds;
        }
        for (let i = x2; i >= x1; i--) {
            arr[y2][i] = ds;
        }
        for (let i = y2; i >= y1; i--) {
            arr[i][x2] = ds;
        }
    }
    if (x1 > x2 && y2 > y1) {
        for (let i = x1; i >= x2; i--) {
            arr[y1][i] = ds;
        }
        for (let i = y1; i <= y2; i++) {
            arr[i][x1] = ds;
        }
        for (let i = x2; i <= x1; i++) {
            arr[y2][i] = ds;
        }
        for (let i = y2; i >= y1; i--) {
            arr[i][x2] = ds;
        }
    }
    if (x1 > x2 && y1 > y2) {
        for (let i = x1; i >= x2; i--) {
            arr[y1][i] = ds;
        }
        for (let i = y1; i >= y2; i--) {
            arr[i][x1] = ds;
        }
        for (let i = x2; i <= x1; i++) {
            arr[y2][i] = ds;
        }
        for (let i = y2; i <= y1; i++) {
            arr[i][x2] = ds;
        }
    }
    if (x2 > x1 && y1 > y2) {
        for (let i = x2; i >= x1; i--) {
            arr[y2][i] = ds;
        }
        for (let i = y2; i <= y1; i++) {
            arr[i][x2] = ds;
        }
        for (let i = y1; i >= y2; i--) {
            arr[i][x1] = ds;
        }
        for (let i = x1; i <= x2; i++) {
            arr[y1][i] = ds;
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
            defaultSymbol: "X",

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
                {drawField(this.state.width, this.state.height, this.state.defaultSymbol,
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