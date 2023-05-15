const Changepassword=()=>{
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12">
                                <h4>
                                    <a href="/accountscenter"><i class="fa-solid fa-angle-left text-dark"></i></a>
                                </h4>
                            </div>
                            <div className="col-12">
                                <small>aaaaaaa07884  · Instagram</small>
                                <h5>Изменение пароля</h5>
                                <small>
                                    Все сеансы, кроме текущего, будут завершены.<br></br>
                                    Это позволит предотвратить несанкционированный доступ к вашему аккаунту.
                                </small>
                            </div>
                        </div>
                        <br></br>
                        <div className="col-12">
                            <small>
                                Пароль должен содержать не менее 6 символов, включая цифры, буквы и специальные символы (!$@%).
                            </small>
                        </div>
                        <br></br>
                        <div className="col-12">
                            <input className="form-control"placeholder="Текущий пароль"></input>
                            <input className="form-control my-3"placeholder="Новый пароль"></input>
                            <input className="form-control"placeholder="Введите новый пароль еще раз"></input>
                            <br></br>
                            <b className="text-primary">Забыли папроль?</b>
                        </div>
                        <br></br>
                        <div className="col-12">
                            <button className="btn form-control btn-primary text-light">Изменитьь пароль    </button>
                        </div>

                    </div>
                    <div className="col-3">
                        <a href="/accountscenter">
                            <i class="fa-solid fa-x text-dark"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Changepassword;