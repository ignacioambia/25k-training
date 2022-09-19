export default function createDataSet(values, label) {
  const types = {
    rest: "crossRot",
    running: "rect",
    strength: "triangle",
    fartlek: "circle",
    runstrength: "rectRot",
    rythm: "rectRounded",
  };

  const data = values.map((e) => e.distance || e.time / 6 || 0);

  const pointStyle = values.map((e) => types[e.type]);

  return {
    label,
    data,
    pointRadius: 15,
    pointStyle,
    borderWidth: 1,
  };
}
