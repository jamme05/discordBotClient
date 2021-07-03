const WebSocket = require('./WebSocketClient.js')

var _webSocket;
var interval;
var sequenceNumber;
var _latency;
var heartLoop;
HeartBeatLoop.callback = (latency) => console.log(`HeartBeat active. Latency: ${latency} ms`);

    /**
     * 
     * @callback HeartBeatCallback
     * @param {Number} latency
     */
    /**
     * 
     * @param {WebSocket} webSocket 
     * @param {Number} interval 
     * @param {HeartBeatCallback} [callback] 
     */
function HeartBeatLoop(webSocket, interval, callback){
    _webSocket = webSocket;
    interval = interval;
    this.callback = callback;
    _loop();
}

HeartBeatLoop.Stop = () => {
    clearTimeout(heartLoop);
    _webSocket = null;
}

HeartBeatLoop._callback = (latency) => {
    this.callback(latency-_latency);
}

HeartBeatLoop.newData = (sequenceNumber) => { sequenceNumber = sequenceNumber; }

function _loop(){
    if(sequenceNumber === undefined){
        sequenceNumber = null;
    }
    _webSocket.send(JSON.stringify({op: 1, d: sequenceNumber}));
    latency = new Date().getTime();
    heartLoop = setTimeout(_loop, interval);
}


module.exports = HeartBeatLoop;