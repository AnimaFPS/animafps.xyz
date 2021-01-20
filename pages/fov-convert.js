import Head from 'next/head'
import { NavDropdown, Nav , Navbar, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faInstagram, faMedium, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import FovConvertForm from '../lib/fov-convert'

export default function FovConvert() {
  return (
    <>
      <Head>
        <title>FOV and Focal Length Scaling Converter/ Calculator</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
        <meta name="description" content="A Calculator to convert different fov values to others per the fov aspect ratio"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@AnimaFPS"/>
        <meta name="twitter:title" content="FOV and Focal Length Scaling Converter/ Calculator"/>
        <meta name="twitter:description" content="A Calculator to convert different fov values to others per the fov aspect ratio"/>
        <meta name="twitter:creator" content="@AnimaFPS"/>
        <meta name="twitter:image" content="http://animafps.vercel.app/images/fov-convert.png"/>

        <meta property="og:title" content="FOV and Focal Length Scaling Converter/ Calculator"/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content="http://animafps.vercel.app/fov-convert/"/>
        <meta property="og:image" content="http://animafps.vercel.app/images/fov-convert.png"/>
        <meta property="og:description" content="A Calculator to convert different fov values to others per the fov aspect ratio"/>
        <meta property="og:site_name" content="Anima's Stuff"/>
      </Head>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand>AnimaFPS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Math and Sens Conversion" active>
              <NavDropdown.Item href="/fov-convert" active="true">FOV Conversion</NavDropdown.Item>
              <NavDropdown.Item href="/fpsmath">FPSMath Discord Bot</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Diabotical Stuff">
              <NavDropdown.Item href="/dbt-callouts">Diabotical 3v3 Map Callouts</NavDropdown.Item>
              <NavDropdown.Item href="/dbt-glicko">Diabotical OCE Team Ranking</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/aim-resources">Aim resources</Nav.Link>
            <Nav.Link href="/blog">Blog & Articles</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="shadow-sm">
        <br/>
        <h1>FOV and Focal Length Scaling Converter/ Calculator</h1>
        <br/>
        <FovConvertForm/>
      </Container>
      <footer className="mt-auto py-3 bg-dark">
        <Container>
          <span className="text-muted">Anima's Stuff &copy; 2021. All Rights Reserved.</span>
          <span className="float-right">
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
    </>
  )
}