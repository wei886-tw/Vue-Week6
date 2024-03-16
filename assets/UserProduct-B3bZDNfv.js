import{_ as u,c as r,a as s,F as p,r as _,o as c,t as i}from"./index-CJXK5sQV.js";const g={data(){return{apiUrl:"https://vue3-course-api.hexschool.io",api_path:"wei123",url:"https://vue3-course-api.hexschool.io/v2/api/wei123",allProducts:[],cartProducts:[],cartInfo:{},tempProduct:{},currentCart:{},totalMoney:0}},methods:{getProducts(){this.$http.get(`${this.apiUrl}/api/${this.api_path}/products/all`).then(t=>{this.allProducts=t.data.products})},openModal(t){this.tempProduct=t,this.myModal.show()},getCarts(){this.$http.get(`${this.apiUrl}/v2/api/${this.api_path}/cart`).then(t=>{this.cartProducts=t.data.data.carts,this.cartInfo=t.data.data}).catch(t=>{console.log(t)})},addToCart(t,e=1){const l={product_id:t,qty:e};this.$http.post(`${this.url}/cart`,{data:l}).then(a=>{console.log(a),alert("加入購物車成功"),this.getCarts()}).catch(a=>{console.log(a)})},delCartItem(t){this.$http.delete(`${this.apiUrl}/v2/api/${this.api_path}/cart/${t}`).then(e=>{console.log(e),this.getCarts()}).catch(e=>{console.log(e)})},delAllCartItems(){this.$http.delete(`${this.apiUrl}/v2/api/${this.api_path}/carts`).then(t=>{console.log(t),alert("確定要清空購物車嗎"),this.getCarts()}).catch(t=>{console.log(t)})},setCartItemQty(t,e){this.currentCart=this.cartProducts.find(l=>l.id===t),this.currentCart.qty=Number(e.target.value),this.currentCart.total=this.currentCart.qty*this.currentCart.product.price,console.log("cartInfo",this.cartInfo)},modalAddToCart(t,e){const l={product_id:t,qty:e};this.$http.post(`${this.url}/cart`,{data:l}).then(a=>{console.log(a),alert("加入購物車成功"),this.getCarts()}).catch(a=>{console.log(a)})}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t,this.getProducts(),this.getCarts()}},m={class:"container my-2"},$={class:"row"},C={class:"col-12"},f=s("h1",{class:"d-flex justify-content-center my-3"},"產品列表",-1),y={class:"table align-middle"},v=s("thead",null,[s("tr",null,[s("th",null,"圖片"),s("th",null,"商品名稱"),s("th",null,"價格"),s("th",null,"加入購物車")])],-1),b=["src"],P=["onClick"],k=["onClick"];function x(t,e,l,a,h,n){return c(),r("div",m,[s("div",$,[s("div",C,[f,s("table",y,[v,s("tbody",null,[(c(!0),r(p,null,_(h.allProducts,o=>(c(),r("tr",{key:o.id},[s("td",null,[s("img",{src:o.imageUrl,alt:"",style:{width:"100px"}},null,8,b)]),s("td",null,i(o.title),1),s("td",null,[s("del",null,i(o.origin_price)+" 元",1),s("div",null,[s("strong",null,i(o.price)+" 元",1)])]),s("td",null,[s("button",{class:"btn btn-outline-secondary btn-sm",onClick:d=>n.openModal(o)}," 查看更多 ",8,P),s("button",{class:"btn btn-outline-primary btn-sm",onClick:d=>n.addToCart(o.id)}," 加到購物車 ",8,k)])]))),128))])])])])])}const U=u(g,[["render",x]]);export{U as default};