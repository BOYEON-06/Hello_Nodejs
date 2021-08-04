/* 이벤트 제거하기 | removeListener() : 특정 제거 
                 removeAllListeners() : 모두 제거
                 removeAllListeners([eventName]): 해당하면 제거 */

var EventEmitter = require('events');

var custom_event = new EventEmitter();
                 
custom_event.on('call', function() {
    console.log('이벤트 콜');
});
                 
custom_event.removeAllListeners(); // call event 부르기전 리스너 삭제 
                 
custom_event.emit('call');