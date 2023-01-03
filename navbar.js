const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")

window.addEventListener('click', function(e){
    // e.preventDefault()
    console.log(e.target.id)
    if(e.target.id == "menu1"){
        div1.classList.toggle("menu-icerik")
    }else if(e.target.id == "menu2"){
        div2.classList.toggle("menu-icerik")
    }
})