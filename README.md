# rs-status
Is a NodeJS-based ridiculously simple status bar generator for i3bar/xmobar/lemonbar.

### Dependencies
- `NodeJS`
- `systeminformation`
- `Moment.js`

### Using:
In repo home folder, run:
~~~ sh
$ npm install
~~~
To install all project dependencies.

Finally, to use rs-status, just type:
~~~ sh
node %PATH_TO_RS-STATUS_FOLER/src/main.js 
~~~
in your configuration file.

### Configuration:

I highly recommend you to see main.js file.

To format configuration, use this section: 

~~~
const format = {
    dateFormat: "MMMM Do YYYY, h:mm:ss a", // For more date formating info visit https://momentjs.com
    wlanForamt: "W: ",
    cpuFormat: "CPU: ",
    battFormat: "BATT: ",
    tempFormat: "TEMP: ",
    memFormat: "MEM: ",
};
~~~

Almost all configurationg can be done in that section:

~~~
function getStatus() {
    info.currentLoad().then(data => cpuLoad=(data.currentload.toFixed(1)));
    info.cpuTemperature().then(data => cpuTemp=(data.main));
    info.battery().then(data => battery=(data.percent));
    info.wifiNetworks().then(data => wifi=(data.ssid+":"+data.quality));
    info.mem().then(data => mem=(Math.round(data.used/1048576)));

    console.log(""
    +format.wlanForamt+wifi+sep // WLAN data
    +format.battFormat+battery+sep // Battery
    +format.memFormat+mem+" MB"+sep
    +format.cpuFormat+cpuLoad+"%"+sep // CPU load
    +format.tempFormat+cpuTemp+"\u00b0C"+sep // CPU temperature
    +moment().format(format.dateFormat)); // Current date
}
~~~

If you want to customize that status bar, please visit these links below:
- https://systeminformation.io/
- https://momentjs.com/
