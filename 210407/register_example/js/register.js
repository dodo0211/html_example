function idCheck(){
    var $idInput = document.getElementById("idInput");
    var $idCorrect = document.getElementById("idCorrect");
    var idExp = /^[0-9a-zA-Z]{3,11}$/;

    if($idInput.value === ""){
        // 안에 내용을 집어 넣겠다.
        $idCorrect.innerHTML = "아이디는 필수입력 사항입니다."
        return false;
    }else if(!$idInput.value.match(idExp)){
        $idCorrect.innerHTML = "아이디가 조건에 맞지 않습니다.";
        return false;
    }else{
        $idCorrect.innerHTML = "정상적으로 입력되었습니다.";
        return true;
    }

}

function pwCheck(){
    var $password = document.getElementById("password");
    var $pwCorrect = document.getElementById("pwCorrect");
    var pwExp = /^.*(?=^.{6,12}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    if($password.value === ""){
        // 안에 내용을 집어 넣겠다.
        $pwCorrect.innerHTML = "비밀번호는 필수입력 사항입니다."
        return false;
    }else if(!$password.value.match(pwExp)){
        $pwCorrect.innerHTML = "비밀번호가 조건에 맞지 않습니다.";
        return false;
    }else{
        $pwCorrect.innerHTML = "정상적으로 입력되었습니다.";
        return true;
    }

}

function pwCheck2(){
    var $password = document.getElementById("password");
    var $password_ok = document.getElementById("password_ok");
    var $pwCorrect2 = document.getElementById("pwCorrect2");

    if($password.value === $password_ok){
        $pwCorrect2.innerHTML = "비밀번호가 일치합니다."
        return true;
    }else{
        $pwCorrect2.innerHTML = "비밀번호가 불일치합니다.";
        return false;
    }

}