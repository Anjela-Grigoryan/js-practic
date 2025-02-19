window.addEventListener('load', function(){


    let userCount = document.querySelector('.count-user'),
        compCount = document.querySelector('.count-comp'),
        userField = document.querySelector('.user-field'),
        compField = document.querySelector('.comp-field'),
        sound = document.querySelector('.sound'),
        play = document.querySelector('.play'),
        fields = document.querySelectorAll('.field'),
        res = document.querySelector('.result'),
        userStep, compStep,
        countUser = 0,
        countComp = 0,
        blocked = false;


        function  userChois(e){
            if(blocked) return;
            let target = e.target;
            if(target.classList.contains('field')){
                userStep = target.dataset.field;
                fields.forEach(i => i.classList.remove('active', 'error'));
                target.classList.add('active');
                compChois();
            }
        }

        function compChois(e){
            blocked = true;
            let rand = Math.floor(Math.random() * 3);
            compField.classList.add('blink');
            let compFields = compField.querySelectorAll('.field');

            setTimeout(() => {
                compField.classList.remove('blink');
                compStep = compFields[rand].dataset.field;
                compFields[rand].classList.add('active');
                winner();
            },3000);
        }

        function winner(){
            blocked = false;
            let comb = userStep + compStep;
            switch (comb) {
                case 'rr':
                case 'ss':
                case 'pp':
                    res.innerText = 'draw!';
                    sound.setAttribute('src', 'audio/draw.mp3');
                    sound.play();
                    break;

                case 'rs':
                case 'sp':
                case 'pr':
                    res.innerText = 'you win!';
                    sound.setAttribute('src', 'audio/win.mp3');
                    sound.play();
                    countUser++;
                    userCount.innerText = countUser;
                    compField.querySelector('[data-field='+compStep+']').classList.add('error');
                    break;

                case 'sr':
                case 'ps':
                case 'rp':
                    res.innerText = 'computer win!';
                    sound.setAttribute('src', 'audio/loss.mp3');
                    sound.play();
                    countComp++;
                    compCount.innerText = countComp;
                    userField.querySelector('[data-field='+userStep+']').classList.add('error');
                    break;
            }
        }

        function playGayme(e){
            countUser = countComp = 0;
            res.innerText = 'make a choice';
            userCount.innerText = 0;
            compCount.innerText = 0;
            fields.forEach(i => i.classList.remove('active', 'error'));
        }

        play.addEventListener('click', playGayme);
        userField.addEventListener('click', userChois);
})