//removeListener() : 특정 이벤트 리스너 제거 
//removeAllListeners() : 모든 이벤트 리스너 제거 
//removeAllListencers([eventname]) : 해당 이벤트의 모든 리스너 제거 


var EventEmitter = require('events');

var custom_event = new EventEmitter();

custom_event.on('call', function() {
	console.log('이벤트 콜');
});

custom_event.removeAllListeners(); // call 이벤트를 부르기 전 리스너 삭제

custom_event.emit('call'); 