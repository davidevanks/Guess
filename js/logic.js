        //--------------------- Logica de juego---------------------------------------- //
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        const guesses = document.querySelector('.guesses');
        const lastResult = document.querySelector('.lastResult');
        const lowOrHi = document.querySelector('.lowOrHi');
        const guessSubmit = document.querySelector('.guessSubmit');
        const guessField = document.querySelector('.guessField');

        //constante para tablero de juego.habilitar boton para luego activar tablero, elementos invisibles al inicio
        const Display = document.querySelector('#DisplayPlay');
        Display.style.visibility = 'hidden';
      let btnBplay=document.querySelector('#grpBtnDialoguePlay');
        btnBplay.style.visibility = 'hidden';
        //----------------------------------------
       
        //
        let guessCount = 1;
        let resetButton;
        guessField.focus();
        function checkGuess() {

            let userGuess = Number(guessField.value);
            if (guessCount === 1) {
                guesses.textContent = 'Números enviados : ';
            }
            guesses.textContent += userGuess + ' ';

            if (userGuess === randomNumber) {
                lastResult.textContent = 'Congratulations! You got it right!';
                lastResult.style.backgroundColor = 'green';
                lowOrHi.textContent = '';
                setGameOver();
            } else if (guessCount === 3) {
                lastResult.textContent = '!!!GAME OVER!!!';
                setGameOver();
            } else {
                lastResult.textContent = 'Equivocado, no es el número. Trata de nuevo!';
                lastResult.style.backgroundColor = 'red';
                if (userGuess < randomNumber) {
                    lowOrHi.textContent = 'Last guess was too low!';
                } else if (userGuess > randomNumber) {
                    lowOrHi.textContent = 'Last guess was too high!';
                }
            }

            guessCount++;
            guessField.value = '';
            guessField.focus();
        }
        guessSubmit.addEventListener('click', checkGuess);
        function setGameOver() {

            guessField.disabled = true;
            guessSubmit.disabled = true;
            resetButton = document.createElement('button');
            resetButton.textContent = 'Iniciar nuevo juego';
            document.querySelector('#divEnviarAdiv').appendChild(resetButton).className="btn btn-primary";
            resetButton.addEventListener('click', resetGame);
        }
        function resetGame() {
            guessCount = 1;
            const resetParas = document.querySelectorAll('.resultParas p');
            for (let i = 0; i < resetParas.length; i++) {
                resetParas[i].textContent = '';
            }
            resetButton.parentNode.removeChild(resetButton);
            guessField.disabled = false;
            guessSubmit.disabled = false;
            guessField.value = '';
            guessField.focus();
            lastResult.style.backgroundColor = 'white';
            randomNumber = Math.floor(Math.random() * 100) + 1;
        }


           //------------------------Fin logica de juego---------------------------------------- //

           //-----------------------------Lógica board-------------------------------------------//
           
           //Array contiene las conversaciones del personaje 
           let boxConversations=['Lorem ipsum dolor sit amet consectetur adipiscing elit'
                                 ,'imperdiet ullamcorper eget fames habitant',
                                 'acilisis torquent cubilia vitae penatibus',
                                 'molestie sem torquent morbi massa tincidunt, cum gravida '];
            //Caja donde se muestra el dialogo
            let grpBtnConver=document.querySelector('#grpBtnConversations');
            let divDialog=document.querySelector('#txtDialogo');
            let bDialogo=document.querySelector('#BoardDialogo');
            //Boton Seguir
            let btnSeguir=document.querySelector('#btnSeguir');
            let tabulador=0;

            //Boton Saltar Intro
            let btnSaltar=document.querySelector('#btnSaltar');
            
            //Se inicializa juego con texto inicial
            divDialog.textContent=boxConversations[0];


            //Función para avanzar conversación cuando se pulsa boton seguir
            function avanzarDialgo()
            {
                tabulador+=1;
                divDialog.textContent=boxConversations[tabulador]+'....';
               
                if(tabulador===1)
                {
                   // setInterval(animacion, 200);
                   btnSeguir.className="btn btn-success intermitente";
                   //Una vez que se acaba la conversación, escondemos botones del dialogo y mostramos boton de inicio del juego
                } else if(tabulador===3)
                {
                    
                    grpBtnConver.style.visibility = 'hidden';
                    btnBplay.style.visibility = 'visible';
                    divDialog.textContent="Te deseo la mejor de la suerte, la clave es recordar :) ";
                    btnBplay.addEventListener('click',BeginPlay);
                }
              
            }
            
            
            animacion = function(){
  
                btnSeguir.classList.toggle('btn btn-success intermitente');
               
              }
              
                function BeginPlay()
                {
                    Display.style.visibility="visible";
                    bDialogo.remove();
                                }
            
            //Se llama a la funciónen click de boton Seguir
            btnSeguir.addEventListener('click',avanzarDialgo);


           //--------------------------Fin lógica board------------------------------------------//