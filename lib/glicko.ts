import glicko2 from "./glicko2";
import { forEach, isUndefined } from "lodash";
const cma = require("cumulative-moving-average");

function compositeOpponent(a: any[], b: any[], win: number, vol?: number) {
  if (isUndefined(vol)) {
    vol = 0.06;
  }

  const means = {
    a: {
      rating: cma(),
      rd: cma(),
    },
    b: {
      rating: cma(),
      rd: cma(),
    },
  };

  forEach(
    a,
    function (player: { getRating: () => number; getRd: () => number }) {
      means.a.rating.push(player.getRating());
      means.a.rd.push(player.getRd());
    }
  );

  forEach(
    b,
    function (player: { getRating: () => number; getRd: () => number }) {
      means.b.rating.push(player.getRating());
      means.b.rd.push(player.getRd());
    }
  );

  const glck = new glicko2.Glicko2({ vol: vol });
  const ac = glck.makePlayer(means.a.rating.value, means.a.rd.value);
  const bc = glck.makePlayer(means.b.rating.value, means.b.rd.value);

  const matches: any[][] = [];

  a.forEach(function (player: any) {
    matches.push([player, bc, win]);
  });
  b.forEach(function (player: any) {
    matches.push([ac, player, win]);
  });

  return matches;
}

function updateRatings(array: any[]) {
  const matches: any[][] = [];
  array.forEach(
    (i) => {
      let team1: any[] = [];
      let team2: any[] = [];
      i.forEach((e: any, index: number) => {
        teams.forEach((o) => {
          if (o.short == e && index == 0) {
            team1 = o.members;
          } else if (o.short == e && index == 1) {
            team2 = o.members;
          }
        });
      });
      compositeOpponent(team1, team2, i[2]).forEach((o) => {
        matches.push(o);
      });
    }
  );
  glicko.updateRatings(matches);
  countMatches(array);
}

function getTeamRating(team: string) {
  let ratingTotal = 0;
  let numberInTeam = 0;
  teams.forEach((i) => {
    if (i.short == team) {
      i.members.forEach((e) => {
        ratingTotal += e.getRating();
        numberInTeam += 1;
      });
    }
  });
  return ratingTotal / numberInTeam;
}

function getTeamRd(team: string) {
  let rdTotal = 0;
  let numberInTeam = 0;
  teams.forEach((i) => {
    if (i.short == team) {
      i.members.forEach((e) => {
        rdTotal += e.getRd();
        numberInTeam += 1;
      });
    }
  });
  return rdTotal / numberInTeam;
}

function countMatches(array: any[]) {
  array.forEach(
    (i: number[] | { members: any[]; name: string; short: string }[]) => {
      i.forEach((e: any) => {
        teams.forEach((o) => {
          if (o.short == e) {
            o.played += 1;
          }
        });
      });
    }
  );
}

const settings = {
  tau: 0.5,
  rating: 500,
  rd: 350,
  vol: 0.06,
};

const glicko = new glicko2.Glicko2(settings);

const Steej = glicko.makePlayer();
const Fraze = glicko.makePlayer();
const Camma = glicko.makePlayer();
const foedanny = glicko.makePlayer();
const dandaking = glicko.makePlayer();
const Phyrigian = glicko.makePlayer();
const Crib = glicko.makePlayer();
const elim = glicko.makePlayer();
const rk = glicko.makePlayer();
const tjk = glicko.makePlayer();
const jim1 = glicko.makePlayer();
const yuki = glicko.makePlayer();
const wch = glicko.makePlayer();
const crus = glicko.makePlayer();
const Python = glicko.makePlayer();
const Stral = glicko.makePlayer();
const f0oster = glicko.makePlayer();
const ultra = glicko.makePlayer();
const dc_p = glicko.makePlayer();
const chv = glicko.makePlayer();
const fishy = glicko.makePlayer();
const fearZZz = glicko.makePlayer();
const ecent = glicko.makePlayer();
const Anima = glicko.makePlayer();
const SHrulez = glicko.makePlayer();
const mike = glicko.makePlayer();
const omyah = glicko.makePlayer();
const MRSB = glicko.makePlayer();
const raV = glicko.makePlayer();
const casp = glicko.makePlayer();
const vertigo = glicko.makePlayer();
const sky = glicko.makePlayer();
const Mintsnaps = glicko.makePlayer();
const Rolly = glicko.makePlayer();
const Fuzzy = glicko.makePlayer();
const Swampiestnnovgrouputz = glicko.makePlayer();
const wineworm = glicko.makePlayer();
const jerry = glicko.makePlayer();
const TwoSpoons = glicko.makePlayer();
const Ultimate_Sacrifice = glicko.makePlayer();
const Asp = glicko.makePlayer();
const brandan = glicko.makePlayer();
const Saltyy = glicko.makePlayer();
const Angus = glicko.makePlayer();
const BiGWoRM = glicko.makePlayer();
const eggE = glicko.makePlayer();
const Sooza = glicko.makePlayer();
const dirtbox = glicko.makePlayer();
const Profanum = glicko.makePlayer();
const murdz = glicko.makePlayer();
const Chugg = glicko.makePlayer();
const QHAT = glicko.makePlayer();
const ckm = glicko.makePlayer();
const Night = glicko.makePlayer();
const MuTAnT = glicko.makePlayer();
const kolos4l = glicko.makePlayer();
const prosk = glicko.makePlayer();
const elefanta = glicko.makePlayer();
const stervejerbs = glicko.makePlayer();
const three = glicko.makePlayer();
const Aeol = glicko.makePlayer();
const rats0up = glicko.makePlayer();
const donna = glicko.makePlayer();
const Bobbicals = glicko.makePlayer();
const phylum = glicko.makePlayer();
const DeportRamen = glicko.makePlayer();
const vorest = glicko.makePlayer();
const arnold = glicko.makePlayer();

