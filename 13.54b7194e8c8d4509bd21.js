(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Q7nC:function(t,i,n){"use strict";n.r(i),n.d(i,"PublicSpacesCurationListPageModule",function(){return g});var e=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),c=n("tyNb"),s=n("mrSG"),a=n("fXoL"),l=n("iOCt"),u=n("vglk");function d(t,i){1&t&&(a.Nb(0,"ion-content"),a.Lb(1,"ion-spinner",1),a.Mb())}function h(t,i){if(1&t){const t=a.Ob();a.Nb(0,"ion-item",3),a.Vb("click",function(){a.dc(t);const n=i.$implicit;return a.Xb(2).onItemClick(n.id)}),a.Nb(1,"ion-label"),a.Nb(2,"h3"),a.hc(3),a.Mb(),a.Nb(4,"h2"),a.hc(5),a.Mb(),a.Mb(),a.Mb()}if(2&t){const t=i.$implicit;a.Ab(3),a.ic(t.id),a.Ab(2),a.ic(t.address)}}function b(t,i){if(1&t&&(a.Nb(0,"ion-content"),a.Nb(1,"ion-list"),a.gc(2,h,6,2,"ion-item",2),a.Mb(),a.Mb()),2&t){const t=a.Xb();a.Ab(2),a.ac("ngForOf",t.items)}}const p=[{path:"",component:(()=>{class t{constructor(t,i,n){this.parkingSpaceApiClient=t,this.loadingService=i,this.router=n,this.items=[],this.loading=!1,this.showLoading=()=>{this.loading=!0},this.hideLoading=()=>{this.loading=!1}}ngOnInit(){}ionViewWillEnter(){return Object(s.a)(this,void 0,void 0,function*(){yield this.loadingService.run(()=>Object(s.a)(this,void 0,void 0,function*(){const t=yield this.parkingSpaceApiClient.getParkingSpacesThatNeedCurationList();this.items=t.list}),this.showLoading,this.hideLoading)})}onItemClick(t){return Object(s.a)(this,void 0,void 0,function*(){yield this.router.navigate(["public-space-curation",t])})}}return t.\u0275fac=function(i){return new(i||t)(a.Kb(l.a),a.Kb(u.a),a.Kb(c.g))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-public-spaces-curation-list"]],decls:6,vars:3,consts:[[4,"ngIf"],["name","crescent"],["detail","true",3,"click",4,"ngFor","ngForOf"],["detail","true",3,"click"]],template:function(t,i){1&t&&(a.Nb(0,"ion-header"),a.Nb(1,"ion-toolbar"),a.Nb(2,"ion-title"),a.hc(3),a.Mb(),a.Mb(),a.Mb(),a.gc(4,d,2,0,"ion-content",0),a.gc(5,b,3,1,"ion-content",0)),2&t&&(a.Ab(3),a.jc("Curate public spaces: ",i.items.length," left"),a.Ab(1),a.ac("ngIf",i.loading),a.Ab(1),a.ac("ngIf",!i.loading))},directives:[r.l,r.E,r.C,e.i,r.j,r.z,r.r,e.h,r.p,r.q],styles:["ion-spinner[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-top:30px;display:block}h3[_ngcontent-%COMP%]{opacity:.5;font-size:.7rem}h2[_ngcontent-%COMP%]{font-size:1.2rem}ion-item[_ngcontent-%COMP%]:hover{cursor:pointer;--background:rgba(var(--ion-color-primary-rgb),0.14)}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({imports:[[c.j.forChild(p)],c.j]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({imports:[[e.b,o.a,r.F,f]]}),t})()},vglk:function(t,i,n){"use strict";n.d(i,"a",function(){return s});var e=n("mrSG"),o=n("fXoL"),r=n("TEn/");let c=(()=>{class t{constructor(t){this.toastController=t}handle(t){return Object(e.a)(this,void 0,void 0,function*(){const i=yield this.toastController.create({header:"Error",message:"Something did not work as expected. Try later",position:"bottom",color:"danger",buttons:[{text:"Close",role:"cancel"}]});yield i.present(),console.log(`BOOM: ${JSON.stringify(t)}`)})}}return t.\u0275fac=function(i){return new(i||t)(o.Rb(r.L))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),s=(()=>{class t{constructor(t){this.errorHandlingService=t}run(t,i,n){return Object(e.a)(this,void 0,void 0,function*(){i();try{yield t()}catch(e){yield this.errorHandlingService.handle(e)}finally{n()}})}}return t.\u0275fac=function(i){return new(i||t)(o.Rb(c))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},xwiS:function(t,i,n){"use strict";n.d(i,"a",function(){return s});var e=n("mrSG"),o=n("fXoL"),r=n("tk/3"),c=n("ri4K");let s=(()=>{class t{constructor(t,i){this.httpClient=t,this.authenticationService=i}doGet(i,n=!0){return Object(e.a)(this,void 0,void 0,function*(){const e={};return n&&this.insertAuthorizationHeader(e),yield this.httpClient.get(`${t.ENDPOINT}${i}`,{headers:e}).toPromise()})}doPost(i,n=!0,o={}){return Object(e.a)(this,void 0,void 0,function*(){const e={};return n&&this.insertAuthorizationHeader(e),yield this.httpClient.post(`${t.ENDPOINT}${i}`,o,{headers:e}).toPromise()})}insertAuthorizationHeader(t){const i=this.authenticationService.getToken();t.Authorization=`Bearer ${i}`}}return t.ENDPOINT="https://api.goshelter.me",t.\u0275fac=function(i){return new(i||t)(o.Rb(r.a),o.Rb(c.a))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);