(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{29:function(e,t,a){e.exports=a(46)},34:function(e,t,a){},35:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),i=a.n(o),s=(a(34),a(35),a(5)),c=a(8),l=a(6),p=a(9),u=a(10),m=a(14),d=function(e){return{type:"TV"===e?"SET_ITEM_TYPE_TV":"SET_ITEM_TYPE_MOVIE"}},h=function(e){return console.log(e),function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_MOVIES_NOWPLAYING",payload:e})})).catch((function(e){return console.log(e)}))}},f=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_MOVIES_POPULAR",payload:e})})).catch((function(e){console.log(e)}))}},v=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_MOVIES_TOP_RATED",payload:e})})).catch((function(e){return console.log(e)}))}},g=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_MOVIES_UPCOMING",payload:e})})).catch((function(e){return console.log(e)}))}},E=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_TV_AIRING_TODAY",payload:e})})).catch((function(e){return console.log(e)}))}},T=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_TV_POPULAR",payload:e})})).catch((function(e){return console.log(e)}))}},y=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_TV_ON_THE_AIR",payload:e})})).catch((function(e){return console.log(e)}))}},_=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_TV_TOP_RATED",payload:e})})).catch((function(e){return console.log(e)}))}},b=a(19),O=a(3),w=(a(40),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.MDBConfig;return function(){var e=document.querySelector(".home-swiper-container");if(e)new b.a(e,{slidesPerView:1,loop:!0,spaceBetween:0,observer:!0,autoplay:{delay:1e4},pagination:{el:".home-swiper-pagination",type:"progressbar"},navigation:{nextEl:".home-swiper-button-next",prevEl:".home-swiper-button-prev"}})}(),r.a.createElement("div",{className:"home-swiper-container"},r.a.createElement("div",{className:"swiper-wrapper"},this.props.items.map((function(a,n){if(n>3&&n<7)return r.a.createElement(O.b,{key:a.id,to:"/details/".concat(e.props.itemType.toLowerCase(),"/").concat(a.id),className:"swiper-slide",style:{background:"linear-gradient(\n                rgba(0, 0, 0, 0.6),\n                rgba(0, 0, 0, 0.6)\n              ) center center no-repeat, #fff url(https://image.tmdb.org/t/p/w1280/".concat(t.images?t.images.secure_base_url:"").concat(t.images?t.images.backdrop_sizes[2]:"").concat(a.backdrop_path,") center top no-repeat"),backgroundSize:"cover, cover"}},r.a.createElement("div",null,r.a.createElement("p",{className:"swiper-slide__category"},"Latest".toUpperCase()),r.a.createElement("h2",{className:"swiper-slide__title"},"MOVIE"===e.props.itemType?a.title:a.name),r.a.createElement("p",{className:"swiper-slide__item-duration"},a.vote_average," Rating")))}))),r.a.createElement("div",{className:"home-swiper-pagination"}))}}]),t}(r.a.Component)),V=(a(42),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.MDBConfig;return r.a.createElement("div",{className:"carousel-container wow fadeIn","data-wow-duration":"3s"},r.a.createElement("div",{className:"swiper-container"},r.a.createElement("h2",{className:"swiper-container__title"},this.props.title),r.a.createElement("div",{className:"swiper-wrapper"},this.props.items.map((function(a,n){return r.a.createElement("div",{key:a.id,className:"swiper-slide"},r.a.createElement(O.b,{to:"/details/".concat(e.props.type.toLowerCase(),"/").concat(a.id)},r.a.createElement("img",{className:"swiper-slide__image",src:"https://image.tmdb.org/t/p/w154/".concat(t.images?t.images.secure_base_url:"").concat(t.images?t.images.poster_sizes[1]:"").concat(a.poster_path),alt:a.title}),r.a.createElement("h3",{className:"swiper-slide__title"},a.title),r.a.createElement("h3",{className:"swiper-slide__title"},a.original_name),r.a.createElement("p",{className:"swiper-slide-rating"},r.a.createElement("svg",{className:"swiper-slide-rating__icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.a.createElement("path",{d:"M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"})),a.vote_average)))}))),r.a.createElement("div",{className:"swiper-button-prev swiper-button-white"}),r.a.createElement("div",{className:"swiper-button-next swiper-button-white"})),r.a.createElement("hr",{className:"carousel-container__separator"}))}}]),t}(n.Component));a(43);var P=function(){return r.a.createElement("footer",{className:"main-footer"},r.a.createElement("section",{className:"main-footer-left"},r.a.createElement("div",{className:"main-footer-left-header"},r.a.createElement("h1",{className:"main-footer-left-header-name"},"Movie App"),r.a.createElement("hr",null),r.a.createElement(O.b,{to:"/"},"Home"),r.a.createElement(O.b,{to:"/user"},"Profile"),r.a.createElement(O.b,{to:"/discover"},"Discover")),r.a.createElement("div",{className:"main-footer-left-contacts"},r.a.createElement("div",{className:"main-footer-left-contacts-item"},r.a.createElement("h3",{className:"main-footer-portfolio-header"},"Portfolio:"),r.a.createElement("p",null,r.a.createElement(O.b,{to:"/discover"},"3drdsh3in/github.io"))),r.a.createElement("div",{className:"main-footer-left-contacts-item"},r.a.createElement("h3",{className:"main-footer-phone-header"},"Phone Number:"),r.a.createElement("p",null,"777-777-7777")))),r.a.createElement("section",{className:"main-footer-right"},r.a.createElement("div",{className:"main-footer-right-icons"},r.a.createElement(O.b,{to:""},r.a.createElement("i",{className:"fab fa-twitter fa-2x"})),r.a.createElement(O.b,{to:""},r.a.createElement("i",{className:"fab fa-facebook-f fa-2x"})),r.a.createElement(O.b,{to:""},r.a.createElement("i",{className:"fas fa-book fa-2x"}))),r.a.createElement("img",{className:"main-footer-mdb-logo",src:"https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg"}),r.a.createElement("div",{className:"main-footer-right-copyright"},r.a.createElement("p",null,"Copyright \xa92020 by Edward Shen"))))},N=(a(44),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleMovieFetch=function(){a.props.postMoviesUpcoming("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postMoviesPopular("https://api.themoviedb.org/3/movie/popular?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postMoviesNowPlaying("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postMoviesTopRated("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(a.props.apiKey,"&language=en-US&page=1"))},a.handleTVFetch=function(){a.props.postTVAiringToday("https://api.themoviedb.org/3/tv/airing_today?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postTVPopular("https://api.themoviedb.org/3/tv/popular?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postTVOnTheAir("https://api.themoviedb.org/3/tv/on_the_air?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postTVTopRated("https://api.themoviedb.org/3/tv/top_rated?api_key=".concat(a.props.apiKey,"&language=en-US&page=1"))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){"MOVIE"===this.props.itemType?this.handleMovieFetch():"TV"===this.props.itemType&&this.handleTVFetch()}},{key:"render",value:function(){var e,t=this;return function(){var e=document.querySelectorAll(".swiper-container");if(e)new b.a(e,{init:!0,slidesPerView:3,slidesPerGroup:3,loop:!1,spaceBetween:5,observer:!0,centeredSlides:!1,breakpoints:{1145:{slidesPerView:6,slidesPerGroup:6},992:{slidesPerView:5,slidesPerGroup:5},768:{slidesPerView:4,slidesPerGroup:4},594:{slidesPerView:3,slidesPerGroup:3},300:{slidesPerView:2,slidesPerGroup:2},0:{slidesPerView:1,slidesPerGroup:1}},pagination:{el:".swiper-pagination",clickable:!0},scrollbar:{el:".swiper-scrollbar",hide:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}(),console.log(this.props.TVAiringToday.results),"MOVIE"===this.props.itemType?e=r.a.createElement("div",null,r.a.createElement(V,{title:"Upcoming",MDBConfig:this.props.MDBConfig,items:this.props.moviesUpcoming.results,type:this.props.itemType}),r.a.createElement(V,{title:"Popular",MDBConfig:this.props.MDBConfig,items:this.props.moviesPopular.results,type:this.props.itemType}),r.a.createElement(V,{title:"Now Playing",MDBConfig:this.props.MDBConfig,items:this.props.moviesNowPlaying.results,type:this.props.itemType}),r.a.createElement(V,{title:"Top Rated",MDBConfig:this.props.MDBConfig,items:this.props.moviesTopRated.results,type:this.props.itemType})):"TV"===this.props.itemType&&(e=r.a.createElement("div",null,r.a.createElement(V,{title:"Airing Today",MDBConfig:this.props.MDBConfig,items:this.props.TVAiringToday.results,type:this.props.itemType}),r.a.createElement(V,{title:"Popular",MDBConfig:this.props.MDBConfig,items:this.props.TVPopular.results,type:this.props.itemType}),r.a.createElement(V,{title:"On The Air",MDBConfig:this.props.MDBConfig,items:this.props.TVOnTheAir.results,type:this.props.itemType}),r.a.createElement(V,{title:"Top Rated",MDBConfig:this.props.MDBConfig,items:this.props.TVTopRated.results,type:this.props.itemType}))),r.a.createElement("div",{className:"home-container"},r.a.createElement(w,{itemType:this.props.itemType,MDBConfig:this.props.MDBConfig,items:"TV"===this.props.itemType?this.props.TVAiringToday.results:this.props.moviesNowPlaying.results}),r.a.createElement("div",{className:"item-controller"},r.a.createElement("button",{className:"item-controller__switch wow fadeInDown","data-wow-delay":".5s","data-wow-duration":"1s",onClick:function(){t.props.setItemType("MOVIES"),t.handleMovieFetch()}},"Movies"),r.a.createElement("button",{className:"item-controller__switch wow fadeInDown","data-wow-delay":".5s","data-wow-duration":"1s",onClick:function(){t.props.setItemType("TV"),t.handleTVFetch()}},"TV Shows")),r.a.createElement("div",{className:"home-container-main"},e),r.a.createElement(P,null))}}]),t}(n.Component)),M=Object(m.b)((function(e){return{apiKey:e.PostMDBConfig.apiKey,MDBConfig:e.PostMDBConfig,itemType:e.setItemType.itemType,moviesUpcoming:e.postMoviesUpcoming,moviesPopular:e.postMoviesPopular,moviesNowPlaying:e.postMoviesNowPlaying,moviesTopRated:e.postMoviesTopRated,TVAiringToday:e.postTVAiringToday,TVPopular:e.postTVPopular,TVOnTheAir:e.postTVOnTheAir,TVTopRated:e.postTVTopRated}}),(function(e){return{setItemType:function(t){return e(d(t))},postMoviesUpcoming:function(t){return e(g(t))},postMoviesPopular:function(t){return e(f(t))},postMoviesNowPlaying:function(t){return e(h(t))},postMoviesTopRated:function(t){return e(v(t))},postTVAiringToday:function(t){return e(E(t))},postTVPopular:function(t){return e(T(t))},postTVOnTheAir:function(t){return e(y(t))},postTVTopRated:function(t){return e(_(t))}}}))(N),S=(a(45),function(){return{type:"TOGGLE_NAV"}});var I=Object(m.b)((function(e){return{apiKey:e.PostMDBConfig.apiKey,navStatus:e.toggleNav.navStatus}}),(function(e){return{toggleNav:function(){return e(S())}}}))((function(e){return console.log(e),r.a.createElement("nav",{className:"nav-main"},r.a.createElement("div",{className:"nav-top-section ".concat(e.navStatus?"":"hide")},r.a.createElement(O.b,{to:"/"},r.a.createElement("img",{src:"https://img.icons8.com/cotton/64/000000/3d-glasses.png"})),r.a.createElement("div",{className:"nav-searchbar"},r.a.createElement("form",{className:"nav-search-form"},r.a.createElement("input",{placeholder:"search...",className:"nav-search-form-input",type:"text",name:"",id:""}),r.a.createElement("button",{className:"nav-search-form-button",type:"submit"},r.a.createElement("i",{className:"fas fa-search fa-2x"}))))),r.a.createElement("button",{onClick:function(){e.toggleNav()},className:"hamburger hamburger--spin js-hamburger ".concat(e.navStatus?"is-active":""),type:"button"},r.a.createElement("span",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("div",{className:"nav-split-section ".concat(e.navStatus?"":"hide")},r.a.createElement(O.b,{to:"/"},r.a.createElement("div",{className:"nav-split-section-item"},r.a.createElement("i",{className:"fas fa-home fa-2x"}))),r.a.createElement(O.b,{to:"/user"},r.a.createElement("div",{className:"nav-split-section-item"},r.a.createElement("i",{className:"fas fa-user-circle fa-2x"}))),r.a.createElement(O.b,{to:"/discover"},r.a.createElement("div",{className:"nav-split-section-item"},r.a.createElement("i",{className:"far fa-compass fa-2x"})))))})),j=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).call(this))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null))}}]),t}(r.a.Component);var D=function(){return r.a.createElement(O.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(M,null)))},A=a(12),C=a(28),R=a(1),G={apiKey:"fb8a39c9807f2120f494db319897180d"},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_MDB_CONFIG":return Object(R.a)({},e,{},t.payload);default:return e}},k={itemType:"MOVIE"},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ITEM_TYPE_MOVIE":return{itemType:"MOVIE"};case"SET_ITEM_TYPE_TV":return{itemType:"TV"};default:return e}},U={navStatus:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_NAV":return Object(R.a)({},e,{navStatus:!e.navStatus});default:return e}},K={results:[]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_MOVIES_NOWPLAYING":return Object(R.a)({},t.payload);default:return e}},Y={results:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_MOVIES_POPULAR":return Object(R.a)({},e,{},t.payload);default:return e}},W={results:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_MOVIES_TOP_RATED":return Object(R.a)({},e,{},t.payload);default:return e}},q={results:[]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_MOVIES_UPCOMING":return Object(R.a)({},e,{},t.payload);default:return e}},X={results:[]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_DETAILS":return Object(R.a)({},e,{},t.payload);default:return e}},Z={results:[]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_CREDITS":return Object(R.a)({},e,{},t.payload);default:return e}},ee={results:[]},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_TRAILERS":return Object(R.a)({},e,{},t.payload);default:return e}},ae={results:[]},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_REVIEWS":return Object(R.a)({},e,{},t.payload);default:return e}},re={results:[]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_FAVOURITES":return Object(R.a)({},e,{},t.payload);default:return e}},ie={results:[]},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES_RATED":return Object(R.a)({},e,{},t.payload);default:return e}},ce={},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RATE_MOVIE":return Object(R.a)({},e,{},t.payload);default:return e}},pe={results:[]},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_TV_AIRING_TODAY":return Object(R.a)({},e,{},t.payload);default:return e}},me={results:[]},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_TV_POPULAR":return Object(R.a)({},e,{},t.payload);default:return e}},he={results:[]},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_TV_ON_THE_AIR":return Object(R.a)({},e,{},t.payload);default:return e}},ve={results:[]},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_TV_TOP_RATED":return Object(R.a)({},e,{},t.payload);default:return e}},Ee={},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_DETAILS":return Object(R.a)({},e,{},t.payload);default:return e}},ye={cast:[]},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_CREDITS":return Object(R.a)({},e,{},t.payload);default:return e}},be={results:[]},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_TRAILERS":return Object(R.a)({},e,{},t.payload);default:return e}},we={results:[]},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_REVIEWS":return Object(R.a)({},e,{},t.payload);default:return e}},Pe={results:[]},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_FAVOURITES":return Object(R.a)({},e,{},t.payload);default:return e}},Me={results:[]},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_RATED":return Object(R.a)({},e,{},t.payload);default:return e}},Ie={results:[]},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PEOPLE_DETAILS":return Object(R.a)({},e,{},t.payload);default:return e}},De={cast:[]},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PEOPLE_COMBINED_CREDITS":return Object(R.a)({},e,{},t.payload);default:return e}},Ce={results:[]},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PEOPLE_POPULAR":return Object(R.a)({},e,{},t.payload);default:return e}},Ge={results:[]},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DISCOVER":return Object(R.a)({},e,{},t.payload);default:return e}},ke=Object(A.c)({PostMDBConfig:B,setItemType:L,toggleNav:x,postMoviesNowPlaying:F,postMoviesPopular:z,postMoviesTopRated:H,postMoviesUpcoming:J,getMovieDetails:Q,getMovieCredits:$,getMovieTrailers:te,getMovieReviews:ne,getMovieFavorites:oe,getMoviesRated:se,rateMovie:le,postTVAiringToday:ue,postTVPopular:de,postTVOnTheAir:fe,postTVTopRated:ge,getTVDetails:Te,getTVCredits:_e,getTVTrailers:Oe,getTVReviews:Ve,getTVFavorites:Ne,getTVRated:Se,getPeopleDetails:je,getPeopleCombinedCredits:Ae,getPeoplePopular:Re,getDiscover:Be}),Le=[C.a],Ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.d,xe=Object(A.e)(ke,Ue(A.a.apply(void 0,Le)));i.a.render(r.a.createElement(m.a,{store:xe},r.a.createElement(D,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.07c20b54.chunk.js.map