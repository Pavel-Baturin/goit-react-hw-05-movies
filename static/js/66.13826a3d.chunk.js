"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[66],{1007:function(e,t,n){n.d(t,{s:function(){return p}});var a=n(5861),r=n(5671),s=n(3144),c=n(7757),i=n.n(c),o=n(4569),u=n.n(o),l="https://api.themoviedb.org",v="d248c3817d332dfccb440b9afc9f42a3",p=function(){function e(){(0,r.Z)(this,e),this.page=1}return(0,s.Z)(e,[{key:"fetchTrendingFilms",value:function(){var e=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(l,"/3/trending/movie/day?api_key=").concat(v,"&page=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchMovies",value:function(){var e=(0,a.Z)(i().mark((function e(t,n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(l,"/3/search/movie?api_key=").concat(v,"&language=en-US&query=").concat(t,"&page=").concat(n));case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var e=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(l,"/3/movie/").concat(t,"?api_key=").concat(v));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieDetailsCast",value:function(){var e=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(l,"/3/movie/").concat(t,"/credits?api_key=").concat(v));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieDetailsReviews",value:function(){var e=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(l,"/3/movie/").concat(t,"/reviews?api_key=").concat(v));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},7066:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(8152),r=n(2791),s=n(3504),c=n(6871),i=n(1007),o="MovieDetailsPage_button__7Mniz",u="MovieDetailsPage_card__kAeSw",l="MovieDetailsPage_image__yyW7l",v="MovieDetailsPage_description__dR7FW",p="MovieDetailsPage_title__0vgWC",d="MovieDetailsPage_score__U3uQi",h="MovieDetailsPage_textA\u0441cent__+69K8",f="MovieDetailsPage_overview__6OR+u",_="MovieDetailsPage_listLink__Ponbr",g="MovieDetailsPage_item__uysXX",m="MovieDetailsPage_link__C1B4e",x=n(184),j=(0,r.lazy)((function(){return n.e(99).then(n.bind(n,99))})),w=(0,r.lazy)((function(){return n.e(34).then(n.bind(n,1034))})),k=new i.s;function y(){var e=(0,r.useState)([]),t=(0,a.Z)(e,2),n=t[0],i=t[1],y=(0,c.s0)(),b=(0,c.UO)().movieId;return(0,r.useEffect)((function(){k.getMovieDetails(b).then(i).catch((function(e){return console.log("Error: ",e.response.status)}))}),[b]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("button",{type:"button",onClick:function(){return y(-1)},className:o,children:"Go back"}),0!==n.length&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w342").concat(n.poster_path),alt:n.original_title,className:l}),(0,x.jsxs)("div",{className:v,children:[(0,x.jsx)("h2",{className:p,children:n.title}),(0,x.jsxs)("p",{className:d,children:["User score: ",n.vote_average]}),(0,x.jsxs)("p",{className:f,children:[(0,x.jsx)("span",{className:h,children:"Overview"})," ",n.overview]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{className:h,children:"Genres"}),n.genres.map((function(e){return e.name})).join(", ")]})]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:h,children:"Additional information"}),(0,x.jsxs)("ul",{className:_,children:[(0,x.jsx)("li",{className:g,children:(0,x.jsx)(s.rU,{to:"cast",className:m,children:"cast"})}),(0,x.jsx)("li",{className:g,children:(0,x.jsx)(s.rU,{to:"reviews",className:m,children:"reviews"})})]}),(0,x.jsx)(r.Suspense,{children:(0,x.jsxs)(c.Z5,{children:[(0,x.jsx)(c.AW,{path:"cast",element:(0,x.jsx)(j,{id:b})}),(0,x.jsx)(c.AW,{path:"reviews",element:(0,x.jsx)(w,{id:b})})]})})]})]})]})}}}]);
//# sourceMappingURL=66.13826a3d.chunk.js.map