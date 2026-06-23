// ============================================================
//  RYAN'S WORLD CUP BUSTER 2026 — DATA FILE
//  Edit this file to update scores, scorers and standings.
// ============================================================

// ── PLAYERS ─────────────────────────────────────────────────
// Each player has:
//   name        : display name
//   country     : their drafted country
//   countryFlag : flag emoji for their country
//   scorer      : their top scorer pick
//   scorerNat   : the country the scorer plays for
//   tp          : team points earned so far
//   sp          : scorer points earned so far
//   gd          : goal difference (country only) so far
//   cg          : number of country games played
//   sg          : number of scorer games played
//   gwOnePos    : their position at the END of game week 1 (used for arrows)

export const players = [
  { name:"Heitor", country:"Brazil",      countryFlag:"🇧🇷", scorer:"Kane",       scorerNat:"England",   tp:4,  sp:2, gd:3,  cg:2, sg:1, gwOnePos:6  },
  { name:"Seán",   country:"England",     countryFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", scorer:"Messi",      scorerNat:"Argentina", tp:4,  sp:5, gd:2,  cg:2, sg:2, gwOnePos:1  },
  { name:"John",   country:"Morocco",     countryFlag:"🇲🇦", scorer:"Havertz",    scorerNat:"Germany",   tp:4,  sp:2, gd:1,  cg:2, sg:2, gwOnePos:7  },
  { name:"Louise", country:"France",      countryFlag:"🇫🇷", scorer:"Mbappé",     scorerNat:"France",    tp:6,  sp:4, gd:5,  cg:2, sg:2, gwOnePos:2  },
  { name:"Ryan",   country:"Colombia",    countryFlag:"🇨🇴", scorer:"Vini Jr.",   scorerNat:"Brazil",    tp:3,  sp:2, gd:2,  cg:1, sg:2, gwOnePos:3  },
  { name:"Tomás",  country:"Germany",     countryFlag:"🇩🇪", scorer:"Raphinha",   scorerNat:"Brazil",    tp:6,  sp:0, gd:7,  cg:2, sg:2, gwOnePos:4  },
  { name:"Peter",  country:"Argentina",   countryFlag:"🇦🇷", scorer:"Ronaldo",    scorerNat:"Portugal",  tp:6,  sp:2, gd:5,  cg:2, sg:2, gwOnePos:5  },
  { name:"Jamie",  country:"Croatia",     countryFlag:"🇭🇷", scorer:"Haaland",    scorerNat:"Norway",    tp:0,  sp:4, gd:-2, cg:1, sg:2, gwOnePos:8  },
  { name:"Cormac", country:"Belgium",     countryFlag:"🇧🇪", scorer:"Yamal",      scorerNat:"Spain",     tp:2,  sp:1, gd:0,  cg:2, sg:2, gwOnePos:9  },
  { name:"Eamonn", country:"Spain",       countryFlag:"🇪🇸", scorer:"Alvarez",    scorerNat:"Argentina", tp:4,  sp:0, gd:4,  cg:2, sg:2, gwOnePos:10 },
  { name:"Jack",   country:"Netherlands", countryFlag:"🇳🇱", scorer:"Olise",      scorerNat:"France",    tp:4,  sp:0, gd:4,  cg:2, sg:1, gwOnePos:11 },
  { name:"Luan",   country:"Portugal",    countryFlag:"🇵🇹", scorer:"Oyarzabal",  scorerNat:"Spain",     tp:4,  sp:2, gd:4,  cg:2, sg:2, gwOnePos:12 },
];

// ── GAME WEEKS ───────────────────────────────────────────────
// status: "past" | "current" | "upcoming"
// Each match has:
//   time         : display time string e.g. "13 Jun, 11pm"
//   home/away    : country names (must match flags object in app.js)
//   score        : null = not played yet, or "3-1" format
//   leftPills    : players whose country is the HOME team
//   rightPills   : players whose country is the AWAY team
//   scorerPills  : scorer-watch entries (scorer's country is in the match, or standalone)
//
// For leftPills / rightPills each entry is:
//   { player, scorerInMatch }
//   scorerInMatch: name of scorer if they play for this country, else null
//
// For scorerPills each entry is:
//   { player, scorer, goals }
//   goals: null = pending, 0 = played but no goal, 1/2/3 = goals scored

export const gameWeeks = [

  // ── GAME WEEK 1 ──────────────────────────────────────────
  {
    id: "gw1",
    label: "Game Week 1 — Results",
    stage: "stage-usa",
    card: "results-card",
    status: "past",
    matches: [
      { time:"13 Jun, 11pm", home:"Brazil",      away:"Morocco",    score:"1-1",
        leftPills:  [{ player:"Heitor", scorerPlayer:"Ryan",  scorer:"Vini Jr.", goals:1 }],
        rightPills: [{ player:"John",   scorerPlayer:null,    scorer:null,       goals:null }],
        scorerPills:[] },

      { time:"14 Jun, 6pm",  home:"Germany",     away:"Curaçao",    score:"7-1",
        leftPills:  [{ player:"Tomás",  scorerPlayer:"John",  scorer:"Havertz",  goals:2 }],
        rightPills: [], scorerPills:[] },

      { time:"14 Jun, 9pm",  home:"Netherlands", away:"Japan",      score:"2-2",
        leftPills:  [{ player:"Jack",   scorerPlayer:null, scorer:null, goals:null }],
        rightPills: [], scorerPills:[] },

      { time:"15 Jun, 5pm",  home:"Spain",       away:"Cabo Verde", score:"0-0",
        leftPills:  [{ player:"Eamonn", scorerPlayer:null, scorer:null, goals:null }],
        rightPills: [],
        scorerPills:[{ player:"Cormac", scorer:"Yamal",     goals:0 },
                     { player:"Luan",   scorer:"Oyarzabal", goals:0 }] },

      { time:"15 Jun, 8pm",  home:"Belgium",     away:"Egypt",      score:"1-1",
        leftPills:  [{ player:"Cormac", scorerPlayer:null, scorer:null, goals:null }],
        rightPills: [], scorerPills:[] },

      { time:"16 Jun, 8pm",  home:"France",      away:"Senegal",    score:"3-1",
        leftPills:  [{ player:"Louise", scorerPlayer:"Louise", scorer:"Mbappé", goals:2 }],
        rightPills: [],
        scorerPills:[{ player:"Jack", scorer:"Olise", goals:0 }] },

      { time:"16 Jun, 11pm", home:"Iraq",        away:"Norway",     score:"1-4",
        leftPills:[], rightPills:[],
        scorerPills:[{ player:"Jamie", scorer:"Haaland", goals:2 }] },

      { time:"17 Jun, 2am",  home:"Argentina",   away:"Algeria",    score:"3-0",
        leftPills:  [{ player:"Peter", scorerPlayer:null, scorer:null, goals:null }],
        rightPills: [],
        scorerPills:[{ player:"Seán",   scorer:"Messi",   goals:3 },
                     { player:"Eamonn", scorer:"Alvarez", goals:0 }] },

      { time:"17 Jun, 6pm",  home:"Portugal",    away:"Congo DR",   score:"1-1",
        leftPills:  [{ player:"Luan",  scorerPlayer:"Peter", scorer:"Ronaldo", goals:0 }],
        rightPills: [], scorerPills:[] },

      { time:"17 Jun, 9pm",  home:"England",     away:"Croatia",    score:"4-2",
        leftPills:  [{ player:"Seán",  scorerPlayer:"Heitor", scorer:"Kane", goals:2 }],
        rightPills: [{ player:"Jamie", scorerPlayer:null, scorer:null, goals:null }],
        scorerPills:[] },

      { time:"18 Jun, 3am",  home:"Colombia",    away:"Uzbekistan", score:"3-1",
        leftPills:  [{ player:"Ryan",  scorerPlayer:null, scorer:null, goals:null }],
        rightPills: [], scorerPills:[] },
    ]
  },

  // ── GAME WEEK 2 ──────────────────────────────────────────
  {
    id: "gw2",
    label: "Game Week 2 — Fixtures",
    stage: "stage-mex",
    card: "mex-card",
    status: "current",   // ← change to "past" when GW2 is done
    matches: [
      { time:"19 Jun, 9pm",  home:"Brazil",       away:"Haiti",        score:"3-0",
        leftPills:  [{ player:"Heitor", scorerPlayer:"Ryan", scorer:"Vini Jr.", goals:1 }],
        rightPills: [], scorerPills:[] },

      { time:"19 Jun, 11pm", home:"Scotland",      away:"Morocco",      score:"0-1",
        leftPills:  [],
        rightPills: [{ player:"John", scorerPlayer:null, scorer:null, goals:null }],
        scorerPills:[] },

      { time:"20 Jun, 6pm",  home:"Netherlands",   away:"Sweden",       score:"5-1",
        leftPills:  [{ player:"Jack", scorerPlayer:null, scorer:null, goals:null }],
        rightPills: [], scorerPills:[] },

      { time:"20 Jun, 9pm",  home:"Germany",       away:"Côte d'Ivoire",score:"2-1",
        leftPills:  [{ player:"Tomás", scorerPlayer:"John", scorer:"Havertz", goals:0 }],
        rightPills: [], scorerPills:[] },

      { time:"21 Jun, 5pm",  home:"Spain",         away:"Saudi Arabia", score:"4-0",
        leftPills:  [{ player:"Eamonn", scorerPlayer:null, scorer:null, goals:null }],
        rightPills: [],
        scorerPills:[{ player:"Cormac", scorer:"Yamal",     goals:1 },
                     { player:"Luan",   scorer:"Oyarzabal", goals:2 }] },

      { time:"21 Jun, 8pm",  home:"Belgium",       away:"IR Iran",      score:"0-0",
        leftPills:  [{ player:"Cormac", scorerPlayer:null, scorer:null, goals:null }],
        rightPills: [], scorerPills:[] },

      { time:"22 Jun, 6pm",  home:"Argentina",     away:"Austria",      score:"2-0",
        leftPills:  [{ player:"Peter", scorerPlayer:null, scorer:null, goals:null }],
        rightPills: [],
        scorerPills:[{ player:"Seán",   scorer:"Messi",   goals:2 },
                     { player:"Eamonn", scorer:"Alvarez", goals:0 }] },

      { time:"22 Jun, 10pm", home:"France",        away:"Iraq",         score:"3-0",
        leftPills:  [{ player:"Louise", scorerPlayer:"Louise", scorer:"Mbappé", goals:2 }],
        rightPills: [],
        scorerPills:[{ player:"Jack", scorer:"Olise", goals:0 }] },

      { time:"23 Jun, 1am",  home:"Norway",        away:"Senegal",      score:"3-2",
        leftPills:[], rightPills:[],
        scorerPills:[{ player:"Jamie", scorer:"Haaland", goals:2 }] },

      { time:"23 Jun, 6pm",  home:"Portugal",      away:"Uzbekistan",   score:"4-0",
        leftPills:  [{ player:"Luan", scorerPlayer:"Peter", scorer:"Ronaldo", goals:2 }],
        rightPills: [], scorerPills:[] },

      { time:"23 Jun, 9pm",  home:"England",       away:"Ghana",        score:"0-0",
        leftPills:  [{ player:"Seán", scorerPlayer:"Heitor", scorer:"Kane", goals:0 }],
        rightPills: [], scorerPills:[] },

      { time:"24 Jun, 12am", home:"Panama",        away:"Croatia",      score:null,
        leftPills:  [],
        rightPills: [{ player:"Jamie", scorerPlayer:null, scorer:null, goals:null }],
        scorerPills:[] },

      { time:"24 Jun, 3am",  home:"Colombia",      away:"Congo DR",     score:null,
        leftPills:  [{ player:"Ryan", scorerPlayer:null, scorer:null, goals:null }],
        rightPills: [], scorerPills:[] },
    ]
  },

  // ── GAME WEEK 3 ──────────────────────────────────────────
  {
    id: "gw3",
    label: "Game Week 3 — Fixtures",
    stage: "stage-can",
    card: "can-card",
    status: "upcoming",  // ← change to "current" when GW3 starts
    matches: [
      { time:"24 Jun, 6pm",  home:"Morocco",       away:"Haiti",        score:null,
        leftPills:  [{ player:"John", scorerPlayer:null, scorer:null, goals:null }],
        rightPills: [], scorerPills:[] },

      { time:"24 Jun, 6pm",  home:"Scotland",      away:"Brazil",       score:null,
        leftPills:  [],
        rightPills: [{ player:"Heitor", scorerPlayer:"Ryan", scorer:"Vini Jr.", goals:null }],
        scorerPills:[] },

      { time:"25 Jun, 4pm",  home:"Ecuador",       away:"Germany",      score:null,
        leftPills:  [],
        rightPills: [{ player:"Tomás", scorerPlayer:"John", scorer:"Havertz", goals:null }],
        scorerPills:[] },

      { time:"25 Jun, 7pm",  home:"Tunisia",       away:"Netherlands",  score:null,
        leftPills:  [],
        rightPills: [{ player:"Jack", scorerPlayer:null, scorer:null, goals:null }],
        scorerPills:[] },

      { time:"26 Jun, 8pm",  home:"Norway",        away:"France",       score:null,
        leftPills:  [],
        rightPills: [{ player:"Louise", scorerPlayer:"Louise", scorer:"Mbappé", goals:null }],
        scorerPills:[{ player:"Jack",  scorer:"Olise",   goals:null },
                     { player:"Jamie", scorer:"Haaland", goals:null }] },

      { time:"26 Jun, 8pm",  home:"Uruguay",       away:"Spain",        score:null,
        leftPills:  [],
        rightPills: [{ player:"Eamonn", scorerPlayer:null, scorer:null, goals:null }],
        scorerPills:[{ player:"Luan",   scorer:"Oyarzabal", goals:null },
                     { player:"Cormac", scorer:"Yamal",     goals:null }] },

      { time:"26 Jun, 11pm", home:"New Zealand",   away:"Belgium",      score:null,
        leftPills:  [],
        rightPills: [{ player:"Cormac", scorerPlayer:null, scorer:null, goals:null }],
        scorerPills:[] },

      { time:"27 Jun, 10pm", home:"Panama",        away:"England",      score:null,
        leftPills:  [],
        rightPills: [{ player:"Seán", scorerPlayer:"Heitor", scorer:"Kane", goals:null }],
        scorerPills:[] },

      { time:"27 Jun, 10pm", home:"Croatia",       away:"Ghana",        score:null,
        leftPills:  [{ player:"Jamie", scorerPlayer:null, scorer:null, goals:null }],
        rightPills: [],
        scorerPills:[{ player:"Jamie", scorer:"Haaland", goals:null }] },

      { time:"28 Jun, 12.30am", home:"Colombia",   away:"Portugal",     score:null,
        leftPills:  [{ player:"Ryan", scorerPlayer:null, scorer:null, goals:null }],
        rightPills: [{ player:"Luan", scorerPlayer:"Peter", scorer:"Ronaldo", goals:null }],
        scorerPills:[] },

      { time:"28 Jun, 3am",  home:"Jordan",        away:"Argentina",    score:null,
        leftPills:  [],
        rightPills: [{ player:"Peter", scorerPlayer:null, scorer:null, goals:null }],
        scorerPills:[{ player:"Seán",   scorer:"Messi",   goals:null },
                     { player:"Eamonn", scorer:"Alvarez", goals:null }] },
    ]
  }

];
