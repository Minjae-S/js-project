

const form = document.form;
const myId = form.myId;
const pwd = form.pwd;
const send_btn = document.form.send;

send_btn.onclick = function() {
    const newId= myId.value;
    const newPwd = pwd.value;


    //null 값 검사

    if (newId=='' || newPwd == ''){
        alert('아이디 또는 비밀번호가 입력되지 않았습니다');
    } else {
        alert(myId.value +"님 환영합니다~");
    }

};