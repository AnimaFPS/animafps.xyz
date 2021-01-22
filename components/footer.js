import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faInstagram, faMedium, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="mt-auto py-3 bg-dark">
            <Container>
                <Row>
                    <Col>
                    <span className="text-muted">Anima's Stuff &copy; 2021. All Rights Reserved.</span>
                    </Col>
                    <Col>
                        <span className="float-right">
                            <a href="https://twitter.com/animafps" aria-label="twitter"><FontAwesomeIcon icon={faTwitter} size="lg" width="20px"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://twitch.tv/animafps" aria-label="twitch"><FontAwesomeIcon icon={faTwitch} size="lg" width="20px"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://youtube.com/animafps" aria-label="youtube"><FontAwesomeIcon icon={faYoutube} size="lg" width="20px"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://instagram.com/animafps" aria-label="instagram"><FontAwesomeIcon icon={faInstagram} size="lg" width="20px"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://animafps.medium.com" aria-label="medium"><FontAwesomeIcon icon={faMedium} size="lg" width="20px"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://discord.com/invite/xJdQxps" aria-label="discord"><FontAwesomeIcon icon={faDiscord} size="lg" width="20px"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://github.com/animafps" aria-label="Github"><FontAwesomeIcon icon={faGithub} size="lg" width="20px"/></a>
                        </span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer
