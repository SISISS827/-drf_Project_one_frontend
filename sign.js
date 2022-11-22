// 백엔드
// 백엔드
// 백엔드

//회원가입
async function handleSignup() {
    const signupData = {
    email: document.getElementById("signup-email").value,
    password: document.getElementById("signup-password").value,
    password2: document.getElementById("signup-password2").value,
    nickname: document.getElementById("signup-nickname").value,
    };

    console.log(signupData);

    const response = await fetch("http://127.0.0.1:8000/users/signup/", {
    headers: {
        "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(signupData),
    });

    console.log(response);

    if (response.status == 201) {
    window.location.replace("http://127.0.0.1:5500/sign.html");
    } else {
    alert(response.status);
    }
}

//로그인
async function handleSignin() {
    const signinData = {
    email: document.getElementById("signin-email").value,
    password: document.getElementById("signin-password").value,
    };

    const response = await fetch("http://127.0.0.1:8000/users/api/token/", {
    headers: {
        "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(signinData),
    });

    const response_json = await response.json();
    console.log(response_json);

    localStorage.setItem("access", response_json.access);
    localStorage.setItem("refresh", response_json.refresh);

    const base64Url = response_json.access.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
    atob(base64)
        .split("")
        .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    localStorage.setItem("payload", jsonPayload);
    window.location.replace("http://127.0.0.1:5500/main.html");

    // if (response.status==200){
    //     window.location.replace('http://127.0.0.1:8000/users/signup/');
    // } else {
    //     alert(response.status)
    // }
}

//로그아웃
async function handleLogout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("payload");
    alert("로그아웃 되었습니다");
    location.reload();
}