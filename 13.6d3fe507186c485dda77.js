(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{s8hb:function(i,e,n){"use strict";n.r(e),n.d(e,"PublicSpaceCurationPageModule",function(){return m});var t=n("ofXK"),o=n("3Pt+"),a=n("TEn/"),d=n("tyNb"),b=n("mrSG"),c=n("fXoL"),r=n("vglk"),l=n("iOCt"),s=n("pxUr");function g(i,e){1&i&&(c.Nb(0,"ion-content"),c.Lb(1,"ion-spinner",1),c.Mb())}function u(i,e){1&i&&c.Lb(0,"ion-spinner",1)}function h(i,e){1&i&&c.Lb(0,"ion-spinner",1)}function M(i,e){if(1&i){const i=c.Ob();c.Nb(0,"ion-content"),c.Nb(1,"agm-map",2),c.Nb(2,"agm-marker",3),c.Vb("dragEnd",function(e){return c.dc(i),c.Xb().onMarkerDragEnd(e)}),c.Mb(),c.Mb(),c.Nb(3,"h1"),c.hc(4,"Parking space details"),c.Mb(),c.Nb(5,"ion-grid"),c.Nb(6,"ion-row"),c.Nb(7,"ion-col"),c.Nb(8,"ion-item"),c.Nb(9,"ion-label",4),c.hc(10,"Address"),c.Mb(),c.Nb(11,"ion-input",5),c.Vb("ngModelChange",function(e){return c.dc(i),c.Xb().address=e}),c.Mb(),c.Mb(),c.Mb(),c.Nb(12,"ion-col"),c.Nb(13,"ion-item"),c.Nb(14,"ion-label",4),c.hc(15,"Number of parking spaces"),c.Mb(),c.Nb(16,"ion-input",6),c.Vb("ngModelChange",function(e){return c.dc(i),c.Xb().count=e}),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Nb(17,"ion-row"),c.Nb(18,"ion-col"),c.Nb(19,"ion-item"),c.Nb(20,"ion-label",4),c.hc(21,"Latitude"),c.Mb(),c.Nb(22,"ion-input",5),c.Vb("ngModelChange",function(e){return c.dc(i),c.Xb().latitude=e}),c.Mb(),c.Mb(),c.Mb(),c.Nb(23,"ion-col"),c.Nb(24,"ion-item"),c.Nb(25,"ion-label",4),c.hc(26,"Longitude"),c.Mb(),c.Nb(27,"ion-input",5),c.Vb("ngModelChange",function(e){return c.dc(i),c.Xb().longitude=e}),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Nb(28,"ion-row"),c.Nb(29,"ion-col"),c.Nb(30,"ion-item"),c.Nb(31,"ion-label",4),c.hc(32,"Is active"),c.Mb(),c.Nb(33,"ion-toggle",7),c.Vb("ngModelChange",function(e){return c.dc(i),c.Xb().isActive=e}),c.Mb(),c.Mb(),c.Mb(),c.Nb(34,"ion-col"),c.Nb(35,"ion-item"),c.Nb(36,"ion-label",4),c.hc(37,"Is deleted"),c.Mb(),c.Nb(38,"ion-toggle",7),c.Vb("ngModelChange",function(e){return c.dc(i),c.Xb().isDeleted=e}),c.Mb(),c.Mb(),c.Mb(),c.Nb(39,"ion-col"),c.Nb(40,"ion-item"),c.Nb(41,"ion-label",4),c.hc(42,"Is curation needed"),c.Mb(),c.Nb(43,"ion-toggle",7),c.Vb("ngModelChange",function(e){return c.dc(i),c.Xb().isCurationNeeded=e}),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Nb(44,"ion-row"),c.Nb(45,"ion-col"),c.Nb(46,"ion-item"),c.Nb(47,"ion-label",4),c.hc(48,"Has fixed price"),c.Mb(),c.Nb(49,"ion-toggle",7),c.Vb("ngModelChange",function(e){return c.dc(i),c.Xb().hasFixedPrice=e}),c.Mb(),c.Mb(),c.Mb(),c.Nb(50,"ion-col"),c.Nb(51,"ion-item"),c.Nb(52,"ion-label",4),c.hc(53,"Amount"),c.Mb(),c.Nb(54,"ion-input",8),c.Vb("ngModelChange",function(e){return c.dc(i),c.Xb().fixedPricePerHourAmount=e}),c.Mb(),c.Mb(),c.Mb(),c.Nb(55,"ion-col"),c.Nb(56,"ion-item"),c.Nb(57,"ion-label",4),c.hc(58,"Currency"),c.Mb(),c.Nb(59,"ion-input",9),c.Vb("ngModelChange",function(e){return c.dc(i),c.Xb().fixedPricePerHourCurrency=e}),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Nb(60,"ion-row"),c.Nb(61,"ion-col"),c.Nb(62,"h1"),c.hc(63,"Parking space image"),c.Mb(),c.Mb(),c.Mb(),c.Nb(64,"ion-row"),c.Nb(65,"ion-col"),c.Nb(66,"div",10),c.Nb(67,"agm-map",11),c.Lb(68,"agm-marker",12),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Nb(69,"ion-grid"),c.Nb(70,"ion-row"),c.Nb(71,"ion-col",13),c.Nb(72,"ion-button",14),c.Vb("click",function(){return c.dc(i),c.Xb().onSaveButtonClick()}),c.hc(73," Save \xa0 "),c.gc(74,u,1,0,"ion-spinner",15),c.Mb(),c.Mb(),c.Nb(75,"ion-col",16),c.Nb(76,"ion-button",17),c.Vb("click",function(){return c.dc(i),c.Xb().onDeleteButtonClick()}),c.hc(77," Delete "),c.gc(78,h,1,0,"ion-spinner",15),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()}if(2&i){const i=c.Xb();c.Ab(1),c.ac("latitude",i.latitude)("longitude",i.longitude)("zoom",17),c.Ab(1),c.ac("latitude",i.latitude)("longitude",i.longitude)("markerDraggable",!0),c.Ab(9),c.ac("ngModel",i.address),c.Ab(5),c.ac("ngModel",i.count),c.Ab(6),c.ac("ngModel",i.latitude),c.Ab(5),c.ac("ngModel",i.longitude),c.Ab(6),c.ac("ngModel",i.isActive),c.Ab(5),c.ac("ngModel",i.isDeleted),c.Ab(5),c.ac("ngModel",i.isCurationNeeded),c.Ab(6),c.ac("ngModel",i.hasFixedPrice),c.Ab(5),c.ac("ngModel",i.fixedPricePerHourAmount)("disabled",!i.hasFixedPrice),c.Ab(5),c.ac("ngModel",i.fixedPricePerHourCurrency)("disabled",!i.hasFixedPrice),c.Ab(8),c.ac("latitude",i.latitude)("longitude",i.longitude)("mapTypeId",i.imageMapType)("zoom",19)("mapDraggable",!1),c.Ab(1),c.ac("latitude",i.latitude)("longitude",i.longitude),c.Ab(6),c.ac("ngIf",i.saveButtonLoading),c.Ab(4),c.ac("ngIf",i.deleteButtonLoading)}}const p=[{path:"",component:(()=>{class i{constructor(i,e,n,t,o){this.router=i,this.route=e,this.location=n,this.loadingService=t,this.parkingSpaceApiClient=o,this.loading=!1,this.saveButtonLoading=!1,this.deleteButtonLoading=!1,this.imageMapType="satellite",this.showLoading=()=>{this.loading=!0},this.hideLoading=()=>{this.loading=!1},this.showSaveLoading=()=>{this.saveButtonLoading=!0},this.hideSaveLoading=()=>{this.saveButtonLoading=!1},this.showDeleteLoading=()=>{this.deleteButtonLoading=!0},this.hideDeleteLoading=()=>{this.deleteButtonLoading=!1}}ngOnInit(){this.route.queryParams.subscribe(()=>this.initializeView())}initializeView(){return Object(b.a)(this,void 0,void 0,function*(){const i=this.router.getCurrentNavigation().extras.state;i||(console.log("Missing navigation state for showing parking history details"),this.location.back()),this.parkingSpaceId=i.parkingSpaceId,yield this.loadingService.run(()=>Object(b.a)(this,void 0,void 0,function*(){const i=yield this.parkingSpaceApiClient.getParkingSpacesDetails(this.parkingSpaceId);this.address=i.address,this.latitude=i.coordinates.lat,this.longitude=i.coordinates.lng,this.isActive=i.isActive,this.isCurationNeeded=i.isCurationNeeded,this.isDeleted=i.isDeleted,this.fixedPricePerHourAmount=i.fixedPricePerHour?i.fixedPricePerHour.amount:0,this.fixedPricePerHourCurrency=i.fixedPricePerHour?i.fixedPricePerHour.currency:"RON",this.hasFixedPrice=!!i.fixedPricePerHour,this.count=i.count}),this.showLoading,this.hideLoading)})}onMarkerDragEnd(i){this.latitude=i.latLng.lat(),this.longitude=i.latLng.lng()}onSaveButtonClick(){return Object(b.a)(this,void 0,void 0,function*(){let i=null;this.hasFixedPrice&&(i={amount:this.fixedPricePerHourAmount,currency:this.fixedPricePerHourCurrency});const e={address:this.address,count:this.count,isCurationNeeded:this.isCurationNeeded,isDeleted:this.isDeleted,isActive:this.isActive,coordinates:{lat:this.latitude,lng:this.longitude},fixedPricePerHour:i};yield this.loadingService.run(()=>Object(b.a)(this,void 0,void 0,function*(){yield this.parkingSpaceApiClient.updateParkingSpaceDetails(this.parkingSpaceId,e)}),this.showSaveLoading,this.hideSaveLoading)})}onDeleteButtonClick(){return Object(b.a)(this,void 0,void 0,function*(){yield this.loadingService.run(()=>Object(b.a)(this,void 0,void 0,function*(){yield this.parkingSpaceApiClient.forceDelete(this.parkingSpaceId),this.location.back()}),this.showDeleteLoading,this.hideDeleteLoading)})}}return i.\u0275fac=function(e){return new(e||i)(c.Kb(d.g),c.Kb(d.a),c.Kb(t.f),c.Kb(r.a),c.Kb(l.a))},i.\u0275cmp=c.Eb({type:i,selectors:[["app-public-space-curation"]],decls:6,vars:2,consts:[[4,"ngIf"],["name","crescent"],[3,"latitude","longitude","zoom"],[3,"latitude","longitude","markerDraggable","dragEnd"],["position","stacked"],["type","text",3,"ngModel","ngModelChange"],["type","number",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["type","number",3,"ngModel","disabled","ngModelChange"],["type","text",3,"ngModel","disabled","ngModelChange"],[1,"image-map"],[3,"latitude","longitude","mapTypeId","zoom","mapDraggable"],[3,"latitude","longitude"],["size","10"],["expand","block",3,"click"],["name","crescent",4,"ngIf"],["size","2"],["expand","block","color","danger",3,"click"]],template:function(i,e){1&i&&(c.Nb(0,"ion-header"),c.Nb(1,"ion-toolbar"),c.Nb(2,"ion-title"),c.hc(3,"Curate public parking space"),c.Mb(),c.Mb(),c.Mb(),c.gc(4,g,2,0,"ion-content",0),c.gc(5,M,79,27,"ion-content",0)),2&i&&(c.Ab(4),c.ac("ngIf",e.loading),c.Ab(1),c.ac("ngIf",!e.loading))},directives:[a.l,a.D,a.B,t.i,a.j,a.z,s.b,s.c,a.k,a.w,a.i,a.p,a.q,a.o,a.J,o.d,o.e,a.G,a.C,a.b,a.e],styles:["agm-map[_ngcontent-%COMP%]{height:400px}.image-map[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:600px}.image-map[_ngcontent-%COMP%]   agm-map[_ngcontent-%COMP%]{width:600px;height:600px}h1[_ngcontent-%COMP%]{padding-left:20px;font-size:1.3rem}ion-button[_ngcontent-%COMP%]{margin-bottom:100px}ion-spinner[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-top:30px;display:block}"]}),i})()}];let N=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=c.Ib({type:i}),i.\u0275inj=c.Hb({imports:[[d.j.forChild(p)],d.j]}),i})(),m=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=c.Ib({type:i}),i.\u0275inj=c.Hb({imports:[[t.b,o.a,a.E,N,s.a]]}),i})()}}]);