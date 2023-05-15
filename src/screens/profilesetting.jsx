import { useEffect } from "react";

const Profilesetting=()=>{
    const local = localStorage.getItem('id');
    const Logged = () =>{
        if(local == null){
            window.location.href = '/';
        }
    }
    useEffect(()=>{
        Logged();
    },[])
    const Logout = () =>{
        localStorage.removeItem('id');
        window.location.href = '/';
    }
    return(
        <div>
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 text-dark" style={{border:"1px solid"}}><a href="/setting">Сменить пароль</a></div>
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-6" style={{border:"1px solid"}}>QR-код</div>
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-6" style={{border:"1px solid"}}>Приложентя и сайты</div>
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-6" style={{border:"1px solid"}}>Уведомления</div>
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-6" style={{border:"1px solid"}}>Конфиденциальность и безопасность</div>
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-6" style={{border:"1px solid"}}>Контроль</div>
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-6" style={{border:"1px solid"}}>Вход из аккаунт</div>
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-6" style={{border:"1px solid"}}>Электронные письма от instagram</div>
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-6" style={{border:"1px solid"}}>Сообщение о проблеме</div>
                    <div className="col-3"></div>
                    <div className="col-3"></div>                                        
                    <a href="#" className="col-6"  onClick={Logout}><div  style={{border:"1px solid"}}>Выйти</div></a>
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-6" style={{border:"1px solid"}}>Отмена</div>
                    <div className="col-3"></div>
                </div>
            </div>
        </div>
    )
}
export default Profilesetting;