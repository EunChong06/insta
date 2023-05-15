import { useEffect } from "react";

const Chat=()=>{
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
					<div className="col-md-md-5 text-center my-3">
						<img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" height={30}></img>
					</div>
					<div className="col-md-md-3 my-3">
						<input type="" name="" placeholder="Поиск" className="form-control"></input>
					</div>
					<div className="col-md-md-1"></div>
					<div className="col-md-md-3 my-3">
						<h5>
							<a href="/lenta" className="text-dark"><i className="fa-solid fa-house"></i></a>
							<a href="/chat" className="text-dark"><i className="fa-solid fa-comment ms-3"></i></a>
							<i className="fa-solid fa-square-plus ms-3"></i>
							<a href="/like"><i className="fa-solid fa-compass ms-3 text-dark"></i></a>
							<i className="fa-solid fa-heart ms-3"></i>
							<a href="/profile" className="text-dark"><i className="fa-solid fa-user ms-3"></i></a>
						</h5>
					</div>
				</div>
				<div className="row my-4">
					<div className="col-md-3" style={{border:"1px solid"}}>
						<div className="row">
							<div className="col-md-12 text-center">
								<div className="row">		
									<div className="col-md-12">
										<b>K_eh.1</b>
										<i className="fa-solid fa-pen-to-square ms-5"></i>
									</div>
									<div className="col-md-12" style={{borderTop:"1px solid"}}>
										<a href="/direct">
											<div className="row my-3 text-dark">
												<div className="col-md-2">
													<img src="https://avatars.mds.yandex.net/i?id=cf7ab99cfa863f54df70f00d3151e386-4863507-images-thumbs&n=13" width={50} height={50} style={{borderRadius: "50%"}}></img></div>
												<div className="col-md-10">
													Kim Eun Chong <br></br><small>hellow * 49 мин</small>
												</div>
											</div>
										</a>
									</div>						
								</div>	
							</div>
						</div>
					</div>
					<div className="col-md-8" style={{borderTop:"1px solid",borderBottom:"1px solid",borderRight:"1px solid"}}>
						<div className="row text-center my-5">
							<div className="col-md-12">
								<h1><i class="fa-brands fa-telegram mt-5"></i></h1>
								<h3>Ващи сообщения</h3>
								<small>Отправляйте личные фото и сообщения другу или группе.</small>
								<br></br>
								<button className="btn btn-primary text-light my-3">Отправить сообщение</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
        )
    }
    export default Chat;