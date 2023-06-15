import github from "../icons/githubicon.svg"
import linkedin from "../icons/linkedinicon.svg"
const Footer = () => (
    <div className="FooterStuff">
        <footer>
            <p>Made with 💖</p>
            <a href="https://github.com/thossain30" className="social"><img src={github}></img></a>
            <a href="https://www.linkedin.com/in/tamjid-hossain-550060192/" className="social"><img src={linkedin}></img></a>
        </footer>
    </div>
);

export default Footer;