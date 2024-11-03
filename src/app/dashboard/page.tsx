// pages/index.tsx
// import Layout from "./layout"; // Adjust the path as necessary
// import { ReactNode } from "react";

// interface HomePageProps {
//   children: ReactNode;
// }

import { ChartArea } from "@/components/areachart";
import { DoubleBarChart } from "@/components/doublebarchart";
import { PieChartVisitor } from "@/components/piechart";

export default function HomePage() {
  return(
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <ChartArea />
      <PieChartVisitor />
      <DoubleBarChart />
    </div>
  );
}
