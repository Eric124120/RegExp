# 正则表达式笔记

## 内容
* [一、基本语法](#dev-baseinfo)
* [二、RegExp对象的test、exec、compile的作用](#dev-regexp)

*[1、test](#dev-regexp-test)
*[2、exec](#dev-regexp-exec)
*[3、compile](#dev-regexp-compile)

* [三、实际应用](#dev-apply)

<a name="dev-baseinfo"></a>
## 一、基本语法

<a name="dev-regexp"></a>
## 二、RegExp对象的test、exec、compile的作用

```
RegExp对象的构造函数可以带一个或两个参数.
第一个参数是描述需要进行匹配的模式字符串;如果有第二个参数,
这个参数则指定了额外的处理指令.
```

```javascript
    var gRex = new RegExp('cat', 'g');      <==> var gRex = /cat/g; 全局匹配
    var iRex = new RegExp('cat', 'i');      <==> var iRex = /cat/i; 不区分大小写
    var igRex = new RegExp('cat', 'ig');    <==> var iRex = /cat/ig; 全局匹配且不区分大小写
```
<a name="dev-regexp-test"></a>
1.test

    test() 方法检索字符串中的指定值。返回值是 true 或 false。
```javascript
    var rex=new RegExp("cat");
    document.write(rex.test("cat say miao miao")); 
```
    输出true
    
<a name="dev-regexp-exec"></a>
###2.exec

    exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
```javascrtipt
    var rex = new RegExp("cat",'ig'),
        str = "Black cat,white cat,red cat",
        result;
        
    do {
        result = rex.exec(str);
        document.write(result,',');
    }
    while (result != null);
```
    输出 cat,cat,cat,null,
        
<a name="dev-regexp-compile"></a>
###3.compile

    compile方法用于改变 RegExp,既可以改变检索模式，也可以添加或删除第二个参数.

3.1 改变检索模式
```javascrtipt
    var rex = new RegExp("cat"),
        str = "cat say miao miao";

    document.write(rex.test(str),',');

    rex.compile("dog");
    document.write(rex.test(str),',');
```
    输出 true,false,

3.2 第二个参数定义
```javascrtipt
    var rex = new RegExp("cat"),
        str = "Cat say miao miao";

    document.write(rex.test(str),',');

    rex.compile("cat",'i');
    document.write(rex.test(str),',');
```
    输出 false,true,

<a name="dev-apply"></a>
## 三、实际应用

