import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { followings, publics, users } from "../api/api";

const Usersfollowers=()=>{
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
    const follows = followings.filter(i => i.follower_id == id);
    const post = publics.filter(i => i.id == id);
    console.log('user', user)
    return(
        <div>
            <div className="container"> 
                <div className="row">
                    <div className="col-md-11 text-center">
                       <h3>подписчки</h3>
                    </div>
                    <div className="col-md-1">
                       <a href="/profile">
                            <i class="fa-solid fa-x"></i>
                        </a> 
                    </div>
                    <hr></hr>
                    {followings != null ?
				    <>
                    {follows.map((item)=>
                    <div className="col-md-12 my-3 text-dark">
                        <a href={"/daniel/"+item.user_id}>
                            <div className="row text-dark">
                                <div className="col-5">
                                    <img src={item.user_avatar} width={50} height={50} style={{borderRadius: "50%"}}></img></div>
                                <div className="col-4">
                                    {item.user_name}
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
    )
}
export default Usersfollowers;