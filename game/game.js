let btn = document.querySelector(".field_button");



let randNum = 1 + Math.floor(Math.random() * 100);
btn.onclick = function(){
    let input = document.querySelector(".field_input");
    let check = document.querySelector(".result_check_out");
    let help = document.querySelector(".result_help_out");
    let count = document.querySelector("result_count_out");
    
    userNum = input.value;
    if(userNum > randNum){
        check.textContent = "пока что не угадали";
        help.textContent = "многовата";
    }else if(userNum < randNum){
        check.textContent = "пока что не угадали";
        help.textContent = "маловато";
    }else{
        check.textContent = "поздравляем вы угадали";
        help.textContent = "в самый раз";
    }
}