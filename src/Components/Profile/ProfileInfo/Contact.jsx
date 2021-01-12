import s from "./ProfileInfo.module.css";
import youtube from "../../../img/youtube.svg";
import instagram from "../../../img/instagram.svg";
import twitter from "../../../img/twitter.svg";
import facebook from "../../../img/facebook.svg";
import website from "../../../img/website.svg";
import github from "../../../img/github.svg";
import mainLink from "../../../img/mainLink.svg";
import vk from "../../../img/vk.svg";

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

const Contact = ({ contactKey: key, contacts }) => {
    return (
        <a
            className={s.contact}
            href={
                contacts[key].includes("https://")
                    ? contacts[key]
                    : `https://${contacts[key]}`
            }
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={contactLogo[key]} alt={key} />
        </a>
    );
};

export default Contact;
