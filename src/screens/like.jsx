import { useEffect } from "react";

const Like=()=>{
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
                        <img src="https://www.instagram.com/static/images/web/	logged_out_wordmark.png/7a252de00b20.png" height={30}></img>
                    </div>
                    <div className="col-md-3 my-3">
                        <input type="" name="" placeholder="" className="form-control"></input>
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
                <div className="col-md-12 mt-4">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-3">
                            <img src="https://avatars.mds.yandex.net/i?id=37bd1e8df2b4772186f55e078ea2b743-4355070-images-thumbs&n=13" width="100%" height={250}></img>
                            <br></br>
                            <img className="mt-4" src="https://avatars.mds.yandex.net/i?id=ea1ae7a832bf877eb5bf312c445e1e65-5204674-images-thumbs&n=13" width="100%" height={250}></img>
                        </div>
                        <div className="col-md-6">
                            <img src="https://avatars.mds.yandex.net/i?id=4ea324db8023149c2bc1cb082de6295b-5310207-images-thumbs&n=13" width="100%" height={524}></img>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
                <div className="col-md-12 mt-4">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-3">
                            <img src="https://avatars.mds.yandex.net/i?id=c62bf30256b12ae1de544647674d88d0-4547856-images-thumbs&n=13" width="100%" height={250}></img>
                        </div>
                        <div className="col-md-3">
                            <img src="https://avatars.mds.yandex.net/i?id=2cf68932a76c3f068abc096356623825-5910984-images-thumbs&n=13" width="100%" height={250}></img>
                        </div>
                        <div className="col-md-3">
                            <img src="https://avatars.mds.yandex.net/i?id=80565ef25aab0be9408d897992c4840d-5496696-images-thumbs&n=13" width="100%" height={250}></img>
                        </div>
                        <div className="col-md-2"></div>		
                    </div>
                </div>
                <div className="col-md-12 mt-4">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-3">
                            <img src="https://avatars.mds.yandex.net/i?id=f3356ded1d050505dd75773bc8ae4a6e-5234915-images-thumbs&n=13" width="100%" height={250}></img>
                        </div>
                        <div className="col-md-3">
                            <img src="https://avatars.mds.yandex.net/i?id=c5e1f4d92d32664fe02826f41f89ea49-5734463-images-thumbs&n=13" width="100%" height={250}></img>
                        </div>
                        <div className="col-md-3">
                            <img src="https://avatars.mds.yandex.net/i?id=7031ca1b18da3a97e8af0b8e0e5fc02c-5650815-images-thumbs&n=13" width="100%" height={250}></img>
                        </div>
                        <div className="col-md-2"></div>		
                    </div>
                </div>
                <div className="col-md-12 mt-4">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-3">
                            <img src="https://avatars.mds.yandex.net/i?id=4657cf50d34e807cc15d14d81473c8c9-3584061-images-thumbs&n=13" width="100%" height={250}></img>
                            <br></br>
                            <img className="mt-4" src="https://avatars.mds.yandex.net/i?id=f2940721c689975c49d071409a153768-5334840-images-thumbs&n=13" width="100%" height={250}></img>
                        </div>
                        <div className="col-md-6">
                            <img src="https://avatars.mds.yandex.net/i?id=dc4a947e07c44afd3682bf6492a97aaa-4431925-images-thumbs&n=13" width="100%" height={524}></img>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
                <div className="col-md-12 mt-4">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-3">
                            <img src="https://avatars.mds.yandex.net/i?id=dce744ad52953dde938921ece116b400-4591401-images-thumbs&n=13" width="100%" height={250}></img>
                        </div>
                        <div className="col-md-3">
                            <img src="https://avatars.mds.yandex.net/i?id=12e2c5c1cd1f92b0f081059938b3145f-3028206-images-thumbs&n=13" width="100%" height={250}></img>
                        </div>
                        <div className="col-md-3">
                            <img src="https://avatars.mds.yandex.net/i?id=39de6343cb5bfb871379cd4aa0e1cdd9-5734356-images-thumbs&n=13" width="100%" height={250}></img>
                        </div>
                        <div className="col-md-2"></div>		
                    </div>
                </div>
                <div className="col-md-12 mt-4">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-3">
                            <img src="https://avatars.mds.yandex.net/i?id=c59002b4234504ae0dcda97351be94b8-5345374-images-thumbs&n=13" width="100%" height={250}></img>
                        </div>
                        <div className="col-md-3">
                            <img src="https://avatars.mds.yandex.net/i?id=310a2f63b42176b8002c5519717503c6-4034527-images-thumbs&n=13" width="100%" height={250}></img>
                        </div>
                        <div className="col-md-3">
                            <img src="https://avatars.mds.yandex.net/i?id=ea1ae7a832bf877eb5bf312c445e1e65-5204674-images-thumbs&n=13" width="100%" height={250}></img>
                        </div>
                        <div className="col-md-2"></div>		
                    </div>
                </div>
            </div>
        </div>
        )
    }
    export default Like;