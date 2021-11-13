let number=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
let counter= 0;

document.querySelector('.check').addEventListener('click',function(){
   
    const guess=Number(document.querySelector('.guess').value)
    if(!guess){
   document.querySelector('.message').textContent='💢 No number'

    }
    else if(guess===number){
        if(!counter){
            counter=1
      document.querySelector('.message').textContent='🎺 Well done'
      document.querySelector('body').style.backgroundColor='green'
      document.querySelector('.number').style.width='30rem'
      document.querySelector('.number').textContent=number
      let empty= document.querySelector('.guess')
      empty.setAttribute("readonly", true)
        if(score>highscore){
        highscore=score
        document.querySelector('.highscore').textContent=highscore
        }

    }
    else{
        
        document.querySelector('.message').textContent='press agaain to play again!'
 document.querySelector('.score').textContent=document.querySelector('.score').textContent 
         

    }
}
 else if( guess !==number){
    if(score>1){
        score--
        document.querySelector('.message').textContent
        =guess > number ? '📢 Too high!' : '📢 Too low' ;
        document.querySelector('.score').textContent=score
    }
    else{
        
        document.querySelector('.message').textContent='🧧 GAME OVER!'
        document.querySelector('.score').textContent=0
    }
    }

});

document.querySelector('.again').addEventListener('click', function () {
score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
 
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent=highscore

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  empty= document.querySelector('.guess')
  empty.removeAttribute("readonly")
  counter=0
});



