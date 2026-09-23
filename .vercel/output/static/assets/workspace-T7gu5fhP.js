import{$ as e,A as t,At as n,B as r,D as i,Dt as a,E as o,F as s,Fn as c,G as l,Gn as u,H as d,I as f,In as p,J as m,Jn as h,K as g,Kn as ee,L as te,Ln as ne,M as _,Mt as re,N as ie,O as v,P as ae,Q as oe,Qn as se,Qt as ce,R as le,S as ue,T as de,Tt as fe,U as pe,V as me,W as he,X as ge,Xn as y,Y as _e,Yn as b,Yt as ve,Z as ye,Zn as be,Zt as xe,_ as Se,_t as Ce,an as we,at as Te,b as Ee,bn as x,cn as S,ct as De,dt as Oe,et as ke,f as Ae,g as je,h as Me,in as C,it as Ne,j as Pe,k as w,l as Fe,lt as Ie,nn as Le,nt as Re,ot as ze,q as Be,qn as Ve,rt as He,s as Ue,sn as T,st as We,t as Ge,tt as Ke,ut as qe,v as Je,vt as Ye,w as E,x as Xe,xn as Ze,y as Qe,yt as $e,z as D}from"./chunk-RVQWJOEE-8gGfY98M.js";import{t as et}from"./chunk-W4EJWLEO-DwhdEmay.js";function tt(e,t=Object.is){let n={...e},r=new Set,i=e=>(r.add(e),()=>r.delete(e)),a=()=>{r.forEach(e=>e())};return{subscribe:i,get:e=>n[e],set:(e,r)=>{t(n[e],r)||(n[e]=r,a())},update:e=>{let r=!1;for(let i in e){let a=e[i];a!==void 0&&!t(n[i],a)&&(n[i]=a,r=!0)}r&&a()},snapshot:()=>({...n})}}var O=oe(`tooltip`).parts(`trigger`,`arrow`,`arrowTip`,`positioner`,`content`).build(),nt=(e,t)=>{let n=e.ids?.trigger;return n==null?t?`tooltip:${e.id}:trigger:${t}`:`tooltip:${e.id}:trigger`:Oe(n)?n(t):n},rt=e=>e.ids?.content??`tooltip:${e.id}:content`,it=e=>e.ids?.arrow??`tooltip:${e.id}:arrow`,at=e=>e.ids?.positioner??`tooltip:${e.id}:popper`,ot=e=>e.getById(nt(e)),st=e=>e.getById(at(e)),ct=e=>Ke(e.getRootNode(),`[data-scope="tooltip"][data-part="trigger"]${We(e.id)}`),k=(e,t)=>t==null?ot(e)??ct(e)[0]:e.getById(nt(e,t)),A=tt({id:null,prevId:null,instant:!1});function lt(e,t){let{state:n,context:r,send:i,scope:a,prop:o,event:s}=e,c=o(`id`),l=!!o(`aria-label`),u=n.matches(`open`,`closing`),d=r.get(`triggerValue`),f=r.get(`currentPlacement`),p=f?_e(f):void 0,m=rt(a),h=o(`disabled`),g=Be({...o(`positioning`),placement:f});return{open:u,setOpen(e){i({type:e?`open`:`close`,replaces:`open`})},triggerValue:d,setTriggerValue(e){i({type:`triggerValue.set`,value:e??void 0})},reposition(e={}){i({type:`positioning.set`,options:e})},getTriggerProps(e={}){let{value:n}=e,r=n!=null&&d===n,s=nt(a,n);return t.button({...O.trigger.attrs,id:s,"data-ownedby":a.id,"data-value":n,"data-current":ze(r),dir:o(`dir`),"data-expanded":ze(u),"data-state":u?`open`:`closed`,"aria-describedby":u?m:void 0,onClick(e){e.defaultPrevented||h||o(`closeOnClick`)&&i({type:u&&n!=null&&!r?`triggerValue.set`:`close`,src:`trigger.click`,value:n,triggerId:s})},onFocus(e){e.defaultPrevented||h||ge()&&i({type:u&&n!=null&&!r?`triggerValue.set`:`open`,src:`trigger.focus`,value:n,triggerId:s})},onBlur(e){e.defaultPrevented||h||c===A.get(`id`)&&((e.relatedTarget??a.getDoc().activeElement)?.closest(We(a.id))??i({type:`close`,src:`trigger.blur`,value:n,triggerId:s}))},onPointerDown(e){e.defaultPrevented||h||Te(e)&&o(`closeOnPointerDown`)&&c===A.get(`id`)&&i({type:`close`,src:`trigger.pointerdown`,value:n,triggerId:s})},onPointerMove(e){e.defaultPrevented||h||e.pointerType!==`touch`&&i({type:u&&n!=null&&!r?`triggerValue.set`:`pointer.move`,value:n,triggerId:s})},onPointerOver(e){e.defaultPrevented||h||e.pointerType!==`touch`&&i({type:`pointer.move`,value:n,triggerId:s})},onPointerLeave(){h||i({type:`pointer.leave`})},onPointerCancel(){h||i({type:`pointer.leave`})}})},getArrowProps(){return t.element({id:it(a),...O.arrow.attrs,dir:o(`dir`),style:g.arrow})},getArrowTipProps(){return t.element({...O.arrowTip.attrs,dir:o(`dir`),style:g.arrowTip})},getPositionerProps(){return t.element({id:at(a),...O.positioner.attrs,dir:o(`dir`),style:g.floating})},getContentProps(){let e=A.get(`id`)===c,n=A.get(`prevId`)===c,r=A.get(`instant`)&&(u&&e||n);return t.element({...O.content.attrs,dir:o(`dir`),hidden:!u,"data-state":u?`open`:`closed`,"data-instant":ze(r),role:l?void 0:`tooltip`,id:l?void 0:m,"data-placement":f,"data-side":p,onPointerEnter(){i({type:`content.pointer.move`})},onPointerLeave(){i({type:`content.pointer.leave`})},style:{pointerEvents:o(`interactive`)?`auto`:`none`}})}}}var{and:ut,not:dt}=De(),ft=Ie({initialState:({prop:e})=>e(`open`)||e(`defaultOpen`)?`open`:`closed`,props({props:e}){qe(e,[`id`]);let t=e.closeOnClick??!0,n=e.closeOnPointerDown??t;return{openDelay:400,closeDelay:150,closeOnEscape:!0,interactive:!1,closeOnScroll:!0,disabled:!1,...e,closeOnPointerDown:n,closeOnClick:t,positioning:{placement:`bottom`,...e.positioning}}},effects:[`trackFocusVisible`,`trackStore`],context:({bindable:e,prop:t,scope:n})=>({currentPlacement:e(()=>({defaultValue:void 0})),hasPointerMoveOpened:e(()=>({defaultValue:null})),triggerValue:e(()=>({defaultValue:t(`defaultTriggerValue`)??null,value:t(`triggerValue`),onChange(e){let r=t(`onTriggerValueChange`);r&&r({value:e,triggerElement:k(n,e)})}}))}),watch({track:e,action:t,prop:n}){e([()=>n(`disabled`)],()=>{t([`closeIfDisabled`])}),e([()=>n(`open`)],()=>{t([`toggleVisibility`])}),e([()=>n(`triggerValue`)],()=>{t([`repositionImmediate`])})},on:{"triggerValue.set":{actions:[`setTriggerValue`,`repositionImmediate`]}},states:{closed:{entry:[`clearGlobalId`],on:{"controlled.open":{target:`open`},open:[{guard:`isOpenControlled`,actions:[`setTriggerValue`,`invokeOnOpen`]},{target:`open`,actions:[`setTriggerValue`,`invokeOnOpen`]}],"pointer.leave":{actions:[`clearPointerMoveOpened`]},"pointer.move":[{guard:ut(`noVisibleTooltip`,dt(`hasPointerMoveOpened`)),target:`opening`,actions:[`setTriggerValue`]},{guard:dt(`hasPointerMoveOpened`),target:`open`,actions:[`setPointerMoveOpened`,`invokeOnOpen`,`setTriggerValue`]}]}},opening:{effects:[`trackScroll`,`trackPointerlockChange`,`waitForOpenDelay`],on:{"after.openDelay":[{guard:`isOpenControlled`,actions:[`setPointerMoveOpened`,`invokeOnOpen`]},{target:`open`,actions:[`setPointerMoveOpened`,`invokeOnOpen`]}],"controlled.open":{target:`open`},"controlled.close":{target:`closed`},open:[{guard:`isOpenControlled`,actions:[`setTriggerValue`,`invokeOnOpen`]},{target:`open`,actions:[`setTriggerValue`,`invokeOnOpen`]}],"pointer.leave":[{guard:`isOpenControlled`,actions:[`clearPointerMoveOpened`,`invokeOnClose`,`toggleVisibility`]},{target:`closed`,actions:[`clearPointerMoveOpened`,`invokeOnClose`]}],close:[{guard:`isOpenControlled`,actions:[`invokeOnClose`,`toggleVisibility`]},{target:`closed`,actions:[`invokeOnClose`]}]}},open:{effects:[`trackEscapeKey`,`trackScroll`,`trackPointerlockChange`,`trackPositioning`],entry:[`setGlobalId`],on:{"controlled.close":{target:`closed`},close:[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed`,actions:[`invokeOnClose`]}],"pointer.leave":[{guard:`isVisible`,target:`closing`,actions:[`clearPointerMoveOpened`]},{guard:`isOpenControlled`,actions:[`clearPointerMoveOpened`,`invokeOnClose`]},{target:`closed`,actions:[`clearPointerMoveOpened`,`invokeOnClose`]}],"content.pointer.leave":{guard:`isInteractive`,target:`closing`},"positioning.set":{actions:[`reposition`]},"triggerValue.set":{target:`closing`,actions:[`setTriggerValue`,`immediateReopen`]}}},closing:{effects:[`trackPositioning`,`waitForCloseDelay`],on:{"after.closeDelay":[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed`,actions:[`invokeOnClose`]}],"controlled.close":{target:`closed`},"controlled.open":{target:`open`},close:[{guard:`isOpenControlled`,actions:[`invokeOnClose`]},{target:`closed`,actions:[`invokeOnClose`]}],"pointer.move":[{guard:`isOpenControlled`,actions:[`setPointerMoveOpened`,`setTriggerValue`,`invokeOnOpen`,`toggleVisibility`]},{target:`open`,actions:[`setPointerMoveOpened`,`setTriggerValue`,`invokeOnOpen`]}],"triggerValue.set":{target:`open`,actions:[`setTriggerValue`,`repositionImmediate`]},reopen:{target:`open`},"content.pointer.move":{guard:`isInteractive`,target:`open`},"positioning.set":{actions:[`reposition`]}}}},implementations:{guards:{noVisibleTooltip:()=>A.get(`id`)===null,isVisible:({prop:e})=>e(`id`)===A.get(`id`),isInteractive:({prop:e})=>!!e(`interactive`),hasPointerMoveOpened:({context:e})=>!!e.get(`hasPointerMoveOpened`),isOpenControlled:({prop:e})=>e(`open`)!==void 0},actions:{setGlobalId:({prop:e})=>{let t=A.get(`id`),n=t!==null&&t!==e(`id`);A.update({id:e(`id`),prevId:n?t:null,instant:n})},clearGlobalId:({prop:e})=>{e(`id`)===A.get(`id`)&&A.update({id:null,prevId:null,instant:!1})},invokeOnOpen:({prop:e})=>{e(`onOpenChange`)?.({open:!0})},invokeOnClose:({prop:e})=>{e(`onOpenChange`)?.({open:!1})},closeIfDisabled:({prop:e,send:t})=>{e(`disabled`)&&t({type:`close`,src:`disabled.change`})},reposition:({context:e,event:t,prop:n,scope:r})=>{t.type===`positioning.set`&&m(()=>k(r,e.get(`triggerValue`)),()=>st(r),{...n(`positioning`),...t.options,listeners:!1,onComplete(t){e.set(`currentPlacement`,t.placement)}})},repositionImmediate:({context:e,event:t,prop:n,scope:r})=>{let i=t.value??e.get(`triggerValue`);return m(()=>k(r,i),()=>st(r),{...n(`positioning`),onComplete(t){e.set(`currentPlacement`,t.placement)}})},toggleVisibility:({prop:e,event:t,send:n})=>{queueMicrotask(()=>{n({type:e(`open`)?`controlled.open`:`controlled.close`,previousEvent:t})})},setPointerMoveOpened:({context:e,event:t})=>{let n=t.triggerId??t.previousEvent?.triggerId;e.set(`hasPointerMoveOpened`,n??null)},clearPointerMoveOpened:({context:e})=>{e.set(`hasPointerMoveOpened`,null)},setTriggerValue:({context:e,event:t})=>{t.value!==void 0&&e.set(`triggerValue`,t.value)},immediateReopen:({send:e})=>{queueMicrotask(()=>{e({type:`reopen`})})}},effects:{trackFocusVisible:({scope:e})=>ye({root:e.getRootNode?.()}),trackPositioning:({context:e,prop:t,scope:n})=>(e.get(`currentPlacement`)||e.set(`currentPlacement`,t(`positioning`).placement),m(()=>k(n,e.get(`triggerValue`)),()=>st(n),{...t(`positioning`),defer:!0,onComplete(t){e.set(`currentPlacement`,t.placement)}})),trackPointerlockChange:({send:e,scope:t})=>{let n=t.getDoc();return He(n,`pointerlockchange`,()=>e({type:`close`,src:`pointerlock:change`}),!1)},trackScroll:({send:e,prop:t,scope:n,context:r})=>{if(!t(`closeOnScroll`))return;let i=k(n,r.get(`triggerValue`));if(!i)return;let a=Re(i).map(t=>He(t,`scroll`,()=>{e({type:`close`,src:`scroll`})},{passive:!0,capture:!0}));return()=>{a.forEach(e=>e?.())}},trackStore:({prop:e,send:t})=>{let n;return queueMicrotask(()=>{n=A.subscribe(()=>{A.get(`id`)!==e(`id`)&&t({type:`close`,src:`id.change`})})}),()=>n?.()},trackEscapeKey:({send:e,prop:t})=>t(`closeOnEscape`)?He(document,`keydown`,t=>{Ne(t)||t.key===`Escape`&&(t.stopPropagation(),e({type:`close`,src:`keydown.escape`}))},!0):void 0,waitForOpenDelay:({send:e,prop:t,event:n})=>{let r=setTimeout(()=>{e({type:`after.openDelay`,previousEvent:n})},t(`openDelay`));return()=>clearTimeout(r)},waitForCloseDelay:({send:e,prop:t,event:n})=>{let r=setTimeout(()=>{e({type:`after.closeDelay`,previousEvent:n})},t(`closeDelay`));return()=>clearTimeout(r)}}}}),pt={esc:`escape`,space:` `,plus:`+`,minus:`-`,del:`delete`,return:`enter`,left:`arrowleft`,right:`arrowright`,up:`arrowup`,down:`arrowdown`},j={meta:`⌘`,ctrl:`⌃`,alt:`⌥`,shift:`⇧`};function mt(e,t){let n=e.toLowerCase().split(`+`).map(e=>e.trim()).filter((e,t,n)=>e!==``||n[t-1]===``),r={ctrl:!1,meta:!1,alt:!1,shift:!1,key:``};for(let e of n){let n=e===``?`+`:e;n===`mod`?t?r.meta=!0:r.ctrl=!0:n===`ctrl`||n===`control`?r.ctrl=!0:n===`meta`||n===`cmd`||n===`command`?r.meta=!0:n===`alt`||n===`option`?r.alt=!0:n===`shift`?r.shift=!0:r.key=pt[n]??n}return r}function ht(e,t){return e.ctrlKey===t.ctrl&&e.metaKey===t.meta&&e.altKey===t.alt&&(t.key.length>1||/^[a-z0-9 ]$/.test(t.key)?e.shiftKey===t.shift:!0)&&e.key.toLowerCase()===t.key}function gt(e){let t=e.target;if(!t||typeof t!=`object`)return!1;let n=(t.tagName??``).toLowerCase();return n===`input`||n===`textarea`||n===`select`||t.isContentEditable===!0||(typeof t.getAttribute==`function`?t.getAttribute(`role`):null)===`textbox`}function _t(e,t){let n=mt(e,t),r=n.key===` `?`Space`:n.key.length===1?n.key.toUpperCase():n.key.charAt(0).toUpperCase()+n.key.slice(1);return t?(n.ctrl?j.ctrl:``)+(n.alt?j.alt:``)+(n.shift?j.shift:``)+(n.meta?j.meta:``)+r:[...[n.ctrl&&`Ctrl`,n.alt&&`Alt`,n.shift&&`Shift`,n.meta&&`Win`].filter(Boolean),r].join(`+`)}var vt=class{constructor(e={}){this.descriptors=new Map,this.rebinds=new Map,this.scopeStack=[],this.target=null,this.onKeydown=e=>{this.handleKeydown(e)},this.mac=e.platform===void 0?typeof navigator<`u`&&/mac|iphone|ipad/i.test(navigator.platform??``):e.platform===`mac`,this.baseScope=e.baseScope??`chart`}register(e){return this.descriptors.set(e.id,e),()=>{this.descriptors.get(e.id)===e&&this.descriptors.delete(e.id)}}unregister(e){this.descriptors.delete(e),this.rebinds.delete(e)}rebind(e,t){t===null?this.rebinds.delete(e):this.rebinds.set(e,Array.isArray(t)?[...t]:[t])}bindings(){return[...this.descriptors.values()].map(e=>{let t=this.activeKeys(e);return{id:e.id,label:e.label,category:e.category??`General`,scope:e.scope??this.baseScope,keys:t,display:t.map(e=>_t(e,this.mac))}})}pushScope(e){return this.scopeStack.push(e),()=>this.popScope(e)}popScope(e){let t=this.scopeStack.lastIndexOf(e);t>=0&&this.scopeStack.splice(t,1)}get activeScope(){return this.scopeStack[this.scopeStack.length-1]??this.baseScope}attach(e){this.detach(),this.target=e,e.addEventListener(`keydown`,this.onKeydown)}detach(){this.target?.removeEventListener(`keydown`,this.onKeydown),this.target=null}handleKeydown(e){let t=gt(e);for(let n of this.descriptors.values()){let r=n.scope??this.baseScope;if((r===`global`||r===this.activeScope)&&(!t||n.allowInInput)&&(!n.when||n.when())){for(let t of this.activeKeys(n))if(ht(e,mt(t,this.mac)))return n.preventDefault!==!1&&(e.preventDefault?.(),e.stopPropagation?.()),n.run(e),!0}}return!1}destroy(){this.detach(),this.descriptors.clear(),this.rebinds.clear(),this.scopeStack.length=0}activeKeys(e){return this.rebinds.get(e.id)??(Array.isArray(e.keys)?e.keys:[e.keys])}};function yt(e={}){return{machine:ft,props:{id:pe(`vela-tooltip`),openDelay:e.openDelay??0,closeDelay:e.closeDelay??0,interactive:e.interactive??!1,ids:e.triggerId?{trigger:e.triggerId}:void 0,positioning:{placement:e.placement??`top`}},connect:e=>lt(e,ke)}}var bt=`vela-ui-tooltip`,xt=`
.vela-tooltip {
    background: var(--vela-bg);
    color: var(--vela-fg);
    border: 1px solid var(--vela-border-soft);
    border-radius: var(--vela-radius-md);
    box-shadow: var(--vela-shadow);
    font-size: var(--vela-font-size-md);
    line-height: 1.4;
    padding: var(--vela-space-1) var(--vela-space-2);
    max-width: 280px;
    pointer-events: none;
    z-index: var(--vela-z-tooltip);
}
.vela-tooltip[data-interactive] { pointer-events: auto; }
.vela-tooltip[data-state='open'] { animation: vela-tooltip-in 0.12s ease; }
@keyframes vela-tooltip-in {
    from { opacity: 0; transform: scale(0.97); }
    to { opacity: 1; transform: scale(1); }
}
`;function St(e,t){return t??e.closest(`.vela-ui`)??e.ownerDocument.body}var M=class{constructor(t,n){this.trigger=t;let r=t.ownerDocument;y(bt,xt,r),this.positioner=r.createElement(`div`),this.positioner.className=`vela-ui-layer`,this.content=r.createElement(`div`),this.content.className=`vela-tooltip`,this.positioner.appendChild(this.content),St(t,n.host).appendChild(this.positioner),this.setContent(n.content);let i=yt(n),a=String(i.props.id);n.triggerId&&(t.id=n.triggerId),this.handle=he(i.machine,i.props,n=>{let r=i.connect(n);e(t,r.getTriggerProps(),a),e(this.positioner,r.getPositionerProps(),a),e(this.content,r.getContentProps(),a)})}setContent(e){this.content.replaceChildren(typeof e==`function`?e():e)}destroy(){this.handle.stop(),this.positioner.remove(),this.trigger.removeAttribute(`data-scope`)}};function Ct(e={}){return{machine:l,props:{id:pe(`vela-drawer`),modal:!0,closeOnEscape:e.closeOnEscape??!0,closeOnInteractOutside:e.closeOnInteractOutside??!0,initialFocusEl:e.initialFocusEl,onOpenChange:t=>e.onOpenChange?.(t.open)},connect:e=>g(e,ke)}}var wt=`vela-ui-drawer`,Tt=`
.vela-drawer-backdrop {
    position: fixed;
    inset: 0;
    background: var(--vela-backdrop);
    z-index: var(--vela-z-dialog);
}
.vela-drawer-positioner {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: var(--vela-z-dialog);
}
/* Inside a shell that declares a size class, the sheet scopes to the SHELL's bounds
   (the widget root is position:relative) instead of the whole viewport — an embedded
   chart must not curtain the host page. */
[data-layout] .vela-drawer-backdrop, [data-layout] .vela-drawer-positioner { position: absolute; }
.vela-drawer {
    background: var(--vela-surface);
    color: var(--vela-fg);
    border: 1px solid var(--vela-border-strong);
    border-bottom: none;
    border-radius: 14px 14px 0 0;
    box-shadow: var(--vela-shadow-dialog);
    font-size: 13px;
    width: 100%;
    max-height: 85%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    outline: none;
}
.vela-drawer[data-state='open'] { animation: vela-drawer-in var(--vela-dur-med) var(--vela-ease); }
@keyframes vela-drawer-in {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
}
/* The grab zone owns its touches (drag-to-dismiss), so the browser must not scroll it. */
.vela-drawer-grab {
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0 6px;
    cursor: grab;
    touch-action: none;
    user-select: none;
}
.vela-drawer-grab::before {
    content: '';
    width: 36px;
    height: 4px;
    border-radius: 2px;
    background: var(--vela-border-strong);
}
.vela-drawer-title {
    flex: none;
    padding: 0 16px 10px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.2px;
    color: var(--vela-fg-bright);
    user-select: none;
}
.vela-drawer-title:empty { display: none; }
.vela-drawer-body {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
    /* Vertical pans stay native scrolling; horizontal moves reach the sheet's gesture
       recognizer as pointer events (tab swipes). Without this the browser claims a
       sideways touch as a scroll attempt and CANCELS the pointer stream, so swipes
       never registered on real touch devices. Sideways-scrolling strips inside the
       body opt back in with their own touch-action: pan-x. */
    touch-action: pan-y;
    padding: 0 var(--vela-space-3) calc(var(--vela-space-3) + env(safe-area-inset-bottom, 0px));
}
.vela-drawer-body::-webkit-scrollbar { width: 8px; }
.vela-drawer-body::-webkit-scrollbar-thumb {
    background: var(--vela-scroll);
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: padding-box;
}
`,Et=.33,Dt=96,Ot=8,kt=48;function At(e,t,n){return Math.max(Math.abs(e),Math.abs(t))<Ot?`pending`:Math.abs(t)>Math.abs(e)?t>0&&!n.scrolled?`drag`:`scroll`:n.canSwipe&&!n.hScrollable?`hswipe`:`scroll`}function jt(e,t){return e>=Math.min(Dt,t*Et)}function Mt(e,t){return Math.abs(e)<kt||Math.abs(e)<=Math.abs(t)?null:e<0?`left`:`right`}var N=class{constructor(t={}){let n=(t.host??document.body).ownerDocument;y(wt,Tt,n);let r=t.host??n.body;this.backdrop=n.createElement(`div`),this.backdrop.className=`vela-drawer-backdrop vela-ui-layer`,this.positioner=n.createElement(`div`),this.positioner.className=`vela-drawer-positioner vela-ui-layer`,this.panel=n.createElement(`div`),this.panel.className=`vela-drawer`,this.panel.tabIndex=-1;let i=n.createElement(`div`);i.className=`vela-drawer-grab`,this.titleEl=n.createElement(`div`),this.titleEl.className=`vela-drawer-title`,this.titleEl.textContent=t.title??``,this.body=n.createElement(`div`),this.body.className=`vela-drawer-body`,t.content instanceof Node?this.body.appendChild(t.content):typeof t.content==`function`&&t.content(this.body),this.panel.append(i,this.titleEl,this.body),this.positioner.appendChild(this.panel),r.append(this.backdrop,this.positioner),this.wireGestures(i,t.onSwipe),this.ctrl=Ct({...t,initialFocusEl:()=>this.panel});let a=String(this.ctrl.props.id);this.handle=he(this.ctrl.machine,this.ctrl.props,t=>{let n=this.ctrl.connect(t);e(this.backdrop,n.getBackdropProps(),a),e(this.positioner,n.getPositionerProps(),a),e(this.panel,n.getContentProps(),a),e(this.titleEl,n.getTitleProps(),a),this.backdrop.style.display=n.open?``:`none`,this.positioner.style.display=n.open?``:`none`})}scrolledAncestor(e){let t=e instanceof Element?e:null;for(;t&&t!==this.panel;){if(t.scrollTop>0)return!0;t=t.parentElement}return!1}hScrollableAncestor(e){let t=e instanceof Element?e:null;for(;t&&t!==this.panel;){if(t.scrollWidth>t.clientWidth+1)return!0;t=t.parentElement}return!1}wireGestures(e,t){let n=0,r=0,i=0,a=0,o=`idle`,s=e=>{o=`drag`,r=e.clientY,this.panel.style.transition=`none`;try{this.panel.setPointerCapture(e.pointerId)}catch{}};this.panel.addEventListener(`pointerdown`,t=>{t.isPrimary!==!1&&(n=t.clientX,r=t.clientY,i=0,a=0,e.contains(t.target)?s(t):o=`pending`)}),this.panel.addEventListener(`pointermove`,e=>{if(o!==`idle`&&o!==`scroll`){if(i=e.clientX-n,a=e.clientY-r,o===`pending`){let n=At(i,a,{canSwipe:!!t,scrolled:this.scrolledAncestor(e.target),hScrollable:this.hScrollableAncestor(e.target)});if(n===`pending`)return;n===`drag`?s(e):o=n}o===`drag`&&(a=Math.max(0,e.clientY-r),this.panel.style.transform=a>0?`translateY(${a}px)`:``)}}),this.panel.addEventListener(`touchmove`,e=>{if(o===`drag`||o===`hswipe`){e.preventDefault();return}if(o!==`pending`)return;let t=e.touches[0];if(!t)return;let i=t.clientX-n;t.clientY-r>Math.abs(i)&&!this.scrolledAncestor(e.target)&&e.preventDefault()},{passive:!1});let c=()=>{if(o===`idle`)return;let e=o;if(o=`idle`,e===`drag`)this.panel.style.transition=``,this.panel.style.transform=``,jt(a,this.panel.getBoundingClientRect().height)&&this.hide();else if(e===`hswipe`){let e=Mt(i,a);e&&t?.(e)}};this.panel.addEventListener(`pointerup`,c),this.panel.addEventListener(`pointercancel`,c)}setTitle(e){this.titleEl.textContent=e}get open(){return this.ctrl.connect(this.handle.service).open}show(){this.ctrl.connect(this.handle.service).setOpen(!0)}hide(){this.ctrl.connect(this.handle.service).setOpen(!1)}destroy(){this.handle.stop(),this.backdrop.remove(),this.positioner.remove()}},P={S:1e3,MIN:6e4,H:36e5,D:864e5,W:6048e5,M:2592e6,Y:31536e6},Nt={S:`second`,MIN:`minute`,H:`hour`,D:`day`,W:`week`,M:`month`,Y:`year`},Pt={S:`s`,MIN:`m`,H:`h`,D:`D`,W:`W`,M:`M`,Y:`Y`};function Ft(e){return e===``?`MIN`:e===`S`||e===`H`||e===`D`||e===`W`||e===`M`||e===`Y`?e:null}var It={MIN:1,H:60,D:1440,W:10080,M:43200,Y:525600};function Lt(e,t){return e===`S`?`${t}S`:`${t*It[e]}`}function Rt(e){let t=String(e??``).trim();if(!t)return{valid:!1};let n=/^(\d*)\s*([a-zA-Z]?)$/.exec(t);if(!n)return{valid:!1};let r=n[1]??``,i=Ft((n[2]??``).toUpperCase());if(i===null||r===``&&i===`MIN`)return{valid:!1};let a=r===``?1:parseInt(r,10);if(!Number.isFinite(a)||a<1)return{valid:!1};let o=a*P[i],s=Nt[i];return{valid:!0,count:a,unit:i,ms:o,canonical:Lt(i,a),label:`${a} ${s}${a===1?``:`s`}`,short:`${a}${Pt[i]}`}}function F(e){let t=String(e??``).trim();if(!t)return NaN;let n=/^(\d*)\s*([a-zA-Z]?)$/.exec(t);if(!n)return NaN;let r=Ft((n[2]??``).toUpperCase());if(r===null||(n[1]??``)===``&&r===`MIN`)return NaN;let i=(n[1]??``)===``?1:parseInt(n[1],10);return!Number.isFinite(i)||i<1?NaN:i*P[r]}function zt(e){let t=new Set,n=[];for(let r of e)t.has(r)||(t.add(r),n.push(r));return n.sort((e,t)=>{let n=F(e),r=F(t),i=Number.isFinite(n),a=Number.isFinite(r);return i&&a&&n!==r?n-r:i===a?0:i?-1:1})}function I(e){let t=Rt(e);if(!t.valid)return e;let n=t.ms;for(let e of[`Y`,`M`,`W`,`D`,`H`,`MIN`,`S`])if(n%P[e]===0&&n/P[e]>=1)return`${n/P[e]}${Pt[e]}`;return t.short}var Bt=`vela-widget-layout-picker-v14`,Vt=`
.vela-lp-layer { position: absolute; z-index: var(--vela-z-menu); }
.vela-lp {
    background: var(--vela-surface-elev);
    color: var(--vela-fg);
    border: 1px solid var(--vela-border-strong);
    border-radius: 8px;
    box-shadow: var(--vela-shadow);
    padding: 10px 12px 10px;
    font-size: 13px;
    user-select: none;
    transform-origin: top;
    animation: vela-lp-in var(--vela-dur-fast) var(--vela-ease);
}
@keyframes vela-lp-in {
    from { opacity: 0; transform: translateY(-4px) scale(0.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
}
.vela-lp-cols { display: flex; align-items: stretch; gap: 14px; }
.vela-lp-heading {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: var(--vela-fg-faint);
    margin-bottom: 10px;
}
/* "?" help badge: hover it for the canvas explainer. */
.vela-lp-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid var(--vela-border-strong);
    color: var(--vela-fg-muted);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0;
    cursor: default;
    transition: color var(--vela-dur-fast) var(--vela-ease), border-color var(--vela-dur-fast) var(--vela-ease);
}
.vela-lp-badge:hover { color: var(--vela-fg-bright); border-color: var(--vela-fg-muted); }
.vela-lp-tip { display: flex; flex-direction: column; gap: 4px; max-width: 230px; white-space: normal; }
.vela-lp-vsep { width: 1px; flex: none; align-self: stretch; background: var(--vela-border-faint); }
.vela-lp-layout { width: 132px; display: flex; flex-direction: column; align-items: center; }
.vela-lp-layout > .vela-lp-heading,
.vela-lp-layout > .vela-lp-presets { align-self: stretch; }
.vela-lp-grid { display: grid; grid-template-columns: repeat(4, 24px); grid-auto-rows: 24px; gap: 4px; }
.vela-lp-sq {
    all: unset;
    box-sizing: border-box;
    border-radius: 4px;
    background: var(--vela-hover);
    border: 1px solid var(--vela-border-faint);
    cursor: pointer;
    transition: background var(--vela-dur-fast) var(--vela-ease), border-color var(--vela-dur-fast) var(--vela-ease);
}
.vela-lp-sq:hover { background: var(--vela-hover-strong); border-color: var(--vela-border-strong); }
/* Selected/previewed squares — the shared monochrome selection chip. */
.vela-lp-sq[data-on='1'] {
    background: var(--vela-selected-bg);
    border-color: var(--vela-selected-bg);
}
.vela-lp-presets { display: flex; flex-direction: column; gap: 2px; margin-top: 8px; }
.vela-lp-preset { all: unset; padding: 5px 8px; border-radius: 4px; cursor: pointer; color: var(--vela-fg-muted); font-size: 12px; white-space: nowrap; transition: transform 120ms var(--vela-ease); }
.vela-lp-preset:hover { background: var(--vela-hover); }
.vela-lp-preset:active { transform: scale(0.98); }
.vela-lp-preset[data-checked='1'] { background: var(--vela-hover-strong); color: var(--vela-fg-bright); }
.vela-lp-sync { display: flex; flex-direction: column; gap: 4px; min-width: 118px; }
.vela-lp-sync-row { all: unset; display: flex; align-items: center; gap: 14px; padding: 6px 8px; border-radius: 5px; cursor: pointer; }
.vela-lp-sync-row:hover { background: var(--vela-hover); }
.vela-lp-sync-row .vela-lp-label { flex: 1 1 auto; }
/* Toggle pill — same control language as the menu's switch rows, monochrome ON state. */
.vela-lp-switch {
    position: relative;
    flex: none;
    width: 34px;
    height: 18px;
    border-radius: 9px;
    background: var(--vela-hover);
    border: 1px solid var(--vela-border-soft);
    transition: background 0.16s ease, border-color 0.16s ease;
}
.vela-lp-switch::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--vela-fg-muted);
    transition: transform 0.16s ease, background 0.16s ease;
}
.vela-lp-switch.on { background: var(--vela-selected-bg); border-color: var(--vela-selected-bg); }
.vela-lp-switch.on::after { transform: translateX(16px); background: var(--vela-selected-fg); }
`,Ht=4;function Ut(e){y(Bt,Vt,e);let t=e.createElement(`div`);t.className=`vela-lp-grid`;let n=[];for(let r=0;r<Ht;r+=1)for(let i=0;i<Ht;i+=1){let a=e.createElement(`button`);a.className=`vela-lp-sq`,a.dataset.r=String(r),a.dataset.c=String(i),a.setAttribute(`aria-label`,`${i+1} \xD7 ${r+1}`),n.push(a),t.appendChild(a)}return{el:t,squares:n}}function Wt(e,t){for(let n of e)t!==null&&Number(n.dataset.r)<t.rows&&Number(n.dataset.c)<t.cols?n.dataset.on=`1`:delete n.dataset.on}var Gt=class{constructor(e){this.squares=[],this.isOpen=!1,this.hover=null,this.onDocPointerDown=e=>{let t=e.target;t&&(this.layer.contains(t)||this.opts.trigger.contains(t))||this.close()},this.onDocKeydown=e=>{e.key===`Escape`&&this.close()},this.opts=e,this.doc=e.host.ownerDocument,y(Bt,Vt,this.doc);let t=this.doc;this.layer=t.createElement(`div`),this.layer.className=`vela-ui-layer vela-lp-layer`,this.layer.style.display=`none`;let n=t.createElement(`div`);n.className=`vela-lp`,this.layer.appendChild(n);let r=t.createElement(`div`);r.className=`vela-lp-cols`,n.appendChild(r);let i=t.createElement(`div`);i.className=`vela-lp-layout`;let a=t.createElement(`div`);a.className=`vela-lp-heading`;let o=t.createElement(`span`);o.textContent=`Layout`;let s=t.createElement(`span`);s.className=`vela-lp-badge`,s.textContent=`?`,a.append(o,s),i.appendChild(a),this.infoTip=new M(s,{host:e.host,placement:`bottom`,content:()=>this.tipNode()});let{el:c,squares:l}=Ut(t);this.squares.push(...l),i.appendChild(c),this.presetsEl=t.createElement(`div`),this.presetsEl.className=`vela-lp-presets`,i.appendChild(this.presetsEl),r.appendChild(i);let u=t.createElement(`div`);u.className=`vela-lp-vsep`,r.appendChild(u);let d=t.createElement(`div`),f=t.createElement(`div`);f.className=`vela-lp-heading`,f.textContent=`Sync`,d.appendChild(f),this.syncEl=t.createElement(`div`),this.syncEl.className=`vela-lp-sync`,d.appendChild(this.syncEl),r.appendChild(d),c.addEventListener(`pointerdown`,e=>{let t=this.squareAt(e);if(!t)return;e.preventDefault();let{r:n,c:r}=this.squarePos(t);this.close(),this.opts.onSelectGrid(n+1,r+1)}),c.addEventListener(`pointermove`,e=>{let t=this.squareAt(e);if(!t)return;let{r:n,c:r}=this.squarePos(t);(this.hover?.rows!==n+1||this.hover?.cols!==r+1)&&(this.hover={rows:n+1,cols:r+1},this.render())}),c.addEventListener(`pointerleave`,()=>{this.hover&&(this.hover=null,this.render())}),e.trigger.addEventListener(`click`,()=>this.toggle()),e.trigger.setAttribute(`aria-haspopup`,`true`),e.trigger.setAttribute(`aria-expanded`,`false`),e.host.appendChild(this.layer)}toggle(){this.isOpen?this.close():this.open()}open(){this.isOpen||(this.isOpen=!0,this.hover=null,this.refresh(),this.layer.style.display=``,this.position(),this.opts.trigger.setAttribute(`aria-expanded`,`true`),this.doc.addEventListener(`pointerdown`,this.onDocPointerDown,!0),this.doc.addEventListener(`keydown`,this.onDocKeydown,!0),this.opts.onOpenChange?.(!0))}close(){this.isOpen&&(this.isOpen=!1,this.layer.style.display=`none`,this.opts.trigger.setAttribute(`aria-expanded`,`false`),this.doc.removeEventListener(`pointerdown`,this.onDocPointerDown,!0),this.doc.removeEventListener(`keydown`,this.onDocKeydown,!0),this.opts.onOpenChange?.(!1))}refresh(){this.isOpen&&(this.renderPresets(),this.renderSyncs(),this.render())}destroy(){this.close(),this.infoTip.destroy(),this.layer.remove()}squareAt(e){let t=e.target?.closest?.(`.vela-lp-sq`);return t instanceof HTMLButtonElement?t:null}squarePos(e){return{r:Number(e.dataset.r),c:Number(e.dataset.c)}}tipNode(){let e=this.doc.createElement(`div`);return e.className=`vela-lp-tip`,e.textContent=`Click a square to apply that columns × rows layout.`,e}render(){Wt(this.squares,this.hover??this.opts.shape())}renderPresets(){let e=this.doc;this.presetsEl.replaceChildren();let t=this.opts.presets();this.presetsEl.style.display=t.length>0?``:`none`;for(let n of t){let t=e.createElement(`button`);t.className=`vela-lp-preset`,t.textContent=n.label,n.checked&&(t.dataset.checked=`1`),t.addEventListener(`click`,()=>{this.close(),this.opts.onSelectPreset(n.id)}),this.presetsEl.appendChild(t)}}renderSyncs(){let e=this.doc;this.syncEl.replaceChildren();for(let t of this.opts.syncs()){let n=e.createElement(`button`);n.className=`vela-lp-sync-row`;let r=e.createElement(`span`);r.className=`vela-lp-label`,r.textContent=t.label;let i=e.createElement(`span`);i.className=`vela-lp-switch`+(t.checked?` on`:``),i.setAttribute(`aria-hidden`,`true`),n.setAttribute(`role`,`switch`),n.setAttribute(`aria-checked`,String(t.checked)),n.append(r,i),n.addEventListener(`click`,()=>{this.opts.onToggleSync(t.id),this.renderSyncs()}),this.syncEl.appendChild(n)}}position(){let e=this.opts.host.getBoundingClientRect(),t=this.opts.trigger.getBoundingClientRect(),n=t.left-e.left,r=t.bottom-e.top+4,i=this.layer.offsetWidth;n+i>e.width-8&&(n=Math.max(8,e.width-8-i)),this.layer.style.left=`${n}px`,this.layer.style.top=`${r}px`}},Kt=`vela-topbar`,qt=`
.vela-widget-topbar {
    display: flex;
    align-items: center;
    gap: var(--vela-space-1);
    padding: var(--vela-space-1) var(--vela-space-2);
    border-bottom: 1px solid var(--vela-border-soft);
    color: var(--vela-fg);
    font-size: var(--vela-font-size-md);
    flex: none;
}
.vela-widget-symbol, .vela-widget-tf, .vela-widget-style, .vela-widget-indicators, .vela-widget-action-left {
    all: unset;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 30px;
    padding: 0 9px;
    border-radius: 4px;
    cursor: pointer;
    color: var(--vela-fg-muted);
    font-size: 13px;
    font-weight: 550;
    white-space: nowrap;
}
.vela-widget-symbol {
    color: var(--vela-fg-bright);
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.3px;
    padding: 0 10px;
    gap: 7px;
}
.vela-widget-tf, .vela-widget-style, .vela-widget-indicators, .vela-widget-action-left {
    color: var(--vela-fg-bright);
}
.vela-widget-symbol:hover, .vela-widget-tf:hover, .vela-widget-style:hover, .vela-widget-indicators:hover, .vela-widget-action-left:hover { background: var(--vela-hover); color: var(--vela-fg-bright); }
/* Timeframe cluster: duration-sorted favorite chips, highlight in place, caret
   opening the full dropdown. With no favorites the caret is the merged trigger
   (label + chevron). An unstarred current value sits as an extra chip by the caret. */
.vela-widget-tf-group { display: inline-flex; align-items: center; gap: 2px; }
.vela-widget-tf-chips { display: inline-flex; align-items: center; gap: 2px; }
.vela-widget-tf-chips:empty { display: none; }
.vela-widget-tf[data-current='1'] { background: var(--vela-hover-strong); color: var(--vela-fg-bright); }
.vela-widget-tf-caret {
    all: unset;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 30px;
    border-radius: 4px;
    cursor: pointer;
    color: var(--vela-fg-muted);
}
.vela-widget-tf-caret:hover { background: var(--vela-hover); color: var(--vela-fg-bright); }
/* The merged trigger is a plain button (hover feedback only) — the highlight
   background marks the CURRENT chip among favorites, and a lone trigger with a
   permanent highlight would read as stuck-pressed. */
.vela-widget-tf-caret[data-solo='1'] {
    width: auto;
    padding: 0 6px 0 9px;
    gap: 4px;
    color: var(--vela-fg-bright);
    font-size: 13px;
    font-weight: 550;
    white-space: nowrap;
}
.vela-widget-topbar .vela-widget-tf-caret .vela-icon { font-size: 14px; width: 14px; height: 14px; }
.vela-widget-topbar .vela-icon { color: inherit; font-size: 16px; width: 16px; height: 16px; }
/* Width is set in syncHairlines() to exactly one device pixel — a CSS 1px at
   fractional DPR (1.25, 1.5…) straddles two physical pixels and siblings end
   up looking like different thicknesses depending on subpixel placement. */
.vela-sep { height: 22px; margin: 0 2px; flex: none; background: var(--vela-border-strong); }
.vela-alerts-badge {
    position: absolute;
    top: 2px;
    right: 2px;
    min-width: 13px;
    height: 13px;
    padding: 0 3px;
    border-radius: 7px;
    background: var(--vela-accent);
    color: var(--vela-fg-on-fill);
    font-size: 9px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
/* The right side of the bar — whatever the composition puts there rides this one
   auto-margin push (the flow-actions host used to carry it; composition can omit it). */
.vela-topbar-right { margin-left: auto; display: inline-flex; align-items: center; gap: var(--vela-space-1); }
.vela-widget-actions { display: inline-flex; gap: var(--vela-space-1); }
/* Left-aligned contributed actions — the primary-chrome cluster after the dropdowns. */
.vela-widget-actions-left { display: inline-flex; align-items: center; gap: var(--vela-space-1); }
/* One PINNED contributed action's slot (a composition entry naming the action's id). */
.vela-widget-action-pin { display: inline-flex; align-items: center; }
/* The side-panel toggles, one per docked panel — a group so the dock can rebuild them
   without disturbing the tools around it. */
.vela-widget-panels { display: inline-flex; align-items: center; gap: var(--vela-space-1); }
.vela-widget-tool {
    all: unset;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 30px;
    border-radius: 4px;
    cursor: pointer;
    color: var(--vela-fg-muted);
    font-size: 14px;
}
.vela-widget-tool:hover:not(:disabled) { background: var(--vela-hover); color: var(--vela-fg-bright); }
.vela-widget-tool:disabled { opacity: 0.35; cursor: default; }
.vela-widget-tool[data-active='1'] { background: var(--vela-hover); color: var(--vela-fg-bright); }
.vela-widget-action {
    all: unset;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: var(--vela-radius-sm);
    cursor: pointer;
    color: var(--vela-fg);
}
.vela-widget-action:hover { background: var(--vela-hover); }
`,Jt={candles:`Candles`,bars:`Bars`,line:`Line`,area:`Area`,baseline:`Baseline`};function L(e){return $e(e)?.label??Jt[e]??e}function Yt(e){let t=`style-${e}`;if(b(t))return t;let n=$e(e)?.icon;if(n)return be(t,n),t}var Xt=class{constructor(e,t){this.layoutButton=null,this.layoutPicker=null,this.layoutId=null,this.tooltips=[],this.panelBtns=new Map,this.panelTooltips=[],this.pinned=new Map,this.flowingOverrides=new Set,this.actionTooltips=[],this.warnedIconless=new Set,this.onHairlineSync=()=>{if(this.hairlineRaf)return;let e=this.el.ownerDocument.defaultView;this.hairlineRaf=e?.requestAnimationFrame(()=>{this.hairlineRaf=0,this.syncHairlines()})??0},this.hairlineRo=null,this.hairlineRaf=0,this.opts=t,this.host=e,this.timeframe=t.timeframe,this.priceStyle=t.priceStyle,this.comp=ce(t.composition);let n=e=>S(this.comp,e),i=e.ownerDocument;y(Kt,qt,i),this.el=i.createElement(`div`),this.el.className=`vela-widget-topbar`,this.symbolEl=i.createElement(`button`),this.symbolEl.className=`vela-widget-symbol`,this.symbolEl.textContent=w(t.symbol).ticker,t.onSymbolClick&&this.symbolEl.addEventListener(`click`,t.onSymbolClick),this.tfFavs=[...t.timeframeFavorites??[]],this.tfChipsHost=i.createElement(`span`),this.tfChipsHost.className=`vela-widget-tf-chips`,this.tfCaret=i.createElement(`button`),this.tfCaret.className=`vela-widget-tf-caret`,this.tfCaret.appendChild(h(`chevron-down`,i)),this.tfCaret.setAttribute(`aria-label`,`Timeframes`);let a=i.createElement(`span`);a.className=`vela-widget-tf-group`,a.append(this.tfChipsHost,this.tfCaret),this.styleButton=i.createElement(`button`),this.styleButton.className=`vela-widget-style`,this.renderStyleButton(i);let o=null;t.onIndicatorsClick&&!T(`indicators`)&&(o=i.createElement(`button`),o.className=`vela-widget-indicators`,o.append(h(`indicators`,i),i.createTextNode(`Indicators`)),o.addEventListener(`click`,t.onIndicatorsClick)),this.actionsHost=i.createElement(`span`),this.actionsHost.className=`vela-widget-actions`,this.leftActionsHost=i.createElement(`span`),this.leftActionsHost.className=`vela-widget-actions-left`,this.panelsHost=i.createElement(`span`),this.panelsHost.className=`vela-widget-panels`;let s=(e,t,n,r)=>this.toolButton(e,t,n,r,this.tooltips);n(`undo-redo`)?(this.undoBtn=s(`vela-widget-undo`,`undo`,`Undo`,t.onUndoClick),this.redoBtn=s(`vela-widget-redo`,`redo`,`Redo`,t.onRedoClick)):(this.undoBtn=i.createElement(`button`),this.redoBtn=i.createElement(`button`)),this.setHistoryState(!1,!1);let c=n(`screenshot`)&&!T(`screenshot`)?s(`vela-widget-screenshot`,`camera`,`Download screenshot`,t.onScreenshotClick):null;this.alertsBtn=n(`alerts`)?s(`vela-widget-alerts`,`bell`,`Alerts`):i.createElement(`button`),this.alertsBtn.style.position=`relative`,t.onAlertsClick&&this.alertsBtn.addEventListener(`click`,()=>t.onAlertsClick(this.alertsBtn)),this.alertsBadge=i.createElement(`span`),this.alertsBadge.className=`vela-alerts-badge`,this.alertsBadge.style.display=`none`,this.alertsBtn.appendChild(this.alertsBadge),t.layout&&n(`layout`)&&(this.layoutId=t.layout.current,this.layoutButton=i.createElement(`button`),this.layoutButton.className=`vela-widget-style`,this.renderLayoutButton(i));let l=()=>{let e=i.createElement(`span`);return e.className=`vela-sep`,e};this.leftActionsSep=l(),this.leftActionsSep.hidden=!0;let u=new Set([`symbol`,`timeframes`,`style`,`layout`,`indicators`]),d=(e,t)=>{let n=i.createElement(`span`);return n.className=`vela-widget-action-pin`,this.pinned.set(e,{host:n,left:t}),[n]},f=(e,n)=>{let r=T(e);return r?!(n?t.composition?.left!=null:t.composition?.right!=null)&&r.order!==void 0?(this.flowingOverrides.add(e),[]):d(e,n):null},p=(e,t)=>{switch(e){case`symbol`:return[this.symbolEl];case`timeframes`:return[a];case`style`:return[this.styleButton];case`layout`:return this.layoutButton?[this.layoutButton]:[];case`indicators`:return f(e,t)??(o?[o]:[]);case`actions`:return t?[this.leftActionsHost,this.leftActionsSep]:[this.actionsHost];case`undo-redo`:return[this.undoBtn,this.redoBtn];case`alerts`:return[this.alertsBtn];case`panels`:return[this.panelsHost];case`screenshot`:return f(e,t)??(c?[c]:[]);default:return d(e,t)}},m=(e,t)=>{let n=[];for(let[r,i]of e.entries()){let a=p(i,t);a.length!==0&&(n.push(...a),u.has(i)&&r<e.length-1&&n.push(l()))}return n},g=i.createElement(`span`);if(g.className=`vela-topbar-right`,g.append(...m(this.comp.right,!1)),this.el.append(...m(this.comp.left,!0),g),e.appendChild(this.el),this.renderTfChips(),this.onHairlineSync(),this.hairlineRo=new ResizeObserver(this.onHairlineSync),this.hairlineRo.observe(this.el),i.defaultView?.addEventListener(`resize`,this.onHairlineSync),this.renderActions(),this.tooltips.push(new M(this.tfCaret,{content:`Timeframe`,triggerId:`vela-topbar-tf`,host:e})),this.tooltips.push(new M(this.styleButton,{content:`Chart style`,triggerId:`vela-topbar-style`,host:e})),this.layoutButton&&t.layout){this.tooltips.push(new M(this.layoutButton,{content:`Layout`,triggerId:`vela-topbar-layout`,host:e}));let n=t.layout;this.layoutPicker=new Gt({trigger:this.layoutButton,host:e,shape:()=>n.shape(),presets:()=>n.presets().map(e=>({...e,checked:e.id===this.layoutId})),onSelectGrid:(e,t)=>n.onSelectGrid(e,t),onSelectPreset:e=>n.onSelectPreset(e),syncs:()=>n.syncs(),onToggleSync:e=>n.onToggleSync(e)})}this.tfMenu=new r({trigger:this.tfCaret,triggerId:`vela-topbar-tf`,host:e,items:this.tfItems(),onSelect:e=>t.onTimeframe(e),onFavorite:(e,n)=>t.onTimeframeFavorite?.(e,n),minWidth:`84px`}),this.styleMenu=new r({trigger:this.styleButton,triggerId:`vela-topbar-style`,host:e,items:this.styleItems(),onSelect:e=>t.onPriceStyle(e)})}setSymbol(e){this.symbolEl.textContent=w(e).ticker}setTimeframe(e){this.timeframe=e,this.tfMenu.setItems(this.tfItems()),this.renderTfChips()}setTimeframeFavorites(e){this.tfFavs=[...e],this.renderTfChips(),this.tfMenu.setItems(this.tfItems())}renderTfChips(){let e=this.el.ownerDocument;this.tfChipsHost.replaceChildren();let t=this.opts.onTimeframeFavorite===void 0?[]:zt(this.tfFavs),n=t.includes(this.timeframe)||t.length===0?t:[...t,this.timeframe];for(let t of n){let n=e.createElement(`button`);n.className=`vela-widget-tf`;let r=I(t);n.textContent=r,t===this.timeframe?(n.dataset.current=`1`,n.setAttribute(`aria-current`,`true`)):(n.setAttribute(`aria-label`,`Switch timeframe to ${r}`),n.addEventListener(`click`,()=>this.opts.onTimeframe(t))),this.tfChipsHost.appendChild(n)}this.tfCaret.replaceChildren(),t.length===0?(this.tfCaret.dataset.solo=`1`,this.tfCaret.append(e.createTextNode(I(this.timeframe)),h(`chevron-down`,e)),this.tfCaret.setAttribute(`aria-label`,`Timeframe \u2014 ${I(this.timeframe)}`)):(delete this.tfCaret.dataset.solo,this.tfCaret.appendChild(h(`chevron-down`,e)),this.tfCaret.setAttribute(`aria-label`,`Timeframes`)),this.onHairlineSync()}setPriceStyle(e){this.priceStyle=e,this.renderStyleButton(this.styleButton.ownerDocument),this.styleMenu.setItems(this.styleItems())}setLayout(e){this.layoutButton&&(this.layoutId=e,this.renderLayoutButton(this.layoutButton.ownerDocument),this.layoutPicker?.refresh())}renderLayoutButton(e){this.layoutButton&&(this.layoutButton.replaceChildren(),b(`layout`)?this.layoutButton.appendChild(h(`layout`,e)):this.layoutButton.appendChild(e.createTextNode(this.layoutId??``)),this.layoutButton.setAttribute(`aria-label`,`Layout \u2014 ${this.layoutId??``}`))}renderStyleButton(e){this.styleButton.replaceChildren();let t=Yt(this.priceStyle);t?this.styleButton.appendChild(h(t,e)):this.styleButton.appendChild(e.createTextNode(L(this.priceStyle))),this.styleButton.setAttribute(`aria-label`,`Chart style \u2014 ${L(this.priceStyle)}`)}renderActions(){let e=this.opts.getContext?.();this.actionsHost.replaceChildren(),this.leftActionsHost.replaceChildren();for(let e of this.pinned.values())e.host.replaceChildren();for(let e of this.actionTooltips)e.destroy();this.actionTooltips=[];let t=this.actionsHost.ownerDocument,n=this.comp.left.includes(`actions`),r=this.comp.right.includes(`actions`),i=new Set(Ye);for(let a of x(`topbar`,e)){let e=this.pinned.get(a.id);if(!e&&i.has(a.id)&&!this.flowingOverrides.has(a.id))continue;let o=e?e.left:a.align===`left`;if(!e&&!(o?n:r))continue;let s=a.iconOnly===!0&&!!a.icon;a.iconOnly===!0&&!a.icon&&!this.warnedIconless.has(a.id)&&(this.warnedIconless.add(a.id),console.warn(`[vela] widget action "${a.id}": iconOnly needs an \`icon\` \u2014 rendering the label instead.`));let c=t.createElement(`button`);c.className=o?`vela-widget-action-left`:s?`vela-widget-tool`:`vela-widget-action`,a.icon&&c.appendChild(h(a.icon,t)),s?(c.setAttribute(`aria-label`,a.label),this.actionTooltips.push(new M(c,{content:a.label,triggerId:`vela-action-${a.id}`,host:this.host}))):c.appendChild(t.createTextNode(a.label)),c.addEventListener(`click`,()=>{let e=this.opts.getContext?.();e&&a.run(e)}),(e?e.host:o?this.leftActionsHost:this.actionsHost).appendChild(c)}this.leftActionsSep.hidden=this.leftActionsHost.childElementCount===0,this.onHairlineSync()}setIndicatorCount(e){}setHistoryState(e,t){this.undoBtn.disabled=!e,this.redoBtn.disabled=!t}setAlertCount(e){this.alertsBadge.textContent=e>9?`9+`:String(e),this.alertsBadge.style.display=e>0?``:`none`}setPanelButtons(e,t){for(let e of this.panelTooltips)e.destroy();this.panelTooltips=[],this.panelBtns.clear(),this.panelsHost.replaceChildren();for(let n of e){let e=this.toolButton(`vela-widget-panel-${n.id}`,n.icon,n.title,()=>t(n.id),this.panelTooltips);this.panelBtns.set(n.id,e),this.panelsHost.appendChild(e)}}setPanelActive(e,t){let n=this.panelBtns.get(e);n&&(n.dataset.active=t?`1`:``)}destroy(){this.hairlineRo?.disconnect();let e=this.el.ownerDocument.defaultView;e?.removeEventListener(`resize`,this.onHairlineSync),this.hairlineRaf&&e?.cancelAnimationFrame(this.hairlineRaf),this.tfMenu.destroy(),this.styleMenu.destroy(),this.layoutPicker?.destroy();for(let e of[...this.tooltips,...this.panelTooltips,...this.actionTooltips])e.destroy();this.el.remove()}toolButton(e,t,n,r,i){let a=this.el.ownerDocument,o=a.createElement(`button`);return o.className=`vela-widget-tool ${e}`,o.appendChild(h(t,a)),o.setAttribute(`aria-label`,n),i.push(new M(o,{content:n,triggerId:`vela-tool-${e}`,host:this.host})),r&&o.addEventListener(`click`,r),o}syncHairlines(){let e=this.el.ownerDocument.defaultView;if(!e)return;let t=e.devicePixelRatio||1;for(let e of this.el.querySelectorAll(`.vela-sep`)){e.style.width=`${1/t}px`,e.style.transform=``;let n=e.getBoundingClientRect().left,r=Math.round(n*t)/t-n;r&&(e.style.transform=`translateX(${r}px)`)}}tfItems(){let e=this.opts.onTimeframeFavorite!==void 0;return this.opts.timeframes.map(t=>({id:t,label:I(t),checked:t===this.timeframe,...e?{favorite:this.tfFavs.includes(t)}:{}}))}styleItems(){return t().map((e,t)=>({id:e,label:L(e),icon:Yt(e),checked:e===this.priceStyle,separatorBefore:t===Ge.length}))}},Zt=[{id:`1D`,tf:`1`,preset:`1D`,bars:1500},{id:`7D`,tf:`5`,preset:`1W`,bars:2100},{id:`1M`,tf:`30`,preset:`1M`,bars:1500},{id:`3M`,tf:`60`,preset:`3M`,bars:2200},{id:`6M`,tf:`240`,preset:`6M`,bars:1150},{id:`YTD`,tf:`D`,preset:`YTD`,bars:400},{id:`1Y`,tf:`D`,preset:`1Y`,bars:400},{id:`5Y`,tf:`W`,preset:`5Y`,bars:300},{id:`ALL`,tf:`W`,preset:`ALL`,bars:5e3}],Qt=`vela-widget-bottombar`,$t=`
.vela-widget-bottombar {
    display: flex;
    align-items: center;
    gap: 2px;
    height: 38px;
    padding: 0 8px;
    border-top: 1px solid var(--vela-border);
    color: var(--vela-fg-muted);
    font-size: 12px;
    flex: none;
}
.vela-bb-range {
    all: unset;
    height: 24px;
    display: inline-flex;
    align-items: center;
    padding: 0 9px;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
}
.vela-bb-range:hover { background: var(--vela-hover); color: var(--vela-fg-bright); }
.vela-bb-range[data-active='1'] { color: var(--vela-fg-bright); background: var(--vela-hover); }
.vela-bb-spacer { flex: 1 1 auto; }
.vela-bb-clock { font-variant-numeric: tabular-nums; color: var(--vela-fg-bright); font-weight: 600; }
.vela-bb-tz {
    all: unset;
    height: 26px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0 8px;
    border-radius: 4px;
    font-weight: 600;
    color: var(--vela-fg-bright);
    cursor: pointer;
}
.vela-bb-tz:hover { background: var(--vela-hover); }
.vela-bb-session { display: inline-flex; border: 1px solid var(--vela-border-strong); border-radius: 4px; overflow: hidden; margin-left: 6px; }
.vela-bb-session-btn {
    all: unset;
    height: 24px;
    display: inline-flex;
    align-items: center;
    padding: 0 8px;
    color: var(--vela-fg-muted);
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
}
.vela-bb-session-btn:disabled { cursor: not-allowed; opacity: 0.55; }
.vela-bb-session-btn:not(:disabled):hover { background: var(--vela-hover); color: var(--vela-fg-bright); }
.vela-bb-session-btn.is-active { color: var(--vela-fg); background: var(--vela-surface-elev); }
.vela-bb-session-btn.is-active:disabled { opacity: 0.8; }
.vela-bb-settings {
    all: unset;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 26px;
    margin-left: 6px;
    border-radius: 4px;
    cursor: pointer;
    color: var(--vela-fg-muted);
    font-size: 14px;
}
.vela-bb-settings:hover { background: var(--vela-hover); color: var(--vela-fg-bright); }
`,en=class{constructor(e,t){this.settingsTip=null,this.rangeButtons=new Map,this.sessionButtons=new Map,this.sessionEl=null,this.timezone=t.timezone,this.exchangeTimezone=t.exchangeTimezone;let n=e.ownerDocument;y(Qt,$t,n),this.el=n.createElement(`div`),this.el.className=`vela-widget-bottombar`;for(let e of Zt){let r=n.createElement(`button`);r.className=`vela-bb-range`,r.textContent=e.id,r.addEventListener(`click`,()=>{this.setActiveRange(e.id),t.onRange(e)}),this.rangeButtons.set(e.id,r),this.el.appendChild(r)}let i=n.createElement(`span`);i.className=`vela-bb-spacer`,this.tzButton=n.createElement(`button`),this.tzButton.className=`vela-bb-tz`,this.tzButton.setAttribute(`aria-label`,`Time zone`),this.clockEl=n.createElement(`span`),this.clockEl.className=`vela-bb-clock`,this.tzLabelEl=n.createElement(`span`),this.tzLabelEl.textContent=te(this.displayZone),this.tzButton.append(this.clockEl,this.tzLabelEl);let a=n.createElement(`span`);a.className=`vela-bb-session`,this.sessionEl=a,a.style.display=`none`,a.title=`Session — regular (RTH) vs extended (ETH) hours`;for(let[e,r]of[[`regular`,`RTH`],[`extended`,`ETH`]]){let i=n.createElement(`button`);i.className=`vela-bb-session-btn`+(e===`regular`?` is-active`:``),i.textContent=r,i.disabled=!0,i.addEventListener(`click`,()=>{i.disabled||(this.setSession({session:e,enabled:!0}),t.onSession?.(e))}),this.sessionButtons.set(e,i),a.appendChild(i)}let o=n.createElement(`button`);o.className=`vela-bb-settings`,o.appendChild(h(`gear`,n)),o.setAttribute(`aria-label`,`Chart settings`),t.onSettingsClick&&o.addEventListener(`click`,t.onSettingsClick),this.settingsTip=new M(o,{content:`Chart settings`,triggerId:`vela-bb-settings`,host:e}),this.el.append(i,this.tzButton,a,o),e.appendChild(this.el),this.tzMenu=new r({trigger:this.tzButton,triggerId:`vela-bb-tz`,host:e,placement:`top-end`,items:this.tzItems(),onSelect:e=>{this.setTimezone(e,this.exchangeTimezone),t.onTimezone(e)}}),this.tick(),this.unsubClock=(t.clock??new Me).onTick(()=>this.tick())}setTimezone(e,t){if(e===this.timezone&&t===this.exchangeTimezone)return;let n=e!==this.timezone;this.timezone=e,this.exchangeTimezone=t,this.tzLabelEl.textContent=te(this.displayZone),n&&this.tzMenu.setItems(this.tzItems()),this.tick()}get displayZone(){return ie(this.timezone,this.exchangeTimezone)}setActiveRange(e){for(let[t,n]of this.rangeButtons)e!==null&&t===e?n.dataset.active=`1`:delete n.dataset.active}setSession(e){this.sessionEl&&(this.sessionEl.style.display=e.enabled?``:`none`);for(let[t,n]of this.sessionButtons)n.disabled=!e.enabled,n.classList.toggle(`is-active`,t===(e.enabled?e.session:`regular`))}destroy(){this.unsubClock(),this.tzMenu.destroy(),this.settingsTip?.destroy(),this.el.remove()}tzItems(){return f(this.timezone).map(e=>({id:e.value,label:e.label,checked:e.checked}))}tick(){try{this.clockEl.textContent=new Intl.DateTimeFormat(`en-GB`,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`,hour12:!1,timeZone:this.displayZone}).format(new Date)}catch{this.clockEl.textContent=``}}},tn=new Set;function nn(e){return(e||`?`).replace(/[^A-Za-z0-9]/g,``).slice(0,2).toUpperCase()||`?`}function R(e,t,n,r,i){let a=e.createElement(`span`);a.className=r;let o=()=>{a.replaceChildren(),a.style.background=u(n),a.textContent=nn(t||n)};if(!i||tn.has(i))return o(),a;let s=e.createElement(`img`);return s.alt=``,s.crossOrigin=`anonymous`,s.src=i,s.style.cssText=`width:100%;height:100%;border-radius:50%;display:block;object-fit:cover;`,s.addEventListener(`error`,()=>{tn.add(i),o()},{once:!0}),a.appendChild(s),a}var z=`price`,rn=`Main chart`;function an(e){let t=fe(e);return t?{label:t.label,icon:t.icon}:{label:String(e||`drawing`).replace(/(^|\s)\S/g,e=>e.toUpperCase()),icon:null}}function on(e){let{label:t}=an(e.type),n=e.text?.value?.trim();return n?`${t} \u2014 ${n}`:t}function sn(e,t){if(e.kind===`price`)return rn;let n=e.indicators.find(e=>!e.ownScale)??e.indicators[0];return n?cn(n,t):`Pane ${e.order+1}`}function cn(e,t){return e.title||t(e.id)||e.id}function ln(e,t){return e.shorttitle||cn(e,t)}function un(e){return e.items.flatMap(e=>e.kind===`row`?[e.row]:[])}function dn(e,t){return e.kind===`price`||t.kind===`price`?e.kind===t.kind:e.kind===t.kind&&e.id===t.id}function fn(e){return e.kind===`draw`?[{kind:`drawing`,id:e.drawing.id}]:e.members.map(e=>({kind:`drawing`,id:e.id}))}function pn(e){return e.kind===`unit`?fn(e.unit):[e.row.kind===`price`?{kind:`price`}:{kind:`indicator`,id:e.row.id}]}function mn(e){return e.items.flatMap(pn)}function hn(e,t){let n=0;for(let r=0;r<Math.min(t,e.items.length);r+=1)n+=pn(e.items[r]).length;return n}function gn(e,t,n){let r=0;for(let i of e.items){if(i.kind===`unit`&&i.unit.kind===`group`&&i.unit.group.id===t)return r+Math.min(n,i.unit.members.length);r+=pn(i).length}return r}function _n(e,t,n){let r=e=>t.some(t=>dn(t,e)),i=n;e.forEach((e,t)=>{t<n&&r(e)&&--i});let a=e.filter(e=>!r(e));return a.splice(Math.max(0,Math.min(i,a.length)),0,...t),a}function vn(e,t){return e.length===t.length&&e.every((e,n)=>dn(e,t[n]))}function yn(e){let t=e.length,n=null,r=[],i=[];return e.forEach((e,a)=>{let o=t-a;e.kind===`price`?n=o:e.kind===`indicator`?r.push({id:e.id,z:o}):i.push({id:e.id,z:o})}),{candleZ:n,series:r,drawings:i}}function bn(e,t,n=[]){let r=[...e.map(e=>e.z),...n];return{top:Math.max(t,0,...r),bottom:Math.min(t,0,...r)}}function xn(e,t,n){return e.filter(e=>t===z?e.paneId===z||!n.has(e.paneId):e.paneId===t).slice().reverse()}function B(e,t){return e.find(e=>e.ids.includes(t))??null}function Sn(e){return{allHidden:e.length>0&&e.every(e=>e.visible===!1),allLocked:e.length>0&&e.every(e=>e.locked===!0)}}function Cn(e,t){return e.length>0&&e.every(e=>B(t,e)===null)}function wn(e){let t=new Set(e.map(e=>e.name));for(let n=1;n<=e.length;n+=1){let e=`Group ${n}`;if(!t.has(e))return e}return`Group ${e.length+1}`}function Tn(e,t){return e.map(e=>({...e,ids:e.ids.filter(t)})).filter(e=>e.ids.length>0)}function En(e,t){return Tn(e,e=>t.has(e))}function Dn(e,t){let n=new Set(t);return Tn(e,e=>!n.has(e))}function On(e,t,n){let r=new Set(n);return e.map(e=>{let i=e.ids.filter(e=>!r.has(e));return{...e,ids:e.id===t?[...i,...n]:i}}).filter(e=>e.ids.length>0)}function kn(e,t){let n=[],r=new Set;for(let i of e){if(r.has(i.id))continue;let a=B(t,i.id);if(a){let t=e.filter(e=>a.ids.includes(e.id));for(let e of t)r.add(e.id);n.push({kind:`group`,group:a,members:t})}else r.add(i.id),n.push({kind:`draw`,drawing:i})}return n}function An(e){return e.kind===`draw`?e.drawing.zIndex:e.members[0]?.zIndex??0}function jn(e,t,n){let r=()=>({kind:`price`,label:e.priceLabel,visible:e.priceVisible}),i=t=>({kind:`indicator`,id:t.id,label:ln(t,e.handleTitle),visible:e.indicatorVisible(t.id),ownScale:t.ownScale}),a=n.map(e=>({kind:`unit`,unit:e}));if(!e.stackable){let e=t.indicators.map(e=>({kind:`row`,row:i(e)}));return t.kind===`price`&&e.unshift({kind:`row`,row:r()}),[...a,...e]}let o=new Map(e.zOrder.map(e=>[e.id,e.z])),s=t.indicators.map(e=>({item:{kind:`row`,row:i(e)},z:o.get(e.id)??0}));if(t.kind===`price`&&s.push({item:{kind:`row`,row:r()},z:e.candleZ}),s.sort((e,t)=>t.z-e.z),!e.interleave)return[...a,...s.map(e=>e.item)];let c=[...s,...n.map(e=>({item:{kind:`unit`,unit:e},z:An(e)}))];return c.sort((e,t)=>e.z===t.z?Number(e.item.kind===`unit`)-Number(t.item.kind===`unit`):t.z-e.z),c.map(e=>e.item)}function Mn(e){let t=new Set(e.panes.map(e=>e.id));return e.panes.map(n=>({id:n.id,kind:n.kind,label:sn(n,e.handleTitle),order:n.order,collapsed:n.collapsed,maximized:n.maximized,items:jn(e,n,kn(xn(e.drawings,n.id,t),e.groups))}))}function Nn(e){return e.every(e=>e.items.every(e=>e.kind===`row`&&e.row.kind===`price`))}var Pn=`vela-widget-objtree`,Fn=`
/* One pane's block. The transparent border reserves the drop-target outline. */
.vela-ot-pane {
    border: 1px solid transparent;
    border-radius: 6px;
    margin: 2px 0;
}
.vela-ot-panehead { display: flex; align-items: center; gap: 2px; padding: 5px 6px; }
.vela-ot-panename {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--vela-fg-muted);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}
.vela-ot-panesep { height: 1px; background: var(--vela-border); margin: 6px 8px; }

.vela-ot-row {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 6px 6px;
    border-radius: 6px;
    cursor: default;
}
.vela-ot-row:hover { background: var(--vela-hover); }
.vela-ot-row > .vela-icon { color: var(--vela-fg-muted); width: 14px; height: 14px; font-size: 14px; justify-content: center; flex: none; }
/* Drawing glyphs come from the type registry at toolbar scale — bring them down to row size. */
.vela-ot-row > .vela-icon svg { width: 14px; height: 14px; }
.vela-ot-name { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vela-ot-row[data-hidden] .vela-ot-name,
.vela-ot-row[data-hidden] > .vela-icon { opacity: 0.45; }
/* Two different states, and both can be true at once: "picked" is what the panel has selected
   (the group/duplicate candidates), "selected" mirrors what the CHART has selected. */
.vela-ot-row[data-picked] { background: var(--vela-active); }
.vela-ot-row[data-picked] .vela-ot-name { color: var(--vela-fg-bright); }
.vela-ot-row[data-selected] { box-shadow: inset 2px 0 0 var(--vela-accent); }
.vela-ot-avatar {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--vela-fg-on-fill);
    font-size: 10px;
    font-weight: 700;
}
/* "scale": this indicator draws against its own price scale, not the pane's. */
.vela-ot-tag {
    flex: none;
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--vela-fg-muted);
    background: var(--vela-hover);
    border-radius: 3px;
    padding: 1px 4px;
}
/* One row's actions, kept in a tight cluster: they read as one control group, and the row's
   own wider gap stays between the label and them. */
.vela-ot-acts { display: flex; align-items: center; gap: 0; flex: none; }
.vela-ot-btn {
    all: unset;
    cursor: pointer;
    flex: none;
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    color: var(--vela-fg-muted);
    font-size: 12px;
    visibility: hidden;
}
.vela-ot-row:hover .vela-ot-btn,
.vela-ot-panehead:hover .vela-ot-btn { visibility: visible; }
/* An engaged action stays out: hidden and locked are states, and a state the user can only
   see by hovering is a state they will not find. */
.vela-ot-row .vela-ot-btn[data-engaged] { visibility: visible; color: var(--vela-fg); }
.vela-ot-btn:hover:not(:disabled) { background: var(--vela-active); color: var(--vela-fg-bright); }
.vela-ot-btn:disabled { opacity: 0.35; cursor: default; }
.vela-ot-empty { padding: 20px 10px; text-align: center; color: var(--vela-fg-muted); font-size: 12px; }

/* ── drawing groups ── */
/* One top-level entry in a pane's drawing list: a lone drawing, or a whole group block. No
   border of its own — units stack flush, so consecutive highlighted rows read as one block; the
   drop-into-group outline is drawn inside the box instead (see the drag-and-drop rules). */
.vela-ot-unit { border-radius: 6px; }
/* Adjacent picked rows merge into one contiguous highlight: the shared edge loses its rounding. */
.vela-ot-unit:has(> .vela-ot-row[data-picked]) + .vela-ot-unit > .vela-ot-row[data-picked] { border-top-left-radius: 0; border-top-right-radius: 0; }
.vela-ot-unit:has(+ .vela-ot-unit > .vela-ot-row[data-picked]) > .vela-ot-row[data-picked] { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }
.vela-ot-row[data-row-kind='group'] > .vela-icon { width: 12px; font-size: 11px; }
/* A member sits indented under its group's header. */
.vela-ot-subrow { padding-left: 26px; }
.vela-ot-rename {
    flex: 1;
    min-width: 0;
    padding: 1px 4px;
    border: 1px solid var(--vela-accent);
    border-radius: var(--vela-radius-sm);
    background: var(--vela-surface-elev);
    color: var(--vela-fg-bright);
    font: inherit;
}
/* The selection bar. Always there — the actions it holds are the panel's, not a row's, so they
   stay in place and simply go dim until a drawing is selected. It stays put at the top of the
   list while the list scrolls under it, so they never scroll out of reach. */
.vela-ot-selbar {
    position: sticky;
    top: -8px;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 2px;
    margin: -8px -8px 6px;
    padding: 6px 8px;
    border-bottom: 1px solid var(--vela-border);
    background: var(--vela-bg);
}
.vela-ot-selcount { flex: 1; min-width: 0; color: var(--vela-fg-muted); font-size: 11px; }
.vela-ot-selbar .vela-ot-btn { visibility: visible; width: 24px; height: 22px; }
.vela-ot-selbar .vela-ot-btn[data-icon='group'] .vela-icon { width: 16px; height: 16px; font-size: 16px; }

/* ── drag-and-drop ── */
.vela-ot-row[data-drag] { cursor: grab; }
.vela-ot .vela-panel-body[data-dragging] .vela-ot-row[data-drag] { cursor: grabbing; }
/* The row in flight fades: the ghost under the pointer is the thing being moved. */
.vela-ot-row[data-source] { opacity: 0.4; }
/* Buttons would only invite a click that a drag is about to swallow. */
.vela-ot .vela-panel-body[data-dragging] .vela-ot-btn { visibility: hidden; }

/* The band between two pane blocks: a hairline at rest, a bright bar when dropping there
   would open a new pane. Doubles as the plain separator when dragging isn't available. */
.vela-ot-gap { position: relative; height: 11px; border-radius: 3px; margin: 0 8px; }
.vela-ot-gap::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background: var(--vela-border);
    transform: translateY(-50%);
}
.vela-ot-gap[data-drop] { height: 4px; background: var(--vela-fg-bright); }
.vela-ot-gap[data-drop]::before { display: none; }
/* A whole container accepts the drop: merging into a pane, or a pane with no drawings yet.
   The pane block's transparent border reserves the room for this outline; a group unit has no
   border to color, so it draws the same line as an inset outline (no layout footprint). */
.vela-ot [data-drop='target'] { border-color: var(--vela-fg-bright); background: var(--vela-hover); }
.vela-ot-unit[data-drop='target'] { outline: 1px solid var(--vela-fg-bright); outline-offset: -1px; }
/* Where a reorder would insert. */
.vela-ot [data-drop='before'] { box-shadow: inset 0 2px 0 var(--vela-fg-bright); }
.vela-ot [data-drop='after'] { box-shadow: inset 0 -2px 0 var(--vela-fg-bright); }

.vela-ot-ghost {
    position: fixed;
    z-index: 9999;
    pointer-events: none;
    max-width: 220px;
    padding: 3px 10px;
    border: 1px solid var(--vela-fg-bright);
    border-radius: var(--vela-radius-sm);
    background: var(--vela-surface-overlay);
    color: var(--vela-fg);
    box-shadow: var(--vela-shadow);
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
`,In=[`indicator:added`,`indicator:removed`,`indicator:moved`,`indicator:visibility`,`pane:changed`,`drawing:created`,`drawing:edited`,`drawing:removed`],Ln=4;function Rn(e,t){for(let n=0;n<e.length;n+=1){let r=e[n].getBoundingClientRect();if(t<r.top+r.height/2)return n}return e.length}var zn=class{constructor(){this.actions=new Map,this.seq=0}entry(e,t,n,r=!1){let i=this.next();return this.actions.set(i,n),{id:i,label:e,icon:t,separatorBefore:r}}submenu(e,t,n,r=!1){return{id:this.next(),label:e,icon:t,submenu:n,separatorBefore:r}}next(){return this.seq+=1,`ot${this.seq}`}},Bn=class extends Ce{constructor(e,t){super(e,`Object tree`,`vela-ot`),this.iconFor=t,this.chart=null,this.selectedDrawings=new Set,this.symbolName=``,this.symbolRaw=``,this.groupsPerChart=new WeakMap,this.collapsed=new Set,this.picked=new Set,this.renaming=null,this.syncingSelection=!1,this.groupSeq=0,this.unsubs=[],this.pass=null,this.menu=null,this.menuActions=new Map,this.drag=null,y(Pn,Fn,e.ownerDocument),this.body.addEventListener(`contextmenu`,e=>this.onContextMenu(e)),this.body.addEventListener(`pointerdown`,e=>this.onPointerDown(e))}get groups(){return(this.chart===null?void 0:this.groupsPerChart.get(this.chart))??[]}set groups(e){this.chart&&this.groupsPerChart.set(this.chart,e)}toggle(e=this.el.hidden){super.toggle(e),e&&this.refresh()}setSymbol(e){this.symbolRaw=e,this.symbolName=w(e).ticker}onChart(e){this.detach(),this.chart=e;for(let t of In)this.unsubs.push(e.on(t,()=>this.refresh()));this.unsubs.push(e.on(`drawing:selected`,({ids:e})=>{this.selectedDrawings=new Set(e),this.syncingSelection||(this.picked=new Set(e)),this.refresh()})),this.refresh()}destroy(){this.detach(),this.endDrag(!1),this.menu?.destroy(),this.menu=null,super.destroy()}detach(){for(let e of this.unsubs)e();this.unsubs=[],this.chart=null}snapshot(e,t){let n=e.renderer.supports(`seriesOrder`)&&e.renderer.supports(`candleZOrder`);return{panes:e.panes.list(),indicatorVisible:e=>t(e)?.visible!==!1,handleTitle:e=>t(e)?.title,stackable:n,interleave:n&&e.drawings.supported&&e.renderer.capabilities.drawingDepth===!0,zOrder:n?e.renderer.get(`seriesOrder`)??[]:[],candleZ:n&&Number(e.renderer.get(`candleZOrder`))||0,priceLabel:this.symbolName||`Price`,priceVisible:e.renderer.get(`candleVisible`)!==!1,drawings:e.drawings.supported?e.drawings.all():[],groups:this.groups}}refresh(){this.drag?.active!==!0&&this.renaming===null&&this.render()}render(){if(this.el.hidden||!this.chart)return;let e=this.chart;this.prune(e);let t=new Map(e.indicators().map(e=>[e.id,e])),n=this.snapshot(e,e=>t.get(e)),r=Mn(n),i={chart:e,handle:e=>t.get(e),stackable:n.stackable,repanable:e.panes.supported,interleave:n.interleave,panes:r};this.pass=i,this.body.replaceChildren();let a=this.el.ownerDocument;this.body.appendChild(this.selectionBar(i)),r.forEach((e,t)=>{t>0&&this.body.appendChild(this.gapEl(i,r[t-1].id,e.id)),this.body.appendChild(this.paneBlock(i,e))});let o=r[r.length-1];if(o&&i.repanable&&this.body.appendChild(this.gapEl(i,o.id,void 0)),Nn(r)){let e=a.createElement(`div`);e.className=`vela-ot-empty`,e.textContent=`Add an indicator or a drawing to populate the tree`,this.body.appendChild(e)}}selectionBar(e){let t=this.el.ownerDocument,n=t.createElement(`div`);n.className=`vela-ot-selbar`;let r=[...this.picked],i=Cn(r,this.groups);n.appendChild(this.btn({icon:`group`,title:r.length===0?`Group the selected drawings`:i?`Group ${r.length===1?`this drawing`:`these drawings`}`:`Already in a group`,disabled:!i,run:()=>this.makeGroup(r)})),n.appendChild(this.btn({icon:`clone`,title:r.length===0?`Duplicate the selected drawings`:`Duplicate`,disabled:r.length===0,run:()=>{for(let t of r)this.cloneInto(e,t);this.render()}}));let a=t.createElement(`span`);return a.className=`vela-ot-selcount`,a.textContent=r.length>1?`${r.length} selected`:``,n.appendChild(a),n}gapEl(e,t,n){let r=this.el.ownerDocument.createElement(`div`);return e.repanable?(r.className=`vela-ot-gap`,n!==void 0&&(r.dataset.before=n),t!==void 0&&(r.dataset.after=t),r):(r.className=`vela-ot-panesep`,r)}paneBlock(e,t){let n=this.el.ownerDocument,r=n.createElement(`div`);r.className=`vela-ot-pane`,r.dataset.pane=t.id,r.dataset.kind=t.kind,r.appendChild(this.paneHead(e,t));let i=n.createElement(`div`);i.className=`vela-ot-stack`;for(let n of t.items)i.appendChild(n.kind===`row`?this.rowEl(e,t,n.row):this.unitEl(e,t,n.unit));return r.appendChild(i),r}unitEl(e,t,n){let r=this.el.ownerDocument.createElement(`div`);if(r.className=`vela-ot-unit`,n.kind===`draw`)r.appendChild(this.drawRow(e,n.drawing));else if(r.dataset.group=n.group.id,r.appendChild(this.groupRow(e,t,n.group)),!this.collapsed.has(n.group.id))for(let t of n.members)r.appendChild(this.drawRow(e,t,!0));return r}paneHead(e,t){let n=this.el.ownerDocument,{chart:r}=e,i=n.createElement(`div`);i.className=`vela-ot-panehead`;let a=n.createElement(`span`);if(a.className=`vela-ot-panename`,a.textContent=t.label,a.title=t.label,i.appendChild(a),!r.panes.supported)return i;let o=n.createElement(`span`);o.className=`vela-ot-acts`,i.appendChild(o);let s=(e,t,n)=>{o.appendChild(this.btn({icon:e,title:t,run:n}))};return t.kind!==`price`&&(t.order>1&&s(`arrow-up`,`Move pane up`,()=>r.panes.move(t.id,`up`)),t.order<e.panes.length-1&&s(`arrow-down`,`Move pane down`,()=>r.panes.move(t.id,`down`)),s(t.collapsed?`expand`:`collapse`,t.collapsed?`Expand pane`:`Collapse pane`,()=>r.panes.collapse(t.id,!t.collapsed))),s(t.maximized?`restore`:`maximize`,t.maximized?`Restore panes`:`Maximize pane`,()=>r.panes.maximize(t.maximized?null:t.id)),i}rowEl(e,t,n){let r=this.el.ownerDocument,{chart:i}=e;if(n.kind===`price`){let a=R(r,this.symbolName.replace(/[-_/]?(USDT|USDC|USD1|USDS|BUSD|USD|EUR|PERP)$/i,``)||this.symbolName||`P`,this.symbolName||`Price`,`vela-ot-avatar`,this.symbolRaw?this.iconFor?.(this.symbolRaw):void 0),o=this.row(a,n.label,n.visible,[{icon:n.visible?`eye`:`eye-off`,title:n.visible?`Hide`:`Show`,engaged:!n.visible,run:()=>{i.renderer.set(`candleVisible`,!n.visible),this.refresh()}}]);return o.dataset.rowKind=`price`,o.dataset.pane=t.id,e.stackable&&(o.dataset.drag=`1`,o.title=`Drag to change what draws in front`),o}let a=e.handle(n.id),o=this.row(h(`indicators`,r),n.label,n.visible,[{icon:n.visible?`eye`:`eye-off`,title:n.visible?`Hide`:`Show`,engaged:!n.visible,run:()=>{a?.setVisible(!n.visible),this.refresh()}},{icon:`trash`,title:`Remove`,run:()=>{a?.remove(),this.refresh()}}],n.ownScale?`scale`:void 0);return o.dataset.rowKind=`indicator`,o.dataset.id=n.id,o.dataset.pane=t.id,(e.repanable||e.stackable)&&(o.dataset.drag=`1`,o.title=e.repanable?`Drag to another pane, or between panes for a new one`:`Drag to change what draws in front`),o}groupRow(e,t,n){let r=this.el.ownerDocument,i=this.collapsed.has(n.id),a=e.chart.drawings.all().filter(e=>n.ids.includes(e.id)),{allHidden:o,allLocked:s}=Sn(a),c=[...n.ids],l=this.row(h(i?`chevron-right`:`chevron-down`,r),n.name,!o,[{icon:s?`lock`:`unlock`,title:s?`Unlock all`:`Lock all`,engaged:s,run:()=>this.setMembers(e,c,{locked:!s})},{icon:o?`eye-off`:`eye`,title:o?`Show all`:`Hide all`,engaged:o,run:()=>this.setMembers(e,c,{visible:o})},{icon:`trash`,title:`Remove all`,run:()=>this.removeGroup(e,n.id,!0)}]);if(l.dataset.rowKind=`group`,l.dataset.id=n.id,l.dataset.pane=t.id,l.title=`${a.length} drawing${a.length===1?``:`s`} \u2014 drag to move them together`,this.renaming===n.id){let e=l.querySelector(`.vela-ot-name`),t=r.createElement(`input`);t.className=`vela-ot-rename`,t.value=n.name,e?.replaceWith(t),queueMicrotask(()=>{t.focus(),t.select()}),t.addEventListener(`keydown`,e=>{e.key===`Enter`?(e.preventDefault(),this.commitRename(n.id,t.value)):e.key===`Escape`?(this.renaming=null,this.render()):e.key===` `&&e.stopPropagation()}),t.addEventListener(`blur`,()=>this.commitRename(n.id,t.value))}else l.dataset.drag=`1`,l.addEventListener(`click`,()=>{i?this.collapsed.delete(n.id):this.collapsed.add(n.id),this.render()});return l}drawRow(e,t,n=!1){let r=this.el.ownerDocument,{chart:i}=e,a=an(t.type).icon,o;a?(o=r.createElement(`span`),o.className=`vela-icon`,o.setAttribute(`aria-hidden`,`true`),o.innerHTML=a):o=h(`pen`,r);let s=this.row(o,on(t),t.visible,[{icon:t.locked?`lock`:`unlock`,title:t.locked?`Unlock`:`Lock`,engaged:t.locked,run:()=>{i.drawings.lock(t.id,!t.locked),this.refresh()}},{icon:t.visible?`eye`:`eye-off`,title:t.visible?`Hide`:`Show`,engaged:!t.visible,run:()=>{i.drawings.show(t.id,!t.visible),this.refresh()}},{icon:`trash`,title:`Remove`,run:()=>{i.drawings.remove(t.id),this.refresh()}}]);return s.dataset.rowKind=`drawing`,s.dataset.id=t.id,s.dataset.pane=t.paneId,s.dataset.drag=`1`,s.title=`Drag to restack, or onto another pane to move it there`,n&&s.classList.add(`vela-ot-subrow`),this.selectedDrawings.has(t.id)&&(s.dataset.selected=`1`),this.picked.has(t.id)&&(s.dataset.picked=`1`),s.addEventListener(`click`,e=>this.onDrawClick(e,t.id)),s}onDrawClick(e,t){e.ctrlKey||e.metaKey?this.picked.has(t)?this.picked.delete(t):this.picked.add(t):this.picked.has(t)&&this.picked.size===1?this.picked.clear():(this.picked.clear(),this.picked.add(t)),this.selectOnChart([...this.picked]),this.render()}selectOnChart(e){let t=this.chart;if(t?.drawings.supported){this.syncingSelection=!0;try{t.drawings.select(e)}finally{this.syncingSelection=!1}}}row(e,t,n,r,i){let a=this.el.ownerDocument,o=a.createElement(`div`);o.className=`vela-ot-row`,n||(o.dataset.hidden=`1`);let s=a.createElement(`span`);if(s.className=`vela-ot-name`,s.textContent=t,s.title=t,o.append(e,s),i){let e=a.createElement(`span`);e.className=`vela-ot-tag`,e.textContent=i,e.title=`Draws against its own price scale`,o.appendChild(e)}let c=a.createElement(`span`);c.className=`vela-ot-acts`;for(let e of r)c.appendChild(this.btn(e));return o.appendChild(c),o}btn(e){let t=this.el.ownerDocument,n=t.createElement(`button`);return n.className=`vela-ot-btn`,n.dataset.icon=e.icon,e.engaged&&(n.dataset.engaged=`1`),e.disabled&&(n.disabled=!0),n.title=e.title,n.appendChild(h(e.icon,t)),n.addEventListener(`click`,t=>{t.stopPropagation(),e.disabled||e.run()}),n}makeGroup(e){Cn(e,this.groups)&&(this.groupSeq+=1,this.groups=[...this.groups,{id:`grp-${this.groupSeq}`,name:wn(this.groups),ids:[...e]}],this.picked.clear(),this.render())}commitRename(e,t){if(this.renaming!==e)return;let n=t.trim();this.groups=this.groups.map(t=>t.id===e&&n!==``?{...t,name:n}:t),this.renaming=null,this.render()}removeGroup(e,t,n){let r=this.groups.find(e=>e.id===t);if(this.groups=this.groups.filter(e=>e.id!==t),this.collapsed.delete(t),n&&r){for(let e of r.ids)this.picked.delete(e);e.chart.drawings.removeMany(r.ids)}this.render()}setMembers(e,t,n){t.length!==0&&(e.chart.drawings.updateMany(t.map(e=>({id:e,patch:n}))),this.render())}cloneInto(e,t){let{chart:n}=e;if(!n.drawings.supported)return;let r=new Set(n.drawings.all().map(e=>e.id));n.drawings.clone(t);let i=n.drawings.all().find(e=>!r.has(e.id)),a=B(this.groups,t);a&&i&&(this.groups=On(this.groups,a.id,[i.id]))}onPointerDown(e){if(e.button!==0||this.drag)return;let t=e.target;if(t.closest(`.vela-ot-btn`))return;let n=t.closest(`.vela-ot-row[data-drag]`);if(!n||t.closest(`.vela-ot-rename`))return;let r=n.dataset.rowKind;if(r!==`price`&&r!==`indicator`&&r!==`drawing`&&r!==`group`)return;let i=this.el.ownerDocument.defaultView;if(!i)return;let a={kind:r,id:n.dataset.id??null,fromPane:n.dataset.pane??z,label:n.querySelector(`.vela-ot-name`)?.textContent??`object`,startX:e.clientX,startY:e.clientY,active:!1,ghost:null,drop:null,onMove:e=>this.onDragMove(e),onUp:()=>this.endDrag(!0),onCancel:()=>this.endDrag(!1)};this.drag=a,i.addEventListener(`pointermove`,a.onMove),i.addEventListener(`pointerup`,a.onUp),i.addEventListener(`pointercancel`,a.onCancel),e.preventDefault()}onDragMove(e){let t=this.drag;if(t){if(!t.active){if(Math.hypot(e.clientX-t.startX,e.clientY-t.startY)<Ln)return;this.beginDrag(t)}t.ghost&&(t.ghost.style.left=`${e.clientX+12}px`,t.ghost.style.top=`${e.clientY+8}px`),t.drop=this.resolveDrop(t,e.clientX,e.clientY),this.paintDropHint(t.drop)}}beginDrag(e){e.active=!0,this.body.dataset.dragging=`1`;let t=this.sourceRow(e);t&&(t.dataset.source=`1`);let n=this.el.ownerDocument.createElement(`div`);n.className=`vela-ot-ghost`,n.textContent=e.label,this.uiHost().appendChild(n),e.ghost=n}sourceRow(e){for(let t of this.body.querySelectorAll(`.vela-ot-row`))if(t.dataset.rowKind===e.kind&&(e.id===null||t.dataset.id===e.id))return t;return null}resolveDrop(e,t,n){let r=this.pass;if(!r)return null;if(e.kind===`indicator`)for(let e of this.body.querySelectorAll(`.vela-ot-gap`)){let r=e.getBoundingClientRect();if(n>=r.top-4&&n<=r.bottom+4&&t>=r.left&&t<=r.right)return{kind:`newPane`,before:e.dataset.before,after:e.dataset.after,el:e}}for(let t of this.body.querySelectorAll(`.vela-ot-pane`)){let i=t.getBoundingClientRect();if(n<i.top||n>i.bottom)continue;let a=t.dataset.pane??z;if(e.kind===`price`&&t.dataset.kind!==`price`)return null;if(e.kind===`indicator`&&!r.stackable)return a===e.fromPane?null:{kind:`merge`,paneId:a,el:t};let o=[...t.querySelector(`:scope > .vela-ot-stack`)?.children??[]];if(e.kind===`drawing`)for(let e of o){let t=e.dataset.group;if(t===void 0)continue;let r=e.getBoundingClientRect();if(n<r.top||n>r.bottom)continue;let i=[...e.querySelectorAll(`:scope > .vela-ot-subrow`)];return{kind:`intoGroup`,paneId:a,groupId:t,memberSlot:Rn(i,n),subrows:i,el:e}}let s=Rn(o,n);if((e.kind===`drawing`||e.kind===`group`)&&!r.interleave){let e=r.panes.find(e=>e.id===a),t=e?e.items.findIndex(e=>e.kind===`row`):-1;t>=0&&(s=Math.min(s,t))}return{kind:`slot`,paneId:a,slot:s,els:o,el:t}}return null}paintDropHint(e){for(let e of this.body.querySelectorAll(`[data-drop]`))delete e.dataset.drop;if(!e)return;if(e.kind===`newPane`){e.el.dataset.drop=`gap`;return}if(e.kind===`merge`){e.el.dataset.drop=`target`;return}if(e.kind===`intoGroup`){e.el.dataset.drop=`target`;let t=e.subrows[e.memberSlot];t?t.dataset.drop=`before`:e.subrows.length>0&&(e.subrows[e.subrows.length-1].dataset.drop=`after`);return}let t=e.els[e.slot];e.els.length===0?e.el.dataset.drop=`target`:t?t.dataset.drop=`before`:e.els[e.els.length-1].dataset.drop=`after`}endDrag(e){let t=this.drag;if(this.drag=null,!t)return;let n=this.el.ownerDocument.defaultView;if(n?.removeEventListener(`pointermove`,t.onMove),n?.removeEventListener(`pointerup`,t.onUp),n?.removeEventListener(`pointercancel`,t.onCancel),!t.active)return;t.ghost?.remove(),delete this.body.dataset.dragging;let r=this.sourceRow(t);r&&delete r.dataset.source,this.paintDropHint(null),e&&t.drop&&this.applyDrop(t,t.drop),this.refresh()}applyDrop(e,t){let n=this.pass;if(!n)return;let{chart:r}=n;switch(t.kind){case`merge`:e.id!==null&&t.paneId!==e.fromPane&&r.panes.moveIndicator(e.id,t.paneId===z?`price`:{pane:t.paneId});return;case`newPane`:{let i=n.panes.find(t=>t.id===e.fromPane);if(i!==void 0&&i.kind!==`price`&&un(i).length<=1&&(t.before===e.fromPane||t.after===e.fromPane))return;e.id!==null&&r.panes.moveIndicator(e.id,{newPane:{before:t.before,after:t.after}});return}case`slot`:case`intoGroup`:this.applySlotDrop(n,e,t);return}}applySlotDrop(e,t,n){let{chart:r}=e,i=e.panes.find(e=>e.id===n.paneId);if(!i||(t.kind===`drawing`||t.kind===`group`)&&!r.drawings.supported)return;let a=t.kind===`price`?[{kind:`price`}]:t.kind===`indicator`?[{kind:`indicator`,id:t.id}]:this.draggedDrawings(e,t).map(e=>({kind:`drawing`,id:e}));if(a.length===0||t.kind!==`price`&&t.id===null)return;t.kind===`indicator`&&t.fromPane!==n.paneId&&r.panes.moveIndicator(t.id,n.paneId===z?`price`:{pane:n.paneId});let o=mn(i),s=_n(o,a,n.kind===`intoGroup`?gn(i,n.groupId,n.memberSlot):hn(i,n.slot));t.kind===`drawing`&&(this.groups=n.kind===`intoGroup`?On(this.groups,n.groupId,[t.id]):Dn(this.groups,[t.id]));let c=new Map(r.drawings.all().map(e=>[e.id,e])),l=new Set(a.flatMap(e=>e.kind===`drawing`?[e.id]:[])),u=[...l].some(e=>c.get(e)?.paneId!==n.paneId);(!vn(o,s)||u)&&this.writeStack(e,n.paneId,s,l)}writeStack(e,t,n,r){let{chart:i}=e,a=new Map(i.drawings.all().map(e=>[e.id,e])),o=yn(n);if(e.stackable){o.candleZ!==null&&i.renderer.set(`candleZOrder`,o.candleZ);for(let e of o.series)i.renderer.set(`seriesOrder`,{id:e.id,z:e.z})}o.drawings.length>0&&i.drawings.updateMany(o.drawings.map(({id:e,z:n})=>({id:e,patch:{zIndex:n,...r.has(e)&&a.get(e)?.paneId!==t?{paneId:t}:{}}})))}restackGroup(e,t,n){let r=new Set(t.ids),i=e.chart.drawings.all().filter(e=>r.has(e.id)),a=i[0]?.paneId??z,o=e.panes.find(e=>e.id===a)??e.panes.find(e=>e.kind===`price`);if(!o||i.length===0)return;let s=i.map(e=>({kind:`drawing`,id:e.id})).reverse(),c=mn(o),l=_n(c,s,n===`front`?0:c.length);vn(c,l)||(this.writeStack(e,o.id,l,new Set),this.refresh())}draggedDrawings(e,t){if(t.id===null)return[];if(t.kind!==`group`)return[t.id];let n=this.groups.find(e=>e.id===t.id);if(!n)return[];let r=new Set(n.ids);return e.chart.drawings.all().filter(e=>r.has(e.id)).map(e=>e.id).reverse()}onContextMenu(e){let t=this.pass;if(!t)return;let n=e.target.closest(`.vela-ot-row`);if(!n)return;e.preventDefault();let r=new zn,i=this.itemsForRow(r,t,n);if(i.length===0)return;this.menuActions=r.actions;let a=this.ensureMenu();a.setItems(i),a.openAt(e.clientX,e.clientY)}itemsForRow(e,t,n){let r=n.dataset.pane??z,i=n.dataset.id;switch(n.dataset.rowKind){case`price`:return this.priceMenu(e,t);case`indicator`:{let n=i===void 0?void 0:this.findIndicatorRow(t,i);return n?this.indicatorMenu(e,t,n,r):[]}case`drawing`:{let n=i===void 0?void 0:t.chart.drawings.all().find(e=>e.id===i);return n?this.drawingMenu(e,t,n):[]}case`group`:{let n=i===void 0?void 0:this.groups.find(e=>e.id===i);return n?this.groupMenu(e,t,n):[]}default:return[]}}uiHost(){return this.el.closest(`.vela-ui`)??this.el}ensureMenu(){return this.menu||=new r({host:this.uiHost(),items:[],onSelect:e=>this.menuActions.get(e)?.()}),this.menu}findIndicatorRow(e,t){for(let n of e.panes)for(let e of un(n))if(e.kind===`indicator`&&e.id===t)return e}priceMenu(e,t){let{chart:n}=t,r=n.renderer.get(`candleVisible`)!==!1,i=[e.entry(r?`Hide`:`Show`,r?`eye-off`:`eye`,()=>{n.renderer.set(`candleVisible`,!r),this.refresh()})];return t.stackable&&(i.push(e.entry(`Bring to front`,`arrow-up`,()=>{n.renderer.set(`candleZOrder`,this.stackBounds(t,z).top+1),this.refresh()},!0)),i.push(e.entry(`Send to back`,`arrow-down`,()=>{n.renderer.set(`candleZOrder`,this.stackBounds(t,z).bottom-1),this.refresh()}))),i}stackBounds(e,t){let{chart:n}=e,r=e.interleave?n.drawings.all().filter(e=>e.paneId===t).map(e=>e.zIndex):[];return bn(n.renderer.get(`seriesOrder`)??[],Number(n.renderer.get(`candleZOrder`))||0,r)}indicatorMenu(e,t,n,r){let{chart:i}=t,a=t.handle(n.id),o=[e.entry(n.visible?`Hide`:`Show`,n.visible?`eye-off`:`eye`,()=>{a?.setVisible(!n.visible),this.refresh()})];if(i.renderer.supportsIndicatorSettings&&o.push(e.entry(`Indicator settings`,`gear`,()=>i.renderer.openIndicatorSettings(n.id))),i.panes.supported){let i=this.moveItems(e,t,n.id,r);i.length>0&&o.push(e.submenu(`Move to`,`move-vertical`,i))}return t.stackable&&(o.push(e.entry(`Bring to front`,`arrow-up`,()=>i.renderer.set(`seriesOrder`,{id:n.id,z:this.stackBounds(t,r).top+1}),!0)),o.push(e.entry(`Send to back`,`arrow-down`,()=>i.renderer.set(`seriesOrder`,{id:n.id,z:this.stackBounds(t,r).bottom-1})))),o.push(e.entry(`Remove`,`trash`,()=>{a?.remove(),this.refresh()},!0)),o}moveItems(e,t,n,r){let{chart:i}=t,a=[];for(let o of t.panes)o.id!==r&&a.push(e.entry(o.label,void 0,()=>i.panes.moveIndicator(n,o.kind===`price`?`price`:{pane:o.id})));let o=t.panes.find(e=>e.id===r);return o!==void 0&&o.kind!==`price`&&un(o).length<=1||(r!==z&&a.push(e.entry(`New pane above`,void 0,()=>i.panes.moveIndicator(n,{newPane:{before:r}}))),a.push(e.entry(`New pane below`,void 0,()=>i.panes.moveIndicator(n,{newPane:{after:r}})))),a}drawingMenu(e,t,n){let{chart:r}=t,i=[e.entry(n.visible?`Hide`:`Show`,n.visible?`eye-off`:`eye`,()=>{r.drawings.show(n.id,!n.visible),this.refresh()}),e.entry(n.locked?`Unlock`:`Lock`,n.locked?`unlock`:`lock`,()=>{r.drawings.lock(n.id,!n.locked),this.refresh()}),e.entry(`Duplicate`,`clone`,()=>{this.cloneInto(t,n.id),this.render()}),e.entry(`Bring to front`,`arrow-up`,()=>r.drawings.bringToFront(n.id),!0),e.entry(`Send to back`,`arrow-down`,()=>r.drawings.sendToBack(n.id))];return i.push(...this.groupingItems(e,n.id)),i.push(e.entry(`Remove`,`trash`,()=>r.drawings.remove(n.id),!0)),i}groupingItems(e,t){let n=[],r=B(this.groups,t),i=this.picked.has(t)&&this.picked.size>1?[...this.picked]:null;i&&Cn(i,this.groups)?n.push(e.entry(`Group selection (${i.length})`,`group`,()=>this.makeGroup(i),!0)):!i&&r===null&&n.push(e.entry(`New group`,`group`,()=>this.makeGroup([t]),!0));let a=this.groups.filter(e=>e.id!==r?.id);return!i&&a.length>0&&n.push(e.submenu(r===null?`Add to group`:`Move to group`,`folder-plus`,a.map(n=>e.entry(n.name,void 0,()=>{this.groups=On(this.groups,n.id,[t]),this.render()})),n.length===0)),r!==null&&n.push(e.entry(`Remove from ${r.name}`,`folder-minus`,()=>{this.groups=Dn(this.groups,[t]),this.render()},n.length===0)),n}groupMenu(e,t,n){let r=[...n.ids],i=t.chart.drawings.all().filter(e=>n.ids.includes(e.id)),{allHidden:a,allLocked:o}=Sn(i),s=[e.entry(`Rename…`,`pen`,()=>{this.renaming=n.id,this.render()}),e.entry(a?`Show all`:`Hide all`,a?`eye`:`eye-off`,()=>this.setMembers(t,r,{visible:a}),!0),e.entry(o?`Unlock all`:`Lock all`,o?`unlock`:`lock`,()=>this.setMembers(t,r,{locked:!o})),e.entry(`Select all`,`group`,()=>{this.picked=new Set(r),this.selectOnChart(r),this.render()})];return i.length>0&&(s.push(e.entry(`Bring all to front`,`arrow-up`,()=>this.restackGroup(t,n,`front`))),s.push(e.entry(`Send all to back`,`arrow-down`,()=>this.restackGroup(t,n,`back`)))),s.push(e.entry(`Ungroup`,`ungroup`,()=>this.removeGroup(t,n.id,!1),!0)),s.push(e.entry(`Remove all`,`trash`,()=>this.removeGroup(t,n.id,!0))),s}prune(e){let t=new Set((e.drawings.supported?e.drawings.all():[]).map(e=>e.id));for(let e of[...this.picked])t.has(e)||this.picked.delete(e);if(this.groups.length===0){this.renaming=null;return}this.groups=En(this.groups,t),this.renaming!==null&&!this.groups.some(e=>e.id===this.renaming)&&(this.renaming=null)}},Vn=`vela-widget-datawindow`,Hn=`
.vela-dw-group {
    padding: 10px 8px 4px;
    margin-top: 4px;
    border-top: 1px solid var(--vela-border);
    color: var(--vela-fg-muted);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}
.vela-dw-group:first-child { border-top: none; margin-top: 0; padding-top: 8px; }
/* The readout is DATA, not chrome: selectable (an exception to the UI-wide
   user-select:none) so values can be copied out. The panel header stays chrome. */
.vela-dw-group, .vela-dw-row { user-select: text; -webkit-user-select: text; cursor: text; }
.vela-dw-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 4px 8px;
    border-radius: 4px;
}
.vela-dw-row:hover { background: var(--vela-hover); }
.vela-dw-label { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--vela-fg-bright); }
.vela-dw-value { margin-left: auto; font-variant-numeric: tabular-nums; white-space: nowrap; }
.vela-dw-empty { padding: 20px 10px; text-align: center; color: var(--vela-fg-muted); font-size: 12px; }
`,Un=[`bar`,`context:changed`,`indicator:added`,`indicator:removed`,`indicator:visibility`,`indicator:moved`,`pane:changed`,`market:changed`,`history:complete`],Wn=`—`;function Gn(e){let t=[];(e.date||e.time)&&t.push({title:`Time`,lines:[{label:`Date`,value:e.date||Wn,color:``},{label:`Time`,value:e.time||Wn,color:``}]});let{ohlc:n}=e;if(n){let e=n.up?`var(--vela-up)`:`var(--vela-down)`,r=[{label:`Open`,value:n.o,color:e},{label:`High`,value:n.h,color:e},{label:`Low`,value:n.l,color:e},{label:`Close`,value:n.c,color:e}];n.vol!==void 0&&r.push({label:`Volume`,value:n.vol,color:e}),t.push({title:`Price`,lines:r})}for(let n of e.groups)t.push({title:n.name,lines:n.rows.map(e=>({label:e.label,value:e.value,color:e.color}))});return t}var Kn=class extends Ce{constructor(e){super(e,`Data window`,`vela-dw`),this.chart=null,this.unsubs=[],y(Vn,Hn,e.ownerDocument)}toggle(e=this.el.hidden){super.toggle(e),e&&this.refresh()}onChart(e){this.detach(),this.chart=e;for(let t of Un)this.unsubs.push(e.on(t,()=>this.refresh()));this.unsubs.push(e.renderer.onCrosshairMove(()=>this.refresh())),this.refresh()}destroy(){this.detach(),super.destroy()}detach(){for(let e of this.unsubs)e();this.unsubs=[],this.chart=null}refresh(){if(this.el.hidden||!this.chart)return;let e=this.el.ownerDocument,t=this.chart.renderer.dataWindowReadout();this.body.replaceChildren();let n=t?Gn(t):[];if(n.length===0){let n=e.createElement(`div`);n.className=`vela-dw-empty`,n.textContent=t?`No data`:`This renderer provides no data readout.`,this.body.appendChild(n);return}for(let t of n){let n=e.createElement(`div`);n.className=`vela-dw-group`,n.textContent=t.title,this.body.appendChild(n);for(let n of t.lines){let t=e.createElement(`div`);t.className=`vela-dw-row`;let r=e.createElement(`span`);r.className=`vela-dw-label`,r.textContent=n.label;let i=e.createElement(`span`);i.className=`vela-dw-value`,i.textContent=n.value,n.color&&(i.style.color=n.color),t.append(r,i),this.body.appendChild(t)}}}},qn=class{constructor(e,t){this.host=e,this.deps=t,this.entries=[],this.widths=new Map,this.pinned=new Set,this.pendingOpen=null,this.chart=null}addBuiltIn(e){this.add({...e,contributed:!1})}refresh(){let e=this.openId;for(let e of[...this.entries])e.contributed&&this.drop(e);for(let e of Le()){let t=new Ce(this.host,e.title,`vela-panel-${e.id}`,{width:e.width,resizable:e.resizable,minWidth:e.minWidth,maxWidth:e.maxWidth,overlay:e.overlay}),n={id:e.id,title:e.title,icon:e.icon,order:e.order??100,panel:t,contributed:!0};try{n.handle=e.mount(this.deps.context(),t.content,{slot:t.headerSlot,setTitle:e=>t.setTitle(e)})??void 0,this.chart&&n.handle?.onChart?.(this.chart)}catch(t){console.warn(`[vela] side panel "${e.id}" failed to mount`,t)}this.add(n)}e&&!this.openId&&this.toggle(e,!0),this.publish()}onChart(e){this.chart=e;for(let t of this.entries)t.onChart&&t.onChart(e),t.handle?.onChart?.(e)}toggle(e,t){this.entries.find(t=>t.id===e)?.panel.toggle(t)}get openId(){return this.entries.find(e=>e.panel.open)?.id??null}list(){return this.entries.map(e=>({id:e.id,title:e.title,icon:e.icon}))}getState(){let e={},t=this.openId;return t&&(e.open=t),this.widths.size>0&&(e.widths=Object.fromEntries(this.widths)),this.pinned.size>0&&(e.pinned=[...this.pinned]),e.open||e.widths||e.pinned?e:null}applyState(e){if(e){if(e.widths)for(let[t,n]of Object.entries(e.widths))this.widths.set(t,n),this.entries.find(e=>e.id===t)?.panel.setWidth(n);this.pinned=new Set(e.pinned??[]);for(let e of this.entries)e.panel.setOverlay(!this.pinned.has(e.id));for(let t of this.entries)t.panel.toggle(t.id===e.open);this.pendingOpen=e.open&&!this.entries.some(t=>t.id===e.open)?e.open:null}}destroy(){for(let e of[...this.entries])e.contributed&&this.drop(e);this.entries.length=0}add(e){this.entries.push(e),this.entries.sort((e,t)=>e.order-t.order);let t=this.widths.get(e.id);t!==void 0&&e.panel.setWidth(t),this.pinned.has(e.id)&&e.panel.setOverlay(!1),e.panel.onOpenChange=t=>{if(t){for(let t of this.entries)t!==e&&t.panel.toggle(!1);this.pendingOpen=null}this.deps.chrome.setPanelActive(e.id,t),t&&e.handle?.onOpen?.(),this.deps.changed?.()},e.panel.onWidthChange=t=>{this.widths.set(e.id,t),this.deps.changed?.()},e.panel.onPlacementChange=t=>{t?this.pinned.delete(e.id):this.pinned.add(e.id),this.deps.changed?.()},this.pendingOpen===e.id&&e.panel.toggle(!0),e.contributed||this.publish()}drop(e){let t=this.entries.indexOf(e);t>=0&&this.entries.splice(t,1);try{e.handle?.destroy?.()}catch(t){console.warn(`[vela] side panel "${e.id}" failed to release`,t)}e.panel.destroy()}publish(){let e=this.entries.map(e=>({id:e.id,title:e.title,icon:e.icon}));this.deps.chrome.setPanelButtons(e,e=>this.toggle(e));for(let e of this.entries)this.deps.chrome.setPanelActive(e.id,e.panel.open)}};function Jn(e){let t=new Set,n=[];for(let r of e){let e=`${(r.prefix??r.provider??``).toLowerCase()}:${r.ticker.toUpperCase()}`;t.has(e)||(t.add(e),n.push(r))}return n}function Yn(e){let t=new Set,n=[];for(let r of e)o(r)?(t.add(E(r)),n.push(r)):(r.group==null||!t.has(E(r)))&&n.push(r);return n}var Xn=[`BTCUSDT`,`ETHUSDT`,`SOLUSDT`,`BNBUSDT`,`XRPUSDT`,`DOGEUSDT`,`ADAUSDT`,`LINKUSDT`];function Zn(e,t){let n=e.match(/^\s*([^\s:]+)\s*[:\s]\s*(.*)$/);if(n){let e=n[1].toLowerCase(),r=t.includes(e)?e:Qn(t.filter(t=>t.startsWith(e)));if(r)return{scope:r,term:n[2].trim()}}return{scope:null,term:e.trim()}}function Qn(e){return e.length===1?e[0]:null}var $n=e=>e.prefix??e.provider;function er(e,t,n=100,r=Xn){let{scope:i,term:a}=Zn(t,[...new Set(e.flatMap(e=>[$n(e)?.toLowerCase(),e.provider?.toLowerCase()]).filter(e=>!!e))]),o=i?e.filter(e=>$n(e)?.toLowerCase()===i||e.provider?.toLowerCase()===i):e,s=a.toUpperCase();if(!s){if(i)return[...o].sort((e,t)=>e.ticker.localeCompare(t.ticker)).slice(0,n);if(r===!1)return o.slice(0,n);let e=new Map(o.map(e=>[e.ticker.toUpperCase(),e])),t=r.map(t=>e.get(t)).filter(e=>e!==void 0),a=o.filter(e=>!r.includes(e.ticker.toUpperCase()));return[...t,...a].slice(0,n)}let c=a.toLowerCase(),l=[],u=[],d=[],f=[];for(let e of o){let t=e.ticker.toUpperCase();if(t.startsWith(s)?l.push(e):t.includes(s)?u.push(e):(e.description??``).toUpperCase().includes(s)?d.push(e):!i&&($n(e)?.toLowerCase().includes(c)||e.provider?.toLowerCase().includes(c))&&f.push(e),l.length>=n)break}return[...l,...u,...d,...f].slice(0,n)}var tr=`vela-widget-symbolpicker`,nr=`
/* The dialog body is flush (a flex column): search + market tabs are a fixed head
   and the result list is the ONLY scroller, in both layouts. A sticky head over a
   scrolling padded body is not an option — browsers pin sticky boxes to the
   scroller's content box, so the head lands one padding below the top and covers
   the first row. */
