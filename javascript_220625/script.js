function randomcolor(){
    let val1 = Math.ceil(0+Math.random()*255);
    let val2 =  Math.ceil(0+Math.random()*255);
    let val3 =  Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}
document.querySelector(".container").addEventListener("click" , (e) => {
    e.stopPropagation()
    alert("Container was Clicked")
    e.target.style.backgroundColor=randomcolor()
    
})
document.querySelector(".box").addEventListener("click" , (e) => {
    e.stopPropagation()
    alert("middlebox was Clicked")
    e.target.style.backgroundColor=randomcolor()
    
})
document.querySelector(".box1").addEventListener("click" , (e) => {
    e.stopPropagation()
    alert("Inner box was clicked")
    e.target.style.backgroundColor=randomcolor()    
})
