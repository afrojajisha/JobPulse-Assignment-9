import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';


const Statistics = () => {
    const assignments = [
        { id: 1, name: "assignment-1", marks: 28, fullMarks: 30 },
        { id: 2, name: "assignment-2", marks: 29, fullMarks: 30 },
        { id: 3, name: "assignment-3", marks: 27, fullMarks: 30 },
        { id: 4, name: "assignment-4", marks: 25, fullMarks: 30 },
        { id: 5, name: "assignment-5", marks: 28, fullMarks: 30 },
        { id: 6, name: "assignment-6", marks: 28, fullMarks: 30 },
        { id: 7, name: "assignment-7", marks: 30, fullMarks: 30 }
      ];
      
     
      
    return (
        <>
        <div className='mt-20 mx-auto'>
            <h2 className='mr-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-400'>Assignment Marks Statistics</h2>
            <div className='ml-36 mt-2'>
                <ComposedChart
                width={900}
                height={400}
                data={assignments}>
                    <XAxis dataKey="name" scale="band" />
                    <YAxis/>
                    <Tooltip/>
                    <Area  dataKey="marks" fill="#a8c4bc" stroke="" />
                    <Bar dataKey="marks" barSize={40} fill="#09B3D6" />
                    <Line  dataKey="marks" stroke="#ff7300" />
                    <Scatter dataKey="marks" fill="#6517ed" />
            </ComposedChart>
            </div>
    
            
       
      
        </div>
        </>
    );
};

export default Statistics;