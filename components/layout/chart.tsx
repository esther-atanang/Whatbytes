"use client";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { DATA } from "@/lib/constants";

const Chart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={DATA}
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
