# 正则表达式笔记

## 内容
* [一、基本语法](#dev-baseinfo)
* [二、RegExp对象的test、exec、compile的作用](#dev-regexp)
* [三、实际应用](#dev-apply)

<a name="dev-baseinfo"></a>
## 一、基本语法

<a name="dev-regexp"></a>
## 二、RegExp对象的test、exec、compile的作用

```
RegExp对象的构造函数可以带一个或两个参数.第一个参数是描述需要进行匹配的模式字符串;如果有第二个参数,这个参数则指定了额外的处理指令.举个栗子：
```

```javascript
    var gRex = new RegExp('cat', 'g');   <==> var rex = /cat/g; 全局匹配
    var iRex = new RegExp('cat', 'i');   <==> var rex = /cat/i; 不区分大小写
```

1.test

    test() 方法检索字符串中的指定值。返回值是 true 或 false。
```javascript
    var rex=new RegExp("cat");
    document.write(patt1.test("cat say miao miao")); 
```
    输出true
2.exec

3.compile

<a name="dev-apply"></a>
## 三、实际应用

