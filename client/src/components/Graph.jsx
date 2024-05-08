import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const Graph = ({ data }) => {
  const [width] = useState(400);
  const [height] = useState(300);
  const [marginLeft] = useState(20);
  const [marginRight] = useState(20);
  const [marginBottom] = useState(40);
  const [marginTop] = useState(20);
  const [xAxisLabel] = useState("Time");
  const [yAxisLabel] = useState("Visits");

  const gx = useRef();
  const gy = useRef();
  const x = d3.scaleLinear().domain([0, data.length - 1]).range([marginLeft, width - marginRight]);
  const y = d3.scaleLinear().domain(d3.extent(data)).range([height - marginBottom, marginTop]);
  const line = d3.line().x((d, i) => x(i)).y(y);

  useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x).tickSize(0).tickPadding(10)), [gx, x]);
  useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y).tickSize(0).tickPadding(10).tickFormat('')), [gy, y]); // Setting tickFormat to empty string

  return (
    <div>
      <svg width={width} height={height} style={{ fontSize: '12px', color: "blue" }}>
        <g ref={gx} transform={`translate(0,${height - marginBottom})`}>
          <text x={(width - marginLeft - marginRight) / 2} y={marginTop + marginBottom - 5} textAnchor="middle">{xAxisLabel}</text>
        </g>
        <g ref={gy} transform={`translate(${marginLeft},0)`}>
          <text x={0 - marginTop} y={0 - marginLeft + 10} transform="rotate(-90)" textAnchor="middle">{yAxisLabel}</text>
        </g>
        <path fill="none" stroke="#000" strokeWidth="2" d={line(data)} />
        <g fill="white" stroke="currentColor" strokeWidth="1.5">
          {data.map((d, i) => (<circle key={i} cx={x(i)} cy={y(d)} r="3" />))}
        </g>
      </svg>
    </div>
  );
};

export default Graph;
