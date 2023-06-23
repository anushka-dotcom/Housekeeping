import React from 'react';
import Nav from "./Admin_main";

import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ScatterChart,
    PieChart,
    Pie,
    PolarAngleAxis,
    PolarRadiusAxis,
    Cell
} from "recharts"
const AdminDashboard = () => {
    const  COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
    const data=[
        {
            month: "Jan",
            savings: 4000,
            checkings: 1000,
        },
        {
            month: "feb",
            savings: 2000,
            checkings:1000,
        },
        {
            month: "mar",
            savings: 7000,
            checkings: 6000,
        },
        {
            month: "apr",
            savings: 9000,
            checkings: 2000,
        }
    ]
    return (
        <>
        <Nav/>
        <nav class="navbar navbar-light" style={{backgroundColor: '#ff9933' }}>
             <div class="container-fluid ">
                <h2 class="ms-5">Dashboard</h2>
            
                 
            </div>
        </nav>
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-7">
                <BarChart width={500} height={300} data={data}>
            
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <Legend></Legend>
            <Tooltip></Tooltip>
            <Bar type="monotone" dataKey="checkings" stroke="blue" fill="purple"></Bar>
            <Bar type="monotone" dataKey="savings" stroke="red" fill="red" ></Bar>
           </BarChart>
                </div>
                <div className="col-sm-5">
                <PieChart width={500} height={300} >
            
            
            
            <Legend></Legend>
            <Tooltip></Tooltip>
            <Pie 
            data={data}
            color="#000000"
            dataKey="savings"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            >
                {data.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]}
            />
         ))}
            </Pie>
            
           </PieChart>
                </div>
            </div>
           <AreaChart width={1000} height={300} data={data}>
            
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <Legend></Legend>
            <Tooltip></Tooltip>
            <Area type="monotone" dataKey="checkings" stroke="blue" fill="blue"></Area>
            <Area type="monotone" dataKey="savings" stroke="red" fill="orange" ></Area>
           </AreaChart>
        </div>
        </>
    );
}

export default AdminDashboard;
