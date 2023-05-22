import {useD3} from "./UseD3";
import * as d3 from "d3";
import React, {useEffect, useRef} from "react";
import data from './china.json';
import {colorConfig,population2020} from '../../data/china-data'

function Map({data, fillMode}){
    const ref = useD3(
        (svg) => {
            const projection = d3.geoMercator().scale(750).center([101, 42]);
            const path = d3.geoPath().projection(projection)
            svg.attr("width", "100%").attr("height", "100%")

            svg.selectAll("path")
                .on("mouseenter", function(){
                    d3.select(this)
                        .attr("fill","blue")
                })
                .on("mouseout", function(){
                    d3.select(this)
                        .attr("fill", fillMode)
                })
                .data(data.features)
                .enter()
                .append("path")
                .attr("fill",fillMode)
                .attr("stroke", "white")
                .attr("d", path)

            svg.selectAll('text')
                .data(data.features)
                .enter()
                .append('text')
                .attr('transform',d => {
                    const coor = projection(d.properties.cp || d3.geoCentroid(d))
                    return "translate(" + coor[0] + "," + coor[1] + ")"
                })
                .text(
                    d => d.properties.name
                )
                .attr('text-anchor',"middle")
                .style('font-size','8px')
                .style('color','#6E6E6E')
        },
        [data]
    );

    return (
        <svg ref={ref}>

        </svg>
    );
}

function fillByPopulation(d){
    const p = population2020[d.properties.name]
    const ranges = Object.values(colorConfig)
    const index = ranges.findIndex((v,i) => {
        if(p >= v[0] && p <= v[1]) return true;
    })
    return Object.keys(colorConfig)[index];
}

export function ChinaPopulationMap(){
    return <Map data={data} fillMode={fillByPopulation}/>
}