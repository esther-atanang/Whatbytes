"use client";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";


const Chart = () => {
    const data = [
        {
            developers: 2,
            grade: 0,
        },
        {
            developers: 1,
            grade: 25,
        },
        {
            developers: 2,
            grade: 35,
        },
        {
            developers: 5,
            grade: 50,
        },
        {
            developers: 3,
            grade: 75,
        },
        {
            developers: 2,
            grade: 90,
        },
        {
            developers: 1,
            grade: 100,
        },

    ];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis type="number" dataKey="grade" domain={[0, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="developers" stroke=" #9810fa" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Chart;