const teams = [
  {
    members: [Fraze, Camma, Steej],
    name: "cy@",
    short: "cya",
    played: 0,
    active: true,
  },
  {
    members: [foedanny, dandaking, Phyrigian],
    name: "Three Big Balls",
    short: "threebb",
    played: 0,
    active: true,
  },
  {
    members: [Crib, elim, rk],
    name: "2g",
    short: "twog",
    played: 0,
    active: true,
  },
  {
    members: [tjk, jim1, yuki],
    name: "DICBoys",
    short: "dic",
    played: 0,
    active: true,
  },
  {
    members: [wch, crus, Python],
    name: "fuN",
    short: "fun",
    played: 0,
    active: true,
  },
  {
    members: [Stral, f0oster, ultra],
    name: "dz",
    short: "dzqual1",
    played: 0,
    active: false,
  },
  {
    members: [Stral, QHAT, ultra],
    name: "dz",
    short: "dz",
    played: 0,
    active: true,
  },
  {
    members: [dc_p, chv, fishy],
    name: "Sal",
    short: "sal",
    played: 0,
    active: true,
  },
  {
    members: [fearZZz, Anima, ecent],
    name: "Anti*",
    short: "anti",
    played: 0,
    active: true,
  },
  {
    members: [SHrulez, mike, omyah],
    name: "CLUMP",
    short: "clump",
    played: 0,
    active: true,
  },
  {
    members: [MRSB, raV, casp],
    name: "Mon",
    short: "mon",
    played: 0,
    active: true,
  },
  {
    members: [vertigo, sky, Mintsnaps],
    name: "Fusion",
    short: "fusion",
    played: 0,
    active: true,
  },
  {
    members: [Rolly, Fuzzy, Swampiestnnovgrouputz],
    name: "GRUMP",
    short: "grump",
    played: 0,
    active: true,
  },
  {
    members: [wineworm, jerry, TwoSpoons],
    name: "Too Old For Dick Jokes",
    short: "tofdj",
    played: 0,
    active: true,
  },
  {
    members: [Saltyy, Angus, BiGWoRM],
    name: "Solo Team 1",
    short: "solo1",
    played: 0,
    active: false,
  },
  {
    members: [Ultimate_Sacrifice, Asp, brandan],
    name: "soul4",
    short: "soul4",
    played: 0,
    active: false,
  },
  {
    members: [eggE, Sooza, dirtbox, Profanum, murdz, Chugg],
    name: "Cooked Esports",
    short: "cooked",
    played: 0,
    active: true,
  },
  {
    members: [Ultimate_Sacrifice, ckm, Night],
    name: "itz gaming",
    short: "itz",
    played: 0,
    active: true,
  },
  {
    members: [MuTAnT, kolos4l, prosk],
    name: "Knights of Darkness",
    short: "kod",
    played: 0,
    active: true,
  },
  {
    name: "B O N G",
    short: "bong",
    members: [elefanta, stervejerbs, three],
    played: 0,
    active: true,
  },
  {
    name: "vex",
    short: "vex",
    members: [Asp, brandan, Aeol, Night],
    played: 0,
    active: true,
  },
  {
    name: "Tuned Air",
    short: "tnnovgroup",
    members: [rats0up, donna, phylum],
    played: 0,
    active: false,
  },
  {
    name: "Tuned Air",
    short: "tn",
    members: [rats0up, donna, Bobbicals],
    played: 0,
    active: true,
  },
  {
    name: "THUMP",
    short: "thump",
    members: [DeportRamen, vorest, arnold],
    played: 0,
    active: true
  }
];

