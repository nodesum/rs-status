/*
██████╗ ███████╗      ███████╗████████╗ █████╗ ████████╗██╗   ██╗███████╗
██╔══██╗██╔════╝      ██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██║   ██║██╔════╝
██████╔╝███████╗█████╗███████╗   ██║   ███████║   ██║   ██║   ██║███████╗
██╔══██╗╚════██║╚════╝╚════██║   ██║   ██╔══██║   ██║   ██║   ██║╚════██║
██║  ██║███████║      ███████║   ██║   ██║  ██║   ██║   ╚██████╔╝███████║
╚═╝  ╚═╝╚══════╝      ╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝                                                                                                                         
A NodeJS-based ridiculously simple status bar generator for i3bar/xmobar/lemonbar.
v3.2.2
*/
const moment = require('moment-timezone');
const info = require('systeminformation');
const sep = " | " // Separator format
const refreshRate = 1; // Refresh rate in seconds (default is 1)
let cpuTemp, battery, wifi, cpuLoad, mem;

const format = {
    dateFormat: "MMMM YYYY, dddd h:mm:ss a", // For more date formating info, visit https://momentjs.com
    wlanForamt: "W: ",
    cpuFormat: "CPU: ",
    battFormat: "BATT: ",
    tempFormat: "TEMP: ",
    memFormat: "MEM: ",
};

function getStatus() {
    info.currentLoad().then(data => cpuLoad=(data.currentload.toFixed(1)));
    info.cpuTemperature().then(data => cpuTemp=(data.main));
    info.battery().then(data => battery=(data.percent));
    info.wifiNetworks().then(data => wifi=(data.ssid+":"+data.quality));
    info.mem().then(data => mem=(Math.round(data.used/1048576)));

    console.log(""
    +format.wlanForamt+wifi+sep // WLAN
    +format.battFormat+battery+sep // Battery
    +format.memFormat+mem+" MB"+sep // Free memory
    +format.cpuFormat+cpuLoad+"%"+sep // CPU load
    +format.tempFormat+cpuTemp+"\u00b0C"+sep // CPU temperature
    +moment().format(format.dateFormat)); // Current date
}
setInterval(getStatus, refreshRate*1000);
