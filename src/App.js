import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

const App = () => {
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        fetchData();
    }, [setNumbers]);

    const fetchData = async () => {
        const data = await axios.get(
            'https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new'
        );

        const stringData = data.data.toString();
        const cleanData = stringData.replace(/(\r\n|\n|\r)/gm, '').split('');
        console.log('cleanData: ', cleanData);
        setNumbers(cleanData);
    };

    console.log('numbers: ', numbers);

    const countNumbers = numbers => {
        let countOne = 0;
        let countTwo = 0;
        let countThree = 0;
        let countFour = 0;
        let countFive = 0;
        let countSix = 0;
        let countSeven = 0;
        let countEight = 0;
        let countNine = 0;
        let countTen = 0;
        for (let i = 0; i < numbers.length; i++) {
            // console.log('numbers[i]: ', numbers[i]);
            switch (numbers[i]) {
                case '1':
                    countOne++;
                    continue;
                case '2':
                    countTwo++;
                    continue;
                case '3':
                    countThree++;
                    continue;
                case '4':
                    countFour++;
                    continue;
                case '5':
                    countFive++;
                    continue;
                case '6':
                    countSix++;
                    continue;
                case '7':
                    countSeven++;
                    continue;
                case '8':
                    countEight++;
                    continue;
                case '9':
                    countNine++;
                    continue;
                case '10':
                    countTen++;
                    continue;
                default:
            }
        }
        return [
            countOne,
            countTwo,
            countThree,
            countFour,
            countFive,
            countSix,
            countSeven,
            countEight,
            countNine,
            countTen
        ];
    };

    console.log('countNumber: ', countNumbers(numbers));
    return (
        <div>
            <h1>Histogram</h1>
        </div>
    );
};

export default App;
