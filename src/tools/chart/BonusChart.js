import {useD3} from "./UseD3";
import * as d3 from "d3";
import './index.css'
import React from "react";
import bonusData from "./daletou.json";
import a from "../a";

const arrayRange = (start,stop,step) => Array.from(
    {length: (stop - start) / step + 1},
    (value,index) => start + index * step
);
function Chart({data}){
    const ref = useD3((svg) => {
        const y1Height = 600;
        const y2Height = 192
        const width = 8000;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };
        const front = arrayRange(1,35,1)
        const back = arrayRange(1,12,1)

        const x = d3
            .scaleBand()
            .range([margin.left,width - margin.right])
            .domain(data.map((d) => +d["issue"]))
            .padding(0.1);

        const y1 = d3.scaleBand()
            .range([y1Height - margin.bottom, margin.top])
            .domain(front)
            .padding(0.1);

        const y2 = d3.scaleBand()
            .range([y1Height,y1Height + y2Height])
            .domain(back)
            .padding(0.1);

        const xAxis = (g) =>
            g.attr("transform", `translate(0,${y1Height - margin.bottom})`).call(
                d3
                    .axisBottom(x)
                    .tickSizeOuter(0)
                    .tickValues(
                        d3
                            .ticks(...d3.extent(x.domain()), Array.from(data).length * 5)
                            .filter((v) => x(v) !== undefined)
                    )
            );

        const y1Axis = (g) =>
            g.attr("transform", `translate(${margin.left},0)`).call(
                d3
                    .axisLeft(y1)
                    .tickSizeOuter(0)
                    .tickValues(
                        d3
                            .ticks(...d3.extent(y1.domain()), 35)
                            .filter((v) => y1(v) !== undefined)
                    )
            );

        const y2Axis = (g) =>
            g.attr("transform", `translate(${margin.left},0)`).call(
                d3
                    .axisLeft(y2)
                    .tickValues(
                        d3
                            .ticks(...d3.extent(y2.domain()), 12)
                            .filter((v) => y2(v) !== undefined)
                    )
            );

        svg.select(".x-axis").call(xAxis);
        svg.select(".y1-axis").call(y1Axis);
        svg.select(".y2-axis").call(y2Axis);

        const len =  data.length
        const average = (width - margin.right - margin.left) / len
        const heightAverage = (margin.top - y1Height + margin.bottom) / 35
        const backHeightAverage = y2Height / 12

        const frontNum = []
        data.flatMap(d => {
            for (const num in d['front-number']) {
                frontNum.push({
                    num: d['front-number'][num]
                })
            }
        })

        const backNum = []
        data.flatMap(d => {
            for (const num in d['back-number']) {
                backNum.push({
                    num: d['back-number'][num]
                })
            }
        })

        //渲染前区号码
        svg.select('.front').selectAll('circle')
            .data(frontNum)
            .enter()
            .append('circle')
            .attr("cx", (d, i) =>{
                return `${margin.left + average * (Math.floor(i / 5) + 0.55)}`
            })
            .attr('cy', (d) =>
                `${y1Height - margin.bottom + heightAverage * (d.num - 0.5)}`
            )
            .attr('r', '5')
            .attr('fill', (d,i) => {
                switch (i % 5) {
                    case 0: return "red";
                    case 1: return "orange";
                    case 2: return "yellow";
                    case 3: return "green";
                    case 4: return "blue";
                }
            })

        svg.select('.front').selectAll('text')
            .data(frontNum)
            .enter()
            .append('text')
            .attr('x',(d, i) =>{
                return `${margin.left + average * (Math.floor(i / 5) + 0.55)}`
            })
            .attr('y',(d) =>
                `${y1Height - margin.bottom + heightAverage * (d.num - 0.65)}`)
            .text(
                d => d.num
            )
            .attr('text-anchor',"middle")
            .style('font-size','8px')
            .style('color','black')

        //渲染后区号码
        svg.select('.back').selectAll('circle')
            .data(backNum)
            .enter()
            .append('circle')
            .attr("cx", (d, i) =>{
                return `${margin.left + average * (Math.floor(i / 2) + 0.55)}`
            })
            .attr('cy', (d, i) =>
                `${y1Height + backHeightAverage * (d.num - 0.5)}`
            )
            .attr('r', '5')
            .attr('fill', 'purple')

        svg.select('.back').selectAll('text')
            .data(backNum)
            .enter()
            .append('text')
            .attr("x", (d, i) =>{
                return `${margin.left + average * (Math.floor(i / 2) + 0.55)}`
            })
            .attr('y', (d, i) =>
                `${y1Height + backHeightAverage * (d.num - 0.4)}`
            )
            .text(
                d => d.num
            )
            .attr('text-anchor',"middle")
            .style('font-size','8px')
            .style('color','black')
    },[data])

    return (
        <div id="halfpage">
            <svg ref={ref}
                 style={{
                     height: 800,
                     width: 8000,
                     marginRight: "0px",
                     marginLeft: "0px",
                 }}
            >
                <g className="plot-area" />
                <g className="x-axis" />
                <g className="y1-axis" />
                <g className="y2-axis" />
                <g className="front" />
                <g className="back" />
            </svg>
        </div>
    );
}

function BonusChart(){
    return (
        <Chart data={bonusData.data.slice(0,199)}/>
    );
}

export default BonusChart;