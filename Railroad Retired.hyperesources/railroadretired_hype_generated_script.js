//	HYPE.documents["Railroad Retired"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="Railroad%20Retired.hyperesources",f="Railroad Retired",g="railroadretired_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/railroadretired_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=null==navigator.userAgentData&&navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_754F||null!=window.HYPE_dtl_754F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-754.full.min.js":"HYPE-754.thin.min.js";c=!0==d?"F":"T";
d=d?"":"";if(false==!1&&(a=k("HYPE_754"+c,"HYPE_dtl_754"+c,a,d),false==!0&&(a=a||k("HYPE_w_754","HYPE_wdtl_754","HYPE-754.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_754","HYPE-754.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=
document.getElementsByTagName("div"),b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_754"+c](f,g,{"3":{p:1,n:"RetiredRailroad-1.png",g:"24",o:true,t:"@1x"},"-2":{n:"blank.gif"},"4":{p:1,n:"RetiredRailroad-1_2x.png",g:"24",o:true,t:"@2x"},"0":{p:1,n:"RetiredRailroad.png",g:"20",o:true,t:"@1x"},"1":{p:1,n:"RetiredRailroad_2x.png",g:"20",o:true,t:"@2x"},"2":{p:1,n:"9AB1CD40-E926-4A62-955A-35A6C3885255.gif",g:"14",t:"@1x"},"-1":{n:"PIE.htc"}},
l,[],e,[{n:"Retired Railroad",o:"11",X:[0]},{n:"Paul Steger",o:"17",X:[1]}],[{o:"13",p:"600px",a:100,Y:800,Z:1160,b:100,cA:false,c:"#000",L:[],bY:1,d:800,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:1,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:1,i:"d",e:182,s:350,o:"28"},{f:"c",y:0,z:1,i:"c",e:182,s:350,o:"28"},{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"29"},{y:1,i:"d",s:182,z:0,o:"28",f:"c"},{y:1,i:"c",s:182,z:0,o:"28",f:"c"},{y:1,i:"e",s:1,z:0,o:"29",f:"c"}],f:30,b:[]}},bZ:180,O:["27","28","29"],n:"Untitled Layout","_":0,v:{"29":{aU:0,bB:1,G:"#FFF",H:"none",bS:5,aV:0,r:"inline",d:68,e:0,s:"'Courier New',Courier,Monospace",X:0,aW:0,bC:2,t:60,c:577,aX:0,Z:"break-word",w:"Railroad Retired",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:4,aS:0,aT:0,a:174,bA:"#FF9300",F:"justify",b:559},"28":{p:"no-repeat",aU:0,c:350,q:"100% 100%",bS:261,aV:0,r:"inline",d:350,aW:1,aX:0,h:"24",j:"absolute",x:"visible",k:"div",dB:"img",z:3,aS:0,aT:0,a:25,b:533},"27":{h:"14",p:"no-repeat",x:"visible",aW:1,q:"100% 100%",b:85,a:16,r:"inline",j:"absolute",bS:5,z:2,d:432,dB:"img",aB:{a:[{d:1.1,p:1,g:1,e:"17"}]},k:"div",c:768}}},{o:"19",p:"600px",a:100,Y:800,Z:1160,b:100,cA:false,c:"#000",L:[],bY:1,d:800,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:1,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"30"},{y:1,i:"e",s:1,z:0,o:"30",f:"c"}],f:30,b:[]}},bZ:180,O:["30"],n:"Untitled Layout","_":1,v:{"30":{h:"20",p:"no-repeat",x:"visible",a:28,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,b:27,k:"div",d:260,c:260,e:0}}}],{},h,{},
(function (shouldShow, mainContentContainer) {
	var loadingPageID = mainContentContainer.id + "_loading";
	var loadingDiv = document.getElementById(loadingPageID);

	if(shouldShow == true) {
		if(loadingDiv == null) {	
			loadingDiv = document.createElement("div");
			loadingDiv.id = loadingPageID;
			loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
			loadingDiv.innerHTML = "Loading";
			mainContentContainer.appendChild(loadingDiv);
		}
 
		loadingDiv.style.display = "block";
		loadingDiv.removeAttribute("aria-hidden");
		mainContentContainer.setAttribute("aria-busy", true);
	} else {
		loadingDiv.style.display = "none";
		loadingDiv.setAttribute("aria-hidden", true);
		mainContentContainer.removeAttribute("aria-busy");
	}
})

,false,true,-1,true,true,true,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
