(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{33:function(e,t,a){e.exports=a(51)},38:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),i=a.n(r),s=(a(38),a(39),a(3)),c=a(5),l=a(4),p=a(6),u=a(7),m=a(13),h=function(e){return{type:"TV"===e?"SET_ITEM_TYPE_TV":"SET_ITEM_TYPE_MOVIE"}},d=function(e){return console.log(e),function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_MOVIES_NOWPLAYING",payload:e})})).catch((function(e){return console.log(e)}))}},f=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_MOVIES_POPULAR",payload:e})})).catch((function(e){console.log(e)}))}},g=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_MOVIES_TOP_RATED",payload:e})})).catch((function(e){return console.log(e)}))}},v=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_MOVIES_UPCOMING",payload:e})})).catch((function(e){return console.log(e)}))}},E=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_TV_AIRING_TODAY",payload:e})})).catch((function(e){return console.log(e)}))}},T=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_TV_POPULAR",payload:e})})).catch((function(e){return console.log(e)}))}},y=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_TV_ON_THE_AIR",payload:e})})).catch((function(e){return console.log(e)}))}},b=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_TV_TOP_RATED",payload:e})})).catch((function(e){return console.log(e)}))}},_=a(23),O=a(8),w=(a(44),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.MDBConfig;return function(){var e=document.querySelector(".home-swiper-container");if(e)new _.a(e,{slidesPerView:1,loop:!0,spaceBetween:0,observer:!0,autoplay:{delay:1e4},pagination:{el:".home-swiper-pagination",type:"progressbar"},navigation:{nextEl:".home-swiper-button-next",prevEl:".home-swiper-button-prev"}})}(),o.a.createElement("div",{className:"home-swiper-container"},o.a.createElement("div",{className:"swiper-wrapper"},this.props.items.map((function(a,n){if(n>3&&n<7)return o.a.createElement(O.b,{key:a.id,to:"/details/".concat(e.props.itemType.toLowerCase(),"/").concat(a.id),className:"swiper-slide",style:{background:"linear-gradient(\n                rgba(0, 0, 0, 0.6),\n                rgba(0, 0, 0, 0.6)\n              ) center center no-repeat, #fff url(https://image.tmdb.org/t/p/w1280/".concat(t.images?t.images.secure_base_url:"").concat(t.images?t.images.backdrop_sizes[2]:"").concat(a.backdrop_path,") center top no-repeat"),backgroundSize:"cover, cover"}},o.a.createElement("div",null,o.a.createElement("p",{className:"swiper-slide__category"},"Latest".toUpperCase()),o.a.createElement("h2",{className:"swiper-slide__title"},"MOVIE"===e.props.itemType?a.title:a.name),o.a.createElement("p",{className:"swiper-slide__item-duration"},a.vote_average," Rating")))}))),o.a.createElement("div",{className:"home-swiper-pagination"}))}}]),t}(o.a.Component)),V=(a(46),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.MDBConfig;return o.a.createElement("div",{className:"carousel-container wow fadeIn","data-wow-duration":"3s"},o.a.createElement("div",{className:"swiper-container"},o.a.createElement("h2",{className:"swiper-container__title"},this.props.title),o.a.createElement("div",{className:"swiper-wrapper"},this.props.items.map((function(a,n){return o.a.createElement("div",{key:a.id,className:"swiper-slide"},o.a.createElement(O.b,{to:"/details/".concat(e.props.type.toLowerCase(),"/").concat(a.id)},o.a.createElement("img",{className:"swiper-slide__image",src:"https://image.tmdb.org/t/p/w154/".concat(t.images?t.images.secure_base_url:"").concat(t.images?t.images.poster_sizes[1]:"").concat(a.poster_path),alt:a.title}),o.a.createElement("h3",{className:"swiper-slide__title"},a.title),o.a.createElement("h3",{className:"swiper-slide__title"},a.original_name),o.a.createElement("p",{className:"swiper-slide-rating"},o.a.createElement("svg",{className:"swiper-slide-rating__icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o.a.createElement("path",{d:"M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"})),a.vote_average)))}))),o.a.createElement("div",{className:"swiper-button-prev swiper-button-white"}),o.a.createElement("div",{className:"swiper-button-next swiper-button-white"}),o.a.createElement("div",{className:"swiper-pagination"})),o.a.createElement("hr",{className:"carousel-container__separator"}))}}]),t}(n.Component));a(47);var N=function(){return o.a.createElement("footer",{className:"main-footer"},o.a.createElement("section",{className:"main-footer-left"},o.a.createElement("div",{className:"main-footer-left-header"},o.a.createElement("h1",{className:"main-footer-left-header-name"},"Movie App"),o.a.createElement("hr",null),o.a.createElement(O.b,{to:"/"},"Home"),o.a.createElement(O.b,{to:"/user"},"Profile"),o.a.createElement(O.b,{to:"/discover"},"Discover")),o.a.createElement("div",{className:"main-footer-left-contacts"},o.a.createElement("div",{className:"main-footer-left-contacts-item"},o.a.createElement("h3",{className:"main-footer-portfolio-header"},"Portfolio:"),o.a.createElement("p",null,o.a.createElement(O.b,{to:"/discover"},"3drdsh3in/github.io"))),o.a.createElement("div",{className:"main-footer-left-contacts-item"},o.a.createElement("h3",{className:"main-footer-phone-header"},"Phone Number:"),o.a.createElement("p",null,"777-777-7777")))),o.a.createElement("section",{className:"main-footer-right"},o.a.createElement("div",{className:"main-footer-right-icons"},o.a.createElement(O.b,{to:""},o.a.createElement("i",{className:"fab fa-twitter fa-2x"})),o.a.createElement(O.b,{to:""},o.a.createElement("i",{className:"fab fa-facebook-f fa-2x"})),o.a.createElement(O.b,{to:""},o.a.createElement("i",{className:"fas fa-book fa-2x"}))),o.a.createElement("img",{className:"main-footer-mdb-logo",src:"https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg"}),o.a.createElement("div",{className:"main-footer-right-copyright"},o.a.createElement("p",null,"Copyright \xa92020 by Edward Shen"))))},M=(a(48),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).handleMovieFetch=function(){a.props.postMoviesUpcoming("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postMoviesPopular("https://api.themoviedb.org/3/movie/popular?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postMoviesNowPlaying("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postMoviesTopRated("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(a.props.apiKey,"&language=en-US&page=1"))},a.handleTVFetch=function(){a.props.postTVAiringToday("https://api.themoviedb.org/3/tv/airing_today?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postTVPopular("https://api.themoviedb.org/3/tv/popular?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postTVOnTheAir("https://api.themoviedb.org/3/tv/on_the_air?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postTVTopRated("https://api.themoviedb.org/3/tv/top_rated?api_key=".concat(a.props.apiKey,"&language=en-US&page=1"))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){"MOVIE"===this.props.itemType?this.handleMovieFetch():"TV"===this.props.itemType&&this.handleTVFetch()}},{key:"render",value:function(){var e,t=this;return function(){var e=document.querySelectorAll(".swiper-container");if(e)new _.a(e,{init:!0,slidesPerView:3,slidesPerGroup:3,loop:!1,spaceBetween:5,observer:!0,centeredSlides:!1,breakpoints:{1145:{slidesPerView:6,slidesPerGroup:6},992:{slidesPerView:5,slidesPerGroup:5},768:{slidesPerView:4,slidesPerGroup:4},594:{slidesPerView:3,slidesPerGroup:3},300:{slidesPerView:2,slidesPerGroup:2},0:{slidesPerView:1,slidesPerGroup:1}},pagination:{el:".swiper-pagination",clickable:!0},scrollbar:{el:".swiper-scrollbar"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}(),"MOVIE"===this.props.itemType?e=o.a.createElement("div",null,o.a.createElement(V,{title:"Upcoming",MDBConfig:this.props.MDBConfig,items:this.props.moviesUpcoming.results,type:this.props.itemType}),o.a.createElement(V,{title:"Popular",MDBConfig:this.props.MDBConfig,items:this.props.moviesPopular.results,type:this.props.itemType}),o.a.createElement(V,{title:"Now Playing",MDBConfig:this.props.MDBConfig,items:this.props.moviesNowPlaying.results,type:this.props.itemType}),o.a.createElement(V,{title:"Top Rated",MDBConfig:this.props.MDBConfig,items:this.props.moviesTopRated.results,type:this.props.itemType})):"TV"===this.props.itemType&&(e=o.a.createElement("div",null,o.a.createElement(V,{title:"Airing Today",MDBConfig:this.props.MDBConfig,items:this.props.TVAiringToday.results,type:this.props.itemType}),o.a.createElement(V,{title:"Popular",MDBConfig:this.props.MDBConfig,items:this.props.TVPopular.results,type:this.props.itemType}),o.a.createElement(V,{title:"On The Air",MDBConfig:this.props.MDBConfig,items:this.props.TVOnTheAir.results,type:this.props.itemType}),o.a.createElement(V,{title:"Top Rated",MDBConfig:this.props.MDBConfig,items:this.props.TVTopRated.results,type:this.props.itemType}))),o.a.createElement("div",{className:"home-container"},o.a.createElement(w,{itemType:this.props.itemType,MDBConfig:this.props.MDBConfig,items:"TV"===this.props.itemType?this.props.TVAiringToday.results:this.props.moviesNowPlaying.results}),o.a.createElement("div",{className:"item-controller"},o.a.createElement("button",{className:"item-controller__switch wow fadeInDown","data-wow-delay":".5s","data-wow-duration":"1s",onClick:function(){t.props.setItemType("MOVIES"),t.handleMovieFetch()}},"Movies"),o.a.createElement("button",{className:"item-controller__switch wow fadeInDown","data-wow-delay":".5s","data-wow-duration":"1s",onClick:function(){t.props.setItemType("TV"),t.handleTVFetch()}},"TV Shows")),o.a.createElement("div",{className:"home-container-main"},e))}}]),t}(n.Component)),P=Object(m.b)((function(e){return{apiKey:e.PostMDBConfig.apiKey,MDBConfig:e.PostMDBConfig,itemType:e.setItemType.itemType,moviesUpcoming:e.postMoviesUpcoming,moviesPopular:e.postMoviesPopular,moviesNowPlaying:e.postMoviesNowPlaying,moviesTopRated:e.postMoviesTopRated,TVAiringToday:e.postTVAiringToday,TVPopular:e.postTVPopular,TVOnTheAir:e.postTVOnTheAir,TVTopRated:e.postTVTopRated}}),(function(e){return{setItemType:function(t){return e(h(t))},postMoviesUpcoming:function(t){return e(v(t))},postMoviesPopular:function(t){return e(f(t))},postMoviesNowPlaying:function(t){return e(d(t))},postMoviesTopRated:function(t){return e(g(t))},postTVAiringToday:function(t){return e(E(t))},postTVPopular:function(t){return e(T(t))},postTVOnTheAir:function(t){return e(y(t))},postTVTopRated:function(t){return e(b(t))}}}))(M),j=(o.a.Component,function(e){return function(t){console.log("a"),fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"GET_MOVIE_DETAILS",payload:e})})).catch((function(e){return console.log(e)}))}}),S=function(e){return console.log("b"),function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"GET_MOVIE_CREDITS",payload:e})})).catch((function(e){return console.log(e)}))}},I=function(e){return console.log("c"),function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"GET_MOVIE_TRAILERS",payload:e})})).catch((function(e){return console.log(e)}))}},D=function(e){return console.log("d"),function(t){fetch(e).then((function(e){return e.json(e)})).then((function(e){return t({type:"GET_MOVIE_REVIEWS",payload:e})})).catch((function(e){return console.log(e)}))}},C=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"GET_TV_DETAILS",payload:e})})).catch((function(e){return console.log(e)}))}},R=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"GET_TV_CREDITS",payload:e})})).catch((function(e){return console.log(e)}))}},A=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"GET_TV_TRAILERS",payload:e})})).catch((function(e){return console.log(e)}))}},k=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"GET_TV_REVIEWS",payload:e})})).catch((function(e){return console.log(e)}))}},G=(a(49),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"initHeader",value:function(){var e=this.props.details;return!1===!e?(console.log(e),o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"item-header",style:{backgroundImage:"url(http://image.tmdb.org/t/p/original/".concat(e.backdrop_path,")")}},o.a.createElement("div",{className:"item-header-top"},o.a.createElement("i",{className:"fas fa-chevron-left fa-3x"}),o.a.createElement("i",{className:"fas fa-share fa-3x"})),o.a.createElement("div",{className:"item-header-bottom"},o.a.createElement("div",{className:"item-header-bottom-information"},o.a.createElement("img",{className:"item-header-bottom-information-poster",src:"http://image.tmdb.org/t/p/w92/".concat(e.poster_path)}),o.a.createElement("div",{className:"item-header-bottom-information-text"},o.a.createElement("h1",null,e.title),o.a.createElement("div",{className:"item-header-bottom-information-text-rating"},o.a.createElement("p",null,e.vote_average),o.a.createElement("i",{className:"fas fa-star"}),o.a.createElement("i",{className:"fas fa-star"}),o.a.createElement("i",{className:"fas fa-star"}),o.a.createElement("i",{className:"fas fa-star"}),o.a.createElement("i",{className:"fas fa-star"})),o.a.createElement("div",{className:"item-header-bottom-information-text-language"},e.status?e.status:""," | ",e.original_language?e.original_language:""),o.a.createElement("div",{className:"item-header-bottom-information-text-genres"},e.genres[0].name?e.genres[0].name:""," | ",e.genres[1].name?e.genres[1].name:""))),o.a.createElement("div",{className:"item-header-bottom-like"},o.a.createElement("i",{className:"far fa-heart fa-3x"}),o.a.createElement("i",{className:"fas fa-heart fa-3x hide"})))),o.a.createElement("div",{className:"headerOverlay"}))):o.a.createElement("p",null,"Film Information not found")}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.initHeader())}}]),t}(o.a.Component)),B=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"PeopleCarousel"})}}]),t}(o.a.Component),U=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"ItemReviews"})}}]),t}(o.a.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"ItemTrailers"})}}]),t}(o.a.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.getFilmData(e)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){console.log("componentWillMount"),console.log(this.props.match.params.id),console.log(e.match.params.id),e.match.params.id!==this.props.match.params.id&&(console.log("it ran"),this.getFilmData(e.match.params.id,e.match.params.type))}},{key:"getFilmData",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.match.params.type,a=this.props.MDBConfig.apiKey;switch(t){case"movie":this.props.getMovieDetails("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a,"&language=en-US")),this.props.getMovieCredits("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a)),this.props.getMovieTrailers("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat(a,"&language=en-US")),this.props.getMovieReviews("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1"));break;case"tv":this.props.getTVDetails("https://api.themoviedb.org/3/tv/".concat(e,"?api_key=").concat(a,"&language=en-US")),this.props.getTVCredits("https://api.themoviedb.org/3/tv/".concat(e,"/credits?api_key=").concat(a)),this.props.getTVTrailers("https://api.themoviedb.org/3/tv/".concat(e,"/videos?api_key=").concat(a,"&language=en-US")),this.props.getTVReviews("https://api.themoviedb.org/3/tv/".concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1"));break;default:console.log("Get Movie/TV Info Failed")}}},{key:"render",value:function(){var e,t,a,n;switch(this.props.match.params.type){case"movie":e=this.props.movieDetails,t=this.props.movieCredits,a=this.props.movieTrailers,n=this.props.movieReviews;break;case"tv":e=this.props.TVDetails,t=this.props.TVCredits,a=this.props.TVTrailers,n=this.props.TVReviews;break;default:console.log("handeItemDisplay has fucking failed")}return o.a.createElement(o.a.Fragment,null,o.a.createElement(G,{details:e.overview?e:""}),o.a.createElement(B,{credits:t||""}),o.a.createElement(L,{trailers:a||""}),o.a.createElement(U,{reviews:n||""}))}}]),t}(o.a.Component);console.log("params defined");var F=Object(m.b)((function(e){return{apiKey:e.PostMDBConfig.apiKey,MDBConfig:e.PostMDBConfig,itemType:e.setItemType,movieDetails:e.getMovieDetails,movieCredits:e.getMovieCredits,movieTrailers:e.getMovieTrailers,movieReviews:e.getMovieReviews,TVDetails:e.getTVDetails,TVCredits:e.getTVCredits,TVTrailers:e.getTVTrailers,TVReviews:e.getTVReviews}}),(function(e){return{getMovieDetails:function(t){return e(j(t))},getMovieCredits:function(t){return e(S(t))},getMovieTrailers:function(t){return e(I(t))},getMovieReviews:function(t){return e(D(t))},getTVDetails:function(t){return e(C(t))},getTVCredits:function(t){return e(R(t))},getTVTrailers:function(t){return e(A(t))},getTVReviews:function(t){return e(k(t))}}}))(x),K=(a(50),function(){return{type:"TOGGLE_NAV"}});var W=Object(m.b)((function(e){return{apiKey:e.PostMDBConfig.apiKey,navStatus:e.toggleNav.navStatus}}),(function(e){return{toggleNav:function(){return e(K())}}}))((function(e){return o.a.createElement("nav",{className:"nav-main"},o.a.createElement("div",{className:"nav-top-section ".concat(e.navStatus?"":"hide")},o.a.createElement(O.b,{to:"/"},o.a.createElement("img",{src:"https://img.icons8.com/cotton/64/000000/3d-glasses.png"})),o.a.createElement("div",{className:"nav-searchbar"},o.a.createElement("form",{className:"nav-search-form"},o.a.createElement("input",{placeholder:"search...",className:"nav-search-form-input",type:"text",name:"",id:""}),o.a.createElement("button",{className:"nav-search-form-button",type:"submit"},o.a.createElement("i",{className:"fas fa-search fa-2x"}))))),o.a.createElement("button",{onClick:function(){e.toggleNav()},className:"hamburger hamburger--spin js-hamburger ".concat(e.navStatus?"is-active":""),type:"button"},o.a.createElement("span",{className:"hamburger-box"},o.a.createElement("span",{className:"hamburger-inner"}))),o.a.createElement("div",{className:"nav-split-section ".concat(e.navStatus?"":"hide")},o.a.createElement(O.b,{to:"/"},o.a.createElement("div",{className:"nav-split-section-item"},o.a.createElement("i",{className:"fas fa-home fa-2x"}))),o.a.createElement(O.b,{to:"/user"},o.a.createElement("div",{className:"nav-split-section-item"},o.a.createElement("i",{className:"fas fa-user-circle fa-2x"}))),o.a.createElement(O.b,{to:"/discover"},o.a.createElement("div",{className:"nav-split-section-item"},o.a.createElement("i",{className:"far fa-compass fa-2x"})))))})),Y=a(17);var H=Object(m.b)((function(e){return{apiKey:e.PostMDBConfig.apiKey}}),(function(e){return{}}))((function(){return o.a.createElement(O.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(W,null),o.a.createElement(Y.a,{path:"/",exact:!0,component:P}),o.a.createElement(Y.a,{path:"/details/:type/:id",exact:!0,component:F}),o.a.createElement(N,null)))})),z=a(16),q=a(32),J=a(1),X={apiKey:"fb8a39c9807f2120f494db319897180d"},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_MDB_CONFIG":return Object(J.a)({},e,{},t.payload);default:return e}},Z={itemType:"MOVIE"},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ITEM_TYPE_MOVIE":return{itemType:"MOVIE"};case"SET_ITEM_TYPE_TV":return{itemType:"TV"};default:return e}},ee={navStatus:!1},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_NAV":return Object(J.a)({},e,{navStatus:!e.navStatus});default:return e}},ae={results:[]},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_MOVIES_NOWPLAYING":return Object(J.a)({},t.payload);default:return e}},oe={results:[]},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_MOVIES_POPULAR":return Object(J.a)({},e,{},t.payload);default:return e}},ie={results:[]},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_MOVIES_TOP_RATED":return Object(J.a)({},e,{},t.payload);default:return e}},ce={results:[]},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_MOVIES_UPCOMING":return Object(J.a)({},e,{},t.payload);default:return e}},pe={},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_DETAILS":return Object(J.a)({},e,{},t.payload);default:return e}},me={cast:[]},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_CREDITS":return Object(J.a)({},e,{},t.payload);default:return e}},de={results:[]},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_TRAILERS":return Object(J.a)({},e,{},t.payload);default:return e}},ge={results:[]},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_REVIEWS":return Object(J.a)({},e,{},t.payload);default:return e}},Ee={results:[]},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_FAVOURITES":return Object(J.a)({},e,{},t.payload);default:return e}},ye={results:[]},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES_RATED":return Object(J.a)({},e,{},t.payload);default:return e}},_e={},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RATE_MOVIE":return Object(J.a)({},e,{},t.payload);default:return e}},we={results:[]},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_TV_AIRING_TODAY":return Object(J.a)({},e,{},t.payload);default:return e}},Ne={results:[]},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_TV_POPULAR":return Object(J.a)({},e,{},t.payload);default:return e}},Pe={results:[]},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_TV_ON_THE_AIR":return Object(J.a)({},e,{},t.payload);default:return e}},Se={results:[]},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_TV_TOP_RATED":return Object(J.a)({},e,{},t.payload);default:return e}},De={},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_DETAILS":return Object(J.a)({},e,{},t.payload);default:return e}},Re={cast:[]},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_CREDITS":return Object(J.a)({},e,{},t.payload);default:return e}},ke={results:[]},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_TRAILERS":return Object(J.a)({},e,{},t.payload);default:return e}},Be={results:[]},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_REVIEWS":return Object(J.a)({},e,{},t.payload);default:return e}},Le={results:[]},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_FAVOURITES":return Object(J.a)({},e,{},t.payload);default:return e}},Fe={results:[]},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_RATED":return Object(J.a)({},e,{},t.payload);default:return e}},We={results:[]},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PEOPLE_DETAILS":return Object(J.a)({},e,{},t.payload);default:return e}},He={cast:[]},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PEOPLE_COMBINED_CREDITS":return Object(J.a)({},e,{},t.payload);default:return e}},qe={results:[]},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PEOPLE_POPULAR":return Object(J.a)({},e,{},t.payload);default:return e}},Xe={results:[]},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DISCOVER":return Object(J.a)({},e,{},t.payload);default:return e}},Ze=Object(z.c)({PostMDBConfig:Q,setItemType:$,toggleNav:te,postMoviesNowPlaying:ne,postMoviesPopular:re,postMoviesTopRated:se,postMoviesUpcoming:le,getMovieDetails:ue,getMovieCredits:he,getMovieTrailers:fe,getMovieReviews:ve,getMovieFavorites:Te,getMoviesRated:be,rateMovie:Oe,postTVAiringToday:Ve,postTVPopular:Me,postTVOnTheAir:je,postTVTopRated:Ie,getTVDetails:Ce,getTVCredits:Ae,getTVTrailers:Ge,getTVReviews:Ue,getTVFavorites:xe,getTVRated:Ke,getPeopleDetails:Ye,getPeopleCombinedCredits:ze,getPeoplePopular:Je,getDiscover:Qe}),$e=[q.a],et=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.d,tt=Object(z.e)(Ze,et(z.a.apply(void 0,$e)));i.a.render(o.a.createElement(m.a,{store:tt},o.a.createElement(H,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.eccdd714.chunk.js.map