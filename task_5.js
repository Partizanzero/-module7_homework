//Parent abstract Class
class ElectricalAppliances {

    constructor(type, pw) {
        this.type = type,
            this.pw = pw,
            this.isOn = false;
    }

    getOn() {
        this.isOn = true;
        console.log(this.type + ' is ON')
    }

    getPWUsed() {
        return this.isOn ? this.pw : 0;
    }
}

//Objects
let myPC = new ElectricalAppliances('personal computer', 450);
let deskLamp = new ElectricalAppliances('lamp', 4);

console.log(`Current PW = ${myPC.getPWUsed() + deskLamp.getPWUsed()}`);

deskLamp.getOn();
console.log(`Current PW = ${myPC.getPWUsed() + deskLamp.getPWUsed()}`);

myPC.getOn();
console.log(`Current PW = ${myPC.getPWUsed() + deskLamp.getPWUsed()}`);
