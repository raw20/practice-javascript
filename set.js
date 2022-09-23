/*
set 함수
중복되지 않는 유일한 값들의 집합
요소 순서는 의미가 없음
인덱스로 접근 불가
 */

const mySet = new Set();
mySet.add(1);
mySet.add(2);

const obj = { a: 1, b: 2 };

mySet.add(obj);
console.log(mySet);
console.log(mySet.has(obj)); //true
console.log(mySet.has(3)); //false
console.log(mySet.size);
