import $ from 'jquery';
import './css/index.css';
import './css/index.less';
import './css/index.scss';
import 'bootstrap/dist/css/bootstrap.css';

$(function() {
	console.log("Let's go!");
});

//class 关键字，是ES6中提供的新语法，是用来实现 ES6 中面向对象编程的方式
class Person {
	//使用static关键字可以定义静态属性
	//静态属性：就是直接通过类名，直接访问的属性
	//实例属性：只能通过类的实例来访问的属性
	static info = { name: 'zs', age: 20 };
}

console.log(Person.info);
