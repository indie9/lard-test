(function(){var e={8326:function(e,t,l){"use strict";var i=l(9242),n=l(3396),o=l(7139),r=l(7718),s=l(870),a=l(3369),d=l(6824),u=l(8521),c=l(9271),p=l(5869);const g=e=>((0,n.dD)("data-v-0e56a9ec"),e=e(),(0,n.Cn)(),e),m=g((()=>(0,n._)("span",{class:"text-hinttext"}," Например: Иванов Иван ",-1))),f=g((()=>(0,n._)("h1",null,"Список Сотрудников",-1)));function _(e,t,l,i,g,_){const y=(0,n.up)("TagsFilter"),v=(0,n.up)("UserCard"),w=(0,n.up)("Filter"),h=(0,n.up)("AddUserModal");return(0,n.wg)(),(0,n.j4)(r.q,{class:(0,o.C_)({modalopen:i.modalOpen})},{default:(0,n.w5)((()=>[(0,n.Wm)(c.O,{class:"bg-mainbg pt-10"},{default:(0,n.w5)((()=>[(0,n.Wm)(a.K,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d.o,{"no-gutters":""},{default:(0,n.w5)((()=>[(0,n.Wm)(u.D,{class:"mr-6",cols:"12",sm:"7"},{default:(0,n.w5)((()=>[(0,n.Wm)(p.hw,{class:"mr-8 pa-2 bg-mainbg",placeholder:"Поиск сотрудника",clearable:"",variant:"plain","append-inner-icon":"mdi-magnify",modelValue:i.searchText,"onUpdate:modelValue":t[0]||(t[0]=e=>i.searchText=e)},null,8,["modelValue"]),m,f,(0,n.Wm)(y,{onTagsSelected:i.applyFilter},null,8,["onTagsSelected"]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.users,(e=>((0,n.wg)(),(0,n.j4)(v,{key:e.inn,user:e,searchedText:i.searchText},null,8,["user","searchedText"])))),128)),(0,n.Wm)(d.o,{"no-gutters":""},{default:(0,n.w5)((()=>[i.showCountBtn?((0,n.wg)(),(0,n.j4)(s.T,{key:0,class:"mx-auto text-white",variant:"elevated",size:"large",color:"#00B6ED","prepend-icon":"mdi-cached",onClick:i.showMore},{default:(0,n.w5)((()=>[(0,n.Uk)(" Показать еще ")])),_:1},8,["onClick"])):(0,n.kq)("",!0)])),_:1})])),_:1}),(0,n.Wm)(u.D,{cols:"12",sm:"4"},{default:(0,n.w5)((()=>[(0,n.Wm)(s.T,{class:"ms-2 text-white",variant:"elevated",block:"",size:"x-large",color:"#00B6ED","prepend-icon":"mdi-account-plus-outline",onClick:i.onOpen},{default:(0,n.w5)((()=>[(0,n.Uk)(" Добавить нового сотрудника ")])),_:1},8,["onClick"]),(0,n.Wm)(w,{onApplyFilter:i.applyFilter},null,8,["onApplyFilter"])])),_:1})])),_:1})])),_:1})])),_:1}),i.modalOpen?((0,n.wg)(),(0,n.j4)(h,{key:0,onOnClose:i.onClose,onAddUser:i.addUser},null,8,["onOnClose","onAddUser"])):(0,n.kq)("",!0)])),_:1},8,["class"])}var y=l(2718);const v=["innerHTML"],w={class:"mr-6 px-2 text-nowrap text-nowrap-center"},h={class:"mr-2 text-nowrap text-nowrap-center bg-grenprimary rounded-lg px-2 py-1 contract"},b={class:"mr-2 text-nowrap text-nowrap-center"},U={class:"pr-4 border-right"},x={class:"px-4 border-right"},W={class:"px-4 border-right"},k={class:"px-4 border-right"},E={class:"pl-4"};function T(e,t,i,r,s,u){return(0,n.wg)(),(0,n.j4)(a.K,{class:"pa-6 mb-6 bg-cardbg",height:"150px"},{default:(0,n.w5)((()=>[(0,n.Wm)(d.o,{class:"h-25 flex-nowrap mb-2"},{default:(0,n.w5)((()=>[(0,n._)("span",{class:"text-titleprimary mr-5 text-h6 text-nowrap-center",innerHTML:r.userName},null,8,v),(0,n._)("span",w," ИНН "+(0,o.zw)(i.user.inn),1),(0,n._)("span",h,(0,o.zw)(i.user.type_contract.slug),1),(0,n._)("span",b,(0,o.zw)(i.user.position.name),1)])),_:1}),(0,n.Wm)(d.o,{class:"mb-2"},{default:(0,n.w5)((()=>[(0,n.Wm)(y.f,{src:l(968)(`./${i.user.country.icon}.svg`),"max-height":"20","max-width":"20",class:"mr-2 pr-4",contain:""},null,8,["src"]),(0,n._)("span",U,(0,o.zw)(i.user.country.slug),1),(0,n._)("span",x,(0,o.zw)(i.user.address),1),(0,n._)("span",W," Дата рождения: "+(0,o.zw)(i.user.date_birth),1),(0,n._)("span",k," Возраст: "+(0,o.zw)(i.user.age),1),(0,n._)("span",E," Пол: "+(0,o.zw)(i.user.gender.title),1)])),_:1}),(0,n.Wm)(d.o,null,{default:(0,n.w5)((()=>[(0,n._)("span",{class:"text-white rounded-lg pa-2",style:(0,o.j5)({background:i.user.status.tag.color})},(0,o.zw)(i.user.status.description),5)])),_:1})])),_:1})}var V={props:{user:Object,searchedText:String},setup(e,{attrs:t,slots:l,emit:i,expose:o}){const r=(0,n.Fl)((()=>{if(e.searchedText){const t=new RegExp(e.searchedText,"gi");return e.user.full_name.replace(t,`<span class="text-red"> ${e.searchedText} </span>`)}return e.user.full_name}));return{userName:r}}},D=l(89);const C=(0,D.Z)(V,[["render",T]]);var j=C,O=l(265),F=l(6572),B=l(1334),M=l(6422),S=l(2061);function z(e,t,l,i,o,r){return(0,n.wg)(),(0,n.j4)(a.K,{class:"modal-base h-screen w-screen m-w"},{default:(0,n.w5)((()=>[(0,n.Wm)(O._,{class:"pa-10",color:"dddddd","max-width":"1000",width:"100%"},{default:(0,n.w5)((()=>[(0,n.Wm)(F.E,{class:"text-h5"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Добавление пользователя ")])),_:1}),(0,n.Wm)(M.O,{ref:"form"},{default:(0,n.w5)((()=>[(0,n.Wm)(a.K,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d.o,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u.D,{cols:"5"},{default:(0,n.w5)((()=>[(0,n.Wm)(p.hw,{class:"rounded bg-inputbg pt-0 mt-0 pl-4 pb-4",label:"ФИО",rules:i.rules,"hide-details":"auto",variant:"plain","single-line":"",modelValue:i.model.full_name,"onUpdate:modelValue":t[0]||(t[0]=e=>i.model.full_name=e)},null,8,["rules","modelValue"])])),_:1}),(0,n.Wm)(u.D,{cols:"3"},{default:(0,n.w5)((()=>[(0,n.Wm)(S.r,{class:"rounded bg-inputbg pt-0 mt-0 pl-4 pb-4",rules:i.rules,items:i.genderType,variant:"plain","single-line":"",modelValue:i.model.gender_id,"onUpdate:modelValue":t[1]||(t[1]=e=>i.model.gender_id=e),"item-value":"id","item-title":"title","menu-props":{top:!0,offsetY:!0},label:"пол"},null,8,["rules","items","modelValue"])])),_:1}),(0,n.Wm)(u.D,{cols:"4"},{default:(0,n.w5)((()=>[(0,n.Wm)(p.hw,{class:"rounded bg-inputbg pt-0 mt-0 pl-4 pb-4",rules:i.rules,modelValue:i.model.inn,"onUpdate:modelValue":t[2]||(t[2]=e=>i.model.inn=e),variant:"plain","single-line":"",label:"ИНН"},null,8,["rules","modelValue"])])),_:1})])),_:1}),(0,n.Wm)(d.o,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u.D,{cols:"5"},{default:(0,n.w5)((()=>[(0,n.Wm)(p.hw,{class:"rounded bg-inputbg pt-0 mt-0 pl-4",rules:i.rules,modelValue:i.model.address,"onUpdate:modelValue":t[3]||(t[3]=e=>i.model.address=e),variant:"plain","single-line":"",label:"Адресс"},null,8,["rules","modelValue"])])),_:1}),(0,n.Wm)(u.D,{cols:"2"},{default:(0,n.w5)((()=>[(0,n.Wm)(p.hw,{class:"rounded bg-inputbg pt-0 mt-0 pl-4 pr-1",rules:i.rules,modelValue:i.model.date_birth,"onUpdate:modelValue":t[4]||(t[4]=e=>i.model.date_birth=e),variant:"plain","single-line":"",type:"date",label:"дата рождения"},null,8,["rules","modelValue"])])),_:1}),(0,n.Wm)(u.D,{cols:"2"},{default:(0,n.w5)((()=>[(0,n.Wm)(p.hw,{class:"rounded bg-inputbg pt-0 mt-0 pl-4",rules:i.rules,modelValue:i.model.age,"onUpdate:modelValue":t[5]||(t[5]=e=>i.model.age=e),variant:"plain","single-line":"",label:"Возраст"},null,8,["rules","modelValue"])])),_:1})])),_:1}),(0,n.Wm)(d.o,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u.D,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Тип договора "),(0,n.Wm)(S.r,{class:"rounded bg-inputbg pt-0 mt-0 pl-4",rules:i.rules,items:i.contractType,variant:"plain","single-line":"","item-value":"id","item-title":"title",modelValue:i.model.type_contract_id,"onUpdate:modelValue":t[6]||(t[6]=e=>i.model.type_contract_id=e),"menu-props":{top:!0,offsetY:!0}},null,8,["rules","items","modelValue"])])),_:1}),(0,n.Wm)(u.D,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Гражданство "),(0,n.Wm)(S.r,{class:"rounded bg-inputbg pt-0 mt-0 pl-4",rules:i.rules,items:i.countryType,variant:"plain","single-line":"",modelValue:i.model.country_id,"onUpdate:modelValue":t[7]||(t[7]=e=>i.model.country_id=e),"item-value":"id","item-title":"title","menu-props":{top:!0,offsetY:!0}},null,8,["rules","items","modelValue"])])),_:1})])),_:1}),(0,n.Wm)(d.o,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u.D,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Должность "),(0,n.Wm)(S.r,{class:"rounded bg-inputbg pt-0 mt-0 pl-4",rules:i.rules,items:i.positionType,variant:"plain","single-line":"",modelValue:i.model.position_id,"onUpdate:modelValue":t[8]||(t[8]=e=>i.model.position_id=e),"item-value":"id","item-title":"name","menu-props":{top:!0,offsetY:!0}},null,8,["rules","items","modelValue"])])),_:1}),(0,n.Wm)(u.D,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Тэг "),(0,n.Wm)(S.r,{class:"rounded bg-inputbg pt-0 mt-0 pl-4",rules:i.rules,modelValue:i.model.status_id,"onUpdate:modelValue":t[9]||(t[9]=e=>i.model.status_id=e),variant:"plain","single-line":"",items:i.tagsType,"item-value":"id","item-title":"title","menu-props":{top:!0,offsetY:!0}},null,8,["rules","modelValue","items"])])),_:1})])),_:1}),(0,n.Wm)(d.o,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u.D,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Статус сотрудника "),(0,n.Wm)(p.hw,{class:"rounded bg-inputbg pt-0 mt-0 pl-4",rules:i.rules,modelValue:i.model.statusDescription,"onUpdate:modelValue":t[10]||(t[10]=e=>i.model.statusDescription=e),variant:"plain","single-line":""},null,8,["rules","modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},512),(0,n.Wm)(B.h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s.T,{class:"ms-2 text-white",variant:"elevated",color:"#00AE5B",size:"large",width:"50%",onClick:i.apply},{default:(0,n.w5)((()=>[(0,n.Uk)(" Добавить ")])),_:1},8,["onClick"]),(0,n.Wm)(s.T,{class:"ms-2 text-white",variant:"elevated",color:"#84909B",size:"large",width:"50%",onClick:i.onClose},{default:(0,n.w5)((()=>[(0,n.Uk)(" Отмена ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}var A=l(4870),R={props:{},setup(e,{attrs:t,slots:l,emit:i,expose:n}){const o=(0,A.iH)(null),r=[e=>!!e||"Не заполнено"],s=(0,A.iH)({full_name:null,inn:null,address:null,date_birth:null,age:null,type_contract_id:null,gender_id:null,country_id:null,position_id:null,status_id:null,statusDescription:null}),a=[{id:1,title:"Трудовой договор",slug:"ТД"},{id:2,title:"гражданско-правового характера",slug:"ГПХ"},{id:3,title:"Самознятый",slug:"СМЗ"},{id:4,title:"Кандидат на должность",slug:"Кандидат"}],d=[{id:1,title:"Проблемные",slug:"ТД",color:"#E2BD06"},{id:2,title:"Критические",slug:"ГПХ",color:"#E52E2E"},{id:3,title:"Есть замечания",slug:"СМЗ",color:"#00B6ED"},{id:4,title:"Выполнено",slug:"Кандидат",color:"#00AE5B"}],u=[{id:1,icon:"rus",title:"Россия",slug:"RUS"},{id:2,icon:"tj",title:"Таджикистан",slug:"TJ"},{id:3,icon:"uz",title:"Узбекистан",slug:"UZ"}],c=[{id:1,name:"Промышленный альпинист"},{id:2,name:"Токарь"},{id:3,name:"Пекарь"}],p=[{id:2,title:"Женский",slug:"Ж"},{id:1,title:"Мужской",slug:"М"}],g=()=>{i("onClose")},m=()=>{o.value.validate().then((e=>{if(e.valid){let e={...d.find((e=>e.id==s.value.status_id))};i("addUser",{...s.value,type_contract:a.find((e=>e.id==s.value.type_contract_id)),gender:p.find((e=>e.id==s.value.gender_id)),country:u.find((e=>e.id==s.value.country_id)),position:c.find((e=>e.id==s.value.position_id)),status:{tag_id:e.id,description:s.value.statusDescription,tag:e}})}}))};return{form:o,contractType:a,tagsType:d,countryType:u,positionType:c,genderType:p,model:s,rules:r,apply:m,onClose:g}}};const H=(0,D.Z)(R,[["render",z]]);var Y=H,P=l(1222);const Z=(0,n._)("h2",null,"Фильтр",-1);function K(e,t,l,i,o,r){return(0,n.wg)(),(0,n.j4)(a.K,{class:"pa-30 w-100 bg-mainbg","max-width":"587",width:"587px"},{default:(0,n.w5)((()=>[Z,(0,n.Wm)(d.o,{width:"100%"},{default:(0,n.w5)((()=>[(0,n.Wm)(u.D,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Гражданство "),(0,n.Wm)(S.r,{class:"rounded bg-inputbg pt-0 mt-0 pl-4 pb-4",variant:"plain","single-line":"",items:i.countryType,modelValue:i.model.country_id,"onUpdate:modelValue":t[0]||(t[0]=e=>i.model.country_id=e),"item-value":"id","item-title":"title","menu-props":{top:!0,offsetY:!0}},null,8,["items","modelValue"])])),_:1}),(0,n.Wm)(u.D,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Пол "),(0,n.Wm)(S.r,{class:"rounded bg-inputbg pt-0 mt-0 pl-4 pb-4",variant:"plain","single-line":"",items:i.genderType,modelValue:i.model.gender_id,"onUpdate:modelValue":t[1]||(t[1]=e=>i.model.gender_id=e),"item-value":"id","item-title":"title","menu-props":{top:!0,offsetY:!0}},null,8,["items","modelValue"])])),_:1})])),_:1}),(0,n.Wm)(d.o,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u.D,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Должность "),(0,n.Wm)(S.r,{class:"rounded bg-inputbg pt-0 mt-0 pl-4 pb-4",variant:"plain","single-line":"",items:i.positionType,modelValue:i.model.position_id,"onUpdate:modelValue":t[2]||(t[2]=e=>i.model.position_id=e),"item-value":"id","item-title":"name","menu-props":{top:!0,offsetY:!0}},null,8,["items","modelValue"])])),_:1})])),_:1}),(0,n.Uk)(" Тип договора "),(0,n.Wm)(a.K,{fluid:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.contractType,(e=>((0,n.wg)(),(0,n.j4)(P.x,{class:"mb-4 checkbox",height:"25px",key:e.id,modelValue:i.model.type_contract_id,"onUpdate:modelValue":t[3]||(t[3]=e=>i.model.type_contract_id=e),label:e.slug,value:e.id},null,8,["modelValue","label","value"])))),128))])),_:1}),(0,n.Wm)(B.h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s.T,{class:"ms-2 text-white",variant:"elevated",color:"#00AE5B",size:"large",width:"50%",onClick:i.applyFilter},{default:(0,n.w5)((()=>[(0,n.Uk)(" Применить ")])),_:1},8,["onClick"]),(0,n.Wm)(s.T,{class:"ms-2 text-white",variant:"elevated",color:"#84909B",size:"large",width:"50%",onClick:i.onReset},{default:(0,n.w5)((()=>[(0,n.Uk)(" очистить ")])),_:1},8,["onClick"])])),_:1})])),_:1})}var q={setup(e,{attrs:t,slots:l,emit:i,expose:n}){const o=(0,A.iH)({type_contract_id:[],gender_id:0,country_id:0,position_id:0}),r=[{id:1,title:"Трудовой договор",slug:"ТД"},{id:2,title:"гражданско-правового характера",slug:"ГПХ"},{id:3,title:"Самознятый",slug:"СМЗ"},{id:4,title:"Кандидат на должность",slug:"Кандидат"}],s=[{id:0,icon:"null",title:"Все страны",slug:"null"},{id:2,icon:"tj",title:"Таджикистан",slug:"TJ"},{id:1,icon:"rus",title:"Россия",slug:"RUS"},{id:3,icon:"uz",title:"Узбекистан",slug:"uz"}],a=[{id:0,name:"Все должности"},{id:1,name:"Промышленный альпинист"},{id:2,name:"Токарь"},{id:3,name:"Пекарь"}],d=[{id:0,title:"Без разницы",slug:null},{id:2,title:"Женский",slug:"Ж"},{id:1,title:"Мужской",slug:"М"}],u=()=>{o.value={type_contract_id:[],gender_id:0,country_id:0,position_id:0},i("applyFilter",o.value)},c=()=>{i("applyFilter",o.value)};return{contractType:r,countryType:s,positionType:a,genderType:d,model:o,applyFilter:c,onReset:u}}};const N=(0,D.Z)(q,[["render",K]]);var L=N;function I(e,t,l,i,r,s){const a=(0,n.up)("Tag");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(a,{selected:i.isAllSelected,onClick:i.allSelected,tag:i.tagAll},{default:(0,n.w5)((()=>[(0,n.Uk)(" Весь список ")])),_:1},8,["selected","onClick","tag"]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.tagsType,(e=>((0,n.wg)(),(0,n.j4)(a,{key:e.id,selected:i.tags[e.id],tag:e,onClick:t=>i.select(e.id)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(e.title),1)])),_:2},1032,["selected","tag","onClick"])))),128))],64)}l(7658);var J=l(7103);function $(e,t,l,i,r,s){return(0,n.wg)(),(0,n.j4)(J.v,{variant:l.selected?"elevated":"outlined",color:i.tagColor},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(e.tagItem)+" ",1),(0,n.WI)(e.$slots,"default")])),_:3},8,["variant","color"])}var G={props:{selected:Boolean,tag:Object},components:{},setup(e,{attrs:t,slots:l,emit:i,expose:o}){const r=(0,n.Fl)((()=>e.tag.color));return{tagColor:r}}};const Q=(0,D.Z)(G,[["render",$]]);var X=Q,ee={props:{},components:{Tag:X},setup(e,{attrs:t,slots:l,emit:i,expose:o}){const r=[{id:1,title:"Проблемные",slug:"ТД",color:"#E2BD06"},{id:2,title:"Критические",slug:"ГПХ",color:"#E52E2E"},{id:3,title:"Есть замечания",slug:"СМЗ",color:"#00B6ED"},{id:4,title:"Выполнено",slug:"Кандидат",color:"#00AE5B"}],s={id:0,title:"Весь список",color:"#B0BCC7"};let a={};r.forEach((e=>{a[e.id]=!1}));const d=(0,A.iH)({...a}),u=(0,n.Fl)((()=>{let e=[];return Object.keys(d.value).forEach((t=>{d.value[t]&&e.push(t)})),e})),c=(0,n.Fl)((()=>(console.log(!u.length,u.length,r.length),!u.value.length||u.value.length==r.length))),p=()=>{r.forEach((e=>{a[e.id]=!1})),d.value={...a},i("tagsSelected",{tag_ids:[]})},g=e=>{d.value[e]=!d.value[e],i("tagsSelected",{tag_ids:u})};return{tagsType:r,tagAll:s,tags:d,isAllSelected:c,tagsResult:u,allSelected:p,select:g}}};const te=(0,D.Z)(ee,[["render",I]]);var le=te,ie=l(65),ne={name:"App",components:{UserCard:j,AddUserModal:Y,Filter:L,TagsFilter:le},props:{title:String},setup(e,{attrs:t,slots:l,emit:i,expose:o}){const r=(0,ie.oR)(),s=r.getters,a=(0,A.iH)(!1),d=(0,A.iH)(!1),u=(0,A.iH)(null),c=(0,A.iH)(3),p=(0,n.Fl)((()=>d.value?s.getFilteredUsers.length>c.value:s.getUsers.length>c.value)),g=(0,n.Fl)((()=>d.value?s.getFilteredUsers.slice(0,c.value):s.getUsers.slice(0,c.value))),m=()=>{c.value+=3},f=()=>{a.value=!1},_=()=>{a.value=!0},y=e=>{r.dispatch("saveUser",e),a.value=!1},v=e=>{d.value=!0,r.dispatch("filterUsers",e),c.value=3};return(0,n.YP)((()=>u.value),(e=>{v({query:e})})),{searchText:u,modalOpen:a,showCountBtn:p,showMore:m,addUser:y,onOpen:_,onClose:f,applyFilter:v,users:g}}};const oe=(0,D.Z)(ne,[["render",_],["__scopeId","data-v-0e56a9ec"]]);var re=oe,se=(l(9773),l(8957)),ae=(0,se.Rd)({theme:{themes:{light:{dark:!1,colors:{titleprimary:"#2A358C",grenprimary:"#00AE5B",mainbg:"#ffffff",inputbg:"#E0EBEF",cancelbtn:"#84909B",hinttext:"#B0BCC7",cardbg:"#E7F3FF"}}}}});async function de(){const e=await l.e(461).then(l.t.bind(l,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}l(541);const ue=(0,ie.MT)({state:{users:[{full_name:"Константинопольский Константин Константинович",inn:"124512515",address:"г. Санкт-Петербург",date_birth:" 23.06.2001",age:21,type_contract:{id:1,title:"Трудовой договор",slug:"ТД"},type_contract_id:1,gender:{id:1,title:"Мужской",slug:"М"},gender_id:1,country:{id:1,icon:"rus",title:"Россия",slug:"RUS"},country_id:1,position:{id:1,name:"Промышленный альпинист"},position_id:1,status:{tag_id:1,tag:{id:1,title:"Проблемные",slug:"ТД",color:"#E2BD06"},description:"Истекают все документы"}},{full_name:"Иванов Иван Иванович",inn:"12451124515",address:"г. Санкт-Петербург",date_birth:" 23.06.2002",age:24,type_contract:{id:2,title:"Трудовой договор гражданско-правового характера",slug:"ГПХ"},type_contract_id:2,gender:{id:2,title:"Женский",slug:"Ж"},gender_id:2,country:{id:3,icon:"uz",title:"Узбекистан",slug:"UZ"},country_id:2,position:{id:2,name:"Пекарь"},position_id:2,status:{tag_id:2,tag:{id:2,title:"Критические",slug:"ГПХ",color:"#E52E2E"},description:"Прошел все процедуры"}},{full_name:"Семенов Семен Семенович",inn:"12542346346335",address:"г. Москва",date_birth:"13.10.1994",age:"28",type_contract_id:3,gender_id:1,country_id:1,position_id:2,status_id:3,statusDescription:"есть вопросики",type_contract:{id:3,title:"Самознятый",slug:"СМЗ"},gender:{id:1,title:"Мужской",slug:"М"},country:{id:1,icon:"rus",title:"Россия",slug:"RUS"},position:{id:2,name:"Токарь"},status:{tag_id:3,description:"Каие то проблемы",tag:{id:3,title:"Есть замечания",slug:"СМЗ",color:"#00B6ED"}}},{full_name:"Александров Александ Александрович",inn:"235421345623456",address:"г. Валуйки",date_birth:"16.08.2003",age:"30",type_contract_id:4,gender_id:2,country_id:2,position_id:1,status_id:1,statusDescription:"Большие проблемы",type_contract:{id:4,title:"Кандидат на должность",slug:"Кандидат"},gender:{id:2,title:"Женский",slug:"Ж"},country:{id:3,icon:"uz",title:"Узбекистан",slug:"UZ"},position:{id:1,name:"Промышленный альпинист"},status:{tag_id:4,description:"Каие то проблемы",tag:{id:4,title:"Выполнено",slug:"Кандидат",color:"#00AE5B"}}},{full_name:"Никитин Никита Нитьевич",inn:"235234757",address:"г. Архангельск",date_birth:"12.10.1994",age:"28",type_contract_id:3,gender_id:1,country_id:1,position_id:1,status_id:1,statusDescription:"Каие то проблемы",type_contract:{id:3,title:"Самознятый",slug:"СМЗ"},gender:{id:1,title:"Мужской",slug:"М"},country:{id:1,icon:"rus",title:"Россия",slug:"RUS"},position:{id:1,name:"Промышленный альпинист"},status:{tag_id:4,description:"Каие то проблемы",tag:{id:4,title:"Выполнено",slug:"Кандидат",color:"#00AE5B"}}},{full_name:"Алексеев Алексе Алексеевич",inn:"651235654",address:"г. Самара",date_birth:"14.08.2004",age:"20",type_contract_id:2,gender_id:2,country_id:2,position_id:2,status_id:4,statusDescription:"Все гуд",type_contract:{id:2,title:"гражданско-правового характера",slug:"ГПХ"},gender:{id:2,title:"Женский",slug:"Ж"},country:{id:2,icon:"tj",title:"Таджикистан",slug:"TJ"},position:{id:2,name:"Токарь"},status:{tag_id:2,tag:{id:2,title:"Критические",slug:"ГПХ",color:"#E52E2E"},description:"Прошел все процедуры"}},{full_name:"Николайев Николай Николаевич",inn:"1254216351346",address:"г. Волгоград",date_birth:"14.10.1997",age:"27",type_contract_id:3,gender_id:1,country_id:1,position_id:1,status_id:1,statusDescription:"Каие-то проблемки",type_contract:{id:3,title:"Самознятый",slug:"СМЗ"},gender:{id:1,title:"Мужской",slug:"М"},country:{id:3,icon:"uz",title:"Узбекистан",slug:"UZ"},position:{id:1,name:"Промышленный альпинист"},status:{tag_id:3,description:"Каие то проблемы",tag:{id:3,title:"Есть замечания",slug:"СМЗ",color:"#00B6ED"}}},{full_name:"Мариева Мария Мариевна",inn:"124124124",address:"г.Сингапур",date_birth:"15.10.1993",age:"27",type_contract_id:3,gender_id:2,country_id:1,position_id:1,status_id:2,statusDescription:"Большие проблемы",type_contract:{id:3,title:"Самознятый",slug:"СМЗ"},gender:{id:2,title:"Женский",slug:"Ж"},country:{id:1,icon:"rus",title:"Россия",slug:"RUS"},position:{id:1,name:"Промышленный альпинист"},status:{tag_id:2,tag:{id:2,title:"Критические",slug:"ГПХ",color:"#E52E2E"},description:"Все Критические"}},{full_name:"Павлов Павел Павлович",inn:"1254231476234",address:"г.Берлин",date_birth:"13.04.1995",age:"28",type_contract_id:4,gender_id:1,country_id:2,position_id:2,status_id:4,statusDescription:"Все хорошо",type_contract:{id:4,title:"Кандидат на должность",slug:"Кандидат"},gender:{id:1,title:"Мужской",slug:"М"},country:{id:2,icon:"tj",title:"Таджикистан",slug:"TJ"},position:{id:2,name:"Токарь"},status:{description:"Все хорошо",tag_id:1,tag:{id:1,title:"Проблемные",slug:"ТД",color:"#E2BD06"}}}],filteredUsers:[],filterModel:{query:null,tag_ids:null,country_id:null,gender_id:null,position_id:null,type_contract_id:null}},getters:{totalUsers(e){return e.users.length},getUsers(e){return e.users},getFilteredUsers(e){return e.filteredUsers}},mutations:{SAVE_USER(e,t){e.users.unshift(t)},FILTER_USERS(e,t){e.filterModel={...e.filterModel,...t},e.filteredUsers=e.users.filter((t=>{const l=new RegExp(`${e.filterModel.query||""}`,"gi");return!e.filterModel.query||!!t.full_name.match(l)})).filter((t=>!e.filterModel.tag_ids||!e.filterModel.tag_ids.length||!!e.filterModel.tag_ids.find((e=>e==t.status.tag_id)))).filter((t=>!e.filterModel.country_id||e.filterModel.country_id==t.country_id)).filter((t=>!e.filterModel.gender_id||e.filterModel.gender_id==t.gender_id)).filter((t=>!e.filterModel.position_id||e.filterModel.position_id==t.position_id)).filter((t=>!e.filterModel.type_contract_id||!e.filterModel.type_contract_id.length||e.filterModel.type_contract_id.find((e=>e==t.type_contract_id))))}},actions:{saveUser({commit:e},t){e("SAVE_USER",t)},filterUsers({commit:e},t){e("FILTER_USERS",t)}}});var ce=ue;de(),(0,i.ri)(re).use(ae).use(ce).mount("#app")},968:function(e,t,l){var i={"./logo.svg":9574,"./roll.svg":5922,"./rus.svg":1042,"./tj.svg":9005,"./uz.svg":2967};function n(e){var t=o(e);return l(t)}function o(e){if(!l.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=o,e.exports=n,n.id=968},9574:function(e,t,l){"use strict";e.exports=l.p+"img/logo.6cff5c8a.svg"},5922:function(e,t,l){"use strict";e.exports=l.p+"img/roll.d37cecc5.svg"},1042:function(e,t,l){"use strict";e.exports=l.p+"img/rus.2f608b10.svg"},9005:function(e,t,l){"use strict";e.exports=l.p+"img/tj.f8d021e8.svg"},2967:function(e,t,l){"use strict";e.exports=l.p+"img/uz.3e881aad.svg"}},t={};function l(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,l),o.exports}l.m=e,function(){var e=[];l.O=function(t,i,n,o){if(!i){var r=1/0;for(u=0;u<e.length;u++){i=e[u][0],n=e[u][1],o=e[u][2];for(var s=!0,a=0;a<i.length;a++)(!1&o||r>=o)&&Object.keys(l.O).every((function(e){return l.O[e](i[a])}))?i.splice(a--,1):(s=!1,o<r&&(r=o));if(s){e.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[i,n,o]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};l.t=function(i,n){if(1&n&&(i=this(i)),8&n)return i;if("object"===typeof i&&i){if(4&n&&i.__esModule)return i;if(16&n&&"function"===typeof i.then)return i}var o=Object.create(null);l.r(o);var r={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&i;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){r[e]=function(){return i[e]}}));return r["default"]=function(){return i},l.d(o,r),o}}(),function(){l.d=function(e,t){for(var i in t)l.o(t,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){l.f={},l.e=function(e){return Promise.all(Object.keys(l.f).reduce((function(t,i){return l.f[i](e,t),t}),[]))}}(),function(){l.u=function(e){return"js/webfontloader.e15dae53.js"}}(),function(){l.miniCssF=function(e){}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="lard:";l.l=function(i,n,o,r){if(e[i])e[i].push(n);else{var s,a;if(void 0!==o)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==i||c.getAttribute("data-webpack")==t+o){s=c;break}}s||(a=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.setAttribute("data-webpack",t+o),s.src=i),e[i]=[n];var p=function(t,l){s.onerror=s.onload=null,clearTimeout(g);var n=e[i];if(delete e[i],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(l)})),t)return t(l)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),a&&document.head.appendChild(s)}}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){l.p="/"}(),function(){var e={143:0};l.f.j=function(t,i){var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var o=new Promise((function(l,i){n=e[t]=[l,i]}));i.push(n[2]=o);var r=l.p+l.u(t),s=new Error,a=function(i){if(l.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,n[1](s)}};l.l(r,a,"chunk-"+t,t)}},l.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,o,r=i[0],s=i[1],a=i[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(n in s)l.o(s,n)&&(l.m[n]=s[n]);if(a)var u=a(l)}for(t&&t(i);d<r.length;d++)o=r[d],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(u)},i=self["webpackChunklard"]=self["webpackChunklard"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=l.O(void 0,[998],(function(){return l(8326)}));i=l.O(i)})();
//# sourceMappingURL=app.e5804ecb.js.map