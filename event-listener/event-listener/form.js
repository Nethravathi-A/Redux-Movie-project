


// document.addEventListener("DOMContentLoaded",init);

// function init(){
//     var mainDiv =  document.getElementById("main_div");
// var childElement = document.getElementById("child");

// mainDiv.addEventListener("click",clickFuncHandler);
// childElement.addEventListener("click",clickFuncHandler);

// function clickFuncHandler(evt){
//     console.log("*****************************************************")
//     console.log("target :",evt.target,"currentTarget :",evt.currentTarget)
// }
// }

// *****************************************************************************  //


// var dateBtn = document.getElementById('date_btn');

// dateBtn.addEventListener("click", displayDate);

// function displayDate() {
//   document.getElementById("show_date").innerHTML = `<b>${Date()}</b>`;
// }


// *****************************************************************************  //


// var showDiv=document.getElementById("show_msg");
// showDiv.addEventListener('click',function(){
//     alert("hello")
// })

// *****************************************************************************  //

// var btn = document.getElementById("multiple_events");
// btn.addEventListener("mouseover", mouseOverFunc);
// btn.addEventListener("mouseout", mouseOutFunc);

// btn.addEventListener('click',function(){
//     document.getElementById("show_event").innerHTML +="btn clicked!!! <br>"

// });
// function mouseOverFunc(){
//     document.getElementById("show_event").innerHTML +="mouse over evnt!!! <br>"

// }
// function mouseOutFunc(){
//     document.getElementById("show_event").innerHTML +="mouse out evnt!!! <br>"

// }


// *****************************************************************************  //

// window.addEventListener("resize", function(){
//     document.getElementById("show_msg").innerHTML = Math.random();
//     console.log(window.screen)
// });




// *****************************************************************************  //
// var inputElement = document.getElementById("input_id");
// inputElement.addEventListener('input',showInputChange);
// function showInputChange(e){
// console.log(e.currentTarget.value)
// }

// *****************************************************************************  //
// var inputElement = document.getElementById("input_id");
// inputElement.addEventListener('change',showInputChange);
// function showInputChange(e){
// console.log(e.currentTarget.value)
// }

// *****************************************************************************  //
// var inputElement = document.getElementById("input_id");
// inputElement.addEventListener('blur',showInputChange);
// function showInputChange(e){
// console.log(e.type)
// }



// *****************************************************************************  //
// var selectBox =  document.getElementById("mySelect");
// selectBox.addEventListener('change',showSelectedOption)
// function showSelectedOption(e) {
//     document.getElementById("show_msg").innerHTML = "You selected: " + e.currentTarget.value;
//   }


// *****************************************************************************  //
// var inputElement = document.getElementById("input_id");
// inputElement.addEventListener("keydown",function(){
//     alert("keydown event triggered")
// })

// *****************************************************************************  //
// var linkTag =  document.getElementById("link_tag");
// linkTag.addEventListener("click",(event)=>{
//     event.preventDefault();
//     console.log(event,event.type,event.target)
// })


// *****************************************************************************  //

// var showNameBtn = document.getElementById("show");
// showNameBtn.addEventListener('click',event => {
//     event.preventDefault();
//     var fName = document.getElementById("f_name").value;
//     var sName = document.getElementById("s_name").value;
//     console.log(fName,sName)
// })

// *****************************************************************************  //
// var mainDiv =  document.getElementById("main_div");
// mainDiv.addEventListener("mouseenter",() => console.log("mouseEnter event triggered"))


// *****************************************************************************  //
var mainDiv =  document.getElementById("main_div");
var childElement = document.getElementById("child");
var btn = document.getElementById("btn");


mainDiv.addEventListener("click",clickFuncHandler);
childElement.addEventListener("click",clickFuncHandler);

function clickFuncHandler(evt){
    console.log("*****************************************************")
    console.log(evt);
    console.log("target :",evt.target,"currentTarget :",evt.currentTarget)
}

btn.addEventListener('click',function(){
    mainDiv.removeEventListener("click",clickFuncHandler);
    childElement.removeEventListener("click",clickFuncHandler);

});


// *****************************************************************************  //


