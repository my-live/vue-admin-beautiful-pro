/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2021-7-28 11:57:48
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26795211"],{"635a":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{"before-close":t.handleClose,"close-on-click-modal":!1,title:t.title,visible:t.dialogFormVisible,width:"909px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("div",{staticClass:"upload"},[i("el-alert",{attrs:{closable:!1,title:"支持jpg、jpeg、png格式，单次可最多选择"+t.limit+"张图片，每张不可大于"+t.size+"M，如果大于"+t.size+"M会自动为您过滤",type:"info"}}),i("br"),i("el-upload",{ref:"upload",staticClass:"upload-content",attrs:{action:t.action,"auto-upload":!1,"close-on-click-modal":!1,data:t.data,"file-list":t.fileList,headers:t.headers,limit:t.limit,multiple:!0,name:t.name,"on-change":t.handleChange,"on-error":t.handleError,"on-exceed":t.handleExceed,"on-preview":t.handlePreview,"on-progress":t.handleProgress,"on-remove":t.handleRemove,"on-success":t.handleSuccess,accept:"image/png, image/jpeg","list-type":"picture-card"}},[i("i",{staticClass:"el-icon-plus",attrs:{slot:"trigger"},slot:"trigger"}),i("el-dialog",{attrs:{visible:t.dialogVisible,"append-to-body":"",title:"查看大图"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",[i("img",{attrs:{src:t.dialogImageUrl,alt:"",width:"100%"}})])])],1)],1),i("div",{staticClass:"dialog-footer",staticStyle:{position:"relative","padding-right":"15px","text-align":"right"},attrs:{slot:"footer"},slot:"footer"},[t.show?i("div",{staticStyle:{position:"absolute",top:"10px",left:"15px",color:"#999"}},[t._v(" 正在上传中... 当前上传成功数:"+t._s(t.imgSuccessNum)+"张 当前上传失败数:"+t._s(t.imgErrorNum)+"张 ")]):t._e(),i("el-button",{attrs:{type:"primary"},on:{click:t.handleClose}},[t._v("关闭")]),i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{loading:t.loading,size:"small",type:"success"},on:{click:t.submitUpload}},[t._v(" 开始上传 ")])],1)])},a=[],l=(i("e1d4"),i("eb62"),i("23db"),i("a5c9"),i("f5bd"),i("f121"),{name:"VabUpload",props:{url:{type:String,default:"/upload",required:!0},name:{type:String,default:"file",required:!0},limit:{type:Number,default:50,required:!0},size:{type:Number,default:1,required:!0}},data:function(){return{show:!1,loading:!1,dialogVisible:!1,dialogImageUrl:"",action:"https://vab-unicloud-3a9da9.service.tcloudbase.com/upload",headers:{},fileList:[],picture:"picture",imgNum:0,imgSuccessNum:0,imgErrorNum:0,typeList:null,title:"上传",dialogFormVisible:!1,data:{}}},computed:{percentage:function(){return 0==this.allImgNum?0:100*this.$baseLodash.round(this.imgNum/this.allImgNum,2)}},methods:{submitUpload:function(){this.$refs.upload.submit()},handleProgress:function(t,e,i){this.loading=!0,this.show=!0},handleChange:function(t,e){t.size>1048576*this.size?(e.map((function(i,s){i===t&&e.splice(s,1)})),this.fileList=e):this.allImgNum=e.length},handleSuccess:function(t,e,i){var s=this;this.imgNum=this.imgNum+1,this.imgSuccessNum=this.imgSuccessNum+1,i.length===this.imgNum&&setTimeout((function(){s.$baseMessage("上传完成! 共上传".concat(i.length,"张图片"),"success")}),1e3),setTimeout((function(){s.loading=!1,s.show=!1}),1e3)},handleError:function(t,e,i){var s=this;this.imgNum=this.imgNum+1,this.imgErrorNum=this.imgErrorNum+1,this.$baseMessage("文件[".concat(e.raw.name,"]上传失败,文件大小为").concat(this.$baseLodash.round(e.raw.size/1024,0),"KB"),"error"),setTimeout((function(){s.loading=!1,s.show=!1}),1e3)},handleRemove:function(t,e){this.imgNum=this.imgNum-1,this.allNum=this.allNum-1},handlePreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleExceed:function(t,e){this.$baseMessage("当前限制选择 ".concat(this.limit," 个文件，本次选择了\n           ").concat(t.length,"\n           个文件"),"error")},handleShow:function(t){this.title="上传",this.data=t,this.dialogFormVisible=!0},handleClose:function(){this.fileList=[],this.picture="picture",this.allImgNum=0,this.imgNum=0,this.imgSuccessNum=0,this.imgErrorNum=0,this.dialogFormVisible=!1}}}),o=l,n=(i("fdfd"),i("5d22")),r=Object(n["a"])(o,s,a,!1,null,"c8f14bd6",null);e["default"]=r.exports},"838f":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-container"},[i("el-divider",{attrs:{"content-position":"left"}},[t._v("演示环境可能无法模拟上传")]),i("vab-upload",{ref:"vabUpload",attrs:{url:"/upload",name:"file",limit:50,size:2}}),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleShow({key:"value"})}}},[t._v(" 模拟上传 ")])],1)},a=[],l=i("635a"),o={name:"Upload",components:{VabUpload:l["default"]},data:function(){return{}},methods:{handleShow:function(t){this.$refs["vabUpload"].handleShow(t)}}},n=o,r=i("5d22"),u=Object(r["a"])(n,s,a,!1,null,null,null);e["default"]=u.exports},fb94:function(t,e,i){},fdfd:function(t,e,i){"use strict";i("fb94")}}]);