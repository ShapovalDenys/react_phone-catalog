(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(33).concat([function(e,a,t){e.exports=t(83)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),l=t.n(r),s=t(1),o=(t(38),t(4)),i=(t(39),t(40),function(){return c.a.createElement(s.b,{to:"/",className:"logo"},"logo link")}),m=(t(45),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"nav"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{className:"nav__link hover-shadow hover-color animated",to:"/",exact:!0},c.a.createElement("span",null,"H"),c.a.createElement("span",null,"o"),c.a.createElement("span",null,"m"),c.a.createElement("span",null,"e"))),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{className:"nav__link hover-shadow hover-color animated",to:"/phones"},c.a.createElement("span",null,"P"),c.a.createElement("span",null,"h"),c.a.createElement("span",null,"o"),c.a.createElement("span",null,"n"),c.a.createElement("span",null,"e"),c.a.createElement("span",null,"s"))),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{className:"nav__link hover-shadow hover-color animated",to:"/tablets"},c.a.createElement("span",null,"T"),c.a.createElement("span",null,"a"),c.a.createElement("span",null,"b"),c.a.createElement("span",null,"l"),c.a.createElement("span",null,"e"),c.a.createElement("span",null,"t"),c.a.createElement("span",null,"s"))),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{className:"nav__link hover-shadow hover-color animated",to:"/accessories"},c.a.createElement("span",null,"A"),c.a.createElement("span",null,"c"),c.a.createElement("span",null,"c"),c.a.createElement("span",null,"e"),c.a.createElement("span",null,"s"),c.a.createElement("span",null,"s"),c.a.createElement("span",null,"o"),c.a.createElement("span",null,"r"),c.a.createElement("span",null,"i"),c.a.createElement("span",null,"e"),c.a.createElement("span",null,"s")))))}),u=(t(46),t(13)),p=t(2),E=c.a.createContext({favorites:[],addFavorite:function(){},removeFavorite:function(){},isFavorite:function(){return!1}}),_=function(e){var a=e.children,t=Object(n.useState)([]),r=Object(p.a)(t,2),l=r[0],s=r[1];return c.a.createElement(E.Provider,{value:{favorites:l,addFavorite:function(e){s([].concat(Object(u.a)(l),[e]))},removeFavorite:function(e){s(l.filter((function(a){return a.id!==e.id})))},isFavorite:function(e){return l.some((function(a){return a.id===e.id}))}}},a)},d=function(){var e=Object(n.useContext)(E).favorites;return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.c,{to:"/favorite",className:"favorite-link"},c.a.createElement("img",{src:"./img/favorite.svg",alt:"favorite"}),e.length>0&&c.a.createElement("span",{className:"favorite-link__span"},e.length)))},h=(t(47),c.a.createContext({itemInCart:[],addToCart:function(){},removeFromCart:function(){},isAddedToCart:function(){return!1},totalCount:0,setTotalCount:function(){},totalCost:0,setTotalCost:function(){}})),g=function(e){var a=e.children,t=Object(n.useState)([]),r=Object(p.a)(t,2),l=r[0],s=r[1],o=Object(n.useState)(0),i=Object(p.a)(o,2),m=i[0],E=i[1],_=Object(n.useState)(0),d=Object(p.a)(_,2),g=d[0],v=d[1];return c.a.createElement(h.Provider,{value:{itemInCart:l,addToCart:function(e){s([].concat(Object(u.a)(l),[e]))},removeFromCart:function(e){s(l.filter((function(a){return a.id!==e.id})))},isAddedToCart:function(e){return l.some((function(a){return a.id===e.id}))},totalCount:m,setTotalCount:E,totalCost:g,setTotalCost:v}},a)},v=function(){var e=Object(n.useContext)(h).itemInCart;return c.a.createElement(s.c,{to:"/cart",className:"cart-link"},c.a.createElement("img",{src:"./img/ShoppingBag.svg",alt:"ShoppingBag"}),e.length>0&&c.a.createElement("span",{className:"favorite-link__span"},e.length))},b=(t(48),t(28)),f=t.n(b),N=function(e){var a=e.section,t=Object(o.f)(),r=Object(o.g)(),l=Object(n.useState)(""),s=Object(p.a)(l,2),i=s[0],m=s[1],u=new URLSearchParams(r.search),E=Object(n.useCallback)(f()((function(e){e?u.set("query",e):u.delete("query"),t.push({search:u.toString()})}),1e3),[]);return c.a.createElement("section",{className:"search-section"},c.a.createElement("div",{className:"search"},c.a.createElement("input",{placeholder:"Search in ".concat(a,"..."),className:"search__input",type:"text",value:i,onChange:function(e){var a=e.target;m(a.value),E(a.value)}}),i?c.a.createElement("button",{type:"button",onClick:function(){t.push({search:"?query="}),m("")},className:"search__img search__img-button"},c.a.createElement("img",{src:"./img/close.svg",alt:"close",className:"search__img-delete"})):c.a.createElement("div",{className:"search__img"},c.a.createElement("img",{src:"./img/Search.svg",alt:"search"}))))},y=function(){return c.a.createElement("header",{id:"header",className:"header"},c.a.createElement("div",{className:"header__nav menu"},c.a.createElement("div",{className:"header__nav-logo"},c.a.createElement(i,null)),c.a.createElement(m,null)),c.a.createElement("div",{className:"header__nav action"},c.a.createElement(o.a,{path:"/phones",exact:!0},c.a.createElement(N,{section:"phones"})),c.a.createElement(o.a,{path:"/tablets",exact:!0},c.a.createElement(N,{section:"tablets"})),c.a.createElement(o.a,{path:"/accessories",exact:!0},c.a.createElement(N,{section:"accessories"})),c.a.createElement(d,null),c.a.createElement(v,null)))},k=(t(49),t(6)),w=t.n(k),j=t(12),C=function(){var e=["./img/sliderPicture/1.jpg","./img/sliderPicture/2.jpg","./img/sliderPicture/3.jpg","./img/sliderPicture/4.jpg"],a=Object(n.useState)(0),t=Object(p.a)(a,2),r=t[0],l=t[1],s=Object(n.useState)(0),o=Object(p.a)(s,2),i=o[0],m=o[1];return c.a.createElement("section",{className:"carousel"},c.a.createElement(j.a,{handleWidth:!0,onResize:function(e){e>=1100?m(1040):e>=600?m(600):e<600&&m(260)}}),c.a.createElement("button",{id:"prev",className:"prev-button",onClick:function(){l(0===r?e.length-1:r-1)},type:"button"},c.a.createElement("img",{src:"./img/ArrowRightActive.svg",alt:"arrow",className:"pagination__arrow"})),c.a.createElement("button",{id:"next",className:"next-button",type:"button",onClick:function(){e.length-1===r?l(0):l(r+1)}},c.a.createElement("img",{src:"./img/ArrowRightActive.svg",alt:"arrow"})),c.a.createElement("div",{className:"carousel__block"},c.a.createElement("ul",{className:"carousel__list",style:{transform:"translateX(-".concat(r*i,"px)")}},e.map((function(e){return c.a.createElement("li",{key:e},c.a.createElement("img",{src:e,alt:"images",className:"carousel__img"}))})))),c.a.createElement("div",{className:"slider-points"},e.map((function(a){return c.a.createElement("div",{className:w()("slider-point",{"avtive-point":e[r]===a}),key:a})}))))},O=(t(50),t(51),t(52),function(e){var a=e.title,t=e.itemInfo;return c.a.createElement("span",{className:"description__span"},c.a.createElement("p",null,a),c.a.createElement("p",null,t))}),x={tablet:"tablet",phone:"phone",accessories:"accessories"},S=function(e){var a=e.phone,t=a.price,r=a.ram,l=a.imageUrl,o=a.discount,i=a.name,m=a.screen,u=a.capacity,_=a.id,d=a.type,g=Object(n.useContext)(E),v=g.isFavorite,b=g.addFavorite,f=g.removeFavorite,N=Object(n.useContext)(h),y=N.isAddedToCart,k=N.addToCart,j=N.removeFromCart,C=Object(n.useState)("phones"),S=Object(p.a)(C,2),A=S[0],P=S[1],T=t-t*(o/100);return Object(n.useEffect)((function(){switch(d){case x.phone:P("phones");break;case x.tablet:P("tablets");break;case x.accessories:P("accessories");break;default:P("phones")}}),[a]),c.a.createElement("div",{className:"item"},c.a.createElement(s.b,{to:"/".concat(A,"/").concat(_),className:"item__picture"},c.a.createElement("img",{className:"item__img",src:l,alt:"item"})),c.a.createElement(s.b,{to:"/".concat(A,"/").concat(_),className:"item__title"},i),c.a.createElement("span",{className:"item__price"},c.a.createElement("p",{className:"item__price-discount"},"$".concat(T)),c.a.createElement("p",{className:"item__price-value"},t===T?"":"$".concat(t))),c.a.createElement("div",{className:"description item__description"},c.a.createElement(O,{title:"Screen",itemInfo:m}),c.a.createElement(O,{title:"Capacity",itemInfo:u}),c.a.createElement(O,{title:"Ram",itemInfo:r})),c.a.createElement("div",{className:"item__button"},c.a.createElement("input",{className:w()("item__button-add-to-cart",{"item__button-add-to-cart-selected":y(a)}),type:"button",value:y(a)?"Added to cart":"Add to cart",onClick:function(){y(a)?j(a):k(a)}}),c.a.createElement("label",{className:"item__button-favorite",htmlFor:"button-favorite-".concat(_)},c.a.createElement("input",{className:"item__button-favorite-input",type:"checkbox",checked:v(a),id:"button-favorite-".concat(_),onChange:function(e){e.target.checked?b(a):f(a)}}),c.a.createElement("span",{className:"item__button-favorite-check"}))))},A=function(e){var a=e.preparedPhones,t=e.article,r=Object(n.useState)(0),l=Object(p.a)(r,2),s=l[0],o=l[1],i=Object(n.useState)(4),m=Object(p.a)(i,2),u=m[0],E=m[1];return c.a.createElement("section",{className:"productsSlider"},c.a.createElement(j.a,{handleWidth:!0,handleHeight:!0,onResize:function(e){e>1100?E(4):e>=620?E(2):e<620&&E(1)}}),c.a.createElement("div",{className:"productsSlider__header"},c.a.createElement("h2",{className:"productsSlider__article"},t),c.a.createElement("div",{className:"productsSlider__button"},c.a.createElement("button",{type:"button",className:w()("productsSlider__button-prev",{disabled:0===s}),id:"prevProduct",onClick:function(){0!==s&&o(s-1)}},0===s?c.a.createElement("img",{src:"./img/ArrowRight.svg",alt:"arrow",className:"pagination__arrow"}):c.a.createElement("img",{src:"./img/ArrowRightActive.svg",alt:"arrow",className:"pagination__arrow"})),c.a.createElement("button",{type:"button",className:w()("productsSlider__button-next",{disabled:s===a.length-u}),id:"nextProduct",onClick:function(){s!==a.length-4&&o(s+1)}},s===a.length-u?c.a.createElement("img",{src:"./img/ArrowRight.svg",alt:"next"}):c.a.createElement("img",{src:"./img/ArrowRightActive.svg",alt:"next"})))),c.a.createElement("div",{className:"productsSlider__cards"},c.a.createElement("div",{className:"carousel-small",style:{width:"".concat(288*u,"px")}},c.a.createElement("ul",{className:"carousel-small__list",style:{transform:"translateX(-".concat(288*s,"px)"),transition:"transform ".concat(500,"ms")}},a.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(S,{phone:e}))}))))))},P=function(e){var a=e.preparedPhones.filter((function(e){return 0!==e.discount})).sort((function(e,a){return a.price*(a.discount/100)-e.price*(e.discount/100)}));return c.a.createElement(A,{preparedPhones:a,article:"Hot Prices"})},T=function(e){var a=e.preparedPhones.filter((function(e){return 0===e.discount})).sort((function(e,a){return e.age-a.age}));return c.a.createElement(A,{preparedPhones:a,article:"Brand new models"})},B=(t(53),function(e){var a=e.preparedPhones,t=a.filter((function(e){return"phone"===e.type})).length,n=a.filter((function(e){return"tablet"===e.type})).length,r=a.filter((function(e){return"accessories"===e.type})).length;return c.a.createElement("section",{className:"shopByCategory"},c.a.createElement("h2",{className:"shopByCategory__article"},"Shop by category"),c.a.createElement("div",{className:"shopByCategory__cards"},c.a.createElement(s.b,{to:"/phones",className:"shopByCategory__card shopByCategory__card-mobile"},c.a.createElement("div",{className:"shopByCategory__card-image-wrapper"},c.a.createElement("img",{className:"shopByCategory__card-image",src:"./img/shopBycategoryPicture/1.jpg",alt:"kjhg"})),c.a.createElement("h3",{className:"shopByCategory__card-article"},"Mobile phones"),c.a.createElement("p",{className:"shopByCategory__card-quantity"},t," ","models")),c.a.createElement(s.b,{to:"/tablets",className:"shopByCategory__card shopByCategory__card-mobile"},c.a.createElement("div",{className:"shopByCategory__card-image-wrapper"},c.a.createElement("img",{className:"shopByCategory__card-image",src:"./img/shopBycategoryPicture/2.jpg",alt:"kjhg"})),c.a.createElement("h3",{className:"shopByCategory__card-article"},"Tablets"),c.a.createElement("p",{className:"shopByCategory__card-quantity"},n," ","models")),c.a.createElement(s.b,{to:"/accessories",className:"shopByCategory__card shopByCategory__card-mobile"},c.a.createElement("div",{className:"shopByCategory__card-image-wrapper"},c.a.createElement("img",{className:"shopByCategory__card-image",src:"./img/shopBycategoryPicture/3.jpg",alt:"kjhg"})),c.a.createElement("h3",{className:"shopByCategory__card-article"},"Accessories"),c.a.createElement("p",{className:"shopByCategory__card-quantity"},r," ","models"))))}),F=t(16),I=t.n(F),R=t(22),L=function(){var e=Object(R.a)(I.a.mark((function e(){var a,t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mate-academy.github.io/react_phone-catalog/api/products.json",e.next=3,fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json");case 3:return a=e.sent,e.next=6,a.json();case 6:return t=e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(R.a)(I.a.mark((function e(a){var t,n,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://mate-academy.github.io/phone-catalogue-static/api/phones/".concat(a,".json"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),q=(t(55),function(){return c.a.createElement("div",{className:"spinner-position"},c.a.createElement("h2",null,"Loading content, please, wait!"),c.a.createElement("div",{className:"lds-roller"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)))}),z=function(){var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(!1),s=Object(p.a)(l,2),o=s[0],i=s[1];return Object(n.useEffect)((function(){i(!0),L().then((function(e){return r(e)})),setTimeout((function(){return i(!1)}),500)}),[]),o?c.a.createElement(q,null):c.a.createElement("section",null,c.a.createElement(C,null),c.a.createElement(P,{preparedPhones:t}),c.a.createElement(B,{preparedPhones:t}),c.a.createElement(T,{preparedPhones:t}))},H=(t(56),function(){var e=Object(n.useState)(!1),a=Object(p.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){window.scrollTo(0,0),r(!1)}),[t]),c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"footer__nav"},c.a.createElement(i,null),c.a.createElement("ul",{className:"footer__nav-links"},c.a.createElement("li",{className:"nav__item"},c.a.createElement("a",{className:"nav__link hover-shadow hover-color animated",href:"https://github.com/ShapovalDenys?tab=repositories"},c.a.createElement("span",null,"G"),c.a.createElement("span",null,"i"),c.a.createElement("span",null,"t"),c.a.createElement("span",null,"h"),c.a.createElement("span",null,"u"),c.a.createElement("span",null,"b"))),c.a.createElement("li",{className:"nav__item"},c.a.createElement("a",{className:"nav__link hover-shadow hover-color animated",href:"https://www.linkedin.com/in/denys-shapoval-831a74143/"},c.a.createElement("span",null,"C"),c.a.createElement("span",null,"o"),c.a.createElement("span",null,"n"),c.a.createElement("span",null,"t"),c.a.createElement("span",null,"a"),c.a.createElement("span",null,"c"),c.a.createElement("span",null,"t"),c.a.createElement("span",null,"s"))),c.a.createElement("li",{className:"nav__item"},c.a.createElement("a",{className:"nav__link hover-shadow hover-color animated",href:"https://ru.wikipedia.org/wiki/All_rights_reserved"},c.a.createElement("span",null,"r"),c.a.createElement("span",null,"i"),c.a.createElement("span",null,"g"),c.a.createElement("span",null,"h"),c.a.createElement("span",null,"t"),c.a.createElement("span",null,"s")))),c.a.createElement("button",{type:"button",className:"back-to-top",onClick:function(){return r(!0)}},c.a.createElement("img",{src:"./img/backToTop.svg",alt:"back to top"}))))}),M=(t(57),function(e){var a=function(e){for(var a,t,n=e.length-1;n>0;)n-=1,t=e[a=Math.floor(Math.random()*(n+1))],e[a]=e[n],e[n]=t;return e}(e.preparedPhones);return c.a.createElement(A,{preparedPhones:a,article:"You may also like"})}),$=function(e){var a=e.currentItemTitle,t=e.type,r=Object(n.useState)(""),l=Object(p.a)(r,2),o=l[0],i=l[1];return Object(n.useEffect)((function(){switch(t){case x.phone:i("phones");break;case x.tablet:i("tablets");break;case x.accessories:i("accessories");break;default:i("phones")}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"nav-location"},c.a.createElement(s.b,{to:"/",className:"nav-location__svg-home"},c.a.createElement("img",{src:"./img/home.svg",alt:"home"})),c.a.createElement("div",{className:"nav-location__svg-arrow"},c.a.createElement("img",{src:"./img/ArrowRightActive.svg",alt:"arrow"})),c.a.createElement(s.b,{to:"/".concat(o),className:"nav-location__text nav-location__text-item nav-location__text-item-link"},o),c.a.createElement("div",{className:"nav-location__svg-arrow"},c.a.createElement("img",{src:"./img/ArrowRightActive.svg",alt:"arrow"})),c.a.createElement("p",{className:"nav-location__text nav-location__text-item nav-location__text-item-link"},a)),c.a.createElement("section",{className:"back-link"},c.a.createElement(s.b,{to:"/".concat(o),className:"nav-location__back-link"},c.a.createElement("img",{src:"./img/ArrowRightActive.svg",alt:"arrow",className:"back-link-arrow"}),c.a.createElement("p",{className:"back-link__text"},"Back"))))},D=function(e){var a,t,r,l=e.currentItem,s=Object(n.useState)(!1),o=Object(p.a)(s,2),i=o[0],m=o[1],u=Object(n.useState)(),_=Object(p.a)(u,2),d=_[0],g=_[1],v=Object(n.useState)(),b=Object(p.a)(v,2),f=b[0],N=b[1],y=Object(n.useState)([]),k=Object(p.a)(y,2),j=k[0],C=k[1],x=Object(n.useState)(),S=Object(p.a)(x,2),A=S[0],P=S[1],T=Object(n.useContext)(h),B=T.isAddedToCart,F=T.addToCart,I=T.removeFromCart,R=Object(n.useContext)(E),z=R.isFavorite,H=R.addFavorite,D=R.removeFavorite;Object(n.useEffect)((function(){m(!0),L().then((function(e){return N(e.find((function(e){return e.id===l})))})),U(l).then(g),L().then(C),setTimeout((function(){return m(!1)}),500)}),[l]),Object(n.useEffect)((function(){P(f&&f.imageUrl||"")}),[f]);if(i)return c.a.createElement(q,null);var W=f&&f.price-f.price*(f.discount/100);return c.a.createElement("div",{className:"item-page"},c.a.createElement($,{currentItemTitle:f&&f.name,type:f&&f.type}),c.a.createElement("section",{className:"item-description"},c.a.createElement("h3",{className:"item-description__title"},f&&f.name),c.a.createElement("div",{className:"item-description__main-block main-block"},c.a.createElement("div",{className:"gallery"},d&&d.images.map((function(e){return c.a.createElement("button",{className:"gallery__img-button",key:e,type:"button",onClick:function(e){return function(e){var a=e.target;P(a.src)}(e)}},c.a.createElement("img",{className:"gallery__img",src:e,alt:"galery"}))}))),c.a.createElement("div",{className:"main-block__img"},c.a.createElement("img",{src:A,alt:f&&f.name})),c.a.createElement("div",{className:"main-block__description"},c.a.createElement("span",{className:"item__price main-block__price"},c.a.createElement("p",{className:"item__price-discount"},"$".concat(W)),c.a.createElement("p",{className:"item__price-value"},f&&f.price===W?"":"$".concat(f&&f.price))),c.a.createElement("div",{className:"description item__description"},c.a.createElement(O,{title:"Screen",itemInfo:f&&f.screen}),c.a.createElement(O,{title:"Capacity",itemInfo:f&&f.capacity}),c.a.createElement(O,{title:"Ram",itemInfo:f&&f.ram})),c.a.createElement("div",{className:"item__button"},c.a.createElement("input",{className:w()("item__button-add-to-cart",{"item__button-add-to-cart-selected":f&&B(f)}),type:"button",value:f&&B(f)?"Added to cart":"Add to cart",onClick:function(){f&&B(f)?f&&I(f):f&&F(f)}}),c.a.createElement("label",{className:"item__button-favorite",htmlFor:"button-favorite-".concat(f&&f.id)},c.a.createElement("input",{className:"item__button-favorite-input",type:"checkbox",checked:f&&z(f),id:"button-favorite-".concat(f&&f.id),onChange:function(e){e.target.checked?f&&H(f):f&&D(f)}}),c.a.createElement("span",{className:"item__button-favorite-check"}))))),c.a.createElement("div",{className:"other-block"},c.a.createElement("div",{className:"other-block__description"},c.a.createElement("h4",{className:"other-block__article"},"About"),c.a.createElement("h4",{className:"other-block__article-description"},"And then there was Pro"),c.a.createElement("p",null,d&&d.description),c.a.createElement("h4",{className:"other-block__article-description"},"Camera"),c.a.createElement("p",null,d&&d.additionalFeatures),c.a.createElement("h4",{className:"other-block__article-description"},"Shoot it. Flip it. Zoom it. Tweak it. Love it"),c.a.createElement("p",null,"Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization \u2014 all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.")),c.a.createElement("div",{className:"other-block__specification"},c.a.createElement("h4",{className:"other-block__article"},"Tech specs"),c.a.createElement("div",{className:"description item__description"},c.a.createElement(O,{title:"OS",itemInfo:d&&(null===(a=d.android)||void 0===a?void 0:a.os)}),c.a.createElement(O,{title:"Hardware",itemInfo:d&&d.hardware.cpu}),c.a.createElement(O,{title:"Ram",itemInfo:f&&f.ram}),c.a.createElement(O,{title:"Display",itemInfo:d&&d.display.screenResolution}),c.a.createElement(O,{title:"Camera Primary",itemInfo:d&&d.camera.primary}),c.a.createElement(O,{title:"Camera Zoom",itemInfo:d&&(d.camera.zoom||"Not avaible")}),c.a.createElement(O,{title:"Battery",itemInfo:d&&(null===(t=d.battery)||void 0===t?void 0:t.type)}),c.a.createElement(O,{title:"Storage",itemInfo:d&&(null===(r=d.storage)||void 0===r?void 0:r.flash)}))))),c.a.createElement("section",{className:"item-page-slider"},c.a.createElement(M,{preparedPhones:j})))},W=(t(58),function(){var e=Object(n.useContext)(E).favorites;return c.a.createElement("div",{className:"favorite-page"},c.a.createElement("section",{className:"nav-location"},c.a.createElement(s.b,{to:"/",className:"nav-location__svg-home"},c.a.createElement("img",{src:"./img/home.svg",alt:"home"})),c.a.createElement("div",{className:"nav-location__svg-arrow"},c.a.createElement("img",{src:"./img/ArrowRightActive.svg",alt:"arrow"})),c.a.createElement(s.b,{to:"/phones",className:"nav-location__text nav-location__text-item nav-location__text-item-link"},"Favourites")),c.a.createElement("section",{className:"phones-page__article"},c.a.createElement("h2",{className:"phones-page__article-title"},"Favourites"),c.a.createElement("p",{className:"phones-page__article-count"},e.length," ","items")),c.a.createElement("section",{className:"favorite-page__produc-list"},c.a.createElement("ul",{className:"product-list"},e.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(S,{phone:e}))}))),0===e.length&&c.a.createElement("div",{className:"favorite-page__empty"})))}),G=(t(59),t(60),function(e){var a=e.item,t=Object(n.useContext)(h),r=t.removeFromCart,l=t.isAddedToCart,s=t.totalCount,o=t.setTotalCount,i=t.totalCost,m=t.setTotalCost,u=Object(n.useState)(1),E=Object(p.a)(u,2),_=E[0],d=E[1],g=Object(n.useState)(0),v=Object(p.a)(g,2),b=v[0],f=v[1];Object(n.useEffect)((function(){f(_*a.price)}),[_,a.price]);return c.a.createElement("div",{className:"cart-page__card"},c.a.createElement("div",{className:"cart-page__description"}),c.a.createElement("button",{onClick:function(){o(s-_),m(i-b),l(a)&&r(a)},type:"button",className:"cart-page__button-delete"},c.a.createElement("img",{src:"./img/closeNoActive.svg",alt:"item galery"})),c.a.createElement("img",{className:"cart-page__image",src:a.imageUrl,alt:"item"}),c.a.createElement("p",{className:"cart-page__text"},a.name),c.a.createElement("div",{className:"cart-page__action"},c.a.createElement("button",{type:"button",onClick:function(){d(_+1),o(s+1),m(i+a.price)},className:"cart-page__plus"},"+"),c.a.createElement("p",{className:"cart-page__counter"},_),c.a.createElement("button",{type:"button",onClick:function(){_>1&&(d(_-1),o(s-1),m(i-a.price))},className:"cart-page__minus"},"-"),c.a.createElement("p",{className:"cart-page__price"},"$",b)))}),J=function(){var e=Object(n.useContext)(h),a=e.itemInCart,t=e.setTotalCount,r=e.totalCount,l=e.setTotalCost,o=e.totalCost;return Object(n.useEffect)((function(){t(a.length),l(a.reduce((function(e,a){return e+a.price}),0))}),[]),c.a.createElement("div",{className:"cart-page"},c.a.createElement("section",{className:"back-link"},c.a.createElement(s.b,{to:"/",className:"nav-location__back-link"},c.a.createElement("img",{src:"./img/ArrowRightActive.svg",alt:"arrow",className:"back-link-arrow"}),c.a.createElement("p",{className:"back-link__text"},"Back"))),c.a.createElement("section",{className:"phones-page__article mt"},c.a.createElement("h2",{className:"phones-page__article-title"},"Cart")),c.a.createElement("section",{className:"cart-page__list"},c.a.createElement("ul",{className:"cart-page__cards"},a.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(G,{item:e}))}))),c.a.createElement("div",{className:"cart-page__buy-block buy-block"},c.a.createElement("p",{className:"buy-block__price"},"$",o),c.a.createElement("p",{className:"buy-block__count"},"Total for"," ",r," ","items"),c.a.createElement("span",{className:"buy-block__line"}),c.a.createElement("a",{href:"https://api.fondy.eu/s/sdrfHF5fPLzVET6",type:"button",className:"buy-block__button"},"Checkout"))))},X=(t(61),function(){var e=Object(o.f)(),a=Object(o.g)(),t=new URLSearchParams(a.search),n=t.get("sort")||"age";return c.a.createElement("div",{className:"select-for-sort"},c.a.createElement("span",{className:"select-for-sort__text"},"Sort by"),c.a.createElement("img",{src:"./img/ArrowRight.svg",alt:"arrow",className:"select-for-page__svg"}),c.a.createElement("select",{className:"select-for-sort__options",value:n,onChange:function(a){var n=a.target;t.set("sort",n.value),e.push({search:t.toString()})}},c.a.createElement("option",{value:"age"},"Newest"),c.a.createElement("option",{value:"name"},"Name"),c.a.createElement("option",{value:"price"},"Price")))}),Y=(t(62),function(e){var a=e.countPhones,t=Object(o.f)(),n=Object(o.g)(),r=new URLSearchParams(n.search),l=Number(r.get("perPage"))||a;return c.a.createElement("div",{className:"select-for-page"},c.a.createElement("span",{className:"select-for-page__text"},"Items on page"),c.a.createElement("img",{src:"./img/ArrowRight.svg",alt:"arrow",className:"select-for-page__svg"}),c.a.createElement("select",{className:"select-for-page__option",value:l,onChange:function(e){var n=e.target;r.set("perPage",n.value),t.push({search:r.toString()}),a===Number(n.value)&&(r.set("page","1"),t.push({search:r.toString()}))}},c.a.createElement("option",{value:a},"All"),c.a.createElement("option",{value:4},"4"),c.a.createElement("option",{value:8},"8"),c.a.createElement("option",{value:16},"16")))}),Z=(t(63),function(e){var a=e.preparedPhones;return c.a.createElement("ul",{className:"product-list"},a.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(S,{phone:e}))})))}),K=(t(64),function(e){var a=e.pageCount,t=Object(o.f)(),n=Object(o.g)(),r=new URLSearchParams(n.search),l=Number(r.get("page"))||1,s=function(e){var a=e.target;r.set("page",a.value),t.push({search:r.toString()})};return c.a.createElement("section",{className:"pagination"},c.a.createElement("button",{type:"button",onClick:function(){r.set("page","".concat(l-1)),t.push({search:r.toString()})},disabled:1===l,className:w()("pagination__button","pagination__button-left",{disabled:1===l})},1===l?c.a.createElement("img",{src:"./img/ArrowRight.svg",alt:"arrow",className:"pagination__arrow"}):c.a.createElement("img",{src:"./img/ArrowRightActive.svg",alt:"arrow",className:"pagination__arrow"})),Object(u.a)(Array(a)).map((function(e,a){return a+1})).map((function(e){return c.a.createElement("input",{key:e,onClick:s,type:"button",className:w()("pagination__button","pagination__button-page",{"pagination__button-page-active":e===l}),value:e})})),c.a.createElement("button",{type:"button",disabled:l>a-1,onClick:function(){r.set("page","".concat(l+1)),t.push({search:r.toString()})},className:w()("pagination__button","pagination__button-right",{disabled:l>a-1})},l>a-1?c.a.createElement("img",{src:"./img/ArrowRight.svg",alt:"next"}):c.a.createElement("img",{src:"./img/ArrowRightActive.svg",alt:"next"})))}),V=(t(65),function(){return c.a.createElement("section",{className:"error-page"},c.a.createElement("div",{className:"page-bg"}),c.a.createElement("div",{className:"animation-wrapper"},c.a.createElement("div",{className:"particle particle-1"}),c.a.createElement("div",{className:"particle particle-2"}),c.a.createElement("div",{className:"particle particle-3"}),c.a.createElement("div",{className:"particle particle-4"})),c.a.createElement("div",{className:"page-wrapper"},c.a.createElement("h4",{className:"error-page-text"},"Item Not Found")))}),Q=(t(66),{tablets:"/tablets",phones:"/phones",accessories:"/accessories"}),ee=function(e){var a=e.location,t=e.match,r=Object(n.useState)([]),l=Object(p.a)(r,2),o=l[0],i=l[1],m=Object(n.useState)(!0),u=Object(p.a)(m,2),E=u[0],_=u[1],d=Object(n.useState)([]),h=Object(p.a)(d,2),g=h[0],v=h[1],b=Object(n.useState)(""),f=Object(p.a)(b,2),N=f[0],y=f[1],k=new URLSearchParams(a.search),w=k.get("query")||"",j=k.get("sort")||"",C=Number(k.get("page"))||1,O=Number(k.get("perPage"))||o.length,S=(C-1)*O,A=Math.ceil(o.length/O)||1,P=w.toLowerCase();Object(n.useEffect)((function(){switch(t.path){case Q.tablets:y(x.tablet);break;case Q.phones:y(x.phone);break;case Q.accessories:y(x.accessories);break;default:y(x.phone)}}),[t,a]);if(Object(n.useEffect)((function(){L().then((function(e){return i(e.filter((function(e){return e.type===N})))})).catch((function(){return c.a.createElement(V,null)})),setTimeout((function(){return _(!1)}),500)}),[N]),Object(n.useEffect)((function(){var e=o.filter((function(e){return e.name.toLowerCase().includes(P)}));switch(j){case"price":v(e.sort((function(e,a){return e.price-a.price})));break;case"name":v(e.sort((function(e,a){return e.name.localeCompare(a.name)})));break;default:v(e.sort((function(e,a){return e.age-a.age})))}}),[o,w,j,O,P]),0===o.length&&!E)return c.a.createElement(V,null);""!==w&&(A=Math.ceil(g.length/O));var T=g.slice(S,S+O);return E?c.a.createElement(q,null):c.a.createElement("div",{className:"phones-page"},c.a.createElement("section",{className:"nav-location"},c.a.createElement(s.b,{to:"/",className:"nav-location__svg-home"},c.a.createElement("img",{src:"./img/home.svg",alt:"home"})),c.a.createElement("div",{className:"nav-location__svg-arrow"},c.a.createElement("img",{src:"./img/ArrowRightActive.svg",alt:"arrow"})),c.a.createElement("p",{className:"nav-location__text"},(N===x.phone?"Phones":N===x.tablet&&"Tablets")||N===x.accessories&&"Accesories")),c.a.createElement("section",{className:"phones-page__article"},c.a.createElement("h2",{className:"phones-page__article-title"},(N===x.phone?"Mobile phones":N===x.tablet&&"Tablets")||N===x.accessories&&"Accesories"),c.a.createElement("p",{className:"phones-page__article-count"},""===w?"".concat(o.length," models"):"Find ".concat(g.length," models"))),c.a.createElement("section",{className:"phones-page__sortBy"},c.a.createElement(X,null),c.a.createElement(Y,{countPhones:o.length})),c.a.createElement(Z,{preparedPhones:T}),c.a.createElement(K,{pageCount:A}))},ae=t(31),te=(t(82),function(e){var a=Object(n.useState)("30%"),t=Object(p.a)(a,2),r=t[0],l=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,{handleWidth:!0,onResize:function(e){e>=620?l("30%"):e<620&&l("50%")}}),c.a.createElement(ae.fallDown,Object.assign({},e,{disableAutoFocus:!0,width:r}),c.a.createElement("ul",null,c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.b,{className:"nav__link-side-bar hover-shadow hover-color animated nav__link-mobile",to:"/"},c.a.createElement("span",null,"H"),c.a.createElement("span",null,"o"),c.a.createElement("span",null,"m"),c.a.createElement("span",null,"e"))),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.b,{className:"nav__link-side-bar hover-shadow hover-color animated nav__link-mobile",to:"/phones"},c.a.createElement("span",null,"P"),c.a.createElement("span",null,"h"),c.a.createElement("span",null,"o"),c.a.createElement("span",null,"n"),c.a.createElement("span",null,"e"),c.a.createElement("span",null,"s"))),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.b,{className:"nav__link-side-bar hover-shadow hover-color animated nav__link-mobile",to:"/tablets"},c.a.createElement("span",null,"T"),c.a.createElement("span",null,"a"),c.a.createElement("span",null,"b"),c.a.createElement("span",null,"l"),c.a.createElement("span",null,"e"),c.a.createElement("span",null,"t"),c.a.createElement("span",null,"s"))),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.b,{className:"nav__link-side-bar hover-shadow hover-color animated nav__link-mobile",to:"/accessories"},c.a.createElement("span",null,"A"),c.a.createElement("span",null,"c"),c.a.createElement("span",null,"c"),c.a.createElement("span",null,"e"),c.a.createElement("span",null,"s"),c.a.createElement("span",null,"s"),c.a.createElement("span",null,"o"),c.a.createElement("span",null,"r"),c.a.createElement("span",null,"i"),c.a.createElement("span",null,"e"),c.a.createElement("span",null,"s"))),c.a.createElement("li",{className:"nav__item"},c.a.createElement("a",{className:"nav__link-side-bar hover-shadow hover-color animated nav__link-mobile",href:"https://github.com/ShapovalDenys?tab=repositories"},c.a.createElement("span",null,"G"),c.a.createElement("span",null,"i"),c.a.createElement("span",null,"t"),c.a.createElement("span",null,"h"),c.a.createElement("span",null,"u"),c.a.createElement("span",null,"b"))),c.a.createElement("li",{className:"nav__item"},c.a.createElement("a",{className:"nav__link-side-bar hover-shadow hover-color animated nav__link-mobile",href:"https://www.linkedin.com/in/denys-shapoval-831a74143/"},c.a.createElement("span",null,"C"),c.a.createElement("span",null,"o"),c.a.createElement("span",null,"n"),c.a.createElement("span",null,"t"),c.a.createElement("span",null,"a"),c.a.createElement("span",null,"c"),c.a.createElement("span",null,"t"),c.a.createElement("span",null,"s"))),c.a.createElement("li",{className:"nav__item"},c.a.createElement("a",{className:"nav__link-side-bar hover-shadow hover-color animated nav__link-mobile",href:"https://ru.wikipedia.org/wiki/All_rights_reserved"},c.a.createElement("span",null,"r"),c.a.createElement("span",null,"i"),c.a.createElement("span",null,"g"),c.a.createElement("span",null,"h"),c.a.createElement("span",null,"t"),c.a.createElement("span",null,"s"))))))}),ne=function(){return c.a.createElement("div",{className:"App",id:"App"},c.a.createElement(_,null,c.a.createElement(g,null,c.a.createElement("div",{className:"sidebar"},c.a.createElement(te,{outerContainerId:"App",pageWrapId:"wrapper"})),c.a.createElement("div",{id:"wrapper"},c.a.createElement(y,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",exact:!0,component:z}),c.a.createElement(o.a,{path:"/phones",exact:!0,component:ee}),c.a.createElement(o.a,{path:"/tablets",exact:!0,component:ee}),c.a.createElement(o.a,{path:"/accessories",exact:!0,component:ee}),c.a.createElement(o.a,{path:"/phones/:item?",exact:!0,render:function(e){var a=e.match;return c.a.createElement(D,{currentItem:a.params.item})}}),c.a.createElement(o.a,{path:"/tablets/:item?",exact:!0,render:function(e){var a=e.match;return c.a.createElement(D,{currentItem:a.params.item})}}),c.a.createElement(o.a,{path:"/accessories/:item?",exact:!0,render:function(e){var a=e.match;return c.a.createElement(D,{currentItem:a.params.item})}}),c.a.createElement(o.a,{path:"/favorite",exact:!0,component:W}),c.a.createElement(o.a,{path:"/cart",exact:!0,component:J})),c.a.createElement(H,null)))))};l.a.render(c.a.createElement(s.a,null,c.a.createElement(ne,null)),document.getElementById("root"))}]),[[33,1,2]]]);
//# sourceMappingURL=main.d8197969.chunk.js.map