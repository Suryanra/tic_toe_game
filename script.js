box1=document.getElementById('box1');
box2=document.getElementById('box2');
box3=document.getElementById('box3');
box4=document.getElementById('box4');
box5=document.getElementById('box5');
box6=document.getElementById('box6');
box7=document.getElementById('box7');
box8=document.getElementById('box8');
box9=document.getElementById('box9');
const arr = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

const boxes=document.getElementsByClassName("grid-item");
// boxes[0].addEventListener("click",handleButtonClick);
// boxes[1].addEventListener("click",handleButtonClick);
// boxes[2].addEventListener("click",handleButtonClick);
// boxes[3].addEventListener("click",handleButtonClick);
// boxes[4].addEventListener("click",handleButtonClick);
// boxes[5].addEventListener("click",handleButtonClick);
// boxes[6].addEventListener("click",handleButtonClick);
// boxes[7].addEventListener("click",handleButtonClick);
// boxes[8].addEventListener("click",handleButtonClick);
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", handleButtonClick);
  }
  
let friendsmode =true;
// decider
const firends=document.getElementById("friends");
const robot=document.getElementById("robot");
firends.style.backgroundColor="yellow";
robot.style.backgroundColor="grey";
firends.addEventListener('click',()=>{
    // window.location.reload();
    firends.style.backgroundColor="yellow";
    robot.style.backgroundColor="grey";
    friendsmode =true;
})
robot.addEventListener('click',()=>{
    // window.location.reload();
    firends.style.backgroundColor="grey";
    robot.style.backgroundColor="yellow";
    friendsmode =false;
})



    console.log("hello")
    count=0;
    first=false;
    function handleButtonClick(eve)
    {
        count++;
        // if(count==9)
        // {
        //     document.getElementById('display').style.visibility = "visible"
        //     document.getElementById('display').style.backgroundColor = 'rgba(36, 46, 184, 0.52)';
        //     document.getElementById('display').style.width= '100%';
        //     document.getElementById('display').style.height= '100%';
        //     document.getElementById('display').style.top= '50%';
        //     document.getElementById('display').innerHTML=`match draw ` ;
        //     return;
        // }
        clickeditem=eve.target;
        ele=document.getElementById(clickeditem.id);
        eleclass=ele.className;
        console.log(ele.classList.contains('cross'));
        console.log(clickeditem.id);
        console.log(clickeditem.className);
        if(clickeditem.classList.contains("cross")||clickeditem.classList.contains("circle"))
        {
            alert("sorry! ,you pressed the wrogn box");
            return ;
        }
    if(first==false)
      {  clickeditem.classList.add('cross');
      first=true;
    }
    else {
        clickeditem.classList.add('circle');
        first=false;
    }
    
    
    if(ele.classList.contains('cross'))
        {
            check('cross');
        }
        else if(ele.classList.contains('circle'))
        {
            check('circle');
        }
    if(friendsmode==false)
        {let selectedmove=getRobotMove();
        count++;
        first=false;
        selectedmove.classList.add("circle");
        setTimeout(()=>{
            check('circle');
        },5000);
        }
        if(count==9)
        {
            document.getElementById('display').style.visibility = "visible"
            document.getElementById('display').style.backgroundColor = 'rgba(36, 46, 184, 0.52)';
            document.getElementById('display').style.width= '100%';
            document.getElementById('display').style.height= '100%';
            document.getElementById('display').style.top= '50%';
            document.getElementById('display').innerHTML=`match draw ` ;
            return;
        }
    }
    

function getRobotMove() {
    // Check if the robot can win in the next move
        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i];
            if (arr[a].classList.contains("circle") && arr[b].classList.contains("circle") && !arr[c].classList.contains("cross"))
                {return arr[c];
                }
            else if (arr[a].classList.contains("circle") && arr[c].classList.contains("circle") && !arr[b].classList.contains("cross"))
                {return arr[b];
                }
            else if (arr[c].classList.contains("circle") && arr[b].classList.contains("circle") && !arr[a].classList.contains("cross"))
                {return arr[a];
                }
        }
    
        // Check if the player is about to win, and block the move
        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i];
            if(arr[a].classList.contains("cross") && arr[b].classList.contains("cross") && !arr[c].classList.contains("circle"))
            {return arr[c];
            }
            else if (arr[a].classList.contains("cross") && arr[c].classList.contains("cross") && !arr[b].classList.contains("circle"))
            {return  arr[b];
            }
            else if(arr[b].classList.contains("cross") && arr[c].classList.contains("cross") && !arr[a].classList.contains("circle"))
            {return arr[a];
            }
        }
    
        // If no strategic move, choose a random empty box
        return getRandomEmptyBox();
    }
function getRandomEmptyBox(){
    let vari= Math.floor(Math.random() * 9);
    console.log("random boxe")
    console.log(vari)
    while(arr[vari].classList.contains("cross")||arr[vari].classList.contains("circle"))
    {
        vari= Math.floor(Math.random() * 9);
    }
    return arr[vari];
}
    function check(cont){
    if(
        
        (boxes[0].classList.contains(cont) && boxes[1].classList.contains(cont)&& boxes[2].classList.contains(cont))||
        (boxes[3].classList.contains(cont) && boxes[4].classList.contains(cont)&& boxes[5].classList.contains(cont))||
        (boxes[6].classList.contains(cont) && boxes[7].classList.contains(cont)&& boxes[8].classList.contains(cont))||
        (boxes[0].classList.contains(cont) && boxes[3].classList.contains(cont)&& boxes[6].classList.contains(cont))||
        (boxes[1].classList.contains(cont) && boxes[4].classList.contains(cont)&& boxes[7].classList.contains(cont))||
        (boxes[2].classList.contains(cont) && boxes[5].classList.contains(cont)&& boxes[8].classList.contains(cont))||
        (boxes[0].classList.contains(cont) && boxes[4].classList.contains(cont)&& boxes[8].classList.contains(cont))||
        (boxes[2].classList.contains(cont) && boxes[4].classList.contains(cont)&& boxes[6].classList.contains(cont))
        )
        {
        document.getElementById('conid').classList.add('winner');
        document.getElementById('display').style.visibility = "visible"
        document.getElementById('display').innerHTML=`${cont.toUpperCase ()} is the winner ` ;
        removeallbox();
        }
    }
    
    function removeallbox(){
        box1.parentNode.removeChild(box1);
        box2.parentNode.removeChild(box2);
        box3.parentNode.removeChild(box3);
        box4.parentNode.removeChild(box4);
        box5.parentNode.removeChild(box5);
        box6.parentNode.removeChild(box6);
        box7.parentNode.removeChild(box7);
        box8.parentNode.removeChild(box8);
        box9.parentNode.removeChild(box9);
    }

    // function removeAllBoxes() {
    //     for (let i = 0; i < arr.length; i++) {
    //         arr[i].parentNode.removeChild(arr[i]);
    //     }
    // }



