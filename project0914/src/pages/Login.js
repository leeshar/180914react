import React from 'react';



const Login = () =>{
  
    return (
        <div className="login">
            <h1>
               LOGIN
            </h1>
            <input name="id" id="id" placeholder="아이디"/><br/>
            <input name="pwd" id="pwd" placeholder="비밀번호"/><br/>
            <button type="button">로그인</button>
        </div>
    );
};

export default Login;