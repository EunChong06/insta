import { useEffect, useState } from "react";
import { publics, storys } from "../api/api";
const Lenta = () => {
	const local = localStorage.getItem('id');
	const Logged = () => {
		if (local == null) {
			window.location.href = '/';
		}
	}
	useEffect(() => {
		Logged();
	}, [])
	const [posts, setPosts] = useState(null);
	const fetchPublic = () => {
		setPosts(publics);
		console.log(posts)
	}
	useEffect(() => {
		fetchPublic();
	}, [])
	return (
		<div>
			<div className="container-fluid">
				<div className="row" style={{ borderBottom: "1px solid" }}>
					<div className="col-12 text-center my-3">
						<img src="https://www.instagram.com/static/images/web/	logged_out_wordmark.png/7a252de00b20.png" height={30}></img>
					</div>
					<div className="col-12 my-3">
						<div className="row">
							<div className="col-2 mt-2"><a href="/lenta" className="text-dark"><i className="fa-solid fa-house"></i></a></div>
							<div className="col-2 mt-2"><a href="/chat" className="text-dark"><i className="fa-solid fa-comment ms-2"></i></a></div>
							<div className="col-2 mt-2"><i className="fa-solid fa-square-plus ms-2"></i></div>
							<div className="col-2 mt-2"><a href="/like"><i className="fa-solid fa-compass ms-2 text-dark"></i></a></div>
							<div className="col-2 mt-2"><a href="/profile" className="text-dark"><i className="fa-solid fa-user ms-2"></i></a></div>
							<div className="col-1 dropdown"><button className="btn  dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
								<i className="fa-solid fa-heart"></i>
							</button>
								<div className=" dropdown-menu">
									<a className="dropdown-item" href="#">
										<img src="https://avatars.mds.yandex.net/i?id=b3e02f02adb985881e6723b2a143cb94-4841475-images-thumbs&n=13" width={40} height={40} style={{ borderRadius: "50%" }}></img>
										<b className="ms-2">Запрос на подпиську</b><small><i className="fa-sharp fa-solid fa-circle text-primary ms-4"></i></small><i className="fa-solid fa-chevron-right ms-2"></i>
									</a>
									<a className="dropdown-item" href="#"><img src="https://avatars.mds.yandex.net/i?id=2a00000179e8589d309c62257cafc72bff59-4055782-images-thumbs&n=13" width={40} height={40} style={{ borderRadius: "50%" }}></img>
										<b className="ms-2">Запрос на подпиську</b> <small><i className="fa-sharp fa-solid fa-circle text-primary ms-4"></i></small><i className="fa-solid fa-chevron-right ms-2"></i></a>
									<a className="dropdown-item" href="#"><img src="https://avatars.mds.yandex.net/i?id=ebe736576a035395e95d998a06d7d0da-5877715-images-thumbs&n=13" width={40} height={40} style={{ borderRadius: "50%" }}></img>
										<b className="ms-2">Запрос на подпиську</b><small><i className="fa-sharp fa-solid fa-circle text-primary ms-4"></i></small><i className="fa-solid fa-chevron-right ms-2"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="row">
						<div className="col-12">
							{storys != null ?
								<>
									<div className="row">
										<div className="col-12 my-3 text-center" style={{ border: "1px solid", borderRadius: "5px" }}>
											<div className="row">
												{storys.map((item) =>
													<div className="col-4">
														<a href={"/storys/" + item.id}>
															<img className="my-1" src={item.avatar} width={50} height={50} style={{ borderRadius: "50%" }}></img>
														</a>
														<br></br>
														{item.nickname}
													</div>
												)}
											</div>
										</div>
									</div>
								</>
								: <></>
							}
							{posts != null ?
								<>
									{posts.map((item) =>
										<div className="row my-4" >
											<div className="col-12 " style={{ border: "1px solid", borderRadius: "5px" }}>
												<div className="row">
													<div className="col-2">
														<a href={"/daniel/" + item.user_id} className="text-dark"><img className="mt-1" src={item.avatar} width={40} height={40} style={{ borderRadius: "50%" }}></img></a>
													</div>
													<div className="col-9 mt-2"><b>{item.nickname}</b></div>
													<div className="col-1 mt-2"><i className="fa-solid fa-ellipsis-vertical"></i></div>
												</div>
											</div>
											<div className="col-12 " style={{ borderBottom: "1px solid", borderLeft: "1px solid", borderRight: "1px solid", borderRadius: "5px;" }}>
												<div className="row my-3">
													<div className="col-12">
														<div id={"carouselExampleControls" + item.id} className="carousel slide" data-ride="carousel">
															<div className="carousel-inner">
																{item.image?.length > 0 ?
																	<>
																		{item.image.map((image) =>
																			<div className="carousel-item active">
																				<img src={image} className="d-block w-100" alt="..."></img>
																			</div>
																		)
																		}
																	</>
																	:
																	<>
																		{item.image[0]}
																	</>
																}
															</div>
															<button className="carousel-control-prev" type="button" data-target={"#carouselExampleControls" + item.id} data-slide="prev">
																<span className="carousel-control-prev-icon" aria-hidden="true"></span>
																<span className="sr-only">Previous</span>
															</button>
															<button className="carousel-control-next" type="button" data-target={"#carouselExampleControls" + item.id} data-slide="next">
																<span className="carousel-control-next-icon" aria-hidden="true"></span>
																<span className="sr-only">Next</span>
															</button>
														</div>
													</div>
													<div className="col-1 my-2 text-danger"><h5><i className="fa-solid fa-heart"></i></h5></div>
													<div className="col-1 my-2"><h5><i className="fa-brands fa-facebook-messenger"></i></h5></div>
													<div className="col-9 my-2"><h5><i className="fa-solid fa-paper-plane"></i></h5></div>
													<div className="col-1 my-2"><h5><i className="fa-solid fa-bookmark"></i></h5></div>
													<div className="col-12">{item.likes} отметок <b>"Нравится"</b></div>
													<div className="col-12 my-3">{item.description}</div>
													<div className="col-12" style={{ opacity: "0.5" }}>Посмотреть все коментарии (4,123)</div>
													<div className="col-12 mt-3" style={{ opacity: "0.5" }}><small>день назад</small></div>
												</div>
											</div>
											<div className="col-12" style={{ borderRight: "1px solid", borderLeft: "1px solid", borderBottom: "1px solid", borderRadius: "5px" }}>
												<div className="row">
													<div className="col-1"><h5><i className=" mt-3 fa-solid fa-face-smile"></i></h5></div>
													<div className="col-8 mt-2" style={{ opacity: "0.5" }}>Добавьте комемнтарии....</div>
													<div className="col-3 mt-2 text-primary" style={{ opacity: "0.5" }}>Опубликовать</div>
												</div>
											</div>
										</div>
									)}
								</>
								: <></>
							}
						</div>
					</div>
				</div>
			</div>
			<div className="modal" tabindex="-1" id="modalA">
				<div className="modal-dialog">
					<div className="modal-content">
						<div cloass="mdal-header">
							<h5 className="modal-title">
								<div className="container">
									<div className="row">
										<div className="col-12 text-center">
										</div>
									</div>
								</div></h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>
								<div className="container">
									<div className="row">
										<div className="col-12 text-center">
											<div className="row">
												<div className="col-12">
													<h5><b>Создание публикации</b></h5>
													<hr></hr>
												</div>

												<div className="col-12"><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSm87jDClOqtr5JLoqfOLB0MdyoC01O0SoZ1uI_K6nqjSKpBwtm"></img></div>
												<div className="col-12">Перетащите сюда фото и видео</div>
												<div className="col-3"></div>
												<div className="col-6">
													<button className="btn form-control text-light btn-primary">Выбрать с компютера</button>
												</div>
												<div className="col-3"></div>
											</div>
										</div>
									</div>
								</div>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Lenta;