(this["webpackJsonpconnect-four"]=this["webpackJsonpconnect-four"]||[]).push([[0],{11:function(r,e,a){r.exports={"app-wrapper":"App_app-wrapper__l2jfx"}},12:function(r,e,a){r.exports={wrapper:"GameBoard_wrapper__10nTn"}},25:function(r,e,a){"use strict";a.r(e);var o=a(1),t=a(0),n=a.n(t),c=a(5),l=a.n(c),p=a(11),u=a.n(p),s=a(12),i=a.n(s),d=a(8),f=a.n(d),b=a(2),j=a(3),v=a(4),y={players:{playerOne:"red",playerTwo:"yellow"},lastDiscDropCell:{discColor:"",col:null,row:null},currentPlayer:"red",board:[[],[],[],[],[],[],[]]},O=Object(j.b)({gameBoard:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGE_PLAYER":var a=e.payload.player;return Object(v.a)(Object(v.a)({},r),{},{currentPlayer:a});case"DROP_DISC_TO_COLUMN":var o=e.payload,t=o.col,n=o.currentPlayer,c=r.board.slice();c[t].push(n);var l=c[t].length-1;return Object(v.a)(Object(v.a)({},r),{},{board:c,lastDiscDropCell:{discColor:n,col:t,row:l}});default:return r}}}),m=Object(j.c)(O);m.subscribe((function(){return console.log(m.getState())}));var w=m;var _=function(r){var e=r.rowNum,a=r.colNum,t=w.getState(),n=Object(b.b)(),c=Object(b.c)((function(r){return r.gameBoard.currentPlayer})),l=t.gameBoard.board[a][e],p=l||"";return Object(o.jsxs)("div",{className:[f.a.wrapper,f.a[p]].join(" "),onClick:function(){var r;t.gameBoard.board[a].length<6&&(r=(r=c)===t.gameBoard.players.playerOne?t.gameBoard.players.playerTwo:t.gameBoard.players.playerOne,n(function(r){return{type:"CHANGE_PLAYER",payload:{player:r}}}(r)),function(r,e){n(function(r,e){return{type:"DROP_DISC_TO_COLUMN",payload:{col:r,currentPlayer:e}}}(r,e))}(a,c),function(){var r=w.getState(),e=r.gameBoard.lastDiscDropCell,a=e.col,o=e.row,t=e.discColor,n=r.gameBoard.board;(function(){for(var r=1,e=a+1;e<=6&&n[e][o]===t;e++)r++;for(var c=a-1;c>=0&&n[c][o]===t;c--)r++;return r>=4}()||function(){for(var r=1,e=o-1;e>=0&&n[a][e]===t;e--)r++;for(var c=o+1;c<=5&&n[a][c]===t;c++)r++;return r>=4}()||function(){for(var r=1,e=a+1,c=o-1;e<=6&&c>=0&&n[e][c]===t;e++,c--)r++;for(var l=a-1,p=o+1;l>=0&&p<=5&&n[l][p]===t;l--,p++)r++;return r>=4}()||function(){for(var r=1,e=a-1,c=o-1;e>=0&&c>=0&&n[e][c]===t;e--,c--)r++;for(var l=a+1,p=o+1;l<=6&&p<=5&&n[l][p]===t;l++,p++)r++;return r>=4}())&&console.log(t," is WIN ")}())},children:["row: ",e,", col: ",a]})};var g=function(){for(var r=[],e=5;e>=0;e--){for(var a=[],t=0;t<=6;t++)a.push(Object(o.jsx)(_,{rowNum:e,colNum:t},"".concat(e).concat(t)));r.push(a)}return Object(o.jsx)("div",{className:i.a.wrapper,children:r})};var h=function(r){w.getState();var e=Object(b.c)((function(r){return r.gameBoard.currentPlayer}));return Object(o.jsxs)("div",{children:["Current Player: ",e]})};var C=function(r){return Object(o.jsxs)("div",{className:u.a["app-wrapper"],children:["App",Object(o.jsx)(h,{}),Object(o.jsx)(g,{})]})};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(b.a,{store:w,children:Object(o.jsx)(C,{})})}),document.getElementById("root"))},8:function(r,e,a){r.exports={wrapper:"GameBoardCell_wrapper__1PVEo",red:"GameBoardCell_red__3HNmv",yellow:"GameBoardCell_yellow__3cktr"}}},[[25,1,2]]]);
//# sourceMappingURL=main.1b1cbd7b.chunk.js.map