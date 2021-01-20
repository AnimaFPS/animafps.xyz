import Head from 'next/head'
import { Jumbotron, NavDropdown, Nav , Navbar, Container, Button, Row, Col, Card } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Anima's Stuff</title>
        <meta charset="utf-8"/>
        <meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport"/>
        <meta content="Homepage for Anima's website" name="description"/>
        <meta content="summary_large_image" name="twitter:card"/>
        <meta content="@AnimaFPS" name="twitter:site"/>
        <meta content="Anima's Stuff" name="twitter:title"/>
        <meta content="Homepage for Anima's website" name="twitter:description"/>
        <meta content="@AnimaFPS" name="twitter:creator"/>
        <meta content="https://animafps.github.io/Screenshot.png" name="twitter:image"/>
        <meta content="Anima's Stuff" property="og:title"/>
        <meta content="article" property="og:type"/>
        <meta content="http://animafps.github.io" property="og:url"/>
        <meta content="https://animafps.github.io/Screenshot.png" property="og:image"/>
        <meta content="Homepage for Anima's website" property="og:description"/>
        <meta content="Anima's Stuff" property="og:site_name"/>
        <script data-cf-beacon='{"token": "f59c812d0cf444eb83480b0a41caf00a"}' defer="" src="https://static.cloudflareinsights.com/beacon.min.js"></script>
      </Head>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand>AnimaFPS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" active="true">Home</Nav.Link>
            <NavDropdown title="Math and Sens Conversion">
              <NavDropdown.Item href="/fov-convert">FOV Conversion</NavDropdown.Item>
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
      <Jumbotron className="text-center">
        <Container>
          <h1>Anima's Stuff/ Projects</h1>
          <p>Just all the stuff that I make and create that exist on this website as well as other cool things</p>
          <Button variant="primary" href="/about-me">About Me</Button>
        </Container>
      </Jumbotron>
      <div className="album py-5">
        <Container>
          <Row>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Link href="/fov-convert"><a>
                  <Image
                    src="/images/fov-convert.png"
                    alt="fov-convert"
                    width={1246}
                    height={878}
                  />
                </a></Link>
                <Card.Body>
                <Link href="/fov-convert"><a><Card.Title>FOV and Focal Length Scaling Converter/ Calculator</Card.Title></a></Link>
                  <Card.Text>
                    A calculator to convert different fov values per the fov aspect ratio and can calculate sensitivty change for a change in fov
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Link href="/dbt-callouts"><a>
                  <Image
                    src="/images/dbt-callouts.png"
                    alt="dbt-callouts"
                    width={1372}
                    height={877}
                  />
                </a></Link>
                <Card.Body>
                <Link href="/dbt-callouts"><a><Card.Title>Diabotical Competitive Map Callouts</Card.Title></a></Link>
                  <Card.Text>
                  A collection of the Diabotical competitive maps' minimaps with callouts overlayed
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Link href="/dbt-glicko"><a>
                  <Image
                    src="/images/dbt-glicko.png"
                    alt="dbt-glicko"
                    width={1333}
                    height={884}
                  />
                </a></Link>
                <Card.Body>
                <Link href="/dbt-glicko"><a><Card.Title>OCE Diabotical Team Rankings</Card.Title></a></Link>
                  <Card.Text>
                  An implementation of the Glicko2 rating system to rank the Oceania Diabotical competitive teams
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Link href="/aim-resources"><a>
                  <Image
                    src="/images/aim-resources.png"
                    alt="aim-resources"
                    width={1710}
                    height={901}
                  />
                </a></Link>
                <Card.Body>
                <Link href="/aim-resources"><a><Card.Title>Aggregate of Every Aiming Resource</Card.Title></a></Link>
                  <Card.Text>Big aggregated sheet of every Aiming Resource ever made including guides general and specific routines, videos and more</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Link href="/fpsmath"><a>
                  <Image
                    src="/images/fpsmath.png"
                    alt="fpsmath"
                    width={1280}
                    height={640}
                  />
                </a></Link>
                <Card.Body>
                <Link href="/fpsmath"><a><Card.Title>FPSMath Discord Bot</Card.Title></a></Link>
                  <Card.Text>A Discord bot designed to convert sensitivities, fovs, mouse feel across themselves and preset games</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="mt-auto py-3 bg-dark">
        <Container>
          <span className="text-muted">Anima's Stuff &copy; 2021. All Rights Reserved.</span>
          <span class="float-right">
            <a href="https://twitter.com/animafps"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://twitch.tv/animafps"><FontAwesomeIcon icon={faTwitch}/></a>
          </span>
        </Container>
      </footer>
    </>
  )
}
