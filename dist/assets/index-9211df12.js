(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const w="/assets/javascript-8dac5379.svg",N="/vite.svg",P=`<div class="modal-dialog">\r
    <form novalidate>\r
        <span>User</span>\r
        <input type="text" name="firstName" placeholder="First Name" />\r
        <input type="text" name="lastName" placeholder="Last Name" />\r
        <input type="number" name="balance" placeholder="Balance" />\r
\r
        <div>\r
            <input type="checkbox" id="is-active" name="isActive" checked/>\r
            <label for="is-active">is active?</label>\r
        </div>\r
\r
        <button type="submit">\r
            Save\r
        </button>\r
\r
    </form>\r
</div>`;class y{constructor({id:t,isActive:r,balance:a,avatar:s,firstName:n,lastName:c,gender:m}){this.id=t,this.isActive=r,this.balance=a,this.avatar=s,this.firstName=n,this.lastName=c,this.gender=m}}const h=e=>{const{avatar:t,balance:r,first_name:a,gender:s,id:n,isActive:c,last_name:m}=e;return new y({avatar:t,balance:r,firstName:a,gender:s,id:n,isActive:c,lastName:m})},T=async e=>{const t=`http://localhost:3001/users/${e}`,a=await(await fetch(t)).json();return h(a)};let i,d,p={};const b=async e=>{if(i==null||i.classList.remove("hide-modal"),p={},!e)return;const t=await T(e);$(t)},v=()=>{i==null||i.classList.add("hide-modal"),d==null||d.reset()},$=e=>{d.querySelector('[name="firstName"]').value=e.firstName,d.querySelector('[name="lastName"]').value=e.lastName,d.querySelector('[name="balance"]').value=e.balance,d.querySelector('[name="isActive"]').checked=e.isActive,p=e},E=(e,t)=>{i||(i=document.createElement("div"),i.innerHTML=P,i.className="modal-container hide-modal",d=i.querySelector("form"),i.addEventListener("click",r=>{r.target.className==="modal-container"&&v()}),d.addEventListener("submit",async r=>{r.preventDefault();const a=new FormData(d),s={...p};for(const[n,c]of a){if(n==="balance"){s[n]=+c;continue}if(n==="isActive"){s[n]=c==="on";continue}s[n]=c}await t(s),v()}),e.append(i))};const S=e=>{const t=document.createElement("button");t.innerText="+",t.classList.add("fab-button"),e.append(t),t.addEventListener("click",()=>{b()})},f=async(e=1)=>{const t=`http://localhost:3001/users?_page=${e}`;return(await(await fetch(t)).json()).data.map(h)},o={currentPage:0,users:[]},A=async()=>{const e=await f(o.currentPage+1);e.length!==0&&(o.currentPage+=1,o.users=e,console.log(e))},L=async()=>{if(o.currentPage===1)return;const e=await f(o.currentPage-1);o.currentPage-=1,o.users=e},U=async e=>{let t=!1;o.users=o.users.map(r=>r.id===e.id?(t=!0,e):r),o.users.length>10&&!t&&o.users.push(e)},x=async()=>{const e=await f(o.currentPage);if(e.length===0){await L();return}o.users=e},l={loadNextPage:A,loadPreviousPage:L,onUserChanged:U,reloadPage:x,getUsers:()=>[...o.users],getCurrentPage:()=>o.currentPage},M=async e=>{const t=`http://localhost:3001/users/${e}`,a=await(await fetch(t,{method:"DELETE"})).json();return console.log({deleteResult:a}),!0};let u;const B=()=>{const e=document.createElement("table"),t=document.createElement("thead");t.innerHTML=`
    <tr>
    <th>#ID</th>
    <th>Balance</th>
    <th>FirsName</th>
    <th>LastName</th>
    <th>Active</th>
    <th>Actions</th>
    </tr>
    `;const r=document.createElement("tbody");return e.append(t,r),e},q=e=>{const t=e.target.closest(".select-user");if(!t)return;const r=t.getAttribute("data-id");b(r)},H=async e=>{const t=e.target.closest(".delete-user");if(!t)return;const r=t.getAttribute("data-id");try{await M(r),await l.reloadPage(),document.querySelector("#current-page").innerText=l.getCurrentPage(),g()}catch(a){console.log(a),alert("No se pudo eliminar")}},g=e=>{const t=l.getUsers();u||(u=B(),e.append(u),console.log("1"),u.addEventListener("click",q),u.addEventListener("click",H));let r="";t.forEach(a=>{r+=`
    <tr>
        <td>${a.id}</td>
        <td>${a.balance}</td>
        <td>${a.firstName}</td>
        <td>${a.lastName}</td>
        <td>${a.isActive}</td>
        <td>
        <a href="#/" class="select-user" data-id="${a.id}">Select</a>
        |
        <a href="#/" class="delete-user" data-id="${a.id}">Delete</a>
    </td>
    </tr>    `}),u.querySelector("tbody").innerHTML=r};const j=e=>{const t=document.createElement("button");t.innerText=" Next >";const r=document.createElement("button");r.innerText="< Prev ";const a=document.createElement("span");a.id="current-page",a.innerText=l.getCurrentPage(),e.append(r,a,t),t.addEventListener("click",async()=>{await l.loadNextPage(),a.innerText=l.getCurrentPage(),g(e)}),r.addEventListener("click",async()=>{await l.loadPreviousPage(),a.innerText=l.getCurrentPage(),g(e)})},C=e=>{const{avatar:t,balance:r,firstName:a,gender:s,id:n,isActive:c,lastName:m}=e;return{avatar:t,balance:r,first_name:a,gender:s,id:n,isActive:c,last_name:m}},O=async e=>{const t=new y(e);if(!t.firstName||!t.lastName)throw new Error("Nombre y apellidos requeridos");const r=C(t);let a;return t.id?a=await D(r):a=await k(r),h(a)},k=async e=>{const a=await(await fetch("http://localhost:3001/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json();return console.log({newUser:a}),a},D=async e=>{const t=`http://localhost:3001/users/${e.id}`,a=await(await fetch(t,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json();return console.log({updateUser:a}),a},_=async e=>{e.innerHTML=" Loading...",await l.loadNextPage(),e.innerHTML="",g(e),j(e),S(e),E(e,async t=>{const r=await O(t);console.log(r),l.onUserChanged(r),g()})};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${N}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${w}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
      
    </div>

  </div>
`;const F=document.querySelector(".card");_(F);
