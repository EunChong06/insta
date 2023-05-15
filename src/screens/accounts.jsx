const Accounts=()=>{
    return(
        <div>
            <div className="container" >
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 ">
                        <div className="row">
                            <div className="col-12">
                                <h3>Изменение пароля</h3>
                                <small>Выберите аккаунт, для которого вы хотите внести изменения.</small>
                            </div>
                            <div className="col-12">
                                <a href="/changepassword">
									<div className="row my-3 text-dark">
										<div className="col-2">
									        <img src="https://avatars.mds.yandex.net/i?id=cf7ab99cfa863f54df70f00d3151e386-4863507-images-thumbs&n=13" width={50} height={50} style={{borderRadius: "50%"}}></img>
                                        </div>
										<div className="col-10">
											Kim Eun Chong <br></br><small>hellow * 49 мин</small>
										</div>
								    </div>
								</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <a href="/accountscenter">
                            <i class="fa-solid fa-x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Accounts;