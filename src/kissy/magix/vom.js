//vom
KISSY.add("magix/vom",function(S,impl,Base){
	var VOM = {};
	eval(Base.include("../tmpls/vom"));
	Base.mix(VOM, impl);
	return VOM.init();
},{
	requires:["magix/impls/vom","magix/base"]
});
