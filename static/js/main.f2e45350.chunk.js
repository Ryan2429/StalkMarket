(this.webpackJsonpstalkmarket=this.webpackJsonpstalkmarket||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),s=a.n(r),i=a(4),u=a(5),c=a(8),o=a(7),m=(a(2),a(6)),d=a.n(m),y=function(e){var t=e.day;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",{className:"logo-font"},"STALK MARKET"),l.a.createElement("h4",{className:"logo-font-smaller",style:{lineHeight:1}},"Buy turnips to begin playing!",l.a.createElement("br",null),"Get 3000 bells to win!"),l.a.createElement("h5",{className:"today"},"Today is ",t,"!")))},p=function(e){var t=e.day,a=e.turnipPrice,n=e.buyTurnips;return l.a.createElement("div",null,"Sunday"===t?l.a.createElement("div",null,l.a.createElement("button",{onClick:n,className:"buyTurnips"},"Click To Buy Turnips!",l.a.createElement("br",null),"The turnip price today is: ",a," bells")):null)},h=function(e){var t=e.day,a=e.turnipPrice,n=e.sellTurnips;return l.a.createElement("div",null,"Sunday"!==t?l.a.createElement("div",null,l.a.createElement("button",{onClick:n,className:"sellTurnips"},"Click To Sell Turnips!",l.a.createElement("br",null),"The turnip price today is: ",a," bells")):null)},b=function(e){var t=e.bells,a=e.turnips;return l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement("img",{src:"https://www.models-resource.com/resources/big_icons/36/35107.png",height:"300em",width:"350em",alt:"bells"}),l.a.createElement("h1",{className:"bellText"},t),l.a.createElement("img",{src:"https://wyspstore2.s3.amazonaws.com/thumbs/823851001-th.png",height:"300em",width:"250em",alt:"turnips"}),l.a.createElement("h1",{className:"turnipText"},a)))},E=function(e){var t=e.toNextDay;return l.a.createElement("button",{className:"nextDay",onClick:t},"Proceed to the next day!")},f=function(e){var t=e.removeRules;return l.a.createElement("div",{style:{backgroundImage:"url('https://wallpaperaccess.com/full/164553.png')",zIndex:"1",position:"fixed",color:"black",fontFamily:"Cute Font",fontSize:"1rem",textAlign:"left",paddingRight:"5%",paddingLeft:"5%",bottom:0,top:0,left:0,right:0}},l.a.createElement("h2",null,"Welcome to",l.a.createElement("span",{style:{fontSize:"1.8rem"}}," ",l.a.createElement("u",null,"Stalk Market!"))," The following are the rules:"),l.a.createElement("h2",null,l.a.createElement("ul",null,"* Earn 3000 bells to win!"),l.a.createElement("ul",null,"* Turnips can be bought but not sold on Sunday. If it is Sunday and you still have turnips they will ",l.a.createElement("i",null,l.a.createElement("u",null,"ROT AWAY!"))),l.a.createElement("ul",null,"* If you don't have enough bells to buy turnips, you lose!")),l.a.createElement("button",{className:"startGame",onClick:t},"Press Here To Start!"))},v=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).removeRules=function(){n.setState({gameStarted:!0})},n.newGame=function(){var e=Math.floor(60*Math.random()+50);n.setState({bells:1e3,turnips:0,day:"Sunday",turnipPrice:e,gameStarted:!1})},n.buyTurnips=function(){var e=n.state.turnips,t=n.state.bells,a=n.state.turnipPrice;t>a&&n.setState({bells:t-a,turnips:e+1}),0===e&&a>t&&(alert("Game Over! You ran out of bells! Sorry, press OK to start a New Game!"),n.newGame())},n.sellTurnips=function(){var e=n.state.turnips,t=n.state.bells,a=n.state.turnipPrice;e>0&&n.setState({turnips:e-1,bells:t+a}),t>3e3&&(alert("You won! Click OK to start a New Game!"),n.newGame())},n.toNextDay=function(){var e=Math.floor(60*Math.random()+50);"Sunday"===n.state.day?n.setState({day:"Monday",turnipPrice:e}):"Monday"===n.state.day?n.setState({day:"Tuesday",turnipPrice:e}):"Tuesday"===n.state.day?n.setState({day:"Wednesday",turnipPrice:e}):"Wednesday"===n.state.day?n.setState({day:"Thursday",turnipPrice:e}):"Thursday"===n.state.day?n.setState({day:"Friday",turnipPrice:e}):"Friday"===n.state.day?n.setState({day:"Saturday",turnipPrice:e}):"Saturday"===n.state.day&&n.setState({day:"Sunday",turnipPrice:e,turnips:0})};var l=Math.floor(60*Math.random()+50);return n.state={turnipPrice:l,bells:1e3,day:"Sunday",turnips:0,gameStarted:!1},n}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,!1===this.state.gameStarted?l.a.createElement(f,{removeRules:this.removeRules}):l.a.createElement("div",{className:"background1"},l.a.createElement(y,{day:this.state.day}),l.a.createElement("div",null,l.a.createElement(p,{day:this.state.day,turnipPrice:this.state.turnipPrice,buyTurnips:this.buyTurnips}),l.a.createElement(h,{day:this.state.day,turnipPrice:this.state.turnipPrice,sellTurnips:this.sellTurnips})),l.a.createElement(E,{toNextDay:this.toNextDay,day:this.state.day}))),l.a.createElement("div",{className:"background2"},l.a.createElement(b,{bells:this.state.bells,turnips:this.state.turnips})),l.a.createElement("audio",{src:d.a,loop:!0,autoPlay:!0}))}}]),a}(l.a.Component);s.a.render(l.a.createElement(v,null),document.getElementById("root"))},2:function(e,t,a){},6:function(e,t,a){e.exports=a.p+"static/media/bensound-littleidea.bf0df2e2.mp3"},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.f2e45350.chunk.js.map