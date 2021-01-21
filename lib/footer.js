import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faInstagram, faMedium, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Container from '@material-ui/core/Container'

const Footer = () => {
    return (
        <footer color="secondary">
            <Container>
            <span>Anima's Stuff &copy; 2021. All Rights Reserved.</span>
            <span>
                <a href="https://twitter.com/animafps" aria-label="twitter"><FontAwesomeIcon icon={faTwitter} size="lg"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://twitch.tv/animafps" aria-label="twitch"><FontAwesomeIcon icon={faTwitch} size="lg"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://youtube.com/animafps" aria-label="youtube"><FontAwesomeIcon icon={faYoutube} size="lg"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://instagram.com/animafps" aria-label="instagram"><FontAwesomeIcon icon={faInstagram} size="lg"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://animafps.medium.com" aria-label="medium"><FontAwesomeIcon icon={faMedium} size="lg"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://discord.com/invite/xJdQxps" aria-label="discord"><FontAwesomeIcon icon={faDiscord} size="lg"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/animafps" aria-label="Github"><FontAwesomeIcon icon={faGithub} size="lg"/></a>
            </span>
            </Container>
        </footer>
    )
};

export default Footer
