var p=[],
	str,
	print=function(){
		p.push.apply(p,arguments);
	};

str.replace(/[\r\t\n]/g, " ")
	.split("<%").join("\t")
	.replace(/((^|%>)[^\t]*)'/g, "$1\r")
	.replace(/\t=(.*?)%>/g, "',$1,'")
	.split("\t").join("');")
	.split("%>").join("p.push('")
	.split("\r").join("\\'");

with(obj||{}){
	p.push(str);
}
return p.join('');