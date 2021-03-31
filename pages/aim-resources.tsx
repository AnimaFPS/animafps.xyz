import { NextSeo } from "next-seo";
import Link from "next/link";
import { Table } from "react-bootstrap";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

export default function aimResources(): JSX.Element {
  return (
    <>
      <NextSeo
        title="Aggregated Aiming Resources By Anima"
        description="Big aggregated sheet of every Aiming Resource evermade including guides general and specific routines, videos and more"
        canonical="https://animafps.xyz/aim-resources"
        openGraph={{
          images: [
            {
              url: "https://animafps.xyz/images/aim-resources.png",
            },
          ],
        }}
      />
      <Navbar url="/aim-resources" />
      <Container>
        <br />
        <Typography component="h1" variant="h3" align="center" gutterBottom>
          Aggregated Aiming Resources
        </Typography>
        <p>
          <b>Bold</b> are recommended resources
        </p>
        <p>
          if you want to submit a resource that should be on this list please{" "}
          <a href="https://forms.gle/frYCiMGLtmHQCP1z8">submit a form</a>
        </p>
        <p>
          <a href="https://www.reddit.com/r/FPSAimTrainer/comments/hmngov/every_aiming_resources_in_a_aggregated_list/">
            Link to Reddit post
          </a>
        </p>
      </Container>
      <Container maxWidth="xl">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item md={11} xs={12}>
            <Table bordered responsive="md" className="shadow-sm">
              <thead
                className="thead-dark"
                style={{ position: "sticky", top: "0" }}
              >
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Title/Link</th>
                  <th scope="col">Descritption</th>
                  <th scope="col">Author(s)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    scope="row"
                    rowSpan={13}
                    className="align-middle bg-light text-dark text-center"
                    id="documents"
                  >
                    Documents
                  </th>
                  <td className="align-middle">
                    <a href="https://bit.ly/2l3jZTf" className="text-reset">
                      Voltaic's Aim Journey
                    </a>
                  </td>
                  <td className="align-middle">
                    All about aim theory and basics to aim training. a really
                    good place to start for new people
                  </td>
                  <td className="align-middle" rowSpan={4}>
                    <a
                      href="https://twitter.com/VoltaicHQ"
                      className="text-reset"
                    >
                      Voltaic/Sini
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://bit.ly/2TIudqA "
                      className="text-reset font-weight-bold"
                    >
                      Voltaic Advice FAQ
                    </a>
                  </td>
                  <td className="align-middle">
                    Common questions and answers from sparky advice channel
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/spreadsheets/d/1XbXf8Q_WTW5ekxuZWhvO64-kvNBvusqX3bghhBaok4I/edit#gid=1655895202"
                      className="text-reset font-weight-bold"
                    >
                      Voltaic Benchmarks
                    </a>
                  </td>
                  <td className="align-middle">
                    The best way to test and messure improvement
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1gI9Vmj69AGaUnyphhHnKEIvKs8PhZfEJsNaczYsRvro/edit"
                      className="text-reset"
                    >
                      Mindset and attitude
                    </a>
                  </td>
                  <td className="align-middle">
                    Simple resources to help with improving your mindset and
                    attitude to get the most out of training and perform
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://www.dropbox.com/s/sggvgbwpz9e5bih/Strafe%20Aiming%20101.pdf?dl=0"
                      className="text-reset font-weight-bold"
                    >
                      {" "}
                      Strafe Aiming 101
                    </a>
                  </td>
                  <td className="align-middle">
                    Theory of strafe aiming also includes routines
                  </td>
                  <td className="align-middle" rowSpan={2}>
                    <a
                      href="https://twitter.com/vF_Aimer7"
                      className="text-reset"
                    >
                      Aimer7
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://www.dropbox.com/s/vaba3potfhf9jy1/KovaaK%20aim%20workout%20routines.pdf?dl=0"
                      className="text-reset"
                    >
                      Aimer7's Original Aim Workout/ Guide
                    </a>
                  </td>
                  <td className="align-middle">
                    Very much outdated for the routines but the theory is good
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1beDDud6BQu3DMXOrhAUZaFGP4V1568UCdiCAfS82j60/edit"
                      className="text-reset"
                    >
                      Aim Coaching 101
                    </a>
                  </td>
                  <td className="align-middle">
                    All about what aim coaching is and why its bad and good.
                    start here if you want aim coaching
                  </td>
                  <td className="align-middle" rowSpan={2}>
                    <a
                      href="https://twitter.com/AnimaFPS"
                      className="text-reset"
                    >
                      Anima
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1ws_gBG9SxMbSoBLl-42yi2o0hLCLXPofppZMrpHODMA/edit"
                      className="text-reset font-weight-bold"
                    >
                      Sensitivities 101
                    </a>
                  </td>
                  <td className="align-middle">
                    All about sensitivites and the benefits and downsides of
                    different sens as well as how to choose a range to play in
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1JNxtnqlLq6ijDd3rXZQRFEp0SslVHNdbc2RWCWwMHZ4/edit"
                      className="text-reset"
                    >
                      Ins Aiming FAQ
                    </a>
                  </td>
                  <td className="align-middle">
                    Also a good starting place for new people with common
                    questions and answers
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/thisisins"
                      className="text-reset"
                    >
                      Ins
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1GhTDVWNHWOiHhN_izTypImaVSUfsSjAKZw5dzRq1-xI/edit"
                      className="text-reset"
                    >
                      Aim Improvement Guide
                    </a>
                  </td>
                  <td className="align-middle">
                    Simple improvement techniques
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/CoachBitey"
                      className="text-reset"
                    >
                      Coach Bitey
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://drive.google.com/drive/folders/1QPeHExrg2lQmSbNcIMwpPnK90och116e"
                      className="text-reset"
                    >
                      Aimbot.EXE Guide
                    </a>
                  </td>
                  <td className="align-middle">
                    Kinda outdated but still good for low level people as a
                    beginner guide
                  </td>
                  <td className="align-middle">Aimbot.exe</td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1R4Z9LHa4USqqqR1IjEaTBY4TpJPabU5zXMtR8kxHSKw/edit"
                      className="text-reset"
                    >
                      Plateaus by krascsi
                    </a>
                  </td>
                  <td className="align-middle">
                    What plateaus are and how to overcome them when training
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/krascsi"
                      className="text-reset"
                    >
                      krascsi
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1gSd9naWMeLcpRMmbPbuYx2D6AC9oxvWqoDDyyZcmJTs/edit"
                      className="text-reset"
                    >
                      Aim Training Scheduling
                    </a>
                  </td>
                  <td className="align-middle">
                    A guide on when and how long to aim train for maximum
                    efficiency
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/ProsperAims"
                      className="text-reset"
                    >
                      Prosper
                    </a>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    rowSpan={12}
                    className="align-middle bg-dark text-white text-center"
                    id="routines-general"
                  >
                    Routines (general)
                  </th>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1BPiDxbaqQVxInKwFfdr_AJdJDYVGKbUBGHJDKOeUy-Q/edit"
                      className="text-reset font-weight-bold"
                    >
                      Voltaic Fundamental aim training
                    </a>
                  </td>
                  <td className="align-middle">
                    The best basic routine with the benchmarks built in. My
                    recomendation for a simple routine for all levels
                  </td>
                  <td className="align-middle" rowSpan={2}>
                    <a
                      href="https://twitter.com/VoltaicHQ"
                      className="text-reset"
                    >
                      Voltaic/ Sini{" "}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1wTzR9rPzS9QbA3lCxutHNk9wmSfSxV3F-PIE50kexZs/edit"
                      className="text-reset"
                    >
                      Voltaic recomended scenarios
                    </a>
                  </td>
                  <td className="align-middle">
                    Good basis to make a personalised routine and find new
                    scenarios{" "}
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://www.dropbox.com/s/w316s768shjissf/Tammas%27%20Routine%20Addendum.pdf?dl=0"
                      className="text-reset font-weight-bold"
                    >
                      Tammas' Routine Addendum
                    </a>
                  </td>
                  <td className="align-middle">
                    Updated Aimer7s routine to remove outdate scenarios and with
                    newer techniques and progression
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/DexterTammas"
                      className="text-reset"
                    >
                      Tammas
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://www.reddit.com/r/FPSAimTrainer/comments/ha15it/zeeq_playlists_extra/"
                      className="text-reset font-weight-bold"
                    >
                      Zeeq's Advanced Playlists
                    </a>
                  </td>
                  <td className="align-middle">
                    Really good clicking routines for advanced players
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/vF_Zeeq"
                      className="text-reset"
                    >
                      Zeeq
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://bit.ly/2B0dzvZ"
                      className="text-reset font-weight-bold"
                    >
                      sdk's Routines and general guides
                    </a>
                  </td>
                  <td className="align-middle">
                    A lot of good scenarios and you can find some golden
                    routines and includes specific routines like: Reactivity,
                    CPS training, Speed, Ult smoothness and some good aim theory
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/Free_sdk"
                      className="text-reset"
                    >
                      sdk
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/cowsur/status/1266733112547069952?s=20"
                      className="text-reset"
                    >
                      7 day overkill routine for grinders
                    </a>
                  </td>
                  <td className="align-middle">
                    For advanced. Each day is 2+ hours and covers almost all raw
                    aiming aspects.
                  </td>
                  <td className="align-middle">
                    <a href="https://twitter.com/cowsur" className="text-reset">
                      Cowser
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1TADrvn1K0ThstNklJGQohi-qxGGd3jJ0PqlbDN-A2jg/edit"
                      className="text-reset"
                    >
                      Laizirz's Routine
                    </a>
                  </td>
                  <td className="align-middle">
                    A routine for experienced aimers or future crackheads. just
                    a simple complete routine with some good unknown scenarios
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/laizirz"
                      className="text-reset"
                    >
                      Laizirz
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/spreadsheets/d/13GMsQHxSlnOoACyxFBqUKxfS-sNwHwYjFPSGETaTOLY/edit"
                      className="text-reset"
                    >
                      Routine Generator Sheet
                    </a>
                  </td>
                  <td className="align-middle">
                    Creates a new routine everyday
                  </td>
                  <td className="align-middle">
                    <a href=" " className="text-reset">
                      Fallen
                    </a>
                    <a
                      href="https://twitter.com/daanlve"
                      className="text-reset"
                    >
                      , Daan
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://drive.google.com/drive/folders/1q9jqby1zLhaBOF3ncZXczSOwOqkBLuLr"
                      className="text-reset"
                    >
                      Krascsi's Kovaak's playlists
                    </a>
                  </td>
                  <td className="align-middle">
                    Covering most aiming styles/problems players might have. The
                    names of playlists should speak for themselves, like what
                    they are for
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/krascsi"
                      className="text-reset"
                    >
                      Krascsi
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1zod4D-Em_j8V4caqunS53VrkbWM4Qxe1qzpHTEYiLlo/edit"
                      className="text-reset"
                    >
                      wA Playlist Compilation
                    </a>
                  </td>
                  <td className="align-middle">
                    A List of Indivdual .plo (playlist) files for Kovaaks
                    includes some of the routines on this list
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/wowaims"
                      className="text-reset"
                    >
                      wow Aims
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://github.com/riddbtw/kovaaks-plos"
                      className="text-reset"
                    >
                      Collection of playlists for Kovaaks
                    </a>
                  </td>
                  <td className="align-middle">
                    Another Collection of .json files for playlists for a lot of
                    resources in this list for kovaak's inbuilt playlist feature
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/btwridd"
                      className="text-reset"
                    >
                      ridd
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://drive.google.com/drive/folders/1lc048HvewnkIqBP7kwDOj3-v6ctmmcC8"
                      className="text-reset"
                    >
                      Lapu4's Playlists
                    </a>
                  </td>
                  <td className="align-middle">
                    A collection of 7 different playlist files created by lapu4
                    with a focus on static targets
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/Lapu4Lapua"
                      className="text-reset"
                    >
                      Lapu4
                    </a>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    rowSpan={17}
                    className="align-middle bg-light text-dark text-center"
                    id="routines-specific"
                  >
                    Routines (specific)
                  </th>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1KClHkbHYJpJ6m81DKF3CO8THmn04GHuHvrslOsp8TbE/edit"
                      className="text-reset font-weight-bold"
                    >
                      PureRoutines
                    </a>
                  </td>
                  <td className="align-middle">
                    Three amazing routines at the moment; PureSmoothness and
                    PureSmoothness 1by1, Target switching, Movement and a game
                    specific routine for Fortnite as well as some good advice
                    for issue specific scenarios
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/PureGofficial"
                      className="text-reset"
                    >
                      PureG
                    </a>
                    <a
                      href="https://twitter.com/Free_sdk"
                      className="text-reset"
                    >
                      , sdk
                    </a>
                    <a
                      href="https://twitter.com/sens0001"
                      className="text-reset"
                    >
                      , sens
                    </a>
                    <a
                      href="https://twitter.com/Daanlve"
                      className="text-reset"
                    >
                      , Daan
                    </a>
                    <a
                      href="https://twitter.com/billiiss"
                      className="text-reset"
                    >
                      , bilis
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://bit.ly/gameroutines"
                      className="text-reset font-weight-bold"
                    >
                      Voltaic Game Specific aim training{" "}
                    </a>
                  </td>
                  <td className="align-middle">
                    Many game specific routines which include: CS/Val, Fortnite,
                    AFPS, R6, Hyperscape, Apex, LG 1v1(AFPS), COD: Warzone
                  </td>
                  <td className="align-middle" rowSpan={2}>
                    <a
                      href="https://twitter.com/VoltaicHQ"
                      className="text-reset"
                    >
                      Voltaic/ Sini
                    </a>
                    <a
                      href="https://twitter.com/vF_Aimer7"
                      className="text-reset"
                    >
                      , Aimer7
                    </a>
                    , Many other people check the bottom of the docs
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://bit.ly/3cNRNIR"
                      className="text-reset font-weight-bold"
                    >
                      Voltaic Issue specifc aim training
                    </a>
                  </td>
                  <td className="align-middle">
                    Smoothness & Precision, Speed, Large Angles, Reactivity
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a href="https://bit.ly/2AWLqWz" className="text-reset">
                      Fusha's cs/val Routines
                    </a>
                  </td>
                  <td className="align-middle">
                    Basic but good cs/ val routine with warmup
                  </td>
                  <td className="align-middle">
                    <a href="https://twitter.com/fu5ha" className="text-reset">
                      Fusha
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1fRxyJAoYFuTBxj8k7aungATn3jYHQn_LgKmAHTbyo8o/edit"
                      className="text-reset"
                    >
                      Diabotical/Quake Routine
                    </a>
                  </td>
                  <td className="align-middle">
                    Covers everything you need for diabotical and all afps
                    aiming needs
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/AnimaFPS"
                      className="text-reset"
                    >
                      Anima
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/cowsur/status/1276479584637247488?s=20"
                      className="text-reset"
                    >
                      Cowser Low TTK routine
                    </a>
                  </td>
                  <td className="align-middle">
                    For low ttk games (Valorant, csgo, COD and ect.)
                  </td>
                  <td className="align-middle">
                    <a href="https://twitter.com/cowsur" className="text-reset">
                      cowsur
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1oLgzAQGc-o3aSZ1Ho7yZT2kkAat366tOAVUGWRjDj4A/edit"
                      className="text-reset"
                    >
                      xen0's Hyperscape routine
                    </a>
                  </td>
                  <td className="align-middle">
                    Real quick and simple routine for the new hyperscape game
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/xen0cidal"
                      className="text-reset"
                    >
                      xen0
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://www.reddit.com/r/FPSAimTrainer/comments/hk0boa/kovaaks_playlist_valorant_made_by_vf_zeeq_for_pyth/"
                      className="text-reset font-weight-bold"
                    >
                      Valorant routine for G2 Pyth
                    </a>
                  </td>
                  <td className="align-middle">
                    A valorant playlist made by Zeeq for G2 Pyth
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/vF_Zeeq"
                      className="text-reset"
                    >
                      Zeeq
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://www.reddit.com/r/FPSAimTrainer/comments/hn66aa/hyper_scape_routine/"
                      className="text-reset"
                    >
                      sdk's Hyperscape routine
                    </a>
                  </td>
                  <td className="align-middle">
                    Good hyperscape routine with applied scenarios
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/Free_sdk"
                      className="text-reset"
                    >
                      sdk
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1ibwRAt6BhaXrWQZA050eKpBI2o1ePuNBSLyMLSlKdfo/edit"
                      className="text-reset"
                    >
                      Tunez's Aimgod CS/Val
                    </a>
                  </td>
                  <td className="align-middle">
                    Good routine for cs/val for aimbeast aim trainer
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/Tunezus"
                      className="text-reset"
                    >
                      Tunez
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1BVVULzERkEF2EwK5n8nSaDrb5BHXSrrGV3vp6bQySbg/edit"
                      className="text-reset"
                    >
                      Fallen's Fortnite Guide
                    </a>
                  </td>
                  <td className="align-middle">
                    Simple Fortnite specific routine with 2 tiers and
                    information around aim trainer settings
                  </td>
                  <td className="align-middle" rowSpan={2}>
                    <a href=" " className="text-reset">
                      Fallen
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1ZLxIw49PqQkMMXyYYAhtaY8r11I5Ngq61jxYyirdUaM/edit"
                      className="text-reset"
                    >
                      Fallen's Tac FPS Routine
                    </a>
                  </td>
                  <td className="align-middle">
                    Simple cs/ val routine with 2 tiers
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1D0jso1Yqut0y4jHrtP9p6JUNFYZsr7Vox4xRG4pUqoU/edit"
                      className="text-reset"
                    >
                      Chiri's OW Tracer Routine
                    </a>
                  </td>
                  <td className="align-middle">
                    Game specific routine for overwatch Tracer by a God tracer
                    player
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/Chiriseong"
                      className="text-reset"
                    >
                      Chiriseong
                    </a>
                    <a
                      href="https://twitter.com/manacatfan"
                      className="text-reset"
                    >
                      , Mana
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1pcQOk_WXui1uwUOm6r1mDdvUiWUzgPzLx6kGoE0D6Sw/edit"
                      className="text-reset"
                    >
                      steadegy Valorant Routine
                    </a>
                  </td>
                  <td className="align-middle">
                    Simple Valorant specific routin with 2 tiers of difficulty
                  </td>
                  <td className="align-middle">
                    <a href="https://twitch.tv/steadegy" className="text-reset">
                      steadegy
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1B-9eMW5egwZWSgOzIPLqo0MdlEYcyslspUYOC3pllMo/edit"
                      className="text-reset"
                    >
                      drekes4's Fortnite kovaak scenarios V1
                    </a>
                  </td>
                  <td className="align-middle">
                    A collection of recomended scenarios for Fortnite with tiers
                    and categories
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/drekes4"
                      className="text-reset"
                    >
                      drekes4
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/12ZCy65kVJfgAwoDDHefVXzlRCzRifMmc7syzhrULoYM/edit"
                      className="text-reset"
                    >
                      Aim Training by DrUninstall
                    </a>
                  </td>
                  <td className="align-middle">
                    A set of game specific advice and kovaaks routines for
                    Warzone/COD, a complete playlist, tacfps and Fortnite
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/DrUninstall"
                      className="text-reset"
                    >
                      DrUninstall
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/18Mf6P4t6IEdJi6J548s3RGQw41WQQSn2jGhVqgYULec/edit#heading=h.kw0s6eyi8i70"
                      className="text-reset font-weight-bold"
                    >
                      Pure Apex Routine
                    </a>
                  </td>
                  <td className="align-middle">
                    A fantastic new routine using 1b1 method and a great set of
                    specifcally made scenarios for a hard training routine for
                    Apex Legends but it maybe too hard for new players
                  </td>
                  <td className="align-middle">
                    <a href="https://twitter.com/PureGofficial">
                      PureG and many contributers
                    </a>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    rowSpan={4}
                    className="align-middle bg-dark text-white text-center"
                    id="videos"
                  >
                    Videos
                  </th>
                  <td className="align-middle">
                    <a
                      href="https://www.youtube.com/playlist?list=PLGmrwYxedS9DCV3Wg41sbLtQLZteaFXz0"
                      className="text-reset font-weight-bold"
                    >
                      HOW TO (Scenario) Guides
                    </a>
                  </td>
                  <td className="align-middle">
                    Amazing series with videos teaching about every type of
                    aiming. videos in this series: 1wall6targets te, Ground
                    Plaza No ufo, Target switching, 1wall6target small, moving
                    dots and thin gauntlet
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/christmasdenier"
                      className="text-reset"
                    >
                      Christmasiscancelled
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://www.youtube.com/watch?v=x-OLhZbZauI"
                      className="text-reset"
                    >
                      Which aim trainer is the best
                    </a>
                  </td>
                  <td className="align-middle">
                    Understand what each aim trainer offers.
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/ProsperAims"
                      className="text-reset"
                    >
                      Prosper
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://www.youtube.com/playlist?list=PLSp3kVF_HRAcVFECtN8U0JB1ENFTUAojp"
                      className="text-reset"
                    >
                      Properly Using KovaaK's to Improve series
                    </a>
                  </td>
                  <td className="align-middle">
                    A good and basic series introduction into aiming and kovaaks
                    concepts with videos incuding(Setting up Kovaaks, Training
                    Properly, Benchmarks and Routines, Sensitivites)
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/DragonAims"
                      className="text-reset"
                    >
                      DragonAims
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://www.youtube.com/playlist?list=PL7fhQKTLcpNvuznbhZFnfkTC2lM3quNqB"
                      className="text-reset"
                    >
                      Gaming and Aiming Explained Series
                    </a>
                  </td>
                  <td className="align-middle">
                    Series of small videos explaing the basics of everything
                    aiming and gaming related There are not many videos but
                    there are many in the works with 1 or 2 a week being
                    released
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/AnimaFPS"
                      className="text-reset"
                    >
                      Anima
                    </a>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    rowSpan={11}
                    className="align-middle bg-light text-dark text-center"
                    id="misc"
                  >
                    Misc
                  </th>
                  <td className="align-middle">
                    <a
                      href="https://bit.ly/2u8zZaF"
                      className="text-reset font-weight-bold"
                    >
                      Wrist stretch and posture guide
                    </a>
                  </td>
                  <td className="align-middle">
                    Important to keep your health and stretches good when aiming
                    and gaming
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/Kastor_uy"
                      className="text-reset"
                    >
                      Kastor
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a href="https://bit.ly/2WB8Vvm" className="text-reset">
                      Benchmark score tracking sheet
                    </a>
                  </td>
                  <td className="align-middle">
                    A semi-automated script to record and track how close you
                    are to the voltaic scores
                  </td>
                  <td className="align-middle" rowSpan={4}>
                    <a
                      href="https://twitter.com/VoltaicHQ"
                      className="text-reset"
                    >
                      Voltaic
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://github.com/VoltaicHQ/Progress-Sheet-Updater"
                      className="text-reset"
                    >
                      Auto Progess Update Tool for Benchmarks
                    </a>
                  </td>
                  <td className="align-middle">
                    A fully automated Script to inport your kovaaks scores for
                    the voltaic benchmarks to the above tracking sheet in real
                    time
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://docs.google.com/document/d/1BRCTMJysIQP0aie6q9rnBrWxj_xLhA6pvFxIxYoDZJQ/edit"
                      className="text-reset"
                    >
                      Health and improvement routines
                    </a>
                  </td>
                  <td className="align-middle">
                    Daily and life style routine to improve health and
                    improvement
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://discord.gg/invite/Voltaic"
                      className="text-reset font-weight-bold"
                    >
                      Voltaic Discord
                    </a>
                  </td>
                  <td className="align-middle">
                    Helpful discord with advice and coaching and benchmark
                    ranking system
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://github.com/Whisperrr/SensitivityRandomizer"
                      className="text-reset"
                    >
                      Sensitivity Randomiser
                    </a>
                  </td>
                  <td className="align-middle">
                    Smoothly changes sensititivty with mouse movement randomly
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/Whispperr"
                      className="text-reset"
                    >
                      Whisper
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://www.kovaak.com/sensitivity-matcher/"
                      className="text-reset"
                    >
                      Sensitivity Matcher Script
                    </a>
                  </td>
                  <td className="align-middle">
                    Match any sens to any game or find sens or find yaw values
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/Kovaak_of_qw"
                      className="text-reset"
                    >
                      Kovaak
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="http://bit.ly/30cWlUe"
                      className="text-reset font-weight-bold"
                    >
                      Mousepad Mastersheet
                    </a>
                  </td>
                  <td className="align-middle">
                    Big sheet for all about mousepad speed, durabilities and
                    recomendations
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/hoya_ow"
                      className="text-reset"
                    >
                      Hoya
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <Link href="/fov-convert">
                      <a className="text-reset">
                        FOV and Focal Length Scaling Conversion Calculator
                      </a>
                    </Link>
                  </td>
                  <td className="align-middle">
                    A FOV converter so you can convert different fovs and a
                    focal length scaling calculator
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/AnimaFPS"
                      className="text-reset"
                    >
                      Anima
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://github.com/nahuef/statsViewer"
                      className="text-reset"
                    >
                      statsViewer
                    </a>
                  </td>
                  <td className="align-middle">
                    Stats Viewer for Kovaak's FPS Aim Trainer script which
                    creates a webpage for your stats
                  </td>
                  <td className="align-middle">nahuef</td>
                </tr>
                <tr>
                  <td className="align-middle">
                    <a
                      href="https://github.com/sens0001/Kovaaks-Playlist-Manager"
                      className="text-reset"
                    >
                      Playlist manager
                    </a>
                  </td>
                  <td className="align-middle">
                    Manage your kovaaks playlists with this handy tool
                  </td>
                  <td className="align-middle">
                    <a
                      href="https://twitter.com/sens0001"
                      className="text-reset"
                    >
                      sens
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <p>
          Feedback very welcome to improve this sheet just DM me or reply on the
          reddit post
        </p>
      </Container>
      <Footer />
    </>
  );
}
