var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},t={},o=e.parcelRequire4c75;null==o&&((o=function(e){if(e in l)return l[e].exports;if(e in t){var o=t[e];delete t[e];var a={id:e,exports:{}};return l[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,l){t[e]=l},e.parcelRequire4c75=o);var a=o("kEUo3");const n=document.querySelector(".feedback-form"),r=document.querySelector("button"),s=(0,a.throttle)((e=>(e=>{localStorage.setItem("feedback-form-state",JSON.stringify(e))})(e)),500);n.addEventListener("input",(e=>{const{elements:{email:l,message:t}}=e.currentTarget,o={email:l.value,message:t.value};s(o)}));let i,c=localStorage.getItem("feedback-form-state");try{i=JSON.parse(c)}catch{console.log("")}i?(n.elements.email.value=i.email,n.elements.message.value=i.message):console.log("Please fill in the form fields"),r.addEventListener("click",(e=>{e.preventDefault(),console.log("email:",n.elements.email.value),console.log("message:",n.elements.message.value),console.log(c),n.reset(),localStorage.clear()}));
//# sourceMappingURL=03-feedback.8c4d5100.js.map
