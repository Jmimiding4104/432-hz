"use strict";(self["webpackChunk_432_hz"]=self["webpackChunk_432_hz"]||[]).push([[338],{7338:function(t,i,e){e.r(i),e.d(i,{default:function(){return E}});var o=e(6252),s=e(3577),a=e(9963);const c={class:"product-wrap"},r={class:"product-link"},d=(0,o.Uk)("首頁"),n=(0,o._)("span",null,">",-1),l=(0,o.Uk)("活動與產品"),p=(0,o._)("p",null,"> 活動與商品",-1),u={class:"item-container"},v={class:"item-container-text"},h={class:"product-title"},g={class:"product-category"},_={class:"product-container"},f={class:"product-container-description"},m=(0,o._)("p",null,"活動時間[地點]",-1),w={class:"product-container-content"},k=(0,o._)("p",null,"活動內容敘述",-1),b={class:"product-price"},y={class:"origin-price"},z={class:"price"},$={class:"product-price"},x={class:"price"},L={class:"product-seletion-section"},S={class:"product-seletion-favorite",title:"加入最愛"},F=(0,o._)("i",{class:"bi bi-heart-fill"},null,-1),C=[F],D=(0,o._)("i",{class:"bi bi-heart"},null,-1),I=[D],U={class:"product-seletion"},q={class:"product-numbers"},M={class:"input-group"},j=(0,o._)("option",{value:"",disabled:"",selected:""},"--請選擇--",-1),J=["value"],N={class:"input-group-text"},O={class:"product-btn"},W=(0,o.uE)('<div class="product-donate-text"><h3><i class="bi bi-gift"></i>若您欲幫助我們<i class="bi bi-gift"></i></h3><div class="product-donate-text-donate"><h4>donate10</h4><i class="bi bi-arrow-return-left"></i></div><div class="product-donate-text-p"><p>歡迎於產品列表點選捐款選項，亦於結帳頁面輸入此donate10優惠碼，即可捐贈總金額之10%予本機構。</p><p>我們會將您捐贈金額之50%用於維持本機構運作，另50%將捐贈於外機構，若您希望捐贈額全數協助我們機構運作，可於訂單備註相關內容。</p><p>所有金流將公布於本機構Facebook頁面。</p></div></div>',1);function H(t,i,e,F,D,H){const P=(0,o.up)("IsLoading"),T=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(P,{style:{"z-index":"1000"},active:D.isLoading},null,8,["active"]),(0,o._)("div",c,[(0,o._)("div",r,[(0,o.Wm)(T,{class:"nav-link",id:"link",to:"/"},{default:(0,o.w5)((()=>[d])),_:1}),n,(0,o.Wm)(T,{class:"nav-link",id:"link",to:"/Products"},{default:(0,o.w5)((()=>[l])),_:1}),p]),(0,o._)("div",u,[(0,o._)("div",{class:"item-container-img",style:(0,s.j5)({backgroundImage:`url(${D.product.imageUrl})`})},null,4),(0,o._)("div",v,[(0,o._)("div",h,(0,s.zw)(D.product.title),1),(0,o._)("div",g,(0,s.zw)(D.product.category),1),(0,o._)("div",_,[(0,o._)("div",f,[m,(0,o.Uk)((0,s.zw)(D.product.description),1)]),(0,o._)("div",w,[k,(0,o.Uk)((0,s.zw)(D.product.content),1)])]),(0,o.wy)((0,o._)("div",b,[(0,o._)("div",y," 原價"+(0,s.zw)(D.product.origin_price)+"/"+(0,s.zw)(D.product.unit),1),(0,o._)("div",z," 特價"+(0,s.zw)(D.product.price)+"/"+(0,s.zw)(D.product.unit),1)],512),[[a.F8,D.product.origin_price!=D.product.price]]),(0,o.wy)((0,o._)("div",$,[(0,o._)("div",x," 價格"+(0,s.zw)(D.product.price)+"/"+(0,s.zw)(D.product.unit),1)],512),[[a.F8,D.product.origin_price===D.product.price]]),(0,o._)("div",L,[(0,o._)("div",S,[D.favorite.includes(D.product.id)?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"product-img-favorite",onClick:i[0]||(i[0]=t=>H.toggleFavorite(D.product.id))},C)):((0,o.wg)(),(0,o.iD)("div",{key:1,class:"product-img-favorite-join",onClick:i[1]||(i[1]=t=>H.toggleFavorite(D.product.id))},I))]),(0,o._)("div",U,[(0,o._)("div",q,[(0,o._)("div",M,[(0,o.wy)((0,o._)("select",{class:"form-select","onUpdate:modelValue":i[2]||(i[2]=t=>D.qty=t)},[j,((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(100,(t=>(0,o._)("option",{value:t,key:`${t}${D.product.id}`},(0,s.zw)(t),9,J))),64))],512),[[a.bM,D.qty]]),(0,o._)("span",N,(0,s.zw)(D.product.unit),1)])]),(0,o._)("div",O,[(0,o._)("button",{class:"btn btn-primary",type:"button",onClick:i[3]||(i[3]=t=>H.addToCart(D.product.id,D.qty))},"加入購物車")])])])])]),W])],64)}var P={data(){return{isLoading:!1,product:{},qty:"",favorite:JSON.parse(localStorage.getItem("favorite"))||[]}},inject:["emitter"],methods:{getData(){this.isLoading=!0;const{id:t}=this.$route.params,i=`https://vue3-course-api.hexschool.io/v2/api/daikai4104/product/${t}`;this.$http.get(i).then((t=>{this.favorite=JSON.parse(localStorage.getItem("favorite"))||[],this.product=t.data.product,this.isLoading=!1})).catch((t=>{this.$httpMessageState(t.response,"載入資料"),this.isLoading=!1}))},addToCart(t,i=1){this.isLoading=!0;const e={product_id:t,qty:i},o="https://vue3-course-api.hexschool.io/v2/api/daikai4104/cart";this.$http.post(o,{data:e}).then((t=>{this.emitter.emit("get-cart"),this.$httpMessageState(t,"加入購物車"),this.isLoading=!1})).catch((t=>{this.$httpMessageState(t.response,"加入購物車"),this.isLoading=!1}))},toggleFavorite(t){const i=this.favorite.findIndex((i=>i===t));-1===i?this.favorite.push(t):this.favorite.splice(i,1),this.emitter.emit("getFavorite")}},watch:{favorite:{handler(){localStorage.setItem("favorite",JSON.stringify(this.favorite))},deep:!0}},mounted(){this.getData(),this.emitter.on("getFavoriteProducts",(()=>this.getData()))}},T=e(3744);const Y=(0,T.Z)(P,[["render",H]]);var E=Y}}]);
//# sourceMappingURL=338.53eb57d9.js.map