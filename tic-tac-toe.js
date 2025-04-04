let reset=document.querySelector("#new1");
let boxes=document.querySelectorAll(".box");
let h21=document.querySelector(".h21");
let hide=document.querySelector(".hide");
let newbtn=document.querySelector("#new");
let turnO=true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetbtn=()=>{
    turnO=true;
    enableboxes();
    hide.classList.add("hide");
    h21.innerText="";
    for(let box of boxes){
    box.style.backgroundColor="aliceblue";
    }
}
const enableboxes=()=>{
  for(let box of boxes){
    box.style.pointerEvents="auto";
    box.innerText="";
  }
}
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(box.innerText!=="")return;
     if(turnO==true){
        box.innerText="O";
        box.style.backgroundColor="cadetblue";
        turnO=false;
     }
     else{
        box.innerText="X";
        box.style.backgroundColor="burlywood";
        turnO=true;
     }
     checkwin();
   })
});
const checkwin=()=>{
    for(let pattern of winPatterns){
      pos1=boxes[pattern[0]].innerText;
      pos2=boxes[pattern[1]].innerText;
      pos3=boxes[pattern[2]].innerText;
      if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("winner");
            console.log(pos1);
            showwinner(pos1);
        }
      }
    };
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.style.pointerEvents="none";
    }
}
const showwinner=(winner)=>{
    h21.innerText=`Congratulations, Winner is ${winner}`;
    hide.classList.remove("hide");
    disableBoxes();
}
newbtn.addEventListener("click",resetbtn);
reset.addEventListener("click",resetbtn);

