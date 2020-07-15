function getRandomRgb() {
    const num = Math.round(0xffffff * Math.random());
    const r = num >> 16;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  
  function sixGetRandomRgb() {
    return [
      getRandomRgb(),
      getRandomRgb(),
      getRandomRgb(),
      getRandomRgb(),
      getRandomRgb(),
      getRandomRgb(),
    ];
  }
  
  export default sixGetRandomRgb;
  