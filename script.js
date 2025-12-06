let click = document.getElementById("click")
click.addEventListener("click", ()=>{
    alert("เป้าหมายสูงสุดของผม ผมอยากเข้าคณะ it ของสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง ผมอยากเป็นลูกพระจอมครับ!!!!")
})
// เปลี่ยนธีม
const background = document.getElementsByClassName("background")
console.log(background)

let theme = "dark"
let click1 = document.getElementById("click1")
click1.addEventListener("click", ()=>{
    if(theme == "dark") {
        background[0].style.backgroundImage = "url(white-color-background.jpg)"
        theme = "light"
    }
    else {
        background[0].style.backgroundImage = "url(rgb-background.jpg)"
        theme = "dark"
    }
})

