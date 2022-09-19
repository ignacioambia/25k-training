import Chart from "chart.js/auto";
import { trainingValues } from "./trainingPlan";
import { realTrainingValues } from "./realTrainingValues";
import createDataSet from "./utils/createDataset";

const labels = trainingValues.map((e) => {
  const week = Math.ceil(e.day / 7);
  const day = e.day % 7;
  return `W${week}-D${day || 7}`;
});

const ctx = document.getElementById("25k-chart");
const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      createDataSet(trainingValues, "Plan"),
      {
        ...createDataSet(realTrainingValues, "Plan"),
        borderColor: "#0077b6",
        backgroundColor: "rgba(0, 119, 182,0.3)",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
