(this["webpackJsonpconnect-four"]=this["webpackJsonpconnect-four"]||[]).push([[0],[,,,,,,,function(e,a,r){e.exports={wrapper:"Settings_wrapper__2Vhbh",navWrapper:"Settings_navWrapper__3w8kD",title:"Settings_title__2_HNL",contentWrapper:"Settings_contentWrapper__3d2bu",label:"Settings_label__1hkWt",input:"Settings_input__3sK2t",button:"Settings_button__y4NAa",chip:"Settings_chip__2k-6x",red:"Settings_red__3iRTf",yellow:"Settings_yellow__2Zvw7"}},,,function(e,a,r){e.exports={popupWrapper:"WinnerPopup_popupWrapper__11iZS",popupWindow:"WinnerPopup_popupWindow__28C_M",popupOverlay:"WinnerPopup_popupOverlay__3MF6u",player:"WinnerPopup_player__2U8VQ",title:"WinnerPopup_title__3wesi",wins:"WinnerPopup_wins__3X1Mm",moves:"WinnerPopup_moves__18C-G",time:"WinnerPopup_time__2rWRX",chip:"WinnerPopup_chip__3tAkE",red:"WinnerPopup_red__1cbwL",yellow:"WinnerPopup_yellow__3YjvX",offerToRequest:"WinnerPopup_offerToRequest__3w7yp",close:"WinnerPopup_close__e7NOw"}},,,function(e,a,r){e.exports={wrapper:"PlayerDashboard_wrapper__3nRYp",player:"PlayerDashboard_player__CpWVs",moves:"PlayerDashboard_moves__1YVks",playerName:"PlayerDashboard_playerName__1kYBu",title:"PlayerDashboard_title__2R2El",chip:"PlayerDashboard_chip__3-EPz",red:"PlayerDashboard_red__r7CtE",yellow:"PlayerDashboard_yellow__gkkE5",winner:"PlayerDashboard_winner__17AA7"}},,,,function(e,a,r){e.exports={wrapper:"StartScreen_wrapper__2GBHR",links:"StartScreen_links__3fUTn",button:"StartScreen_button__3fQxl"}},,function(e,a,r){e.exports={wrapper:"Game_wrapper__AT8P3",navWrapper:"Game_navWrapper__cwf8B",gameWrapper:"Game_gameWrapper__3W7K6",timeWrapper:"Game_timeWrapper__wTemH"}},function(e,a,r){e.exports={wrapper:"CurrentPlayerDashboard_wrapper__D11zR",chipWrapper:"CurrentPlayerDashboard_chipWrapper__Qp4mG",chip:"CurrentPlayerDashboard_chip__3Mqty",red:"CurrentPlayerDashboard_red__15Sgo",yellow:"CurrentPlayerDashboard_yellow__OGj4d"}},function(e,a,r){e.exports={wrapper:"BestScores_wrapper__elE_s",navWrapper:"BestScores_navWrapper__2_Cw_",title:"BestScores_title__31Z_h",button:"BestScores_button__2kFXL"}},,,function(e,a,r){e.exports={wrapper:"Header_wrapper__2kdU7",logo:"Header_logo__1pHsl",title:"Header_title__3fVxY"}},function(e,a,r){e.exports={wrapper:"GameBoardCell_wrapper__1PVEo",cell:"GameBoardCell_cell__2Z2tO",red:"GameBoardCell_red__3HNmv",yellow:"GameBoardCell_yellow__3cktr"}},function(e,a,r){e.exports={table:"ResultsTable_table__9pk69",tableHeader:"ResultsTable_tableHeader__17b39",tableBody:"ResultsTable_tableBody__2Wf4L"}},,,,,,function(e,a,r){e.exports={chip:"ResultRow_chip__bfoPR",red:"ResultRow_red__a7lVO",yellow:"ResultRow_yellow__3DbDy"}},,function(e,a,r){e.exports={appWrapper:"App_appWrapper__14-7x"}},,function(e,a,r){e.exports={wrapper:"GameBoard_wrapper__10nTn"}},function(e,a,r){e.exports={time:"Timer_time__1MZ_W"}},function(e,a,r){e.exports={button:"ReturnToStartScreenBtn_button__2vgSA"}},,,,,,,,,,,function(e,a,r){"use strict";r.r(a);var t=r(0),n=r(1),c=r.n(n),o=r(22),s=r.n(o),l=r(34),i=r.n(l),p=r(17),u=r.n(p),j=r(4),_=r(12),d=r.p+"static/media/logo.778bfb3f.png",b=r(24),O=r.n(b),m=function(){return Object(t.jsxs)("div",{className:O.a.wrapper,children:[Object(t.jsx)("img",{src:d,alt:"Connect Four logo",width:80,height:80,className:O.a.logo}),Object(t.jsx)("h1",{className:O.a.title,children:"Connect Four"})]})};var v=function(){var e=Object(j.c)((function(e){return e.appNavigation.isGameOn})),a=Object(j.b)();return Object(t.jsxs)("div",{className:u.a.wrapper,children:[Object(t.jsx)(m,{}),Object(t.jsxs)("div",{className:u.a.links,children:[Object(t.jsx)(_.b,{className:u.a.button,to:"/game",onClick:function(){return function(e){return a(function(e){return{type:"GAME_ON_OFF",payload:{isGameOn:e}}}(e))}(e)},children:"Start Game"}),Object(t.jsx)(_.b,{className:u.a.button,to:"/settings",children:"Settings"}),Object(t.jsx)(_.b,{className:u.a.button,to:"/bestscores",children:"Best Scores"})]})]})},h=r(5),y=r(19),f=r.n(y),N=r(36),x=r.n(N),w=r(25),g=r.n(w),S=r(16),R=r(2),C={lastDiscDropCell:{discColor:"",col:null,row:null},currentColCursorOver:0,currentPlayer:"red",board:[[],[],[],[],[],[],[]]},E={isGameOn:!1,isGameOver:!1},T={playerOne:{color:"red",moves:0},playerTwo:{color:"yellow",moves:0}},W={isWin:!1,name:"Incognito",color:"",moves:0,time:0},P={playerRedName:"Red",playerYellowName:"Yellow"},G=Object(S.b)({gameBoard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE_PLAYER":var r=a.payload.player;return Object(R.a)(Object(R.a)({},e),{},{currentPlayer:r});case"DROP_DISC_TO_COLUMN":var t=a.payload,n=t.col,c=t.currentPlayer,o=e.board.slice();o[n].push(c);var s=o[n].length-1;return Object(R.a)(Object(R.a)({},e),{},{board:o,lastDiscDropCell:{discColor:c,col:n,row:s}});case"CHANGE_CURRENT_COL_CURSOR_OVER":var l=a.payload.colNum;return Object(R.a)(Object(R.a)({},e),{},{currentColCursorOver:l});case"RETURN_TO_START_SCREEN":return Object(R.a)(Object(R.a)({},e),{},{lastDiscDropCell:{discColor:"",col:null,row:null},currentColCursorOver:0,currentPlayer:"red",board:[[],[],[],[],[],[],[]]});default:return e}},appNavigation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GAME_ON_OFF":var r=a.payload.isGameOn;return Object(R.a)(Object(R.a)({},e),{},{isGameOn:!r});case"GAME_OVER":var t=a.payload.isGameOver;return Object(R.a)(Object(R.a)({},e),{},{isGameOver:t});case"RETURN_TO_START_SCREEN":return Object(R.a)(Object(R.a)({},e),{},{isGameOn:!1,isGameOver:!1});default:return e}},players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"COUNT_MOVES_RED":var r=a.payload.player,t=e.playerOne.moves;return t+=1,Object(R.a)(Object(R.a)({},e),{},{playerOne:{color:r,moves:t}});case"COUNT_MOVES_YELLOW":var n=a.payload.player,c=e.playerTwo.moves;return c+=1,Object(R.a)(Object(R.a)({},e),{},{playerTwo:{color:n,moves:c}});case"RETURN_TO_START_SCREEN":return{playerOne:{color:"red",moves:0},playerTwo:{color:"yellow",moves:0}};default:return e}},winner:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"STOP_TIMER":var r=a.payload.time;return Object(R.a)(Object(R.a)({},e),{},{time:r});case"SAVE_WINNER":var t=a.payload,n=t.name,c=t.color,o=t.moves;return Object(R.a)(Object(R.a)({},e),{},{name:n,color:c,moves:o,isWin:!0});case"CLOSE_WINNER_POPUP":case"RETURN_TO_START_SCREEN":return{isWin:!1,name:"Incognito",color:"",moves:0,time:0};default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SAVE_SETTINGS":var r=a.payload,t=r.playerRedName,n=r.playerYellowName;return Object(R.a)(Object(R.a)({},e),{},{playerRedName:t,playerYellowName:n});default:return e}}}),D=Object(S.c)(G);D.subscribe((function(){return console.log(D.getState())}));var B=D,A="bestScoresList";var k=function(e){var a=e.rowNum,r=e.colNum,n=B.getState(),c=n.players,o=c.playerOne,s=c.playerTwo,l=n.appNavigation.isGameOver,i=Object(j.b)(),p=Object(j.c)((function(e){return e.gameBoard.currentPlayer})),u=n.gameBoard.board[r][a],_=u||"";return Object(t.jsx)("div",{className:g.a.wrapper,onClick:function(){if(n.gameBoard.board[r].length<6){if(l)return;e=(e=p)===o.color?s.color:o.color,i(function(e){return{type:"CHANGE_PLAYER",payload:{player:e}}}(e)),function(e,a){i(function(e,a){return{type:"DROP_DISC_TO_COLUMN",payload:{col:e,currentPlayer:a}}}(e,a))}(r,p),p===o.color&&function(e){i(function(e){return{type:"COUNT_MOVES_RED",payload:{player:e}}}(e))}(p),p===s.color&&function(e){i(function(e){return{type:"COUNT_MOVES_YELLOW",payload:{player:e}}}(e))}(p),function(e){i(function(e){return{type:"GAME_OVER",payload:{isGameOver:e}}}(e))}(function(){var e=B.getState(),a=e.gameBoard.lastDiscDropCell,r=a.col,t=a.row,n=a.discColor,c=e.gameBoard.board,o=!1;return(function(){for(var e=1,a=r+1;a<7&&c[a][t]===n;a++)e++;for(var o=r-1;o>=0&&c[o][t]===n;o--)e++;return e>=4}()||function(){for(var e=1,a=t-1;a>=0&&c[r][a]===n;a--)e++;for(var o=t+1;o<6&&c[r][o]===n;o++)e++;return e>=4}()||function(){for(var e=1,a=r+1,o=t-1;a<7&&o>=0&&c[a][o]===n;a++,o--)e++;for(var s=r-1,l=t+1;s>=0&&l<6&&c[s][l]===n;s--,l++)e++;return e>=4}()||function(){for(var e=1,a=r-1,o=t-1;a>=0&&o>=0&&c[a][o]===n;a--,o--)e++;for(var s=r+1,l=t+1;s<7&&l<6&&c[s][l]===n;s++,l++)e++;return e>=4}())&&(console.log(n," is WIN "),o=!0),o}())}var e},onMouseOver:function(){l||function(e){i(function(e){return{type:"CHANGE_CURRENT_COL_CURSOR_OVER",payload:{colNum:e}}}(e))}(r)},children:Object(t.jsx)("div",{className:[g.a.cell,g.a[_]].join(" ")})})};var M=function(){for(var e=[],a=5;a>=0;a--){for(var r=[],n=0;n<7;n++)r.push(Object(t.jsx)(k,{rowNum:a,colNum:n},"".concat(a).concat(n)));e.push(r)}return Object(t.jsx)("div",{className:x.a.wrapper,children:e})},I=r(20),U=r.n(I);var V=function(){var e=Object(j.c)((function(e){return e.gameBoard.currentPlayer})),a=Object(j.c)((function(e){return e.gameBoard.currentColCursorOver}));return Object(t.jsx)("div",{className:U.a.wrapper,children:Object(t.jsx)("div",{className:U.a.chipWrapper,style:{left:50*a},children:Object(t.jsx)("div",{className:[U.a.chip,U.a[e]].join(" ")})})})},Y=r(13),L=r.n(Y);var H=function(e){var a=e.player,r=B.getState(),n=Object(j.c)((function(e){return e.gameBoard.lastDiscDropCell.discColor})),c=r.appNavigation.isGameOver,o=r.players,s=r.settings,l=a===r.players.playerOne.color?s.playerRedName:s.playerYellowName,i=a===r.players.playerOne.color?o.playerOne.moves:o.playerTwo.moves;return Object(t.jsxs)("div",{className:L.a.wrapper,children:[Object(t.jsxs)("div",{className:L.a.player,children:[Object(t.jsx)("div",{className:L.a.title,children:"Player"}),Object(t.jsx)("div",{className:[L.a.chip,L.a[a]].join(" ")})]}),Object(t.jsxs)("div",{className:L.a.playerName,children:["Name: ",l]}),Object(t.jsxs)("div",{className:L.a.moves,children:["Moves: ",i]}),c&&a===n&&Object(t.jsx)("div",{className:L.a.winner,children:"WINNER!!!"})]})},F=r(14),J=r(37),Z=r.n(J),q=function(e){return(parseInt(e,10)<10?"0":"")+e};var X=function(){var e=B.getState().appNavigation.isGameOver,a=Object(j.b)(),r=Object(n.useState)(0),c=Object(F.a)(r,2),o=c[0],s=c[1];Object(n.useEffect)((function(){if(!e){var a=setInterval((function(){return s(o+1)}),1e3);return function(){return clearInterval(a)}}})),Object(n.useEffect)((function(){a(function(e){return{type:"STOP_TIMER",payload:{time:e}}}(o))}),[e]);var l=Math.floor(o/60),i=o%60;return Object(t.jsxs)("div",{className:Z.a.time,children:["Time: ",q(l),":",q(i)]})},Q=r(10),z=r.n(Q),K=function(){var e=B.getState().winner,a=e.name,r=e.color,c=e.moves,o=e.time,s=Object(j.b)(),l=Math.floor(o/60),i=o%60,p="".concat(q(l),":").concat(q(i));return Object(n.useEffect)((function(){!function(e,a,r,t){var n=JSON.parse(localStorage.getItem(A))||[],c={name:e,color:a,moves:r,time:t};n.push(c),n.sort((function(e,a){return e.moves-a.moves||e.time-a.time})),n.splice(10),localStorage.setItem(A,JSON.stringify(n))}(a,r,c,o)}),[]),Object(t.jsxs)("div",{className:z.a.popupWrapper,children:[Object(t.jsxs)("div",{className:z.a.popupWindow,children:[Object(t.jsx)("button",{className:z.a.close,onClick:function(e){e.preventDefault(),s({type:"CLOSE_WINNER_POPUP"})}}),Object(t.jsxs)("div",{className:z.a.player,children:[Object(t.jsx)("div",{className:z.a.title,children:a}),Object(t.jsx)("div",{className:[z.a.chip,z.a[r]].join(" ")}),Object(t.jsx)("div",{className:z.a.wins,children:"WINS!"})]}),Object(t.jsxs)("div",{className:z.a.moves,children:["Moves: ",c]}),Object(t.jsxs)("div",{className:z.a.time,children:["Time: ",p]}),Object(t.jsxs)("div",{className:z.a.offerToRequest,children:["You won in ",c," moves. Want to know an interesting fact about this number?"]})]}),Object(t.jsx)("div",{className:z.a.popupOverlay})]})},$=r(38),ee=r.n($);var ae=function(){var e=Object(j.b)();return Object(t.jsx)(_.b,{to:"/",className:ee.a.button,onClick:function(){return e({type:"RETURN_TO_START_SCREEN"})},children:"Back to menu"})};var re=function(){var e=B.getState(),a=e.players,r=a.playerOne,c=a.playerTwo,o=e.settings,s=Object(j.c)((function(e){return e.appNavigation.isGameOver})),l=Object(j.c)((function(e){return e.winner.isWin})),i=Object(j.b)();return Object(n.useEffect)((function(){return function(){return i({type:"RETURN_TO_START_SCREEN"})}}),[]),Object(n.useEffect)((function(){var a=e.gameBoard.lastDiscDropCell.discColor,t=a===r.color?r.moves:c.moves,n=a===r.color?o.playerRedName:o.playerYellowName;s&&i(function(e,a,r){return{type:"SAVE_WINNER",payload:{name:e,color:a,moves:r}}}(n,a,t))}),[s]),Object(t.jsxs)("div",{className:f.a.wrapper,children:[Object(t.jsx)("div",{className:f.a.navWrapper,children:Object(t.jsx)(ae,{})}),Object(t.jsxs)("div",{className:f.a.gameWrapper,children:[Object(t.jsx)(H,{player:r.color}),Object(t.jsxs)("div",{children:[Object(t.jsx)(V,{}),Object(t.jsx)(M,{})]}),Object(t.jsx)(H,{player:c.color})]}),Object(t.jsx)("div",{className:f.a.timeWrapper,children:Object(t.jsx)(X,{})}),l&&Object(t.jsx)(K,{})]})},te=r(7),ne=r.n(te);var ce=function(){var e=Object(j.b)(),a=B.getState().settings,r=Object(n.useState)(a.playerRedName),c=Object(F.a)(r,2),o=c[0],s=c[1],l=Object(n.useState)(a.playerYellowName),i=Object(F.a)(l,2),p=i[0],u=i[1],_=function(e){"red"===e.target.id&&s(e.target.value),"yellow"===e.target.id&&u(e.target.value)};return Object(t.jsxs)("div",{className:ne.a.wrapper,children:[Object(t.jsx)("div",{className:ne.a.navWrapper,children:Object(t.jsx)(ae,{})}),Object(t.jsxs)("div",{className:ne.a.contentWrapper,children:[Object(t.jsx)("h2",{className:ne.a.title,children:"Settings"}),Object(t.jsxs)("div",{children:[Object(t.jsx)("div",{children:Object(t.jsxs)("label",{className:ne.a.label,children:[Object(t.jsx)("span",{children:"Player"}),Object(t.jsx)("div",{className:[ne.a.chip,ne.a.red].join(" ")}),Object(t.jsx)("span",{children:"name:"}),Object(t.jsx)("input",{id:"red",type:"text",value:o,className:ne.a.input,onChange:_})]})}),Object(t.jsx)("div",{children:Object(t.jsxs)("label",{className:ne.a.label,children:[Object(t.jsx)("span",{children:"Player"}),Object(t.jsx)("div",{className:[ne.a.chip,ne.a.yellow].join(" ")}),Object(t.jsx)("span",{children:"name:"}),Object(t.jsx)("input",{id:"yellow",type:"text",className:ne.a.input,value:p,onChange:_})]})})]}),Object(t.jsx)("button",{className:ne.a.button,onClick:function(){return e({type:"SAVE_SETTINGS",payload:{playerRedName:o,playerYellowName:p}})},children:"Save settings"})]})]})},oe=r(21),se=r.n(oe),le=r(26),ie=r.n(le),pe=r(32),ue=r.n(pe),je=function(e){var a=e.name,r=e.color,n=e.moves,c=e.time,o=Math.floor(c/60),s=c%60,l="".concat(q(o),":").concat(q(s));return Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{children:a}),Object(t.jsx)("td",{children:Object(t.jsx)("div",{className:[ue.a.chip,ue.a[r]].join(" ")})}),Object(t.jsx)("td",{children:n}),Object(t.jsx)("td",{children:l})]})},_e=function(){var e=JSON.parse(localStorage.getItem(A))||null,a=null;return e&&(a=e.map((function(e,a){return Object(t.jsx)(je,{name:e.name,color:e.color,moves:e.moves,time:e.time},a)}))),Object(t.jsx)("div",{children:Object(t.jsxs)("table",{className:ie.a.table,children:[Object(t.jsx)("thead",{children:Object(t.jsxs)("tr",{className:ie.a.tableHeader,children:[Object(t.jsx)("th",{children:"Name"}),Object(t.jsx)("th",{children:"Color"}),Object(t.jsx)("th",{children:"Moves"}),Object(t.jsx)("th",{children:"Time"})]})}),Object(t.jsx)("tbody",{className:ie.a.tableBody,children:a||Object(t.jsx)("tr",{children:Object(t.jsx)("td",{colSpan:4,children:"Best results list is empty"})})})]})})},de=function(){var e=Object(n.useState)(!1),a=Object(F.a)(e,2),r=a[0],c=a[1];return Object(t.jsxs)("div",{className:se.a.wrapper,children:[Object(t.jsx)("div",{className:se.a.navWrapper,children:Object(t.jsx)(ae,{})}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h2",{className:se.a.title,children:"Best Scores"}),Object(t.jsx)(_e,{})]}),Object(t.jsx)("button",{className:se.a.button,onClick:function(){c(!r),localStorage.removeItem(A)},children:"Clear table"})]})};var be=function(){return Object(t.jsx)("div",{className:i.a.appWrapper,children:Object(t.jsxs)(h.c,{children:[Object(t.jsx)(h.a,{exact:!0,path:"/",component:v}),Object(t.jsx)(h.a,{path:"/game",component:re}),Object(t.jsx)(h.a,{path:"/settings",component:ce}),Object(t.jsx)(h.a,{path:"/bestscores",component:de})]})})};s.a.render(Object(t.jsx)(c.a.StrictMode,{children:Object(t.jsx)(j.a,{store:B,children:Object(t.jsx)(_.a,{children:Object(t.jsx)(be,{})})})}),document.getElementById("root"))}],[[49,1,2]]]);
//# sourceMappingURL=main.c0303772.chunk.js.map