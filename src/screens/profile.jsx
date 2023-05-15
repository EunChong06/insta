import { useEffect } from "react";
import { publics, users } from "../api/api";

const Profile = () => {
	const local = localStorage.getItem('id');
	const Logged = () => {
		if (local == null) {
			window.location.href = '/';
		}
	}
	useEffect(() => {
		Logged();
	}, [])
	const userDetails = users.filter(i => i.id == local);
	const posts = publics.filter(i => i.user_id == local);
	return (

		<div className="container-fluid">
			<div className="row" style={{ borderBottom: "1px solid" }}>
				<div className="col-md-12 text-center my-3">
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
			<div className="col-md-12">
				<div className="row">
					<div className="col-md-2"></div>
					<div className="col-md-6 mt-3">
						<img style={{ borderRadius: 90 }} src={userDetails[0].avatar} width={100} height={100} ></img>
					</div>
					<div className="col-md-4 mt-4">
						<div className="row">
							<div className="col-md-12">
								<h3>{userDetails[0].nickname}</h3>
							</div>
							<div className="col-md-12">
								<a href="/setting"><button className="bg-light text-dark ml-3 form-control">Редактировать профил</button></a>
							</div>
							<div className="col-md-2">
								<a href="/profilesetting"><i className="fa-solid fa-gear ml-3"></i></a>
							</div>
							<div className="col-4 text-center"><b>{posts.length}публикации</b></div>
							<div className="col-4 text-center"><b><a href="/followers">подписчиков</a></b></div>
							<div className="col-4 text-center"><b><a href="/following">подписок</a></b></div>
						</div>
						<div className="col-md-1"></div>
					</div>
				</div>
			</div>
			<div className="col-md-12">
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-4">
						<nav>
							<div className="nav nav-tabs" id="nav-tab" role="tablist">
								<a className="nav-link active text-dark" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><i className="fa-solid fa-table-cells mr-1"></i>ПУБЛИКАЦИИ</a>
								<a className="nav-link text-dark" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><i className="fa-solid fa-bookmark mr-1"> </i>СОХРАНЕНИЕ</a>
							</div>
						</nav>
						<div className="tab-content" id="nav-tabContent">
							<div className="tab-pane fade show active text-center" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
								<div className="row">
									{posts.length > 0 ?
										<>
											{posts.map((item) =>
												<div className="col-md-4 mt-2">
													<a href={"/post/" + item.id}>
														<img src={item.image[0]} height={160} width={"100%"}></img>
													</a>
												</div>
											)
											}
										</>
										:
										<div className="col-md-12 text-center">Нет публикаций</div>
									}

								</div>
							</div>
							<div className="tab-pane fade text-center" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

							</div>
							<div className="tab-pane fade text-center" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

							</div>
						</div>
					</div>
				</div>
				<div className="col-md-3"></div>
			</div>
		</div>
	);
}
export default Profile;