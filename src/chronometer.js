class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback !== undefined) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    return value.toString().length === 1 ? `0${value}` : value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
    if (minutes !== undefined || seconds !== undefined) {
      const timeFormatted = `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`;
      return timeFormatted;
    }
    `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`

  }
}


