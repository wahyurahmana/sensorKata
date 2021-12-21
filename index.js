let password = 'I Love Javascript'
let censoredWord = 'love'
let newPassword = ""; 


for (let i= 0;  i < password.length; i++) {
  let inCorrect = 0
  if (password[i] !== " ") {
    for(let j = 0; j < censoredWord.length; j++){
      if (password[i].toLowerCase() !== censoredWord[j]) {
        inCorrect += 1;
      }
    }
    if (inCorrect >= censoredWord.length) {
      newPassword += password[i]
    }else{
      newPassword += "*"
    }
  }
}
console.log(newPassword, point)
