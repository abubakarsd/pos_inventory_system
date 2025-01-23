"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5999],{74956:(t,e,i)=>{i.r(e),i.d(e,{default:()=>d});var a=i(20629),s=i(74865),r=i.n(s);function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const l={metaInfo:{title:"Edit Sale"},data:function(){return{focused:!1,timer:null,search_input:"",product_filter:[],isLoading:!0,SubmitProcessing:!1,Submit_Processing_detail:!1,warehouses:[],clients:[],products:[],details:[],detail:{},sales:[],sale:{id:"",date:"",statut:"",notes:"",client_id:"",warehouse_id:"",tax_rate:0,TaxNet:0,shipping:0,discount:0},total:0,GrandTotal:0,product:{id:"",code:"",stock:"",quantity:1,discount:"",DiscountNet:"",discount_Method:"",sale_unit_id:"",no_unit:"",name:"",unitSale:"",Net_price:"",Total_price:"",Unit_price:"",subtotal:"",product_id:"",detail_id:"",taxe:"",tax_percent:"",tax_method:"",product_variant_id:"",del:"",etat:"",is_imei:"",imei_number:""}}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},(0,a.Se)(["currentUserPermissions","currentUser"])),methods:{handleFocus:function(){this.focused=!0},handleBlur:function(){this.focused=!1},Submit_Sale:function(){var t=this;this.$refs.edit_sale.validate().then((function(e){e?t.Update_Sale():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},submit_Update_Detail:function(){var t=this;this.$refs.Update_Detail.validate().then((function(e){e&&t.Update_Detail()}))},getValidationState:function(t){var e=t.dirty,i=t.validated,a=t.valid;return e||i?void 0===a?null:a:null},makeToast:function(t,e,i){this.$root.$bvToast.toast(e,{title:i,variant:t,solid:!0})},Modal_Updat_Detail:function(t){var e=this;r().start(),r().set(.1),this.detail={},this.detail.name=t.name,this.detail.detail_id=t.detail_id,this.detail.Unit_price=t.Unit_price,this.detail.tax_method=t.tax_method,this.detail.discount_Method=t.discount_Method,this.detail.discount=t.discount,this.detail.quantity=t.quantity,this.detail.tax_percent=t.tax_percent,this.detail.is_imei=t.is_imei,this.detail.imei_number=t.imei_number,setTimeout((function(){r().done(),e.$bvModal.show("form_Update_Detail")}),1e3)},Update_Detail:function(){var t=this;r().start(),r().set(.1),this.Submit_Processing_detail=!0;for(var e=0;e<this.details.length;e++)this.details[e].detail_id===this.detail.detail_id&&(this.details[e].tax_percent=this.detail.tax_percent,this.details[e].Unit_price=this.detail.Unit_price,this.details[e].quantity=this.detail.quantity,this.details[e].tax_method=this.detail.tax_method,this.details[e].discount_Method=this.detail.discount_Method,this.details[e].discount=this.detail.discount,this.details[e].imei_number=this.detail.imei_number,"2"==this.details[e].discount_Method?this.details[e].DiscountNet=this.detail.discount:this.details[e].DiscountNet=parseFloat(this.detail.Unit_price*this.details[e].discount/100),"1"==this.details[e].tax_method?(this.details[e].Net_price=parseFloat(this.detail.Unit_price-this.details[e].DiscountNet),this.details[e].taxe=parseFloat(this.detail.tax_percent*(this.detail.Unit_price-this.details[e].DiscountNet)/100)):(this.details[e].Net_price=parseFloat((this.detail.Unit_price-this.details[e].DiscountNet)/(this.detail.tax_percent/100+1)),this.details[e].taxe=parseFloat(this.detail.Unit_price-this.details[e].Net_price-this.details[e].DiscountNet)),this.$forceUpdate());this.Calcul_Total(),setTimeout((function(){r().done(),t.Submit_Processing_detail=!1,t.$bvModal.hide("form_Update_Detail")}),1e3)},search:function(){var t=this;if(this.timer&&(clearTimeout(this.timer),this.timer=null),this.search_input.length<2)return this.product_filter=[];""!=this.sale.warehouse_id&&null!=this.sale.warehouse_id?this.timer=setTimeout((function(){var e=t.products.filter((function(e){return e.code===t.search_input||e.barcode.includes(t.search_input)}));1===e.length?t.SearchProduct(e[0]):t.product_filter=t.products.filter((function(e){return e.name.toLowerCase().includes(t.search_input.toLowerCase())||e.code.toLowerCase().includes(t.search_input.toLowerCase())||e.barcode.toLowerCase().includes(t.search_input.toLowerCase())}))}),800):this.makeToast("warning",this.$t("SelectWarehouse"),this.$t("Warning"))},getResultValue:function(t){return t.code+" ("+t.name+")"},SearchProduct:function(t){this.product={},this.details.length>0&&this.details.some((function(e){return e.code===t.code}))?this.makeToast("warning",this.$t("AlreadyAdd"),this.$t("Warning")):("is_service"==t.product_type?(this.product.quantity=1,this.product.code=t.code):(this.product.code=t.code,this.product.no_unit=1,this.product.stock=t.qte_sale,t.qte_sale<1?this.product.quantity=t.qte_sale:this.product.quantity=1),this.product.product_variant_id=t.product_variant_id,this.Get_Product_Details(t.id,t.product_variant_id)),this.search_input="",this.$refs.product_autocomplete.value="",this.product_filter=[]},Selected_Warehouse:function(t){this.search_input="",this.product_filter=[],this.Get_Products_By_Warehouse(t)},Get_Products_By_Warehouse:function(t){var e=this;r().start(),r().set(.1),axios.get("get_Products_by_warehouse/"+t+"?stock=1&is_sale=1&product_service=1").then((function(t){e.products=t.data,r().done()})).catch((function(t){}))},add_product:function(){this.details.length>0?this.Last_Detail_id():0===this.details.length&&(this.product.detail_id=1),this.details.push(this.product),this.product.is_imei&&this.Modal_Updat_Detail(this.product)},Verified_Qty:function(t,e){for(var i=0;i<this.details.length;i++)this.details[i].detail_id===e&&(isNaN(t.quantity)&&(this.details[i].quantity=t.qte_copy),"new"==t.etat&&t.quantity>t.stock?(this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")),this.details[i].quantity=t.stock):"current"==t.etat&&t.quantity>t.stock+t.qte_copy?(this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")),this.details[i].quantity=t.qte_copy):this.details[i].quantity=t.quantity);this.$forceUpdate(),this.Calcul_Total()},increment:function(t,e){for(var i=0;i<this.details.length;i++)this.details[i].detail_id==e&&("new"==t.etat&&t.quantity+1>t.stock||"current"==t.etat&&t.quantity+1>t.stock+t.qte_copy?this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")):this.formatNumber(this.details[i].quantity++,2));this.$forceUpdate(),this.Calcul_Total()},decrement:function(t,e){for(var i=0;i<this.details.length;i++)this.details[i].detail_id==e&&t.quantity-1>0&&("new"==t.etat&&t.quantity-1>t.stock||"current"==t.etat&&t.quantity-1>t.stock+t.qte_copy?this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")):this.formatNumber(this.details[i].quantity--,2));this.$forceUpdate(),this.Calcul_Total()},keyup_OrderTax:function(){isNaN(this.sale.tax_rate)?this.sale.tax_rate=0:""==this.sale.tax_rate?(this.sale.tax_rate=0,this.Calcul_Total()):this.Calcul_Total()},keyup_Discount:function(){isNaN(this.sale.discount)?this.sale.discount=0:""==this.sale.discount?(this.sale.discount=0,this.Calcul_Total()):this.Calcul_Total()},keyup_Shipping:function(){isNaN(this.sale.shipping)?this.sale.shipping=0:""==this.sale.shipping?(this.sale.shipping=0,this.Calcul_Total()):this.Calcul_Total()},formatNumber:function(t,e){var i=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return i[0];var a=i[1]||"";if(a.length>e)return"".concat(i[0],".").concat(a.substr(0,e));for(;a.length<e;)a+="0";return"".concat(i[0],".").concat(a)},Calcul_Total:function(){this.total=0;for(var t=0;t<this.details.length;t++){var e=this.details[t].taxe*this.details[t].quantity;this.details[t].subtotal=parseFloat(this.details[t].quantity*this.details[t].Net_price+e),this.total=parseFloat(this.total+this.details[t].subtotal)}var i=parseFloat(this.total-this.sale.discount);this.sale.TaxNet=parseFloat(i*this.sale.tax_rate/100),this.GrandTotal=parseFloat(i+this.sale.TaxNet+this.sale.shipping);var a=this.GrandTotal.toFixed(2);this.GrandTotal=parseFloat(a)},delete_Product_Detail:function(t){for(var e=0;e<this.details.length;e++)t===this.details[e].detail_id&&(this.details.splice(e,1),this.Calcul_Total())},verifiedForm:function(){if(this.details.length<=0)return this.makeToast("warning",this.$t("AddProductToList"),this.$t("Warning")),!1;for(var t=0,e=0;e<this.details.length;e++)""!=this.details[e].quantity&&0!==this.details[e].quantity||(t+=1);return!(t>0)||(this.makeToast("warning",this.$t("AddQuantity"),this.$t("Warning")),!1)},Update_Sale:function(){var t=this;if(this.verifiedForm()){this.SubmitProcessing=!0,r().start(),r().set(.1);var e=this.$route.params.id;axios.put("sales/".concat(e),{date:this.sale.date,client_id:this.sale.client_id,GrandTotal:this.GrandTotal,warehouse_id:this.sale.warehouse_id,statut:this.sale.statut,notes:this.sale.notes,tax_rate:this.sale.tax_rate?this.sale.tax_rate:0,TaxNet:this.sale.TaxNet?this.sale.TaxNet:0,discount:this.sale.discount?this.sale.discount:0,shipping:this.sale.shipping?this.sale.shipping:0,details:this.details}).then((function(e){t.makeToast("success",t.$t("Update.TitleSale"),t.$t("Success")),r().done(),t.SubmitProcessing=!1,t.$router.push({name:"index_sales"})})).catch((function(e){r().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),t.SubmitProcessing=!1}))}},Last_Detail_id:function(){this.product.detail_id=0;var t=this.details.length;this.product.detail_id=this.details[t-1].detail_id+1},Get_Product_Details:function(t,e){var i=this;axios.get("/show_product_data/"+t+"/"+e).then((function(t){i.product.del=0,i.product.id=0,i.product.etat="new",i.product.discount=0,i.product.DiscountNet=0,i.product.discount_Method="2",i.product.product_id=t.data.id,i.product.name=t.data.name,i.product.product_type=t.data.product_type,i.product.Net_price=t.data.Net_price,i.product.Unit_price=t.data.Unit_price,i.product.taxe=t.data.tax_price,i.product.tax_method=t.data.tax_method,i.product.tax_percent=t.data.tax_percent,i.product.unitSale=t.data.unitSale,i.product.sale_unit_id=t.data.sale_unit_id,i.product.is_imei=t.data.is_imei,i.product.imei_number="",i.add_product(),i.Calcul_Total()}))},GetElements:function(){var t=this,e=this.$route.params.id;axios.get("sales/".concat(e,"/edit")).then((function(e){t.sale=e.data.sale,t.details=e.data.details,t.clients=e.data.clients,t.warehouses=e.data.warehouses,t.Get_Products_By_Warehouse(t.sale.warehouse_id),t.Calcul_Total(),t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))}},created:function(){this.GetElements()}};const d=(0,i(51900).Z)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-content"},[i("breadcumb",{attrs:{page:t.$t("EditSale"),folder:t.$t("ListSales")}}),t._v(" "),t.isLoading?i("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():i("validation-observer",{ref:"edit_sale"},[i("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Sale.apply(null,arguments)}}},[i("b-row",[i("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[i("b-card",[i("b-row",[i("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[i("validation-provider",{attrs:{name:"date",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[i("b-form-group",{attrs:{label:t.$t("date")+" *"}},[i("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"date-feedback",type:"date"},model:{value:t.sale.date,callback:function(e){t.$set(t.sale,"date",e)},expression:"sale.date"}}),t._v(" "),i("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,4059139714)})],1),t._v(" "),i("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[i("validation-provider",{attrs:{name:"Customer",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.valid,s=e.errors;return i("b-form-group",{attrs:{label:t.$t("Customer")+" *"}},[i("v-select",{class:{"is-invalid":!!s.length},attrs:{state:!s[0]&&(!!a||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Customer"),options:t.clients.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.sale.client_id,callback:function(e){t.$set(t.sale,"client_id",e)},expression:"sale.client_id"}}),t._v(" "),i("b-form-invalid-feedback",[t._v(t._s(s[0]))])],1)}}],null,!1,1559569131)})],1),t._v(" "),i("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[i("validation-provider",{attrs:{name:"warehouse",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.valid,s=e.errors;return i("b-form-group",{attrs:{label:t.$t("warehouse")+" *"}},[i("v-select",{class:{"is-invalid":!!s.length},attrs:{state:!s[0]&&(!!a||null),disabled:t.details.length>0,reduce:function(t){return t.value},placeholder:t.$t("Choose_Warehouse"),options:t.warehouses.map((function(t){return{label:t.name,value:t.id}}))},on:{input:t.Selected_Warehouse},model:{value:t.sale.warehouse_id,callback:function(e){t.$set(t.sale,"warehouse_id",e)},expression:"sale.warehouse_id"}}),t._v(" "),i("b-form-invalid-feedback",[t._v(t._s(s[0]))])],1)}}],null,!1,1961133601)})],1),t._v(" "),i("b-col",{staticClass:"mb-5",attrs:{md:"12"}},[i("h6",[t._v(t._s(t.$t("ProductName")))]),t._v(" "),i("div",{staticClass:"autocomplete",attrs:{id:"autocomplete"}},[i("input",{ref:"product_autocomplete",staticClass:"autocomplete-input",attrs:{placeholder:t.$t("Scan_Search_Product_by_Code_Name")},on:{input:function(e){return t.search_input=e.target.value},keyup:function(e){return t.search(t.search_input)},focus:t.handleFocus,blur:t.handleBlur}}),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.focused,expression:"focused"}],staticClass:"autocomplete-result-list"},t._l(t.product_filter,(function(e){return i("li",{staticClass:"autocomplete-result",on:{mousedown:function(i){return t.SearchProduct(e)}}},[t._v(t._s(t.getResultValue(e)))])})),0)])]),t._v(" "),i("b-col",{attrs:{md:"12"}},[i("h5",[t._v(t._s(t.$t("order_products"))+" *")]),t._v(" "),i("div",{staticClass:"table-responsive"},[i("table",{staticClass:"table table-hover"},[i("thead",{staticClass:"bg-gray-300"},[i("tr",[i("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),i("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("ProductName")))]),t._v(" "),i("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Net_Unit_Price")))]),t._v(" "),i("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("CurrentStock")))]),t._v(" "),i("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Qty")))]),t._v(" "),i("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Discount")))]),t._v(" "),i("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Tax")))]),t._v(" "),i("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("SubTotal")))]),t._v(" "),i("th",{staticClass:"text-center",attrs:{scope:"col"}},[i("i",{staticClass:"fa fa-trash"})])])]),t._v(" "),i("tbody",[t.details.length<=0?i("tr",[i("td",{attrs:{colspan:"9"}},[t._v(t._s(t.$t("NodataAvailable")))])]):t._e(),t._v(" "),t._l(t.details,(function(e){return i("tr",{key:e.detail_id,class:{row_deleted:1===e.del||0===e.no_unit&&"is_service"!=e.product_type}},[i("td",[t._v(t._s(e.detail_id))]),t._v(" "),i("td",[i("span",[t._v(t._s(e.code))]),t._v(" "),i("br"),t._v(" "),i("span",{staticClass:"badge badge-success"},[t._v(t._s(e.name))])]),t._v(" "),i("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.Net_price,3)))]),t._v(" "),i("td",["is_service"==e.product_type?i("span",{staticClass:"badge badge-warning"},[t._v("----")]):i("span",{staticClass:"badge badge-warning"},[t._v(t._s(e.stock)+" "+t._s(e.unitSale))])]),t._v(" "),i("td",[i("div",{staticClass:"quantity"},[i("b-input-group",[i("b-input-group-prepend",[i("span",{directives:[{name:"show",rawName:"v-show",value:0!==e.no_unit||"is_service"==e.product_type,expression:"detail.no_unit !== 0 || detail.product_type == 'is_service'"}],staticClass:"btn btn-primary btn-sm",on:{click:function(i){return t.decrement(e,e.detail_id)}}},[t._v("-")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.quantity,expression:"detail.quantity",modifiers:{number:!0}}],staticClass:"form-control",attrs:{min:0,max:e.stock,disabled:1===e.del||0===e.no_unit&&"is_service"!=e.product_type},domProps:{value:e.quantity},on:{keyup:function(i){return t.Verified_Qty(e,e.detail_id)},input:function(i){i.target.composing||t.$set(e,"quantity",t._n(i.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),i("b-input-group-append",[i("span",{directives:[{name:"show",rawName:"v-show",value:0!==e.no_unit||"is_service"==e.product_type,expression:"detail.no_unit !== 0 || detail.product_type == 'is_service'"}],staticClass:"btn btn-primary btn-sm",on:{click:function(i){return t.increment(e,e.detail_id)}}},[t._v("+")])])],1)],1)]),t._v(" "),i("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.DiscountNet*e.quantity,2)))]),t._v(" "),i("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.taxe*e.quantity,2)))]),t._v(" "),i("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(e.subtotal.toFixed(2)))]),t._v(" "),i("td",{directives:[{name:"show",rawName:"v-show",value:0!==e.no_unit||"is_service"==e.product_type,expression:"detail.no_unit !== 0 || detail.product_type == 'is_service'"}]},[t.currentUserPermissions&&t.currentUserPermissions.includes("edit_product_sale")?i("i",{staticClass:"i-Edit text-25 text-success cursor-pointer",on:{click:function(i){return t.Modal_Updat_Detail(e)}}}):t._e(),t._v(" "),i("i",{staticClass:"i-Close-Window text-25 text-danger cursor-pointer",on:{click:function(i){return t.delete_Product_Detail(e.detail_id)}}})])])}))],2)])])]),t._v(" "),i("div",{staticClass:"offset-md-9 col-md-3 mt-4"},[i("table",{staticClass:"table table-striped table-sm"},[i("tbody",[i("tr",[i("td",{staticClass:"bold"},[t._v(t._s(t.$t("OrderTax")))]),t._v(" "),i("td",[i("span",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale.TaxNet.toFixed(2))+" ("+t._s(t.formatNumber(t.sale.tax_rate,2))+" %)")])])]),t._v(" "),i("tr",[i("td",{staticClass:"bold"},[t._v(t._s(t.$t("Discount")))]),t._v(" "),i("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale.discount.toFixed(2)))])]),t._v(" "),i("tr",[i("td",{staticClass:"bold"},[t._v(t._s(t.$t("Shipping")))]),t._v(" "),i("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale.shipping.toFixed(2)))])]),t._v(" "),i("tr",[i("td",[i("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Total")))])]),t._v(" "),i("td",[i("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.GrandTotal.toFixed(2)))])])])])])]),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("edit_tax_discount_shipping_sale")?i("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[i("validation-provider",{attrs:{name:"Order Tax",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[i("b-form-group",{attrs:{label:t.$t("OrderTax")}},[i("b-input-group",{attrs:{append:"%"}},[i("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"OrderTax-feedback",label:"Order Tax"},on:{keyup:function(e){return t.keyup_OrderTax()}},model:{value:t.sale.tax_rate,callback:function(e){t.$set(t.sale,"tax_rate",t._n(e))},expression:"sale.tax_rate"}})],1),t._v(" "),i("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,2557352802)})],1):t._e(),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("edit_tax_discount_shipping_sale")?i("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[i("validation-provider",{attrs:{name:"Discount",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[i("b-form-group",{attrs:{label:t.$t("Discount")}},[i("b-input-group",{attrs:{append:t.currentUser.currency}},[i("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"Discount-feedback",label:"Discount"},on:{keyup:function(e){return t.keyup_Discount()}},model:{value:t.sale.discount,callback:function(e){t.$set(t.sale,"discount",t._n(e))},expression:"sale.discount"}})],1),t._v(" "),i("b-form-invalid-feedback",{attrs:{id:"Discount-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,1543927045)})],1):t._e(),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("edit_tax_discount_shipping_sale")?i("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[i("validation-provider",{attrs:{name:"Shipping",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[i("b-form-group",{attrs:{label:t.$t("Shipping")}},[i("b-input-group",{attrs:{append:t.currentUser.currency}},[i("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"Shipping-feedback",label:"Shipping"},on:{keyup:function(e){return t.keyup_Shipping()}},model:{value:t.sale.shipping,callback:function(e){t.$set(t.sale,"shipping",t._n(e))},expression:"sale.shipping"}})],1),t._v(" "),i("b-form-invalid-feedback",{attrs:{id:"Shipping-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,1943903941)})],1):t._e(),t._v(" "),i("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[i("validation-provider",{attrs:{name:"Status",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.valid,s=e.errors;return i("b-form-group",{attrs:{label:t.$t("Status")+" *"}},[i("v-select",{class:{"is-invalid":!!s.length},attrs:{state:!s[0]&&(!!a||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Status"),options:[{label:"completed",value:"completed"},{label:"Pending",value:"pending"},{label:"ordered",value:"ordered"}]},model:{value:t.sale.statut,callback:function(e){t.$set(t.sale,"statut",e)},expression:"sale.statut"}}),t._v(" "),i("b-form-invalid-feedback",[t._v(t._s(s[0]))])],1)}}],null,!1,255606126)})],1),t._v(" "),i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:t.$t("Note")}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sale.notes,expression:"sale.notes"}],staticClass:"form-control",attrs:{rows:"4",placeholder:t.$t("Afewwords")},domProps:{value:t.sale.notes},on:{input:function(e){e.target.composing||t.$set(t.sale,"notes",e.target.value)}}})])],1),t._v(" "),i("b-col",{attrs:{md:"12"}},[i("b-form-group",[i("b-button",{attrs:{variant:"primary",disabled:t.SubmitProcessing},on:{click:t.Submit_Sale}},[i("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),i("validation-observer",{ref:"Update_Detail"},[i("b-modal",{attrs:{"hide-footer":"",size:"lg",id:"form_Update_Detail",title:t.detail.name}},[i("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit_Update_Detail.apply(null,arguments)}}},[i("b-row",[i("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[i("validation-provider",{attrs:{name:"Product Price",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[i("b-form-group",{attrs:{label:t.$t("ProductPrice")+" *",id:"Price-input"}},[i("b-form-input",{attrs:{label:"Product Price",state:t.getValidationState(e),"aria-describedby":"Price-feedback"},model:{value:t.detail.Unit_price,callback:function(e){t.$set(t.detail,"Unit_price",t._n(e))},expression:"detail.Unit_price"}}),t._v(" "),i("b-form-invalid-feedback",{attrs:{id:"Price-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),t._v(" "),i("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[i("validation-provider",{attrs:{name:"Tax Method",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.valid,s=e.errors;return i("b-form-group",{attrs:{label:t.$t("TaxMethod")+" *"}},[i("v-select",{class:{"is-invalid":!!s.length},attrs:{state:!s[0]&&(!!a||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Method"),options:[{label:"Exclusive",value:"1"},{label:"Inclusive",value:"2"}]},model:{value:t.detail.tax_method,callback:function(e){t.$set(t.detail,"tax_method",e)},expression:"detail.tax_method"}}),t._v(" "),i("b-form-invalid-feedback",[t._v(t._s(s[0]))])],1)}}])})],1),t._v(" "),i("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[i("validation-provider",{attrs:{name:"Order Tax",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[i("b-form-group",{attrs:{label:t.$t("OrderTax")+" *"}},[i("b-input-group",{attrs:{append:"%"}},[i("b-form-input",{attrs:{label:"Order Tax",state:t.getValidationState(e),"aria-describedby":"OrderTax-feedback"},model:{value:t.detail.tax_percent,callback:function(e){t.$set(t.detail,"tax_percent",t._n(e))},expression:"detail.tax_percent"}})],1),t._v(" "),i("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),t._v(" "),i("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[i("validation-provider",{attrs:{name:"Discount Method",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.valid,s=e.errors;return i("b-form-group",{attrs:{label:t.$t("Discount_Method")+" *"}},[i("v-select",{class:{"is-invalid":!!s.length},attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Method"),state:!s[0]&&(!!a||null),options:[{label:"Percent %",value:"1"},{label:"Fixed",value:"2"}]},model:{value:t.detail.discount_Method,callback:function(e){t.$set(t.detail,"discount_Method",e)},expression:"detail.discount_Method"}}),t._v(" "),i("b-form-invalid-feedback",[t._v(t._s(s[0]))])],1)}}])})],1),t._v(" "),i("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[i("validation-provider",{attrs:{name:"Discount Rate",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[i("b-form-group",{attrs:{label:t.$t("Discount")+" *"}},[i("b-form-input",{attrs:{label:"Discount",state:t.getValidationState(e),"aria-describedby":"Discount-feedback"},model:{value:t.detail.discount,callback:function(e){t.$set(t.detail,"discount",t._n(e))},expression:"detail.discount"}}),t._v(" "),i("b-form-invalid-feedback",{attrs:{id:"Discount-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),t._v(" "),i("b-col",{directives:[{name:"show",rawName:"v-show",value:t.detail.is_imei,expression:"detail.is_imei"}],attrs:{lg:"12",md:"12",sm:"12"}},[i("b-form-group",{attrs:{label:t.$t("Add_product_IMEI_Serial_number")}},[i("b-form-input",{attrs:{label:"Add_product_IMEI_Serial_number",placeholder:t.$t("Add_product_IMEI_Serial_number")},model:{value:t.detail.imei_number,callback:function(e){t.$set(t.detail,"imei_number",e)},expression:"detail.imei_number"}})],1)],1),t._v(" "),i("b-col",{attrs:{md:"12"}},[i("b-form-group",[i("b-button",{attrs:{variant:"primary",type:"submit",disabled:t.Submit_Processing_detail}},[i("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))]),t._v(" "),t.Submit_Processing_detail?t._m(1):t._e()],1)],1)],1)],1)],1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);