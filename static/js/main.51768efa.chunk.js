(this["webpackJsonpconnect-four"]=this["webpackJsonpconnect-four"]||[]).push([[0],{13:function(e,r,a){e.exports={wrapper:"GameBoardCell_wrapper__1PVEo",red:"GameBoardCell_red__3HNmv",yellow:"GameBoardCell_yellow__3cktr"}},14:function(e,r,a){e.exports={"app-wrapper":"App_app-wrapper__l2jfx"}},16:function(e,r,a){e.exports={wrapper:"Game_wrapper__AT8P3"}},17:function(e,r,a){e.exports={wrapper:"GameBoard_wrapper__10nTn"}},29:function(e,r,a){"use strict";a.r(r);var t=a(1),n=a(0),o=a.n(n),c=a(7),l=a.n(c),s=a(14),i=a.n(s),p=a(6),u=a.n(p),O=a(3);var d=function(e){var r=Object(O.c)((function(e){return e.appNavigation.isGameOn})),a=Object(O.c)((function(e){return e.appNavigation.isStartScreenOn})),n=Object(O.b)();return Object(t.jsxs)("div",{className:u.a.wrapper,children:[Object(t.jsx)("button",{className:u.a.button,onClick:function(){!function(e){n(function(e){return{type:"GAME_ON_OFF",payload:{isGameOn:e}}}(e))}(r),function(e){n(function(e){return{type:"START_SCREEN_ON_OFF",payload:{isStartScreenOn:e}}}(e))}(a)},children:"Start Game"}),Object(t.jsx)("button",{className:u.a.button,children:"Settings"}),Object(t.jsx)("button",{className:u.a.button,children:"Best Scores"})]})},_=a(16),b=a.n(_),j=a(17),v=a.n(j),y=a(13),f=a.n(y),m=a(5),N=a(2),h={lastDiscDropCell:{discColor:"",col:null,row:null},currentColCursorOver:0,currentPlayer:"red",board:[[],[],[],[],[],[],[]]},C={isStartScreenOn:!0,isGameOn:!1,isSettingsOn:!1,isBestScoresOn:!1,isGameOver:!1},S={playerOne:{color:"red",moves:0},playerTwo:{color:"yellow",moves:0}},w=Object(m.b)({gameBoard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"CHANGE_PLAYER":var a=r.payload.player;return Object(N.a)(Object(N.a)({},e),{},{currentPlayer:a});case"DROP_DISC_TO_COLUMN":var t=r.payload,n=t.col,o=t.currentPlayer,c=e.board.slice();c[n].push(o);var l=c[n].length-1;return Object(N.a)(Object(N.a)({},e),{},{board:c,lastDiscDropCell:{discColor:o,col:n,row:l}});case"CHANGE_CURRENT_COL_CURSOR_OVER":var s=r.payload.colNum;return Object(N.a)(Object(N.a)({},e),{},{currentColCursorOver:s});default:return e}},appNavigation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"START_SCREEN_ON_OFF":var a=r.payload.isStartScreenOn;return Object(N.a)(Object(N.a)({},e),{},{isStartScreenOn:!a});case"GAME_ON_OFF":var t=r.payload.isGameOn;return Object(N.a)(Object(N.a)({},e),{},{isGameOn:!t});case"SETTINGS_ON_OFF":var n=r.payload.isSettingsOn;return Object(N.a)(Object(N.a)({},e),{},{isSettingsOn:n});case"BEST_SCORES_ON_OFF":var o=r.payload.isBestScoresOn;return Object(N.a)(Object(N.a)({},e),{},{isBestScoresOn:o});case"GAME_OVER":var c=r.payload.isGameOver;return Object(N.a)(Object(N.a)({},e),{},{isGameOver:c});default:return e}},players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"COUNT_MOVES_RED":var a=r.payload.player,t=e.playerOne.moves;return t+=1,Object(N.a)(Object(N.a)({},e),{},{playerOne:{color:a,moves:t}});case"COUNT_MOVES_YELLOW":var n=r.payload.player,o=e.playerTwo.moves;return o+=1,Object(N.a)(Object(N.a)({},e),{},{playerTwo:{color:n,moves:o}});default:return e}}}),E=Object(m.c)(w);E.subscribe((function(){return console.log(E.getState())}));var g=E;var x=function(e){var r,a=e.rowNum,n=e.colNum,o=g.getState(),c=o.players,l=c.playerOne,s=c.playerTwo,i=o.appNavigation.isGameOver,p=Object(O.b)(),u=Object(O.c)((function(e){return e.gameBoard.currentPlayer})),d=o.gameBoard.board[n][a],_=d||"";return r=i?function(){}:function(){var e;o.gameBoard.board[n].length<6&&(e=(e=u)===l.color?s.color:l.color,p(function(e){return{type:"CHANGE_PLAYER",payload:{player:e}}}(e)),function(e,r){p(function(e,r){return{type:"DROP_DISC_TO_COLUMN",payload:{col:e,currentPlayer:r}}}(e,r))}(n,u),u===l.color&&function(e){p(function(e){return{type:"COUNT_MOVES_RED",payload:{player:e}}}(e))}(u),u===s.color&&function(e){p(function(e){return{type:"COUNT_MOVES_YELLOW",payload:{player:e}}}(e))}(u),function(e){p(function(e){return{type:"GAME_OVER",payload:{isGameOver:e}}}(e))}(function(){var e=g.getState(),r=e.gameBoard.lastDiscDropCell,a=r.col,t=r.row,n=r.discColor,o=e.gameBoard.board,c=!1;return(function(){for(var e=1,r=a+1;r<=6&&o[r][t]===n;r++)e++;for(var c=a-1;c>=0&&o[c][t]===n;c--)e++;return e>=4}()||function(){for(var e=1,r=t-1;r>=0&&o[a][r]===n;r--)e++;for(var c=t+1;c<=5&&o[a][c]===n;c++)e++;return e>=4}()||function(){for(var e=1,r=a+1,c=t-1;r<=6&&c>=0&&o[r][c]===n;r++,c--)e++;for(var l=a-1,s=t+1;l>=0&&s<=5&&o[l][s]===n;l--,s++)e++;return e>=4}()||function(){for(var e=1,r=a-1,c=t-1;r>=0&&c>=0&&o[r][c]===n;r--,c--)e++;for(var l=a+1,s=t+1;l<=6&&s<=5&&o[l][s]===n;l++,s++)e++;return e>=4}())&&(console.log(n," is WIN "),c=!0),c}()))},Object(t.jsx)("div",{className:[f.a.wrapper,f.a[_]].join(" "),onClick:r,onMouseOver:function(){!function(e){p(function(e){return{type:"CHANGE_CURRENT_COL_CURSOR_OVER",payload:{colNum:e}}}(e))}(n)}})};var G=function(){for(var e=[],r=5;r>=0;r--){for(var a=[],n=0;n<=6;n++)a.push(Object(t.jsx)(x,{rowNum:r,colNum:n},"".concat(r).concat(n)));e.push(a)}return Object(t.jsx)("div",{className:v.a.wrapper,children:e})},R=a(8),D=a.n(R);var P=function(e){var r=Object(O.c)((function(e){return e.gameBoard.currentPlayer})),a=Object(O.c)((function(e){return e.gameBoard.currentColCursorOver}));return Object(t.jsxs)("div",{className:D.a.wrapper,children:["Current Player:",Object(t.jsx)("div",{className:[D.a.chip,D.a[r]].join(" "),style:{left:50*a}})]})},T=a(4),B=a.n(T);var A=function(e){var r=e.player,a=g.getState(),n=Object(O.c)((function(e){return e.players})),o=Object(O.c)((function(e){return e.appNavigation.isGameOver})),c=Object(O.c)((function(e){return e.gameBoard.lastDiscDropCell.discColor})),l=r===a.players.playerOne.color?n.playerOne.moves:n.playerTwo.moves;return Object(t.jsxs)("div",{className:B.a.wrapper,children:[Object(t.jsxs)("div",{className:B.a.player,children:[Object(t.jsx)("div",{className:B.a.title,children:"Player"}),Object(t.jsx)("div",{className:[B.a.chip,B.a[r]].join(" ")})]}),Object(t.jsxs)("div",{className:B.a.moves,children:["Moves: ",l]}),o&&r===c&&Object(t.jsx)("div",{className:B.a.winner,children:"WINNER!!!"})]})};var M=function(e){var r=g.getState().players,a=r.playerOne,n=r.playerTwo;return Object(t.jsxs)("div",{className:b.a.wrapper,children:[Object(t.jsx)(A,{player:a.color}),Object(t.jsxs)("div",{children:[Object(t.jsx)(P,{}),Object(t.jsx)(G,{})]}),Object(t.jsx)(A,{player:n.color})]})};var F=function(e){var r=Object(O.c)((function(e){return e.appNavigation.isGameOn})),a=Object(O.c)((function(e){return e.appNavigation.isStartScreenOn}));return Object(t.jsxs)("div",{className:i.a["app-wrapper"],children:["App: CONNECT FOUR (beta)",a&&Object(t.jsx)(d,{}),r&&Object(t.jsx)(M,{})]})};l.a.render(Object(t.jsx)(o.a.StrictMode,{children:Object(t.jsx)(O.a,{store:g,children:Object(t.jsx)(F,{})})}),document.getElementById("root"))},4:function(e,r,a){e.exports={wrapper:"PlayerDashboard_wrapper__3nRYp",player:"PlayerDashboard_player__CpWVs",moves:"PlayerDashboard_moves__1YVks",title:"PlayerDashboard_title__2R2El",chip:"PlayerDashboard_chip__3-EPz",red:"PlayerDashboard_red__r7CtE",yellow:"PlayerDashboard_yellow__gkkE5",winner:"PlayerDashboard_winner__17AA7"}},6:function(e,r,a){e.exports={wrapper:"StartScreen_wrapper__2GBHR",button:"StartScreen_button__3fQxl"}},8:function(e,r,a){e.exports={wrapper:"CurrentPlayerDashboard_wrapper__D11zR",chip:"CurrentPlayerDashboard_chip__3Mqty",red:"CurrentPlayerDashboard_red__15Sgo",yellow:"CurrentPlayerDashboard_yellow__OGj4d"}}},[[29,1,2]]]);
//# sourceMappingURL=main.51768efa.chunk.js.map