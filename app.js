const number = document.querySelectorAll(".number span")
const btn = document.querySelector(".btn")
const rate = document.querySelector(".rate")
const middle = document.querySelector(".Middle")
const thankyou = document.querySelector(".thankyou")

let rates = null;


number.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        const active = document.querySelector(".checked")
        if(active){
            active.classList.remove("checked");
        }
        const card = e.target;
        card.classList.add("checked")
        rates = e.target.innerText;
        console.log(rates)
    })
})

btn.addEventListener("click",()=>{
    if(rate){
        rate.innerText = rates;
        middle.classList.add("hidden")
        thankyou.classList.remove("hidden")
    }
})