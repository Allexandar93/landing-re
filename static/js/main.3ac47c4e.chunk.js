(this["webpackJsonplanding-page"]=this["webpackJsonplanding-page"]||[]).push([[0],{20:function(e,c,s){},21:function(e,c,s){},22:function(e,c,s){},24:function(e,c,s){},28:function(e,c,s){},29:function(e,c,s){},30:function(e,c,s){},31:function(e,c,s){},32:function(e,c,s){},33:function(e,c,s){},34:function(e,c,s){},35:function(e,c,s){"use strict";s.r(c);var t=s(2),a=s.n(t),i=s(12),n=s.n(i),o=(s(20),s(21),s(3)),l=s(4),r=(s(22),s(1));var j=function(){return Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)("p",{className:"home__p",children:"Find your dream house"}),Object(r.jsx)(l.b,{className:"home__btn",to:"/home",children:"Start searching"})]})},d=s(6),b=(s(24),s(13)),m=s(7);var h=function(e){var c=e.toggle;return Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)("div",{className:"navbar__logo",children:Object(r.jsx)(m.a,{smooth:!0,to:"#products",children:"AZ Villas"})}),Object(r.jsxs)("div",{className:"navbar__menu",children:[Object(r.jsx)(m.a,{smooth:!0,to:"#about",children:"About"}),Object(r.jsx)("p",{children:Object(r.jsx)(m.a,{smooth:!0,to:"#products",children:"Homes"})}),Object(r.jsx)("p",{children:Object(r.jsx)(m.a,{smooth:!0,to:"#reviews",children:"Reviews"})})]}),Object(r.jsx)(b.a,{onClick:c,className:"navbar__icon"}),Object(r.jsx)("div",{className:"navbar__contact",children:Object(r.jsx)("button",{className:"contactBtn",children:Object(r.jsx)(l.b,{className:"contactBtnTxt",to:"/contact",children:"CONTACT US"})})})]})},u=(s(28),s(29),s(8));var x=function(e){var c=e.slides,s=Object(t.useState)(0),a=Object(d.a)(s,2),i=a[0],n=a[1],o=c.length,l=Object(t.useRef)(null);return Object(t.useEffect)((function(){return l.current=setTimeout((function(){n((function(e){return e===o-1?0:e+1}))}),3e3),function(){l.current&&clearTimeout(l.current)}}),[i,o]),!Array.isArray(c)||c.length<=0?null:Object(r.jsxs)("div",{className:"slider",children:[c.map((function(e,c){return Object(r.jsx)("div",{className:"slide",children:c===i&&Object(r.jsxs)("div",{className:"sliderSec",children:[Object(r.jsx)("img",{src:e.image,className:"slider__image"}),Object(r.jsxs)("div",{className:"slide__content",children:[Object(r.jsxs)("h1",{children:["Luxury villa in ",Object(r.jsx)("span",{children:e.location})," "]}),Object(r.jsxs)("p",{children:[" ",e.price," "]}),Object(r.jsx)("button",{className:"slide__contentBtn",children:"View Home"})]})]})},c)})),Object(r.jsxs)("div",{className:"slider__btns",children:[Object(r.jsx)(u.b,{onClick:function(){n(0===i?o-1:i-1),console.log(i)},className:"buttons"}),Object(r.jsx)(u.c,{onClick:function(){n(i===o-1?0:i+1),console.log(i)},className:"buttons"})]})]})},O=[{location:"LA",price:"$5,280,000",path:"/homes",label:"View Home",image:s.p+"static/media/villa1.32879e06.jpg",alt:"House"},{location:"California",price:"$4,350,000",path:"/homes",label:"View Home",image:s.p+"static/media/villa2.e8336e79.jpg",alt:"House"},{location:"Bali",price:"$3,400,000",path:"/homes",label:"View Home",image:s.p+"static/media/villa3.c4817440.jpg",alt:"House"},{location:"San Diego",price:"$5,280,000",path:"/homes",label:"View Home",image:s.p+"static/media/villa4.76ebb4d7.jpg",alt:"House"}];var p=function(){return Object(r.jsx)("div",{className:"heroSection",children:Object(r.jsx)(x,{slides:O})})};s(30),s(31);var v=function(){return Object(r.jsxs)("div",{className:"about",id:"about",children:[Object(r.jsxs)("div",{className:"about__sections",children:[Object(r.jsx)("h2",{children:"Safe Living"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(r.jsx)("button",{children:"Buy Now"})]}),Object(r.jsxs)("div",{className:"about__sections",children:[Object(r.jsx)("h2",{children:"Peacfull Locations"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(r.jsx)("button",{children:"Buy Now"})]}),Object(r.jsxs)("div",{className:"about__sections",children:[Object(r.jsx)("h2",{children:"Great Prices"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(r.jsx)("button",{children:"Buy Now"})]})]})},N=(s(32),s(14));var _=function(e){var c=e.closed,s=e.toggle;return Object(r.jsxs)("div",{className:"dropdown__container ".concat(c?"display":"opacity"),closed:c,onClick:s,children:[Object(r.jsx)("div",{className:"dropdown__icon",onClick:s,children:Object(r.jsx)(N.a,{className:"dropdown__iconX"})}),Object(r.jsxs)("div",{className:"dropdown__wrapper",children:[Object(r.jsx)(m.a,{className:"dropdown__links",smooth:!0,to:"#about",children:"About"}),Object(r.jsx)(m.a,{className:"dropdown__links",smooth:!0,to:"#products",children:"Homes"}),Object(r.jsx)(m.a,{className:"dropdown__links",smooth:!0,to:"#reviews",children:"Reviews"}),Object(r.jsx)("button",{className:"dropdrown__wrapperBtn",children:Object(r.jsx)(l.b,{className:"dropdrown__wrapperBtnTxt",to:"/contact",children:"CONTACT US"})})]})]})},g=(s(33),s.p+"static/media/john.56846be6.jpg"),f=s(9);var w=function(){return Object(r.jsxs)("div",{className:"reviews",id:"reviews",children:[Object(r.jsxs)("div",{className:"reviewWrapper",children:[Object(r.jsxs)("div",{className:"reviews__costumers",children:[Object(r.jsx)("img",{className:"john",src:g,alt:""}),Object(r.jsxs)("div",{className:"text",children:[Object(r.jsxs)("div",{className:"nameAndStars",children:[Object(r.jsx)("div",{className:"name",children:"John Smith"}),Object(r.jsxs)("div",{className:"stars",children:[Object(r.jsx)(f.a,{}),Object(r.jsx)(f.a,{}),Object(r.jsx)(f.a,{}),Object(r.jsx)(f.a,{}),Object(r.jsx)(f.a,{})]})]}),Object(r.jsx)("div",{className:"comment",children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.""'})]})]}),Object(r.jsx)("div",{className:"moreReviews",children:Object(r.jsxs)("p",{children:["Read ",Object(r.jsx)("a",{href:"#",children:"9,000+"})," more reviews"," "]})})]}),Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsxs)("div",{className:"footer_contact",children:[Object(r.jsxs)("div",{className:"footer_contactSocials",children:[Object(r.jsx)("h3",{children:"AZ VILLAS"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(r.jsxs)("div",{className:"footer_contactSocialsIcons",children:[Object(r.jsx)(u.a,{}),Object(r.jsx)(u.d,{})]})]}),Object(r.jsxs)("div",{className:"footer_contactAdresses",children:[Object(r.jsx)("h3",{children:"Contact us"}),Object(r.jsx)("p",{children:"98-54687-878"}),Object(r.jsx)("p",{children:"azvillas@villas.com"}),Object(r.jsx)("p",{children:"New York, US"})]})]}),Object(r.jsx)("div",{className:"copyright",children:"\xa9 2021 AZ Villas, All Rights Reserved"})]})]})};var S=function(){var e=Object(t.useState)(!0),c=Object(d.a)(e,2),s=c[0],a=c[1],i=function(){a(!s)};return Object(r.jsxs)("div",{className:"products",id:"products",children:[Object(r.jsx)(h,{toggle:i}),Object(r.jsx)(_,{closed:!s,toggle:i}),Object(r.jsx)(p,{slides:O}),Object(r.jsx)("div",{className:"sections",children:Object(r.jsx)(v,{path:"/about"})}),Object(r.jsx)("div",{className:"sections",children:Object(r.jsx)(w,{})})]})},k=(s(34),s(15)),L=s.p+"static/media/contact.21d1f5f8.jpg";var y=function(){return Object(r.jsxs)("div",{className:"contact",children:[Object(r.jsx)("div",{className:"contact__back",children:Object(r.jsx)(l.b,{className:"contact__backLink",to:"/home",children:Object(r.jsx)(k.a,{})})}),Object(r.jsxs)("div",{className:"contact__container",children:[Object(r.jsx)("div",{className:"image_container",children:Object(r.jsx)("img",{className:"contactImg",src:L,alt:""})}),Object(r.jsxs)("div",{className:"form_container",children:[Object(r.jsx)("h2",{children:"Want to work together? Send us an email"}),Object(r.jsxs)("div",{className:"form-containerLabels",children:[Object(r.jsx)("label",{className:"label",htmlFor:"name",children:"Name"}),Object(r.jsx)("input",{className:"input",type:"text"})]}),Object(r.jsxs)("div",{className:"form-containerLabels",children:[Object(r.jsx)("label",{className:"label",htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{className:"input",type:"email"})]}),Object(r.jsxs)("div",{className:"form-containerLabels",children:[Object(r.jsx)("label",{className:"label",htmlFor:"comment",children:"How can we help you?"}),Object(r.jsx)("textarea",{name:"",id:"",cols:"20",rows:"10"})]}),Object(r.jsx)("button",{children:"SUBMIT"})]})]})]})};var A=function(){return Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{path:"/",element:Object(r.jsx)(j,{})}),Object(r.jsx)(o.a,{path:"/home",element:Object(r.jsx)(S,{})}),Object(r.jsx)(o.a,{path:"/contact",element:Object(r.jsx)(y,{})})]})};n.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(l.a,{children:Object(r.jsx)(A,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.3ac47c4e.chunk.js.map