(this.webpackJsonpQTest=this.webpackJsonpQTest||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},53:function(e,t,c){},78:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),r=c(25),i=c.n(r),o=(c(53),c(54),c(8)),u=c(19),l=c(4),d="QUIZ/SHOW_QUIZZES",j="QUIZ/LOAD_QUIZZES",b="QUIZ/SET_SELECTED",O="QUIZ/SET_DONE",h="QUIZ/CLEAR_QUIZ",p="QUIZ/LOAD_QUIZZES_ERROR",x=function(){return{type:h}},m=function(e){return{type:p,payload:e}},v={status:null,message:null,quiz:{},questions:[]},f=c(20),g="RESULT/LOAD_RESULTS",_="RESULT/LOAD_RESULTS_SUCCESS",y="RESULT/LOAD_RESULTS_ERROR",N=function(e){return{type:y,payload:e}},q={status:null,results:[],message:""},S="ANSWERS/SAVE_ANSWERS",E={name:null,answers:[]},w="QUIZ/LOAD_QUIZ_LIST",k="QUIZ/SHOW_QUIZ_LIST",R="QUIZ/LOAD_QUIZ_LIST_ERROR",C=function(e){return{type:k,payload:e}},z={status:null,message:null},I="QUIZ/ADD_NEW_QUIZ",D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(l.a)(Object(l.a)({},e),t.payload);default:return e}},T="USER/ADD_USER";var U="USER/DELETE_USER";var A="USER/LOGIN_SUCCESS";var L="USER/LOGOUT_SUCCESS";var Q="USER/ERROR";function Z(e){return{type:Q,payload:e}}var K={loggedIn:!1,user:{editing_key:"",id:"",name:""},status:null,message:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(l.a)(Object(l.a)({},e),{},{loggedIn:!0,user:Object(l.a)({},t.payload.data.dude),status:200});case L:return Object(l.a)(Object(l.a)({},e),{},{loggedIn:!1,user:{editing_key:"",id:"",name:""},status:200});case Q:return Object(l.a)(Object(l.a)({},e),{},{message:t.payload.message,status:400});default:return e}},F="TEST/ADD_TEST",P="TEST/ADD_TEST_SUCCESS",B="TEST/ADD_TEST_ERROR",H="TEST/RESET_TEST";function J(e){return{type:B,payload:e}}var G={status:"idle"},M=Object(u.c)({quizzes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(l.a)({},v);case d:var c=t.payload.data.questions.map((function(e){var t=e.choices.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{isSelected:!1})}));return e.choices=t,e.isDone=!1,e})),n={status:t.payload.status,questions:c,quiz:t.payload.data.quiz};return n;case O:var s=e.questions.find((function(e){return e.question.id===t.payload})),a=e.questions.indexOf(s),r=Object(l.a)({},e);return r.questions[a].isDone=!0,Object(l.a)({},r);case b:var i=Object(l.a)({},e),o=i.questions.find((function(e){return e.question.id===t.payload.id})),u=i.questions.indexOf(o),j=i.questions[u].choices.find((function(e){return e.id===t.payload.answ})),x=i.questions[u].choices.indexOf(j);if(!i.questions[u].question.is_multiple_choice){var m=i.questions[u].choices.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{isSelected:!1})}));i.questions[u].choices=m}return i.questions[u].choices[x].isSelected=!i.questions[u].choices[x].isSelected,Object(l.a)({},i);case p:return Object(l.a)(Object(l.a)({},v),{},{status:404,message:t.payload});default:return e}},results:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(l.a)(Object(l.a)({},e),{},{results:Object(f.a)(t.payload.data.dude.results),status:200});case y:return console.log(t.payload),Object(l.a)(Object(l.a)({},e),{},{message:t.payload.message,status:400});default:return e}},answers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:var c=Object(f.a)(e.answers);return c.push(t.payload.answer),{name:t.payload.name,answers:c};default:return e}},quiz_list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(l.a)(Object(l.a)({},e),t.payload);case R:return{status:t.payload.status,message:t.payload.message};default:return e}},addedQuizes:D,user:W,add_test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return{status:t.payload.status,message:t.payload.action};case B:return{status:404,message:t.payload};case H:return Object(l.a)({},G);default:return e}}}),$=c(46),V=c(7),X=c.n(V),Y=c(13),ee=c.n(Y),te=c(9),ce=X.a.mark(ae),ne=X.a.mark(re),se=function(e){return ee.a.get("http://134.249.181.40:7777/api/".concat(e,"/"))};function ae(e){var t;return X.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(te.a)(se,e.payload);case 3:return t=c.sent,c.next=6,Object(te.b)({type:d,payload:t});case 6:c.next=12;break;case 8:return c.prev=8,c.t0=c.catch(0),c.next=12,Object(te.b)(m(c.t0.message));case 12:case"end":return c.stop()}}),ce,null,[[0,8]])}function re(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(te.c)(j,ae);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),ne,null,[[0,5]])}var ie="ANSWERS/SEND_ANSWERS",oe=X.a.mark(de),ue=X.a.mark(je),le=function(e){var t=e.obj,c=e.id;return ee.a.post("http://134.249.181.40:7777/api/".concat(c,"/answer/"),t)};function de(e){var t;return X.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return console.log(e),t={dude_id:e.payload.user,answers:e.payload.obj.map((function(e){return{question_id:e.question.id,choices_id:e.choices.filter((function(e){return e.isSelected})).map((function(e){return e.id}))}}))},c.next=4,Object(te.a)(le,{obj:t,id:e.payload.id});case 4:c.sent;case 5:case"end":return c.stop()}}),oe)}function je(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(te.c)(ie,de);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),ue,null,[[0,5]])}var be=X.a.mark(pe),Oe=X.a.mark(xe),he=function(){return ee.a.get("http://134.249.181.40:7777/api/")};function pe(){var e;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(te.a)(he);case 3:return e=t.sent,t.next=6,Object(te.b)(C(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(te.b)(C({status:404,message:t.t0.message}));case 12:case"end":return t.stop()}}),be,null,[[0,8]])}function xe(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(te.c)(w,pe);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),Oe,null,[[0,5]])}var me=X.a.mark(ge),ve=X.a.mark(_e),fe=function(e){return console.log(e),ee()({method:"post",url:"http://134.249.181.40:7777/api/",data:e})};function ge(e){var t;return X.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return console.log(e.payload),c.prev=1,c.next=4,Object(te.a)(fe,{quiz:e.payload});case 4:return t=c.sent,c.next=7,Object(te.b)({type:P,payload:t});case 7:c.next=13;break;case 9:return c.prev=9,c.t0=c.catch(1),c.next=13,Object(te.b)(J(c.t0));case 13:case"end":return c.stop()}}),me,null,[[1,9]])}function _e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(te.c)(F,ge);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),ve,null,[[0,5]])}var ye=X.a.mark(ke),Ne=X.a.mark(Re),qe=X.a.mark(Ce),Se=X.a.mark(ze),Ee=function(e){var t={name:e};return ee()({method:"post",url:"http://134.249.181.40:7777/api/dude",data:{dude:t}})},we=function(e){var t=e.id,c={editing_key:e.key};return ee()({method:"delete",url:"http://134.249.181.40:7777/api/dude/".concat(t),data:c})};function ke(e){var t;return X.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(te.a)(Ee,e.payload);case 3:return t=c.sent,c.next=6,Object(te.b)({type:A,payload:t});case 6:c.next=12;break;case 8:return c.prev=8,c.t0=c.catch(0),c.next=12,Object(te.b)(Z(c.t0));case 12:case"end":return c.stop()}}),ye,null,[[0,8]])}function Re(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(te.c)(T,ke);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),Ne,null,[[0,5]])}function Ce(e){var t;return X.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(te.a)(we,Object(l.a)({},e.payload));case 3:return t=c.sent,console.log(t),c.next=7,Object(te.b)({type:L,payload:t});case 7:c.next=13;break;case 9:return c.prev=9,c.t0=c.catch(0),c.next=13,Object(te.b)(Z(c.t0));case 13:case"end":return c.stop()}}),qe,null,[[0,9]])}function ze(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(te.c)(U,Ce);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),Se,null,[[0,5]])}var Ie=X.a.mark(Ue),De=X.a.mark(Ae),Te=function(e){return ee()({method:"get",url:"http://134.249.181.40:7777/api/dude/".concat(e)})};function Ue(e){var t;return X.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(te.a)(Te,e.payload);case 3:return t=c.sent,c.next=6,Object(te.b)({type:_,payload:t});case 6:c.next=12;break;case 8:return c.prev=8,c.t0=c.catch(0),c.next=12,Object(te.b)(N(c.t0));case 12:case"end":return c.stop()}}),Ie,null,[[0,8]])}function Ae(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(te.c)(g,Ue);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),De,null,[[0,5]])}var Le=Object($.a)(),Qe=function(){try{var e=localStorage.getItem("state");return null===e?[]:JSON.parse(e)}catch(t){return}}(),Ze=Object(u.e)(M,Qe,Object(u.d)(Object(u.a)(Le)));Le.run(re),Le.run(je),Le.run(xe),Le.run(_e),Le.run(Ae),Le.run(Re),Le.run(ze);var Ke=Ze;Ze.subscribe((function(){!function(e){try{var t=JSON.stringify({user:Object(l.a)(Object(l.a)({},e.user),{},{message:"",status:null})});localStorage.setItem("state",t)}catch(c){}}(Ze.getState())}));var We=c(11),Fe=c(10),Pe=c(12);c(78);function Be(e){e.takeState;var t=Object(s.useState)(""),c=Object(Pe.a)(t,2),a=c[0],r=c[1],i=Object(s.useState)(""),u=Object(Pe.a)(i,2),l=u[0],d=u[1];var j=Object(o.c)((function(e){return e.user.user.name}));return console.log("RENDER HEADER"),Object(n.jsxs)("header",{className:"header",children:[Object(n.jsx)("div",{className:"overlay ".concat(l)}),Object(n.jsxs)("div",{className:"header__body",children:[Object(n.jsx)(We.b,{to:"/",className:"header__logo",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{children:"Q"}),"TEST"]})}),Object(n.jsx)("nav",{className:"header__menu ".concat(a),children:Object(n.jsxs)("ul",{className:"header__list",children:[Object(n.jsx)("li",{children:Object(n.jsx)(We.b,{to:"/add",className:"header__link",children:"Add"})}),Object(n.jsx)("li",{children:Object(n.jsx)(We.b,{to:"/contacts",className:"header__link",children:"Contacts"})}),Object(n.jsx)("li",{children:Object(n.jsx)(We.b,{to:"/about",className:"header__link",children:"About Ass"})})]})}),Object(n.jsxs)("div",{className:"dropdown",children:[Object(n.jsx)(We.b,{to:"/results",class:"dropbtn",children:Object(n.jsx)("p",{children:j})}),Object(n.jsxs)("div",{className:"dropdown-content",children:[Object(n.jsx)(We.b,{to:"/results",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"}),Object(n.jsx)(We.b,{className:"logout",children:"\u0412\u044b\u0439\u0442\u0438"})]})]}),Object(n.jsx)("div",{className:"header__burger ".concat(a),onClick:function(){r(""==a?"active":""),d(""==l?"overlay_active":"")},children:Object(n.jsx)("span",{})})]})]})}c(80);var He=c.p+"static/media/image.5015ee61.png";function Je(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"loader_container",children:Object(n.jsx)("img",{className:"rot",src:He})})})}var Ge=a.a.memo(Je);c(81);function Me(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.quiz_list})),c=Object(s.useState)(""),a=Object(Pe.a)(c,2),r=a[0],i=a[1],u=Object(Fe.f)();console.log("RENDER HOME SCREEN");var l=Object(s.useState)(""),d=Object(Pe.a)(l,2),j=d[0],b=d[1];Object(o.c)((function(e){return e.user.loggedIn}))||u.push("/"),Object(s.useEffect)((function(){e({type:w})}),[e]);return 200===t.status?Object(n.jsx)("div",{className:"content_container",children:Object(n.jsxs)("div",{className:"content__home",children:[Object(n.jsx)("div",{className:"title_container",children:Object(n.jsx)("p",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u043f\u0440\u043e\u0441\u043e\u0432"})}),Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"search_container",children:[Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("div",{})}),Object(n.jsx)("input",{id:"text",value:r,onChange:function(e){return i(e.target.value)},type:"text",className:"text-input",placeholder:"\u041f\u043e\u0438\u0441\u043a \u0442\u0435\u0441\u0442\u0430"})]}),Object(n.jsxs)("div",{class:"private_container",children:[Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("div",{})}),Object(n.jsx)("input",{type:"text",className:"text-input",id:"text_private",onKeyPress:function(e){if("Enter"===e.code){var t=e.target.value;/^((\w){8})-((\w){4})-((\w){4})-((\w){4})-((\w){12})$/g.test(t)&&u.push("/quiz/".concat(e.target.value))}},value:j,onChange:function(e){return b(e.target.value)},placeholder:"\u0412\u0432\u0435\u0441\u0442\u0438 ID \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0430"}),Object(n.jsx)("div",{onClick:function(e){/^((\w){8})-((\w){4})-((\w){4})-((\w){4})-((\w){12})$/g.test(j)&&u.push("/quiz/".concat(j))},class:"private_search",children:Object(n.jsx)("div",{})})]})]}),t.data.quizzes.filter((function(e){return!r.length||!e.quiz_name.toLowerCase().indexOf(r.trim().toLowerCase(),0)})).map((function(e){return Object(n.jsx)("div",{className:"quizbox_container",children:Object(n.jsxs)(We.b,{className:"quizbox",to:"/quiz/".concat(e.id),children:[Object(n.jsx)("div",{className:"quiz-title",children:Object(n.jsx)("p",{children:e.quiz_name})}),Object(n.jsx)("div",{className:"quiz-quantity",children:Object(n.jsxs)("p",{children:["\u041a\u043e\u043b-\u0432\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432: ",e.questions_count]})})]})},e.id)}))]})}):404===t.status?Object(n.jsxs)("p",{children:["ERROR: ",t.message]}):Object(n.jsx)(Ge,{})}var $e=a.a.memo(Me);c(43);function Ve(e){var t=e.state,c=e.handleSelect,s=e.selectedQuestion;return console.log("\u0414\u0415\u0411\u0410\u0413 \u0420\u0410\u041a\u0415\u0422\u0410 \u0417\u0410\u041b\u0415\u0422\u0410\u0404 :rocket:",t),t.length?Object(n.jsxs)("div",{className:"leftbar",children:[Object(n.jsx)("div",{className:"quizlist",children:t&&t.map((function(e,t){return Object(n.jsx)("div",{className:"quizlist_item ".concat(e.isDone?"voted":"unvoted"," ").concat(s===t?"current":""),children:Object(n.jsxs)("a",{children:[Object(n.jsx)("span",{children:t+1}),Object(n.jsx)("p",{className:"quizlist_item_name",onClick:function(){return c(t)},children:e.wording}),Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("div",{})})]},t)})}))}),Object(n.jsx)("div",{className:"complete-btn_container",children:Object(n.jsx)("a",{href:"",className:"complete-btn",children:Object(n.jsx)("p",{children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0442\u0435\u0441\u0442"})})})]}):Object(n.jsx)(Ge,{})}var Xe=a.a.memo(Ve),Ye=function(e){var t=e.isDone,c=e.id,s=e.text,a=e.wording,r=e.answers,i=e.imageUrl,u=(e.multiple,e.overlay,Object(o.b)());console.log("\u0414\u0415\u0411\u0410\u0413 \u0420\u0410\u041a\u0415\u0422\u0410 \u0417\u0410\u041b\u0415\u0422\u0410\u0404 :rocket:",i);var l=function(e){var t;console.log(e.target.checked),u((t={answ:e.target.value,id:c},{type:b,payload:t}))};return console.log(t),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)("div",{className:"quiz_body",children:[Object(n.jsx)("div",{className:"title_container",children:Object(n.jsx)("p",{children:"\u0412\u043e\u043f\u0440\u043e\u0441 "})}),Object(n.jsx)("div",{className:"quizname",children:Object(n.jsx)("p",{children:a})}),Object(n.jsx)("div",{className:"image_container",children:i&&Object(n.jsx)("img",{width:550,src:"http://134.249.181.40:7777"+i.picture})}),Object(n.jsx)("div",{className:"description_container",children:Object(n.jsx)("p",{children:s})}),Object(n.jsx)("div",{className:"checkbox_container",children:r.map((function(e){return Object(n.jsxs)("div",{className:"checkbox",children:[Object(n.jsx)("input",{disabled:t,onChange:l,checked:e.isSelected,value:e.id,id:e.id,type:"checkbox"}),Object(n.jsx)("label",{htmlFor:e.id,children:Object(n.jsx)("p",{children:e.text})})]})}))}),Object(n.jsx)("div",{className:"buttons_container",children:Object(n.jsx)("input",{type:"button",className:"button_vote button",value:"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c",disabled:t,onClick:function(){console.log("Xyi"),u({type:O,payload:c})}})})]})}),Object(n.jsx)("div",{className:"list-btn_container",children:Object(n.jsxs)("a",{className:"list-btn",onClick:function(e){e.preventDefault(),document.getElementsByClassName("leftbar")[0].classList.toggle("leftbar_active"),document.getElementsByClassName("header__burger")[0].classList.remove("active"),document.getElementsByClassName("header__menu")[0].classList.remove("active"),document.getElementsByClassName("overlay")[0].classList.remove("overlay_active")},children:[Object(n.jsx)("p",{children:"\u0421\u043f\u0438\u0441\u043e\u043a"}),Object(n.jsx)("div",{className:"arrow",children:Object(n.jsx)("div",{className:"arrow_icon"})})]})})]})},et=Object(s.memo)(Ye),tt=Object(s.memo)((function(){var e=Object(s.useContext)(dt),t=Object(Fe.g)().id,c=Object(o.b)(),a=Object(o.c)((function(e){return e.quizzes})),r=Object(s.useState)(0),i=Object(Pe.a)(r,2),u=i[0],l=i[1],d=Object(s.useState)([]),b=Object(Pe.a)(d,2),O=b[0],h=b[1],p=Object(Fe.f)(),m=a.questions.find((function(e){return!1===e.isDone}));Object(o.c)((function(e){return e.user.loggedIn}))||p.push("/"),console.log("RENDER TEST SCREEN"),Object(s.useEffect)((function(){return c({type:j,payload:t}),function(){c(x())}}),[c,t]),Object(s.useEffect)((function(){m||200!==a.status||p.push("/done/".concat(t))}),[m,t,p,a.status]);return 200===a.status?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Xe,{selectedAnswers:O,state:a.questions.map((function(e){return{wording:e.question.wording,isDone:e.isDone}})),handleSelect:function(e){console.log(e),l(e)},selectedQuestion:u}),Object(n.jsx)(et,{isDone:a.questions[u].isDone,setSelectedAnswers:function(e){h([].concat(Object(f.a)(O),[e]))},imageUrl:a.questions[u].question.image,id:a.questions[u].question.id,text:a.questions[u].question.text,wording:a.questions[u].question.wording,answers:a.questions[u].choices,multiple:a.questions[u].question.is_multiple_choice,overlay:e})]}):404===a.status?Object(n.jsxs)("p",{children:["ERROR: ",a.message]}):Object(n.jsx)(Ge,{})}));c(82);function ct(e){var t=e.pass_date,c=e.name,s=e.rating;return Object(n.jsx)("div",{className:"quizbox_container",children:Object(n.jsxs)("div",{className:"quizbox",children:[Object(n.jsx)("div",{className:"quiz-info",children:Object(n.jsxs)("div",{className:"quiz-title",children:[Object(n.jsx)("p",{children:c}),Object(n.jsxs)("p",{children:["\u0414\u0430\u0442\u0430 \u0441\u043a\u043b\u0430\u0434\u0430\u043d\u043d\u044f: ",new Date(t).toString()]})]})}),Object(n.jsxs)("div",{className:"quiz-result",children:[s,"/100"]})]})})}function nt(e){var t=e.message;return Object(n.jsx)("div",{style:{border:"1px solid black"},children:Object(n.jsx)("p",{style:{color:"red"},children:t})})}function st(){var e=Object(o.b)(),t=Object(Fe.f)(),c=Object(o.c)((function(e){return e.results})),s=Object(o.c)((function(e){return e.user})),r=Object(o.c)((function(e){return e.user.loggedIn}));console.log("RESULTS SCREEN"),a.a.useEffect((function(){r||t.push("/")}),[r]);return a.a.useEffect((function(){var t;e((t=s.user.id,{type:g,payload:t}))}),[]),400===s.status&&s.message.length?Object(n.jsx)(nt,{message:s.message}):200===c.status||c.results.length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{onClick:function(){s.user.editing_key.length&&e(function(e){return{type:U,payload:e}}({id:s.user.id,key:s.user.editing_key}))},children:"Logout"}),Object(n.jsx)("div",{className:"content_container",children:Object(n.jsxs)("div",{className:"content__",children:[Object(n.jsx)("div",{className:"title_container",children:Object(n.jsx)("p",{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"})}),c.results.map((function(e){return console.log(),Object(n.jsx)(ct,{pass_date:e.pass_date,name:e.quiz.quiz_name,rating:100*e.rating})}))]})})]}):Object(n.jsx)(Ge,{})}var at=function(){var e=Object(s.useRef)(null),t=Object(o.b)(),c=Object(Fe.f)(),r=Object(o.c)((function(e){return e.user.loggedIn}));console.log("RENDER USER");var i=Object(o.c)((function(e){return e.user.status})),u=Object(o.c)((function(e){return e.user.message}));r&&c.push("/home");var l=a.a.useState(""),d=Object(Pe.a)(l,2),j=d[0],b=d[1],O=function(){e.current.value.length?(t(function(e){return{type:T,payload:e}}(e.current.value)),e.current.value=""):b("Enter name")};return console.log(i,u),400===i&&u.length?Object(n.jsx)(nt,{message:u}):Object(n.jsx)("div",{className:"row p",children:Object(n.jsxs)("div",{className:"input-field col s6",children:[Object(n.jsx)("input",{placeholder:"Enter your name",style:{border:"1px solid black"},id:"icon_prefix",type:"text",onKeyPress:function(e){"Enter"===e.key&&O()},className:"validate",ref:e}),Object(n.jsx)("label",{htmlFor:"icon_prefix",children:"Name"}),Object(n.jsx)("button",{onClick:function(){O()},children:"Log in"}),j&&Object(n.jsx)(nt,{message:j})]})})},rt=c(22);c(44);var it=function(e){var t=e.question_id,c=e.choise_id;return Object(n.jsxs)("div",{className:"answer_container",children:[Object(n.jsxs)("div",{className:"checkbox",children:[Object(n.jsx)("input",{name:"choice-is_correct-".concat(t,"-").concat(c),type:"checkbox",id:"checkbox_".concat(t,"-").concat(c),className:"inp"}),Object(n.jsx)("label",{for:"checkbox_".concat(t,"-").concat(c)})]}),Object(n.jsx)("input",{name:"choice-text-".concat(t,"-").concat(c),type:"text",className:"text-input",placeholder:"\u041e\u0442\u0432\u0435\u0442 ".concat(c+1)})]})};function ot(e){var t=e.addAnswers,c=e.question_id,a=e.choices;var r=Object(s.useState)(null),i=Object(Pe.a)(r,2),o=i[0],u=i[1],l=Object(s.useState)(null),d=Object(Pe.a)(l,2),j=d[0],b=d[1],O=Object(s.useState)(null),h=Object(Pe.a)(O,2),p=h[0],x=h[1];return Object(n.jsxs)("div",{className:"question_container",children:[Object(n.jsx)("div",{className:"question-title_container",children:Object(n.jsxs)("p",{children:["\u0412\u043e\u043f\u0440\u043e\u0441 ",c+1]})}),Object(n.jsx)("div",{className:"question-name_container",children:Object(n.jsx)("input",{type:"text",class:"text-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u0430",name:"question-wording-".concat(c)})}),!o&&Object(n.jsx)("div",{className:"add-image_container",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("input",{onChange:function(e){!function(e){var t=new FormData;t.append("picture",e),ee()({method:"post",url:"http://134.249.181.40:7777/api/image",headers:{"Content-Type":"multipart/form-data"},data:t}).then((function(e){x(e.data.editing_key),u(e.data.picture),b(e.data.id)})).catch((function(e){return console.log(e)}))}(e.target.files[0])},type:"file",name:"file",id:"file",className:"input-file"}),Object(n.jsxs)("label",{for:"file",className:"btn-tertiary",children:[Object(n.jsx)("div",{}),Object(n.jsx)("span",{className:"js-fileName",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"})]})]})}),o&&Object(n.jsx)("div",{className:"img_container",children:Object(n.jsxs)("div",{className:"img-wrap",children:[Object(n.jsx)("img",{src:"http://134.249.181.40:7777"+o,className:"img"}),Object(n.jsx)("div",{onClick:function(){return ee()({method:"delete",url:"http://134.249.181.40:7777/api/image/".concat(j),data:{editing_key:p}}).then((function(e){u(null),b(null),x(null),console.log(e)}))},className:"del-img-btn",children:Object(n.jsx)("div",{})})]})}),Object(n.jsx)("div",{className:"description_container",children:Object(n.jsx)("textarea",{placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",rows:"6",className:"description",name:"question-text-".concat(c)})}),Object(n.jsx)("input",{disabled:!0,type:"hidden",value:j,name:"question-image-".concat(c)}),Object(n.jsx)("div",{className:"answers_container",children:a.map((function(e){return Object(n.jsx)(it,{question_id:c,choise_id:e.choise_id})}))}),Object(n.jsx)("div",{className:"add-answer-button_container",children:Object(n.jsxs)("div",{onClick:function(){t(c)},className:"add-answer-button add-button button",children:[Object(n.jsx)("div",{className:"add-img",children:Object(n.jsx)("div",{})}),Object(n.jsx)("p",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442"})]})})]})}c(83);function ut(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.add_test})),c=Object(Fe.f)(),r=Object(s.useState)([{question_id:0,choises:[{choise_id:0,isCorect:!1},{choise_id:1,isCorect:!1}]}]),i=Object(Pe.a)(r,2),u=i[0],d=i[1];function j(e){d((function(t){return Object(f.a)(t.map((function(c){return c.question_id===e?Object(l.a)(Object(l.a)({},c),{},{choises:[].concat(Object(f.a)(c.choises),[{choise_id:t[e].choises[t[e].choises.length-1].choise_id+1,isCorect:!1}])}):c})))}))}return Object(o.c)((function(e){return e.user.loggedIn}))||c.push("/"),a.a.useEffect((function(){return function(){e({type:H})}}),[e]),"idle"===t.status?Object(n.jsx)("div",{className:"content_container",children:Object(n.jsxs)("div",{className:"content__",children:[Object(n.jsx)("div",{className:"title_container",children:Object(n.jsx)("p",{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"})}),Object(n.jsx)("div",{className:"test-name_container",children:Object(n.jsx)("input",{type:"text",name:"quiz-name",class:"text-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"})}),Object(n.jsx)("form",{name:"quiz",className:"questions_global_container",children:u.map((function(e){return console.log(e),Object(n.jsx)(ot,{choices:e.choises,addAnswers:j,question_id:e.question_id})}))}),Object(n.jsx)("div",{className:"add-question-button_container",children:Object(n.jsxs)("div",{onClick:function(){d((function(e){return[].concat(Object(f.a)(e),[(t=e.length,{question_id:t,choises:[{choise_id:0,isCorect:!1},{choise_id:1,isCorect:!1}]})]);var t}))},className:"add-question-button add-button button",children:[Object(n.jsx)("div",{className:"add-img",children:Object(n.jsx)("div",{})}),Object(n.jsx)("p",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"})]})}),Object(n.jsx)("div",{className:"create-button_container",children:Object(n.jsx)("div",{onClick:function(){var t=document.querySelectorAll("input, textarea");console.log(t);var c={quiz_name:"",questions:[]};console.log(t),Array.from(t).forEach((function(e){var t=e.name.split("-");switch(t[0]){case"quiz":c.quiz_name=e.value;break;case"question":var n;c.questions[parseInt(t[2])]?c.questions[parseInt(t[2])][t[1]]=e.checked?"checkbox"==e.type:e.value:c.questions[parseInt(t[2])]=(n={},Object(rt.a)(n,t[1],"on"!==e.value?e.value:e.checked),Object(rt.a)(n,"choices",[]),n);break;case"choice":c.questions[parseInt(t[2])].choices[parseInt(t[3])]?c.questions[parseInt(t[2])].choices[parseInt(t[3])][t[1]]="on"!==e.value?e.value:e.checked:c.questions[parseInt(t[2])].choices[parseInt(t[3])]=Object(rt.a)({},t[1],"on"!==e.value?e.value:e.checked)}})),e({type:F,payload:c})},className:"create-button button",children:Object(n.jsx)("p",{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})})})]})}):404===t.status?Object(n.jsx)("p",{children:"ERRRROR"}):200===t.status?Object(n.jsx)("p",{children:"ADD_TEST_SUCCESS"}):void 0}function lt(){var e=Object(o.c)((function(e){return e.quizzes})),t=Object(o.c)((function(e){return e.user.user.id})),c=Object(Fe.g)().id,a=Object(o.b)();return Object(s.useEffect)((function(){var n;return console.log(t,c),a((n={obj:e.questions,id:c,user:t},{type:ie,payload:n})),function(){return a(x())}}),[a,c]),Object(n.jsx)("div",{children:"You pass test!!"})}var dt=a.a.createContext();function jt(){return Object(n.jsx)(We.a,{children:Object(n.jsxs)(dt.Provider,{children:[Object(n.jsx)(Be,{}),Object(n.jsxs)(Fe.c,{children:[Object(n.jsx)(Fe.a,{exact:!0,path:"/ClasstimeKiller/",children:Object(n.jsx)(at,{})}),Object(n.jsx)(Fe.a,{path:"/ClasstimeKiller/home",children:Object(n.jsx)($e,{})}),Object(n.jsx)(Fe.a,{path:"/ClasstimeKiller/add",children:Object(n.jsx)(ut,{})}),Object(n.jsx)(Fe.a,{path:"/ClasstimeKiller/quiz/:id",children:Object(n.jsx)(tt,{})}),Object(n.jsx)(Fe.a,{path:"/ClasstimeKiller/done/:id",children:Object(n.jsx)(lt,{})}),Object(n.jsx)(Fe.a,{path:"/ClasstimeKiller/results/",children:Object(n.jsx)(st,{})})]})]})})}var bt=a.a.memo(jt);var Ot=function(){return console.log("RENDER APP"),Object(n.jsx)(o.a,{store:Ke,children:Object(n.jsx)(s.Profiler,{id:"Quizzes",onRender:function(e,t,c,n,s,a){},children:Object(n.jsx)(bt,{})})})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(Ot,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.e22eb49a.chunk.js.map