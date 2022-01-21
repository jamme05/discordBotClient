const WebSocket = require('./WebSocketClient.js')

var _webSocket;
var _interval;
var sequenceNumber;
var _latency;
var heartLoop;


class HeartBeatLoop{

    callback = (latency) => {console.log(`HeartBeat active. Latency: ${latency} ms`)}


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
    constructor(webSocket, interval, callback){
        _webSocket = webSocket;
        _interval = interval;
        console.log(interval)
        this.callback = callback || this.callback;
    }

    Start(){
        //console.log(_interval)
        Loop()
    }

    Stop(){
        clearTimeout(heartLoop);
        _webSocket = null;
    }

    _callback(latency){
        this.callback(latency-_latency);
    }

    newData(sequenceNumber){ sequenceNumber = sequenceNumber; }

}

function Loop(){
    if(_webSocket == null) return;
    if(sequenceNumber === undefined){
        sequenceNumber = null;
    }
    _webSocket.send(JSON.stringify({op: 1, d: sequenceNumber}));
    _latency = new Date().getTime();
    //console.log(_interval)
    heartLoop = setTimeout(Loop, _interval);
}

module.exports = HeartBeatLoop;