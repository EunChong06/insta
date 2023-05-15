import { useEffect } from "react";

const Setting=()=>{
    const local = localStorage.getItem('id');
    const Logged = () =>{
        if(local == null){
            window.location.href = '/';
        }
    }
    useEffect(()=>{
        Logged();
    },[])
    return(
        <div>
            <div className="container-fluid">
                <div className="row" style={{borderBottom: "1px solid"}}>
                    <div className="col-md-5 text-center my-3">
                        <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" height={30}></img>
                    </div>
                    <div className="col-md-3 my-3">
                    <input type="" name="" placeholder="Поиск" className="form-control"></input>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 my-3">
                        <h5>
                        <a href="/lenta" className="text-dark"><i className="fa-solid fa-house"></i></a>
                        <a href="/chat" className="text-dark"><i className="fa-solid fa-comment ms-3"></i></a>
                        <i className="fa-solid fa-square-plus ms-3"></i>
                        <a href="/like"><i className="fa-solid fa-compass ms-3 text-dark"></i></a>
                        <a href="/profile" className="text-dark"><i className="fa-solid fa-user ms-3"></i></a>	
                        <i className="fa-solid fa-heart ms-3"></i>
                        		
                        </h5>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-2 mt-5"></div>
                        <div className="col-md-8 mt-5" style={{border: "1px solid"}}>
                            <div className="row">
                                <div className="col-md-4" style={{borderRight: "1px solid"}}>
                                    <div className="row">
                                        <div className="col-md-12"><i className="text-primary fa-solid fa-infinity me-1"></i><b>Meta</b></div>
                                        <div className="col-md-12 mt-2"><b>Центр аккаунтов</b></div>
                                        <div className="col-md-12 mt-2">
                                            <small>Управляйте кросс-сервисными<br></br> функциями и настройками<br></br>аккаунтов на платформах Meta.</small>
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <small>
                                                <i className="fa-solid fa-lock me-1"></i>Личная информация<br></br>
                                                <a href="/accountscenter"><i className="fa-solid fa-shield me-1"></i>Пароль и безопасность<br></br></a>
                                                <i className="fa-solid fa-folder-plus me-1"></i>рекламные предпочтения
                                            </small>
                                        </div>
                                        <div className="col-md-12 my-2">
                                            <small className="text-primary">
                                                Больше настроек в Центы<br></br>
                                                аккаунтов	
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md-2 mt-4"></div>
                                        <div className="col-md-2 mt-4">
                                            <img src="https://haski-mana.ru/wp-content/uploads/5/a/a/5aa849c6dce4669aafa4230dfa0e5817.jpeg" width={50} height={50} style={{borderRadius: "50%"}}></img>
                                        </div>
                                        <div className="col-md-8 mt-4">
                                            <b>K.ez_1</b><br></br><a href="#"className="text-primary">Изменить профиля</a>
                                        </div>
                                        <div className="col-md-1 mt-2"></div>
                                        <div className="col-md-3 mt-2"><b>Веб-саит</b></div>
                                        <div className="col-md-7 mt-2">
                                            <input type="" name="" className="form-control" placeholder="Веб-саит"></input>
                                        </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1 mt-2"></div>
                                        <div className="col-md-3 mt-2"><b>О себе</b></div>
                                        <div className="col-md-7 mt-2"><textarea className="form-control"></textarea></div>
                                        <div className="col-md-1 mt-2"></div>

                                        <div className="col-md-1 mt-2"></div>
                                        <div className="col-md-3 mt-2"><b>Пол</b></div>
                                        <div className="col-md-7 mt-2">
                                            <input type="" name="" className="form-control" placeholder="Пол"></input>
                                            
                                            <small>This won’t be part of your public profile</small>
                                        </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                        <div className="col-md-3"><b>Рекомендации похожих аккаунтов</b></div>
                                        <div className="col-md-6"><small><b>Рекомендовать ваш аккаунт возможным подписчикам.[?]</b></small></div>
                                        <div className="col-md-2"></div>
                                        <div className="col-md-12 my-3 text-center">
                                            <button className="btn bg-primary text-light">отправить</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mt-5"></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    export default Setting;