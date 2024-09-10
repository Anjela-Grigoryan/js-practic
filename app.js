const cardsDiv = document.getElementById('container');



function newGame(cardsDiv, cardsNum){
    const cardsArr = [];
    let firstCard = null;
    let secondCard = null;



    for(let i = 1; i <=cardsNum; i++){
        cardsArr.push(i,i);
    };

    for(let i = 0; i<cardsArr.length; i++){
        let index = Math.floor(Math.random()*cardsArr.length); 
    
        let newIndex = cardsArr[i];
        cardsArr[i] = cardsArr[index];
        cardsArr[index] = newIndex;
    };

    for (const item of cardsArr) {
        let card = document.createElement("div");
        card.textContent = item;
        card.classList.add("card");
        cardsDiv.append(card);

        card.addEventListener("click", function(){
            if(card.classList.contains("open") || card.classList.contains("success")){
                return;
            };

            if(firstCard !== null && secondCard !== null){
                firstCard.classList.remove("open");
                secondCard.classList.remove("open");
                firstCard = null;
                secondCard = null;
            };

            card.classList.add('open');

            if(firstCard === null){
                firstCard = card;
            }else{
                secondCard = card;
            };

            if(firstCard!==null && secondCard!==null){
                let firstCardNum = firstCard.textContent;
                let secondCardNum = secondCard.textContent;

                if(firstCardNum === secondCardNum){
                    firstCard.classList.add('success');
                    secondCard.classList.add('success');
                }
            };
            if(cardsArr.length === document.querySelectorAll(".success").length){
                cardsDiv.innerHTML = '';
                alert('congratilations');
                let cardsNum = prompt('number');
                newGame(cardsDiv, cardsNum);
            };
        });
    };
};
let cardsNum = prompt('number');
newGame(cardsDiv, cardsNum);

