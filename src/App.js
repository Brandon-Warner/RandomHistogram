import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    LabelList,
    Legend,
    Tooltip
} from 'recharts';

const App = () => {
    const [results, setResults] = useState([
        {
            name: '0'
        },
        {
            name: '1'
        },
        {
            name: '2'
        },
        {
            name: '3'
        },
        {
            name: '4'
        },
        {
            name: '5'
        },
        {
            name: '6'
        },
        {
            name: '7'
        },
        {
            name: '8'
        },
        {
            name: '9'
        }
    ]);

    const fetchData = async () => {
        console.log('fetch is firing');
        const data = await axios.get(
            'https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new'
        );

        const stringData = data.data.toString();
        const cleanData = stringData.replace(/(\r\n|\n|\r)/gm, '').split('');
        console.log('cleanData: ', cleanData);
        countNumbers(cleanData);
    };

    const countNumbers = numbers => {
        let response = [];
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
        console.log('countNumbers is firing');

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
        response = [
            {
                name: '0',
                count: countZero
            },
            {
                name: '1',
                count: countOne
            },
            {
                name: '2',
                count: countTwo
            },
            {
                name: '3',
                count: countThree
            },
            {
                name: '4',
                count: countFour
            },
            {
                name: '5',
                count: countFive
            },
            {
                name: '6',
                count: countSix
            },
            {
                name: '7',
                count: countSeven
            },
            {
                name: '8',
                count: countEight
            },
            {
                name: '9',
                count: countNine
            }
        ];
        console.log('response: ', response);
        setResults(response);
    };

    const handleDataFetch = async e => {
        e.preventDefault();

        await fetchData();
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', padding: '10px' }}>Random Number Distribution</h1>
            <div style={{ textAlign: 'center', padding: '1em' }}>
                <button className='btn' onClick={handleDataFetch}>
                    GET DATA
                </button>
            </div>
            <ResponsiveContainer width='90%' aspect={3} style={{ margin: '0 auto' }}>
                <BarChart width={800} height={300} data={results}>
                    <CartesianGrid strokeDasharray='4 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='count' fill='purple'>
                        <LabelList dataKey='count' position='top' />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default App;
