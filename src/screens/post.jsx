import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { publics } from "../api/api";

const Post = () => {
    const local = localStorage.getItem('id');
    const Logged = () => {
        if (local == null) {
            window.location.href = '/';
        }
    }
    useEffect(() => {
        Logged();
    }, [])
    const params = useParams();
    const id = params.id;
    const post = publics.filter(i => i.id == id);
    return (
        <div>
            <div classNameName="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6" style={{ border: "1px solid" }}>
                                <img src={post[0].image[0]} width={"100%"} height={"200"}></img>
                  
                                <div className="col-md-12" style={{ borderBottom: "1px solid" }}>

                                </div>
                                <div className="col-md-12" style={{ borderBottom: "1px solid" }}>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <img className="mt-1" src="https://avatars.mds.yandex.net/i?id=bc89a25e08cd8c116c8828faa6c122ca-4879412-images-thumbs&n=13" width={30} height={30} style={{ borderRadius: "50%" }}></img></div>
                                        <div className="col-md-1 mt-2">K.eh_1</div>
                                        <div className="col-md-10 mt-2">
                                            <small>
                                                Основной источник загрязнения воздуха в столице Кыргызстана — это уголь с высоким содержанием серы, которым отапливают дома в частном секторе. Об этом говорится в исследовании Финского метеорологического института для ООН.
                                                Отмечается, что с 2010 по 2019 год в Кыргызстане ежегодно 4100-5000 преждевременных смертей были связаны с загрязнением воздуха.Исследователи выяснили, что вклад столичной ТЭЦ в загрязнение воздуха составляет менее 1%.
                                                «В то же время 70% домохозяйств в Кыргызстане отапливаются углем, что вызывает наиболее опасные концентрации мелкодисперсных твердых частиц – PM2.5. Эти микроскопические частицы могут проникать через барьеры в легких и попадать в кровеносную систему, вызывая, например, сердечно-сосудистые и респираторные заболевания и рак легких», — говорится в отчете.
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-1dsjfhfsdowoipwevnksfslkfjsvij023efocokm===col-12 form-control vi12 my-2 text-danger"><h5><i className="fa-solid fa-heart"></i></h5></div>
                                        <div className="col-1 my-2"><h5><i className="fa-brands fa-facebook-messenger"></i></h5></div>
                                        <div className="col-9 my-2"><h5><i className="fa-solid fa-paper-plane"></i></h5></div>
                                        <div className="col-1 my-2"><h5><i className="fa-solid fa-bookmark"></i></h5></div>
                                    </div>
                                </div>
                                <div className="col-md-12">1,123,123 отметок <b>"Нравится"</b></div>
                                <div className="col-md-12" style={{ opacity: "0.5" }}>Посмотреть все коментарии (4,123)</div>
                                <div className="col-md-12 mt-3" style={{ opacity: "0.5" }}><small>день назад</small></div>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-1"><h5><i className=" mt-3 fa-solid fa-face-smile"></i></h5></div>
                                        <div className="col-md-8 mt-2" style={{ opacity: "0.5" }}>Добавьте комемнтарии....</div>
                                        <div className="col-md-3 mt-2 text-primary" style={{ opacity: "0.5" }}>Опубликовать</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;
