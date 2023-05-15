import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { storys } from "../api/api";

const Storys=()=>{
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
    const post = storys.filter(i => i.id == id);
    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row" style={{backgroundColor: "black"}}>
                        <div className="col-4 text-light">
                            <h3>Instagram</h3>
                        </div>
                        <div className="col-4">
                            <img src={post[0].image[0]} width={"100%"} height={597} style={{borderRadius:"20px"}}></img>
                        </div>
                        <div className="col-4">
                            <a href="/lenta"><i className="text-light fa-solid fa-xmark"></i></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Storys;