function Foo() {
    // 코드
}

Foo.prototype = {
    bar: function() {
        console.log('Foo_bar 실행');
    }
};

var util = require('util');

function Bar(){
}
// Node에서 지원되는 util.inherits() 메소드를 이용하여 더 쉽고 간단하게 상속할 수 있음 
util.inherits(Bar, Foo);

Bar.prototype.baz = function() {
    console.log('Bar_baz 실행');
};

Foo.prototype.bar();
Bar.prototype.bar();
Bar.prototype.baz();