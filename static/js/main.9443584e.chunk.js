(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{33:function(e,t,a){e.exports=a(56)},38:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),o=a.n(i),s=(a(38),a(39),a(4)),c=a(6),l=a(5),p=a(7),u=a(8),m=a(11),h=function(e){return{type:"TV"===e?"SET_ITEM_TYPE_TV":"SET_ITEM_TYPE_MOVIE"}},d=function(e){return console.log(e),function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_MOVIES_NOWPLAYING",payload:e})})).catch((function(e){return console.log(e)}))}},f=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_MOVIES_POPULAR",payload:e})})).catch((function(e){console.log(e)}))}},v=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_MOVIES_TOP_RATED",payload:e})})).catch((function(e){return console.log(e)}))}},g=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_MOVIES_UPCOMING",payload:e})})).catch((function(e){return console.log(e)}))}},E=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_TV_AIRING_TODAY",payload:e})})).catch((function(e){return console.log(e)}))}},y=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_TV_POPULAR",payload:e})})).catch((function(e){return console.log(e)}))}},T=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_TV_ON_THE_AIR",payload:e})})).catch((function(e){return console.log(e)}))}},b=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"POST_TV_TOP_RATED",payload:e})})).catch((function(e){return console.log(e)}))}},w=a(14),_=a(3),O=(a(44),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.MDBConfig;return function(){var e=document.querySelector(".home-swiper-container");if(e)new w.a(e,{slidesPerView:1,loop:!0,spaceBetween:0,observer:!0,autoplay:{delay:1e4},pagination:{el:".home-swiper-pagination",type:"progressbar"},navigation:{nextEl:".home-swiper-button-next",prevEl:".home-swiper-button-prev"}})}(),r.a.createElement("div",{className:"home-swiper-container"},r.a.createElement("div",{className:"swiper-wrapper"},this.props.items.map((function(a,n){if(n>3&&n<7)return r.a.createElement(_.b,{key:a.id,to:"/movie-app/details/".concat(e.props.itemType.toLowerCase(),"/").concat(a.id),className:"swiper-slide",style:{background:"linear-gradient(\n                rgba(0, 0, 0, 0.6),\n                rgba(0, 0, 0, 0.6)\n              ) center center no-repeat, #fff url(https://image.tmdb.org/t/p/w1280/".concat(t.images?t.images.secure_base_url:"").concat(t.images?t.images.backdrop_sizes[2]:"").concat(a.backdrop_path,") center top no-repeat"),backgroundSize:"cover, cover"}},r.a.createElement("div",null,r.a.createElement("p",{className:"swiper-slide__category"},"Latest".toUpperCase()),r.a.createElement("h2",{className:"swiper-slide__title"},"MOVIE"===e.props.itemType?a.title:a.name),r.a.createElement("p",{className:"swiper-slide__item-duration"},a.vote_average," Rating")))}))),r.a.createElement("div",{className:"home-swiper-pagination"}))}}]),t}(r.a.Component)),N=(a(46),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.MDBConfig;return r.a.createElement("div",{className:"carousel-container","data-wow-duration":"3s"},r.a.createElement("div",{className:"swiper-container"},r.a.createElement("h2",{className:"swiper-container__title"},this.props.title),r.a.createElement("div",{className:"swiper-wrapper"},this.props.items.map((function(a,n){return r.a.createElement("div",{key:a.id,className:"swiper-slide"},r.a.createElement(_.b,{to:"/movie-app/details/".concat(e.props.type.toLowerCase(),"/").concat(a.id)},r.a.createElement("img",{className:"swiper-slide__image",src:"https://image.tmdb.org/t/p/w154/".concat(t.images?t.images.secure_base_url:"").concat(t.images?t.images.poster_sizes[1]:"").concat(a.poster_path),alt:a.title}),r.a.createElement("h3",{className:"swiper-slide__title"},a.title),r.a.createElement("h3",{className:"swiper-slide__title"},a.original_name),r.a.createElement("p",{className:"swiper-slide-rating"},r.a.createElement("svg",{className:"swiper-slide-rating__icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.a.createElement("path",{d:"M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"})),a.vote_average)))}))),r.a.createElement("div",{className:"swiper-button-prev swiper-button-white"}),r.a.createElement("div",{className:"swiper-button-next swiper-button-white"}),r.a.createElement("div",{className:"swiper-pagination"})),r.a.createElement("hr",{className:"carousel-container__separator"}))}}]),t}(n.Component));a(47);var V=function(){return r.a.createElement("footer",{className:"main-footer"},r.a.createElement("section",{className:"main-footer-left"},r.a.createElement("div",{className:"main-footer-left-header"},r.a.createElement("h1",{className:"main-footer-left-header-name"},"Movie App"),r.a.createElement("hr",null),r.a.createElement(_.b,{to:"/movie-app/"},"Home"),r.a.createElement(_.b,{to:"/movie-app/user"},"Profile"),r.a.createElement(_.b,{to:"/movie-app/discover"},"Discover")),r.a.createElement("div",{className:"main-footer-left-contacts"},r.a.createElement("div",{className:"main-footer-left-contacts-item"},r.a.createElement("h3",{className:"main-footer-portfolio-header"},"Portfolio:"),r.a.createElement("p",null,r.a.createElement(_.b,{to:""},"3drdsh3in/github.io"))),r.a.createElement("div",{className:"main-footer-left-contacts-item"},r.a.createElement("h3",{className:"main-footer-phone-header"},"Phone Number:"),r.a.createElement("p",null,"777-777-7777")))),r.a.createElement("section",{className:"main-footer-right"},r.a.createElement("div",{className:"main-footer-right-icons"},r.a.createElement(_.b,{to:""},r.a.createElement("i",{className:"fab fa-twitter fa-2x"})),r.a.createElement(_.b,{to:""},r.a.createElement("i",{className:"fab fa-facebook-f fa-2x"})),r.a.createElement(_.b,{to:""},r.a.createElement("i",{className:"fas fa-book fa-2x"}))),r.a.createElement("img",{className:"main-footer-mdb-logo",src:"https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg"}),r.a.createElement("div",{className:"main-footer-right-copyright"},r.a.createElement("p",null,"Copyright \xa92020 by Edward Shen"))))},P=(a(48),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleMovieFetch=function(){a.props.postMoviesUpcoming("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postMoviesPopular("https://api.themoviedb.org/3/movie/popular?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postMoviesNowPlaying("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postMoviesTopRated("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(a.props.apiKey,"&language=en-US&page=1"))},a.handleTVFetch=function(){a.props.postTVAiringToday("https://api.themoviedb.org/3/tv/airing_today?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postTVPopular("https://api.themoviedb.org/3/tv/popular?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postTVOnTheAir("https://api.themoviedb.org/3/tv/on_the_air?api_key=".concat(a.props.apiKey,"&language=en-US&page=1")),a.props.postTVTopRated("https://api.themoviedb.org/3/tv/top_rated?api_key=".concat(a.props.apiKey,"&language=en-US&page=1"))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){"MOVIE"===this.props.itemType?this.handleMovieFetch():"TV"===this.props.itemType&&this.handleTVFetch()}},{key:"render",value:function(){var e,t=this;return function(){var e=document.querySelectorAll(".swiper-container");if(e)new w.a(e,{init:!0,slidesPerView:3,slidesPerGroup:3,loop:!1,spaceBetween:5,observer:!0,centeredSlides:!1,breakpoints:{1145:{slidesPerView:6,slidesPerGroup:6},992:{slidesPerView:5,slidesPerGroup:5},768:{slidesPerView:4,slidesPerGroup:4},594:{slidesPerView:3,slidesPerGroup:3},300:{slidesPerView:2,slidesPerGroup:2},0:{slidesPerView:1,slidesPerGroup:1}},pagination:{el:".swiper-pagination",clickable:!0},scrollbar:{el:".swiper-scrollbar"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}(),"MOVIE"===this.props.itemType?e=r.a.createElement("div",null,r.a.createElement(N,{title:"Upcoming",MDBConfig:this.props.MDBConfig,items:this.props.moviesUpcoming.results,type:this.props.itemType}),r.a.createElement(N,{title:"Popular",MDBConfig:this.props.MDBConfig,items:this.props.moviesPopular.results,type:this.props.itemType}),r.a.createElement(N,{title:"Now Playing",MDBConfig:this.props.MDBConfig,items:this.props.moviesNowPlaying.results,type:this.props.itemType}),r.a.createElement(N,{title:"Top Rated",MDBConfig:this.props.MDBConfig,items:this.props.moviesTopRated.results,type:this.props.itemType})):"TV"===this.props.itemType&&(e=r.a.createElement("div",null,r.a.createElement(N,{title:"Airing Today",MDBConfig:this.props.MDBConfig,items:this.props.TVAiringToday.results,type:this.props.itemType}),r.a.createElement(N,{title:"Popular",MDBConfig:this.props.MDBConfig,items:this.props.TVPopular.results,type:this.props.itemType}),r.a.createElement(N,{title:"On The Air",MDBConfig:this.props.MDBConfig,items:this.props.TVOnTheAir.results,type:this.props.itemType}),r.a.createElement(N,{title:"Top Rated",MDBConfig:this.props.MDBConfig,items:this.props.TVTopRated.results,type:this.props.itemType}))),r.a.createElement("div",{className:"home-container"},r.a.createElement(O,{itemType:this.props.itemType,MDBConfig:this.props.MDBConfig,items:"TV"===this.props.itemType?this.props.TVAiringToday.results:this.props.moviesNowPlaying.results}),r.a.createElement("div",{className:"item-controller"},r.a.createElement("button",{className:"item-controller__switch",onClick:function(){t.props.setItemType("MOVIES"),t.handleMovieFetch()}},"Movies"),r.a.createElement("button",{className:"item-controller__switch",onClick:function(){t.props.setItemType("TV"),t.handleTVFetch()}},"TV Shows")),r.a.createElement("div",{className:"home-container-main"},e))}}]),t}(n.Component)),M=Object(m.b)((function(e){return{apiKey:e.PostMDBConfig.apiKey,MDBConfig:e.PostMDBConfig,itemType:e.setItemType.itemType,moviesUpcoming:e.postMoviesUpcoming,moviesPopular:e.postMoviesPopular,moviesNowPlaying:e.postMoviesNowPlaying,moviesTopRated:e.postMoviesTopRated,TVAiringToday:e.postTVAiringToday,TVPopular:e.postTVPopular,TVOnTheAir:e.postTVOnTheAir,TVTopRated:e.postTVTopRated}}),(function(e){return{setItemType:function(t){return e(h(t))},postMoviesUpcoming:function(t){return e(g(t))},postMoviesPopular:function(t){return e(f(t))},postMoviesNowPlaying:function(t){return e(d(t))},postMoviesTopRated:function(t){return e(v(t))},postTVAiringToday:function(t){return e(E(t))},postTVPopular:function(t){return e(y(t))},postTVOnTheAir:function(t){return e(T(t))},postTVTopRated:function(t){return e(b(t))}}}))(P),j=a(23),S=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"SEARCH_DATA",payload:e})})).catch((function(e){return console.log(e)}))}};a(49);var I=Object(m.b)((function(e,t){return{apiKey:e.searchData.apiKey,searchResults:e.searchData,itemType:e.setItemType.itemType}}),(function(e,t){return{searchData:function(t){return e(S(t))}}}))((function(e){console.log(e);var t=Object(n.useState)([e.match.params.query]),a=Object(j.a)(t,2),i=a[0],o=a[1];return Object(n.useEffect)((function(){e.match.params.query===i?console.log("Does not exist yet"):e.searchData("https://api.themoviedb.org/3/search/movie?api_key=".concat(e.apiKey,"&language=en-US&query=").concat(e.match.params.query,"&page=1&include_adult=false")),o(e.match.params.query)}),[e,i]),r.a.createElement("div",{className:"searchResults"},r.a.createElement("h3",null,"Search Results for ",e.match.params.query),r.a.createElement("hr",null),r.a.createElement("div",{className:"searchResults-container"},e.searchResults.results?e.searchResults.results.map((function(t){return t.poster_path?r.a.createElement(_.b,{className:"searchResults-container-item",to:"/movie-app/details/".concat(e.itemType.toLowerCase(),"/").concat(t.id)},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original/".concat(t.poster_path),alt:"pic"}),r.a.createElement("h3",null,t.title)):console.log("Image doesnt exist")})):r.a.createElement("p",null,"Search Results Component")))})),R=function(e){return function(t){console.log("a"),fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"GET_MOVIE_DETAILS",payload:e})})).catch((function(e){return console.log(e)}))}},D=function(e){return console.log("b"),function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"GET_MOVIE_CREDITS",payload:e})})).catch((function(e){return console.log(e)}))}},C=function(e){return console.log("c"),function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"GET_MOVIE_TRAILERS",payload:e})})).catch((function(e){return console.log(e)}))}},k=function(e){return console.log("d"),function(t){fetch(e).then((function(e){return e.json(e)})).then((function(e){return t({type:"GET_MOVIE_REVIEWS",payload:e})})).catch((function(e){return console.log(e)}))}},A=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"GET_TV_DETAILS",payload:e})})).catch((function(e){return console.log(e)}))}},G=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"GET_TV_CREDITS",payload:e})})).catch((function(e){return console.log(e)}))}},B=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"GET_TV_TRAILERS",payload:e})})).catch((function(e){return console.log(e)}))}},x=function(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:"GET_TV_REVIEWS",payload:e})})).catch((function(e){return console.log(e)}))}},U=a(16),L=(a(50),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"initHeader",value:function(){var e=this.props.details;return!1===!e?(console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"item-header",style:{backgroundImage:"url(http://image.tmdb.org/t/p/original/".concat(e.backdrop_path,")")}},r.a.createElement("div",{className:"item-header-top"},r.a.createElement(U.a,{from:"",to:"/"},r.a.createElement("i",{className:"fas fa-chevron-left fa-3x"})),r.a.createElement("i",{className:"fas fa-share fa-3x"})),r.a.createElement("div",{className:"item-header-bottom"},r.a.createElement("div",{className:"item-header-bottom-information"},r.a.createElement("img",{className:"item-header-bottom-information-poster",src:"http://image.tmdb.org/t/p/w92/".concat(e.poster_path)}),r.a.createElement("div",{className:"item-header-bottom-information-text"},r.a.createElement("h1",null,e.title),r.a.createElement("div",{className:"item-header-bottom-information-text-rating"},r.a.createElement("p",null,e.vote_average),r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("i",{className:"fas fa-star"})),r.a.createElement("div",{className:"item-header-bottom-information-text-language"},e.status?e.status:""," | ",e.original_language?e.original_language:""),r.a.createElement("div",{className:"item-header-bottom-information-text-genres"},e.genres[0]?e.genres[0].name:""," | ",e.genres[1]?e.genres[1].name:""))),r.a.createElement("div",{className:"item-header-bottom-like"},r.a.createElement("i",{className:"far fa-heart fa-3x"}),r.a.createElement("i",{className:"fas fa-heart fa-3x hide"})))),r.a.createElement("div",{className:"headerOverlay"}))):r.a.createElement("p",null,"Film Information not found")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.initHeader())}}]),t}(r.a.Component)),F=(a(51),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log(this.props.details.overview);new w.a(".s1",{loop:!1,slidesPerView:3,spaceBetween:0,pagination:{el:"swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{300:{slidesPerView:1},600:{slidesPerView:2},768:{slidesPerView:3},900:{slidesPerView:4},1250:{slidesPerView:5}}});return r.a.createElement("main",{className:"item-body"},r.a.createElement("div",{className:"item-body-content"},r.a.createElement("div",{className:"item-body-content-summary"},r.a.createElement("h2",null,"Summary:"),r.a.createElement("p",null,this.props.details.overview)),r.a.createElement("div",{className:"swiper-container s1"},r.a.createElement("h2",null,"Cast:"),r.a.createElement("div",{className:"swiper-wrapper"},this.props.credits.cast.map((function(e){return e.profile_path?r.a.createElement("div",{className:"swiper-slide"},r.a.createElement("div",{className:"flip-card"},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("img",{className:"flip-card-front",src:"https://image.tmdb.org/t/p/w154/".concat(e.profile_path)}),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("button",null,"Details"),r.a.createElement("button",null,"Information")))),r.a.createElement("h4",null,e.name)):null}))),r.a.createElement("div",{className:"swiper-pagination"}),r.a.createElement("div",{className:"swiper-button-next swiper-button-white"}),r.a.createElement("div",{className:"swiper-button-prev swiper-button-white"}))))}}]),t}(r.a.Component)),K=(a(52),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"ItemReviews"},r.a.createElement("h2",null,"Reviews:"),r.a.createElement("div",{className:"ItemReviews-content"},this.props.reviews.results.length>0?this.props.reviews.results.map((function(e){return r.a.createElement("div",{className:"ItemReviews-content-review"},r.a.createElement("h3",{className:"ItemReviews-content-review-header"},e.author),r.a.createElement("p",{className:"ItemReviews-content-review-paragraph"},e.content.length>1e3?"".concat(e.content.slice(0,1e3),"..."):e.content),r.a.createElement("a",{href:e.url},"See more details..."))})):r.a.createElement("p",null,"No Reviews Found :( ")))}}]),t}(r.a.Component)),q=(a(53),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){new w.a(".s2",{slidesPerView:3,spaceBetween:30,slidesPerGroup:3,loopFillGroupWithBlank:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{300:{slidesPerView:1},600:{slidesPerView:2},900:{slidesPerView:3},1400:{slidesPerView:4},1800:{slidesPerView:5},2e3:{slidesPerView:6}}});return r.a.createElement("div",{className:"ItemTrailers"},r.a.createElement("h2",{className:"ItemTrailers-headername"},"Trailers: "),r.a.createElement("div",{className:"swiper-container s2"},r.a.createElement("div",{className:"swiper-wrapper"},this.props.trailers.results?this.props.trailers.results.map((function(e){return r.a.createElement("div",{className:"swiper-slide",style:{width:"150px"}},r.a.createElement("iframe",{width:"100%",height:"250px",frameborder:"0",gesture:"media",allow:"encrypted-media",allowfullscreen:!0,src:"https://www.youtube.com/embed/".concat(e?e.key:"")}))})):r.a.createElement("p",null,"No Trailers Found :( ")),r.a.createElement("div",{className:"swiper-button-next swiper-button-white"}),r.a.createElement("div",{className:"swiper-button-prev swiper-button-white"})))}}]),t}(r.a.Component)),W=(a(54),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.getFilmData(e)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){console.log("componentWillMount"),e.match.params.id!==this.props.match.params.id&&this.getFilmData(e.match.params.id,e.match.params.type)}},{key:"getFilmData",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.match.params.type,a=this.props.MDBConfig.apiKey;switch(t){case"movie":this.props.getMovieDetails("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a,"&language=en-US")),this.props.getMovieCredits("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a)),this.props.getMovieTrailers("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat(a,"&language=en-US")),this.props.getMovieReviews("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1"));break;case"tv":this.props.getTVDetails("https://api.themoviedb.org/3/tv/".concat(e,"?api_key=").concat(a,"&language=en-US")),this.props.getTVCredits("https://api.themoviedb.org/3/tv/".concat(e,"/credits?api_key=").concat(a)),this.props.getTVTrailers("https://api.themoviedb.org/3/tv/".concat(e,"/videos?api_key=").concat(a,"&language=en-US")),this.props.getTVReviews("https://api.themoviedb.org/3/tv/".concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1"));break;default:console.log("Get Movie/TV Info Failed")}}},{key:"render",value:function(){var e,t,a,n;switch(this.props.match.params.type){case"movie":e=this.props.movieDetails,t=this.props.movieCredits,a=this.props.movieTrailers,n=this.props.movieReviews;break;case"tv":e=this.props.TVDetails,t=this.props.TVCredits,a=this.props.TVTrailers,n=this.props.TVReviews;break;default:console.log("handeItemDisplay has fucking failed")}return r.a.createElement("div",{className:"item-main-content"},r.a.createElement(L,{details:e.overview?e:""}),r.a.createElement(F,{details:e||"",credits:t||""}),r.a.createElement(q,{trailers:a||""}),r.a.createElement(K,{reviews:n||""}))}}]),t}(r.a.Component)),Y=Object(m.b)((function(e){return{apiKey:e.PostMDBConfig.apiKey,MDBConfig:e.PostMDBConfig,itemType:e.setItemType,movieDetails:e.getMovieDetails,movieCredits:e.getMovieCredits,movieTrailers:e.getMovieTrailers,movieReviews:e.getMovieReviews,TVDetails:e.getTVDetails,TVCredits:e.getTVCredits,TVTrailers:e.getTVTrailers,TVReviews:e.getTVReviews}}),(function(e){return{getMovieDetails:function(t){return e(R(t))},getMovieCredits:function(t){return e(D(t))},getMovieTrailers:function(t){return e(C(t))},getMovieReviews:function(t){return e(k(t))},getTVDetails:function(t){return e(A(t))},getTVCredits:function(t){return e(G(t))},getTVTrailers:function(t){return e(B(t))},getTVReviews:function(t){return e(x(t))}}}))(W),H=(a(55),function(){return{type:"TOGGLE_NAV"}});var z=Object(m.b)((function(e){return{apiKey:e.PostMDBConfig.apiKey,navStatus:e.toggleNav.navStatus}}),(function(e){return{toggleNav:function(){return e(H())}}}))((function(e){var t=Object(n.useState)(""),a=Object(j.a)(t,2),i=a[0],o=a[1];return r.a.createElement("nav",{className:"nav-main"},r.a.createElement("div",{className:"nav-top-section ".concat(e.navStatus?"":"hide")},r.a.createElement(_.b,{to:"/movie-app/"},r.a.createElement("img",{src:"https://img.icons8.com/cotton/64/000000/3d-glasses.png"})),r.a.createElement("div",{className:"nav-searchbar"},r.a.createElement("form",{className:"nav-search-form"},r.a.createElement("input",{onChange:function(e){console.log(e.target.value),o(e.target.value)},placeholder:"search...",className:"nav-search-form-input",type:"text",name:"",id:"navbar-search"}),r.a.createElement(_.b,{to:"/movie-app/search-results/".concat((console.log("search"),document.getElementById("navbar-search")?i:""))},r.a.createElement("button",{className:"nav-search-form-button",type:"submit"},r.a.createElement("i",{className:"fas fa-search fa-2x"})))))),r.a.createElement("button",{onClick:function(){e.toggleNav()},className:"hamburger hamburger--spin js-hamburger ".concat(e.navStatus?"is-active":""),type:"button"},r.a.createElement("span",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("div",{className:"nav-split-section ".concat(e.navStatus?"":"hide")},r.a.createElement(_.b,{to:"/movie-app/"},r.a.createElement("div",{className:"nav-split-section-item"},r.a.createElement("i",{className:"fas fa-home fa-2x"}))),r.a.createElement(_.b,{to:"/user"},r.a.createElement("div",{className:"nav-split-section-item"},r.a.createElement("i",{className:"fas fa-user-circle fa-2x"}))),r.a.createElement(_.b,{to:"/discover"},r.a.createElement("div",{className:"nav-split-section-item"},r.a.createElement("i",{className:"far fa-compass fa-2x"})))))}));var J=Object(m.b)((function(e){return{apiKey:e.PostMDBConfig.apiKey}}),(function(e){return{}}))((function(){return r.a.createElement(_.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(z,null),r.a.createElement(U.a,{path:"/movie-app/",exact:!0,component:M}),r.a.createElement(U.a,{path:"/movie-app/details/:type/:id",exact:!0,component:Y}),r.a.createElement(U.a,{path:"/movie-app/search-results/:query",exact:!0,component:I}),r.a.createElement(V,null)))})),X=a(15),Q=a(32),Z=a(1),$={apiKey:"fb8a39c9807f2120f494db319897180d"},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_MDB_CONFIG":return Object(Z.a)({},e,{},t.payload);default:return e}},te={itemType:"MOVIE"},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ITEM_TYPE_MOVIE":return{itemType:"MOVIE"};case"SET_ITEM_TYPE_TV":return{itemType:"TV"};default:return e}},ne={navStatus:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_NAV":return Object(Z.a)({},e,{navStatus:!e.navStatus});default:return e}},ie={apiKey:"fb8a39c9807f2120f494db319897180d"},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_DATA":return Object(Z.a)({},e,{},t.payload);default:return e}},se={results:[]},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_MOVIES_NOWPLAYING":return Object(Z.a)({},t.payload);default:return e}},le={results:[]},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_MOVIES_POPULAR":return Object(Z.a)({},e,{},t.payload);default:return e}},ue={results:[]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_MOVIES_TOP_RATED":return Object(Z.a)({},e,{},t.payload);default:return e}},he={results:[]},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_MOVIES_UPCOMING":return Object(Z.a)({},e,{},t.payload);default:return e}},fe={},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_DETAILS":return Object(Z.a)({},e,{},t.payload);default:return e}},ge={cast:[]},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_CREDITS":return Object(Z.a)({},e,{},t.payload);default:return e}},ye={results:[]},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_TRAILERS":return Object(Z.a)({},e,{},t.payload);default:return e}},be={results:[]},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_REVIEWS":return Object(Z.a)({},e,{},t.payload);default:return e}},_e={results:[]},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_FAVOURITES":return Object(Z.a)({},e,{},t.payload);default:return e}},Ne={results:[]},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES_RATED":return Object(Z.a)({},e,{},t.payload);default:return e}},Pe={},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RATE_MOVIE":return Object(Z.a)({},e,{},t.payload);default:return e}},je={results:[]},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_TV_AIRING_TODAY":return Object(Z.a)({},e,{},t.payload);default:return e}},Ie={results:[]},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_TV_POPULAR":return Object(Z.a)({},e,{},t.payload);default:return e}},De={results:[]},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_TV_ON_THE_AIR":return Object(Z.a)({},e,{},t.payload);default:return e}},ke={results:[]},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_TV_TOP_RATED":return Object(Z.a)({},e,{},t.payload);default:return e}},Ge={},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_DETAILS":return Object(Z.a)({},e,{},t.payload);default:return e}},xe={cast:[]},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_CREDITS":return Object(Z.a)({},e,{},t.payload);default:return e}},Le={results:[]},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_TRAILERS":return Object(Z.a)({},e,{},t.payload);default:return e}},Ke={results:[]},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_REVIEWS":return Object(Z.a)({},e,{},t.payload);default:return e}},We={results:[]},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_FAVOURITES":return Object(Z.a)({},e,{},t.payload);default:return e}},He={results:[]},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TV_RATED":return Object(Z.a)({},e,{},t.payload);default:return e}},Je={results:[]},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PEOPLE_DETAILS":return Object(Z.a)({},e,{},t.payload);default:return e}},Qe={cast:[]},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PEOPLE_COMBINED_CREDITS":return Object(Z.a)({},e,{},t.payload);default:return e}},$e={results:[]},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PEOPLE_POPULAR":return Object(Z.a)({},e,{},t.payload);default:return e}},tt={results:[]},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DISCOVER":return Object(Z.a)({},e,{},t.payload);default:return e}},nt=Object(X.c)({PostMDBConfig:ee,setItemType:ae,toggleNav:re,searchData:oe,postMoviesNowPlaying:ce,postMoviesPopular:pe,postMoviesTopRated:me,postMoviesUpcoming:de,getMovieDetails:ve,getMovieCredits:Ee,getMovieTrailers:Te,getMovieReviews:we,getMovieFavorites:Oe,getMoviesRated:Ve,rateMovie:Me,postTVAiringToday:Se,postTVPopular:Re,postTVOnTheAir:Ce,postTVTopRated:Ae,getTVDetails:Be,getTVCredits:Ue,getTVTrailers:Fe,getTVReviews:qe,getTVFavorites:Ye,getTVRated:ze,getPeopleDetails:Xe,getPeopleCombinedCredits:Ze,getPeoplePopular:et,getDiscover:at}),rt=[Q.a],it=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,ot=Object(X.e)(nt,it(X.a.apply(void 0,rt)));o.a.render(r.a.createElement(m.a,{store:ot},r.a.createElement(J,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.9443584e.chunk.js.map