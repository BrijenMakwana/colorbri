module.exports = {
  randomHEXColor: () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  },
  randomRGBColor: () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")"
    );
  },
  randomRGBAColor: () => {
    return (
      "rgba(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 10 + 1) / 10 +
      ")"
    );
  },
};
