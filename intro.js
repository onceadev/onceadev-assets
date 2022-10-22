const preloadFonts=e=>new Promise(t=>{WebFont.load({typekit:{id:e},active:t})}),randomNumber=(e,t)=>{},DOM={content:document.querySelector(".content"),enterCtrl:document.querySelector(".enter"),enterBackground:document.querySelector(".enter__bg")};class Intro{constructor(e){this.DOM={el:e},this.DOM.circleText=[...this.DOM.el.querySelectorAll("text.circles__text")],this.circleTextTotal=this.DOM.circleText.length,this.setup()}setup(){gsap.set(this.DOM.circleText,{transformOrigin:"50% 50%"}),gsap.set([this.DOM.circleText,DOM.content.children],{opacity:0}),gsap.set(DOM.enterCtrl,{pointerEvents:"none"}),this.initEvents()}initEvents(){this.enterMouseEnterEv=()=>{gsap.killTweensOf([DOM.enterBackground,this.DOM.circleText]),gsap.to(DOM.enterBackground,{duration:1,ease:"expo",scale:1.4}),gsap.to(this.DOM.circleText,{duration:1,ease:"expo",scale:1.15,rotation:e=>e%2?"-=90":"+=90",opacity:.4})},this.enterMouseLeaveEv=()=>{gsap.to(DOM.enterBackground,{duration:1,ease:"expo",scale:1}),gsap.to(this.DOM.circleText,{duration:1,ease:"expo",scale:1,rotation:e=>e%2?"+=120":"-=120",opacity:1,stagger:{amount:-.2}})},DOM.enterCtrl.addEventListener("mouseenter",this.enterMouseEnterEv),DOM.enterCtrl.addEventListener("mouseleave",this.enterMouseLeaveEv),this.enterClickEv=()=>this.enter(),DOM.enterCtrl.addEventListener("click",this.enterClickEv)}start(){this.startTL=gsap.timeline().addLabel("start",0).to(this.DOM.circleText,{duration:3,ease:"expo.inOut",rotation:e=>e%2?90:-90,stagger:{amount:.4}},"start").to([this.DOM.circleText,DOM.enterCtrl],{duration:3,ease:"expo.inOut",startAt:{opacity:0,scale:.8},scale:1,opacity:1,stagger:{amount:.4}},"start").add(()=>{gsap.set(DOM.enterCtrl,{pointerEvents:"auto"})},"start+=2")}enter(){this.startTL.kill(),gsap.set(DOM.enterCtrl,{pointerEvents:"none"}),DOM.enterCtrl.removeEventListener("mouseenter",this.enterMouseEnterEv),DOM.enterCtrl.removeEventListener("mouseleave",this.enterMouseLeaveEv),gsap.set([DOM.content],{opacity:1,overflow:"visible"}),gsap.timeline().addLabel("start",0).to(DOM.enterCtrl,{duration:.6,ease:"back.in",scale:.2,opacity:0},"start").to(this.DOM.circleText,{duration:.8,ease:"back.in",scale:0,opacity:0,stagger:{amount:-.4}},"start").to([DOM.content.children],{duration:.9,ease:"easeIn",startAt:{opacity:0},scale:1,opacity:1,stagger:{amount:.3}},"start+=1.3")}}const intro=new Intro(document.querySelector(".circles"));Promise.all([preloadFonts("kxo3pgz")]).then(()=>{document.body.classList.remove("loading"),intro.start()});
