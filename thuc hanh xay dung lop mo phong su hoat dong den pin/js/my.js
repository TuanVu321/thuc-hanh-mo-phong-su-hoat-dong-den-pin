let Battery = function () {
    this.setEnergy = function (energy) {
        this.energy = energy;
    };
    this.getEnergy = function (energy) {
        return this.energy;
    };
    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy--;
        }
    };
};

let FlashLamp = function (battery) {
    this.setBattery = function (battery) {
        this.battery = battery;
    };
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };
    this.light = function () {
        if (this.status) {
            alert('Lighting');
        } else {
            alert('Not lighting');

        };
    };
    this.turnon = function () {
        this.status = true;
        this.battery.decreaseEnergy();
    };
    this.turnoff = function () {
        this.status = false;
    };

};

function running() {
    let battery = new Battery();
    battery.setEnergy(95);
    let flashLamp = new FlashLamp();
    flashLamp.setBattery(battery);


    document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
    flashLamp.light();

    document.write("Turn on<br/>")
    flashLamp.turnon();
    flashLamp.light();
    document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

    document.write("Turn off<br/>")
    flashLamp.turnoff();
    flashLamp.light();
}
running();
