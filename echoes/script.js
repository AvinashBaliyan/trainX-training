const $ = (s) => document.querySelector(s),
  esc = (s) =>
    String(s).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
const CORNERS = [
  [
    "💻",
    "Builders",
    "Apps, websites, AI, hackathons.",
    "#8fd1c9",
    "Development",
  ],
  ["🎨", "Designers", "Posters, UI, brand, video.", "#ffc83d", "Design"],
  [
    "🎤",
    "Storytellers",
    "Content, socials, hosting, photos.",
    "#9fe0b4",
    "Content & media",
  ],
  ["🎪", "Organisers", "Run events from idea to stage.", "#ff9d86", "Events"],
];
const PAST = [
  [
    "Smriti 2.0",
    "12 Oct 2026",
    "Ms. Neha Singh, MIET alumna (2011–15) and Manager at Coforge, will speak at Raman Block Audi 3. Her previous experience includes Google, Wipro and EY.",
  ],
  [
    "Smriti 1.0",
    "22 Sep 2026",
    "Our latest Smriti event brought students together for an evening of memories, ideas and connection.",
  ],
  [
    "Manthan 3.0",
    "Event series",
    "Manthan 3.0 brought students together to exchange ideas, learn and build new perspectives.",
  ],
  [
    "Manthan 2.0",
    "Event series",
    "Manthan 2.0 created a space for meaningful conversations, collaboration and fresh ideas.",
  ],
  [
    "Manthan 1.0",
    "Event series",
    "Manthan 1.0 started the series with students coming together to share ideas and experiences.",
  ],
  [
    "Hackathon Havoc 2.0",
    "11–12 Apr 2025",
    "First-years teamed up and built through the night, with prizes and plenty of noise.",
  ],
  [
    "From Code to Creation",
    "1 Apr 2025",
    "Harsh Tyagi walked us through AI and ML with Python, live and hands-on.",
  ],
  [
    "Decrypting the Dark",
    "28 Feb 2025",
    "A webinar on the dark web, cybersecurity and ethical hacking as a career.",
  ],
  [
    "HCL Noida visit",
    "13 Dec 2024",
    "100+ of us toured the campus and met the people building real products.",
  ],
  [
    "Guest lecture on AI",
    "13 Dec 2024",
    "Dr. Manoj Kumar Gupta on AI fundamentals, with CSI MIET.",
  ],
  [
    "Disha 3.0",
    "14 Nov 2024",
    "Vanshika Jain on full stack and cloud, then Q&A and prize games.",
  ],
  [
    "Disha 2.0",
    "24 Oct 2024",
    "Chirag Bansal on AWS and the careers it opens.",
  ],
  [
    "Disha 1.0",
    "25 Sep 2024",
    "Coding skills and a way into tech and defence careers.",
  ],
];
const GAL = [
  ["#8fd1c9", "Hall sessions", "images/hall-sessions.webp"],
  ["#ffc83d", "Hackathon"],
  ["#9fe0b4", "Group photo"],
  ["#ff9d86", "HCL visit"],
  ["#ffe9a8", "Workshops"],
  ["#d5f5df", "Disha 3.0", "images/disha-3.png"],
];
const TEAM = [
  ["AR", "Arpita", "Social Media and Creative Head", "images/arpita.jpeg"],
  ["AK", "Anant Kumar", "Technical Head", "images/anant-kumar.png"],
  ["PG", "Priyanshi Garg", "Content Head", "images/priyanshi-garg.png"],
  ["AG", "Aniket Gautam", "Visuals Head", "images/aniket-gautam.png"],
  ["TC", "Tanu Chauhan", "Event Management Head", "images/tanu-chauhan.png"],
  ["AK", "Akshita Gupta", "Graphics Head", "images/akshita.png"],
];
const SENIOR_MEMORIES = [
  ["Vartika Jain", "President · 2025–26", "images/vartika-jain-memory.png"],
  [
    "A new chapter begins",
    "Leadership welcome · 2026–27",
    "images/leadership-welcome-memory.png",
  ],
  [
    "Chirag Sharma",
    "Vice President · 2025–26",
    "images/chirag-sharma-memory.png",
  ],
];
const TEAM_HISTORY = {
  "2025-26": [
    ["MS", "Mohini Sharma", "Founder & Lead"],
    ["EC", "Echoes Core", "Organiser"],
    ["TM", "Team member 03", "Organiser"],
    ["TM", "Team member 04", "Organiser"],
    ["TM", "Team member 05", "Organiser"],
  ],
  "2024-25": [
    ["MS", "Mohini Sharma", "Founder"],
    ["EC", "Echoes Core", "Organiser"],
    ["TM", "Team member 03", "Organiser"],
    ["TM", "Team member 04", "Organiser"],
    ["TM", "Team member 05", "Organiser"],
  ],
};
const STARTER = [
  {
    name: "Echoes crew",
    text: "Welcome! Tell us what you're building this semester 👇",
    likes: 0,
    s: 1,
  },
  {
    name: "A first-year",
    text: "Hackathon Havoc was my first time shipping anything. Do it, it's worth it.",
    likes: 0,
    s: 1,
  },
];
$("#tk").innerHTML =
  "Workshops<span>✺</span>Hackathons<span>✺</span>Guest talks<span>✺</span>Industry visits<span>✺</span>Free chai<span>✺</span>New friends<span>✺</span>".repeat(
    5,
  );
