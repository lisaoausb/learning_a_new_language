// const thermostat = new Thermostat();

// thermostat.getTemperature(); // should return 20

// thermostat.up();
// thermostat.up();
// thermostat.getTemperature(); // should now return 22

// thermostat.down();
// thermostat.getTemperature(); // should now return 21

// thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

// for (let i = 0 ; i < 10 ; i++) {
//   thermostat.up();
// }

// thermostat.getTemperature(); // should be 25 (max reached)

// thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

// thermostat.up();
// thermostat.getTemperature(); // should now return 26

// thermostat.reset();
// thermostat.getTemperature(); // should be back to 20

const Thermostat = require("./thermostat");

describe("test thermostat class", () => {
  const thermostat = new Thermostat();
  it("test whether temperature is returned, expecting default of 20", () => {
    expect(thermostat.getTemperature()).toBe(20);
  });
  it("test whether up increases temperature by 1 degree", () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });
  it("test whether 'down' decreases temperature by 1 degree", () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  });
  it("test if power mode is on and max temp is 25", () => {
    thermostat.setPowerSavingMode(true);
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });
  it("test if power mode is off and it goes further than 26", () => {
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(26);
  });

  it("test if reset puts it back to 20 and PSM on", () => {
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
    expect(thermostat.isPowerSavingModeOn).toBe(true);
  });

  it("test thermostat can't be lower than 10", () => {
    for (let i = 0; i < 15; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
  });

  it("what is the energy usage", () => {
    expect(thermostat.getEnergyUsage()).toBe("Low");
  });

  it("medium usage", () => {
    thermostat.reset();
    expect(thermostat.getEnergyUsage()).toBe("Medium");
  });

  it("high usage", () => {
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 15; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32);
    expect(thermostat.getEnergyUsage()).toBe("High");
  });
});
