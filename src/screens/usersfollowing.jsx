import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { followings, publics, users } from "../api/api";

const Usersfollowing=()=>{
    const local = localStorage.getItem('id');
    const Logged = () =>{
        if(local == null){
            window.location.href = '/';
        }
    }
    useEffect(()=>{
        Logged();
    },[])
    const params = useParams();
    const id = params.id;
	const user = users.filter(i => i.id == id);
    const followers = followings.filter(i => i.user_id == id);
    const post = publics.filter(i => i.id == id);
    console.log('user', user)
    return(
        <div>
        <div className="container">
            <div className="row">
                <div className="col-11">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3>Ваши подписки</h3>
                        </div>
                        <div className="col-12">
                            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            {followers != null ?
                            <>
                            {followers.map((item)=>
                            <div className="col-12 my-3 text-dark">
                                <a href={"/daniel/"+item.follower_id}>
                                    <div className="row text-dark">
                                        <div className="col-4">
                                            <img src={item.follower_avatar} width={50} height={50} style={{borderRadius: "50%"}}></img>
                                        </div>
                                        <div className="col-5">
                                            {item.follower_name}
                                            <br></br>
                                            <small style={{opacity:"0.5"}}>{item.description}</small>
                                        </div>
                                        <div className="col-3">
                                            <button className="form-control btn bnt-light border">подписки</button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                                )}
                                </>
                                :<></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1">
                    <a href="/profile"><i class="fa-solid fa-x"></i></a>
                </div>
            </div>
        </div>
   </div>
    )
}
export default Usersfollowing;