$("#cg").innerHTML = CORNERS.map(
  (c, i) =>
    `<button class="corner" style="background:${c[3]}" data-c="${i}"><div><em>${c[0]}</em><h3>${c[1]}</h3><p>${c[2]}</p></div><small>Join this corner →</small></button>`,
).join("");
$("#tl").innerHTML = PAST.map(
  (p, i) =>
    `<button class="it event-card${p[1] === "Coming soon" ? " upcoming" : ""}" data-event="${i}" type="button"><small>${esc(p[1])}</small><h4>${esc(p[0])}</h4><p>${esc(p[2])}</p><span class="event-action">View event details →</span></button>`,
).join("");
$("#show-events").onclick = (e) => {
  const button = e.currentTarget;
  const timeline = $("#tl");
  const expanded = timeline.classList.toggle("expanded");
  button.textContent = expanded ? "Show fewer events" : "Show more events";
  button.setAttribute("aria-expanded", String(expanded));
};
$("#gal").innerHTML = GAL.map(
  (g) =>
    `<div style="background:${g[0]}${g[2] ? ` url('${g[2]}') center/cover` : ""}"${g[2] ? ` role="img" aria-label="${esc(g[1])}"` : ""}>${g[1]}</div>`,
).join("");
$("#team-grid").innerHTML = TEAM.map(
  ([initials, name, role, image]) =>
    `<article class="team-member"><div class="person-avatar${image ? " team-photo" : ""}" role="img" aria-label="${image ? `Photo of ${esc(name)}` : `Placeholder image for ${esc(name)}`}">${image ? `<img src="${image}" alt="${esc(name)}" />` : initials}</div><h3>${esc(name)}</h3>${role ? `<span>${esc(role)}</span>` : ""}<small>Tenure: 2026–27</small></article>`,
).join("");
$("#senior-memories").innerHTML = SENIOR_MEMORIES.map(
  ([title, subtitle, image]) =>
    `<article class="senior-memory"><img src="${image}" alt="${esc(title)} memory" /><div><strong>${esc(title)}</strong><span>${esc(subtitle)}</span></div></article>`,
).join("");
function renderTeamHistory(year) {
  $("#team-history-grid").innerHTML = TEAM_HISTORY[year]
    .map(
      ([initials, name, role]) =>
        `<article class="team-history-card"><div class="team-history-photo" role="img" aria-label="Placeholder image for ${esc(name)}">${initials}</div><h3>${esc(name)}</h3><span>${esc(role)}</span><small>Team tenure: ${year}</small></article>`,
    )
    .join("");
}
renderTeamHistory("2025-26");
document.querySelectorAll("[data-team-year]").forEach((button) => {
  button.onclick = () => {
    const year = button.dataset.teamYear;
    document.querySelectorAll("[data-team-year]").forEach((tab) => {
      const selected = tab === button;
      tab.classList.toggle("active", selected);
      tab.setAttribute("aria-selected", String(selected));
    });
    renderTeamHistory(year);
  };
});
document.querySelectorAll(".volunteer-belt").forEach((belt) => {
  const track = belt.querySelector(".volunteer-track");
  belt.querySelector(".volunteer-prev").onclick = () => {
    track.style.animationDirection = "reverse";
    track.style.animationPlayState = "running";
  };
  belt.querySelector(".volunteer-next").onclick = () => {
    track.style.animationDirection = "normal";
    track.style.animationPlayState = "running";
  };
});
$("#bg").onclick = () => $("#links").classList.toggle("open");
$("#links").onclick = () => $("#links").classList.remove("open");
$("#th").onclick = () => {
  const r = document.documentElement,
    d = r.dataset.theme
      ? r.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme:dark)").matches;
  r.dataset.theme = d ? "light" : "dark";
  try {
    localStorage.setItem("t", r.dataset.theme);
  } catch (e) {}
};
try {
  const t = localStorage.getItem("t");
  if (t) document.documentElement.dataset.theme = t;
} catch (e) {}
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.1 },
);
document.querySelectorAll(".rv").forEach((e) => io.observe(e));
/* backend */
let db = null,
  user = null,
  wall = [],
  liked = {};
