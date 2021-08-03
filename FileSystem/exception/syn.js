//동기적 방식 예외 처리 - 예외가 발생하면 콜백함수의 매개변수 err에 전달됨
var fs = require('fs');

// Readfile(동기적)
try {
	var data = fs.readFileSync('notexist.txt', 'utf8'); // 파일이 없는데 읽으려 함
	console.log(data); // 읽기 성공  
} catch (err) {
    console.log(err); // 읽기 실패
}