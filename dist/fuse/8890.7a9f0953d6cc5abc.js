"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[8890],{8890:(j,d,n)=>{n.r(d),n.d(d,{AuthSignUpModule:()=>c});var p=n(1390),u=n(4859),f=n(6709),m=n(9549),h=n(7392),U=n(284),Z=n(1572),v=n(5804),A=n(7775),y=n(4466),s=n(4006),T=n(8288),t=n(4650),w=n(8951),F=n(8214),C=n(6895);const I=["signUpNgForm"];function J(e,o){if(1&e&&(t.TgZ(0,"fuse-alert",35),t._uU(1),t.qZA()),2&e){const r=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",r.alert.type)("@shake","error"===r.alert.type),t.xp6(1),t.hij(" ",r.alert.message," ")}}function N(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Se requiere el nombre completo "),t.qZA())}function Q(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Se requiere Direcci\xf3n de correo electr\xf3nico "),t.qZA())}function S(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Por favor, introduce una direcci\xf3n de correo electr\xf3nico v\xe1lida "),t.qZA())}function b(e,o){1&e&&t._UZ(0,"mat-icon",36),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function q(e,o){1&e&&t._UZ(0,"mat-icon",36),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function _(e,o){1&e&&(t.TgZ(0,"span"),t._uU(1," Crear tu cuenta gratuita "),t.qZA())}function Y(e,o){1&e&&t._UZ(0,"mat-progress-spinner",37),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const k=function(){return["/sign-in"]},x=function(){return["./"]};class l{constructor(o,r,i){this._authService=o,this._formBuilder=r,this._router=i,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signUpForm=this._formBuilder.group({name:["",s.kI.required],email:["",[s.kI.required,s.kI.email]],password:["",s.kI.required],company:[""],agreements:["",s.kI.requiredTrue]})}signUp(){this.signUpForm.invalid||(this.signUpForm.disable(),this.showAlert=!1,this._authService.signUp(this.signUpForm.value).subscribe(o=>{this._router.navigateByUrl("/confirmation-required")},o=>{this.signUpForm.enable(),this.signUpNgForm.resetForm(),this.alert={type:"error",message:"Something went wrong, please try again."},this.showAlert=!0}))}static#t=this.\u0275fac=function(r){return new(r||l)(t.Y36(w.e),t.Y36(s.QS),t.Y36(p.F0))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["auth-sign-up"]],viewQuery:function(r,i){if(1&r&&t.Gf(I,5),2&r){let a;t.iGM(a=t.CRH())&&(i.signUpNgForm=a.first)}},decls:67,vars:23,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.png"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["class","mt-8",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signUpNgForm","ngForm"],[1,"w-full"],["id","name","matInput","",3,"formControlName"],[4,"ngIf"],["id","email","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","company-confirm","matInput","",3,"formControlName"],[1,"inline-flex","items-end","w-full","mt-1.5"],[1,"-ml-2",3,"color","formControlName"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(r,i){if(1&r){const a=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Registrarse"),t.qZA(),t.TgZ(7,"div",6)(8,"div"),t._uU(9,"\xbfYa tienes una cuenta?"),t.qZA(),t.TgZ(10,"a",7),t._uU(11,"Iniciar sesi\xf3n "),t.qZA()(),t.YNc(12,J,2,5,"fuse-alert",8),t.TgZ(13,"form",9,10)(15,"mat-form-field",11)(16,"mat-label"),t._uU(17,"Nombre completo"),t.qZA(),t._UZ(18,"input",12),t.YNc(19,N,2,0,"mat-error",13),t.qZA(),t.TgZ(20,"mat-form-field",11)(21,"mat-label"),t._uU(22,"Direcci\xf3n de correo electr\xf3nico"),t.qZA(),t._UZ(23,"input",14),t.YNc(24,Q,2,0,"mat-error",13),t.YNc(25,S,2,0,"mat-error",13),t.qZA(),t.TgZ(26,"mat-form-field",11)(27,"mat-label"),t._uU(28,"Contrase\xf1a"),t.qZA(),t._UZ(29,"input",15,16),t.TgZ(31,"button",17),t.NdJ("click",function(){t.CHM(a);const g=t.MAs(30);return t.KtG(g.type="password"===g.type?"text":"password")}),t.YNc(32,b,1,1,"mat-icon",18),t.YNc(33,q,1,1,"mat-icon",18),t.qZA(),t.TgZ(34,"mat-error"),t._uU(35," se requiere contrase\xf1a "),t.qZA()(),t.TgZ(36,"mat-form-field",11)(37,"mat-label"),t._uU(38,"Compania"),t.qZA(),t._UZ(39,"input",19),t.qZA(),t.TgZ(40,"div",20)(41,"mat-checkbox",21)(42,"span"),t._uU(43,"Acepto los"),t.qZA(),t.TgZ(44,"a",7),t._uU(45,"Terminos "),t.qZA(),t.TgZ(46,"span"),t._uU(47,"y"),t.qZA(),t.TgZ(48,"a",7),t._uU(49,"la politica de privacidad "),t.qZA()()(),t.TgZ(50,"button",22),t.NdJ("click",function(){return i.signUp()}),t.YNc(51,_,2,0,"span",13),t.YNc(52,Y,1,2,"mat-progress-spinner",23),t.qZA()()()(),t.TgZ(53,"div",24),t.O4$(),t.TgZ(54,"svg",25)(55,"g",26),t._UZ(56,"circle",27)(57,"circle",28),t.qZA()(),t.TgZ(58,"svg",29)(59,"defs")(60,"pattern",30),t._UZ(61,"rect",31),t.qZA()(),t._UZ(62,"rect",32),t.qZA(),t.kcU(),t.TgZ(63,"div",33)(64,"div",34)(65,"div"),t._uU(66,"Bienvenido a SIE Gobernanza Tecnol\xf3gica"),t.qZA()()()()()}if(2&r){const a=t.MAs(30);t.xp6(10),t.Q6J("routerLink",t.DdM(20,k)),t.xp6(2),t.Q6J("ngIf",i.showAlert),t.xp6(1),t.Q6J("formGroup",i.signUpForm),t.xp6(5),t.Q6J("formControlName","name"),t.xp6(1),t.Q6J("ngIf",i.signUpForm.get("name").hasError("required")),t.xp6(4),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",i.signUpForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",i.signUpForm.get("email").hasError("email")),t.xp6(4),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===a.type),t.xp6(1),t.Q6J("ngIf","text"===a.type),t.xp6(6),t.Q6J("formControlName","company"),t.xp6(2),t.Q6J("color","primary")("formControlName","agreements"),t.xp6(3),t.Q6J("routerLink",t.DdM(21,x)),t.xp6(4),t.Q6J("routerLink",t.DdM(22,x)),t.xp6(2),t.Q6J("color","primary")("disabled",i.signUpForm.disabled),t.xp6(1),t.Q6J("ngIf",!i.signUpForm.disabled),t.xp6(1),t.Q6J("ngIf",i.signUpForm.disabled)}},dependencies:[p.rH,u.lW,u.RK,f.oG,m.KE,m.hX,m.TO,m.R9,h.Hw,U.Nt,Z.Ou,F.W,C.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],encapsulation:2,data:{animation:T.L}})}const M=[{path:"",component:l}];class c{static#t=this.\u0275fac=function(r){return new(r||c)};static#e=this.\u0275mod=t.oAB({type:c});static#n=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(M),u.ot,f.p9,m.lN,h.Ps,U.c,Z.Cq,v.J,A.fC,y.m]})}}}]);