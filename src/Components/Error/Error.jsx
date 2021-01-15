import s from "./Error.module.css";
import close from "../../img/close.svg";

const Error = ({ errorMessage, deleteGlobalError }) => {
    return (
        <div className={s.error}>
            <div className={s.errorMessage}>
                {errorMessage}
                <button onClick={deleteGlobalError} className={s.closeButton}>
                    <img src={close} alt="X" />
                </button>
            </div>
        </div>
    );
};

export default Error;
