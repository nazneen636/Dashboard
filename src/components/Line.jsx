// import * as React from "react";
// import { ChartContainer } from "@mui/x-charts/ChartContainer";
// import { BarPlot } from "@mui/x-charts/BarChart";

// const uData = [
//   4000, 3000, 2000, 2780, 1890, 2390, 3490, 4000, 3000, 2000, 2780, 1890, 2390,
//   3490,
// ];
// const xLabels = [
//   "Page A",
//   "Page B",
//   "Page C",
//   "Page D",
//   "Page E",
//   "Page F",
//   "Page G",
//   "Page H",
//   "Page I",
//   "Page J",
//   "Page K",
//   "Page L",
//   "Page M",
//   "Page N",
// ];

// export default function TinyBarChart() {
//   return (
//     <ChartContainer
//       width={510}
//       height={200}
//       series={[{ data: uData, label: "uv", type: "bar" }]}
//       xAxis={[{ scaleType: "band", data: xLabels }]}
//       margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
//     >
//       <BarPlot />
//     </ChartContainer>
//   );
// }

import * as React from "react";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";

const uData = [
  10, 20, 10, 20, 10, 20, 5, 10, 20, 10, 15, 15, 10, 13, 22, 10, 9, 10, 15, 30,
  20,
];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
  "Page H",
  "Page I",
  "Page J",
  "Page K",
  "Page L",
  "Page M",
  "Page N",
  "Page O",
  "Page P",
  "Page Q",
  "Page R",
  "Page S",
  "Page T",
  "Page U",
];

export default function TinyBarChart() {
  return (
    <ChartContainer
      width={500}
      height={100}
      series={[{ data: uData, label: "uv", type: "bar" }]}
      xAxis={[{ scaleType: "band", data: xLabels }]}
      margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
    >
      <BarPlot />
    </ChartContainer>
  );
}
