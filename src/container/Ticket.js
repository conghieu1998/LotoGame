import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Platform
} from 'react-native';
import {
    number,
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    number8,
    number9,
} from '../data/number';
import PhaoHoa from './PhaoHoa';
import _ from 'lodash';
import QuaySo from './QuaySo';
import codePush from 'react-native-code-push';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

const colorR = ["#FF99FF", "#33CC66", "#FFCC99", "#FF9933", "#FF0033",
    "#0000FF", "#6666CC", "#FFFF33", "#66CCCC", "#990066", "#009966"];

const randomColor = () => {
    return Math.floor(Math.random() * colorR.length)
};

const colorItem = () => {
    return colorR[randomColor()]
}


const Ticket = () => {
    const [row, setRow] = useState([]);
    const [row1, setRow1] = useState([]);
    const [row2, setRow2] = useState([]);
    const [row3, setRow3] = useState([]);
    const [row4, setRow4] = useState([]);
    const [row5, setRow5] = useState([]);
    const [row6, setRow6] = useState([]);
    const [row7, setRow7] = useState([]);
    const [row8, setRow8] = useState([]);
    const [backColor, setBackColor] = useState(colorItem())
    const [modalVisible, setModalVisible] = useState(false);
    const [modalQuay, setModalQuay] = useState(null);
    const [numQuay, setNumQuay] = useState(number)
    const [list, setList] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [close, setClose] = useState(1);

    useEffect(() => {
        randomNum1()
    }, [])

    const randInt = (max, min) => {
        return ((min | 0) + Math.random() * (max + 1)) | 0;
    }

    const remRandom = (arr, newLength) => {
        var a = arr.slice();
        while (a.length > newLength) a.splice(randInt(a.length - 1), 1);
        return a;
    }

    const quaySo = () => {
        const num = remRandom(numQuay, 1);
        const listN = [...list];
        if (numQuay.filter(f => f === parseInt(num))) {
            setNumQuay(_.difference(numQuay, num))
        }
        listN.push(num.toString());
        setList(listN)
        setModalQuay(num.toString())
    }

    const randomNum1 = () => {
        setBackColor(colorItem());
        setNumQuay(number);
        setList([]);
        let n1 = []
        let n2 = []
        let n3 = []
        let n4 = []
        let n5 = []
        let n6 = []
        let n7 = []
        let n8 = []
        let n9 = []
        const arr = []
        const num = remRandom(number1, 1);
        arr.push(parseInt(num))
        n1.push(parseInt(num))
        const num1 = remRandom(number2, 1);
        arr.push(parseInt(num1))
        n2.push(parseInt(num1))
        const num2 = remRandom(number3, 1);
        arr.push(parseInt(num2))
        n3.push(parseInt(num2))
        const num3 = remRandom(number4, 1);
        arr.push(parseInt(num3))
        n4.push(parseInt(num3))
        const num4 = remRandom(number5, 1);
        arr.push(parseInt(num4))
        n5.push(parseInt(num4))
        const num5 = remRandom(number6, 1);
        arr.push(parseInt(num5))
        n6.push(parseInt(num5))
        const num6 = remRandom(number7, 1);
        arr.push(parseInt(num6))
        n7.push(parseInt(num6))
        const num7 = remRandom(number8, 1);
        arr.push(parseInt(num7))
        n8.push(parseInt(num7))
        const num8 = remRandom(number9, 1);
        arr.push(parseInt(num8))
        n9.push(parseInt(num8))
        const newArr = remRandom(arr, 5)
        const oldRow1 = ['', '', '', '', '', '', '', '', '']
        for (let i = 0; i < 5; i++) {
            if (newArr[0] < 10) {
                oldRow1[0] = newArr[0];
            }
            if (newArr[i] >= 10 && newArr[i] < 20) {
                oldRow1[1] = newArr[i];
            }
            if (newArr[i] >= 20 && newArr[i] < 30) {
                oldRow1[2] = newArr[i];
            }
            if (newArr[i] >= 30 && newArr[i] < 40) {
                oldRow1[3] = newArr[i];
            }
            if (newArr[i] >= 40 && newArr[i] < 50) {
                oldRow1[4] = newArr[i];
            }
            if (newArr[i] >= 50 && newArr[i] < 60) {
                oldRow1[5] = newArr[i];
            }
            if (newArr[i] >= 60 && newArr[i] < 70) {
                oldRow1[6] = newArr[i];
            }
            if (newArr[i] >= 70 && newArr[i] < 80) {
                oldRow1[7] = newArr[i];
            }
            if (newArr[i] >= 80 && newArr[i] <= 90) {
                oldRow1[8] = newArr[i];
            }
        }
        setRow(oldRow1.map((m, index) => ({
            id: index + 1,
            value: m,
            status: 1,
        })));

        const arr1 = []
        const num_1 = remRandom(_.difference(number1, n1), 1);
        arr1.push(parseInt(num_1))
        n1.push(parseInt(num_1))
        const num1_1 = remRandom(_.difference(number2, n2), 1);
        arr1.push(parseInt(num1_1))
        n2.push(parseInt(num1_1))
        const num2_1 = remRandom(_.difference(number3, n3), 1);
        arr1.push(parseInt(num2_1))
        n3.push(parseInt(num2_1))
        const num3_1 = remRandom(_.difference(number4, n4), 1);
        arr1.push(parseInt(num3_1))
        n4.push(parseInt(num3_1))
        const num4_1 = remRandom(_.difference(number5, n5), 1);
        arr1.push(parseInt(num4_1))
        n5.push(parseInt(num4_1))
        const num5_1 = remRandom(_.difference(number6, n6), 1);
        arr1.push(parseInt(num5_1))
        n6.push(parseInt(num5_1))
        const num6_1 = remRandom(_.difference(number7, n7), 1);
        arr1.push(parseInt(num6_1))
        n7.push(parseInt(num6_1))
        const num7_1 = remRandom(_.difference(number8, n8), 1);
        arr1.push(parseInt(num7_1))
        n8.push(parseInt(num7_1))
        const num8_1 = remRandom(_.difference(number9, n9), 1);
        arr1.push(parseInt(num8_1))
        n9.push(parseInt(num8_1))
        const newArr1 = remRandom(arr1, 5)
        const oldRow2 = ['', '', '', '', '', '', '', '', '']
        for (let i = 0; i < 5; i++) {
            if (newArr1[0] < 10) {
                oldRow2[0] = newArr1[0];
            }
            if (newArr1[i] >= 10 && newArr1[i] < 20) {
                oldRow2[1] = newArr1[i];
            }
            if (newArr1[i] >= 20 && newArr1[i] < 30) {
                oldRow2[2] = newArr1[i];
            }
            if (newArr1[i] >= 30 && newArr1[i] < 40) {
                oldRow2[3] = newArr1[i];
            }
            if (newArr1[i] >= 40 && newArr1[i] < 50) {
                oldRow2[4] = newArr1[i];
            }
            if (newArr1[i] >= 50 && newArr1[i] < 60) {
                oldRow2[5] = newArr1[i];
            }
            if (newArr1[i] >= 60 && newArr1[i] < 70) {
                oldRow2[6] = newArr1[i];
            }
            if (newArr1[i] >= 70 && newArr1[i] < 80) {
                oldRow2[7] = newArr1[i];
            }
            if (newArr1[i] >= 80 && newArr1[i] <= 90) {
                oldRow2[8] = newArr1[i];
            }
        }
        setRow1(oldRow2.map((m, index) => ({
            id: index + 1,
            value: m,
            status: 1,
        })));

        const arr2 = []
        const num_2 = remRandom(_.difference(number1, n1), 1);
        arr2.push(parseInt(num_2))
        n1.push(parseInt(num_2))
        const num1_2 = remRandom(_.difference(number2, n2), 1);
        arr2.push(parseInt(num1_2))
        n2.push(parseInt(num1_2))
        const num2_2 = remRandom(_.difference(number3, n3), 1);
        arr2.push(parseInt(num2_2))
        n3.push(parseInt(num2_2))
        const num3_2 = remRandom(_.difference(number4, n4), 1);
        arr2.push(parseInt(num3_2))
        n4.push(parseInt(num3_2))
        const num4_2 = remRandom(_.difference(number5, n5), 1);
        arr2.push(parseInt(num4_2))
        n5.push(parseInt(num4_2))
        const num5_2 = remRandom(_.difference(number6, n6), 1);
        arr2.push(parseInt(num5_2))
        n6.push(parseInt(num5_2))
        const num6_2 = remRandom(_.difference(number7, n7), 1);
        arr2.push(parseInt(num6_2))
        n7.push(parseInt(num6_2))
        const num7_2 = remRandom(_.difference(number8, n8), 1);
        arr2.push(parseInt(num7_2))
        n8.push(parseInt(num7_2))
        const num8_2 = remRandom(_.difference(number9, n9), 1);
        arr2.push(parseInt(num8_2))
        n9.push(parseInt(num8_2))
        const newArr2 = remRandom(arr2, 5)
        const oldRow3 = ['', '', '', '', '', '', '', '', '']
        for (let i = 0; i < 5; i++) {
            if (newArr2[0] < 10) {
                oldRow3[0] = newArr2[0];
            }
            if (newArr2[i] >= 10 && newArr2[i] < 20) {
                oldRow3[1] = newArr2[i];
            }
            if (newArr2[i] >= 20 && newArr2[i] < 30) {
                oldRow3[2] = newArr2[i];
            }
            if (newArr2[i] >= 30 && newArr2[i] < 40) {
                oldRow3[3] = newArr2[i];
            }
            if (newArr2[i] >= 40 && newArr2[i] < 50) {
                oldRow3[4] = newArr2[i];
            }
            if (newArr2[i] >= 50 && newArr2[i] < 60) {
                oldRow3[5] = newArr2[i];
            }
            if (newArr2[i] >= 60 && newArr2[i] < 70) {
                oldRow3[6] = newArr2[i];
            }
            if (newArr2[i] >= 70 && newArr2[i] < 80) {
                oldRow3[7] = newArr2[i];
            }
            if (newArr2[i] >= 80 && newArr2[i] <= 90) {
                oldRow3[8] = newArr2[i];
            }
        }
        setRow2(oldRow3.map((m, index) => ({
            id: index + 1,
            value: m,
            status: 1,
        })));

        const arr3 = []
        const num_3 = remRandom(_.difference(number1, n1), 1);
        arr3.push(parseInt(num_3))
        n1.push(parseInt(num_3))
        const num1_3 = remRandom(_.difference(number2, n2), 1);
        arr3.push(parseInt(num1_3))
        n2.push(parseInt(num1_3))
        const num2_3 = remRandom(_.difference(number3, n3), 1);
        arr3.push(parseInt(num2_3))
        n3.push(parseInt(num2_3))
        const num3_3 = remRandom(_.difference(number4, n4), 1);
        arr3.push(parseInt(num3_3))
        n4.push(parseInt(num3_3))
        const num4_3 = remRandom(_.difference(number5, n5), 1);
        arr3.push(parseInt(num4_3))
        n5.push(parseInt(num4_3))
        const num5_3 = remRandom(_.difference(number6, n6), 1);
        arr3.push(parseInt(num5_3))
        n6.push(parseInt(num5_3))
        const num6_3 = remRandom(_.difference(number7, n7), 1);
        arr3.push(parseInt(num6_3))
        n7.push(parseInt(num6_3))
        const num7_3 = remRandom(_.difference(number8, n8), 1);
        arr3.push(parseInt(num7_3))
        n8.push(parseInt(num7_3))
        const num8_3 = remRandom(_.difference(number9, n9), 1);
        arr3.push(parseInt(num8_3))
        n9.push(parseInt(num8_3))
        const newArr3 = remRandom(arr3, 5)
        const oldRow4 = ['', '', '', '', '', '', '', '', '']
        for (let i = 0; i < 5; i++) {
            if (newArr3[0] < 10) {
                oldRow4[0] = newArr3[0];
            }
            if (newArr3[i] >= 10 && newArr3[i] < 20) {
                oldRow4[1] = newArr3[i];
            }
            if (newArr3[i] >= 20 && newArr3[i] < 30) {
                oldRow4[2] = newArr3[i];
            }
            if (newArr3[i] >= 30 && newArr3[i] < 40) {
                oldRow4[3] = newArr3[i];
            }
            if (newArr3[i] >= 40 && newArr3[i] < 50) {
                oldRow4[4] = newArr3[i];
            }
            if (newArr3[i] >= 50 && newArr3[i] < 60) {
                oldRow4[5] = newArr3[i];
            }
            if (newArr3[i] >= 60 && newArr3[i] < 70) {
                oldRow4[6] = newArr3[i];
            }
            if (newArr3[i] >= 70 && newArr3[i] < 80) {
                oldRow4[7] = newArr3[i];
            }
            if (newArr3[i] >= 80 && newArr3[i] <= 90) {
                oldRow4[8] = newArr3[i];
            }
        }
        setRow3(oldRow4.map((m, index) => ({
            id: index + 1,
            value: m,
            status: 1,
        })));

        const arr4 = []
        const num_4 = remRandom(_.difference(number1, n1), 1);
        arr4.push(parseInt(num_4))
        n1.push(parseInt(num_4))
        const num1_4 = remRandom(_.difference(number2, n2), 1);
        arr4.push(parseInt(num1_4))
        n2.push(parseInt(num1_4))
        const num2_4 = remRandom(_.difference(number3, n3), 1);
        arr4.push(parseInt(num2_4))
        n3.push(parseInt(num2_4))
        const num3_4 = remRandom(_.difference(number4, n4), 1);
        arr4.push(parseInt(num3_4))
        n4.push(parseInt(num3_4))
        const num4_4 = remRandom(_.difference(number5, n5), 1);
        arr4.push(parseInt(num4_4))
        n5.push(parseInt(num4_4))
        const num5_4 = remRandom(_.difference(number6, n6), 1);
        arr4.push(parseInt(num5_4))
        n6.push(parseInt(num5_4))
        const num6_4 = remRandom(_.difference(number7, n7), 1);
        arr4.push(parseInt(num6_4))
        n7.push(parseInt(num6_4))
        const num7_4 = remRandom(_.difference(number8, n8), 1);
        arr4.push(parseInt(num7_4))
        n8.push(parseInt(num7_4))
        const num8_4 = remRandom(_.difference(number9, n9), 1);
        arr4.push(parseInt(num8_4))
        n9.push(parseInt(num8_4))
        const newArr4 = remRandom(arr4, 5)
        const oldRow5 = ['', '', '', '', '', '', '', '', '']
        for (let i = 0; i < 5; i++) {
            if (newArr4[0] < 10) {
                oldRow5[0] = newArr4[0];
            }
            if (newArr4[i] >= 10 && newArr4[i] < 20) {
                oldRow5[1] = newArr4[i];
            }
            if (newArr4[i] >= 20 && newArr4[i] < 30) {
                oldRow5[2] = newArr4[i];
            }
            if (newArr4[i] >= 30 && newArr4[i] < 40) {
                oldRow5[3] = newArr4[i];
            }
            if (newArr4[i] >= 40 && newArr4[i] < 50) {
                oldRow5[4] = newArr4[i];
            }
            if (newArr4[i] >= 50 && newArr4[i] < 60) {
                oldRow5[5] = newArr4[i];
            }
            if (newArr4[i] >= 60 && newArr4[i] < 70) {
                oldRow5[6] = newArr4[i];
            }
            if (newArr4[i] >= 70 && newArr4[i] < 80) {
                oldRow5[7] = newArr4[i];
            }
            if (newArr4[i] >= 80 && newArr4[i] <= 90) {
                oldRow5[8] = newArr4[i];
            }
        }
        setRow4(oldRow5.map((m, index) => ({
            id: index + 1,
            value: m,
            status: 1,
        })));

        const arr5 = []
        const num_5 = remRandom(_.difference(number1, n1), 1);
        arr5.push(parseInt(num_5))
        n1.push(parseInt(num_5))
        const num1_5 = remRandom(_.difference(number2, n2), 1);
        arr5.push(parseInt(num1_5))
        n2.push(parseInt(num1_5))
        const num2_5 = remRandom(_.difference(number3, n3), 1);
        arr5.push(parseInt(num2_5))
        n3.push(parseInt(num2_5))
        const num3_5 = remRandom(_.difference(number4, n4), 1);
        arr5.push(parseInt(num3_5))
        n4.push(parseInt(num3_5))
        const num4_5 = remRandom(_.difference(number5, n5), 1);
        arr5.push(parseInt(num4_5))
        n5.push(parseInt(num4_5))
        const num5_5 = remRandom(_.difference(number6, n6), 1);
        arr5.push(parseInt(num5_5))
        n6.push(parseInt(num5_5))
        const num6_5 = remRandom(_.difference(number7, n7), 1);
        arr5.push(parseInt(num6_5))
        n7.push(parseInt(num6_5))
        const num7_5 = remRandom(_.difference(number8, n8), 1);
        arr5.push(parseInt(num7_5))
        n8.push(parseInt(num7_5))
        const num8_5 = remRandom(_.difference(number9, n9), 1);
        arr5.push(parseInt(num8_5))
        n9.push(parseInt(num8_5))
        const newArr5 = remRandom(arr5, 5)
        const oldRow6 = ['', '', '', '', '', '', '', '', '']
        for (let i = 0; i < 5; i++) {
            if (newArr5[0] < 10) {
                oldRow6[0] = newArr5[0];
            }
            if (newArr5[i] >= 10 && newArr5[i] < 20) {
                oldRow6[1] = newArr5[i];
            }
            if (newArr5[i] >= 20 && newArr5[i] < 30) {
                oldRow6[2] = newArr5[i];
            }
            if (newArr5[i] >= 30 && newArr5[i] < 40) {
                oldRow6[3] = newArr5[i];
            }
            if (newArr5[i] >= 40 && newArr5[i] < 50) {
                oldRow6[4] = newArr5[i];
            }
            if (newArr5[i] >= 50 && newArr5[i] < 60) {
                oldRow6[5] = newArr5[i];
            }
            if (newArr5[i] >= 60 && newArr5[i] < 70) {
                oldRow6[6] = newArr5[i];
            }
            if (newArr5[i] >= 70 && newArr5[i] < 80) {
                oldRow6[7] = newArr5[i];
            }
            if (newArr5[i] >= 80 && newArr5[i] <= 90) {
                oldRow6[8] = newArr5[i];
            }
        }
        setRow5(oldRow6.map((m, index) => ({
            id: index + 1,
            value: m,
            status: 1,
        })));

        const arr6 = []
        const num_6 = remRandom(_.difference(number1, n1), 1);
        arr6.push(parseInt(num_6))
        n1.push(parseInt(num_6))
        const num1_6 = remRandom(_.difference(number2, n2), 1);
        arr6.push(parseInt(num1_6))
        n2.push(parseInt(num1_6))
        const num2_6 = remRandom(_.difference(number3, n3), 1);
        arr6.push(parseInt(num2_6))
        n3.push(parseInt(num2_6))
        const num3_6 = remRandom(_.difference(number4, n4), 1);
        arr6.push(parseInt(num3_6))
        n4.push(parseInt(num3_6))
        const num4_6 = remRandom(_.difference(number5, n5), 1);
        arr6.push(parseInt(num4_6))
        n5.push(parseInt(num4_6))
        const num5_6 = remRandom(_.difference(number6, n6), 1);
        arr6.push(parseInt(num5_6))
        n6.push(parseInt(num5_6))
        const num6_6 = remRandom(_.difference(number7, n7), 1);
        arr6.push(parseInt(num6_6))
        n7.push(parseInt(num6_6))
        const num7_6 = remRandom(_.difference(number8, n8), 1);
        arr6.push(parseInt(num7_6))
        n8.push(parseInt(num7_6))
        const num8_6 = remRandom(_.difference(number9, n9), 1);
        arr6.push(parseInt(num8_6))
        n9.push(parseInt(num8_6))
        const newArr6 = remRandom(arr6, 5)
        const oldRow7 = ['', '', '', '', '', '', '', '', '']
        for (let i = 0; i < 5; i++) {
            if (newArr6[0] < 10) {
                oldRow7[0] = newArr6[0];
            }
            if (newArr6[i] >= 10 && newArr6[i] < 20) {
                oldRow7[1] = newArr6[i];
            }
            if (newArr6[i] >= 20 && newArr6[i] < 30) {
                oldRow7[2] = newArr6[i];
            }
            if (newArr6[i] >= 30 && newArr6[i] < 40) {
                oldRow7[3] = newArr6[i];
            }
            if (newArr6[i] >= 40 && newArr6[i] < 50) {
                oldRow7[4] = newArr6[i];
            }
            if (newArr6[i] >= 50 && newArr6[i] < 60) {
                oldRow7[5] = newArr6[i];
            }
            if (newArr6[i] >= 60 && newArr6[i] < 70) {
                oldRow7[6] = newArr6[i];
            }
            if (newArr6[i] >= 70 && newArr6[i] < 80) {
                oldRow7[7] = newArr6[i];
            }
            if (newArr6[i] >= 80 && newArr6[i] <= 90) {
                oldRow7[8] = newArr6[i];
            }
        }
        setRow6(oldRow7.map((m, index) => ({
            id: index + 1,
            value: m,
            status: 1,
        })));

        const arr7 = []
        const num_7 = remRandom(_.difference(number1, n1), 1);
        arr7.push(parseInt(num_7))
        n1.push(parseInt(num_7))
        const num1_7 = remRandom(_.difference(number2, n2), 1);
        arr7.push(parseInt(num1_7))
        n2.push(parseInt(num1_7))
        const num2_7 = remRandom(_.difference(number3, n3), 1);
        arr7.push(parseInt(num2_7))
        n3.push(parseInt(num2_7))
        const num3_7 = remRandom(_.difference(number4, n4), 1);
        arr7.push(parseInt(num3_7))
        n4.push(parseInt(num3_7))
        const num4_7 = remRandom(_.difference(number5, n5), 1);
        arr7.push(parseInt(num4_7))
        n5.push(parseInt(num4_7))
        const num5_7 = remRandom(_.difference(number6, n6), 1);
        arr7.push(parseInt(num5_7))
        n6.push(parseInt(num5_7))
        const num6_7 = remRandom(_.difference(number7, n7), 1);
        arr7.push(parseInt(num6_7))
        n7.push(parseInt(num6_7))
        const num7_7 = remRandom(_.difference(number8, n8), 1);
        arr7.push(parseInt(num7_7))
        n8.push(parseInt(num7_7))
        const num8_7 = remRandom(_.difference(number9, n9), 1);
        arr7.push(parseInt(num8_7))
        n9.push(parseInt(num8_7))
        const newArr7 = remRandom(arr7, 5)
        const oldRow8 = ['', '', '', '', '', '', '', '', '']
        for (let i = 0; i < 5; i++) {
            if (newArr7[0] < 10) {
                oldRow8[0] = newArr7[0];
            }
            if (newArr7[i] >= 10 && newArr7[i] < 20) {
                oldRow8[1] = newArr7[i];
            }
            if (newArr7[i] >= 20 && newArr7[i] < 30) {
                oldRow8[2] = newArr7[i];
            }
            if (newArr7[i] >= 30 && newArr7[i] < 40) {
                oldRow8[3] = newArr7[i];
            }
            if (newArr7[i] >= 40 && newArr7[i] < 50) {
                oldRow8[4] = newArr7[i];
            }
            if (newArr7[i] >= 50 && newArr7[i] < 60) {
                oldRow8[5] = newArr7[i];
            }
            if (newArr7[i] >= 60 && newArr7[i] < 70) {
                oldRow8[6] = newArr7[i];
            }
            if (newArr7[i] >= 70 && newArr7[i] < 80) {
                oldRow8[7] = newArr7[i];
            }
            if (newArr7[i] >= 80 && newArr7[i] <= 90) {
                oldRow8[8] = newArr7[i];
            }
        }
        setRow7(oldRow8.map((m, index) => ({
            id: index + 1,
            value: m,
            status: 1,
        })));

        const arr8 = []
        const num_8 = remRandom(_.difference(number1, n1), 1);
        arr8.push(parseInt(num_8))
        n1.push(parseInt(num_8))
        const num1_8 = remRandom(_.difference(number2, n2), 1);
        arr8.push(parseInt(num1_8))
        n2.push(parseInt(num1_8))
        const num2_8 = remRandom(_.difference(number3, n3), 1);
        arr8.push(parseInt(num2_8))
        n3.push(parseInt(num2_8))
        const num3_8 = remRandom(_.difference(number4, n4), 1);
        arr8.push(parseInt(num3_8))
        n4.push(parseInt(num3_8))
        const num4_8 = remRandom(_.difference(number5, n5), 1);
        arr8.push(parseInt(num4_8))
        n5.push(parseInt(num4_8))
        const num5_8 = remRandom(_.difference(number6, n6), 1);
        arr8.push(parseInt(num5_8))
        n6.push(parseInt(num5_8))
        const num6_8 = remRandom(_.difference(number7, n7), 1);
        arr8.push(parseInt(num6_8))
        n7.push(parseInt(num6_8))
        const num7_8 = remRandom(_.difference(number8, n8), 1);
        arr8.push(parseInt(num7_8))
        n8.push(parseInt(num7_8))
        const num8_8 = remRandom(_.difference(number9, n9), 1);
        arr8.push(parseInt(num8_8))
        n9.push(parseInt(num8_8))
        const newArr8 = remRandom(arr8, 5)
        const oldRow9 = ['', '', '', '', '', '', '', '', '']
        for (let i = 0; i < 5; i++) {
            if (newArr8[0] < 10) {
                oldRow9[0] = newArr8[0];
            }
            if (newArr8[i] >= 10 && newArr8[i] < 20) {
                oldRow9[1] = newArr8[i];
            }
            if (newArr8[i] >= 20 && newArr8[i] < 30) {
                oldRow9[2] = newArr8[i];
            }
            if (newArr8[i] >= 30 && newArr8[i] < 40) {
                oldRow9[3] = newArr8[i];
            }
            if (newArr8[i] >= 40 && newArr8[i] < 50) {
                oldRow9[4] = newArr8[i];
            }
            if (newArr8[i] >= 50 && newArr8[i] < 60) {
                oldRow9[5] = newArr8[i];
            }
            if (newArr8[i] >= 60 && newArr8[i] < 70) {
                oldRow9[6] = newArr8[i];
            }
            if (newArr8[i] >= 70 && newArr8[i] < 80) {
                oldRow9[7] = newArr8[i];
            }
            if (newArr8[i] >= 80 && newArr8[i] <= 90) {
                oldRow9[8] = newArr8[i];
            }
        }
        setRow8(oldRow9.map((m, index) => ({
            id: index + 1,
            value: m,
            status: 1,
        })));
    }

    const select = (name) => {
        const arr = [...row];
        const num = arr.indexOf(name)
        const newArr = { ...arr[num] }
        setClose(close + 1);
        setTimeout(() => {
            setClose(1)
        },1000)
        if (close === 2) {
            newArr.status = 1;
        }
        else {
            newArr.status = 2;
        }
        arr[num] = newArr;
        setRow(arr);
        const check = arr.filter(f => f.status === 2).length
        if (check === 5) {
            setModalVisible(true)
        }
    }

    const select1 = (name) => {
        const arr = [...row1];
        const num = arr.indexOf(name)
        const newArr = { ...arr[num] }
        setClose(close + 1);
        setTimeout(() => {
            setClose(1)
        },1000)
        if (close === 2) {
            newArr.status = 1;
        }
        else {
            newArr.status = 2;
        }
        arr[num] = newArr;
        setRow1(arr);
        const check = arr.filter(f => f.status === 2).length
        if (check === 5) {
            setModalVisible(true)
        }
    }

    const select2 = (name) => {
        const arr = [...row2];
        const num = arr.indexOf(name)
        const newArr = { ...arr[num] }
        setClose(close + 1);
        setTimeout(() => {
            setClose(1)
        },1000)
        if (close === 2) {
            newArr.status = 1;
        }
        else {
            newArr.status = 2;
        }
        arr[num] = newArr;
        setRow2(arr);
        const check = arr.filter(f => f.status === 2).length
        if (check === 5) {
            setModalVisible(true)
        }
    }

    const select3 = (name) => {
        const arr = [...row3];
        const num = arr.indexOf(name)
        const newArr = { ...arr[num] }
        setClose(close + 1);
        setTimeout(() => {
            setClose(1)
        },1000)
        if (close === 2) {
            newArr.status = 1;
        }
        else {
            newArr.status = 2;
        }
        arr[num] = newArr;
        setRow3(arr);
        const check = arr.filter(f => f.status === 2).length
        if (check === 5) {
            setModalVisible(true)
        }
    }

    const select4 = (name) => {
        const arr = [...row4];
        const num = arr.indexOf(name)
        const newArr = { ...arr[num] }
        setClose(close + 1);
        setTimeout(() => {
            setClose(1)
        },1000)
        if (close === 2) {
            newArr.status = 1;
        }
        else {
            newArr.status = 2;
        }
        arr[num] = newArr;
        setRow4(arr);
        const check = arr.filter(f => f.status === 2).length
        if (check === 5) {
            setModalVisible(true)
        }
    }

    const select5 = (name) => {
        const arr = [...row5];
        const num = arr.indexOf(name)
        const newArr = { ...arr[num] }
        setClose(close + 1);
        setTimeout(() => {
            setClose(1)
        },1000)
        if (close === 2) {
            newArr.status = 1;
        }
        else {
            newArr.status = 2;
        }
        arr[num] = newArr;
        setRow5(arr);
        const check = arr.filter(f => f.status === 2).length
        if (check === 5) {
            setModalVisible(true)
        }
    }

    const select6 = (name) => {
        const arr = [...row6];
        const num = arr.indexOf(name)
        const newArr = { ...arr[num] }
        setClose(close + 1);
        setTimeout(() => {
            setClose(1)
        },1000)
        if (close === 2) {
            newArr.status = 1;
        }
        else {
            newArr.status = 2;
        }
        arr[num] = newArr;
        setRow6(arr);
        const check = arr.filter(f => f.status === 2).length
        if (check === 5) {
            setModalVisible(true)
        }
    }

    const select7 = (name) => {
        const arr = [...row7];
        const num = arr.indexOf(name)
        const newArr = { ...arr[num] }
        setClose(close + 1);
        setTimeout(() => {
            setClose(1)
        },1000)
        if (close === 2) {
            newArr.status = 1;
        }
        else {
            newArr.status = 2;
        }
        arr[num] = newArr;
        setRow7(arr);
        const check = arr.filter(f => f.status === 2).length
        if (check === 5) {
            setModalVisible(true)
        }
    }

    const select8 = (name) => {
        const arr = [...row8];
        const num = arr.indexOf(name)
        const newArr = { ...arr[num] }
        setClose(close + 1);
        setTimeout(() => {
            setClose(1)
        },1000)
        if (close === 2) {
            newArr.status = 1;
        }
        else {
            newArr.status = 2;
        }
        arr[num] = newArr;
        setRow8(arr);
        const check = arr.filter(f => f.status === 2).length
        if (check === 5) {
            setModalVisible(true)
        }
    }

    return (
        <View style={[styles.wrapper, { backgroundColor: backColor, }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
                <TouchableOpacity
                    onPress={() => randomNum1()}
                    activeOpacity={0.9}
                    style={styles.button}
                >
                    <Text style={{ fontSize: 16, color: 'blue' }} >
                        Làm mới
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        quaySo()
                        setDisabled(true)
                    }}
                    activeOpacity={0.9}
                    style={styles.button}
                    disabled={disabled ? true : false}
                >
                    <Text style={{ fontSize: 16, color: 'blue' }} >
                        Quay số
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.title}>
                    <Text style={styles.txtTitle}>MỪNG ĐẢNG MỪNG XUÂN 2021</Text>
                </View>
                <View style={styles.top}>
                    <View style={styles.border}>
                        {row.map((m, index) => (
                            <TouchableOpacity
                                key={m.id}
                                activeOpacity={0.9}
                                disabled={m.value ? false : true}
                                onPress={() => select(m)}
                                style={[styles.item,
                                {
                                    borderRightWidth: index === 8 ? 0 : 1,
                                    backgroundColor: m.value ? 'white' : backColor
                                }]}
                            >
                                <Text style={styles.text}>{m.value}</Text>
                                {m.status === 2 ? <View style={{ position: 'absolute' }}>
                                    <Text style={styles.txtX}>X</Text>
                                </View> : null}
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.border}>
                        {row1.map((m, index) => (
                            <TouchableOpacity
                                key={m.id}
                                activeOpacity={0.9}
                                disabled={m.value ? false : true}
                                onPress={() => select1(m)}
                                style={[styles.item,
                                {
                                    borderRightWidth: index === 8 ? 0 : 1,
                                    backgroundColor: m.value ? 'white' : backColor
                                }]}
                            >
                                <Text style={styles.text}>{m.value}</Text>
                                {m.status === 2 ? <View style={{ position: 'absolute' }}>
                                    <Text style={styles.txtX}>X</Text>
                                </View> : null}
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={[styles.border, { borderBottomWidth: 0 }]}>
                        {row2.map((m, index) => (
                            <TouchableOpacity
                                key={m.id}
                                activeOpacity={0.9}
                                disabled={m.value ? false : true}
                                onPress={() => select2(m)}
                                style={[styles.item,
                                {
                                    borderRightWidth: index === 8 ? 0 : 1,
                                    backgroundColor: m.value ? 'white' : backColor
                                }]}
                            >
                                <Text style={styles.text}>{m.value}</Text>
                                {m.status === 2 ? <View style={{ position: 'absolute' }}>
                                    <Text style={styles.txtX}>X</Text>
                                </View> : null}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={styles.title}>
                    <Text style={styles.txtTitle}>ESTUARY 2021</Text>
                </View>
                <View style={styles.top}>
                    <View style={styles.border}>
                        {row3.map((m, index) => (
                            <TouchableOpacity
                                key={m.id}
                                activeOpacity={0.9}
                                disabled={m.value ? false : true}
                                onPress={() => select3(m)}
                                style={[styles.item,
                                {
                                    borderRightWidth: index === 8 ? 0 : 1,
                                    backgroundColor: m.value ? 'white' : backColor
                                }]}
                            >
                                <Text style={styles.text}>{m.value}</Text>
                                {m.status === 2 ? <View style={{ position: 'absolute' }}>
                                    <Text style={styles.txtX}>X</Text>
                                </View> : null}
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.border}>
                        {row4.map((m, index) => (
                            <TouchableOpacity
                                key={m.id}
                                activeOpacity={0.9}
                                disabled={m.value ? false : true}
                                onPress={() => select4(m)}
                                style={[styles.item,
                                {
                                    borderRightWidth: index === 8 ? 0 : 1,
                                    backgroundColor: m.value ? 'white' : backColor
                                }]}
                            >
                                <Text style={styles.text}>{m.value}</Text>
                                {m.status === 2 ? <View style={{ position: 'absolute' }}>
                                    <Text style={styles.txtX}>X</Text>
                                </View> : null}
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={[styles.border, { borderBottomWidth: 0 }]}>
                        {row5.map((m, index) => (
                            <TouchableOpacity
                                key={m.id}
                                activeOpacity={0.9}
                                disabled={m.value ? false : true}
                                onPress={() => select5(m)}
                                style={[styles.item,
                                {
                                    borderRightWidth: index === 8 ? 0 : 1,
                                    backgroundColor: m.value ? 'white' : backColor
                                }]}
                            >
                                <Text style={styles.text}>{m.value}</Text>
                                {m.status === 2 ? <View style={{ position: 'absolute' }}>
                                    <Text style={styles.txtX}>X</Text>
                                </View> : null}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={styles.title}>
                    <Text style={styles.txtTitle}>LUBRYTICS 2021</Text>
                </View>
                <View style={styles.top}>
                    <View style={styles.border}>
                        {row6.map((m, index) => (
                            <TouchableOpacity
                                key={m.id}
                                activeOpacity={0.9}
                                disabled={m.value ? false : true}
                                onPress={() => select6(m)}
                                style={[styles.item,
                                {
                                    borderRightWidth: index === 8 ? 0 : 1,
                                    backgroundColor: m.value ? 'white' : backColor
                                }]}
                            >
                                <Text style={styles.text}>{m.value}</Text>
                                {m.status === 2 ? <View style={{ position: 'absolute' }}>
                                    <Text style={styles.txtX}>X</Text>
                                </View> : null}
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.border}>
                        {row7.map((m, index) => (
                            <TouchableOpacity
                                key={m.id}
                                activeOpacity={0.9}
                                disabled={m.value ? false : true}
                                onPress={() => select7(m)}
                                style={[styles.item,
                                {
                                    borderRightWidth: index === 8 ? 0 : 1,
                                    backgroundColor: m.value ? 'white' : backColor
                                }]}
                            >
                                <Text style={styles.text}>{m.value}</Text>
                                {m.status === 2 ? <View style={{ position: 'absolute' }}>
                                    <Text style={styles.txtX}>X</Text>
                                </View> : null}
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={[styles.border, { borderBottomWidth: 0 }]}>
                        {row8.map((m, index) => (
                            <TouchableOpacity
                                key={m.id}
                                activeOpacity={0.9}
                                disabled={m.value ? false : true}
                                onPress={() => select8(m)}
                                style={[styles.item,
                                {
                                    borderRightWidth: index === 8 ? 0 : 1,
                                    backgroundColor: m.value ? 'white' : backColor
                                }]}
                            >
                                <Text style={styles.text}>{m.value}</Text>
                                {m.status === 2 ? <View style={{ position: 'absolute' }}>
                                    <Text style={styles.txtX}>X</Text>
                                </View> : null}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
            <PhaoHoa
                modalVisible={modalVisible}
                closeModal={() => setModalVisible(false)}
            />
            <QuaySo
                modalVisible={modalQuay}
                closeModal={() => {
                    setModalQuay(null)
                    setTimeout(() => {
                        setDisabled(false)
                    }, 100)
                }}
                list={list}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    top: {
        borderWidth: 1,
        borderColor: 'black',
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
    },
    item: {
        borderRightWidth: 1,
        borderRightColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width / 9.6,
        height: Dimensions.get('window').height / 15,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 5
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        width: Dimensions.get('window').width / 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    txtX: {
        fontSize: 46,
        fontWeight: Platform.OS === 'ios' ? '100' : 'normal',
        color: 'red'
    }
});

export default codePush(codePushOptions)(Ticket);
