// bar() 메소드를 가진 Foo 객체를 생성하는 코드
function Foo() {
    // Code
}

Foo.prototype = {
    bar: function() {
        console.log('Foo_bar 실행');
    }
};

// Foo를 상속받아 Bar 객체를 생성하는 코드
function Bar() {
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.baz = function() {
    console.log('Bar_baz 실행');
};

Foo.prototype.bar();
Bar.prototype.bar();
Bar.prototype.baz();