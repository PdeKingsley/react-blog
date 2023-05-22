import {useD3} from "./UseD3";
import * as d3 from "d3";
import './index.css'
import React from "react";
import bonusData from "./daletou.json";

const arrayRange = (start,stop,step) => Array.from(
    {length: (stop - start) / step + 1},
    (value,index) => start + index * step
);
function BonusChart({data = bonusData}){
    const ref = useD3((svg) => {
        const height = 800;
        const width = 161760;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };

        const x = d3
            .scaleBand()
            .range([margin.left,width - margin.right])
            .domain(data.map((d) => +d["issue"]).sort())
            .padding(0.1);

        const xAxis = (g) =>
            g.attr("transform", `translate(0,${height - margin.bottom})`).call(
                d3
                    .axisBottom(x)
                    .tickSizeOuter(0)
                    .tickValues(
                        d3
                            .ticks(...d3.extent(x.domain()), Array.from(data).length * 5)
                            .filter((v) => x(v) !== undefined)
                    )
            );

        svg.select(".x-axis").call(xAxis);
    },[])

    return (
        <div id="halfpage">
            <svg ref={ref}
                 style={{
                     height: 1000,
                     width: 161760,
                     marginRight: "0px",
                     marginLeft: "0px",
                 }}
            >
                <g className="plot-area" />
                <g className="x-axis" />
                <g className="y-axis" />
            </svg>
        </div>
    );
}

export default BonusChart;