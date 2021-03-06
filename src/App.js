import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Stack, LinearProgress } from '@mui/material';
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
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        console.log('fetch is firing');
        setLoading(true);
        const data = await axios.get(
            'https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new'
        );

        const stringData = data.data.toString();
        const cleanData = stringData.replace(/(\r\n|\n|\r)/gm, '').split('');
        console.log('cleanData: ', cleanData);
        countNumbers(cleanData);
        setLoading(false);
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

    const calculateMax = results => {
        let max = results[0].count;
        const numbers = results.map(r => r.count);
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        return max;
    };

    const calculateMin = results => {
        let min = results[0].count;
        const numbers = results.map(r => r.count);
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < min) {
                min = numbers[i];
            }
        }
        return min;
    };

    const calculateAvg = results => {
        const numbers = results.map(r => Number(r.count));
        const total = numbers.reduce((current, sum) => {
            return (sum += current);
        }, 0);

        console.log('total: ', total);

        const average = total / 10;

        return average ? average : '';
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', padding: '10px' }}>Random Number Distribution</h1>
            <div style={{ textAlign: 'center', padding: '1em' }}>
                <button className='btn' onClick={handleDataFetch}>
                    GET DATA
                </button>
            </div>
            <ResponsiveContainer id='graph' width='95%' aspect={3}>
                {loading ? (
                    <Stack sx={{ width: '100%' }}>
                        <LinearProgress color='secondary' />
                    </Stack>
                ) : (
                    <BarChart width='100%' height='100%' data={results}>
                        <CartesianGrid strokeDasharray='4 3' />
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey='count' fill='purple'>
                            <LabelList dataKey='count' position='top' />
                        </Bar>
                    </BarChart>
                )}
            </ResponsiveContainer>

            <div id='analysis-data'>
                <h3 id='analysis-data-point'>Max: {calculateMax(results)}</h3>
                <h3 id='analysis-data-point'>Min: {calculateMin(results)}</h3>
                <h3 id='analysis-data-point'>Average: {calculateAvg(results)}</h3>
            </div>
        </div>
    );
};

export default App;
