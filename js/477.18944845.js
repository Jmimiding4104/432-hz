"use strict";(self["webpackChunk_432_hz"]=self["webpackChunk_432_hz"]||[]).push([[477],{4255:function(t,e,a){a.d(e,{Z:function(){return b}});var l=a(6252),i=a(3577),o=a(9963);const s={"aria-label":"Page navigation example"},d={class:"pagination justify-content-center"},n=(0,l._)("span",{"aria-hidden":"true"},"«",-1),r=[n],c=["onClick"],p=(0,l._)("span",{"aria-hidden":"true"},"»",-1),u=[p];function m(t,e,a,n,p,m){return(0,l.wg)(),(0,l.iD)("nav",s,[(0,l._)("ul",d,[(0,l._)("li",{class:(0,i.C_)(["page-item",{disabled:!a.pagination.has_pre}])},[(0,l._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,o.iM)((e=>t.$emit("getData",a.pagination.current_page-1)),["prevent"]))},r)],2),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.pagination.total_pages,(e=>((0,l.wg)(),(0,l.iD)("li",{class:(0,i.C_)(["page-item",{active:a.pagination.current_page===e}]),key:e+"page"},[(0,l._)("a",{class:"page-link",href:"#",onClick:(0,o.iM)((a=>t.$emit("getData",e)),["prevent"])},(0,i.zw)(e),9,c)],2)))),128)),(0,l._)("li",{class:(0,i.C_)(["page-item",{disabled:!a.pagination.has_next}])},[(0,l._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,o.iM)((e=>t.$emit("getData",a.pagination.current_page+1)),["prevent"]))},u)],2)])])}var h={props:["pagination"]},g=a(3744);const _=(0,g.Z)(h,[["render",m]]);var b=_},7903:function(t,e,a){a.d(e,{Z:function(){return s}});var l=a(7244),i={data(){return{modal:""}},methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new l.u_(this.$refs.modal)}};const o=i;var s=o},2477:function(t,e,a){a.r(e),a.d(e,{default:function(){return $t}});var l=a(6252),i=a(3577),o=a(9963);const s={class:"container"},d={class:"text-end mt-4"},n={class:"table mt-4"},r=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{width:"120"},"分類"),(0,l._)("th",null,"產品名稱"),(0,l._)("th",{width:"120"},"原價"),(0,l._)("th",{width:"120"},"售價"),(0,l._)("th",{width:"100"},"是否啟用"),(0,l._)("th",{width:"120"},"編輯")])],-1),c={class:"form-check form-switch"},p=["onUpdate:modelValue","onChange"],u={class:"form-check-label",for:"paid"},m={class:"btn-group"},h=["onClick"],g=["onClick"];function _(t,e,a,_,b,f){const v=(0,l.up)("IsLoading"),P=(0,l.up)("TemplateProduct"),y=(0,l.up)("DelProduct"),w=(0,l.up)("PaginationComponent");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(v,{style:{"z-index":"1000"},active:b.isLoading},null,8,["active"]),(0,l._)("div",s,[(0,l._)("div",d,[(0,l._)("button",{class:"btn btn-outline-primary",onClick:e[0]||(e[0]=t=>f.openModal("new"))}," 建立新的產品 ")]),(0,l._)("table",n,[r,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(b.products,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("td",null,(0,i.zw)(t.category),1),(0,l._)("td",null,(0,i.zw)(t.title),1),(0,l._)("td",null,(0,i.zw)(t.origin_price),1),(0,l._)("td",null,(0,i.zw)(t.price),1),(0,l._)("td",null,[(0,l._)("div",c,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"paid","onUpdate:modelValue":e=>t.is_enabled=e,onChange:e=>f.updateData(t),"true-value":1,"false-value":0},null,40,p),[[o.e8,t.is_enabled]]),(0,l._)("label",u,[(0,l._)("span",{class:(0,i.C_)({"text-success":t.is_enabled,"text-danger":!t.is_enabled})},(0,i.zw)(t.is_enabled?"啟用":"未啟用"),3)])])]),(0,l._)("td",null,[(0,l._)("div",m,[(0,l._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:e=>f.openModal("edit",t)}," 編輯 ",8,h),(0,l._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>f.openModal("del",t)}," 刪除 ",8,g)])])])))),128))])])]),(0,l.Wm)(P,{isNew:b.isNew,"temp-product":b.tempProduct,id:b.productId,onGetData:f.getData,ref:"TemplateProduct"},null,8,["isNew","temp-product","id","onGetData"]),(0,l.Wm)(y,{id:b.productId,tempProduct:b.tempProduct,onGetData:f.getData,ref:"DelProduct"},null,8,["id","tempProduct","onGetData"]),(0,l.Wm)(w,{pagination:b.pagination,onGetData:f.getData},null,8,["pagination","onGetData"])],64)}const b={id:"productModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},f={class:"modal-dialog modal-xl"},v={class:"modal-content border-0"},P={class:"modal-header bg-dark text-white"},y={id:"productModalLabel",class:"modal-title"},w=(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),k={class:"modal-body"},U={class:"row"},D={class:"col-sm-4"},M={class:"mb-2"},x={class:"mb-3"},$=(0,l._)("label",{for:"imageUrl",class:"form-label"},"輸入主圖網址",-1),C=(0,l._)("label",{for:"file",class:"form-label"},"或 上傳檔案",-1),L=["src"],I={class:"mb-3"},N=(0,l._)("h6",null,"輸入附圖網址",-1),S={key:0},V=["onUpdate:modelValue"],z=["src"],Z={class:"col-sm-8"},G={class:"mb-3"},H=(0,l._)("label",{for:"title",class:"form-label"},"標題",-1),T={class:"row"},W={class:"mb-3 col-md-6"},Y=(0,l._)("label",{for:"category",class:"form-label"},"分類",-1),J={class:"mb-3 col-md-6"},O=(0,l._)("label",{for:"price",class:"form-label"},"單位",-1),K={class:"row"},j={class:"mb-3 col-md-6"},q=(0,l._)("label",{for:"origin_price",class:"form-label"},"原價",-1),A={class:"mb-3 col-md-6"},F=(0,l._)("label",{for:"price",class:"form-label"},"售價",-1),B=(0,l._)("hr",null,null,-1),E={class:"mb-3"},Q=(0,l._)("label",{for:"description",class:"form-label"},"產品描述",-1),R={class:"mb-3"},X=(0,l._)("label",{for:"content",class:"form-label"},"說明內容",-1),tt={class:"mb-3"},et={class:"form-check"},at=(0,l._)("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),lt={class:"modal-footer"},it=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ot(t,e,a,s,d,n){const r=(0,l.up)("IsLoading");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(r,{style:{"z-index":"1000"},active:d.isLoading},null,8,["active"]),(0,l._)("div",b,[(0,l._)("div",f,[(0,l._)("div",v,[(0,l._)("div",P,[(0,l._)("h5",y,[(0,l._)("span",null,(0,i.zw)(a.isNew?"新增產品":"編輯產品"),1)]),w]),(0,l._)("div",k,[(0,l._)("div",U,[(0,l._)("div",D,[(0,l._)("div",M,[(0,l._)("div",x,[$,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=e=>t.tempProduct.imageUrl=e)},null,512),[[o.nr,t.tempProduct.imageUrl]]),C,(0,l._)("input",{type:"file",class:"form-control",id:"file",placeholder:"請輸入圖片連結",ref:"fileInput",onChange:e[1]||(e[1]=t=>n.uploadImg())},null,544),(0,l._)("img",{class:"img-fluid",src:t.tempProduct.imageUrl,alt:""},null,8,L)]),(0,l._)("div",I,[N,Array.isArray(t.tempProduct.imagesUrl)?((0,l.wg)(),(0,l.iD)("div",S,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.tempProduct.imagesUrl,((a,i)=>((0,l.wg)(),(0,l.iD)("div",{key:i+123456789},[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e=>t.tempProduct.imagesUrl[i]=e},null,8,V),[[o.nr,t.tempProduct.imagesUrl[i]]]),(0,l._)("input",{type:"file",class:"form-control",id:"file",placeholder:"請輸入圖片連結",ref_for:!0,ref:"fileInput",onChange:e[2]||(e[2]=e=>t.uploadImgs())},null,544),(0,l._)("img",{class:"img-fluid",src:a,alt:""},null,8,z)])))),128))])):(0,l.kq)("",!0)])]),(0,l._)("div",null,[!t.tempProduct.imagesUrl?.length||t.tempProduct.imagesUrl[t.tempProduct.imagesUrl.length-1]?((0,l.wg)(),(0,l.iD)("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[3]||(e[3]=(...t)=>n.createImg&&n.createImg(...t))}," 新增圖片 ")):((0,l.wg)(),(0,l.iD)("button",{key:1,class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[4]||(e[4]=e=>t.tempProduct.imagesUrl.pop())}," 刪除圖片 "))])]),(0,l._)("div",Z,[(0,l._)("div",G,[H,(0,l.wy)((0,l._)("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[5]||(e[5]=e=>t.tempProduct.title=e)},null,512),[[o.nr,t.tempProduct.title]])]),(0,l._)("div",T,[(0,l._)("div",W,[Y,(0,l.wy)((0,l._)("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[6]||(e[6]=e=>t.tempProduct.category=e)},null,512),[[o.nr,t.tempProduct.category]])]),(0,l._)("div",J,[O,(0,l.wy)((0,l._)("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[7]||(e[7]=e=>t.tempProduct.unit=e)},null,512),[[o.nr,t.tempProduct.unit]])])]),(0,l._)("div",K,[(0,l._)("div",j,[q,(0,l.wy)((0,l._)("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[8]||(e[8]=e=>t.tempProduct.origin_price=e)},null,512),[[o.nr,t.tempProduct.origin_price,void 0,{number:!0}]])]),(0,l._)("div",A,[F,(0,l.wy)((0,l._)("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[9]||(e[9]=e=>t.tempProduct.price=e)},null,512),[[o.nr,t.tempProduct.price,void 0,{number:!0}]])])]),B,(0,l._)("div",E,[Q,(0,l.wy)((0,l._)("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[10]||(e[10]=e=>t.tempProduct.description=e)},"\n             ",512),[[o.nr,t.tempProduct.description]])]),(0,l._)("div",R,[X,(0,l.wy)((0,l._)("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[11]||(e[11]=e=>t.tempProduct.content=e)},"\n             ",512),[[o.nr,t.tempProduct.content]])]),(0,l._)("div",tt,[(0,l._)("div",et,[(0,l.wy)((0,l._)("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[12]||(e[12]=e=>t.tempProduct.is_enabled=e)},null,512),[[o.e8,t.tempProduct.is_enabled]]),at])])])])]),(0,l._)("div",lt,[it,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=(...t)=>n.updateProduct&&n.updateProduct(...t))}," 確認 ")])])])],512)],64)}var st=a(7903),dt={mixins:[st.Z],inject:["emitter"],props:["isNew","temp-product","id"],data(){return{isLoading:!1}},methods:{updateProduct(){let t="https://vue3-course-api.hexschool.io/v2/api/daikai4104/admin/product",e="post";this.isNew||(t=`https://vue3-course-api.hexschool.io/v2/api/daikai4104/admin/product/${this.id}`,e="put"),this.$http[e](t,{data:this.tempProduct}).then((t=>{this.$emit("getData"),this.hideModal(),this.$httpMessageState(t,"更新產品")})).catch((t=>{this.$httpMessageState(t.response,"更新產品")}))},uploadImg(){this.isLoading=!0;const t=document.querySelector("#file"),e=new FormData,a=t.files[0];e.append("file-to-upload",a);const l="https://vue3-course-api.hexschool.io/v2/api/daikai4104/admin/upload";this.$http.post(l,e).then((t=>{t.data.success?(this.tempProduct.imageUrl=t.data.imageUrl,this.$refs.fileInput.value="",this.$httpMessageState(t,"圖片上傳"),this.isLoading=!1):(this.$refs.fileInput.value="",this.emitter.emit("toast-msg",{style:"danger",title:"圖片上傳失敗",content:t.data.message}),this.isLoading=!1)})).catch((t=>{this.$httpMessageState(t.response,"圖片上傳"),this.isLoading=!1}))},createImg(){this.tempProduct.imagesUrl.push("")}}},nt=a(3744);const rt=(0,nt.Z)(dt,[["render",ot]]);var ct=rt;const pt={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},ut={class:"modal-dialog"},mt={class:"modal-content border-0"},ht=(0,l._)("div",{class:"modal-header bg-danger text-white"},[(0,l._)("h5",{id:"delProductModalLabel",class:"modal-title"},[(0,l._)("span",null,"刪除產品")]),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),gt={class:"modal-body"},_t=(0,l.Uk)(" 是否刪除 "),bt=(0,l._)("strong",{class:"text-danger"},null,-1),ft={class:"modal-footer"},vt=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Pt(t,e,a,o,s,d){return(0,l.wg)(),(0,l.iD)("div",pt,[(0,l._)("div",ut,[(0,l._)("div",mt,[ht,(0,l._)("div",gt,[_t,bt,(0,l.Uk)(" "+(0,i.zw)(a.tempProduct.title)+"(刪除後將無法恢復)。 ",1)]),(0,l._)("div",ft,[vt,(0,l._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(...t)=>d.delProduct&&d.delProduct(...t))}," 確認刪除 ")])])])],512)}var yt=a(7244),wt={props:["id","tempProduct"],data(){return{dalProductModal:""}},methods:{openModal(){this.delProductModal.show()},delProduct(){this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/daikai4104/admin/product/${this.id}`).then((t=>{this.$httpMessageState(t,"刪除產品"),this.delProductModal.hide(),this.$emit("getData")})).catch((t=>{this.$httpMessageState(t,"刪除產品")}))}},mounted(){this.delProductModal=new yt.u_(this.$refs.delProductModal)}};const kt=(0,nt.Z)(wt,[["render",Pt]]);var Ut=kt,Dt=a(4255),Mt={data(){return{products:[],pagination:{},tempProduct:{imagesUrl:[]},isNew:!1,productId:"",isLoading:!1}},components:{TemplateProduct:ct,DelProduct:Ut,PaginationComponent:Dt.Z},methods:{getData(t=1){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/v2/api/daikai4104/admin/products?page=${t}`;this.$http.get(e).then((t=>{this.products=t.data.products,this.pagination=t.data.pagination,this.isLoading=!1})).catch((t=>{this.$httpMessageState(t.response,"登入驗證"),this.isLoading=!1,this.$router.push("/login")}))},updateData(t){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/v2/api/daikai4104/admin/product/${t.id}`,a={title:t.title,category:t.category,origin_price:t.origin_price,price:t.price,unit:t.unit,description:t.description,content:t.content,imageUrl:t.imageUrl,is_enabled:t.is_enabled,imagesUrl:t.imagesUrl};this.$http.put(e,{data:a}).then((t=>{console.log(t),this.$httpMessageState(t,"更新狀態"),this.getData()})).catch((t=>{this.$httpMessageState(t.response,"更新狀態")}))},openModal(t,e){"new"===t?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.TemplateProduct.openModal()):"edit"===t?(this.tempProduct=JSON.parse(JSON.stringify(e)),this.tempProduct.imagesUrl=this.tempProduct.imagesUrl?this.tempProduct.imagesUrl:[],this.isNew=!1,this.$refs.TemplateProduct.openModal(),this.productId=e.id):"del"===t&&(this.tempProduct=JSON.parse(JSON.stringify(e)),this.$refs.DelProduct.openModal(),this.productId=e.id)}},mounted(){this.getData()}};const xt=(0,nt.Z)(Mt,[["render",_]]);var $t=xt}}]);
//# sourceMappingURL=477.18944845.js.map