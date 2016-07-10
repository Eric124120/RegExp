// 命名空间
fis.set('namespace', 'regexp');
fis.set('statics', 'regexp/statics');
fis.set('page', 'regexp/page');

fis
.match('/page/(**).html', {
	url: '${page}/$1',
	release: '${page}/$1',
    useSameNameRequire: true,
	useMap: true
})
.match('(/lib/**).js', {
	release: 'regexp$1',
    useMap: true,
    isMod: true
})
.match('/page/(**).{js,css}', {
    release: '${statics}/$1',
    isMod: true,
	useMap: true
});
