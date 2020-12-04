var mqtt;
var reconnectTimeout = 2000;
var host ="localhost"
var port = 9001;


function onConnect(){
    message = new Paho.MQTT.message("HelloPP")

    message.destinationName = 'sensor1';
    mqtt.send(message);
};

function MQTTconnect(){
    console.log("connecting to " + host + " " + port); 
    mqtt = new Paho.MQTT.Client(host, port, "clientjs");

    var options = {timeout: 3, onSuccess: onConnect};

};

mqtt.connect(options);