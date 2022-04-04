const form = document.forms['form'];
const answer =  document.getElementsByTagName('answer');


function result() {

    if (answer.value === 12) {
    
        alert('정답입니다');
    }
    else {
        alert('틀렸습니다');
    }
}


