import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function CustomBarChart() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: [
              "bar A",
              "bar B",
              "bar C",
              "bar D",
              "bar E",
              "bar F",
              "bar G",
              "bar H",
              "bar I",
              "bar J",
              "bar K",
              "bar L",
              "bar M",
              "bar N",
              "bar O",
              "bar P",
              "bar Q",
              "bar R",
              "bar S",
              "bar T",
              "bar U",
              "bar V",
            ],
            scaleType: "band",
            disableLine: true,
            disableTicks: true,
            disableLabels: true,
          },
        ]}
        yAxis={[
          {
            id: "leftAxis",
            disableLine: true,
            disableTicks: true,
            disableLabels: true,
          },
        ]}
        series={[
          {
            data: [
              8, 3, 2, 4, 6, 3, 7, 5, 9, 2, 5, 5, 3, 4, 7, 4, 9, 8, 6, 7, 10, 5,
            ],
            color: "#DCE6FF", // Light blue color
          },
        ]}
        width={510}
        height={200}
        margin={{ top: 0, bottom: 0, left: 0, right: 0 }} // Remove extra margins
      />
    </div>
  );
}
