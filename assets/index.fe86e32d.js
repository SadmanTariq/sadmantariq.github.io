import{o as e,c as t,a as s,n as a,u as i,t as r,b as l,r as o,F as c,d as n,w as u,e as d,f as m}from"./vendor.e32660e3.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const p={},g={class:"flex flex-row flex-wrap gap-8 justify-center pt-24 pb-12"},f=[s("img",{src:"/assets/logo_512.7004bfa0.png",alt:"",class:"rounded-full border-32 border-dark h-32 w-32 my-auto"},null,-1),s("h1",{class:"text-center text-dark text-7xl my-auto"},"Sadman Tariq",-1)];p.render=function(s,a){return e(),t("div",g,f)};const h=["href"],x={key:0,class:"fas fa-link ml-1"},w={props:{lightBg:Boolean,title:String,href:String},setup(n){const u=n,d=u.lightBg?"bg-light":"bg-dark",m=u.lightBg?"text-dark":"text-light";return(u,p)=>(e(),t(c,null,[n.title?(e(),t("div",{key:0,class:a(`px-3 rounded-t-md shadow-md ${i(d)} ${i(m)} max-w-max text-lg`)},[s("a",{href:n.href,target:"_blank"},[s("span",{class:a(n.href?"underline":"")},r(n.title.toUpperCase()),3),n.href?(e(),t("i",x)):l("",!0)],8,h)],2)):l("",!0),s("div",{class:a(`rounded-tr-md shadow-md ${i(d)} ${i(m)}`)},[o(u.$slots,"default")],2)],64))}},b=["href"],q=[s("svg",{class:"fill-current text-light h-8 w-8 m-auto",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"438.549px",height:"438.549px",viewBox:"0 0 438.549 438.549",style:{"enable-background":"new 0 0 438.549 438.549"},"xml:space":"preserve"},[s("g",null,[s("path",{d:"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365\n        c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63\n        c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996\n        c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136\n        c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559\n        c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559\n        c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997\n        c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851\n        c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136\n        c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41\n        c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126\n        c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817\n        c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994\n        c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849\n        c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24\n        c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979\n        c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146\n        c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995\n        c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906\n        C438.536,184.851,428.728,148.168,409.132,114.573z"})])],-1)],v={props:{href:String},setup:s=>(a,i)=>(e(),t("a",{href:s.href,target:"_blank",class:"fixed right-0 bg-dark p-3 m-2 text-xl text-light rounded-2xl shadow-lg"},q,8,b))},y={class:"lg:max-w-5xl md:max-w-3xl md:mx-auto"},k=s("div",{class:"p-3 flex flex-wrap sm:flex-nowrap"},[s("img",{src:"/assets/KoalaS_512.693c0531.png",alt:"KoalaSDevs logo",class:"border-8 border-light w-1/2 my-4 mx-auto rounded-xl p-2\n               sm:w-24 sm:h-24 sm:m-2"}),d(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam eaque ullam reprehenderit deleniti ad cumque est fuga, eos, enim qui optio iste dolorem eum sed totam laudantium? Facilis doloribus necessitatibus ipsa quo. Beatae recusandae, maxime commodi aspernatur, cumque praesentium temporibus, soluta quos ducimus suscipit aliquid tenetur quidem tempore quisquam repudiandae? ")],-1),S=s("div",{class:"p-3"}," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam eaque ullam reprehenderit deleniti ad cumque est fuga, eos, enim qui optio iste dolorem eum sed totam laudantium? Facilis doloribus necessitatibus ipsa quo. Beatae recusandae, maxime commodi aspernatur, cumque praesentium temporibus, soluta quos ducimus suscipit aliquid tenetur quidem tempore quisquam repudiandae? ",-1);m({setup:a=>(a,i)=>(e(),t(c,null,[n(v,{href:"https://github.com/sadmantariq/sadmantariq.github.io/"}),n(p),s("div",y,[n(w,{title:"KoalaSDevs",href:"https://koalasdevs.itch.io/"},{default:u((()=>[k,n(w,{"light-bg":"",title:"Asdffdas"},{default:u((()=>[S])),_:1})])),_:1})])],64))}).mount("#app");