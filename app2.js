let img=document.querySelectorAll('.tong img')
// console.log(img)
let trai=document.querySelector('.left')
let phai=document.querySelector('.right')
let tong=document.querySelector('.tong')
// console.log(tong)
let sliderindex=1
let interval=setInterval(run,1000)
trai.addEventListener("click",function(){
    sliderindex--
    sliderimg()
    reset()
})
phai.addEventListener("click",function(){
    sliderindex++
    sliderimg()
    reset()
})
function sliderimg(){
    if(sliderindex>img.length){
        sliderindex=1
    }
    else if(sliderindex<1){
        sliderindex=img.length
    }
    tong.style.transform=`translateX( ${-(sliderindex-1)*1309.5}px)`
}
function reset(){
    clearInterval(interval)
    interval=setInterval(run,1000)
}
function run(){
    sliderindex++
    sliderimg()
}