import loaderImg from "../../../img/loader.svg";
import s from "./Preloader.module.css";

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img className={s.image} src={loaderImg} alt="preloader" />
        </div>
    );
};

export default Preloader;
