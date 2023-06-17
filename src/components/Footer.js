import github from "../icons/githubicon.svg"
import linkedin from "../icons/linkedinicon.svg"
const Footer = () => (
    <div className="FooterStuff">
        <footer>
            <p>Made with 💖</p>
            <a href="https://github.com/thossain30" className="logo-img" target="_blank" rel="noreferrer"><img src={github} alt="Github Link"></img></a>
            <a href="https://www.linkedin.com/in/tamjid-hossain-550060192/" target="_blank" rel="noreferrer" className="logo-img"><img src={linkedin} alt="Linkedin Link"></img></a>
        </footer>
    </div>
);

export default Footer;