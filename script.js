

const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
const score = document.querySelector('.score');

let play = false;
let newWords = '';
let randWords = '';
let sWords = ['Apple', 'Mango', 'Guava', 'Pappaya', 'Blackcurrant', 'Almond', 'Cherry', 'Dragon', 'Kiwi', 'Peach', 'Pear', 'Litchi', 'Grapes',]
var count = 0;

const creatNeweWords = () => {
    let randomNum = Math.floor(Math.random() * sWords.length);
    let newTempSwords = sWords[randomNum]
    return newTempSwords;
}

const scrambleWords = (arr) => {
    console.log(arr.length)
                    //  10             10
    for (let  i = arr.length -1 ; i> 0  ; i--){
        let temp = arr[i]
        console.log(temp);
        let j = Math.floor(Math.random()*(i+1));
        // console.log(i)
        // console.log(j)

        arr[i] = arr[j]
        arr[j] = temp;
    }

    return arr;
}

btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = 'Guess';
        guess.classList.toggle('hidden');
        newWords = creatNeweWords();
        randWords = scrambleWords(newWords.split('')).join('');
        // console.log(newWords.split(''))
        // console.log(randWords.join(''))
        msg.innerHTML = randWords;
        document.querySelector('.guide').innerHTML = 'if you are dont understanding the answer please touch the guess button';
    }else{
        let tempWord = guess.value;
       tempWord = tempWord.charAt(0).toLowerCase() + tempWord.slice(1);
      newWords =  newWords.charAt(0).toLowerCase() + newWords.slice(1);
        console.log(tempWord)
        console.log(newWords)
        if(tempWord === newWords){
            // console.log('correct')
            play = false;
            msg.innerHTML = `Awesome It's Correct. it is ${newWords}`
            btn.innerHTML = 'Next';
            guess.classList.toggle('hidden');
            guess.value = '';
            count++;
            score.innerHTML= `<span>Score : ${count}</span>`;
            console.log(count)
        }else {
            console.log('incorrect')
            msg.innerHTML = ` not Correct. try again <span class="rand_w">${randWords}</span> (<span class="new_w">${newWords}</span>) `;
        }
    }
})