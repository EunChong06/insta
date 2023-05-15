import { useEffect } from "react";

const Accountscenter=()=>{
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
                <div className="row text-center">
                    <div className="col-md-1"></div>
                    <div className="col-md-3" style={{borderRight:"1px solid"}}>
                        <div className="row">
                            <div className="col-md-12">
                                <i class="fa-solid fa-infinity text-primary me-2"></i>Meta
                                <br></br>
                                <h3>Центр аккаунтов</h3>
                                <small>
                                    Управляйте кросс-сервисными
                                    функциями и настройками аккаунтов
                                    на платформах Meta, таких как 
                                    Facebook, Instagram и Meta Horizon.     
                                </small>
                            </div>
                            <div className="col-md-12 text-center">
                                <div class="d-flex align-items-start">
                                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Аккаунты и профили</button>
                                        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Кросс-сервисные функции</button>
                                        <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">Личная информация</button>
                                        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Пароль и безопасность</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Ваша информация<br></br>разрешения</button>
                                        <button class="nav-link" id="v-pills-ad-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ad" type="button" role="tab" aria-controls="v-pills-ad" aria-selected="false">Рекламные предпочтения </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div class="d-flex align-items-start">                       
                            <div class="tab-content" id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">1</div>
                                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="1">2</div>
                                <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="3">...</div>
                                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="4">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-12 mt-5">
                                                <h4>Пароль и безопасность</h4>
                                                <b><small>Вход и восстановление аккаунта</small></b>
                                                <br></br>
                                                <small>Управление паролями, настройками входа и способами восстановления аккаунта.</small>
                                                <div className="col-md-12">
                                                    <a href="/accounts"><button className="form-control">Изменения пароля</button></a>
                                                    <button className="form-control">Двухфакторная аутентификация</button>  
                                                    <br></br>
                                                    <b>Проверка безопасности</b>
                                                    <br></br>
                                                    <small>Проверка приложений, устройств и электронных писем на наличие проблем безопасности.</small>
                                                    <br></br>
                                                    <button className="form-control">Активные сеансы</button>
                                                    <button className="form-control">Удовления о входе</button>
                                                    <button className="form-control">Недавние электороные письма</button>
                                                    <br></br>
                                                    <b>Другие приложения и сервисы с доступом к аккаунту</b>
                                                    <small>Управление доступом к информации для приложений, сайтов, игр и бизнес-интеграций.</small>
                                                    <button className="form-control">приложения и сайты</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="5">...</div>
                                <div class="tab-pane fade" id="v-pills-ad" role="tabpanel" aria-labelledby="v-pills-ad-tab" tabindex="6"></div>
                            </div>
                        </div>                              
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Accountscenter;