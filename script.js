var circle=document.querySelector(".circle");



//on mouse enter
circle.addEventListener("mousemove",(details)=>{

let insidecircle=circle.getBoundingClientRect();//all details of rectangele
let mouseposition=details.clientX;//mouse position inside the circle
let mycurrentlocation=mouseposition-insidecircle.left;//current location of mouse inside 
let middleofcircle=circle.getBoundingClientRect().width/2;//middle of circle


if(mycurrentlocation<middleofcircle){

    let redColor=gsap.utils.mapRange(0,middleofcircle,255,0,mycurrentlocation);//used maprange function of gsap
    gsap.to(circle,{
        backgroundColor:`rgb(${redColor},0,0)`,
         ease:Power4
    })
    

}
 else {

    let blueColor=gsap.utils.mapRange(middleofcircle,insidecircle.width,0,255,mycurrentlocation);//used map range function of gsap
    gsap.to(circle,{
        backgroundColor:`rgb(0,0,${blueColor})`,
        ease:Power4
    })
    

}
})

//on mouse leave 
circle.addEventListener("mouseleave",()=>{
  gsap.to(circle,{
    backgroundColor:`rgba(0,0,0,0)`,
  })
})