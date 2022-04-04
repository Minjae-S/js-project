

const inp = document.forms['cal'];
const input = inp.getElementsByTagName('input');
const cls_btn = document.getElementsByClassName('cls_btn')[0];
const result_btn = document.getElementsByClassName('result_btn')[0];


function clr() {
    inp['result'].value = 0;
}

function calc(value) {
    //입력이 들어가면 0을 지운다.
    if(inp['result'].value == 0) {
        inp['result'.value=''];
    }
    //입력값 결과창에 출력 
    inp['result'].value += value;
}
function my_result () {
    const result = document.forms['cal']['result'];
    const calc = eval(result.value);

    //결과창 표시
    inp['result'].value = calc;
}

//이벤트 핸들러

//숫자 및 사칙 연산 버튼 
for (var i=0; i<input.length; i++) {

    //숫자와 사칙연산자만 입력 처리

    if (input[i].value != '=' && input[i].value !='clear') {
        input[i].onclick = function() {
            calc(this.value);
        }
    }//end if
}


cls_btn.onclick = function() {
    clr();
}

result_btn.onclick = function() {
    try{ 
        my_result();

    }
    catch(err){
        const result = inp['result'];
        result.value = '입력오류';
    }
    

}