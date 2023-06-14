import github from "../icons/githubicon.svg"
import linkedin from "../icons/linkedinicon.svg"
const Footer = () => (
    <div className="FooterStuff">
        <footer>
            <p>Made with 💖</p>
            <a href="https://github.com/thossain30"><img src={github}></img></a>
            <a class="linkedin" href="https://www.linkedin.com/in/tamjid-hossain-550060192/" ><img src={linkedin}></img></a>
        </footer>
    </div>
);

export default Footer;