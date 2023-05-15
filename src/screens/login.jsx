import { useEffect } from "react";
import { useState } from "react";
import { users } from "../api/api";

const Login=()=>{
    const local = localStorage.getItem('id');
    const Logged = () =>{
        if(local != null){
            window.location.href = '/lenta';
        }
    }
    useEffect(()=>{
        Logged();
    },[])
    const [login,setLogin] = useState();
    const [password,setPassword] = useState();
    const Signin = () =>{
        if(login != "" && password != ""){
            const user = users.filter(i => i.nickname == login && i.password == password);
            if(user.length > 0){
                localStorage.setItem('id',user[0].id);
                window.location.href = '/lenta';
            }else{
                alert('Логин или пароль неверны!');
            }
        }else{
            alert('Заполните поля!');
        }
    }
    return(
        <div className="bg-dark">
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-1">
                        <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" alt="" />
                    </div>
                    <div className="col-md-3">
                        <img className="mt-3" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" alt="" />
                    </div>
                    <div className="col-md-3 border bg-light">
                        <div className="row">
                            <div className="col-md-12 text-center mt-5">
                                <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />   
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-10 mt-5">
                                <input onChange={(e)=>{setLogin(e.target.value)}} className="form-control" placeholder="Телефон,имя ползователя"></input>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-1"></div>
                             <div className="col-md-10 mt-2">
                                <input onChange={(e)=>{setPassword(e.target.value)}} className="form-control" placeholder="Пароль"></input>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-1"></div>
                            <div className="col-md-10 mt-2">
                                <button onClick={Signin} className="form-control bg-primary text-light">Войти</button>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-1"></div>
                            <div className="col-md-4"><hr></hr></div>
                            <div className="col-md-2 text-secondary mt-1"><small>ИЛИ</small></div>
                            <div className="col-md-4"><hr></hr></div>
                            <div className="col-md-1"></div>
                            <div className="col-md-3"></div>
                            <div className="col-md-7 text-primary mt-3">
                                <small>Войти через Face book</small>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-3"></div>
                            <div className="col-md-6 text-center mt-4">
                                <small><small>Забыли пароль?</small></small>
                            </div>
                            <div className="col-md-12 text-center mt-4">
                                 <small>У вас ещё нет аккаунта? <b className="text-primary">Зарегистрироваться</b></small>
                            </div>
                            <div className="col-md-12 text-center my-3">
                                <small>
                                    Установите приложение
                                </small>
                            </div>
                            <div className="col-md-6">
                                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_russian-ru.png/bfba6d0fd6bd.png" width={150} heigh={250}></img>
                            </div>
                            <div className="col-md-6">
                                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_russian-ru.png/4c70948c09f3.png" width={150} heigh={250}></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
}
export default Login;