const OctoberQual1 = [
  ["cya", "anti", 0],
  ["anti", "mon", 1],
  ["cya", "solo1", 1],
  ["anti", "clump", 2 / 3],
  ["dic", "grump", 1],
  ["fun", "fusion", 1],
  ["threebb", "tofdj", 1],
  ["sal", "cooked", 1],
  ["twog", "soul4", 1],
  ["dzqual1", "mon", 1],
  ["cya", "anti", 1],
  ["dic", "fun", 1],
  ["threebb", "sal", 1],
  ["twog", "dzqual1", 1],
  ["cya", "dic", 1],
  ["threebb", "twog", 1],
  ["solo1", "clump", 0],
  ["grump", "fusion", 0],
  ["tofdj", "cooked", 0],
  ["soul4", "mon", 0],
  ["dzqual1", "clump", 1],
  ["sal", "fusion", 1],
  ["fun", "cooked", 1],
  ["anti", "mon", 2 / 3],
  ["dzqual1", "sal", 0],
  ["fun", "anti", 1 / 3],
  ["dic", "sal", 1 / 3],
  ["anti", "twog", 1],
  ["sal", "anti", 2 / 3],
  ["cya", "threebb", 1],
  ["threebb", "sal", 1],
  ["cya", "threebb", 2 / 5],
];
updateRatings(OctoberQual1);

const OctoberQual2 = [
  ["dic", "mon", 1],
  ["dz", "clump", 1],
  ["fun", "itz", 2 / 3],
  ["twog", "fusion", 1],
  ["itz", "fusion", 1],
  ["clump", "mon", 2 / 3],
  ["dic", "dz", 2 / 3],
  ["fun", "clump", 1],
  ["dic", "itz", 2 / 3],
  ["fun", "clump", 1],
  ["dz", "twog", 0],
  ["dic", "fun", 1],
  ["dz", "dic", 1 / 3],
  ["twog", "dic", 1],
];
updateRatings(OctoberQual2);

const OctoberFinals = [
  ["itz", "grump", 0],
  ["kod", "clump", 1],
  ["itz", "clump", 0],
  ["grump", "kod", 2 / 3],
  ["kod", "itz", 1],
  ["grump", "clump", 1 / 3],
  ["fusion", "thump", 1],
  ["bong", "mon", 0],
  ["mon", "fusion", 2 / 3],
  ["thump", "bong", 1],
  ["bong", "fusion", 0],
  ["thump", "mon", 0],
  ["grump", "fusion", 1],
  ["mon", "kod", 3 / 4],
  ["grump", "mon", 2 / 5],
  ["threebb", "fun", 1],
  ["anti", "twog", 3 / 5],
  ["cya", "dz", 1],
  ["sal", "dic", 3 / 4],
  ["threebb", "twog", 1],
  ["cya", "sal", 1],
  ["threebb", "cya", 1 / 4],
];
updateRatings(OctoberFinals);

const NovemberGroups = [
  ["sal", "grump", 1],
  ["dz", "anti", 1],
  ["dz", "grump", 1],
  ["vex", "sal", 0],
  ["anti", "vex", 1],
  ["anti", "tnnovgroup", 1],
  ["anti", "grump", 1],
  ["dz", "vex", 1],
  ["sal", "tnnovgroup", 1],
  ["tnnovgroup", "vex", 1],
  ["tnnovgroup", "dz", 0],
  ["tnnovgroup", "grump", 1 / 3],
  ["cya", "anti", 1],
  ["cya", "vex", 1],
  ["cya", "dz", 1],
  ["anti", "sal", 1 / 3],
  ["cya", "sal", 2 / 3],
  ["cya", "tnnovgroup", 1],
  ["cya", "grump", 1],
  ["dz", "sal", 1 / 3],
  ["clump", "threebb", 0],
  ["thump", "threebb", 0],
  ["clump", "twog", 0],
  ["twog", "thump", 1],
  ["twog", "mon", 1],
  ["mon", "thump", 1],
  ["kod", "threebb", 0],
  ["mon", "threebb", 0],
  ["mon", "kod", 1 / 3],
  ["twog", "kod", 1],
  ["twog", "threebb", 1 / 3],
  ["clump", "thump", 2 / 3],
  ["thump", "kod", 0],
  ["clump", "kod", 1 / 3],
  ["clump", "mon", 1 / 3],
  ["grump", "mon", 0],
];
updateRatings(NovemberGroups);

const NovemberFinals = [
  ["thump", "vex", 0],
  ["grump", "vex", 1],
  ["clump", "tn", 0],
  ["grump", "tn", 1 / 3],
  ["cya", "mon", 1],
  ["twog", "dz", 3 / 4],
  ["threebb", "anti", 3 / 5],
  ["sal", "kod", 1],
  ["cya", "twog", 3 / 4],
  ["threebb", "sal", 2 / 5],
  ["cya", "sal", 3 / 4],
];
updateRatings(NovemberFinals);

export default function getRankingData(): {
  name: string;
  rating: number;
  rd: number;
  played: number;
}[] {
  return teams
    .map((i) => {
      return {
        name: i.name,
        rating: getTeamRating(i.short),
        rd: getTeamRd(i.short),
        played: i.played,
        active: i.active,
      };
    })
    .sort((a, b) => {
      if (a.rating > b.rating || !b.active) {
        return -1;
      }
      if (b.rating > a.rating && b.active) {
        return 1;
      }
      return 0;
    });
}