.vela-sp-head { flex: none; padding: var(--vela-space-4) var(--vela-space-4) 0; }
.vela-sp-searchrow {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding: 0 12px;
    background: var(--vela-surface-elev);
    border: 1px solid var(--vela-border);
    border-radius: 8px;
}
.vela-sp-searchrow:focus-within { border-color: var(--vela-border-strong); }
.vela-sp-searchrow .vela-icon { color: var(--vela-fg-muted); }
.vela-sp-input {
    flex: 1;
    background: transparent;
    color: var(--vela-fg);
    border: none;
    font-size: 14px;
    outline: none;
    text-transform: uppercase;
}
.vela-sp-input::placeholder { text-transform: none; }
.vela-sp-tabs { display: flex; gap: 14px; margin: 12px 2px 0; border-bottom: 1px solid var(--vela-border); padding-bottom: 8px; }
/* Mobile (fullscreen dialog): the asset-class strip scrolls sideways instead of
   overflowing the body, and the result list stops capping itself — it fills the
   rest of the screen. The bottom inset (+ safe area) is the kit's: every mobile
   dialog body carries it, flush or not, so the list adds none of its own. */
[data-layout='mobile'] .vela-sp-tabs { overflow-x: auto; scrollbar-width: none; gap: 6px; }
[data-layout='mobile'] .vela-sp-tabs::-webkit-scrollbar { display: none; }
[data-layout='mobile'] .vela-sp-tab { flex: none; padding: 7px 10px; }
[data-layout='mobile'] .vela-sp-list { flex: 1 1 auto; max-height: none; margin-bottom: 0; }
.vela-sp-tab {
    all: unset;
    padding: 3px 10px;
    border-radius: 5px;
    cursor: pointer;
    color: var(--vela-fg-muted);
    font-size: 13px;
    font-weight: 600;
}
.vela-sp-tab:hover { color: var(--vela-fg); }
.vela-sp-tab[data-active] { background: var(--vela-selected-bg); color: var(--vela-selected-fg); }
.vela-sp-list {
    min-height: 0;
    margin: var(--vela-space-2) var(--vela-space-4) var(--vela-space-4);
    max-height: 46vh;
    overflow: auto;
}
.vela-sp-list::-webkit-scrollbar { width: 8px; }
.vela-sp-list::-webkit-scrollbar-thumb {
    background: var(--vela-scroll);
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: padding-box;
}
.vela-sp-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 7px 10px;
    border-radius: 8px;
    cursor: pointer;
}
.vela-sp-row:hover, .vela-sp-row[data-highlighted] { background: var(--vela-hover); }
.vela-sp-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--vela-fg-on-fill);
    font-size: var(--vela-font-size-md);
    font-weight: 700;
}
.vela-sp-main { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
.vela-sp-ticker { font-weight: 700; color: var(--vela-fg-bright); font-size: 14px; text-transform: uppercase; }
.vela-sp-desc { color: var(--vela-fg-muted); font-size: 11px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vela-sp-badge {
    flex: none;
    padding: 2px 8px;
    border-radius: 4px;
    background: var(--vela-surface-elev);
    border: 1px solid var(--vela-border);
    color: var(--vela-fg-muted);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}
/* Provider brand marks — fixed by the venue, deliberately outside the theme palette. */
.vela-sp-badge[data-p='binance'] { color: #f0b90b; } /* palette-exempt: venue brand mark */
.vela-sp-badge[data-p='hyperliquid'] { color: #50d2c1; } /* palette-exempt: venue brand mark */
.vela-sp-empty { padding: var(--vela-space-3); color: var(--vela-fg-muted); text-align: center; }
/* Grouped listings (futures roots): the chevron unfolds members inline, indented. */
.vela-sp-expander {
    all: unset;
    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 5px;
    cursor: pointer;
    color: var(--vela-fg-muted);
}
.vela-sp-expander:hover { background: var(--vela-surface-elev); color: var(--vela-fg); }
.vela-sp-row[data-member] { padding-left: 34px; }
`,rr=100,ir=class{constructor(e){this.opts=e,this.source=()=>[],this.rows=[],this.highlighted=0,this.seed=``,this.activeTab=`All`,this.visible=rr,this.exhausted=!1,this.expanded=new Set,this.ranked=null,this.ranking=!1;let t=(e.host??document.body).ownerDocument;y(tr,nr,t),this.input=t.createElement(`input`),this.input.className=`vela-sp-input`,this.input.placeholder=`Search symbol…`,this.input.setAttribute(`spellcheck`,`false`);let n=t.createElement(`div`);n.className=`vela-sp-searchrow`,n.append(h(`search`,t),this.input),this.tabs=t.createElement(`div`),this.tabs.className=`vela-sp-tabs`;let r=t.createElement(`div`);r.className=`vela-sp-head`;for(let e of[`All`,`Stocks`,`ETFs`,`Crypto`,`Futures`,`Forex`,`Commodities`]){let n=t.createElement(`button`);n.className=`vela-sp-tab`,n.textContent=e,e===this.activeTab&&(n.dataset.active=`1`),n.addEventListener(`click`,()=>{this.activeTab=e;for(let e of this.tabs.children)delete e.dataset.active;n.dataset.active=`1`,this.refresh()}),this.tabs.appendChild(n)}r.append(n,this.tabs),this.list=t.createElement(`div`),this.list.className=`vela-sp-list`,this.list.addEventListener(`scroll`,()=>{this.exhausted||this.list.scrollTop+this.list.clientHeight<this.list.scrollHeight-200||(this.visible+=rr,this.grow())}),this.dialog=new D({title:`Symbol Search`,host:e.host,closeOnInteractOutside:!0,flush:!0,content:e=>e.append(r,this.list),onOpenChange:t=>{t?(this.input.value=this.seed.toUpperCase(),this.seed=``,this.refresh(),setTimeout(()=>{this.input.focus(),this.input.setSelectionRange(this.input.value.length,this.input.value.length)},0)):this.input.blur(),e.onOpenChange?.(t)}}),this.input.addEventListener(`input`,()=>{let e=this.input.value.toUpperCase();if(this.input.value!==e){let t=this.input.selectionStart,n=this.input.selectionEnd;this.input.value=e,t!=null&&n!=null&&this.input.setSelectionRange(t,n)}this.refresh()}),this.input.addEventListener(`keydown`,e=>{if(e.key===`ArrowDown`)this.moveHighlight(1);else if(e.key===`ArrowUp`)this.moveHighlight(-1);else if(e.key===`Enter`){let e=this.rows[this.highlighted];e&&this.pick(e);return}else return;e.preventDefault()}),this.list.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`.vela-sp-row`);if(!n)return;let r=this.rows[Number(n.dataset.i)];r&&(t.closest(`.vela-sp-expander`)?this.toggleExpand(r):this.pick(r))})}setSource(e){this.source=e}open(e=``){this.seed=e,this.dialog.show()}get isOpen(){return this.dialog.open}type(e){if(!this.isOpen){this.open(e);return}this.input.value=(this.input.value+e).toUpperCase(),this.refresh()}close(){this.dialog.hide()}destroy(){this.dialog.destroy()}pick(e){let t=o(e)?ue(this.pool(),e)??e:e;this.select(t.ticker,t.prefix??t.provider,this.opts.onSelect)}toggleExpand(e){let t=E(e);this.expanded.delete(t)||this.expanded.add(t);let n=this.list.scrollTop,r=this.rows[this.highlighted];this.rows=this.computeRows(),this.list.replaceChildren(),this.rows.forEach((e,t)=>this.list.appendChild(this.rowEl(e,t)));let i=r?this.rows.indexOf(r):-1;this.highlighted=i>=0?i:Math.min(this.highlighted,Math.max(0,this.rows.length-1)),this.renderHighlight(),this.list.scrollTop=n}select(e,t,n){this.close(),n(t?`${t}:${e}`:e)}moveHighlight(e){this.rows.length&&(this.highlighted=Math.min(this.rows.length-1,Math.max(0,this.highlighted+e)),this.renderHighlight())}renderHighlight(){[...this.list.children].forEach((e,t)=>{t===this.highlighted?(e.dataset.highlighted=`1`,e.scrollIntoView({block:`nearest`})):delete e.dataset.highlighted})}pool(){let e=this.source(),t=we();if(!t)return e;let n=`${e.length}:${e[0]?.ticker??``}:${e[e.length-1]?.ticker??``}`;return this.ranked?.key!==n&&!this.ranking&&(this.ranking=!0,Promise.resolve([...e]).then(e=>t(e)).then(e=>{this.ranked={key:n,result:Jn(e)}}).catch(t=>{console.warn(`[vela] symbol ranking failed — pool order kept:`,t),this.ranked={key:n,result:[...e]}}).finally(()=>{this.ranking=!1,this.refresh()})),this.ranked?.result??e}computeRows(){let e={Crypto:[`crypto`],Stocks:[`stock`],ETFs:[`etf`],Futures:[`futures`,`root`],Forex:[`forex`],Commodities:[`commodity`]},t=this.pool(),n=er(this.activeTab===`All`?t:t.filter(t=>e[this.activeTab]?.includes((t.type??``).toLowerCase())||this.activeTab===`Crypto`&&(t.type??``).toLowerCase()===`futures`),this.input.value,this.visible,!we()&&Xn);this.exhausted=n.length<this.visible;let r=Yn(n);if(!this.expanded.size)return r;let i=e=>`${(e.prefix??e.provider??``).toLowerCase()}:${e.ticker.toUpperCase()}`,a=new Set(r.map(i)),s=[];for(let e of r)if(s.push(e),o(e)&&this.expanded.has(E(e)))for(let n of de(t,e))a.has(i(n))||(a.add(i(n)),s.push(n));return s}refresh(){let e=this.list.ownerDocument;if(this.visible=rr,this.rows=this.computeRows(),this.highlighted=0,this.list.replaceChildren(),!this.rows.length){let t=e.createElement(`div`);t.className=`vela-sp-empty`,t.textContent=this.input.value?`No symbols match.`:`No symbols indexed (provider still loading?).`,this.list.appendChild(t);return}this.rows.forEach((e,t)=>this.list.appendChild(this.rowEl(e,t))),this.renderHighlight()}grow(){let e=this.rows.length;this.rows=this.computeRows(),this.rows.slice(e).forEach((t,n)=>this.list.appendChild(this.rowEl(t,e+n)))}rowEl(e,t){let n=this.list.ownerDocument,r=n.createElement(`div`);r.className=`vela-sp-row`,r.dataset.i=String(t),r.dataset.ticker=e.ticker;let i=e.prefix??e.provider;i&&(r.dataset.venue=i);let a=R(n,et(e),e.ticker,`vela-sp-avatar`,this.opts.iconFor?.(e)),s=n.createElement(`span`);s.className=`vela-sp-main`;let c=n.createElement(`span`);c.className=`vela-sp-ticker`,c.textContent=e.ticker;let l=n.createElement(`span`);if(l.className=`vela-sp-desc`,l.textContent=e.description??e.type??``,s.append(c,l),r.append(a,s),o(e)){r.dataset.group=`1`;let t=n.createElement(`button`);t.className=`vela-sp-expander`,t.setAttribute(`aria-label`,`Show contracts`),t.appendChild(h(this.expanded.has(E(e))?`chevron-down`:`chevron-right`,n)),r.appendChild(t)}else e.group!=null&&this.expanded.has(E(e))&&(r.dataset.member=`1`);if(i){let t=n.createElement(`span`);t.className=`vela-sp-badge`,t.dataset.p=e.provider??i,t.textContent=i,r.appendChild(t)}return r}},ar=`vela-widget-indpicker`,or=`
.vela-ip-searchrow {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding: 0 12px;
    margin-bottom: var(--vela-space-2);
    background: var(--vela-surface-elev);
    border: 1px solid var(--vela-border);
    border-radius: 8px;
}
.vela-ip-searchrow:focus-within { border-color: var(--vela-border-strong); }
.vela-ip-searchrow .vela-icon { color: var(--vela-fg-muted); }
.vela-ip-search { flex: 1; background: transparent; color: var(--vela-fg); border: none; font-size: 14px; outline: none; }
.vela-ip-list { max-height: 50vh; overflow: auto; min-width: 380px; }
/* Mobile (fullscreen dialog): no width floor — 380px would overflow a phone —
   and no height cap; the fullscreen body owns the scrolling. */
[data-layout='mobile'] .vela-ip-list { min-width: 0; max-height: none; }
.vela-ip-list::-webkit-scrollbar { width: 8px; }
.vela-ip-list::-webkit-scrollbar-thumb { background: var(--vela-scroll); border-radius: 4px; border: 2px solid transparent; background-clip: padding-box; }
.vela-ip-group {
    color: var(--vela-fg-muted);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 10px 4px 4px;
    border-bottom: 1px solid var(--vela-border);
    margin-bottom: 2px;
}
.vela-ip-oncard {
    background: var(--vela-surface-elev);
    border: 1px solid var(--vela-border);
    border-radius: 8px;
    padding: 6px 8px;
    margin-bottom: var(--vela-space-2);
}
.vela-ip-oncard .vela-ip-group { border-bottom: none; padding-top: 2px; }
.vela-ip-row {
    display: flex;
    align-items: center;
    gap: var(--vela-space-2);
    padding: 7px 6px;
    border-radius: var(--vela-radius-sm);
    cursor: pointer;
}
.vela-ip-row:hover { background: var(--vela-hover); }
.vela-ip-name { flex: 1; font-weight: 600; color: var(--vela-fg-bright); font-size: 13px; }
.vela-ip-badge {
    flex: none;
    padding: 1px 7px;
    border-radius: var(--vela-radius-sm);
    background: var(--vela-surface-elev);
    border: 1px solid var(--vela-border);
    color: var(--vela-accent);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}
.vela-ip-trash {
    all: unset;
    cursor: pointer;
    color: var(--vela-fg-muted);
    padding: 2px 4px;
    border-radius: var(--vela-radius-sm);
    font-size: var(--vela-font-size-md);
}
.vela-ip-trash:hover { color: var(--vela-down); background: var(--vela-hover); }
.vela-ip-empty { padding: var(--vela-space-3); color: var(--vela-fg-muted); text-align: center; }
`,sr=class{constructor(e){this.isOpen=!1,this.opts=e;let t=(e.host??document.body).ownerDocument;y(ar,or,t),this.search=t.createElement(`input`),this.search.className=`vela-ip-search`,this.search.placeholder=`Search…`,this.search.spellcheck=!1,this.search.addEventListener(`input`,()=>this.refresh());let n=t.createElement(`div`);n.className=`vela-ip-searchrow`,n.append(h(`search`,t),this.search),this.list=t.createElement(`div`),this.list.className=`vela-ip-list`,this.dialog=new D({title:`Indicators`,host:e.host,draggable:!0,closeOnInteractOutside:!0,content:e=>e.append(n,this.list),onOpenChange:t=>{this.isOpen=t,t&&(this.search.value=``,this.refresh(),this.search.closest(`[data-layout="mobile"]`)||setTimeout(()=>this.search.focus(),0)),e.onOpenChange?.(t)}}),this.list.addEventListener(`click`,e=>{let t=e.target.closest(`.vela-ip-trash`),n=e.target.closest(`.vela-ip-row`);n&&(t?this.opts.onRemove(Number(n.dataset.instance)):n.dataset.library!==void 0&&this.opts.onAdd(Number(n.dataset.library)),this.refresh())})}open(){this.dialog.show()}sync(){this.isOpen&&this.refresh()}close(){this.dialog.hide()}destroy(){this.dialog.destroy()}refresh(){let e=this.list.ownerDocument,t=this.search.value.trim().toLowerCase(),n=this.opts.library(),r=this.opts.onChart();this.list.replaceChildren();let i=e=>!t||e.name.toLowerCase().includes(t),a=(t,n)=>{let r=e.createElement(`div`);r.className=`vela-ip-row`,n.library!==void 0&&(r.dataset.library=String(n.library)),n.instance!==void 0&&(r.dataset.instance=String(n.instance)),t.native&&(r.dataset.native=`1`);let i=e.createElement(`span`);if(i.className=`vela-ip-name`,i.textContent=t.name,r.appendChild(i),t.beta){let t=e.createElement(`span`);t.className=`vela-ip-badge`,t.textContent=`beta`,r.appendChild(t)}if(n.instance!==void 0){let n=t.native?`vela`:t.language;if(n){let t=e.createElement(`span`);t.className=`vela-ip-badge`,t.textContent=n,r.appendChild(t)}let i=e.createElement(`button`);i.className=`vela-ip-trash`,i.appendChild(h(`trash`,e)),i.title=`Remove from chart`,r.appendChild(i)}return r},o=r.map((e,t)=>[e,t]).filter(([e])=>i(e));if(o.length){let t=e.createElement(`div`);t.className=`vela-ip-oncard`;let n=e.createElement(`div`);n.className=`vela-ip-group`,n.textContent=`On chart \xB7 ${o.length}`,t.appendChild(n);for(let[e,n]of o)t.appendChild(a(e,{instance:n}));this.list.appendChild(t)}let s=new Map;n.forEach((e,t)=>{if(!i(e))return;let n=e.category??`General`,r=s.get(n)??[];r.push([e,t]),s.set(n,r)});for(let[t,n]of s){let r=e.createElement(`div`);r.className=`vela-ip-group`,r.textContent=t,this.list.appendChild(r);for(let[e,t]of n)this.list.appendChild(a(e,{library:t}))}if(!o.length&&s.size===0){let t=e.createElement(`div`);t.className=`vela-ip-empty`,t.textContent=n.length?`No indicators match.`:`No indicators in the manifest.`,this.list.appendChild(t)}}},cr=`vela-widget-tfquick`,lr=`
.vela-tq-input {
    display: block;
    margin: 0 auto;
    width: 220px;
    box-sizing: border-box;
    height: 40px;
    background: var(--vela-surface-elev);
    color: var(--vela-fg);
    border: 1px solid var(--vela-border);
    border-radius: 8px;
    padding: 0 12px;
    font-size: 18px;
    text-align: center;
    outline: none;
}
.vela-tq-input:focus { border-color: var(--vela-border-strong); }
.vela-tq-hint { margin-top: var(--vela-space-2); text-align: center; color: var(--vela-fg-muted); min-height: 1.2em; }
.vela-tq-hint[data-invalid] { color: var(--vela-danger); }
`,ur=class{constructor(e){let t=(e.host??document.body).ownerDocument;y(cr,lr,t),this.input=t.createElement(`input`),this.input.className=`vela-tq-input`,this.input.setAttribute(`spellcheck`,`false`),this.hint=t.createElement(`div`),this.hint.className=`vela-tq-hint`,this.dialog=new D({title:`Change timeframe`,host:e.host,draggable:!0,closeOnInteractOutside:!0,content:e=>e.append(this.input,this.hint),onOpenChange:t=>e.onOpenChange?.(t)}),this.input.addEventListener(`input`,()=>this.renderHint()),this.input.addEventListener(`keydown`,t=>{if(t.key!==`Enter`)return;let n=Rt(this.input.value);n.valid&&n.canonical!==void 0&&(this.close(),e.onApply(n.canonical))})}open(e=``){this.dialog.show(),this.input.value=e,this.renderHint(),setTimeout(()=>{this.input.focus(),this.input.setSelectionRange(this.input.value.length,this.input.value.length)},0)}get isOpen(){return this.dialog.open}type(e){if(!this.isOpen){this.open(e);return}this.input.value+=e,this.renderHint()}close(){this.dialog.hide()}destroy(){this.dialog.destroy()}renderHint(){let e=this.input.value.trim(),t=Rt(e);e?t.valid?(this.hint.textContent=t.label??``,delete this.hint.dataset.invalid):(this.hint.textContent=`Not a timeframe`,this.hint.dataset.invalid=`1`):(this.hint.textContent=`e.g. 15, 4h, D, 3M`,delete this.hint.dataset.invalid)}},dr=`vela-widget-shortcuts`,fr=`
.vela-sh-cat {
    color: var(--vela-fg-muted);
    font-size: var(--vela-font-size-sm);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: var(--vela-space-2) 0 var(--vela-space-1);
}
.vela-sh-row { display: flex; align-items: center; gap: var(--vela-space-3); padding: 3px 0; }
.vela-sh-label { flex: 1; }
.vela-sh-keys { display: flex; gap: 4px; }
.vela-sh-key {
    background: var(--vela-surface-overlay);
    border: 1px solid var(--vela-border-soft);
    border-radius: var(--vela-radius-sm);
    padding: 1px 7px;
    font-size: var(--vela-font-size-sm);
    font-variant-numeric: tabular-nums;
}
.vela-sh-static { color: var(--vela-fg-muted); font-size: var(--vela-font-size-sm); margin-top: var(--vela-space-2); }
`,pr=class{constructor(e,t,n){this.keymap=e;let r=(t??document.body).ownerDocument;y(dr,fr,r),this.list=r.createElement(`div`),this.dialog=new D({title:`Keyboard shortcuts`,host:t,closeOnInteractOutside:!0,content:e=>e.appendChild(this.list),onOpenChange:e=>{e&&this.refresh(),n?.(e)}})}open(){this.dialog.show()}close(){this.dialog.hide()}destroy(){this.dialog.destroy()}refresh(){let e=this.list.ownerDocument;this.list.replaceChildren();let t=t=>{let n=e.createElement(`div`);n.className=`vela-sh-cat`,n.textContent=t,this.list.appendChild(n)},n=(t,n)=>{let r=e.createElement(`div`);r.className=`vela-sh-row`;let i=e.createElement(`span`);i.className=`vela-sh-label`,i.textContent=t;let a=e.createElement(`span`);a.className=`vela-sh-keys`;for(let t of n){let n=e.createElement(`span`);n.className=`vela-sh-key`,n.textContent=t,a.appendChild(n)}r.append(i,a),this.list.appendChild(r)},r=new Map;for(let e of this.keymap.bindings()){let t=r.get(e.category)??[];t.push(e),r.set(e.category,t)}for(let[e,i]of r){t(e);for(let e of i)n(e.label,e.display)}t(`Mouse`),n(`Scroll through history`,[`Shift+Scroll`]),n(`Measure from the press point`,[`Shift+Click`]),n(`Delete the drawing under the cursor`,[`Middle-click`]);let i=e.createElement(`div`);i.className=`vela-sh-static`,i.textContent=`Typing a letter opens the symbol search; typing a digit opens the timeframe entry.`,this.list.appendChild(i)}};function mr(e){return Array.isArray(e)?e:e.indicators}async function hr(e,t=fetch){let n,r;if(typeof e==`function`)n=await e();else if(typeof e==`string`){r=e;let i=await t(e);if(!i.ok)throw Error(`indicator manifest ${e}: HTTP ${i.status}`);n=await i.json()}else n=e;let i=[];for(let e of mr(n))try{let n=e.script;if(n===void 0&&e.url!==void 0){let i=e.url;try{let t=typeof location<`u`?new URL(r??`.`,location.href):new URL(r??``);i=new URL(e.url,t).href}catch{}let a=await t(i);if(!a.ok)throw Error(`HTTP ${a.status}`);n=await a.text()}if(n===void 0)throw Error(`entry has neither script nor url`);i.push({name:e.name,script:n,language:e.language,enabled:e.enabled!==!1,category:e.category})}catch(t){console.warn(`[vela] indicator "${e.name}" skipped:`,t)}return i}var gr=e=>typeof e==`string`?e:e.name,V=e=>typeof e==`string`?e:e.type;function _r(e){let t=[...e.present];return e.volumePending&&!t.some(e=>V(e)===`volume`)&&t.push(`volume`),{manifest:e.manifestSettled?[...e.instanceEntries]:[...e.pendingManifest??e.instanceEntries],natives:t}}var vr=[`viewport`,`symbol`,`timeframe`,`crosshair`,`drawings`,`style`];function yr(e){if(e?.symbol)return e.symbol.includes(`:`)||!e.provider?e.symbol:`${e.provider}:${e.symbol}`}function br(e){return JSON.stringify(e)}function xr(e){try{return Sr(JSON.parse(e))}catch{return null}}function Sr(e){if(typeof e!=`object`||!e)return null;let t=e;if(t.version!==1||typeof t.layout!=`string`)return null;let n={version:1,layout:t.layout,charts:[]};if(Array.isArray(t.charts)){let e=new Map;for(let n of t.charts){let t=typeof n==`object`&&n?n.id:void 0;if(typeof t!=`string`||t.length===0)continue;let r=wr(n);r&&e.set(t,{id:t,...r})}n.charts=[...e.values()]}if(typeof t.activeCellId==`string`&&(n.activeCellId=t.activeCellId),typeof t.timezone==`string`&&t.timezone&&(n.timezone=t.timezone),Array.isArray(t.favorites)){let e=t.favorites.filter(e=>typeof e==`string`);e.length>0&&(n.favorites=e)}if(Array.isArray(t.timeframeFavorites)){let e=t.timeframeFavorites.filter(e=>typeof e==`string`);e.length>0&&(n.timeframeFavorites=e)}let r=Tr(t.sync);r&&(n.sync=r);let i=Dr(t.trackSizes);i&&(n.trackSizes=i);let a=Er(t.panels);a&&(n.panels=a);let o=Cr(t.ext);return o&&(n.ext=o),n}function Cr(e){if(typeof e!=`object`||!e||Array.isArray(e))return null;let t={};for(let[n,r]of Object.entries(e))n.length>0&&r!==void 0&&(t[n]=r);return Object.keys(t).length>0?t:null}function wr(e){if(typeof e!=`object`||!e)return null;let t=e,n={};typeof t.symbol==`string`&&(n.symbol=t.symbol),typeof t.provider==`string`&&(n.provider=t.provider),typeof t.timeframe==`string`&&(n.timeframe=t.timeframe),typeof t.priceStyle==`string`&&(n.priceStyle=t.priceStyle),typeof t.bars==`number`&&Number.isFinite(t.bars)&&t.bars>0&&(n.bars=t.bars),(t.session===`regular`||t.session===`extended`)&&(n.session=t.session),typeof t.watermark==`boolean`&&(n.watermark=t.watermark),typeof t.indicatorTitles==`boolean`&&(n.indicatorTitles=t.indicatorTitles),typeof t.indicatorValues==`boolean`&&(n.indicatorValues=t.indicatorValues),t.rendererConfig!=null&&typeof t.rendererConfig==`object`&&(n.rendererConfig=t.rendererConfig),t.drawings!=null&&typeof t.drawings==`object`&&(n.drawings=t.drawings);let r=t.indicators;if(typeof r==`object`&&r){let e=e=>typeof e==`object`&&e&&!Array.isArray(e)?e:void 0;n.indicators={manifest:Array.isArray(r.manifest)?r.manifest.flatMap(t=>{if(typeof t==`string`)return[t];if(typeof t==`object`&&t&&typeof t.name==`string`){let n=t,r=e(n.inputs),i=e(n.props),a=n.hidden===!0;return[r||i||a?{name:n.name,...r?{inputs:r}:{},...i?{props:i}:{},...a?{hidden:a}:{}}:n.name]}return[]}):[],natives:Array.isArray(r.natives)?r.natives.flatMap(t=>{if(typeof t==`string`)return[t];if(typeof t==`object`&&t&&typeof t.type==`string`){let n=t,r=e(n.inputs),i=n.hidden===!0;return[r||i?{type:n.type,...r?{inputs:r}:{},...i?{hidden:i}:{}}:n.type]}return[]}):[]}}let i=Cr(t.ext);return i&&(n.ext=i),n}function Tr(e){if(typeof e!=`object`||!e)return null;let t=e,n={};for(let e of vr){let r=t[e];if(r===!0)n[e]=!0;else if(typeof r==`object`&&r){let t={};for(let[e,n]of Object.entries(r))typeof n==`string`&&(t[e]=n);Object.keys(t).length>0&&(n[e]=t)}}return Object.keys(n).length>0?n:null}function Er(e){if(typeof e!=`object`||!e)return null;let t=e,n={};if(typeof t.open==`string`&&t.open&&(n.open=t.open),t.widths!=null&&typeof t.widths==`object`){let e={};for(let[n,r]of Object.entries(t.widths))typeof r==`number`&&Number.isFinite(r)&&r>0&&(e[n]=r);Object.keys(e).length>0&&(n.widths=e)}if(Array.isArray(t.pinned)){let e=t.pinned.filter(e=>typeof e==`string`&&e!==``);e.length>0&&(n.pinned=[...new Set(e)])}return n.open||n.widths||n.pinned?n:null}function Dr(e){if(typeof e!=`object`||!e)return null;let t={};for(let[n,r]of Object.entries(e)){if(typeof r!=`object`||!r)continue;let e=r,i={};for(let t of[`cols`,`rows`]){let n=e[t];Array.isArray(n)&&n.length>0&&n.every(e=>typeof e==`number`&&Number.isFinite(e)&&e>0)&&(i[t]=n)}(i.cols||i.rows)&&(t[n]=i)}return Object.keys(t).length>0?t:null}function H(e,t,n){if(t==null||t===!1)return[];if(t===!0)return n.filter(t=>t!==e);let r=t[e];return r==null?[]:n.filter(n=>n!==e&&t[n]===r)}function Or(e,t,n){return Math.abs(e.from-t.from)<=n&&Math.abs(e.to-t.to)<=n}var kr=[`layout`,`panes`,`grid`,`priceScale`,`crosshair`];function Ar(e){if(typeof e!=`object`||!e)return null;let t=e,n={};for(let e of kr)t[e]!=null&&typeof t[e]==`object`&&(n[e]=t[e]);return Object.keys(n).length>0?n:null}var jr=new Map;function Mr(){return{get:e=>jr.get(e)??null,set:(e,t)=>{jr.set(e,t)},remove:e=>{jr.delete(e)}}}function Nr(e){return{get(t){try{return localStorage.getItem(e??t)}catch{return null}},set(t,n){try{localStorage.setItem(e??t,n)}catch{}},remove(t){try{localStorage.removeItem(e??t)}catch{}}}}function Pr(e){let t=Math.abs(e);return t>=1?2:t>=.01?4:6}function Fr(e,t){if(e==null||!Number.isFinite(e))return`—`;let n=t??Pr(e);return e.toLocaleString(`en-US`,{minimumFractionDigits:n,maximumFractionDigits:n})}function Ir(e,t){if(e==null||t==null||!Number.isFinite(e)||!Number.isFinite(t)||e===0)return``;let n=t-e,r=n/e*100,i=n>=0?`+`:``;return`${i}${Fr(n,Pr(t))} (${i}${r.toFixed(2)}%)`}function Lr(e,t){if(e==null||t==null||!Number.isFinite(e)||!Number.isFinite(t)||e===0)return``;let n=(t-e)/e*100;return`${n>=0?`+`:``}${n.toFixed(2)}%`}function Rr(e,t=!1){return{avatar:e.logo,symbol:e.name,meta:e.name,market:e.market,ohlc:e.ohlc&&!t,change:e.change&&!t,eye:t}}var zr=[{stacked:!1,level:`full`},{stacked:!0,level:`full`},{stacked:!0,level:`compact`},{stacked:!0,level:`minimal`}];function Br(e,t){return t===`value`?[{key:`close`,label:``}]:e===`full`?[{key:`open`,label:`O`},{key:`high`,label:`H`},{key:`low`,label:`L`},{key:`close`,label:`C`}]:[{key:`close`,label:e===`compact`?`C`:``}]}function Vr(e,t){return[{id:`part:logo`,label:`Symbol logo`,checked:e.logo},{id:`part:name`,label:`Symbol name`,checked:e.name},{id:`part:market`,label:`Market status`,checked:e.market},{id:`part:ohlc`,label:`OHLC values`,checked:e.ohlc},{id:`part:change`,label:`Bar change values`,checked:e.change},{id:`chart`,label:t?`Hide chart`:`Show chart`,separatorBefore:!0}]}var Hr=`vela-widget-statusline`,Ur=`
.vela-statusline {
    position: absolute;
    top: var(--vela-space-2);
    /* Track the indicator legend's left edge: the renderer publishes its toolbar gutter
     * on the mount container, and the legend sits 10px into the plot to its right \u2014
     * so the two columns stay aligned whether the toolbar is docked (44px), collapsed
     * (16px), or absent entirely (a workspace cell: 0). */
    left: calc(var(--vela-toolbar-gutter, 0px) + 10px);
    z-index: 10;
    display: flex;
    align-items: baseline;
    gap: var(--vela-space-2);
    /* The chip never grows past the plot: fit() measures overflow against this width to
     * walk the layout ladder (stack, then shed values), so overflow:hidden only guards
     * the transient between a resize and the next measure. */
    max-width: calc(100% - var(--vela-toolbar-gutter, 0px) - var(--vela-scale-gutter, 0px) - 24px);
    overflow: hidden;
    color: var(--vela-fg);
    font-size: var(--vela-font-size-md);
    /* Same chip treatment as the indicator legend rows (InputsUI): a translucent wash of
     * the chart background when idle \u2014 enough to keep the readout legible when candles
     * reach it \u2014 and the solid chart background on hover. Symmetric 7px padding with a
     * compensating negative margin (mirroring the legend rows) keeps the avatar's left
     * edge on the legend column's left edge (both at left:10px) while the chip itself
     * extends 7px further left, so both columns' chips share the same left edge. */
    pointer-events: auto;
    background: color-mix(in srgb, var(--vela-bg) 60%, transparent);
    border-radius: 4px;
    padding: 2px 7px;
    margin-left: -7px;
}
/* Hovering opens the chip the same way a legend row opens: solid chart background
 * plus the same inset neutral outline the indicator rows wear (InputsUI's
 * setRowHighlighted) \u2014 the two columns read as one family. */
.vela-statusline:hover { background: var(--vela-bg); box-shadow: inset 0 0 0 1px var(--vela-border); }
/* Chart hidden (the price series' eye \u2014 renderer 'candleVisible'): the line dims to
 * the same 0.5 wash a hidden indicator's legend row wears. */
.vela-statusline.vela-sl-chart-hidden { opacity: 0.5; }
/* Two rows inside the chip \u2014 the identity (logo / symbol / meta / market badge) and the
 * value readout (O/H/L/C + change, or the show-chart eye). In the widest layout they sit
 * side by side on one line; the STACKED layouts (fit() decides, see the ladder in
 * statusline-model) turn the chip into a column so the values drop under the symbol. */
.vela-statusline .vela-sl-row {
    display: flex;
    align-items: baseline;
    gap: var(--vela-space-2);
    white-space: nowrap;
}
.vela-statusline.vela-sl-stacked {
    flex-direction: column;
    align-items: flex-start;
    /* The same air between the two rows as between the values row and the legend row
     * that follows the chip (see the stacked legend shift below). */
    row-gap: var(--vela-space-1);
}
/* Stacked, the identity row may shrink (the meta carries the ellipsis) \u2014 the values row
 * never does, so its overflow is what fit() measures to keep descending the ladder. */
.vela-statusline.vela-sl-stacked .vela-sl-identity { max-width: 100%; }
.vela-statusline.vela-sl-stacked .vela-sl-meta {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
}
.vela-statusline .vela-sl-avatar {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    flex: none;
    align-self: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--vela-fg-on-fill);
    font-size: 10px;
    font-weight: 700;
}
.vela-statusline .vela-sl-symbol { font-weight: 600; font-size: var(--vela-font-size-lg); }
.vela-statusline .vela-sl-meta { color: var(--vela-fg-muted); font-size: var(--vela-font-size-md); font-weight: 600; }
/* Market status badge \u2014 a kit callout bubble (icon-only 16px circle, label on hover
 * via the kit tooltip); the session tint is applied per status in setMarketStatus. */
.vela-statusline .vela-sl-market { align-self: center; }
.vela-statusline .vela-sl-ohlc { display: flex; gap: var(--vela-space-1); color: var(--vela-fg-muted); }
.vela-statusline .vela-sl-ohlc b { color: var(--vela-fg); font-weight: 500; }
/* The change value wears the SAME ink as the OHLC values (set inline per render) \u2014
 * these are the pre-ink fallbacks only. */
.vela-statusline .vela-sl-change[data-dir='up'] { color: var(--vela-up); }
.vela-statusline .vela-sl-change[data-dir='down'] { color: var(--vela-down); }
/* The show-chart eye \u2014 out only while the chart is hidden (syncParts drives display),
 * replacing the value readout it took away. Same footprint as a legend action button. */
.vela-statusline .vela-sl-eye {
    align-self: center;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    padding: 0;
    border: none;
    border-radius: 3px;
    background: none;
    color: var(--vela-fg-muted);
    cursor: pointer;
    line-height: 0;
    flex: none;
}
.vela-statusline .vela-sl-eye:hover { color: var(--vela-fg); background: color-mix(in srgb, var(--vela-fg) 12%, transparent); }
/* Stack the TOP pane's legend below the status line (lower study panes stay put).
 * The renderer marks whichever legend sits at the plot's top edge \u2014 the price pane
 * normally, or a maximized study pane filling the plot \u2014 so the legend never merges
 * with the status line whichever pane owns the top. The renderer sets the legend's
 * inline top \u2014 shift with a transform, don't fight it. Scoped to hosts that actually
 * CARRY a status line (the marker class set by the Statusline constructor) \u2014 the
 * stylesheet is document-global, so a bare attribute selector here would shift every
 * chart on the page, including statusline-less ones. */
.vela-has-statusline [${Fe}] { transform: translateY(26px); }
/* A stacked chip is two lines tall \u2014 the legend shifts one more line. fit() flags the
 * host whenever the ladder lands on a stacked layout. */
.vela-has-statusline.vela-sl-stacked-host [${Fe}] { transform: translateY(40px); }
/* Mobile: the same ladder at the phone's type scale \u2014 the width alone decides how much
 * of the readout fits, exactly as on a narrow desktop chart. */
[data-layout='mobile'] .vela-statusline { font-size: var(--vela-font-size-sm); }
[data-layout='mobile'] .vela-statusline .vela-sl-symbol { font-size: var(--vela-font-size-md); }
`;function Wr(e){return e.replace(/[-_/]?(USDT|USDC|USD1|USDS|BUSD|USD|EUR|PERP)$/i,``)||e}var U={open:`Market Open`,pre:`Pre-Market`,post:`Post-Market`,extended:`Extended Hours`,closed:`Market Closed`,holiday:`Market Holiday`},Gr={open:`var(--vela-up)`,pre:ne,post:p,extended:p,closed:c,holiday:c};function Kr(e,t){let n=e.getConfig(),r=e=>typeof e==`string`?e:null;switch(t){case`bars`:return[r(n?.bars?.upColor),r(n?.bars?.downColor),null,`ohlc`];case`line`:{let e=r(n?.line?.color);return[e,e,null,`value`]}case`area`:{let e=r(n?.area?.lineColor);return[e,e,null,`value`]}case`baseline`:return[r(n?.baseline?.topLineColor),r(n?.baseline?.bottomLineColor),t=>{let n=Number(e.get(`baselinePrice`));return Number.isFinite(n)?t.close>=n:t.close>=t.open},`value`];default:return[r(n?.candles?.upColor),r(n?.candles?.downColor),null,`ohlc`]}}var qr=class{constructor(e,t,n){this.host=e,this.iconFor=n,this.parts={logo:!0,name:!0,market:!0,ohlc:!0,change:!0},this.menu=null,this.menuHooks=null,this.chartHidden=!1,this.lastBar=null,this.hoverBar=null,this.unsubs=[],this.upColor=null,this.downColor=null,this.isUp=null,this.readout=`ohlc`,this.fitMode=!1,this.fitRO=null,this.layout={stacked:!1,level:`full`},this.onContextMenu=e=>{if(!this.menu||!this.menuHooks)return;e.preventDefault(),e.stopPropagation();let t=this.menuHooks.chartVisible();this.setChartHidden(!t),this.menu.setItems(Vr(this.parts,t)),this.menu.openAt(e.clientX,e.clientY)};let r=e.ownerDocument;y(Hr,Ur,r),e.classList.add(`vela-has-statusline`),this.el=r.createElement(`div`),this.el.className=`vela-statusline`,this.el.dataset.velaScreenshot=`1`;let i=w(t).ticker;this.avatarEl=R(r,Wr(i),i,`vela-sl-avatar`,this.iconFor?.(t)),this.symbolEl=r.createElement(`span`),this.symbolEl.className=`vela-sl-symbol`,this.symbolEl.textContent=i,this.metaEl=r.createElement(`span`),this.metaEl.className=`vela-sl-meta`,this.marketBubble=new le({icon:`market-open`,background:`color-mix(in srgb, ${Gr.open} 20%, transparent)`,color:Gr.open,label:U.open,host:e}),this.marketEl=this.marketBubble.el,this.marketEl.classList.add(`vela-sl-market`),this.ohlcEl=r.createElement(`span`),this.ohlcEl.className=`vela-sl-ohlc`,this.changeEl=r.createElement(`span`),this.changeEl.className=`vela-sl-change`,this.eyeEl=r.createElement(`button`),this.eyeEl.type=`button`,this.eyeEl.className=`vela-sl-eye`,this.eyeEl.innerHTML=Ve(`eye-off`,14),this.eyeEl.setAttribute(`aria-label`,`Show chart`),this.eyeEl.style.display=`none`,this.eyeEl.addEventListener(`click`,e=>{e.stopPropagation(),this.menuHooks?.setChartVisible(!0),this.setChartHidden(!1)}),this.identityRow=r.createElement(`span`),this.identityRow.className=`vela-sl-row vela-sl-identity`,this.identityRow.append(this.avatarEl,this.symbolEl,this.metaEl,this.marketEl),this.valuesRow=r.createElement(`span`),this.valuesRow.className=`vela-sl-row vela-sl-values`,this.valuesRow.append(this.ohlcEl,this.changeEl,this.eyeEl),this.el.append(this.identityRow,this.valuesRow),e.appendChild(this.el),typeof ResizeObserver<`u`&&(this.fitRO=new ResizeObserver(()=>this.fit()),this.fitRO.observe(e)),this.marketTip=new M(this.marketEl,{content:U.open,placement:`bottom`}),this.eyeTip=new M(this.eyeEl,{content:`Show chart`,placement:`bottom`}),this.setMarketStatus(`open`),this.render()}setSymbol(e){let t=w(e).ticker;this.symbolEl.textContent=t;let n=R(this.el.ownerDocument,Wr(t),t,`vela-sl-avatar`,this.iconFor?.(e));this.avatarEl.replaceWith(n),this.avatarEl=n,this.syncParts(),this.fit()}setFitMode(e){e!==this.fitMode&&(this.fitMode=e,this.fit())}syncParts(){let e=Rr(this.parts,this.chartHidden);this.avatarEl.style.display=e.avatar?``:`none`,this.symbolEl.style.display=e.symbol?``:`none`,this.metaEl.style.display=e.meta?``:`none`,this.marketEl.style.display=e.market?``:`none`,this.ohlcEl.style.display=e.ohlc?``:`none`,this.changeEl.style.display=e.change?``:`none`,this.eyeEl.style.display=e.eye?`inline-flex`:`none`,this.valuesRow.style.display=e.ohlc||e.change||e.eye?``:`none`}applyLayout(e){this.layout=e,this.el.classList.toggle(`vela-sl-stacked`,e.stacked),this.host.classList.toggle(`vela-sl-stacked-host`,e.stacked),this.renderValues()}fit(){this.syncParts();let e=Rr(this.parts,this.chartHidden),t=()=>this.el.scrollWidth>this.el.clientWidth,n=e.ohlc||e.change;for(let e of zr)if(this.applyLayout(e),!n||!t())break;if(!this.fitMode)return;let r=[[this.valuesRow,n],[this.metaEl,e.meta],[this.marketEl,e.market]];for(let[e,n]of r){if(!t())break;n&&(e.style.display=`none`)}this.valuesRow.style.display===`none`&&this.applyLayout({...this.layout,stacked:!1})}setDirectionColors(e,t,n=null,r=`ohlc`){this.upColor=e,this.downColor=t,this.isUp=n,this.readout=r,this.render()}setMeta(e,t){this.metaEl.textContent=`${t?`\xB7 ${t.toUpperCase()} `:``}\xB7 ${I(e)}`,this.fit()}setMarketStatus(e){this.marketEl.dataset.status=e;let t=Gr[e];this.marketBubble.set({icon:`market-${e}`,background:`color-mix(in srgb, ${t} 20%, transparent)`,color:t,label:U[e]}),this.marketTip.setContent(U[e])}setPartVisible(e,t){this.parts[e]=t,this.syncParts(),this.fit()}partVisible(e){return this.parts[e]}setChartHidden(e){e!==this.chartHidden&&(this.chartHidden=e,this.el.classList.toggle(`vela-sl-chart-hidden`,e),this.syncParts(),this.fit())}attachMenu(e){this.menuHooks=e,!this.menu&&(this.menu=new r({host:this.host,items:[],placement:`bottom-start`,checkmarks:!0,onSelect:e=>this.runMenuItem(e)}),this.el.addEventListener(`contextmenu`,this.onContextMenu))}runMenuItem(e){let t=this.menuHooks;if(t){if(e.startsWith(`part:`)){let n=e.slice(5);t.setPart(n,!this.parts[n])}else if(e===`chart`){let e=!t.chartVisible();t.setChartVisible(e),this.setChartHidden(!e)}}}onChart(e){this.detach(),this.lastBar=null,this.hoverBar=null,this.unsubs.push(e.on(`bar`,e=>{this.lastBar=e,this.hoverBar||this.render()}),e.renderer.onCrosshairMove(e=>{this.hoverBar=e.ohlc,this.render()})),this.render()}destroy(){this.detach(),this.fitRO?.disconnect(),this.fitRO=null,this.el.removeEventListener(`contextmenu`,this.onContextMenu),this.menu?.destroy(),this.menu=null,this.marketTip.destroy(),this.eyeTip.destroy(),this.marketBubble.destroy(),this.host.classList.remove(`vela-has-statusline`,`vela-sl-stacked-host`),this.el.remove()}detach(){for(let e of this.unsubs)e();this.unsubs=[]}render(){this.menuHooks&&this.setChartHidden(!this.menuHooks.chartVisible()),this.fit()}renderValues(){let e=this.hoverBar??this.lastBar;if(!e){this.ohlcEl.replaceChildren(),this.changeEl.textContent=``;return}let t=Pr(e.close),n=this.el.ownerDocument,r=this.isUp?this.isUp(e):e.close>=e.open,i=r?this.upColor??`var(--vela-up)`:this.downColor??`var(--vela-down)`,a=(e,r)=>{let a=n.createElement(`span`);e&&a.append(`${e} `);let o=n.createElement(`b`);return o.textContent=Fr(r,t),o.style.color=i,a.appendChild(o),a},{level:o}=this.layout;this.ohlcEl.replaceChildren(...Br(o,this.readout).map(t=>a(t.label,e[t.key]))),this.changeEl.textContent=o===`minimal`?Lr(e.open,e.close):Ir(e.open,e.close),this.changeEl.dataset.dir=r?`up`:`down`,this.changeEl.style.color=i}},W=36,Jr=12,Yr=.9,Xr=`vela-widget-watermark`,Zr=`
.vela-watermark {
    position: absolute;
    /* Insets follow the renderer-published gutters AND the price-pane vertical
     * bounds (mount container), so the mark centers on the PRICE PANE \u2014 never
     * the study panes below, the drawings toolbar, or the price scale. */
    top: var(--vela-price-pane-top, 0px);
    bottom: var(--vela-price-pane-bottom, 0px);
    left: var(--vela-toolbar-gutter, 0px);
    right: var(--vela-scale-gutter, 0px);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    pointer-events: none;
    z-index: 1;
    color: var(--vela-fg);
    opacity: 0.05;
    font-size: ${W}px;
    font-weight: 700;
    letter-spacing: 0.04em;
    user-select: none;
    white-space: nowrap;
}
`;function Qr(e,t){return t<=0?W:Math.max(Jr,Math.min(W,Math.floor(W*e*Yr/t)))}var $r=class{constructor(e,t,n){this.resizeObserver=null,this.shown=!0,this.loading=!0,y(Xr,Zr,e.ownerDocument),this.el=e.ownerDocument.createElement(`div`),this.el.className=`vela-watermark`,this.el.dataset.velaScreenshot=`under`,this.text=e.ownerDocument.createElement(`span`),this.el.appendChild(this.text),e.appendChild(this.el),typeof ResizeObserver<`u`&&(this.resizeObserver=new ResizeObserver(()=>this.fit()),this.resizeObserver.observe(this.el)),this.update(t,n),this.sync()}setVisible(e){this.shown=e,this.sync()}setLoading(e){this.loading=e,this.sync()}sync(){this.el.style.display=this.shown&&!this.loading?``:`none`}update(e,t){this.text.textContent=e?`${w(e).ticker} \xB7 ${I(t)}`:``,this.fit()}fit(){if(this.el.clientWidth<=0||!this.text.textContent)return;this.el.style.fontSize=`${W}px`;let e=Qr(this.el.clientWidth,this.text.getBoundingClientRect().width);e!==W&&(this.el.style.fontSize=`${e}px`)}destroy(){this.resizeObserver?.disconnect(),this.el.remove()}},ei={body:`Canvas`,"price-axis":`Scales and lines`,"time-axis":`Scales and lines`};function ti(e,t){return{id:`settings:${ei[e]}`,label:t,separatorBefore:!0}}function ni(e){return e.slice(9)||void 0}var ri=[[`regular`,`Regular`],[`percent`,`Percent`],[`indexed`,`Indexed to 100`],[`log`,`Logarithmic`]];function G(e,t){return e.find(e=>t>=e.top&&t<e.top+e.height)??e[0]??null}function ii(e){return e.log?`log`:e.mode===`percent`?`percent`:e.mode===`indexed`?`indexed`:`regular`}function ai(e){return e===null||e.kind===`price`}function oi(e,t){let n=e===`percent`?`percent`:e===`indexed`?`indexed`:`price`,r=e===`log`;return ai(t)?[[`scaleMode`,n],[`logScale`,r]]:[[`scaleMode`,{pane:t.id,mode:n}],[`logScale`,{pane:t.id,value:r}]]}function si(e,t){return ai(t)?[`invertScale`,e]:[`invertScale`,{pane:t.id,value:e}]}function ci(e){return[{id:`auto`,label:`Auto (fits data to screen)`,checked:e.auto},{id:`invert`,label:`Invert scale`,checked:e.invert},...ri.map(([t,n],r)=>({id:`scale:${t}`,label:n,checked:e.choice===t,separatorBefore:r===0})),{id:`labels`,label:`Labels`,separatorBefore:!0,submenu:[{id:`toggle:axisLabels`,label:`Price axis labels`,checked:e.axisLabels},{id:`toggle:priceLabel`,label:`Last price label`,checked:e.priceLabel},{id:`toggle:countdown`,label:`Countdown to bar close`,checked:e.countdown}]},{id:`levels`,label:`Levels`,submenu:[{id:`toggle:currentPriceLine`,label:`Last Price Line`,checked:e.priceLine}]},ti(`price-axis`,`More settings…`)]}function li(e){return[{id:`timezone`,label:`Time zone`,submenu:f(e).map(e=>({id:`tz:${e.value}`,label:e.label,checked:e.checked}))},ti(`time-axis`,`More settings…`)]}function ui(e){return[{id:`reset-view`,label:`Reset chart view`},{id:`remove-drawings`,label:`Remove drawings`,disabled:e.drawings===0,separatorBefore:!0},{id:`remove-indicators`,label:`Remove indicators`,disabled:e.indicators===0},ti(`body`,`Settings…`)]}var di=60,fi=26,pi=class{constructor(e,t){this.cbs=t,this.chart=null,this.lastZone=`body`,this.lastPane=null,this.onContextMenu=e=>{e.preventDefault(),this.chart&&(this.lastZone=this.zoneOf(e),this.lastPane=this.lastZone===`price-axis`?this.paneAt(e):null,this.menu.setItems(this.itemsFor(this.lastZone)),this.menu.openAt(e.clientX,e.clientY))},this.host=e,this.menu=new r({host:e,items:[],placement:`bottom-start`,checkmarks:!0,onSelect:e=>this.run(e)}),e.addEventListener(`contextmenu`,this.onContextMenu)}onChart(e){this.chart=e}destroy(){this.host.removeEventListener(`contextmenu`,this.onContextMenu),this.menu.destroy()}zoneOf(e){let t=this.host.getBoundingClientRect();return e.clientX-t.left>t.width-di?`price-axis`:e.clientY-t.top>t.height-fi?`time-axis`:`body`}paneAt(e){let t=this.chart?.renderer.get(`paneScales`);return Array.isArray(t)?G(t,e.clientY-this.host.getBoundingClientRect().top):null}flag(e){return!!this.chart?.renderer.get(e)}contributed(e){let t=this.cbs.getContext?.();return x(`context:${e}`,t).map((e,t)=>({id:`action:${e.id}`,label:e.label,icon:e.icon,separatorBefore:t===0}))}itemsFor(e){if(e===`price-axis`){let t=this.lastPane;return[...ci({auto:this.chart?.renderer.get(`autoScale`)!==!1,invert:t?t.invert:this.flag(`invertScale`),choice:ii(t??{mode:String(this.chart?.renderer.get(`scaleMode`)??`price`),log:this.flag(`logScale`)}),axisLabels:this.flag(`axisLabels`),priceLabel:this.flag(`priceLabel`),countdown:this.flag(`countdown`),priceLine:this.flag(`currentPriceLine`)}),...this.contributed(e)]}if(e===`time-axis`)return[...li(this.cbs.timezone?.()??String(this.chart?.renderer.get(`timezone`)??`Etc/UTC`)),...this.contributed(`time-axis`)];let t=this.chart;return[...ui({drawings:t?.drawings.supported?t.drawings.all().length:0,indicators:t?.indicators().length??0}),...this.contributed(`body`)]}run(e){let t=this.chart;if(t){if(e.startsWith(`action:`)){let t=this.cbs.getContext?.();t&&x(`context:${this.lastZone}`,t).find(t=>t.id===e.slice(7))?.run(t);return}if(e.startsWith(`toggle:`)){let n=e.slice(7);t.renderer.set(n,!this.flag(n))}else if(e.startsWith(`scale:`))for(let[n,r]of oi(e.slice(6),this.lastPane))t.renderer.set(n,r);else if(e.startsWith(`tz:`)){let n=e.slice(3);this.cbs.setTimezone?this.cbs.setTimezone(n):t.renderer.set(`timezone`,ie(n,void 0))}else if(e===`auto`)t.renderer.set(`autoScale`,t.renderer.get(`autoScale`)===!1);else if(e===`invert`){let e=this.lastPane,[n,r]=si(!(e?e.invert:this.flag(`invertScale`)),e);t.renderer.set(n,r)}else if(e.startsWith(`settings`))t.renderer.openSettings(ni(e));else if(e===`reset-view`)this.cbs.resetView();else if(e===`remove-drawings`){if(t.drawings.supported)for(let e of t.drawings.all())t.drawings.remove(e.id)}else if(e===`remove-indicators`)for(let e of t.indicators())e.remove()}}},K=864e5,mi=6e4;function hi(e,t=!1){if(typeof e!=`string`)return null;let n=/^(\d{2})(\d{2})-(\d{2})(\d{2})$/.exec(e);if(!n)return null;let r=Number(n[1])*60+Number(n[2]),i=Number(n[3])*60+Number(n[4]);return i>1440||r>=1440||r>=i&&!t?null:{start:r,end:i}}function gi(e){let t=e?.session;if(typeof t!=`string`||t===``||t===`24x7`)return null;let n=hi(t);if(!n)return null;let r=e?.timezone,i=typeof r==`string`&&r!==``?r:`Etc/UTC`,a=hi(e?.session_extended,!0);return a&&a.start>=a.end?a.start>=n.end&&a.end>=n.end?{regular:n,extended:a,overnight:!0,timezone:i}:{regular:n,extended:{start:0,end:1440},overnight:!1,timezone:i}:{regular:n,extended:a&&a.start<=n.start&&a.end>=n.end?a:{start:0,end:1440},overnight:!1,timezone:i}}var _i=new Map;function vi(e){let t=_i.get(e);if(t!==void 0)return t;let n=null;try{n=new Intl.DateTimeFormat(`en-US`,{timeZone:e,hourCycle:`h23`,weekday:`short`,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`})}catch{n=null}return _i.set(e,n),n}function yi(e,t){let n=e.formatToParts(t),r=e=>n.find(t=>t.type===e)?.value??``;return{weekday:r(`weekday`),year:Number(r(`year`)),month:Number(r(`month`)),day:Number(r(`day`)),hour:Number(r(`hour`))%24,minute:Number(r(`minute`))}}function bi(e){let t=[...e].sort((e,t)=>e[0]-t[0]),n=[];for(let[e,r]of t){if(r<=e)continue;let t=n[n.length-1];t&&e<=t[1]?t[1]=Math.max(t[1],r):n.push([e,r])}return n}function xi(e,t,n){let r=[],i=[],a=[],o=vi(e.timezone);if(!o||!Number.isFinite(t)||!Number.isFinite(n))return{pre:r,post:i,extended:a};let s=new Set;for(let c=t-K;c<n+K;c+=K){let t=yi(o,c),n=t.year*1e4+t.month*100+t.day;if(!Number.isFinite(n)||s.has(n))continue;s.add(n);let l=t.weekday===`Sun`;if(t.weekday===`Sat`||l&&!e.overnight)continue;let u=Date.UTC(t.year,t.month-1,t.day),d=u+720*mi,f=yi(o,d),p=Date.UTC(f.year,f.month-1,f.day,f.hour,f.minute)-d,m=e=>u+e*mi-p;if(e.overnight){l||(a.push([m(0),m(e.regular.start)]),e.regular.end<e.extended.end&&a.push([m(e.regular.end),m(e.extended.end)])),t.weekday!==`Fri`&&a.push([m(e.extended.start),m(1440)]);continue}e.extended.start<e.regular.start&&r.push([m(e.extended.start),m(e.regular.start)]),e.regular.end<e.extended.end&&i.push([m(e.regular.end),m(e.extended.end)])}return{pre:r,post:i,extended:bi(a)}}var Si=2*K,Ci=class{constructor(e){this.onZones=e,this.epoch=0,this.spec=null,this.ready=!1,this.session=`regular`,this.intraday=!1,this.covered=null,this.lastRange=null}track(e,t,n){let r=++this.epoch;this.ready=!1,this.spec=null,this.covered=null,this.session=n.session;let i=F(n.timeframe);this.intraday=Number.isFinite(i)&&i<K,this.lastRange=n.range,e.symbolInfo(t).catch(()=>void 0).then(e=>{r===this.epoch&&(this.ready=!0,this.spec=gi(e),this.emit(this.lastRange??n.range,!0))})}updateRange(e){this.lastRange=e,this.ready&&this.emit(e,!1)}stop(){this.epoch+=1,this.ready=!1,this.spec=null,this.covered=null,this.lastRange=null}emit(e,t){if(!this.spec){t&&this.onZones(null);return}if(this.session!==`extended`||!this.intraday){t&&this.onZones({pre:[],post:[],extended:[]});return}let n=Math.min(e.from,e.to),r=Math.max(e.from,e.to);if(!Number.isFinite(n)||!Number.isFinite(r)||!t&&this.covered&&n>=this.covered.from&&r<=this.covered.to)return;let i=Math.max(r-n,Si),a={from:n-i,to:r+i};this.covered=a,this.onZones(xi(this.spec,a.from,a.to))}};function wi(e,t){try{return new Intl.DateTimeFormat(`en-CA`,{timeZone:t}).format(e)}catch{return``}}function Ti(e,t){try{let n=new Intl.DateTimeFormat(`en-US`,{timeZone:t,weekday:`short`}).format(e);return n!==`Sat`&&n!==`Sun`}catch{return!1}}function Ei(e,t,n,r=!1){let i=t=>t.find(([t,n])=>e>=t&&e<n);if(i(t.regular))return`open`;let a=i(t.extended);if(a)return r?`extended`:t.regular.some(([t])=>t>=e&&t<a[1])?`pre`:`post`;if(Ti(e,n)){let r=wi(e,n);if(r!==``&&!t.extended.some(([e])=>wi(e,n)===r))return`holiday`}return`closed`}function Di(e,t){let n=null;for(let r of[t.regular,t.extended])for(let[t,i]of r)for(let r of[t,i])r>e&&(n==null||r<n)&&(n=r);return n}var Oi=3456e5,ki=864e6,Ai=15e3,ji=36e5,Mi=6e4,Ni=class{constructor(e){this.onStatus=e,this.epoch=0,this.timer=null}track(e,t){let n=++this.epoch;this.clearTimer(),this.evaluate(n,e,t)}stop(){this.epoch+=1,this.clearTimer()}async evaluate(e,t,n){let r=t.resolve(n),i=r?t.providerInstance(r.provider):void 0,a=await t.symbolInfo(n).catch(()=>void 0);if(e!==this.epoch)return;let o=typeof a?.session==`string`&&a.session!==``&&a.session!==`24x7`;if(!i?.getCalendar||!o||!r){this.onStatus(`open`);return}let s=typeof a?.timezone==`string`&&a.timezone!==``?a.timezone:`Etc/UTC`,c=Date.now(),l={from:c-Oi,to:c+ki},[u,d]=await Promise.all([i.getCalendar(r.ticker,{...l,session:`regular`}).catch(()=>null),i.getCalendar(r.ticker,{...l,session:`extended`}).catch(()=>null)]);if(e!==this.epoch)return;if(!u||!d){this.arm(e,t,n,Mi);return}let f={regular:u,extended:d},p=gi(a)?.overnight===!0;this.onStatus(Ei(c,f,s,p));let m=Di(c,f),h=Math.min(m==null?ji:m-c,ji);this.arm(e,t,n,Math.max(h,Ai))}arm(e,t,n,r){this.clearTimer(),this.timer=setTimeout(()=>{this.timer=null,e===this.epoch&&this.evaluate(e,t,n)},r)}clearTimer(){this.timer!=null&&clearTimeout(this.timer),this.timer=null}},Pi=6e4,Fi=.25,Ii=.8,Li=1.25,Ri=.2;function zi(e,t){let n=Math.max(Pi,(e.to-e.from)*t);return{from:e.to-n,to:e.to}}function Bi(e,t,n=Fi,r=.0015){let i=Math.max(Pi,(t.to-t.from)*r),a=e.from+(t.from-e.from)*n,o=e.to+(t.to-e.to)*n,s=Math.abs(t.from-a)<=i&&Math.abs(t.to-o)<=i;return{cur:s?{...t}:{from:a,to:o},done:s}}function Vi(e){let t=e.renderer;return!t||!t.supports(`animZoom`)||!!t.get(`animZoom`)}var Hi=class{constructor(e){this.chart=e,this.cur=null,this.target=null,this.raf=0}zoom(e){this.to(t=>zi(t,e))}stop(){this.raf&&cancelAnimationFrame(this.raf),this.raf=0,this.cur=null,this.target=null}to(e){let t=this.chart(),n=this.target??t?.getVisibleRange();if(!t||!n)return;let r=e(n);if(!Vi(t)){this.stop(),t.setVisibleRange(r);return}this.cur??={...n},this.target=r,this.raf||this.tick()}tick(){this.raf=requestAnimationFrame(()=>{let e=this.chart();if(!e||!this.cur||!this.target){this.stop();return}let{cur:t,done:n}=Bi(this.cur,this.target);this.cur=t,e.setVisibleRange(t),n?this.stop():this.tick()})}},Ui=120,Wi=34,Gi=24,Ki=`rgba(0,0,0,0.65)`,qi=`calc((100% + var(--vela-toolbar-gutter, 0px) - var(--vela-scale-gutter, 0px)) / 2)`,Ji=`vela-cell-controls`,Yi=`
.vela-cc-btn{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;padding:0;border:none;border-radius:var(--vela-radius-sm);background:transparent;line-height:0;font-size:12px;color:var(--vela-fg-muted);cursor:pointer;}
.vela-cc-btn svg{display:block;}
.vela-cc-btn:hover{background:var(--vela-active);color:var(--vela-fg-bright);}
.vela-cc-on,.vela-cc-on:hover{background:var(--vela-selected-bg);color:var(--vela-selected-fg);}
.vela-cc-grip{cursor:grab;touch-action:none;}
.vela-cc-grip:active{cursor:grabbing;}
`;function Xi(e,t=0,n=0){return(e+t-n)/2}function Zi(e,t,n,r,i=Ui,a={}){let o=Xi(n,a.toolbar??0,a.scale??0),s=r-Wi-Gi/2;return Math.hypot(e-o,t-s)<=i}var Qi=class{constructor(e,t){this.host=e,this.deps=t,this.near=!1,this.dragging=!1,this.suspended=!1,this.onHostMove=e=>{if(this.suspended||this.dragging)return;let t=this.host.getBoundingClientRect();this.setNear(Zi(e.clientX-t.left,e.clientY-t.top,t.width,t.height,Ui,this.hostGutters()))},this.onHostLeave=()=>{this.dragging||this.setNear(!1)},y(Ji,Yi,e.ownerDocument),this.glider=new Hi(t.chart),this.root=e.ownerDocument.createElement(`div`),Object.assign(this.root.style,{position:`absolute`,left:qi,bottom:`${Wi}px`,transform:`translateX(-50%)`,zIndex:`6`,display:`none`,gap:`2px`,padding:`2px`,borderRadius:`var(--vela-radius-md)`,background:Ki,pointerEvents:`auto`}),this.host.addEventListener(`pointermove`,this.onHostMove),this.host.addEventListener(`pointerleave`,this.onHostLeave),this.host.appendChild(this.root),this.refresh()}refresh(){this.root.textContent=``;let e=this.deps.multiCell(),t=e&&this.deps.isMaximized();e&&!t&&this.root.appendChild(this.makeGrip()),this.root.appendChild(this.button(`minus`,`Zoom out`,()=>this.glider.zoom(Li))),this.root.appendChild(this.button(`plus`,`Zoom in`,()=>this.glider.zoom(Ii))),e&&this.root.appendChild(this.button(t?`restore`:`maximize`,t?`Restore layout`:`Maximize chart`,()=>this.deps.toggleMaximize(),{selected:t})),this.root.appendChild(this.button(`reset`,`Reset chart`,()=>{this.glider.stop(),this.deps.reset()}))}button(e,t,n,r={}){let i=this.host.ownerDocument.createElement(`button`);return i.type=`button`,i.title=t,i.setAttribute(`aria-label`,t),i.className=r.selected===!0?`vela-cc-btn vela-cc-on`:`vela-cc-btn`,i.innerHTML=ee(e),i.addEventListener(`click`,e=>{e.stopPropagation(),n()}),i}makeGrip(){let e=this.host.ownerDocument.createElement(`button`);return e.type=`button`,e.title=`Drag to move chart`,e.setAttribute(`aria-label`,`Drag to move chart`),e.className=`vela-cc-btn vela-cc-grip`,e.innerHTML=ee(`grip`),e.addEventListener(`pointerdown`,t=>this.onGripDown(e,t)),e}onGripDown(e,t){if(t.button!==0&&t.pointerType===`mouse`)return;t.preventDefault(),t.stopPropagation();try{e.setPointerCapture(t.pointerId)}catch{}this.dragging=!0;let n=null,r=e=>{n=this.deps.dragTargetAt(e.clientX,e.clientY),this.deps.previewDrop(n)},i=t=>()=>{this.dragging=!1,this.deps.previewDrop(null),e.removeEventListener(`pointermove`,r),e.removeEventListener(`pointerup`,a),e.removeEventListener(`pointercancel`,o),t&&n!=null&&this.deps.dropOn(n)},a=i(!0),o=i(!1);e.addEventListener(`pointermove`,r),e.addEventListener(`pointerup`,a),e.addEventListener(`pointercancel`,o)}setSuspended(e){this.suspended=e,e&&this.setNear(!1)}hostGutters(){let e=this.host.ownerDocument.defaultView;if(!e)return{toolbar:0,scale:0};let t=e.getComputedStyle(this.host);return{toolbar:Number.parseFloat(t.getPropertyValue(`--vela-toolbar-gutter`))||0,scale:Number.parseFloat(t.getPropertyValue(`--vela-scale-gutter`))||0}}setNear(e){e!==this.near&&(this.near=e,this.root.style.display=e?`flex`:`none`)}destroy(){this.glider.stop(),this.host.removeEventListener(`pointermove`,this.onHostMove),this.host.removeEventListener(`pointerleave`,this.onHostLeave),this.root.remove()}},$i=class{constructor(e=()=>null){this.getChart=e,this.undoStack=[],this.redoStack=[],this.listeners=new Set,this.unsubs=[],this.muted=!1}push(e){this.muted||(this.undoStack.push(e),this.redoStack.length=0,this.notify())}undo(){let e=this.undoStack.pop();e&&(this.mutedRun(()=>e.undo()),this.redoStack.push(e),this.notify())}redo(){let e=this.redoStack.pop();e&&(this.mutedRun(()=>e.redo()),this.undoStack.push(e),this.notify())}silently(e){this.mutedRun(e)}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}onChart(e){for(let e of this.unsubs)e();this.unsubs=[e.on(`drawing:created`,()=>this.pushDrawingStep()),e.on(`drawing:edited`,()=>this.pushDrawingStep()),e.on(`drawing:removed`,()=>this.pushDrawingStep())]}destroy(){for(let e of this.unsubs)e();this.unsubs=[],this.listeners.clear()}pushDrawingStep(){this.push({undo:()=>this.getChart()?.drawings.undo(),redo:()=>this.getChart()?.drawings.redo()})}mutedRun(e){this.muted=!0;try{e()}finally{this.muted=!1}}notify(){for(let e of this.listeners)e()}};function ea(e){return{symbol:e.symbol,timeframe:e.timeframe,bars:e.bars,priceStyle:e.priceStyle,session:e.session,data:e.data,visibleRange:e.visibleRange}}function ta(e){let{renderer:t,defaultLanguage:n,currentPriceLine:r,logScale:i,animations:a,glow:o,upColor:s,downColor:c,drawings:l,settings:u}=e;return{renderer:t,defaultLanguage:n,currentPriceLine:r,logScale:i,animations:a,glow:o,upColor:s,downColor:c,drawings:l,settings:u}}function na(e){return e===!1?!1:e===!0||e==null?{toolbar:!1}:{...e,toolbar:!1}}function ra(e){let t=a(e.inputs,e.inputValues()),n=!e.visible;return t||n?{type:e.nativeType,...t?{inputs:t}:{},...n?{hidden:!0}:{}}:e.nativeType}function ia(e){if(!e)return;let t=a(e.inputs,e.inputValues()),n=a(e.props,e.propValues());return t||n?{...t?{inputs:t}:{},...n?{props:n}:{}}:void 0}var aa=class{constructor(e,t,r,a){this.id=e,this.deps=a,this.history=new $i(()=>this.inner),this.instances=[],this.nativeCatalog=[],this.lastCrossTime=null,this.lastCrossPrice=null,this.activeRangeId=null,this.sessionAvailableFlag=!1,this.sessionOvernightFlag=!1,this.sessionShading=new Ci(e=>this.inner?.renderer.set(`sessionZones`,e)),this.manifest=[],this.pendingManifestNames=null,this.volumeMayBePending=!0,this.presentNatives=[],this.rangeBars=0,this.pendingRange=null,this.unresolvedToasted=null,this.extState={},this.indicatorTitlesOn=!0,this.indicatorValuesOn=!0,this.destroyed=!1,this.appTheme=a.theme;let o=yr(r);this.state={symbol:o,provider:w(o??``).provider??void 0,timeframe:r.timeframe,priceStyle:r.priceStyle,bars:r.bars,session:i(r.session)};let s=t.ownerDocument;this.host=s.createElement(`div`),this.host.className=`vela-cell`,this.host.dataset.cellId=e,this.host.style.cssText=`position:relative;overflow:hidden;`,this.host.addEventListener(`pointerdown`,()=>this.deps.activate(e),!0),this.host.addEventListener(`focusin`,()=>this.deps.activate(e)),t.appendChild(this.host),this.inner=new Se(this.host,{...a.chartDefaults,symbol:o,timeframe:r.timeframe,bars:r.bars,priceStyle:r.priceStyle,session:i(r.session),data:r.data,visibleRange:r.visibleRange,theme:a.theme,live:a.live,volume:r.indicators?r.indicators.natives.some(e=>V(e)===`volume`):a.volume,nativeBackend:a.nativeBackend,drawings:na(a.chartDefaults.drawings)},{dataFeed:a.feed});for(let[e,t]of Object.entries(xe(a.engines)))this.inner.registerEngine(e,t());if(this.inner.renderer.set(`attribution`,!1),this.inner.renderer.set(`dialogHost`,a.dialogHost),this.inner.renderer.setLegendActions(n(this.inner,()=>a.context())),this.inner.renderer.setLegendCallouts(re(this.inner,()=>a.context())),this.inner.renderer.supports(`historyChords`)&&this.inner.renderer.set(`historyChords`,!1),this.history.onChart(this.inner),this.inner.renderer.onConfigChanged(()=>{let e=this.inner?.renderer.get(`timezone`);typeof e==`string`&&v(e)!==v(this.displayTimezone)&&this.deps.setTimezone(v(e));let t=this.priceStyle;t!==(this.state.priceStyle??`candles`)&&(this.state.priceStyle=t,this.deps.onPriceStyleChanged(this.id)),this.syncStatuslineColors(),this.syncPlotOverlayTokens()}),this.inner.on(`theme:changed`,e=>{this.appTheme=e,this.syncPlotOverlayTokens()}),this.syncPlotOverlayTokens(),r.rendererConfig!=null&&this.inner.renderer.applyConfig(r.rendererConfig),r.drawings!=null&&this.inner.drawings.fromJSON(r.drawings),r.indicators){for(let e of r.indicators.natives){let t=this.inner.addNativeIndicator(V(e));this.applyNativeLedgerEntry(t,e)}this.pendingManifestNames=[...r.indicators.manifest]}this.volumeIntent=r.indicators?r.indicators.natives.some(e=>V(e)===`volume`):a.volume,this.extState={...r.ext??{}},this.inner.on(`load:end`,()=>{this.volumeMayBePending=!1}),this.inner.on(`data:unresolved`,({symbol:e,providers:t})=>{if(this.unresolvedToasted===e)return;this.unresolvedToasted=e;let n=t.length>0?t.join(`, `):`none`;this.deps.toast(`No registered provider serves "${e}" (registered: ${n})`,`error`,6e3)}),this.inner.on(`load:start`,()=>this.watermark?.setLoading(!0)),this.inner.on(`load:end`,()=>{this.watermark?.setLoading(!1),this.refreshSessionShading()}),this.inner.on(`viewport:changed`,e=>this.sessionShading.updateRange(e)),this.applyTimezone(),this.indicatorTitlesOn=r.indicatorTitles??!0,this.indicatorTitlesOn||this.inner.renderer.set(`indicatorTitles`,!1),this.indicatorValuesOn=r.indicatorValues??!0,this.indicatorValuesOn||this.inner.renderer.set(`indicatorValues`,!1),this.watermarkOn=r.watermark??a.watermark,this.watermark=a.watermark?new $r(this.host,o??``,r.timeframe??`60`):null,this.watermarkOn||this.watermark?.setVisible(!1),this.statusline=a.statusline?new qr(this.host,o??``,e=>this.inner?.data.symbolIcon(e)):null,this.statusline?.setMeta(r.timeframe??`60`,this.state.provider??``),this.statusline?.onChart(this.inner),this.statusline?.attachMenu({setPart:(e,t)=>this.setStatuslinePart(e,t),chartVisible:()=>this.inner?.renderer.get(`candleVisible`)!==!1,setChartVisible:e=>this.inner?.renderer.set(`candleVisible`,e)}),this.marketStatus=this.statusline?new Ni(e=>this.statusline?.setMarketStatus(e)):null,this.inner.data.ready().then(()=>{this.inner&&this.state.symbol&&(this.statusline?.setSymbol(this.state.symbol),this.statusline?.setMeta(this.state.timeframe??`60`,this.inner.data.displayPrefix(this.state.symbol)??this.state.provider??``)),this.refreshSymbolMetadata(),this.inner&&this.state.symbol&&this.marketStatus?.track(this.inner.data,this.state.symbol)}),this.syncStatuslineColors(),this.cellControls=new Qi(this.host,{chart:()=>this.inner,reset:()=>this.resetView(),multiCell:()=>a.multiCell(),isMaximized:()=>a.isMaximized(e),toggleMaximize:()=>a.toggleMaximize(e),dragTargetAt:(t,n)=>a.cellDragTarget(e,t,n),previewDrop:e=>a.previewDropTarget(e),dropOn:t=>a.dropCell(e,t)}),this.contextMenu=new pi(this.host,{resetView:()=>this.resetView(),timezone:()=>this.deps.timezone(),setTimezone:e=>this.deps.setTimezone(e),getContext:()=>this.deps.context()}),this.contextMenu.onChart(this.inner),this.inner.renderer.onCrosshairMove(e=>{this.lastCrossTime=e.time,this.lastCrossPrice=e.price}),this.inner.on(`indicator:added`,()=>{this.syncPresentNatives(),this.refreshNativeCatalog()}),this.inner.on(`indicator:inputs`,()=>this.deps.onStateDirty()),this.inner.on(`indicator:visibility`,()=>this.deps.onStateDirty()),this.inner.on(`indicator:removed`,({id:e})=>{if(this.destroyed)return;let t=this.instances.findIndex(t=>t.handle?.id===e);if(t>=0){let e=this.instances[t];this.instances.splice(t,1),this.history.push({undo:()=>{e.handle=this.addToChart(e.entry,e.values),this.instances.push(e),this.deps.onIndicatorsChanged(this.id)},redo:()=>this.dropInstance(e)})}else{let t=this.presentNatives.find(t=>t.id===e);if(t){let{type:e}=t,n=null;this.history.push({undo:()=>{n=this.inner?.addNativeIndicator(e)??null,this.refreshNativeCatalog()},redo:()=>{n?.remove(),n=null,this.refreshNativeCatalog()}})}}this.syncPresentNatives(),this.refreshNativeCatalog()}),this.syncPresentNatives(),this.refreshNativeCatalog(),this.pushSettingsSections(),this.offMarket=this.inner.on(`market:changed`,({symbol:e,timeframe:t})=>{this.projectMarket(e,t),this.refreshNativeCatalog(),this.refreshSymbolMetadata(),this.inner&&this.marketStatus?.track(this.inner.data,e),this.deps.onMarketChanged(this.id)})}projectMarket(e,t){this.state.symbol=e,this.state.provider=w(e).provider??void 0,this.state.timeframe=t,this.state.session=i(this.inner?.market.session),this.watermark?.update(e,t),this.statusline?.setSymbol(e),this.statusline?.setMeta(t,this.inner?.data.displayPrefix(e)??this.state.provider??``),this.inner&&this.statusline?.onChart(this.inner)}get sessionAvailable(){return this.sessionAvailableFlag}get session(){return i(this.state.session)??`regular`}setSession(e){e!==this.session&&(this.state.session=e,this.deps.onStateDirty(),this.inner?.setMarket({session:e}))}get exchangeTimezone(){return this.exchangeZone}get displayTimezone(){return ie(this.deps.timezone(),this.exchangeZone)}applyTimezone(){let e=this.inner;if(!e)return;let t=this.displayTimezone,n=e.renderer.get(`timezone`);v(typeof n==`string`&&n?n:`UTC`)!==v(t)&&e.renderer.set(`timezone`,t)}refreshSymbolMetadata(){let e=this.inner,t=this.state.symbol;e&&t&&e.data.symbolInfo(t).then(t=>{if(this.inner!==e)return;let n=typeof t?.session==`string`&&t.session!==``&&t.session!==`24x7`,r=gi(t)?.overnight===!0,i=typeof t?.timezone==`string`&&t.timezone!==``?t.timezone:void 0,a=i!==this.exchangeZone;a&&(this.exchangeZone=i,this.applyTimezone()),(n!==this.sessionAvailableFlag||r!==this.sessionOvernightFlag||a)&&(this.sessionAvailableFlag=n,this.sessionOvernightFlag=r,this.deps.onMarketChanged(this.id),this.pushSettingsSections()),this.refreshSessionShading()})}refreshSessionShading(){let e=this.inner,t=this.state.symbol;if(!e||!t)return;let n=Date.now(),r=Math.max(this.state.bars??1e3,this.rangeBars)*F(this.state.timeframe??`60`),i=Number.isFinite(r)?Math.max(2592e5,r):2592e5,a=e.getVisibleRange()??{from:n-i,to:n};this.sessionShading.track(e.data,t,{session:this.session,timeframe:this.timeframe,range:a})}sessionShadeColor(e){let t=(this.inner?.renderer.getConfig())?.sessions?.[e];return typeof t==`string`?t:``}setSessionShadeColor(e,t){this.inner?.renderer.applyConfig({sessions:{[e]:t}}),this.deps.onStateDirty()}pushSettingsSections(){let e=this.inner;if(!e)return;let t=`Regular hours (RTH)`,n=`Extended hours (ETH)`,r=this.sessionOvernightFlag?[{kind:`color`,label:`Extended hours`,id:`extended-color`,get:()=>this.sessionShadeColor(`extendedColor`),set:e=>this.setSessionShadeColor(`extendedColor`,e)}]:[{kind:`color`,label:`Pre-market`,id:`premarket-color`,get:()=>this.sessionShadeColor(`premarketColor`),set:e=>this.setSessionShadeColor(`premarketColor`,e)},{kind:`color`,label:`Post-market`,id:`postmarket-color`,get:()=>this.sessionShadeColor(`postmarketColor`),set:e=>this.setSessionShadeColor(`postmarketColor`,e)}],i={title:`Trading session`,id:`trading-session`,placement:`symbol`,rows:[{kind:`select`,label:`Session`,id:`session`,options:[t,n],get:()=>this.session===`extended`?n:t,set:e=>this.setSession(e===n?`extended`:`regular`)},...r]},a={title:`Advanced`,id:`advanced`,placement:`end`,rows:[{kind:`select`,label:`Bars to fetch`,id:`bars`,options:[`500`,`1000`,`2000`,`5000`,`10000`,`20000`,`50000`,`60000`,`80000`,`100000`],get:()=>String(this.state.bars??1e3),set:e=>{this.state.bars=Number(e),this.deps.onStateDirty(),this.inner?.setMarket({bars:Math.max(this.state.bars,this.rangeBars)})}}]},o={title:`Watermark`,id:`watermark`,placement:`symbol`,rows:[{kind:`toggle`,label:`Symbol watermark`,id:`visible`,get:()=>this.watermarkOn,set:e=>this.setWatermarkVisible(e)}]},s=[];if(this.statusline){let e=this.statusline;s.push({title:`Status line`,id:`status-line`,rows:[{kind:`heading`,label:`Status line`,id:`parts`},{kind:`toggle`,label:`Symbol name`,id:`name`,get:()=>e.partVisible(`name`),set:e=>this.setStatuslinePart(`name`,e)},{kind:`toggle`,label:`Market status`,id:`market`,get:()=>e.partVisible(`market`),set:e=>this.setStatuslinePart(`market`,e)},{kind:`toggle`,label:`OHLC values`,id:`ohlc`,get:()=>e.partVisible(`ohlc`),set:e=>this.setStatuslinePart(`ohlc`,e)},{kind:`toggle`,label:`Bar change values`,id:`change`,get:()=>e.partVisible(`change`),set:e=>this.setStatuslinePart(`change`,e)},{kind:`heading`,label:`Indicators`,id:`indicators`},{kind:`toggle`,label:`Titles`,id:`indicator-titles`,get:()=>this.indicatorTitlesOn,set:e=>this.setIndicatorTitlesVisible(e)},{kind:`toggle`,label:`Values`,id:`indicator-values`,get:()=>this.indicatorValuesOn,set:e=>this.setIndicatorValuesVisible(e)}]})}s.push(a),this.sessionAvailableFlag&&s.push(i),s.push(o),e.renderer.setSettingsSections(s)}setWatermarkVisible(e){this.watermarkOn=e,this.watermark?.setVisible(e),this.deps.onStateDirty()}setIndicatorTitlesVisible(e){this.indicatorTitlesOn=e,this.inner?.renderer.set(`indicatorTitles`,e),this.deps.onStateDirty(),this.deps.onStatusPrefsChanged(this.id)}setIndicatorValuesVisible(e){this.indicatorValuesOn=e,this.inner?.renderer.set(`indicatorValues`,e),this.deps.onStateDirty(),this.deps.onStatusPrefsChanged(this.id)}setStatuslinePart(e,t){this.statusline?.setPartVisible(e,t),this.deps.onStatusPrefsChanged(this.id)}statusPrefs(){let e=this.statusline;return{parts:e?{logo:e.partVisible(`logo`),name:e.partVisible(`name`),market:e.partVisible(`market`),ohlc:e.partVisible(`ohlc`),change:e.partVisible(`change`)}:null,indicatorTitles:this.indicatorTitlesOn,indicatorValues:this.indicatorValuesOn}}applyStatusPrefs(e){if(e.parts&&this.statusline)for(let t of Object.keys(e.parts))this.statusline.partVisible(t)!==e.parts[t]&&this.statusline.setPartVisible(t,e.parts[t]);e.indicatorTitles!==this.indicatorTitlesOn&&this.setIndicatorTitlesVisible(e.indicatorTitles),e.indicatorValues!==this.indicatorValuesOn&&this.setIndicatorValuesVisible(e.indicatorValues)}get chart(){if(!this.inner)throw Error(`[vela] cell "${this.id}" is destroyed`);return this.inner}get symbol(){return this.state.symbol??``}get timeframe(){return this.state.timeframe??`60`}get priceStyle(){let e=this.inner?.renderer.get(`priceStyle`);return typeof e==`string`?e:this.state.priceStyle??`candles`}get indicatorCount(){return this.instances.length+(this.inner?this.nativeHandles().length:this.presentNatives.length)}setSymbol(e){this.inner&&e!==this.symbol&&(this.unresolvedToasted=null,this.inner.setMarket({symbol:e}),this.projectMarket(e,this.timeframe),this.deps.onMarketChanged(this.id))}setTimeframe(e){this.inner&&e!==this.timeframe&&(this.activeRangeId=null,this.rangeBars=0,this.inner.setMarket({timeframe:e,bars:this.state.bars}),this.projectMarket(this.symbol,e),this.deps.onMarketChanged(this.id))}setPriceStyle(e){this.state.priceStyle=e,this.inner?.renderer.set(`priceStyle`,e),this.syncStatuslineColors(),this.deps.onPriceStyleChanged(this.id)}syncStatuslineColors(){this.statusline&&this.inner&&this.statusline.setDirectionColors(...Kr(this.inner.renderer,this.priceStyle))}setStatuslineFit(e){this.statusline?.setFitMode(e)}syncPlotOverlayTokens(){me(this.host,this.appTheme,this.inner?.renderer.getConfig()??null)}applyRange(e){if(!this.inner||this.destroyed)return;this.activeRangeId=e.id;let t=e.tf!==this.timeframe,n=e.bars>Math.max(this.state.bars??500,this.rangeBars);this.rangeBars=e.bars,t||n?(this.pendingRange=e,this.inner.setMarket({timeframe:e.tf,bars:Math.max(this.state.bars??500,this.rangeBars),visibleRange:e.preset}).then(()=>{!this.destroyed&&this.pendingRange===e&&(this.inner?.setVisibleRangePreset(e.preset),this.pendingRange=null)})):this.inner.setVisibleRangePreset(e.preset)}resetView(){this.inner?.renderer.set(`autoScale`,!0),this.inner?.setVisibleRangePreset(`ALL`)}refreshControls(){this.cellControls.refresh()}setControlsSuspended(e){this.cellControls.setSuspended(e)}focus(){this.deps.activate(this.id),this.inner?.renderer.focus()}screenshotCanvas(){return this.inner?.renderer.screenshotCanvas()??null}downloadScreenshot(){let e=this.inner?.renderer.screenshot();if(!e)return;let t=this.host.ownerDocument.createElement(`a`);t.href=e,t.download=`${this.symbol||`chart`}-${this.timeframe}.png`,t.click()}setManifest(e,t){if(this.manifest=e,this.pendingManifestNames){if(e.length===0)return;for(let t of this.pendingManifestNames){let n=e.find(e=>e.name===gr(t));n&&this.addManifestInstance(n,{record:!1,...typeof t==`object`?{inputs:t.inputs,props:t.props,hidden:t.hidden}:{}})}this.pendingManifestNames=null;return}if(t)for(let t of e)t.enabled&&this.addManifestInstance(t,{record:!1})}applyIndicatorLedger(e){let t=this.inner;t&&(this.volumeIntent=e.natives.some(e=>V(e)===`volume`),this.history.silently(()=>{let n=new Map;for(let t of e.natives){let e=V(t),r=n.get(e);r?r.push(t):n.set(e,[t])}for(let e of this.nativeHandles()){let t=n.get(e.nativeType)?.shift();t===void 0?e.remove():this.applyNativeLedgerEntry(e,t)}for(let e of n.values())for(let n of e){let e=t.addNativeIndicator(V(n));this.applyNativeLedgerEntry(e,n)}for(let e of[...this.instances])this.dropInstance(e);if(this.manifest.length>0){for(let t of e.manifest){let e=this.manifest.find(e=>e.name===gr(t));e&&this.addManifestInstance(e,{record:!1,...typeof t==`object`?{inputs:t.inputs,props:t.props,hidden:t.hidden}:{}})}this.pendingManifestNames=null}else this.pendingManifestNames=this.deps.manifestSettled()?null:[...e.manifest]}),this.syncPresentNatives(),this.refreshNativeCatalog())}supportedNatives(){return this.nativeCatalog.filter(e=>e.supported).sort((e,t)=>e.title.localeCompare(t.title,`en`,{sensitivity:`base`}))}libraryRows(){return[...this.supportedNatives().map(e=>({name:e.title,category:`Vela`,native:!0,nativeType:e.type,beta:e.beta})),...this.manifest.map(e=>({name:e.name,language:e.language,category:e.category}))]}onChartRows(){return[...this.nativeHandles().map(e=>({name:e.title,native:!0,nativeType:e.nativeType})),...this.instances.map(e=>({name:e.entry.name,language:e.entry.language}))]}addFromLibrary(e){let t=this.supportedNatives();if(e<t.length)this.addNative(t[e].type);else{let n=this.manifest[e-t.length];n&&this.addManifestInstance(n)}}removeFromChart(e){let t=this.nativeHandles();e<t.length?this.removeNative(t[e]):this.removeInstance(e-t.length)}addExternalIndicator(e){let{id:t,inputs:n,props:r,hidden:i,...a}=e;this.addManifestInstance({...a,enabled:!0},{external:!0,...t===void 0?{}:{id:t},...n?{inputs:n}:{},...r?{props:r}:{},...i?{hidden:!0}:{}})}addManifestInstance(e,t={}){if(this.destroyed)return;let n=t.inputs||t.props?{inputs:t.inputs,props:t.props}:void 0,r=this.addToChart(e,n,t.id);if(!r)return;let i={entry:e,handle:r,id:r.id,...t.external?{external:!0}:{},...n?{values:n}:{}};if(t.hidden&&i.handle?.setVisible(!1),this.instances.push(i),this.deps.onIndicatorsChanged(this.id),t.record===!1)return;let a=i;this.history.push({undo:()=>this.dropInstance(a),redo:()=>{a.handle=this.addToChart(a.entry,a.values,a.id),this.instances.push(a),this.deps.onIndicatorsChanged(this.id)}})}removeInstance(e){let t=this.instances[e];if(!t||this.destroyed)return;this.dropInstance(t);let n=t;this.history.push({undo:()=>{n.handle=this.addToChart(n.entry,n.values,n.id),this.instances.push(n),this.deps.onIndicatorsChanged(this.id)},redo:()=>this.dropInstance(n)})}dropInstance(e){let t=this.instances.indexOf(e);t>=0&&this.instances.splice(t,1);let n=ia(e.handle);n?e.values=n:delete e.values;try{e.handle?.remove()}catch{}e.handle=null,this.deps.onIndicatorsChanged(this.id)}applyNativeLedgerEntry(e,t){let n=typeof t==`string`?void 0:t.inputs;if(e.inputs.length>0){let t=e.inputValues(),r={};for(let i of e.inputs){let e=n?.[i.key]??i.defval;JSON.stringify(t[i.key])!==JSON.stringify(e)&&(r[i.key]=e)}Object.keys(r).length>0&&e.setInputs(r)}else n&&e.setInputs(n);let r=!(typeof t==`object`&&t.hidden);e.visible!==r&&e.setVisible(r)}addNative(e){let t=this.inner;if(!t)return;let n=new Set(t.indicators().map(e=>e.id)),r=t.addNativeIndicator(e);this.syncPresentNatives(),this.refreshNativeCatalog(),!n.has(r.id)&&this.history.push({undo:()=>{r?.remove(),r=null,this.refreshNativeCatalog()},redo:()=>{r=this.inner?.addNativeIndicator(e)??null,this.refreshNativeCatalog()}})}removeNative(e){e.remove(),this.refreshNativeCatalog()}nativeHandles(){return this.inner?.indicators().filter(e=>e.nativeType!==void 0)??[]}syncPresentNatives(){this.presentNatives=this.nativeHandles().map(e=>({id:e.id,type:e.nativeType}))}refreshNativeCatalog(){let e=this.inner;e&&e.availableNativeIndicators().then(t=>{this.destroyed||this.inner!==e||(this.nativeCatalog=t.map(e=>({type:e.type,title:e.title,supported:e.supported,present:e.present,beta:e.beta})),this.deps.onIndicatorsChanged(this.id))})}addToChart(e,t,n){try{return this.inner?.addIndicator(e.script,{...n===void 0?{}:{id:n},...e.language===void 0?{}:{language:e.language},...t?.inputs?{inputs:t.inputs}:{},...t?.props?{props:t.props}:{}})??null}catch(t){return console.warn(`[vela] indicator "${e.name}" failed to add:`,t),null}}stateContext(){return{cellId:this.id,chart:this.chart,addIndicator:e=>this.history.silently(()=>this.addExternalIndicator(e)),addNativeIndicator:e=>this.history.silently(()=>this.addNative(e))}}restorePersistedExt(){if(!this.destroyed){for(let e of C(`cell`))if(e.key in this.extState)try{this.history.silently(()=>e.restore(this.extState[e.key],this.stateContext()))}catch(t){console.warn(`[vela] state persistence "${e.key}" restore failed:`,t)}}}dehydrateExt(){let e={...this.extState};for(let t of C(`cell`))try{let n=t.serialize(this.stateContext());n===void 0?delete e[t.key]:e[t.key]=n}catch(e){console.warn(`[vela] state persistence "${t.key}" serialize failed:`,e)}return this.extState=e,Object.keys(e).length>0?e:void 0}rehydrate(e){if(!this.inner||this.destroyed)return;e.priceStyle&&e.priceStyle!==this.priceStyle&&this.setPriceStyle(e.priceStyle),e.watermark!==void 0&&e.watermark!==this.watermarkOn&&this.setWatermarkVisible(e.watermark),e.indicatorTitles!==void 0&&e.indicatorTitles!==this.indicatorTitlesOn&&this.setIndicatorTitlesVisible(e.indicatorTitles),e.indicatorValues!==void 0&&e.indicatorValues!==this.indicatorValuesOn&&this.setIndicatorValuesVisible(e.indicatorValues),e.rendererConfig!=null&&this.inner.renderer.applyConfig(e.rendererConfig),e.drawings!=null&&this.inner.drawings.fromJSON(e.drawings),e.indicators&&this.applyIndicatorLedger(e.indicators),this.extState={...e.ext??{}},this.restorePersistedExt();let t=yr(e),n=i(e.session)??`regular`,r=typeof e.bars==`number`&&Number.isFinite(e.bars)&&e.bars>0?e.bars:0,a={};t&&t!==this.symbol&&(a.symbol=t),e.timeframe&&e.timeframe!==this.timeframe&&(a.timeframe=e.timeframe),n!==this.session&&(this.state.session=n,a.session=n),r>0&&r!==this.state.bars&&(this.state.bars=r,a.bars=Math.max(r,this.rangeBars)),Object.keys(a).length>0&&this.inner.setMarket(a)}dehydrate(){let e=this.inner?.market,t=this.inner?this.dehydrateExt():Object.keys(this.extState).length>0?{...this.extState}:void 0;return{...this.state,...e?{symbol:e.symbol,provider:e.provider,timeframe:e.timeframe}:{},priceStyle:this.priceStyle,watermark:this.watermarkOn,indicatorTitles:this.indicatorTitlesOn,indicatorValues:this.indicatorValuesOn,rendererConfig:this.inner?.renderer.getConfig()??void 0,drawings:this.inner?this.inner.drawings.toJSON():void 0,indicators:_r({present:this.inner?this.nativeHandles().map(e=>ra(e)):[],instanceEntries:this.instances.filter(e=>!e.external).map(e=>{let t=e.handle?ia(e.handle):e.values,n=e.handle?!e.handle.visible:!1;return t||n?{name:e.entry.name,...t??{},...n?{hidden:!0}:{}}:e.entry.name}),pendingManifest:this.pendingManifestNames,manifestSettled:this.deps.manifestSettled(),volumePending:this.volumeMayBePending&&this.volumeIntent}),...t?{ext:t}:{}}}destroy(){this.destroyed=!0,this.offMarket(),this.cellControls.destroy(),this.contextMenu.destroy(),this.history.destroy(),this.marketStatus?.stop(),this.sessionShading.stop(),this.statusline?.destroy(),this.watermark?.destroy(),this.inner?.destroy(),this.inner=null,this.host.remove()}},q=new Map;function J(e){q.set(e.id,e)}function oa(e){q.delete(e)}function sa(e){return q.get(e)}function ca(){return[...q.values()]}function Y(e){return Array.from({length:e},(e,t)=>({id:`c${t+1}`}))}function la(){J({id:`1`,label:`Single`,cols:[1],rows:[1],cells:Y(1)}),J({id:`2h`,label:`2 side by side`,cols:[1,1],rows:[1],cells:Y(2)}),J({id:`2v`,label:`2 stacked`,cols:[1],rows:[1,1],cells:Y(2)}),J({id:`4`,label:`4 grid`,cols:[1,1],rows:[1,1],cells:Y(4)}),J({id:`8`,label:`8 grid`,cols:[1,1,1,1],rows:[1,1],cells:Y(8)})}var ua=4,da={"1x1":`1`,"1x2":`2h`,"2x1":`2v`,"2x2":`4`,"2x4":`8`},fa=e=>Math.max(1,Math.min(4,Math.round(e)));function X(e,t){let n=fa(e),r=fa(t),i=da[`${n}x${r}`];return(i?q.get(i):void 0)||{id:`g${n}x${r}`,label:`${r} \xD7 ${n} grid`,cols:Array.from({length:r},()=>1),rows:Array.from({length:n},()=>1),cells:Y(n*r)}}var pa=/^g([1-4])x([1-4])$/;function Z(e){let t=q.get(e);if(t)return t;let n=pa.exec(e);if(n)return X(Number(n[1]),Number(n[2]))}function Q(e){return!e.areas&&e.rows.length<=4&&e.cols.length<=4&&e.cells.length===e.rows.length*e.cols.length?{rows:e.rows.length,cols:e.cols.length}:null}function ma(e){if(e.areas)return e.areas.map(e=>e.trim().split(/\s+/));let t=e.cols.length;return e.rows.map((n,r)=>e.cols.map((n,i)=>e.cells[r*t+i]?.id??`\xB7${r}x${i}`))}function ha(e,t){let n=t?.cols?.length===e.cols.length?t.cols:e.cols,r=t?.rows?.length===e.rows.length?t.rows:e.rows,i={display:`grid`,gridTemplateColumns:n.map(e=>`${e}fr`).join(` `),gridTemplateRows:r.map(e=>`${e}fr`).join(` `)};e.areas&&(i.gridTemplateAreas=e.areas.map(e=>`"${e}"`).join(` `));let a={};for(let t of e.cells)a[t.id]=t.area?{gridArea:t.area}:{};return{container:i,perCell:a}}function ga(e,t){return e!=null&&t.includes(e)?e:t[0]??null}function _a(e,t,n){let r=[...e];if(n==null||t<=0)return r;let i=r.indexOf(n);return i<0||i<t?r:(r.splice(i,1),r.splice(t-1,0,n),r)}var va=.1;function ya(e){return Array.from({length:e},()=>1)}function ba(e,t,n,r){let i=[...e],a=i[t],o=i[t+1];if(a===void 0||o===void 0||r<=0)return i;let s=i.reduce((e,t)=>e+t,0),c=s*va,l=n/r*s;return l=Math.max(l,c-a),l=Math.min(l,o-c),i[t]=a+l,i[t+1]=o-l,i}function xa(e,t,n){let r=e.reduce((e,t)=>e+t,0);if(r<=0)return[];let i=t-n*(e.length-1),a=[],o=0;for(let t=0;t<e.length-1;t+=1)o+=e[t]/r*i,a.push(o+n*t+n/2);return a}function Sa(e,t,n){let r=t===`cols`?e.length:e[0]?.length??0,i=r=>t===`cols`?e[r]?.[n]!==e[r]?.[n+1]:e[n]?.[r]!==e[n+1]?.[r],a=[];for(let e=0;e<r;e+=1){if(!i(e))continue;let t=a[a.length-1];t&&t[1]===e-1?t[1]=e:a.push([e,e])}return a}function Ca(e,t,n,r,i){let a=e.reduce((e,t)=>e+t,0);if(a<=0)return{start:0,end:0};let o=t-n*(e.length-1),s=t=>e.slice(0,t).reduce((e,t)=>e+t/a*o,0)+n*t;return{start:r===0?0:s(r)-n/2,end:i===e.length-1?t:s(i+1)-n/2}}var $=8,wa=class{constructor(e,t){this.container=e,this.deps=t,this.strips=[],this.drag=null}layout(){let{cols:e,rows:t}=this.deps.tracks(),n=this.deps.grid(),r=this.container.getBoundingClientRect(),i=this.deps.gapPx(),a=[];for(let[o,s]of xa(e,r.width,i).entries())for(let[e,c]of Sa(n,`cols`,o)){let{start:n,end:l}=Ca(t,r.height,i,e,c);a.push({axis:`cols`,index:o,css:`left:${Math.round(s-$/2)}px;top:${Math.round(n)}px;width:${$}px;height:${Math.round(l-n)}px;cursor:col-resize;`})}for(let[o,s]of xa(t,r.height,i).entries())for(let[t,c]of Sa(n,`rows`,o)){let{start:n,end:l}=Ca(e,r.width,i,t,c);a.push({axis:`rows`,index:o,css:`left:${Math.round(n)}px;top:${Math.round(s-$/2)}px;width:${Math.round(l-n)}px;height:${$}px;cursor:row-resize;`})}for(;this.strips.length>a.length;)this.strips.pop().remove();for(;this.strips.length<a.length;)this.strips.push(this.makeStrip());for(let[e,t]of a.entries())this.place(this.strips[e],t.axis,t.index,t.css)}destroy(){for(let e of this.strips.splice(0))e.remove();this.drag=null}makeStrip(){let e=document.createElement(`div`);return e.className=`vela-ws-splitter`,e.style.cssText=`position:absolute;z-index:30;`,e.addEventListener(`pointerdown`,t=>this.onDown(e,t)),e.addEventListener(`dblclick`,()=>{let t=e.dataset.axis;t&&this.deps.reset(t)}),this.container.appendChild(e),e}place(e,t,n,r){e.dataset.axis=t,e.dataset.index=String(n),e.style.cssText=`position:absolute;z-index:30;${r}`}onDown(e,t){let n=e.dataset.axis,r=Number(e.dataset.index);if(!n||Number.isNaN(r))return;t.preventDefault();let i=this.container.getBoundingClientRect(),a=this.deps.gapPx(),o=this.deps.tracks()[n];this.drag={axis:n,index:r,startPx:n===`cols`?t.clientX:t.clientY,startWeights:[...o],sizePx:(n===`cols`?i.width:i.height)-a*(o.length-1)};try{e.setPointerCapture(t.pointerId)}catch{}let s=e=>{let t=this.drag;if(!t)return;let n=(t.axis===`cols`?e.clientX:e.clientY)-t.startPx;this.deps.apply(t.axis,ba(t.startWeights,t.index,n,t.sizePx))},c=()=>{this.drag=null,e.removeEventListener(`pointermove`,s),e.removeEventListener(`pointerup`,c),e.removeEventListener(`pointercancel`,c)};e.addEventListener(`pointermove`,s),e.addEventListener(`pointerup`,c),e.addEventListener(`pointercancel`,c)}},Ta=`vela-widget-toast`,Ea=`
.vela-toast {
    position: absolute;
    left: 50%;
    bottom: 34px;
    transform: translateX(-50%);
    z-index: 30;
    display: none;
    align-items: center;
    gap: 8px;
    max-width: 70%;
    padding: 6px 14px;
    border-radius: 999px;
    background: var(--vela-surface-elev);
    border: 1px solid var(--vela-border);
    color: var(--vela-fg);
    font-size: var(--vela-font-size-md);
    box-shadow: var(--vela-shadow);
    pointer-events: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.vela-toast[data-open] { display: inline-flex; }
.vela-toast[data-type='error'] { color: var(--vela-down); border-color: var(--vela-down); }
.vela-toast[data-type='success'] { color: var(--vela-up); }
`,Da=class{constructor(e){this.timer=null,y(Ta,Ea,e.ownerDocument),this.el=e.ownerDocument.createElement(`div`),this.el.className=`vela-toast`,e.appendChild(this.el)}show(e,t=`info`,n=3e3){this.el.textContent=e,this.el.dataset.type=t,this.el.dataset.open=`1`,this.timer&&clearTimeout(this.timer),this.timer=n>0?setTimeout(()=>this.hide(),n):null}hide(){delete this.el.dataset.open,this.timer&&clearTimeout(this.timer),this.timer=null}destroy(){this.hide(),this.el.remove()}},Oa=[[`trendline`,`drawings.trendline`],[`hline`,`drawings.hline-cursor`],[`vline`,`drawings.vline-cursor`]];function ka(e){let t=new Map(e.bindings().map(e=>[e.id,e.display[0]])),n={};for(let[e,r]of Oa){let i=t.get(r);i&&(n[e]=i)}return n}var Aa=640,ja=920;function Ma(e,t,n){return e===`auto`?t<=0?`desktop`:t<Aa||n&&t<ja?`mobile`:`desktop`:e}var Na=class{constructor(e,t=`auto`){this.el=e,this.option=t,this.listeners=new Set,this.ro=null,this.mql=null,this.onMediaChange=()=>this.evaluate();let n=e.ownerDocument.defaultView;n&&typeof n.matchMedia==`function`&&(this.mql=n.matchMedia(`(pointer: coarse)`),typeof this.mql.addEventListener==`function`&&this.mql.addEventListener(`change`,this.onMediaChange)),this.mode=Ma(t,e.getBoundingClientRect().width,this.mql?.matches??!1),e.dataset.layout=this.mode,t===`auto`&&n&&typeof n.ResizeObserver==`function`&&(this.ro=new n.ResizeObserver(()=>this.evaluate()),this.ro.observe(e))}get current(){return this.mode}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.ro?.disconnect(),this.ro=null,this.mql&&typeof this.mql.removeEventListener==`function`&&this.mql.removeEventListener(`change`,this.onMediaChange),this.mql=null,this.listeners.clear()}evaluate(){let e=Ma(this.option,this.el.getBoundingClientRect().width,this.mql?.matches??!1);if(e!==this.mode){this.mode=e,this.el.dataset.layout=e;for(let t of[...this.listeners])t(e)}}},Pa=`vela-widget-mobilebar`,Fa=`
.vela-mobilebar {
    display: none;
    align-items: stretch;
    gap: 2px;
    padding: 4px 6px calc(4px + env(safe-area-inset-bottom, 0px));
    border-top: 1px solid var(--vela-border);
    color: var(--vela-fg-muted);
    flex: none;
}
[data-layout='mobile'] .vela-mobilebar { display: flex; }
[data-layout='mobile'] .vela-widget-topbar { display: none; }
[data-layout='mobile'] .vela-widget-bottombar { display: none; }
.vela-mb-item {
    all: unset;
    flex: 1 1 0;
    min-width: 0;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border-radius: 6px;
    cursor: pointer;
    color: var(--vela-fg-bright);
    font-size: 13px;
    font-weight: 600;
    -webkit-tap-highlight-color: transparent;
}
.vela-mb-item[hidden] { display: none !important; }
.vela-mb-item:active { background: var(--vela-hover); }
.vela-mb-item .vela-icon { font-size: 18px; width: 18px; height: 18px; }
/* A lit stop (the maximize toggle while something is isolated): the inverse
   "selected" chip — white on the dark theme, dark on the light one. */
.vela-mb-item.vela-mb-on, .vela-mb-item.vela-mb-on:active { background: var(--vela-selected-bg); color: var(--vela-selected-fg); }
/* Left-aligned contributed actions get their own stops (the built-in indicators
   slot) — the wrapper is layout-transparent so each stop flexes like a sibling. */
.vela-mb-actions { display: contents; }
.vela-mb-symbol {
    flex: 1.6 1 0;
    font-size: 14px;
    letter-spacing: 0.3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    line-height: 44px;
    text-align: center;
}
`,Ia=class{constructor(e,t){this.opts=t;let n=e.ownerDocument;y(Pa,Fa,n),this.el=n.createElement(`div`),this.el.className=`vela-mobilebar`;let r=(e,t,r,i)=>{let a=n.createElement(`button`);return a.className=`vela-mb-item ${e}`,a.setAttribute(`aria-label`,t),i&&a.appendChild(h(i,n)),a.addEventListener(`click`,r),a};this.symbolEl=r(`vela-mb-symbol`,`Symbol search`,t.onSymbolClick),this.symbolEl.textContent=w(t.symbol).ticker,this.tfEl=r(`vela-mb-tf`,`Timeframe`,t.onTimeframeClick),this.tfEl.textContent=I(t.timeframe);let i=t.onIndicatorsClick,a=i?r(`vela-mb-indicators`,`Indicators`,i,`indicators`):null;this.actionsHost=n.createElement(`span`),this.actionsHost.className=`vela-mb-actions`;let o=t.onDrawingsClick,s=o?r(`vela-mb-drawings`,`Drawings`,o,`pen`):null,c=t.onMaximizeClick;this.maxEl=c?r(`vela-mb-maximize`,`Maximize chart`,c,`maximize`):null;let l=r(`vela-mb-more`,`More`,t.onMoreClick,`kebab`),u=r(`vela-mb-settings`,`Chart settings`,t.onSettingsClick,`gear`);this.el.append(this.symbolEl,this.tfEl,...a?[a]:[],this.actionsHost,...s?[s]:[],...this.maxEl?[this.maxEl]:[],l,u),e.appendChild(this.el),this.renderActions()}renderActions(){let e=this.opts.getContext?.();if(!e)return;let t=this.el.ownerDocument;this.actionsHost.replaceChildren();let n=new Set(Ye);for(let r of x(`topbar`,e).filter(e=>e.align===`left`&&!n.has(e.id))){let e=t.createElement(`button`);e.className=`vela-mb-item`,e.setAttribute(`aria-label`,r.label),r.icon?e.appendChild(h(r.icon,t)):e.appendChild(t.createTextNode(r.label)),e.addEventListener(`click`,()=>{let e=this.opts.getContext?.();e&&r.run(e)}),this.actionsHost.appendChild(e)}}setSymbol(e){this.symbolEl.textContent=w(e).ticker}setTimeframe(e){this.tfEl.textContent=I(e)}setMaximizeActive(e){this.maxEl&&(this.maxEl.classList.toggle(`vela-mb-on`,e),this.maxEl.setAttribute(`aria-label`,e?`Restore layout`:`Maximize chart`),this.maxEl.replaceChildren(h(e?`restore`:`maximize`,this.el.ownerDocument)))}setMaximizeVisible(e){this.maxEl&&(this.maxEl.hidden=!e)}destroy(){this.el.remove()}},La=`vela-widget-tf-drawer`,Ra=`
.vela-tfd-heading {
    padding: 4px 2px 8px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: var(--vela-fg-bright);
}
.vela-tfd-heading + .vela-tfd-ranges,
.vela-tfd-heading + .vela-tfd-grid { padding-top: 0; }
.vela-tfd-ranges {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    scrollbar-width: none;
    /* Sideways-scrolling strip: keep its touches native scroll (the drawer body is pan-y). */
    touch-action: pan-x;
    padding: 0 2px 14px;
}
.vela-tfd-ranges::-webkit-scrollbar { display: none; }
.vela-tfd-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
    gap: 6px;
    padding-bottom: 4px;
}
.vela-tfd-chip {
    all: unset;
    min-height: 40px;
    padding: 0 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    border: 1px solid var(--vela-border);
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    color: var(--vela-fg);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}
.vela-tfd-chip:active { background: var(--vela-hover); }
.vela-tfd-chip[data-active='1'] {
    color: var(--vela-fg-bright);
    border-color: var(--vela-fg-bright);
    background: var(--vela-hover);
}
`,za=class{constructor(e){this.opts=e,this.rangeChips=new Map,this.tfChips=new Map;let t=e.host.ownerDocument;y(La,Ra,t),this.drawer=new N({host:e.host,onOpenChange:e.onOpenChange});let n=t.createElement(`div`);n.className=`vela-tfd-heading`,n.textContent=`Date Range`;let r=t.createElement(`div`);r.className=`vela-tfd-ranges`;for(let n of e.ranges){let i=t.createElement(`button`);i.className=`vela-tfd-chip`,i.textContent=n.id,i.addEventListener(`click`,()=>{e.onRange(n),this.drawer.hide()}),this.rangeChips.set(n.id,i),r.appendChild(i)}let i=t.createElement(`div`);i.className=`vela-tfd-heading`,i.textContent=`Timeframes`;let a=t.createElement(`div`);a.className=`vela-tfd-grid`;for(let n of e.timeframes){let r=t.createElement(`button`);r.className=`vela-tfd-chip`,r.textContent=I(n),r.addEventListener(`click`,()=>{e.onTimeframe(n),this.drawer.hide()}),this.tfChips.set(n,r),a.appendChild(r)}this.drawer.body.append(n,r,i,a)}open(){let e=this.opts.currentTimeframe(),t=this.opts.activeRange();for(let[e,n]of this.rangeChips)t!==null&&e===t?n.dataset.active=`1`:delete n.dataset.active;for(let[n,r]of this.tfChips)t===null&&n===e?r.dataset.active=`1`:delete r.dataset.active;this.drawer.show()}close(){this.drawer.hide()}destroy(){this.drawer.destroy()}},Ba=`vela-widget-drawings-drawer`,Va=`
/* Search + tabs stay pinned while the tool list scrolls underneath. */
.vela-dd-sticky {
    position: sticky;
    top: 0;
    z-index: 1;
    background: var(--vela-surface);
    padding-top: 2px;
}
.vela-dd-search {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    margin: 0 2px 8px;
    border: 1px solid var(--vela-border);
    border-radius: 8px;
    color: var(--vela-fg-muted);
    background: var(--vela-surface);
}
.vela-dd-search input {
    all: unset;
    flex: 1 1 auto;
    min-width: 0;
    font-size: 14px;
    color: var(--vela-fg-bright);
}
.vela-dd-tabs {
    display: flex;
    gap: 4px;
    overflow-x: auto;
    scrollbar-width: none;
    /* The strip scrolls sideways itself — its touches are native scroll, not tab swipes
       (the drawer body is pan-y so everywhere ELSE a sideways move swipes the tabs). */
    touch-action: pan-x;
    padding: 0 2px 8px;
    border-bottom: 1px solid var(--vela-border);
    background: var(--vela-surface);
}
.vela-dd-tabs::-webkit-scrollbar { display: none; }
.vela-dd-tab {
    all: unset;
    flex: none;
    min-height: 36px;
    padding: 0 12px;
    display: inline-flex;
    align-items: center;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    color: var(--vela-fg-muted);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}
.vela-dd-tab[data-active='1'] { color: var(--vela-fg-bright); background: var(--vela-hover); }
.vela-dd-list { padding: 6px 0 4px; }
.vela-dd-section {
    padding: 10px 2px 6px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: var(--vela-fg-muted);
}
.vela-dd-row {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 44px;
    padding: 0 2px;
    border-radius: 8px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}
.vela-dd-row:active { background: var(--vela-hover); }
.vela-dd-row[data-active='1'] { background: var(--vela-hover); }
.vela-dd-row[data-active='1'] .vela-dd-label { color: var(--vela-accent); }
.vela-dd-glyph { flex: none; width: 24px; height: 24px; color: var(--vela-fg); }
.vela-dd-glyph svg { width: 24px; height: 24px; }
.vela-dd-label { flex: 1 1 auto; min-width: 0; font-size: 14px; color: var(--vela-fg-bright); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vela-dd-star {
    all: unset;
    flex: none;
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: var(--vela-fg-muted);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}
.vela-dd-star[data-on='1'] { color: var(--vela-highlight); }
.vela-dd-empty { padding: 18px 2px; color: var(--vela-fg-muted); font-size: 13px; }
`,Ha=class{constructor(e){this.opts=e,this.definition={groups:[]},this.activeGroup=``;let t=e.host.ownerDocument;y(Ba,Va,t),this.drawer=new N({host:e.host,title:`Drawings`,onOpenChange:e.onOpenChange,onSwipe:e=>this.stepGroup(e===`left`?1:-1)});let n=t.createElement(`div`);n.className=`vela-dd-sticky`;let r=t.createElement(`div`);r.className=`vela-dd-search`,r.appendChild(h(`search`,t)),this.input=t.createElement(`input`),this.input.type=`text`,this.input.placeholder=`Search tools…`,this.input.addEventListener(`input`,()=>this.renderList()),r.appendChild(this.input),this.tabs=t.createElement(`div`),this.tabs.className=`vela-dd-tabs`,n.append(r,this.tabs),this.list=t.createElement(`div`),this.list.className=`vela-dd-list`,this.drawer.body.append(n,this.list)}open(){this.definition=this.opts.toolbar(),this.definition.groups.some(e=>e.id===this.activeGroup)||(this.activeGroup=this.definition.groups[0]?.id??``),this.input.value=``,this.renderTabs(),this.renderList(),this.drawer.show()}close(){this.drawer.hide()}destroy(){this.drawer.destroy()}stepGroup(e){if(this.input.value.trim())return;let t=this.definition.groups,n=t[t.findIndex(e=>e.id===this.activeGroup)+e];n&&(this.activeGroup=n.id,this.renderTabs(),this.renderList(),this.tabs.querySelector(`[data-active="1"]`)?.scrollIntoView?.({block:`nearest`,inline:`nearest`}))}renderTabs(){let e=this.tabs.ownerDocument;this.tabs.replaceChildren();for(let t of this.definition.groups){let n=e.createElement(`button`);n.className=`vela-dd-tab`,n.textContent=t.label,t.id===this.activeGroup&&(n.dataset.active=`1`),n.addEventListener(`click`,()=>{this.activeGroup=t.id,this.input.value=``,this.renderTabs(),this.renderList()}),this.tabs.appendChild(n)}}renderList(){let e=this.list.ownerDocument;this.list.replaceChildren();let t=this.input.value.trim().toLowerCase(),n=this.opts.currentTool(),r=t=>{let n=e.createElement(`div`);n.className=`vela-dd-section`,n.textContent=t,this.list.appendChild(n)},i=t=>{let r=e.createElement(`div`);r.className=`vela-dd-row`,t.type===n&&(r.dataset.active=`1`);let i=e.createElement(`span`);i.className=`vela-dd-glyph`,i.innerHTML=t.icon;let a=e.createElement(`span`);a.className=`vela-dd-label`,a.textContent=t.label;let o=e.createElement(`button`);o.className=`vela-dd-star`;let s=t=>{o.replaceChildren(h(t?`star-filled`:`star`,e)),t?o.dataset.on=`1`:delete o.dataset.on};s(this.opts.isFavorite(t.type)),o.setAttribute(`aria-label`,`Favorite ${t.label}`),o.addEventListener(`click`,e=>{e.stopPropagation();let n=!this.opts.isFavorite(t.type);this.opts.onFavorite(t.type,n),s(n)}),r.append(i,a,o),r.addEventListener(`click`,()=>{this.opts.onSelect(t.type),this.drawer.hide()}),this.list.appendChild(r)};if(t){let n=!1;for(let e of this.definition.groups){let a=e.tools.filter(e=>e.label.toLowerCase().includes(t));if(a.length!==0){n=!0,r(e.label);for(let e of a)i(e)}}if(!n){let t=e.createElement(`div`);t.className=`vela-dd-empty`,t.textContent=`No tools match.`,this.list.appendChild(t)}return}let a=this.definition.groups.find(e=>e.id===this.activeGroup);if(a){if(a.sections&&a.sections.length>0)for(let e of a.sections){r(e.label);for(let t of e.tools)i(t)}else for(let e of a.tools)i(e)}}},Ua=`vela-widget-more-drawer`,Wa=`
.vela-md-actions {
    display: flex;
    gap: 6px;
    padding: 2px 2px 10px;
    border-bottom: 1px solid var(--vela-border);
}
.vela-md-action {
    all: unset;
    flex: 1 1 0;
    min-height: 48px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border-radius: 8px;
    font-size: 11px;
    color: var(--vela-fg);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}
.vela-md-action:active { background: var(--vela-hover); }
.vela-md-action:disabled { opacity: 0.35; cursor: default; }
.vela-md-action .vela-icon { font-size: 17px; width: 17px; height: 17px; }
.vela-md-list { padding: 6px 0 4px; }
.vela-md-row {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 46px;
    padding: 0 2px;
    border-radius: 8px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}
.vela-md-row:active { background: var(--vela-hover); }
.vela-md-row[data-checked='1'] { background: var(--vela-hover-strong); }
.vela-md-row .vela-icon { flex: none; font-size: 17px; width: 17px; height: 17px; color: var(--vela-fg-muted); }
.vela-md-row-label { flex: 1 1 auto; min-width: 0; font-size: 14px; color: var(--vela-fg-bright); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vela-md-row-value { flex: none; font-size: 13px; color: var(--vela-fg-muted); }
.vela-md-back {
    all: unset;
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 42px;
    padding: 0 2px;
    font-size: 14px;
    font-weight: 600;
    color: var(--vela-fg-bright);
    cursor: pointer;
    border-bottom: 1px solid var(--vela-border);
    width: 100%;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}
/* The layout sub-view's grid canvas, centered and touch-sized (the base .vela-lp-grid
   squares are popover-sized for a mouse). */
.vela-md-gridwrap { display: flex; justify-content: center; padding: 14px 0 10px; }
.vela-md-gridwrap .vela-lp-grid { grid-template-columns: repeat(4, 44px); grid-auto-rows: 44px; gap: 8px; }
.vela-md-section {
    padding: 12px 2px 4px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: var(--vela-fg-muted);
}
.vela-md-empty { padding: 18px 2px; color: var(--vela-fg-muted); font-size: 13px; }
`,Ga=class{constructor(e){this.opts=e,this.view=`main`,y(Ua,Wa,e.host.ownerDocument),this.drawer=new N({host:e.host,onOpenChange:e.onOpenChange})}open(){this.view=`main`,this.render(),this.drawer.show()}close(){this.drawer.hide()}destroy(){this.drawer.destroy()}show(e){this.view=e,this.render()}render(){let e=this.drawer.body.ownerDocument;if(this.drawer.body.replaceChildren(),this.view!==`main`){let t=e.createElement(`button`);t.className=`vela-md-back`,t.appendChild(h(`chevron-left`,e)),t.appendChild(e.createTextNode(this.view===`style`?`Chart type`:this.view===`layout`?`Layout`:`Alerts`)),t.addEventListener(`click`,()=>this.show(`main`)),this.drawer.body.appendChild(t)}this.view===`main`?this.renderMain(e):this.view===`style`?this.renderStyle(e):this.view===`layout`?this.renderLayout(e):this.renderAlerts(e)}row(e,t,n){let r=e.createElement(`div`);r.className=`vela-md-row`,n.icon&&r.appendChild(h(n.icon,e));let i=e.createElement(`span`);if(i.className=`vela-md-row-label`,i.textContent=t,r.appendChild(i),n.value){let t=e.createElement(`span`);t.className=`vela-md-row-value`,t.textContent=n.value,r.appendChild(t)}return n.checked&&(r.dataset.checked=`1`),n.chevron&&r.appendChild(h(`chevron-right`,e)),r.addEventListener(`click`,n.onClick),r}renderMain(e){let t=e.createElement(`div`);t.className=`vela-md-actions`;let n=(n,r,i,a)=>{let o=e.createElement(`button`);o.className=`vela-md-action`,o.disabled=!i,o.appendChild(h(n,e)),o.appendChild(e.createTextNode(r)),o.addEventListener(`click`,()=>{a(),this.drawer.hide()}),t.appendChild(o)};this.opts.onUndo&&n(`undo`,`Undo`,this.opts.canUndo(),this.opts.onUndo),this.opts.onRedo&&n(`redo`,`Redo`,this.opts.canRedo(),this.opts.onRedo),this.opts.onScreenshot&&n(`camera`,`Screenshot`,!0,this.opts.onScreenshot),t.childElementCount>0&&this.drawer.body.appendChild(t);let r=e.createElement(`div`);r.className=`vela-md-list`;let i=this.opts.priceStyles().find(e=>e.id===this.opts.priceStyle());if(r.appendChild(this.row(e,`Chart type`,{icon:`style-line`,value:i?.label,chevron:!0,onClick:()=>this.show(`style`)})),this.opts.layout){let t=this.opts.layout.shape(),n=t?`${t.cols} \xD7 ${t.rows}`:this.opts.layout.presets().find(e=>e.checked)?.label;r.appendChild(this.row(e,`Layout`,{icon:`layout`,value:n,chevron:!0,onClick:()=>this.show(`layout`)}))}for(let t of this.opts.panels())r.appendChild(this.row(e,t.title,{icon:t.icon,onClick:()=>{this.opts.onTogglePanel(t.id),this.drawer.hide()}}));if(this.opts.alerts){let t=this.opts.alerts().length;r.appendChild(this.row(e,`Alerts`,{icon:`bell`,value:t>0?String(t):void 0,chevron:!0,onClick:()=>this.show(`alerts`)}))}for(let t of this.opts.actions())r.appendChild(this.row(e,t.label,{icon:t.icon,onClick:()=>{t.run(),this.drawer.hide()}}));this.drawer.body.appendChild(r)}renderStyle(e){let t=e.createElement(`div`);t.className=`vela-md-list`;let n=this.opts.priceStyle();for(let r of this.opts.priceStyles())t.appendChild(this.row(e,r.label,{icon:r.icon,checked:r.id===n,onClick:()=>{this.opts.onPriceStyle(r.id),this.drawer.hide()}}));this.drawer.body.appendChild(t)}renderLayout(e){let t=this.opts.layout;if(!t)return;let n=e.createElement(`div`);n.className=`vela-md-list`;let r=e.createElement(`div`);r.className=`vela-md-gridwrap`;let{el:i,squares:a}=Ut(e);Wt(a,t.shape()),i.addEventListener(`click`,e=>{let n=e.target?.closest?.(`.vela-lp-sq`);n instanceof HTMLButtonElement&&(t.onSelectGrid(Number(n.dataset.r)+1,Number(n.dataset.c)+1),this.drawer.hide())}),r.appendChild(i),n.appendChild(r);for(let r of t.presets())n.appendChild(this.row(e,r.label,{checked:r.checked,onClick:()=>{t.onSelectPreset(r.id),this.drawer.hide()}}));let o=t.syncs?.()??[];if(o.length>0){let r=e.createElement(`div`);r.className=`vela-md-section`,r.textContent=`Sync`,n.appendChild(r);for(let r of o)n.appendChild(this.row(e,r.label,{checked:r.checked,onClick:()=>{t.onToggleSync?.(r.id),this.render()}}))}this.drawer.body.appendChild(n)}renderAlerts(e){let t=this.opts.alerts?.()??[];if(t.length===0){let t=e.createElement(`div`);t.className=`vela-md-empty`,t.textContent=`No alerts yet.`,this.drawer.body.appendChild(t);return}let n=e.createElement(`div`);n.className=`vela-md-list`;for(let r of t)n.appendChild(this.row(e,`${r.title}: ${r.message}`,{value:new Date(r.time).toLocaleTimeString(),onClick:()=>void 0}));this.drawer.body.appendChild(n)}},Ka=`vela-widget-timezone-drawer`,qa=`
.vela-tzd-list { padding: 2px 0 4px; }
.vela-tzd-row {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 46px;
    padding: 0 2px;
    border-radius: 8px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}
.vela-tzd-row:active { background: var(--vela-hover); }
.vela-tzd-row-label { flex: 1 1 auto; min-width: 0; font-size: 14px; color: var(--vela-fg-bright); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vela-tzd-row .vela-icon { flex: none; color: var(--vela-fg-bright); }
`,Ja=class{constructor(e){this.opts=e,y(Ka,qa,e.host.ownerDocument),this.drawer=new N({host:e.host,title:`Time zone`,onOpenChange:e.onOpenChange})}open(){this.render(),this.drawer.show()}close(){this.drawer.hide()}destroy(){this.drawer.destroy()}render(){let e=this.drawer.body.ownerDocument;this.drawer.body.replaceChildren();let t=e.createElement(`div`);t.className=`vela-tzd-list`;for(let n of f(this.opts.timezone())){let r=e.createElement(`div`);r.className=`vela-tzd-row`;let i=e.createElement(`span`);i.className=`vela-tzd-row-label`,i.textContent=n.label,r.appendChild(i),n.checked&&r.appendChild(h(`check`,e)),r.addEventListener(`click`,()=>{this.opts.onTimezone(n.value),this.drawer.hide()}),t.appendChild(r)}this.drawer.body.appendChild(t)}},Ya=`vela-widget-price-scale-drawer`,Xa=`
.vela-psd-list { padding: 2px 0 4px; }
.vela-psd-row {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 46px;
    padding: 0 2px;
    border-radius: 8px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}
.vela-psd-row:active { background: var(--vela-hover); }
.vela-psd-row[data-sep='1'] { margin-top: 6px; padding-top: 6px; border-top: 1px solid var(--vela-border); border-radius: 0 0 8px 8px; }
.vela-psd-row-label { flex: 1 1 auto; min-width: 0; font-size: 14px; color: var(--vela-fg-bright); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vela-psd-row .vela-icon { flex: none; color: var(--vela-fg-bright); }
.vela-psd-section {
    padding: 12px 2px 4px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: var(--vela-fg-muted);
}
`,Za=class{constructor(e){this.opts=e,this.pane=null,y(Ya,Xa,e.host.ownerDocument),this.drawer=new N({host:e.host,title:`Price scale`,onOpenChange:e.onOpenChange})}open(){let e=this.opts.chart()?.renderer.get(`paneScales`);this.pane=Array.isArray(e)?G(e,this.opts.pressY()):null,this.render(),this.drawer.show()}close(){this.drawer.hide()}destroy(){this.drawer.destroy()}flag(e){return!!this.opts.chart()?.renderer.get(e)}render(){let e=this.opts.chart(),t=this.drawer.body.ownerDocument;if(this.drawer.body.replaceChildren(),!e)return;let n=this.pane,r=ci({auto:e.renderer.get(`autoScale`)!==!1,invert:n?n.invert:this.flag(`invertScale`),choice:ii(n??{mode:String(e.renderer.get(`scaleMode`)??`price`),log:this.flag(`logScale`)}),axisLabels:this.flag(`axisLabels`),priceLabel:this.flag(`priceLabel`),countdown:this.flag(`countdown`),priceLine:this.flag(`currentPriceLine`)}),i=t.createElement(`div`);i.className=`vela-psd-list`;let a=(e,n)=>{let r=t.createElement(`div`);r.className=`vela-psd-row`,n.sep&&(r.dataset.sep=`1`);let a=t.createElement(`span`);a.className=`vela-psd-row-label`,a.textContent=e,r.appendChild(a),n.checked&&r.appendChild(h(`check`,t)),r.addEventListener(`click`,n.onClick),i.appendChild(r)},o=e=>{let n=t.createElement(`div`);n.className=`vela-psd-section`,n.textContent=e,i.appendChild(n)};for(let t of r){if(t.id===`labels`&&t.submenu){o(`Labels`);for(let n of t.submenu)a(n.label,{checked:n.checked,onClick:()=>{let t=n.id.slice(7);e.renderer.set(t,!this.flag(t)),this.render()}});continue}if(t.id===`levels`&&t.submenu){o(`Levels`);for(let n of t.submenu)a(n.label,{checked:n.checked,onClick:()=>{let t=n.id.slice(7);e.renderer.set(t,!this.flag(t)),this.render()}});continue}if(t.id.startsWith(`settings`)){a(t.label,{sep:!0,onClick:()=>{e.renderer.openSettings(ni(t.id)),this.drawer.hide()}});continue}if(t.id===`auto`){a(t.label,{checked:t.checked,onClick:()=>{e.renderer.set(`autoScale`,e.renderer.get(`autoScale`)===!1),this.render()}});continue}if(t.id===`invert`){a(t.label,{checked:t.checked,onClick:()=>{let[t,r]=si(!(n?n.invert:this.flag(`invertScale`)),n);e.renderer.set(t,r);let i=e.renderer.get(`paneScales`);this.pane=Array.isArray(i)?G(i,this.opts.pressY()):n,this.render()}});continue}t.id.startsWith(`scale:`)&&a(t.label,{checked:t.checked,sep:t.separatorBefore,onClick:()=>{for(let[r,i]of oi(t.id.slice(6),n))e.renderer.set(r,i);let r=e.renderer.get(`paneScales`);this.pane=Array.isArray(r)?G(r,this.opts.pressY()):n,this.render()}})}this.drawer.body.appendChild(i)}},Qa=`vela-widget-drawing-pill`,$a=`
.vela-drawpill { display: none; }
[data-layout='mobile'] .vela-drawpill {
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    z-index: 7;
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 4px;
    border: 1px solid var(--vela-border-strong);
    border-radius: 999px;
    background: var(--vela-surface);
    box-shadow: var(--vela-shadow-dialog);
    color: var(--vela-fg);
}
[data-layout='mobile'] .vela-drawpill[hidden] { display: none !important; }
.vela-drawpill-tool {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 999px;
    background: var(--vela-hover);
    color: var(--vela-accent);
}
.vela-drawpill-tool svg { width: 22px; height: 22px; }
.vela-drawpill-btn {
    all: unset;
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    color: var(--vela-fg-muted);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    position: relative;
}
.vela-drawpill-btn:active { background: var(--vela-hover); }
.vela-drawpill-btn[data-on='1'] { color: var(--vela-accent); background: var(--vela-hover); }
.vela-drawpill-btn .vela-icon { font-size: 17px; width: 17px; height: 17px; }
.vela-drawpill-badge {
    position: absolute;
    top: 2px;
    right: 2px;
    font-size: 8px;
    font-weight: 700;
    color: var(--vela-accent);
}
`,eo=class{constructor(e){this.chart=null,this.chartSubs=[];let t=e.ownerDocument;y(Qa,$a,t),this.el=t.createElement(`div`),this.el.className=`vela-drawpill`,this.el.hidden=!0,this.toolGlyph=t.createElement(`span`),this.toolGlyph.className=`vela-drawpill-tool`;let n=(e,n,r)=>{let i=t.createElement(`button`);return i.className=`vela-drawpill-btn`,i.setAttribute(`aria-label`,n),i.appendChild(h(e,t)),i.addEventListener(`click`,r),i};this.magnetBtn=n(`magnet`,`Magnet snap`,()=>{let e=[`off`,`weak`,`strong`],t=this.chart?.drawings.getSnapMode()??`off`;this.chart?.drawings.setSnapMode(e[(e.indexOf(t)+1)%e.length])}),this.magnetBadge=t.createElement(`span`),this.magnetBadge.className=`vela-drawpill-badge`,this.magnetBtn.appendChild(this.magnetBadge),this.stayBtn=n(b(`pen-lock`)?`pen-lock`:`pen`,`Stay in drawing mode`,()=>{this.chart?.drawings.setStayMode(!this.chart.drawings.getStayMode())}),this.eraserBtn=n(`eraser`,`Eraser`,()=>{this.chart?.drawings.setMode(this.chart.drawings.getMode()===`eraser`?null:`eraser`)});let r=n(`close`,`Exit drawing mode`,()=>{this.chart?.drawings.setTool(null),this.chart?.drawings.setMode(null)});this.el.append(this.toolGlyph,this.magnetBtn,this.stayBtn,this.eraserBtn,r),e.appendChild(this.el)}onChart(e){for(let e of this.chartSubs)e();this.chart=e,this.chartSubs=[e.on(`drawing:tool`,()=>this.sync()),e.on(`drawing:snap`,()=>this.sync()),e.on(`drawing:stay`,()=>this.sync()),e.on(`drawing:mode`,()=>this.sync())],this.sync()}sync(){let e=this.chart?.drawings;if(!e||!e.supported){this.el.hidden=!0;return}let t=e.getTool(),n=e.getMode()===`eraser`;if(this.el.hidden=t===null&&!n,this.el.hidden)return;this.toolGlyph.innerHTML=t===null?b(`eraser`)??``:fe(t)?.icon??``;let r=e.getSnapMode();this.magnetBtn.dataset.on=r===`off`?``:`1`,this.magnetBadge.textContent=r===`weak`?`W`:r===`strong`?`S`:``,this.stayBtn.dataset.on=e.getStayMode()?`1`:``,this.eraserBtn.dataset.on=n?`1`:``}destroy(){for(let e of this.chartSubs)e();this.chartSubs=[],this.el.remove()}};function to(e){return{get chart(){let t=e.active();if(!t)throw Error(`VelaWorkspace has no active cell yet`);return t.chart},get symbol(){return e.active()?.symbol??``},get timeframe(){return e.active()?.timeframe??`60`},get priceStyle(){return e.active()?.priceStyle??`candles`},setSymbol:t=>e.active()?.setSymbol(t),setTimeframe:t=>e.active()?.setTimeframe(t),setPriceStyle:t=>e.active()?.setPriceStyle(t),openSymbolSearch:t=>e.openSymbolSearch(t),togglePanel:(t,n)=>e.togglePanel(t,n),host:e.root,toast:(t,n)=>e.toast(t,n),addIndicator:t=>e.active()?.addExternalIndicator(t),addNativeIndicator:t=>e.active()?.addNative(t),stateChanged:()=>e.stateDirty(),get cells(){return e.cells().map(e=>({id:e.id,chart:e.chart,symbol:e.symbol,timeframe:e.timeframe}))},get activeCellId(){return e.active()?.id??``},setActiveCell:t=>e.setActiveCell(t)}}function no(e,t){let n=Math.round(e.x*t),r=Math.round(e.y*t);return{dx:n,dy:r,dw:Math.round((e.x+e.width)*t)-n,dh:Math.round((e.y+e.height)*t)-r}}function ro(e,t){if(e.width<=0||e.height<=0)return[];let n=[];for(let r of t)r.hidden||r.width<=0||r.height<=0||n.push({x:r.left-e.left,y:r.top-e.top,width:r.width,height:r.height});return n}function io(e,t,n){if(t.width<=0||t.height<=0||n.length===0)return null;let r=t.dpr>0?t.dpr:1,i=e.createElement(`canvas`);i.width=Math.max(1,Math.round(t.width*r)),i.height=Math.max(1,Math.round(t.height*r));let a=i.getContext(`2d`);if(!a)return null;a.fillStyle=t.gapColor,a.fillRect(0,0,i.width,i.height);let o=0;for(let e of n){if(e.width<=0||e.height<=0)continue;let{dx:t,dy:n,dw:i,dh:s}=no(e,r);i<=0||s<=0||(a.drawImage(e.source,t,n,i,s),o+=1)}return o===0?null:i.toDataURL(`image/png`)}function ao(e,t,n){let r=e.createElement(`a`);r.href=t,r.download=n,r.click()}var oo=[`1`,`5`,`15`,`30`,`60`,`240`,`D`,`W`,`M`],so=2,co=16,lo=22,uo=50,fo=`vela-workspace`,po=`
.vela-workspace { position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; background: var(--vela-bg); }
.vela-ws-main { position: relative; display: flex; flex-direction: row; flex: 1 1 auto; min-height: 0; }
.vela-ws-toolbar { position: relative; flex: none; }
.vela-ws-grid { position: relative; flex: 1 1 auto; min-width: 0; display: grid; gap: ${so}px; background: var(--vela-border-soft); }
.vela-cell { background: var(--vela-bg); position: relative; }
/* Active-cell highlight: an overlay ring ABOVE the chart's own canvas stack (a plain
   outline on the cell is painted under them) \u2014 inert to the pointer. Scoped to
   multi-cell grids ([data-multi]): a single-cell layout always has an active cell,
   and ringing the only chart would just be noise. */
.vela-ws-grid[data-multi='1'] .vela-cell[data-active='1']::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid var(--vela-fg-bright);
    pointer-events: none;
    z-index: 10;
}
/* Splitter hover mirrors the in-chart pane separator hover (CrosshairRenderer):
   a soft band over the whole grab target + a solid 2px line on the seam center. */
.vela-ws-splitter:hover { background: var(--vela-separator-hover-band); }
.vela-ws-splitter:hover::after { content: ''; position: absolute; background: var(--vela-separator-hover-line); }
.vela-ws-splitter[data-axis='cols']:hover::after { left: calc(50% - 1px); top: 0; width: 2px; height: 100%; }
.vela-ws-splitter[data-axis='rows']:hover::after { top: calc(50% - 1px); left: 0; height: 2px; width: 100%; }
/* Mobile: the docked drawing-toolbar column would eat a phone-width grid \u2014 the shell's
   drawings drawer + on-chart pill replace it (same policy as the widget's in-chart bar). */
[data-layout='mobile'] .vela-ws-toolbar { display: none; }
/* A maximized cell owns the whole grid: the splitter strips have no seams to grab and
   the active ring would just outline the only visible chart \u2014 both are noise here. */
.vela-ws-grid[data-maximized='1'] .vela-ws-splitter { display: none; }
.vela-ws-grid[data-maximized='1'] .vela-cell[data-active='1']::after { display: none; }
/* Drop-target preview while a cell's drag handle is held: a dashed ring + the same
   soft wash the splitter hover uses, over the chart, inert to the pointer. */
.vela-cell[data-drop-target='1']::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px dashed var(--vela-fg-bright);
    background: var(--vela-separator-hover-band);
    pointer-events: none;
    z-index: 11;
}
`;be(`layout`,se(`<rect x="1.5" y="1.5" width="13" height="13" rx="1.5"/><path d="M8 1.5v13M1.5 8h13"/>`));function mo(e){let t=Object.keys(e??{});for(let e of t)/^\d+$/.test(e)&&console.warn(`[vela] workspace cell "${e}" ignored \u2014 a purely-numeric name cannot keep its declaration order (JS object key semantics); use e.g. "cell${e}"`);return t.filter(e=>!/^\d+$/.test(e))}function ho(e){for(let t=1;;t+=1)if(!e.has(`c${t}`))return`c${t}`}function go(e,t){return t.dialogs>0?e.length===1?t.symbolSearch?{target:`symbol`,text:e.toUpperCase()}:t.timeframeEntry?{target:`timeframe`,text:e}:null:null:/^[a-zA-Z]$/.test(e)?{target:`symbol`,text:e.toUpperCase()}:/^[0-9]$/.test(e)?{target:`timeframe`,text:e}:null}var _o=class{constructor(e,t={}){this.events=new je,this.feed=new Ae,this.cellsById=new Map,this.clock=new Me,this.pool=new Map,this.trackSizes=new Map,this.resizeObserver=null,this.order=[],this.activeId=null,this.maximizedId=null,this.cellBackend=`auto`,this.destroyed=!1,this.shortcutsHelp=null,this.glider=new Hi(()=>this.activeId?this.cellsById.get(this.activeId)?.chart??null:null),this.globalTool=null,this.globalSnap=`off`,this.globalStay=!1,this.historyUnsub=null,this.favs=[],this.tfFavs=[],this.syncOpts={},this.stateTimer=null,this.emitting=!1,this.booted=!1,this.onUnload=()=>{this.flushPendingState(),this.persistNow()},this.syncBusy=!1,this.drawingSyncBusy=!1,this.styleSyncBusy=!1,this.drawingLinks=new Map,this.manifest=[],this.manifestSettled=!1,this.openDialogs=0,this.alerts=[],this.alertsMenu=null,this.tfDrawer=null,this.drawingsDrawer=null,this.moreDrawer=null,this.timezoneDrawer=null,this.priceScaleDrawer=null,this.priceScalePressY=0,this.attachmentDisposers=new Map,this.extState={},this.attributionMark=null,this.onRootKeydown=e=>this.routeTyping(e),this.sync={set:(e,t)=>this.applySyncSetting(e,t===!1?void 0:t,!0),get:e=>this.syncOpts[e],state:()=>({...this.syncOpts})},la(),Pe();let n=typeof e==`string`?document.querySelector(e):e;if(!n)throw Error(`VelaWorkspace: container not found: ${String(e)}`);this.opts=t,this.persistKey=t.persist===void 0||t.persist===!1?null:t.persist===!0?`vela-workspace`:t.persist,this.storage=t.storage??Nr();let r=null;if(this.persistKey!==null){let e=this.storage.get(this.persistKey);typeof e==`string`?r=xr(e):typeof e==`object`&&e&&e.then(e=>{!this.destroyed&&e&&this.applyState(xr(e))}),typeof window<`u`&&window.addEventListener(`beforeunload`,this.onUnload)}this.timezone=r?.timezone??t.timezone??`Etc/UTC`,r?.favorites&&(this.favs=[...r.favorites]),r?.timeframeFavorites&&(this.tfFavs=[...r.timeframeFavorites]);let i=r?.sync??t.sync;for(let e of vr)this.applySyncSetting(e,i?.[e]);this.monoLayout=t.layout===!1;let a=t.layout===!1||t.layout===void 0?`4`:t.layout;if(this.def=this.resolveLayout(this.monoLayout?`1`:r?.layout&&Z(r.layout)?r.layout:a),this.alertCap=Math.max(1,t.alertCap??uo),this.topbarComp=ce(t.topbar),this.indicatorsOverride=T(`indicators`),this.screenshotOverride=T(`screenshot`),r?.trackSizes)for(let[e,t]of Object.entries(r.trackSizes))this.trackSizes.set(e,t);if(r?.ext&&(this.extState={...r.ext}),r?.charts)for(let{id:e,...t}of r.charts)this.pool.set(e,t);this.order=r?.charts?r.charts.map(e=>e.id):mo(t.cells);let o=r?.activeCellId??null,s=n.ownerDocument;y(fo,po,s),this.root=s.createElement(`div`),this.root.className=`vela-workspace`,d(this.root,_(t.theme));for(let[e,n]of Object.entries(t.providers??{}))this.feed.registerProvider(e,n());this.feed.ready().then(()=>{this.destroyed||this.refreshRetention()}),this.symbolPicker=new ir({host:this.root,iconFor:e=>this.feed.symbolIconOf(e),onSelect:e=>this.active.setSymbol(e),onOpenChange:e=>{if(e)for(let e of this.cells())e.chart.renderer.closeDialogs();this.trackDialog(e)}}),this.symbolPicker.setSource(()=>this.feed.symbols()),this.indicatorPicker=t.indicatorPicker!==!1&&!this.indicatorsOverride&&S(this.topbarComp,`indicators`)?new sr({host:this.root,library:()=>this.active.libraryRows(),onChart:()=>this.active.onChartRows(),onAdd:e=>this.active.addFromLibrary(e),onRemove:e=>this.active.removeFromChart(e),onOpenChange:e=>{if(e)for(let e of this.cells())e.chart.renderer.closeDialogs();this.trackDialog(e)}}):null;let c=this.indicatorPicker;this.tfQuick=new ur({host:this.root,onApply:e=>this.setActiveTimeframe(e),onOpenChange:e=>this.trackDialog(e)}),this.topbar=new Xt(this.root,{symbol:``,composition:t.topbar,onSymbolClick:()=>this.symbolPicker.open(),...c?{onIndicatorsClick:()=>c.open()}:{},onUndoClick:()=>this.active.history.undo(),onRedoClick:()=>this.active.history.redo(),onScreenshotClick:()=>this.downloadScreenshot(),onAlertsClick:e=>this.openAlertsMenu(e),timeframe:`60`,timeframes:t.timeframes??oo,timeframeFavorites:this.tfFavs,priceStyle:`candles`,onTimeframe:e=>this.setActiveTimeframe(e),onTimeframeFavorite:(e,t)=>this.setTimeframeFavorite(e,t),onPriceStyle:e=>this.active.setPriceStyle(e),layout:this.monoLayout?void 0:{current:this.def.id,shape:()=>Q(this.def),presets:()=>ca().filter(e=>Q(e)===null).map(e=>({id:e.id,label:e.label})),onSelectGrid:(e,t)=>this.setLayout(X(e,t)),onSelectPreset:e=>this.setLayout(e),syncs:()=>[{id:`symbol`,label:`Symbol`,checked:this.syncOpts.symbol===!0},{id:`timeframe`,label:`Interval`,checked:this.syncOpts.timeframe===!0},{id:`crosshair`,label:`Crosshair`,checked:this.syncOpts.crosshair===!0},{id:`style`,label:`Style`,checked:this.syncOpts.style===!0}],onToggleSync:e=>{let t=e;this.sync.set(t,!this.syncOpts[t])}},getContext:()=>this.context()});let l=s.createElement(`div`);l.className=`vela-ws-main`;let u=Qe(t.drawings);this.drawingsEnabled=t.drawings!==!1,this.toolbarDef=u.definition;let f=null;this.drawingsEnabled&&u.visible&&t.drawingToolbar!==!1&&(f=s.createElement(`div`),f.className=`vela-ws-toolbar`,l.appendChild(f)),this.gridEl=s.createElement(`div`),this.gridEl.className=`vela-ws-grid`,l.appendChild(this.gridEl),this.dock=new qn(l,{chrome:this.topbar,context:()=>this.context(),changed:()=>this.markStateDirty()}),this.objectTree=new Bn(l,e=>this.feed.symbolIcon(e)),this.dataWindow=new Kn(l),this.dock.addBuiltIn({id:`dataWindow`,title:`Data window`,icon:`datawindow`,order:10,panel:this.dataWindow,onChart:e=>this.dataWindow.onChart(e)}),this.dock.addBuiltIn({id:`objects`,title:`Object tree`,icon:`objects`,order:20,panel:this.objectTree,onChart:e=>this.objectTree.onChart(e)}),this.dock.refresh(),r?.panels&&this.dock.applyState(r.panels),this.root.appendChild(l),this.toastHost=new Da(this.gridEl);let p=ve().attribution;if(p!==!1){let e=_(t.theme).background,n=typeof p==`string`&&p.trim()?Xe(s,p,e):Ee(s,e);Object.assign(n.style,{left:`calc(var(--vela-toolbar-gutter, 0px) + 12px)`,bottom:`calc(var(--vela-bottom-gutter, ${lo}px) + 10px)`,zIndex:`11`}),n.dataset.velaScreenshot=`1`,this.gridEl.appendChild(n),this.attributionMark=n}this.drawToolbar=f?new Ue(f,_(t.theme),e=>{this.active.chart.drawings.setTool(e),this.refocusActive()},e=>{this.active.chart.drawings.setSnapMode(e),this.refocusActive()},()=>{let e=this.active.chart.drawings;e.setMode(e.getMode()===`measure`?null:`measure`),this.refocusActive()},()=>{let e=this.active.chart.drawings;e.setMode(e.getMode()===`eraser`?null:`eraser`),this.refocusActive()},(e,t)=>this.active.chart.drawings.setFavorite(e,t),e=>{this.active.chart.drawings.setStayMode(e),this.refocusActive()},{dock:`static`,onDrawingsSync:e=>{this.sync.set(`drawings`,e),this.refocusActive()}}):null,this.drawToolbar?.setDefinition(this.toolbarDef),this.drawToolbar?.setVisible(!0),this.drawToolbar?.setDrawingsSyncMode(!!this.syncOpts.drawings),this.bottombar=t.bottombar===!1?null:new en(this.root,{timezone:this.timezone,clock:this.clock,onRange:e=>{this.active.applyRange(e),this.bottombar?.setActiveRange(e.id)},onTimezone:e=>this.setTimezone(e),onSession:e=>this.active.setSession(e),onSettingsClick:()=>this.active.chart.renderer.openSettings()}),this.mobileBar=t.bottombar===!1?null:new Ia(this.root,{symbol:``,timeframe:`60`,onSymbolClick:()=>this.symbolPicker.open(),onTimeframeClick:()=>this.openTimeframeDrawer(),...S(this.topbarComp,`indicators`)&&(c||this.indicatorsOverride)?{onIndicatorsClick:this.indicatorsOverride?()=>this.runOverride(this.indicatorsOverride):()=>c.open()}:{},getContext:()=>this.context(),...this.drawingsEnabled?{onDrawingsClick:()=>this.openDrawingsDrawer()}:{},...this.monoLayout?{}:{onMaximizeClick:()=>this.toggleMobileMaximize()},onMoreClick:()=>this.openMoreDrawer(),onSettingsClick:()=>this.active.chart.renderer.openSettings()}),this.drawingPill=this.drawingsEnabled?new eo(this.gridEl):null,n.appendChild(this.root),this.layoutCtl=new Na(this.root,t.layoutMode??`auto`),this.layoutCtl.onChange(e=>this.onLayoutModeChange(e)),this.splitters=new wa(this.gridEl,{tracks:()=>this.currentTracks(),grid:()=>ma(this.def),apply:(e,t)=>this.applyTracks(e,t),reset:e=>this.applyTracks(e,ya(this.currentTracks()[e].length)),gapPx:()=>so}),typeof ResizeObserver<`u`&&(this.resizeObserver=new ResizeObserver(()=>this.splitters.layout()),this.resizeObserver.observe(this.gridEl)),this.keymap=new vt,this.keymap.attach(this.root),this.registerDefaultKeys(),this.drawToolbar?.setShortcuts(ka(this.keymap)),this.root.addEventListener(`keydown`,this.onRootKeydown),this.root.tabIndex=-1,this.cellBackend=this.backendFor(this.def),this.applyGrid(),this.buildCells(),this.syncCellPresentation(),this.setActiveCell(o!=null&&this.cellsById.has(o)?o:this.order[0]??null),t.autofocus&&this.refocusActive(),t.indicators===void 0?this.manifestSettled=!0:hr(t.indicators).then(e=>{if(!this.destroyed){this.manifest=e,this.manifestSettled=!0;for(let t of this.cellsById.values())t.setManifest(e,!0);this.projectActiveCell()}}),this.mountAttachments(),this.restoreGlobalExt(),this.booted=!0}cell(e){return this.cellsById.get(e)}cells(){return this.order.map(e=>this.cellsById.get(e)).filter(e=>e!=null)}get active(){let e=this.activeId?this.cellsById.get(this.activeId):void 0;if(!e)throw Error(`VelaWorkspace has no active cell (destroyed?)`);return e}get chart(){return this.active.chart}screenshot(){let e=this.shotCells();return e.length===0?null:e.length===1?e[0].chart.renderer.screenshot():this.compositeLayoutShot(e)}downloadScreenshot(){let e=this.shotCells();if(e.length<=1){(e[0]??this.active).downloadScreenshot();return}let t=this.compositeLayoutShot(e);t&&ao(this.root.ownerDocument,t,`vela-layout.png`)}shotCells(){return this.cells().filter(e=>e.host.style.visibility!==`hidden`)}compositeLayoutShot(e){let t=this.gridEl,n=t.getBoundingClientRect(),r=t.ownerDocument.defaultView,i=r?.devicePixelRatio??1,a=r?r.getComputedStyle(t).backgroundColor:``,o=[];for(let t of e){let e=t.screenshotCanvas();if(!e)continue;let r=t.host.getBoundingClientRect(),i=ro(n,[{left:r.left,top:r.top,width:r.width,height:r.height}])[0];i&&o.push({source:e,...i})}return io(t.ownerDocument,{width:n.width,height:n.height,dpr:i,gapColor:a||`#000000`},o)}setActiveCell(e){if(e===this.activeId||this.destroyed)return;let t=this.activeId;if(t){let e=this.cellsById.get(t)?.host;e&&delete e.dataset.active}this.activeId=e;let n=t?this.cellsById.get(t):void 0;if(n&&(n.chart.drawings.setTool(null),n.chart.drawings.setMode(null)),e){let t=this.cellsById.get(e)?.host;t&&(t.dataset.active=`1`)}e&&(this.projectActiveCell(),this.events.emit(`cell:active`,{id:e,prev:t}),this.markStateDirty())}on(e,t){return this.events.on(e,t)}context(){return to({active:()=>this.activeId?this.cellsById.get(this.activeId)??null:null,cells:()=>this.cells(),setActiveCell:e=>this.setActiveCell(e),openSymbolSearch:e=>this.symbolPicker.open(e??``),togglePanel:(e,t)=>this.dock.toggle(e,t),root:this.root,toast:(e,t)=>this.toastHost.show(e,t),stateDirty:()=>this.markStateDirty()})}refreshActions(){this.mountAttachments(),this.topbar.renderActions(),this.mobileBar?.renderActions(),this.dock.refresh();for(let e of this.cells())e.chart.renderer.setLegendActions(n(e.chart,()=>this.context())),e.chart.renderer.setLegendCallouts(re(e.chart,()=>this.context()))}getState(){let e=new Map;for(let[t,n]of this.pool)e.set(t,n);for(let[t,n]of this.cellsById)e.set(t,n.dehydrate());let t=[];for(let n of this.order){let r=e.get(n);r&&(t.push({id:n,...r}),e.delete(n))}for(let[n,r]of e)t.push({id:n,...r});let n={version:1,layout:this.def.id,timezone:this.timezone,sync:{...this.syncOpts},charts:t};this.activeId&&(n.activeCellId=this.activeId),this.favs.length>0&&(n.favorites=[...this.favs]),this.tfFavs.length>0&&(n.timeframeFavorites=[...this.tfFavs]),this.trackSizes.size>0&&(n.trackSizes=Object.fromEntries([...this.trackSizes].map(([e,t])=>[e,{...t}])));let r=this.dock.getState();r&&(n.panels=r);let i={...this.extState};for(let e of C(`global`))try{let t=e.serialize(this.context());t===void 0?delete i[e.key]:i[e.key]=t}catch(t){console.warn(`[vela] state persistence "${e.key}" serialize failed:`,t)}return this.extState=i,Object.keys(i).length>0&&(n.ext=i),n}applyState(e){if(this.destroyed)return;let t=Sr(e);if(!t)return;t.favorites&&(this.favs=[...t.favorites]),t.timeframeFavorites&&(this.tfFavs=[...t.timeframeFavorites],this.topbar.setTimeframeFavorites(this.tfFavs)),this.dock.applyState(t.panels);for(let e of vr)this.applySyncSetting(e,t.sync?.[e]);if(this.trackSizes.clear(),t.trackSizes)for(let[e,n]of Object.entries(t.trackSizes))this.trackSizes.set(e,n);let n=this.monoLayout?this.def:Z(t.layout)??this.def,r=this.def.cells.length;if(n.id===this.def.id&&t.charts.length>=r&&this.order.length>=r&&this.def.cells.every((e,n)=>t.charts[n].id===this.order[n]&&this.cellsById.has(this.order[n]))){if(t.favorites)for(let e of this.cellsById.values())e.chart.drawings.setFavorites(this.favs);this.drawingLinks.clear(),this.styleSyncBusy=!0;try{for(let[e]of this.def.cells.entries()){let{id:n,...r}=t.charts[e];this.cellsById.get(n)?.rehydrate(r)}}finally{this.styleSyncBusy=!1}t.timezone&&this.setTimezone(t.timezone),this.pool.clear();for(let{id:e,...n}of t.charts.slice(r))this.pool.set(e,n);this.order=t.charts.map(e=>e.id),this.clearMaximized(),this.applyGrid(),this.refreshCellControls();let e=t.activeCellId&&this.cellsById.has(t.activeCellId)?t.activeCellId:this.order[0]??null;e===this.activeId?this.projectActiveCell():this.setActiveCell(e),this.refreshRetention(),this.extState={...t.ext??{}},this.restoreGlobalExt(),this.markStateDirty();return}t.timezone&&(this.timezone=t.timezone,this.bottombar?.setTimezone(t.timezone));for(let[e,t]of[...this.cellsById])t.destroy(),this.cellsById.delete(e),this.events.emit(`cell:destroyed`,{id:e});this.pool.clear(),this.drawingLinks.clear();for(let{id:e,...n}of t.charts)this.pool.set(e,n);this.order=t.charts.map(e=>e.id);let i=this.monoLayout?null:Z(t.layout);i&&(this.def=i),this.cellBackend=this.backendFor(this.def),this.clearMaximized(),this.applyGrid(),this.buildCells(),this.syncCellPresentation(),this.topbar.setLayout(this.def.id);let a=t.activeCellId&&this.cellsById.has(t.activeCellId)?t.activeCellId:this.order[0]??null;a===this.activeId?this.projectActiveCell():this.setActiveCell(a),this.refreshRetention(),this.events.emit(`layout:changed`,{layout:this.def.id}),this.extState={...t.ext??{}},this.restoreGlobalExt(),this.markStateDirty()}restoreGlobalExt(){for(let e of C(`global`))if(e.key in this.extState)try{e.restore(this.extState[e.key],this.context())}catch(t){console.warn(`[vela] state persistence "${e.key}" restore failed:`,t)}}setTimezone(e){this.timezone=e,this.projectTimezone();for(let e of this.cellsById.values())e.applyTimezone();this.markStateDirty()}projectTimezone(){let e=this.activeId?this.cellsById.get(this.activeId):void 0;this.bottombar?.setTimezone(this.timezone,e?.exchangeTimezone)}setTheme(e){if(this.destroyed)return;let t=_(e);this.opts.theme=e,d(this.root,t),this.drawToolbar?.setTheme(t),this.attributionMark&&Je(this.attributionMark,t.background);for(let e of this.cellsById.values())e.chart.setTheme(t)}get layout(){return this.def}setLayout(e){if(this.destroyed||this.monoLayout)return;this.clearMaximized();let t=this.resolveLayout(e),n=this.backendFor(t),r=n!==this.cellBackend;this.order=_a(this.order,t.cells.length,this.activeId);let i=new Set(this.order.slice(0,t.cells.length)),a=new Set(this.cellsById.keys());for(let[e,t]of[...this.cellsById])(!i.has(e)||r)&&(this.poolSet(e,t.dehydrate()),t.destroy(),this.cellsById.delete(e),this.events.emit(`cell:destroyed`,{id:e}));this.def=t,this.cellBackend=n,this.applyGrid(),this.buildCells(),this.alignNewCellStyles(a),this.syncCellPresentation(),this.refreshCellControls(),this.topbar.setLayout(t.id);let o=ga(this.activeId,this.order.slice(0,t.cells.length));o===this.activeId?this.projectActiveCell():this.setActiveCell(o),this.refreshRetention(),this.events.emit(`layout:changed`,{layout:t.id}),this.markStateDirty()}get maximizedCell(){return this.maximizedId}maximizeCell(e){this.destroyed||e!=null&&(!this.cellsById.has(e)||this.def.cells.length<=1)||e!==this.maximizedId&&(this.maximizedId=e,e&&this.setActiveCell(e),this.applyGrid(),this.refreshCellControls(),this.syncMobileMaximize(),this.events.emit(`cell:maximized`,{id:e}))}toggleMobileMaximize(){let e=this.activeId?this.cellsById.get(this.activeId):void 0;e&&(this.maximizedId?this.maximizeCell(null):e.chart.panes.list().some(e=>e.maximized)?e.chart.panes.maximize(null):this.maximizeCell(e.id))}syncMobileMaximize(){if(!this.mobileBar)return;let e=this.activeId?this.cellsById.get(this.activeId):void 0,t=e?e.chart.panes.list().some(e=>e.maximized):!1;this.mobileBar.setMaximizeActive(this.maximizedId!=null||t),this.mobileBar.setMaximizeVisible(this.def.cells.length>1)}swapCells(e,t){if(this.destroyed||e===t)return;let n=this.order.indexOf(e),r=this.order.indexOf(t);if(!(n<0||r<0||!this.cellsById.has(e)||!this.cellsById.has(t))){[this.order[n],this.order[r]]=[this.order[r],this.order[n]];for(let[e]of this.def.cells.entries()){let t=this.cellsById.get(this.order[e]??``)?.host;t&&this.gridEl.appendChild(t)}this.applyGrid(),this.markStateDirty()}}resize(){this.splitters.layout()}toast(e,t=`info`,n=3e3){this.destroyed||this.toastHost.show(e,t,n)}destroy(){if(!this.destroyed){this.flushPendingState(),this.destroyed=!0,this.persistKey!==null&&typeof window<`u`&&window.removeEventListener(`beforeunload`,this.onUnload),this.resizeObserver?.disconnect(),this.splitters.destroy();for(let[e,t]of[...this.cellsById]){try{this.poolSet(e,t.dehydrate())}catch(t){console.warn(`[vela] could not snapshot cell "${e}" while destroying:`,t)}t.destroy(),this.cellsById.delete(e)}for(let e of this.attachmentDisposers.values())try{e()}catch{}this.attachmentDisposers.clear(),this.root.removeEventListener(`keydown`,this.onRootKeydown),this.keymap.destroy(),this.drawToolbar?.destroy(),this.topbar.destroy(),this.bottombar?.destroy(),this.mobileBar?.destroy(),this.drawingPill?.destroy(),this.tfDrawer?.destroy(),this.drawingsDrawer?.destroy(),this.moreDrawer?.destroy(),this.timezoneDrawer?.destroy(),this.priceScaleDrawer?.destroy(),this.layoutCtl.destroy(),this.dock.destroy(),this.objectTree.destroy(),this.dataWindow.destroy(),this.symbolPicker.destroy(),this.indicatorPicker?.destroy(),this.tfQuick.destroy(),this.shortcutsHelp?.destroy(),this.toastHost.destroy(),this.alertsMenu?.destroy(),this.glider.stop(),ae.retain(new Set,this),this.root.remove(),this.events.clear()}}projectActiveCell(){let e=this.activeId?this.cellsById.get(this.activeId):void 0;if(!e)return;this.topbar.setSymbol(e.symbol),this.topbar.setTimeframe(e.timeframe),this.topbar.setPriceStyle(e.priceStyle),this.topbar.setIndicatorCount(e.indicatorCount),this.topbar.renderActions(),this.mobileBar?.renderActions(),this.mobileBar?.setSymbol(e.symbol),this.mobileBar?.setTimeframe(e.timeframe),this.syncMobileMaximize(),this.drawingPill?.onChart(e.chart);let t=()=>this.topbar.setHistoryState(e.history.canUndo,e.history.canRedo);this.historyUnsub?.(),this.historyUnsub=e.history.onChange(t),t(),this.objectTree.setSymbol(e.symbol),this.dock.onChart(e.chart),this.bottombar?.setActiveRange(e.activeRangeId),this.bottombar?.setSession({session:e.session,enabled:e.sessionAvailable}),this.projectTimezone(),this.indicatorPicker?.sync(),this.glider.stop();let n=e.chart.drawings;if(n.getTool()!==this.globalTool&&n.setTool(this.globalTool),n.getSnapMode()!==this.globalSnap&&n.setSnapMode(this.globalSnap),n.getStayMode()!==this.globalStay&&n.setStayMode(this.globalStay),this.drawToolbar){this.drawToolbar.setActiveTool(this.globalTool),this.drawToolbar.setMagnetMode(this.globalSnap),this.drawToolbar.setStayMode(this.globalStay);let e=n.getMode();this.drawToolbar.setMeasureActive(e===`measure`),this.drawToolbar.setEraserActive(e===`eraser`),this.drawToolbar.setFavorites(n.favorites())}}refocusActive(){this.activeId&&this.cellsById.get(this.activeId)?.chart.renderer.focus()}markStateDirty(){!this.destroyed&&this.booted&&(this.stateTimer!=null&&clearTimeout(this.stateTimer),this.stateTimer=setTimeout(()=>{this.stateTimer=null,this.events.emit(`state:changed`,void 0),this.persistNow()},500))}flushPendingState(){if(this.stateTimer==null||this.emitting)return;clearTimeout(this.stateTimer),this.stateTimer=null;let e=this.persistKey===null?null:br(this.getState());this.emitting=!0;try{this.events.emit(`state:changed`,void 0)}finally{this.emitting=!1}if(e!==null&&this.persistKey!==null)try{this.storage.set(this.persistKey,e)}catch{}}persistNow(){if(!(this.persistKey===null||this.destroyed))try{this.storage.set(this.persistKey,br(this.getState()))}catch{}}resolveLayout(e){if(typeof e!=`string`)return e;let t=Z(e);if(!t)throw Error(`[vela] unknown workspace layout "${e}" \u2014 register it with registerLayout().`);return t}backendFor(e){let t=this.opts.nativeBackend;return t&&t!==`auto`?t:e.cells.length>(this.opts.maxWebglCells??8)?`canvas2d`:`auto`}currentTracks(){let e=this.trackSizes.get(this.def.id);return{cols:e?.cols?.length===this.def.cols.length?[...e.cols]:[...this.def.cols],rows:e?.rows?.length===this.def.rows.length?[...e.rows]:[...this.def.rows]}}applyTracks(e,t){let n=this.trackSizes.get(this.def.id)??{};n[e]=t,this.trackSizes.set(this.def.id,n),this.applyGrid(),this.markStateDirty()}applyGrid(){let{container:e,perCell:t}=ha(this.def,this.trackSizes.get(this.def.id));this.def.cells.length>1?this.gridEl.dataset.multi=`1`:delete this.gridEl.dataset.multi,this.gridEl.style.gridTemplateColumns=e.gridTemplateColumns??``,this.gridEl.style.gridTemplateRows=e.gridTemplateRows??``,this.gridEl.style.gridTemplateAreas=e.gridTemplateAreas??``;for(let[e,n]of this.def.cells.entries()){let r=this.cellsById.get(this.order[e]??``)?.host;r&&(r.style.gridArea=t[n.id]?.gridArea??``)}this.applyMaximizePresentation(),this.mountAttributionMark(),this.splitters.layout()}applyMaximizePresentation(){let e=this.maximizedId;e?this.gridEl.dataset.maximized=`1`:delete this.gridEl.dataset.maximized;for(let[t,n]of this.cellsById){let r=n.host.style;e&&(r.gridArea=`1 / 1 / -1 / -1`),r.zIndex=e&&t===e?`5`:``,r.visibility=e&&t!==e?`hidden`:``}}refreshCellControls(){for(let e of this.cellsById.values())e.refreshControls()}clearMaximized(){this.maximizedId!=null&&(this.maximizedId=null,this.events.emit(`cell:maximized`,{id:null}))}cellAtPoint(e,t,n){for(let[r,i]of this.cellsById){if(r===n||i.host.style.visibility===`hidden`)continue;let a=i.host.getBoundingClientRect();if(e>=a.left&&e<=a.right&&t>=a.top&&t<=a.bottom)return r}return null}setDropTarget(e){for(let[t,n]of this.cellsById)t===e?n.host.dataset.dropTarget=`1`:delete n.host.dataset.dropTarget}bottomLeftCell(){if(this.maximizedId)return this.cellsById.get(this.maximizedId);let e=ma(this.def),t=e[e.length-1]?.[0],n=this.def.cells.findIndex(e=>(e.area??e.id)===t);return this.cellsById.get(this.order[n>=0?n:0]??``)}mountAttributionMark(){let e=this.attributionMark;if(!e)return;let t=this.bottomLeftCell()?.host??this.gridEl;e.parentElement!==t&&t.appendChild(e)}buildCells(){let e=_(this.opts.theme),{perCell:t}=ha(this.def,this.trackSizes.get(this.def.id));for(let[n,r]of this.def.cells.entries()){let i=this.order[n];if(i||(i=ho(new Set([...this.order,...this.pool.keys(),...this.cellsById.keys()])),this.order[n]=i),this.cellsById.has(i))continue;let a=this.pool.get(i),o=a??{...ea(this.opts),...this.opts.cells?.[i]??{}};this.pool.delete(i);let s=new aa(i,this.gridEl,o,{feed:this.feed,engines:this.opts.engines??{},chartDefaults:ta(this.opts),theme:e,live:this.opts.live??!1,volume:this.opts.volume??!0,statusline:this.opts.statusline!==!1,watermark:this.opts.watermark!==!1,nativeBackend:this.cellBackend,dialogHost:this.root,timezone:()=>this.timezone,setTimezone:e=>this.setTimezone(e),context:()=>this.context(),activate:e=>this.setActiveCell(e),multiCell:()=>!this.monoLayout&&this.def.cells.length>1,isMaximized:e=>this.maximizedId===e,toggleMaximize:e=>this.maximizeCell(this.maximizedId===e?null:e),cellDragTarget:(e,t,n)=>this.cellAtPoint(t,n,e),previewDropTarget:e=>this.setDropTarget(e),dropCell:(e,t)=>this.swapCells(e,t),onMarketChanged:e=>this.onCellMarketChanged(e),onPriceStyleChanged:e=>this.onCellPriceStyleChanged(e),onIndicatorsChanged:e=>this.onCellIndicatorsChanged(e),onStatusPrefsChanged:e=>this.propagateStylePrefs(e),onStateDirty:()=>this.markStateDirty(),manifestSettled:()=>this.manifestSettled,toast:(e,t,n)=>this.toastHost.show(e,t,n)});s.host.style.gridArea=t[r.id]?.gridArea??``,this.cellsById.set(i,s),i===this.activeId&&(s.host.dataset.active=`1`),this.wireCell(s),s.chart.renderer.setLayoutMode(this.layoutCtl.current),s.chart.renderer.setWallClock(this.clock),s.setControlsSuspended(this.layoutCtl.current===`mobile`),this.favs.length>0&&s.chart.drawings.setFavorites(this.favs),s.setManifest(this.manifest,a?.indicators==null),s.restorePersistedExt(),this.events.emit(`cell:created`,{id:i})}for(let[e]of this.def.cells.entries()){let t=this.cellsById.get(this.order[e]??``)?.host;t&&this.gridEl.appendChild(t)}this.mountAttributionMark()}wireCell(e){let t=e.chart;t.on(`indicator:error`,({error:t})=>this.toastHost.show(`[${e.id}] ${t.message}`,`error`,5e3)),t.on(`script:run`,t=>this.events.emit(`script:run`,{...t,cell:e.id})),t.on(`alert`,t=>{let n=[w(e.symbol).ticker||e.symbol,I(e.timeframe),t.indicator].filter(Boolean).join(` `);this.alerts.unshift({cellId:e.id,source:n,title:t.title??`Alert`,message:t.message,time:t.time}),this.alerts.length>this.alertCap&&this.alerts.pop(),this.toastHost.show(`${n} \u2014 ${t.title?t.title+` — `:``}${t.message}`,`info`,4e3),this.topbar.setAlertCount(this.alerts.length)}),t.on(`drawing:favorites`,({favorites:t})=>{this.favs=t;for(let n of this.cellsById.values())n!==e&&n.chart.drawings.setFavorites(t);this.drawToolbar?.setFavorites(t),this.markStateDirty()}),t.renderer.onCrosshairMove(t=>this.propagateCrosshair(e.id,t.time,t.paneKind===`price`?t.price:null)),t.on(`drawing:created`,({id:t})=>{this.propagateDrawing(e.id,t),this.markStateDirty()}),t.on(`drawing:draft`,({doc:t})=>this.propagateDraft(e.id,t)),t.on(`drawing:edited`,({id:t})=>{this.propagateDrawingEdit(e.id,t),this.markStateDirty()}),t.on(`drawing:removed`,({id:t})=>{this.propagateDrawingRemoval(e.id,t),this.markStateDirty()}),t.on(`drawing:tool`,({type:t})=>{e.id===this.activeId&&(this.globalTool=t,this.drawToolbar?.setActiveTool(t))}),t.on(`drawing:snap`,({mode:t})=>{e.id===this.activeId&&(this.globalSnap=t,this.drawToolbar?.setMagnetMode(t))}),t.on(`drawing:stay`,({on:t})=>{e.id===this.activeId&&(this.globalStay=t,this.drawToolbar?.setStayMode(t))}),t.on(`drawing:mode`,({mode:t})=>{e.id===this.activeId&&(this.drawToolbar?.setMeasureActive(t===`measure`),this.drawToolbar?.setEraserActive(t===`eraser`))}),t.on(`viewport:changed`,t=>this.propagateViewport(e.id,t)),t.renderer.onConfigChanged(()=>this.propagateStylePrefs(e.id)),t.on(`theme:changed`,e=>this.setTheme(e)),t.on(`pane:changed`,()=>{e.id===this.activeId&&this.syncMobileMaximize()}),t.renderer.onAxisLongPress(e=>{this.layoutCtl.current===`mobile`&&(e.axis===`time`?this.openTimezoneDrawer():this.openPriceScaleDrawer(e.y))})}applySyncSetting(e,t,n=!1){if(t==null||t===!1?delete this.syncOpts[e]:this.syncOpts[e]=t,e===`drawings`){for(let e of this.cellsById.values())e.chart.drawings.setExternalGhost(null);this.drawToolbar?.setDrawingsSyncMode(!!t),this.markStateDirty();return}if(e===`crosshair`){for(let e of this.cellsById.values())e.chart.renderer.setExternalCrosshair(null);t&&![...this.cellsById.values()].some(e=>e.chart.renderer.supportsExternalCrosshair)&&console.warn(`[vela] crosshair sync: no cell renderer supports an external crosshair — nothing will show.`),this.topbar&&this.def&&this.topbar.setLayout(this.def.id),this.markStateDirty();return}if(this.topbar&&this.def&&this.topbar.setLayout(this.def.id),this.markStateDirty(),n&&t&&this.activeId){if(e===`viewport`){let e=this.cellsById.get(this.activeId)?.chart.getVisibleRange();e&&this.propagateViewport(this.activeId,e)}else e===`style`?this.propagateStylePrefs(this.activeId):this.propagateMarket(this.activeId)}}alignNewCellStyles(e){let t=this.syncOpts.style;if(!t)return;let n=[...this.cellsById.keys()],r=new Set;for(let i of n){if(e.has(i))continue;let a=H(i,t,n).filter(t=>e.has(t));if(a.length===0)continue;let o=this.activeId&&a.includes(this.activeId)?this.activeId:a[0];r.has(o)||(r.add(o),this.propagateStylePrefs(o))}}propagateStylePrefs(e){if(this.styleSyncBusy||this.destroyed)return;let t=H(e,this.syncOpts.style,[...this.cellsById.keys()]);if(t.length===0)return;let n=this.cellsById.get(e);if(!n)return;let r=Ar(n.chart.renderer.getConfig()),i=r?JSON.stringify(r):null,a=n.statusPrefs();this.styleSyncBusy=!0;try{for(let e of t){let t=this.cellsById.get(e);t&&(r&&i!==JSON.stringify(Ar(t.chart.renderer.getConfig()))&&t.chart.renderer.applyConfig(r),t.applyStatusPrefs(a))}}finally{this.styleSyncBusy=!1}}propagateCrosshair(e,t,n=null){if(this.destroyed)return;let r=this.syncOpts.crosshair;if(!r)return;let i=w(this.cellsById.get(e)?.symbol??``).ticker;for(let a of H(e,r,[...this.cellsById.keys()])){let e=this.cellsById.get(a);if(!e)continue;let r=i!==``&&w(e.symbol).ticker===i;e.chart.renderer.setExternalCrosshair(t,r?n:null)}}propagateViewport(e,t){if(this.syncBusy||this.destroyed)return;let n=H(e,this.syncOpts.viewport,[...this.cellsById.keys()]);if(n.length!==0){this.syncBusy=!0;try{for(let e of n){let n=this.cellsById.get(e);if(!n)continue;let r=n.chart.getVisibleRange(),i=s(n.timeframe),a=Number.isFinite(i)?i/2:0;r&&Or(r,t,a)||n.chart.setVisibleRange(t)}}finally{this.syncBusy=!1}}}propagateDrawing(e,t){if(this.drawingSyncBusy||this.destroyed)return;let n=this.syncOpts.drawings;if(!n)return;let r=this.cellsById.get(e)?.chart.drawings.all().find(e=>e.id===t);if(r){this.drawingSyncBusy=!0;try{let i=new Map([[e,t]]);for(let t of H(e,n,[...this.cellsById.keys()])){let e=this.cellsById.get(t)?.chart.drawings.add(r.type,{paneId:r.paneId,anchors:r.anchors,style:r.style,text:r.text,props:r.props});e&&i.set(t,e.id)}if(i.size>1)for(let[e,t]of i)this.drawingLinks.set(`${e}\0${t}`,i)}finally{this.drawingSyncBusy=!1}}}propagateDraft(e,t){if(this.destroyed)return;let n=this.syncOpts.drawings;if(n)for(let r of H(e,n,[...this.cellsById.keys()]))this.cellsById.get(r)?.chart.drawings.setExternalGhost(t)}propagateDrawingEdit(e,t){if(this.drawingSyncBusy||this.destroyed)return;let n=this.syncOpts.drawings;if(!n)return;let r=this.drawingLinks.get(`${e}\0${t}`);if(!r)return;let i=this.cellsById.get(e)?.chart.drawings.all().find(e=>e.id===t);if(i){this.drawingSyncBusy=!0;try{for(let t of H(e,n,[...this.cellsById.keys()])){let e=r.get(t);e!=null&&this.cellsById.get(t)?.chart.drawings.update(e,{anchors:i.anchors,style:i.style,text:i.text,props:i.props})}}finally{this.drawingSyncBusy=!1}}}propagateDrawingRemoval(e,t){if(this.destroyed)return;let n=`${e}\0${t}`,r=this.drawingLinks.get(n);if(!r||(this.drawingLinks.delete(n),r.delete(e),this.drawingSyncBusy))return;let i=this.syncOpts.drawings;if(i){this.drawingSyncBusy=!0;try{for(let t of H(e,i,[...this.cellsById.keys()])){let e=r.get(t);e!=null&&this.cellsById.get(t)?.chart.drawings.remove(e)}}finally{this.drawingSyncBusy=!1}}}propagateMarket(e){if(this.syncBusy||this.destroyed)return;let t=this.cellsById.get(e);if(!t)return;let n=[...this.cellsById.keys()];this.syncBusy=!0;try{if(t.symbol)for(let r of H(e,this.syncOpts.symbol,n))this.cellsById.get(r)?.setSymbol(t.symbol);for(let r of H(e,this.syncOpts.timeframe,n))this.cellsById.get(r)?.setTimeframe(t.timeframe)}finally{this.syncBusy=!1}}onCellMarketChanged(e){if(this.refreshRetention(),this.propagateMarket(e),this.markStateDirty(),e!==this.activeId)return;let t=this.cellsById.get(e);t&&(this.topbar.setSymbol(t.symbol),this.topbar.setTimeframe(t.timeframe),this.mobileBar?.setSymbol(t.symbol),this.mobileBar?.setTimeframe(t.timeframe),this.objectTree.setSymbol(t.symbol),this.bottombar?.setSession({session:t.session,enabled:t.sessionAvailable}),this.projectTimezone(),this.bottombar?.setActiveRange(t.activeRangeId))}onCellPriceStyleChanged(e){if(this.markStateDirty(),e!==this.activeId)return;let t=this.cellsById.get(e);t&&this.topbar.setPriceStyle(t.priceStyle)}onCellIndicatorsChanged(e){if(this.markStateDirty(),e!==this.activeId)return;let t=this.cellsById.get(e);t&&(this.topbar.setIndicatorCount(t.indicatorCount),this.indicatorPicker?.sync())}setActiveTimeframe(e){this.bottombar?.setActiveRange(null),this.active.setTimeframe(e)}setTimeframeFavorite(e,t){t!==this.tfFavs.includes(e)&&(this.tfFavs=t?[e,...this.tfFavs]:this.tfFavs.filter(t=>t!==e),this.topbar.setTimeframeFavorites(this.tfFavs),this.markStateDirty())}onLayoutModeChange(e){this.symbolPicker.close(),this.indicatorPicker?.close(),this.tfDrawer?.close(),this.drawingsDrawer?.close(),this.moreDrawer?.close(),this.timezoneDrawer?.close(),this.priceScaleDrawer?.close(),this.alertsMenu?.destroy(),this.alertsMenu=null;for(let t of this.cellsById.values())t.chart.renderer.closeDialogs(),t.chart.renderer.setLayoutMode(e),t.setControlsSuspended(e===`mobile`);this.syncCellPresentation()}syncCellPresentation(){let e=this.def.cells.length>1,t=e&&this.layoutCtl.current===`mobile`?()=>this.dock.toggle(`objects`,!0):null;for(let n of this.cellsById.values())n.setStatuslineFit(e),n.chart.renderer.setLegendOverviewAction(t)}openTimeframeDrawer(){this.tfDrawer??=new za({host:this.root,timeframes:this.opts.timeframes??oo,ranges:Zt,currentTimeframe:()=>this.active.timeframe,activeRange:()=>this.active.activeRangeId,onTimeframe:e=>this.setActiveTimeframe(e),onRange:e=>{this.active.applyRange(e),this.bottombar?.setActiveRange(e.id)},onOpenChange:e=>this.trackDialog(e)}),this.tfDrawer.open()}openDrawingsDrawer(){this.drawingsDrawer??=new Ha({host:this.root,toolbar:()=>this.toolbarDef,currentTool:()=>this.active.chart.drawings.getTool(),isFavorite:e=>this.active.chart.drawings.isFavorite(e),onFavorite:(e,t)=>this.active.chart.drawings.setFavorite(e,t),onSelect:e=>this.active.chart.drawings.setTool(e),onOpenChange:e=>this.trackDialog(e)}),this.drawingsDrawer.open()}openMoreDrawer(){let e=e=>S(this.topbarComp,e);this.moreDrawer??=new Ga({host:this.root,...e(`undo-redo`)?{onUndo:()=>this.active.history.undo(),onRedo:()=>this.active.history.redo()}:{},...e(`screenshot`)?{onScreenshot:this.screenshotOverride?()=>this.runOverride(this.screenshotOverride):()=>this.downloadScreenshot()}:{},canUndo:()=>this.active.history.canUndo,canRedo:()=>this.active.history.canRedo,priceStyles:()=>t().map(e=>({id:e,label:L(e),icon:Yt(e)})),priceStyle:()=>this.active.priceStyle,onPriceStyle:e=>this.active.setPriceStyle(e),panels:()=>e(`panels`)?[...this.dock.list()]:[],onTogglePanel:e=>this.dock.toggle(e),...e(`alerts`)?{alerts:()=>this.alerts.map(e=>({title:`${e.source} \xB7 ${e.title}`,message:e.message,time:e.time}))}:{},actions:()=>{let e=new Set(Ye);return x(`topbar`,this.context()).filter(t=>t.align!==`left`&&!e.has(t.id)).map(e=>({label:e.label,icon:e.icon,run:()=>e.run(this.context())}))},layout:this.monoLayout||!e(`layout`)?void 0:{shape:()=>Q(this.def),presets:()=>ca().filter(e=>Q(e)===null).map(e=>({id:e.id,label:e.label,checked:e.id===this.def.id})),onSelectGrid:(e,t)=>this.setLayout(X(e,t)),onSelectPreset:e=>this.setLayout(e),syncs:()=>[{id:`symbol`,label:`Symbol`,checked:this.syncOpts.symbol===!0},{id:`timeframe`,label:`Interval`,checked:this.syncOpts.timeframe===!0},{id:`crosshair`,label:`Crosshair`,checked:this.syncOpts.crosshair===!0},{id:`style`,label:`Style`,checked:this.syncOpts.style===!0}],onToggleSync:e=>{let t=e;this.sync.set(t,!this.syncOpts[t])}},onOpenChange:e=>this.trackDialog(e)}),this.moreDrawer.open()}openTimezoneDrawer(){this.timezoneDrawer??=new Ja({host:this.root,timezone:()=>this.timezone,onTimezone:e=>this.setTimezone(e),onOpenChange:e=>this.trackDialog(e)}),this.timezoneDrawer.open()}openPriceScaleDrawer(e){this.priceScalePressY=e,this.priceScaleDrawer??=new Za({host:this.root,chart:()=>this.activeId?this.cellsById.get(this.activeId)?.chart??null:null,pressY:()=>this.priceScalePressY,onOpenChange:e=>this.trackDialog(e)}),this.priceScaleDrawer.open()}openAlertsMenu(e){this.alertsMenu?.destroy();let t=this.alerts.length?this.alerts.map((e,t)=>({id:String(t),label:`${e.source} \xB7 ${new Date(e.time).toLocaleTimeString()} \xB7 ${e.title}: ${e.message}`.slice(0,80)})):[{id:`none`,label:`No alerts yet`,disabled:!0}];this.alertsMenu=new r({host:this.root,items:t,onSelect:e=>{let t=this.alerts[Number(e)];t&&this.cellsById.has(t.cellId)&&this.setActiveCell(t.cellId)}});let n=e.getBoundingClientRect();this.alertsMenu.openAt(n.left,n.bottom+4)}mountAttachments(){for(let e of Ze())if(!this.attachmentDisposers.has(e.id))try{this.attachmentDisposers.set(e.id,e.mount(this.context()))}catch(t){console.warn(`[vela] workspace attachment "${e.id}" failed to mount:`,t)}}runOverride(e){let t=this.context();(!e.when||e.when(t))&&e.run(t)}registerDefaultKeys(){if(S(this.topbarComp,`screenshot`)){let e=this.screenshotOverride;this.keymap.register({id:`chart.screenshot`,keys:`mod+alt+s`,label:e?e.label:`Download a screenshot of the layout`,category:`Chart`,run:e?()=>this.runOverride(e):()=>this.downloadScreenshot()})}this.keymap.register({id:`chart.reset-view`,keys:`alt+r`,label:`Reset view (all history)`,category:`Chart`,run:()=>this.active.chart.setVisibleRangePreset(`ALL`)}),this.keymap.register({id:`chart.toggle-log`,keys:`alt+l`,label:`Toggle logarithmic scale`,category:`Chart`,run:()=>this.active.chart.renderer.set(`logScale`,!this.active.chart.renderer.get(`logScale`))}),this.keymap.register({id:`chart.toggle-percent`,keys:`alt+p`,label:`Toggle percent scale`,category:`Chart`,run:()=>{let e=this.active.chart.renderer.get(`scaleMode`);this.active.chart.renderer.set(`scaleMode`,e===`percent`?`price`:`percent`)}}),this.keymap.register({id:`drawings.trendline`,keys:`alt+t`,label:`Arm the trend line tool`,category:`Drawings`,run:()=>this.active.chart.drawings.setTool(`trendline`)}),this.keymap.register({id:`drawings.hline-cursor`,keys:`alt+h`,label:`Horizontal line at the cursor price`,category:`Drawings`,run:()=>{let e=this.active;e.lastCrossTime!=null&&e.lastCrossPrice!=null&&e.chart.drawings.add(`hline`,{anchors:[{time:e.lastCrossTime,price:e.lastCrossPrice}]})}}),this.keymap.register({id:`drawings.vline-cursor`,keys:`alt+v`,label:`Vertical line at the cursor time`,category:`Drawings`,run:()=>{let e=this.active;e.lastCrossTime!=null&&e.lastCrossPrice!=null&&e.chart.drawings.add(`vline`,{anchors:[{time:e.lastCrossTime,price:e.lastCrossPrice}]})}}),this.keymap.register({id:`history.undo`,keys:[`mod+z`],label:`Undo (active chart)`,category:`Edit`,run:()=>this.active.history.undo()}),this.keymap.register({id:`history.redo`,keys:[`mod+y`,`mod+shift+z`],label:`Redo (active chart)`,category:`Edit`,run:()=>this.active.history.redo()}),this.keymap.register({id:`view.zoom-in`,keys:`mod+arrowup`,label:`Zoom in`,category:`Chart`,run:()=>this.glider.zoom(Ii)}),this.keymap.register({id:`view.zoom-out`,keys:`mod+arrowdown`,label:`Zoom out`,category:`Chart`,run:()=>this.glider.zoom(Li)}),this.keymap.register({id:`view.pan-left`,keys:`mod+arrowleft`,label:`Pan toward history`,category:`Chart`,run:()=>this.active.chart.panBy(-Ri)}),this.keymap.register({id:`view.pan-right`,keys:`mod+arrowright`,label:`Pan toward now`,category:`Chart`,run:()=>this.active.chart.panBy(Ri)});let e=this.indicatorsOverride;e&&S(this.topbarComp,`indicators`)?this.keymap.register({id:`indicators.open`,keys:`/`,label:e.label,category:`Indicators`,run:()=>this.runOverride(e)}):this.indicatorPicker&&this.keymap.register({id:`indicators.open`,keys:`/`,label:`Open the indicator picker`,category:`Indicators`,run:()=>this.indicatorPicker?.open()}),this.keymap.register({id:`help.shortcuts`,keys:`?`,label:`Show this shortcuts panel`,category:`Help`,run:()=>{this.shortcutsHelp??=new pr(this.keymap,this.root,e=>this.trackDialog(e)),this.shortcutsHelp.open()}})}routeTyping(e){if(this.destroyed||e.ctrlKey||e.metaKey||e.altKey||gt(e))return;let t=go(e.key,{dialogs:this.openDialogs,symbolSearch:this.symbolPicker.isOpen,timeframeEntry:this.tfQuick.isOpen});t&&(e.preventDefault(),t.target===`symbol`?this.symbolPicker.type(t.text):this.tfQuick.type(t.text))}trackDialog(e){this.openDialogs=Math.max(0,this.openDialogs+(e?1:-1)),e?this.keymap.pushScope(`dialog`):this.keymap.popScope(`dialog`)}poolSet(e,t){if(this.pool.delete(e),this.pool.set(e,t),this.pool.size>co){let e=this.pool.keys().next().value;e!=null&&this.pool.delete(e)}}refreshRetention(){let e=new Set;for(let t of this.cellsById.values()){let n=t.symbol;n&&e.add(this.feed.resolveSymbol(n)?.ticker??n)}ae.retain(e,this)}};export{aa as ChartCell,ua as GRID_PICKER_MAX,_o as VelaWorkspace,ga as activeAfterLayout,xr as decodeState,br as encodeState,Z as ensureLayout,ya as evenTracks,ha as gridStyles,sa as layoutDefinition,X as layoutForGrid,Q as layoutShape,ca as layouts,Mr as memoryStorageAdapter,Or as rangesWithin,la as registerBuiltinLayouts,J as registerLayout,ba as resizeTracks,Sr as sanitizeState,H as syncTargets,xa as trackOffsets,oa as unregisterLayout};