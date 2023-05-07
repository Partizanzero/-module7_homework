
//Parent abstract Class
function ElectricalAppliances(type, pw) {
    this.type = type,
        this.pw = pw,
        this.isOn = false
}

ElectricalAppliances.prototype.getOn = function () {
    this.isOn = true;
    console.log(this.type + ' is ON')
}

ElectricalAppliances.prototype.getPWUsed = function () {
    return this.isOn ? this.pw : 0;
}

//Objects
const myPC = new ElectricalAppliances('personal computer', 450);
const deskLamp = new ElectricalAppliances('lamp', 4);

console.log(`Current PW = ${myPC.getPWUsed() + deskLamp.getPWUsed()}`);

deskLamp.getOn();
console.log(`Current PW = ${myPC.getPWUsed() + deskLamp.getPWUsed()}`);

myPC.getOn();
console.log(`Current PW = ${myPC.getPWUsed() + deskLamp.getPWUsed()}`);