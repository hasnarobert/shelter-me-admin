(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"p/W7":function(e,i,n){"use strict";n.r(i),n.d(i,"ParkingSpaceListPageModule",function(){return u});var t=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),c=n("tyNb"),l=n("mrSG"),b=n("iOCt"),s=n("fXoL"),a=n("vglk");function d(e,i){1&e&&s.Lb(0,"ion-spinner",10)}function h(e,i){if(1&e){const e=s.Ob();s.Nb(0,"ion-item",12),s.Vb("click",function(){s.dc(e);const n=i.$implicit;return s.Xb(2).onItemClick(n.id)}),s.Nb(1,"ion-label"),s.Nb(2,"h3"),s.hc(3),s.Mb(),s.Nb(4,"h2"),s.hc(5),s.Mb(),s.Mb(),s.Mb()}if(2&e){const e=i.$implicit;s.Ab(3),s.ic(e.id),s.Ab(2),s.ic(e.address)}}function M(e,i){if(1&e&&(s.Nb(0,"ion-list"),s.gc(1,h,6,2,"ion-item",11),s.Mb()),2&e){const e=s.Xb();s.Ab(1),s.ac("ngForOf",e.parkingSpaces)}}const p=[{path:"",component:(()=>{class e{constructor(e,i,n){this.parkingSpaceApiClient=e,this.loadingService=i,this.router=n,this.parkingSpaces=[],this.idFilterModel="",this.ownerIdFilterModel="",this.typeFilterModel="shelter",this.isCurationNeededFilterModel="false",this.isDeletedFilterModel="false",this.isLoading=!1,this.showLoading=()=>{this.isLoading=!0},this.hideLoading=()=>{this.isLoading=!1}}ngOnInit(){}ionViewWillEnter(){return Object(l.a)(this,void 0,void 0,function*(){yield this.refreshParkingSpaceList()})}onSearchButtonClick(){return Object(l.a)(this,void 0,void 0,function*(){yield this.refreshParkingSpaceList()})}onItemClick(e){return Object(l.a)(this,void 0,void 0,function*(){const i={state:{parkingSpaceId:e}};yield this.router.navigate(["parking-space"],i)})}refreshParkingSpaceList(){return Object(l.a)(this,void 0,void 0,function*(){yield this.loadingService.run(()=>Object(l.a)(this,void 0,void 0,function*(){const e={type:"shelter"===this.typeFilterModel?b.b.SHELTER:b.b.PUBLIC,isCurationNeeded:"true"===this.isCurationNeededFilterModel,isDeleted:"true"===this.isDeletedFilterModel};this.idFilterModel&&(e.parkingSpaceId=this.idFilterModel),this.ownerIdFilterModel&&(e.ownerId=this.ownerIdFilterModel);const i=yield this.parkingSpaceApiClient.searchByFilters(e);this.parkingSpaces=i.list}),this.showLoading,this.hideLoading)})}}return e.\u0275fac=function(i){return new(i||e)(s.Kb(b.a),s.Kb(a.a),s.Kb(c.g))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-parking-space-list"]],decls:54,vars:8,consts:[["position","stacked"],["type","text",3,"ngModel","ngModelChange"],["interface","popover",3,"ngModel","ngModelChange"],["value","shelter"],["value","public"],["value","true"],["value","false"],["expand","block",3,"click"],["name","crescent",4,"ngIf"],[4,"ngIf"],["name","crescent"],["detail","true",3,"click",4,"ngFor","ngForOf"],["detail","true",3,"click"]],template:function(e,i){1&e&&(s.Nb(0,"ion-header"),s.Nb(1,"ion-toolbar"),s.Nb(2,"ion-title"),s.hc(3),s.Mb(),s.Mb(),s.Mb(),s.Nb(4,"ion-content"),s.Nb(5,"h1"),s.hc(6,"Filters"),s.Mb(),s.Nb(7,"ion-grid"),s.Nb(8,"ion-row"),s.Nb(9,"ion-col"),s.Nb(10,"ion-item"),s.Nb(11,"ion-label",0),s.hc(12,"ID"),s.Mb(),s.Nb(13,"ion-input",1),s.Vb("ngModelChange",function(e){return i.idFilterModel=e}),s.Mb(),s.Mb(),s.Mb(),s.Nb(14,"ion-col"),s.Nb(15,"ion-item"),s.Nb(16,"ion-label",0),s.hc(17,"Owner ID"),s.Mb(),s.Nb(18,"ion-input",1),s.Vb("ngModelChange",function(e){return i.ownerIdFilterModel=e}),s.Mb(),s.Mb(),s.Mb(),s.Nb(19,"ion-col"),s.Nb(20,"ion-item"),s.Nb(21,"ion-label",0),s.hc(22,"Type"),s.Mb(),s.Nb(23,"ion-select",2),s.Vb("ngModelChange",function(e){return i.typeFilterModel=e}),s.Nb(24,"ion-select-option",3),s.hc(25,"Shelter"),s.Mb(),s.Nb(26,"ion-select-option",4),s.hc(27,"Public"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(28,"ion-col"),s.Nb(29,"ion-item"),s.Nb(30,"ion-label",0),s.hc(31,"Needs curation"),s.Mb(),s.Nb(32,"ion-select",2),s.Vb("ngModelChange",function(e){return i.isCurationNeededFilterModel=e}),s.Nb(33,"ion-select-option",5),s.hc(34,"Yes"),s.Mb(),s.Nb(35,"ion-select-option",6),s.hc(36,"No"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(37,"ion-col"),s.Nb(38,"ion-item"),s.Nb(39,"ion-label",0),s.hc(40,"Is deleted"),s.Mb(),s.Nb(41,"ion-select",2),s.Vb("ngModelChange",function(e){return i.isDeletedFilterModel=e}),s.Nb(42,"ion-select-option",5),s.hc(43,"Yes"),s.Mb(),s.Nb(44,"ion-select-option",6),s.hc(45,"No"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(46,"ion-row"),s.Nb(47,"ion-col"),s.Nb(48,"ion-button",7),s.Vb("click",function(){return i.onSearchButtonClick()}),s.hc(49,"Search"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(50,"h1"),s.hc(51,"Parking spaces"),s.Mb(),s.gc(52,d,1,0,"ion-spinner",8),s.gc(53,M,2,1,"ion-list",9),s.Mb()),2&e&&(s.Ab(3),s.jc("Parking spaces: ",i.parkingSpaces.length,""),s.Ab(10),s.ac("ngModel",i.idFilterModel),s.Ab(5),s.ac("ngModel",i.ownerIdFilterModel),s.Ab(5),s.ac("ngModel",i.typeFilterModel),s.Ab(9),s.ac("ngModel",i.isCurationNeededFilterModel),s.Ab(9),s.ac("ngModel",i.isDeletedFilterModel),s.Ab(11),s.ac("ngIf",i.isLoading),s.Ab(1),s.ac("ngIf",!i.isLoading))},directives:[r.l,r.D,r.B,r.j,r.k,r.w,r.i,r.p,r.q,r.o,r.J,o.d,o.e,r.x,r.I,r.y,r.e,t.i,r.z,r.r,t.h],styles:["h1[_ngcontent-%COMP%]{padding-left:20px}ion-spinner[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-top:30px;display:block}h3[_ngcontent-%COMP%]{opacity:.5;font-size:.7rem}ion-item[_ngcontent-%COMP%]:hover{cursor:pointer;--background:rgba(var(--ion-color-primary-rgb),0.14)}"]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({imports:[[c.j.forChild(p)],c.j]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({imports:[[t.b,o.a,r.E,g]]}),e})()}}]);