try {
  liked = JSON.parse(localStorage.getItem("lk") || "{}");
} catch (e) {}
async function save(coll, data, id) {
  if (!db) throw { code: "off" };
  id =
    id ||
    coll[0] + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  await db
    .collection(coll)
    .doc(id)
    .set({ ...data, at: new Date().toISOString() });
  return id;
}
function drawWall() {
  const rows = [...wall]
    .sort((a, b) => ((b.at || "") < (a.at || "") ? -1 : 1))
    .concat(STARTER);
  $("#notes").innerHTML = rows
    .map(
      (r) =>
        `<div class="n"><p>${esc(r.text)}</p><footer><span>${esc(r.name)}</span>${r.s ? "" : `<button data-l="${r.id}" class="${liked[r.id] ? "on" : ""}">♥ ${r.likes || 0}</button>`}</footer></div>`,
    )
    .join("");
}
drawWall();
$("#wf").onsubmit = async (e) => {
  e.preventDefault();
  const f = e.target,
    m = $("#ok");
  try {
    await save("wall", {
      name: f.name.value.trim(),
      text: f.text.value.trim(),
      likes: 0,
    });
    f.text.value = "";
    m.textContent = "Pinned! 🎉";
  } catch (x) {
    m.textContent =
      x.code === "off"
        ? "The wall needs the live version. Open it signed in to Claude, then pin away."
        : "Could not pin that. Try again.";
  }
};
$("#notes").onclick = async (e) => {
  const b = e.target.closest("[data-l]");
  if (!b || liked[b.dataset.l] || !db) return;
  const id = b.dataset.l,
    r = wall.find((x) => x.id === id);
  liked[id] = 1;
  try {
    localStorage.setItem("lk", JSON.stringify(liked));
  } catch (x) {}
  try {
    await db
      .collection("wall")
      .doc(id)
      .update({ likes: (r.likes || 0) + 1 });
  } catch (x) {}
};
function dlg(title, sub, kind, extra, pre) {
  $("#db").innerHTML =
    `<h3>${esc(title)}</h3><p style="color:var(--mute);margin-bottom:16px">${esc(sub)}</p><form id="mf"><input name="name" placeholder="Your name" required maxlength="60"><input name="email" type="email" placeholder="College email" required maxlength="120"><input name="branch" placeholder="Branch & year, e.g. CSE 1st" required maxlength="40">${extra}<div id="mm" style="font-weight:600;min-height:22px"></div><div style="display:flex;gap:10px"><button class="btn r" type="submit">Send</button><button class="btn w" type="button" id="cl">Close</button></div></form>`;
  $("#dlg").showModal();
  $("#cl").onclick = () => $("#dlg").close();
  $("#mf").onsubmit = async (e) => {
    e.preventDefault();
    const f = e.target,
      d = { kind },
      m = $("#mm");
    new FormData(f).forEach((v, k) => (d[k] = String(v).trim()));
    try {
      await save("inbox", d);
      m.textContent = "Got it! We'll be in touch soon 🙌";
      f.querySelectorAll("input,select").forEach((i) => (i.disabled = true));
    } catch (x) {
      m.textContent =
        x.code === "off"
          ? "Open the live version signed in to Claude to submit, or email echoesofcse@miet.ac.in."
          : "Something broke. Try again?";
    }
  };
}
function eventDlg(event) {
  const isUpcoming = event[1] === "Coming soon";
  const smritiDetails =
    event[0] === "Smriti 2.0"
      ? `
        <div class="event-details">
          <strong>Speaker</strong>
          <span>Ms. Neha Singh</span>
          <strong>Alumna</strong>
          <span>MIET, 2011–15</span>
          <strong>Current role</strong>
          <span>Manager at Coforge</span>
          <strong>Previous experience</strong>
          <span>Google, Wipro and EY</span>
          <strong>Venue</strong>
          <span>Raman Block Audi 3</span>
        </div>
      `
      : "";
  $("#db").innerHTML = `
    <span class="event-status${isUpcoming ? " upcoming" : ""}">${esc(event[1])}</span>
    <h3>${esc(event[0])}</h3>
    <p class="event-description">${esc(event[2])}</p>
    ${smritiDetails}
    ${isUpcoming ? '<p class="event-notice">Smriti 2.0 is coming soon. We will share the date and details here as soon as they are announced.</p>' : ""}
    <button class="btn w" type="button" id="cl">Close</button>
  `;
  $("#dlg").showModal();
  $("#cl").onclick = () => $("#dlg").close();
}
const opts = CORNERS.map((c, i) => `<option>${c[4]}</option>`).join("");
document.addEventListener("click", (e) => {
  const event = e.target.closest("[data-event]");
  if (event) {
    eventDlg(PAST[+event.dataset.event]);
    return;
  }
  if (e.target.closest("[data-join]"))
    dlg(
      "Join the crew",
      "Tell us who you are and what you like to do.",
      "audition",
      `<select name="interest">${opts}</select>`,
    );
  const c = e.target.closest("[data-c]");
  if (c) {
    const i = +c.dataset.c;
    dlg(
      "Join " + CORNERS[i][1],
      "We'll connect you with people already in this corner.",
      "audition",
      `<select name="interest"><option>${CORNERS[i][4]}</option>${opts}</select>`,
    );
  }
  const r = e.target.closest("[data-reg]");
  if (r)
    dlg(
      "Save my spot",
      "Interviews run 1–8 June.",
      "registration",
      `<input type="hidden" name="event" value="${esc(r.dataset.reg)}">`,
    );
});
async function init() {
  try {
    if (!window.claude) return;
    db = await claude.use("db");
    user = await claude.use("user");
    if (!db) return;
    db.collection("wall").onSnapshot(
      (s) => {
        wall = s.docs.map((d) => ({ id: d.id, ...d.data() }));
        drawWall();
      },
      () => {},
    );
    if (user && user.canEdit && user.canEdit()) {
      const a = $("#inl");
      a.hidden = false;
      a.onclick = (ev) => {
        ev.preventDefault();
        $("#db").innerHTML =
          '<h3>Inbox</h3><div class="ib" id="ib">Loading…</div><button class="btn w" id="cl" style="margin-top:14px">Close</button>';
        $("#dlg").showModal();
        $("#cl").onclick = () => $("#dlg").close();
        db.collection("inbox").onSnapshot(
          (s) => {
            const rs = s.docs
              .map((d) => d.data())
              .sort((a, b) => ((b.at || "") < (a.at || "") ? -1 : 1));
            $("#ib").innerHTML = rs.length
              ? rs
                  .map(
                    (r) =>
                      `<article><b>${esc(r.name)}</b> · ${esc(r.kind)} · ${esc(r.interest || r.event || "")}<br>${esc(r.email)} · ${esc(r.branch || "")}<br><small>${new Date(r.at).toLocaleString()}</small></article>`,
                  )
                  .join("")
              : "Nothing yet.";
          },
          () => {},
        );
      };
    }
  } catch (e) {}
}
init();

const NOVI_AI_REPLY = (message) => {
  const text = message.toLowerCase();

  if (text.includes("hello") || text.includes("hi") || text.includes("hey"))
    return "Hello! 👋 I’m Novi-AI. How can I help with the alumni network or Tech Committee?";
  if (
    text.includes("instagram") ||
    text.includes("social") ||
    text.includes("handle") ||
    text.includes("follow")
  )
    return "Follow Echoes MIET on Instagram: @echoes_miet. LinkedIn: linkedin.com/company/echoes-miet/ and X: @Echoes_MIET.";
  if (text.includes("whatsapp") || text.includes("community link"))
    return "Join the Echoes MIET WhatsApp community: chat.whatsapp.com/GALFsiK782O6XidEtD9LFB";
  if (
    text.includes("email") ||
    text.includes("mail") ||
    text.includes("contact")
  )
    return "Email Echoes MIET at echoesofcse@miet.ac.in. You can also use WhatsApp or the Join section.";
  if (
    text.includes("event") ||
    text.includes("smriti") ||
    text.includes("manthan")
  )
    return "Smriti 2.0 is on 12 October 2026 at Raman Block Audi 3, featuring Ms. Neha Singh, MIET alumna (2011–15) and Manager at Coforge, with previous experience at Google, Wipro and EY.";
  if (
    text.includes("team") ||
    text.includes("president") ||
    text.includes("leader")
  )
    return "Explore Team for the 2026–27, 2025–26 and 2024–25 Echoes teams, including our leadership.";
  if (
    text.includes("about") ||
    text.includes("what is echoes") ||
    text.includes("who are you")
  )
    return "Echoes is the MIET student community for people who enjoy building connections, designs, events and ideas together.";
  if (
    text.includes("student") ||
    text.includes("organiser") ||
    text.includes("organizer") ||
    text.includes("stat")
  )
    return "Echoes has welcomed 2,000+ students, grown a 30+ member organiser team and successfully conducted 15+ events.";
  if (
    text.includes("alumni") ||
    text.includes("alumnus") ||
    text.includes("alumna")
  )
    return "Novi-AI helps Echoes students and alumni stay connected through shared experiences, guidance and opportunities.";
  if (
    text.includes("tech") ||
    text.includes("committee") ||
    text.includes("technology")
  )
    return "The Tech Committee supports Echoes with digital ideas, creative projects and technology-driven experiences.";
  if (
    text.includes("join") ||
    text.includes("participate") ||
    text.includes("register") ||
    text.includes("help")
  )
    return "Use Join Echoes to tell the team about yourself and your interests, or leave a message on The Wall.";
  if (
    text.includes("founder") ||
    text.includes("mohini") ||
    text.includes("leadership") ||
    text.includes("coordinator")
  )
    return "The site highlights Mohini Sharma as Lead & Founder (2024–25), Priyanka Ma’am as Faculty Coordinator and Avinash Kumar Baliyan as President.";
  if (
    text.includes("gallery") ||
    text.includes("moment") ||
    text.includes("photo")
  )
    return "Visit Moments for Echoes memories and event highlights.";
  if (text.includes("wall") || text.includes("shout") || text.includes("idea"))
    return "The Wall is Echoes’ open space for shout-outs, event ideas and updates about what students are building.";
  if (text.includes("website") || text.includes("navigate"))
    return "Explore Find your corner, What’s happening, The Wall, Moments, Team and Hop in using the site navigation.";

  return "I can tell you about Echoes events, teams, alumni, the Tech Committee, leadership, Moments, The Wall, joining Echoes and our social channels.";
};

function createNoviAi() {
  if (document.querySelector(".chatbot-button")) return;

  const root = document.createElement("div");
  root.innerHTML = `
    <section class="chat-container" aria-label="Novi-AI assistant" hidden>
      <header class="chat-header">
        <div class="bot-info">
          <div class="bot-icon" aria-hidden="true">🤖</div>
          <div><div class="bot-name">Novi-AI</div><div class="online">● Online</div></div>
        </div>
        <button class="close-btn" type="button" aria-label="Close Novi-AI">×</button>
      </header>
      <div class="chat-body" aria-live="polite">
        <div class="message bot-message">Hi 👋 I’m Novi-AI. Ask me about alumni, the Tech Committee, events or Echoes.</div>
      </div>
      <form class="chat-input-area">
        <input class="chat-input" placeholder="Type your message..." aria-label="Type your message" />
        <button class="send-btn" type="submit" aria-label="Send message">➤</button>
      </form>
    </section>
    <button class="chatbot-button" type="button" aria-label="Open Novi-AI">💬</button>
  `;
  document.body.appendChild(root);

  const panel = root.querySelector(".chat-container");
  const button = root.querySelector(".chatbot-button");
  const close = root.querySelector(".close-btn");
  const form = root.querySelector(".chat-input-area");
  const input = root.querySelector(".chat-input");
  const body = root.querySelector(".chat-body");

  const closeChat = () => {
    panel.hidden = true;
    button.textContent = "💬";
    button.setAttribute("aria-label", "Open Novi-AI");
  };

  button.addEventListener("click", () => {
    panel.hidden = false;
    button.textContent = "×";
    button.setAttribute("aria-label", "Close Novi-AI");
    input.focus();
  });
  close.addEventListener("click", closeChat);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = input.value.trim();
    if (!message) return;

    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.textContent = message;
    body.appendChild(userMessage);
    input.value = "";

    const typing = document.createElement("div");
    typing.className = "typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;

    window.setTimeout(() => {
      typing.remove();
      const reply = document.createElement("div");
      reply.className = "message bot-message";
      reply.textContent = NOVI_AI_REPLY(message);
      body.appendChild(reply);
      body.scrollTop = body.scrollHeight;
    }, 800);
  });
}

createNoviAi();
