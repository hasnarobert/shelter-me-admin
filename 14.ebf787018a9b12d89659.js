(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Q7nC:function(i,n,t){"use strict";t.r(n),t.d(n,"PublicSpacesCurationListPageModule",function(){return f});var o=t("ofXK"),e=t("3Pt+"),c=t("TEn/"),r=t("tyNb"),s=t("mrSG"),a=t("fXoL"),b=t("iOCt"),l=t("vglk");function u(i,n){1&i&&(a.Nb(0,"ion-content"),a.Lb(1,"ion-spinner",1),a.Mb())}function d(i,n){if(1&i){const i=a.Ob();a.Nb(0,"ion-item",3),a.Vb("click",function(){a.dc(i);const t=n.$implicit;return a.Xb(2).onItemClick(t.id)}),a.Nb(1,"ion-label"),a.Nb(2,"h3"),a.hc(3),a.Mb(),a.Nb(4,"h2"),a.hc(5),a.Mb(),a.Mb(),a.Mb()}if(2&i){const i=n.$implicit;a.Ab(3),a.ic(i.id),a.Ab(2),a.ic(i.address)}}function g(i,n){if(1&i&&(a.Nb(0,"ion-content"),a.Nb(1,"ion-list"),a.gc(2,d,6,2,"ion-item",2),a.Mb(),a.Mb()),2&i){const i=a.Xb();a.Ab(2),a.ac("ngForOf",i.items)}}const p=[{path:"",component:(()=>{class i{constructor(i,n,t){this.parkingSpaceApiClient=i,this.loadingService=n,this.router=t,this.items=[],this.loading=!1,this.showLoading=()=>{this.loading=!0},this.hideLoading=()=>{this.loading=!1}}ngOnInit(){}ionViewWillEnter(){return Object(s.a)(this,void 0,void 0,function*(){yield this.loadingService.run(()=>Object(s.a)(this,void 0,void 0,function*(){const i=yield this.parkingSpaceApiClient.getParkingSpacesThatNeedCurationList();this.items=i.list}),this.showLoading,this.hideLoading)})}onItemClick(i){return Object(s.a)(this,void 0,void 0,function*(){yield this.router.navigate(["public-space-curation",i])})}}return i.\u0275fac=function(n){return new(n||i)(a.Kb(b.a),a.Kb(l.a),a.Kb(r.g))},i.\u0275cmp=a.Eb({type:i,selectors:[["app-public-spaces-curation-list"]],decls:6,vars:3,consts:[[4,"ngIf"],["name","crescent"],["detail","true",3,"click",4,"ngFor","ngForOf"],["detail","true",3,"click"]],template:function(i,n){1&i&&(a.Nb(0,"ion-header"),a.Nb(1,"ion-toolbar"),a.Nb(2,"ion-title"),a.hc(3),a.Mb(),a.Mb(),a.Mb(),a.gc(4,u,2,0,"ion-content",0),a.gc(5,g,3,1,"ion-content",0)),2&i&&(a.Ab(3),a.jc("Curate public spaces: ",n.items.length," left"),a.Ab(1),a.ac("ngIf",n.loading),a.Ab(1),a.ac("ngIf",!n.loading))},directives:[c.l,c.E,c.C,o.i,c.j,c.z,c.r,o.h,c.p,c.q],styles:["ion-spinner[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-top:30px;display:block}h3[_ngcontent-%COMP%]{opacity:.5;font-size:.7rem}h2[_ngcontent-%COMP%]{font-size:1.2rem}ion-item[_ngcontent-%COMP%]:hover{cursor:pointer;--background:rgba(var(--ion-color-primary-rgb),0.14)}"]}),i})()}];let h=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=a.Ib({type:i}),i.\u0275inj=a.Hb({imports:[[r.j.forChild(p)],r.j]}),i})(),f=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=a.Ib({type:i}),i.\u0275inj=a.Hb({imports:[[o.b,e.a,c.F,h]]}),i})()}}]);