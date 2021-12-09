import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const App = () => {
    const [numbers, setNumbers] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetchData();
        countNumbers(numbers);
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
        let countZero = 0;
        let countOne = 0;
        let countTwo = 0;
        let countThree = 0;
        let countFour = 0;
        let countFive = 0;
        let countSix = 0;
        let countSeven = 0;
        let countEight = 0;
        let countNine = 0;

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
                case '0':
                    countZero++;
                    continue;
                default:
            }
        }
        setResults([
            {
                name: '0',
                data: countZero
            },
            {
                name: '1',
                data: countOne
            },
            {
                name: '2',
                data: countTwo
            },
            {
                name: '3',
                data: countThree
            },
            {
                name: '4',
                data: countFour
            },
            {
                name: '5',
                data: countFive
            },
            {
                name: '6',
                data: countSix
            },
            {
                name: '7',
                data: countSeven
            },
            {
                name: '8',
                data: countEight
            },
            {
                name: '9',
                data: countNine
            }
        ]);
    };

    console.log('results: ', results);
    return (
        <div>
            <h1>Histogram</h1>
            <ResponsiveContainer width='100%' aspect={3}>
                <BarChart width={800} height={300} data={results}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Bar dataKey='data' fill='lightblue'/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default App;
