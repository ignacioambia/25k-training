import Chart from "chart.js/auto";

const data = [
  //week 1
  { day: 1, type: "strength" },
  { day: 2, distance: 5, type: "running" },
  { day: 3, distance: 3, type: "fartlek", fartlekReps: 5 },
  { day: 4, distance: 5, type: "runstrength" },
  { day: 5, type: "rest" },
  { day: 6, distance: 5, type: "running" },
  { day: 7, distance: 8, type: "running" },
  //week 2
  { day: 8, type: "strength" },
  { day: 9, distance: 5, type: "running" },
  { day: 10, time: 30, type: "rythm" },
  { day: 11, distance: 5, type: "runstrength" },
  { day: 12, type: "rest" },
  { day: 13, distance: 5, type: "running" },
  { day: 14, distance: 10, type: "running" },
  //week 3
  { day: 15, type: "strength" },
  { day: 16, distance: 6, type: "running" },
  { day: 17, distance: 3.6, type: "fartlek", fartlekReps: 6 },
  { day: 18, distance: 5, type: "runstrength" },
  { day: 19, type: "rest" },
  { day: 20, type: "rest" },
  { day: 21, distance: 5, type: "running" },
  // week 4
  { day: 22, type: "strength" },
  { day: 23, distance: 6, type: "running" },
  { day: 24, time: 35, type: "rythm" },
  { day: 25, distance: 5, type: "runstrength" },
  { day: 26, type: "rest" },
  { day: 27, distance: 5, type: "running" },
  { day: 28, distance: 11, type: "running" },
  //week 5
  { day: 29, type: "strength" },
  { day: 30, distance: 6.5, type: "running" },
  { day: 31, distance: 4.2, type: "fartlek", fartlekReps: 7 },
  { day: 32, distance: 5, type: "runstrength" },
  { day: 33, type: "rest" },
  { day: 34, distance: 5, type: "running" },
  { day: 35, distance: 13, type: "running" },
  //week 6
  { day: 36, type: "strength" },
  { day: 37, distance: 6.5, type: "running" },
  { day: 38, time: 40, type: "rythm" },
  { day: 39, distance: 5, type: "runstrength" },
  { day: 40, distance: 3, type: "running" },
  { day: 41, type: "rest" },
  { day: 42, distance: 13, type: "running" },
  //week 7
  { day: 43, type: "strength" },
  { day: 44, distance: 7, type: "running" },
  { day: 45, distance: 4.8, type: "fartlek", fartlekReps: 8 },
  { day: 46, distance: 5, type: "runstrength" },
  { day: 47, type: "rest" },
  { day: 48, distance: 7, type: "running" },
  { day: 49, distance: 14, type: "running" },
  //week 8
  { day: 50, type: "strength" },
  { day: 51, distance: 7, type: "running" },
  { day: 52, time: 40, type: "rythm" },
  { day: 53, distance: 5, type: "runstrength" },
  { day: 54, type: "rest" },
  { day: 55, distance: 8, type: "running" },
  { day: 56, distance: 16, type: "running" },
  //week 9
  { day: 57, type: "strength" },
  { day: 58, distance: 8, type: "running" },
  { day: 59, distance: 5.4, type: "fartlek", fartlekReps: 9 },
  { day: 60, distance: 5, type: "runstrength" },
  { day: 61, distance: 3, type: "running" },
  { day: 62, type: "rest" },
  { day: 63, distance: 5, type: "running" },
  //week 10
  { day: 64, type: "strength" },
  { day: 65, distance: 8, type: "running" },
  { day: 66, time: 45, type: "rythm" },
  { day: 67, distance: 5, type: "runstrength" },
  { day: 68, type: "rest" },
  { day: 69, distance: 8, type: "running" },
  { day: 70, distance: 18, type: "running" },
  //week 11
  { day: 71, type: "strength" },
  { day: 72, distance: 8, type: "running" },
  { day: 73, distance: 6, type: "fartlek", fartlekReps: 10 },
  { day: 74, distance: 5, type: "runstrength" },
  { day: 75, type: "rest" },
  { day: 76, distance: 5, type: "running" },
  { day: 77, distance: 19, type: "running" },
  //week 12
  { day: 78, type: "strength" },
  { day: 79, distance: 6.5, type: "running" },
  { day: 80, time: 30, type: "rythm" },
  { day: 81, distance: 5, type: "runstrength" },
  { day: 82, type: "rest" },
  { day: 83, type: "rest" },
  { day: 84, distance: 21, type: "running" },
];

const types = {
  rest: "crossRot",
  running: "rect",
  strength: "triangle",
  fartlek: "circle",
  runstrength: "rectRot",
  rythm: "rectRounded",
};

const labels = data.map((e) => {
  const week = Math.ceil(e.day / 7);
  const day = e.day % 7;
  return `W${week}-D${day || 7}`;
});

const values = data.map((e) => e.distance || e.time / 6 || 0);

const pointStyle = data.map((e) => types[e.type]);

const ctx = document.getElementById("25k-chart");
const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    // datasets: [
    //   {
    //     label: "My First dataset",
    //     backgroundColor: "rgb(255, 99, 132)",
    //     borderColor: "rgb(255, 99, 132)",
    //     data: [0, 10, 5, 2, 20, 30],
    //   },
    // ],
    datasets: [
      {
        label: "Plan",
        data: values,
        pointRadius: 15,
        pointStyle: pointStyle,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
