import React, { Component } from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';

const data = [
    {
      name: '1 Nov', pesanan: 5,
    },
    {
      name: '2 Nov', pesanan: 3,
    },
    {
      name: '3 Nov', pesanan: 7,
    },
    {
      name: '4 Nov', pesanan: 2,
    },
    {
      name: '5 Nov', pesanan: 1,
    },
    {
      name: '6 Nov', pesanan: 8,
    },
    {
      name: '7 Nov', pesanan: 5,
    },
  ];

export class GarisChart extends Component {
    render() {
        return (
            <div>
        <LineChart
          width={600}
          height={200}
          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend/>
          <Line connectNulls type="monotone" dataKey="pesanan" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
            </div>
            
        )
    }
}

export default GarisChart
