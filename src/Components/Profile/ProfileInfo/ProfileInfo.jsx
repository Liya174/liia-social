import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import thumbDown from "../../../img/thumbDown.svg";
import thumbUp from "../../../img/thumbUp.svg";
import youtube from "../../../img/youtube.svg";
import instagram from "../../../img/instagram.svg";
import twitter from "../../../img/twitter.svg";
import facebook from "../../../img/facebook.svg";
import website from "../../../img/website.svg";
import github from "../../../img/github.svg";
import mainLink from "../../../img/mainLink.svg";
import vk from "../../../img/vk.svg";

const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader />;
    }

    const {
        aboutMe,
        contacts,
        lookingForAJob,
        lookingForAJobDescription,
        fullName,
        userId,
        photos,
    } = props.userProfile;

    const contactLogo = {
        facebook,
        website,
        vk,
        twitter,
        instagram,
        youtube,
        github,
        mainLink,
    };

    const userContacts = [];
    for (let key in contacts) {
        if (contacts[key]) {
            console.log(contacts[key]);
            userContacts.push(
                <a
                    key={key}
                    className={s.contact}
                    href={
                        contacts[key].includes("https://")
                            ? contacts[key]
                            : `https://${contacts[key]}`
                    }
                    target="_blank"
                >
                    <img src={contactLogo[key]} />
                </a>
            );
        }
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.background}></div>

            <div className={s.informationBlock}>
                <img className={s.avatar} src={photos.large} alt="avatar" />
                <div className={s.userInfo}>
                    <h3 className={s.name}>{fullName}</h3>
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
                        {userContacts}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
