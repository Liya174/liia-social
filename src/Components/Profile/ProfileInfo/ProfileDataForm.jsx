import s from "./ProfileInfo.module.css";
import thumbDown from "../../../img/thumbDown.svg";
import thumbUp from "../../../img/thumbUp.svg";
import Contact from "./Contact";

import save from "../../../img/save.svg";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ profile, quitEditMode }) => {
    const {
        aboutMe,
        contacts,
        lookingForAJob,
        lookingForAJobDescription,
        fullName,
    } = profile;
    return (
        <form className={s.userInfo}>
            <div className={s.nameBlock}>
                <h3 className={s.name}>{fullName}</h3>
                <button className={s.editButton} onClick={quitEditMode}>
                    <img className={s.editImage} src={save} alt="save" />
                </button>
            </div>
            <div className={s.jobStatus}>
                <p className={s.question}>Looking for a job:</p>
                <img
                    className={s.jobStatusImage}
                    src={lookingForAJob ? thumbUp : thumbDown}
                    alt="hm"
                />
                <p>{lookingForAJobDescription}</p>
            </div>
            <div className={s.aboutMe}>
                <p className={s.question}>About me:</p>
                <p>{aboutMe}</p>
            </div>
            <div className={s.userContacts}>
                <p className={s.question}>Contacts:</p>
                {Object.keys(contacts).map(
                    (key) =>
                        contacts[key] && (
                            <Contact
                                key={key}
                                contactKey={key}
                                contacts={contacts}
                            />
                        )
                )}
            </div>
        </form>
    );
};

export default reduxForm({ form: "profileInfo" })(ProfileDataForm);
