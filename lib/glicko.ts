import glicko2 from "../lib/glicko2";

interface Players {
  name: string;
  glicko: any;
  matches: number[];
  history: any;
  active: boolean;
  played: number;
}

const settings = {
  tau: 0.5,
  rating: 1500,
  rd: 350,
  vol: 0.06,
};

const glicko = new glicko2.Glicko2(settings);

const cya = glicko.makePlayer();
const threebb = glicko.makePlayer();
const twog = glicko.makePlayer();
const sal = glicko.makePlayer();
const mon = glicko.makePlayer();
const kod = glicko.makePlayer();
const anti = glicko.makePlayer();
const grump = glicko.makePlayer();
const clump = glicko.makePlayer();
const tunedair = glicko.makePlayer();
const vex = glicko.makePlayer();
const dz = glicko.makePlayer();
const solo = glicko.makePlayer();
const dic = glicko.makePlayer();
const fun = glicko.makePlayer();
const cooked = glicko.makePlayer();
const tofdj = glicko.makePlayer();
const itz = glicko.makePlayer();
const bong = glicko.makePlayer();
const fusion = glicko.makePlayer();
const thump = glicko.makePlayer();

const players: {
  name: string;
  glicko: any;
  matches: number[];
  history: number[];
  rankhistory: number[];
  active: boolean;
  played: number;
}[] = [
  {
    name: "cy@",
    glicko: cya,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "3 Big Balls",
    glicko: threebb,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "Sal",
    glicko: sal,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "Monbois",
    glicko: mon,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "2g",
    glicko: twog,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "Knights of Darkness",
    glicko: kod,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "Anti*",
    glicko: anti,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "grump",
    glicko: grump,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "clump",
    glicko: clump,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "thump",
    glicko: thump,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "tuned air",
    glicko: tunedair,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "vex",
    glicko: vex,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "dz ",
    glicko: dz,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "solo team 1",
    glicko: solo,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "DICboys",
    glicko: dic,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "Too old for dick jokes",
    glicko: tofdj,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "fuN",
    glicko: fun,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "cooked",
    glicko: cooked,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "itz",
    glicko: itz,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "fusion",
    glicko: fusion,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
  {
    name: "B O N G",
    glicko: bong,
    matches: [],
    history: [],
    rankhistory: [],
    active: true,
    played: 0,
  },
];

function countMatches() {
  for (let i = 0, len = players.length; i < len; i++) {
    const player = players[i];
    for (let t = 0; t < player.glicko.getMatches(); t++) {
      player.matches.push(player.glicko.getOutcomes(t).toFixed(0));
    }
    player.played += player.glicko.getMatches();
  }
}

const matches = [];
matches.push([cya, solo, 1]);
matches.push([anti, clump, 2 / 3]);
matches.push([dic, grump, 1]);
matches.push([fun, fusion, 1]);
matches.push([threebb, tofdj, 1]);
matches.push([sal, cooked, 1]);
matches.push([twog, vex, 1]);
matches.push([dz, mon, 1]);
matches.push([cya, anti, 1]);
matches.push([dic, fun, 1]);
matches.push([threebb, sal, 1]);
matches.push([twog, dz, 1]);
matches.push([cya, dic, 1]);
matches.push([threebb, twog, 1]);
matches.push([solo, clump, 0]);
matches.push([grump, fusion, 0]);
matches.push([tofdj, cooked, 0]);
matches.push([vex, mon, 0]);
matches.push([dz, clump, 1]);
matches.push([sal, fusion, 1]);
matches.push([fun, cooked, 1]);
matches.push([anti, mon, 2 / 3]);
matches.push([dz, sal, 0]);
matches.push([fun, anti, 1 / 3]);
matches.push([dic, sal, 1 / 3]);
matches.push([anti, twog, 1]);
matches.push([sal, anti, 2 / 3]);
matches.push([cya, threebb, 1]);
matches.push([threebb, sal, 1]);
matches.push([cya, threebb, 2 / 5]);
glicko.updateRatings(matches);
countMatches();

export function getRankingData(): any {
  return (players.map((element) => {
    element.name
  }))
}
