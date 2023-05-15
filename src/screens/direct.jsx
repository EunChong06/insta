const Direct=()=>{
    return(
        <div>
            <div className="container-fluid">
		<div className="row" style={{borderBottom:"1px solid"}}>
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
					<i className="fa-solid fa-heart ms-3"></i>
					<a href="/profile" className="text-dark"><i className="fa-solid fa-user ms-3"></i></a>
				</h5>
			</div>
		</div>
		<div className="col-md-12">
			<div className="row">
				<div className="col-md-2 mt-3"></div>
				<div className="col-md-8 mt-3">
					<div className="row">
						<div className="col-md-5 text-center" style={{borderLeft:"1px solid", borderTop:"1px solid", borderBottom:"1px solid"}}>
							<div className="row my-3">
								<div className="col-md-10">
									<b>K_ez.1</b><i className="fa-solid fa-chevron-down"></i>
								</div>
								<div className="col-md-2">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </div>
							</div>
						</div>
						<div className="col-md-7" style={{border: "1px solid"}}>
							<div className="row my-3">
								<div className="col-md-9">
									<img src="https://avatars.mds.yandex.net/i?id=cf7ab99cfa863f54df70f00d3151e386-4863507-images-thumbs&n=13" width={30} height={30} style={{borderRadius: "50%"}}></img>
                                        <b className="ms-2">Kim Eun Chong</b>

								</div>
								<div className="col-md-3">
									<h5>
										<i className="fa-solid fa-phone"></i>
										<i className="fa-solid fa-video ms-2"></i>
										<i className="fa-solid fa-circle-info ms-2"></i>
									</h5>
								</div>
							</div>
						</div>
						<div className="col-md-5" style={{borderLeft: "1px solid", borderBottom: "1px solid", height: "450px"}}>
							<div className="row my-3">
								<div className="col-md-12" style={{backgroundColor: "#edebeb", borderRadius: "10px"}}>
									<div className="row my-2">
										<div className="col-md-2">
                                            <img src="https://avatars.mds.yandex.net/i?id=cf7ab99cfa863f54df70f00d3151e386-4863507-images-thumbs&n=13" width={50} height={50} style={{ borderRadius:"50%"}}></img>
                                        </div>
										<div className="col-md-10"> Kim Eun Chong <br></br><small>hellow * 49 мин</small></div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-7" style={{borderLeft: "1px solid", borderBottom: "1px solid", borderRight: "1px solid"}}>
							<div className="row my-3">
								<div className="col-md-12">
									<div className="row">
										<div className="col-md-9"></div>
										<div className="col-md-2 text-center ms-2" style={{backgroundColor: "#ab7df5", borderRadius: "10px"}}>Hellow</div>	
									</div>
								</div>
								<div className="col-md-12">
									<div className="row">
										<div className="col-md-2 text-center ms-2" style={{backgroundColor: "#ab7df5", borderRadius: "10px"}}>Hi</div>
										<div className="col-md-9"></div>
									</div>
								</div>
							</div>
						</div>
							<div className="col-md-4" style={{position: "fixed", top: "500px", left: "580px" ,border:"1px solid", borderRadius: "10px"}}>
								<div className="row my-3">
									<div className="col-md-1 mt-2"><h5><i className="fa-solid fa-face-smile"></i></h5></div>
									<div className="col-md-5"><input id="text" className="form-control" type="" name="" placeholder="напишите сообщение..."></input></div>
									<div className="col-md-3">
										<button className="bg-info form-control">send</button>
									</div>
									<div className="col-md-1 mt-2"><h5><i className="fa-solid fa-image"></i></h5></div>
									<div className="col-md-1 mr-3 mt-2"><h5><i className="fa-solid fa-heart"></i></h5></div>
								</div>
							</div>
						</div>
					</div>
				<div className="col-md-2 mt-3"></div>
			</div>
		</div>
	</div>
        </div>
    )
}
export default Direct;