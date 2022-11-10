let string = "";
let btn = document.querySelectorAll(".btn");
let input = document.querySelector("input");
console.log(btn[0].innerHTML);
for(let i = 0;i<=16;i++){
    // console.log(btn[0])
    if(btn[i].innerHTML != 'AC' && btn[i].innerHTML != "C" && btn[i].innerHTML != "="){
        btn[i].addEventListener("click",function run(){
            string = string + btn[i].innerHTML;
            input.value = string;
        })
    }
    else{
        if(btn[i].innerHTML == 'AC'){
            btn[i].addEventListener("click",function run(){
                string = "";
                input.value = string;
            })
        }
        else if(btn[i].innerHTML == '='){
            btn[i].addEventListener("click",function run(){
                string = eval(string);
                input.value = string;
            })
        }
        else{
            btn[i].addEventListener("click",function run(){
                string = string.slice(0,-1);
                input.value = string;
            })
        }
    }
}