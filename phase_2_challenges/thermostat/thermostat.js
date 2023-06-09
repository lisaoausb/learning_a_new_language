class Thermostat {
  constructor() {
    this.temperature = 20;
    this.isPowerSavingModeOn = true;
  }

  getTemperature = () => {
    return this.temperature;
  };

  up = () => {
    if (this.isPowerSavingModeOn === true && this.temperature < 25) {
      return this.temperature++;
    } else if (this.isPowerSavingModeOn === true && this.temperature >= 25) {
      this.temperature = 25;
      return this.temperature;
    } else if (this.isPowerSavingModeOn === false && this.temperature < 32) {
      return this.temperature++;
    } else if (this.isPowerSavingModeOn === false && this.temperature >= 32) {
      this.temperature = 32;
      return this.temperature;
    }
  };

  down = () => {
    if (this.temperature > 10) {
      return this.temperature--;
    } else {
      return this.temperature;
    }
  };

  setPowerSavingMode = (turnOn) => {
    if (turnOn === true) {
      this.isPowerSavingModeOn = true;
    } else if (turnOn === false) {
      this.isPowerSavingModeOn = false;
    }
  };

  reset = () => {
    this.temperature = 20;
    this.isPowerSavingModeOn = true;
  };

  getEnergyUsage = () => {
    if (this.temperature < 18) {
      return "Low";
    } else if (this.temperature <= 25) {
      return "Medium";
    } else if (this.temperature > 25) {
      return "High";
    }
  };
}

module.exports = Thermostat;
