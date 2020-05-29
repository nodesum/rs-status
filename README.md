# rs-status
Is a NodeJS-based ridiculously simple status bar generator for i3bar/xmobar/lemonbar.

## Dependencies
- `NodeJS`
- `systeminformation`
- `Moment.js`

## Usage
In project home folder, run:
~~~ sh
$ npm install
~~~
To install all project dependencies.

## Running

Finally, you can now use rs-status by typing:
~~~ sh
node %PATH_TO_RS-STATUS_FOLER/src/main.js 
~~~
in your status bar configuration file.

## Configuration

I highly recommend you to see main.js file.

By modifying that variable you can set the refresh rate.
`const refreshRate = 1; // Refresh rate in seconds (default is 1)`

In that section you can modify status format as you want:
~~~
const sep = " | " // Separator format

const format = {
    dateFormat: "MMMM YYYY, dddd h:mm:ss a", // For more date formating info, visit https://momentjs.com
    wlanForamt: "W: ",
    cpuFormat: "CPU: ",
    battFormat: "BATT: ",
    tempFormat: "TEMP: ",
    memFormat: "MEM: ",
};
~~~ 

And here you can remove (or add) different "modules", as you like:
~~~
function getStatus() {
    info.currentLoad().then(data => cpuLoad=(data.currentload.toFixed(1)));
    info.cpuTemperature().then(data => cpuTemp=(data.main));
    info.battery().then(data => battery=(data.percent));
    info.wifiNetworks().then(data => wifi=(data.ssid+":"+data.quality));
    info.mem().then(data => mem=(Math.round(data.used/1048576)));

    console.log(""
    //+format.wlanForamt+wifi+sep // WLAN
    //+format.battFormat+battery+sep // Battery
    +format.memFormat+mem+" MB"+sep // Free memory
    +format.cpuFormat+cpuLoad+"%"+sep // CPU load
    +format.tempFormat+cpuTemp+"\u00b0C"+sep // CPU temperature
    +moment().format(format.dateFormat)); // Current date
}
~~~

Pretty simple!

If you want to customize that status thing, and you know JavaScript, visit these links below:
- https://systeminformation.io/
- https://momentjs.com/
