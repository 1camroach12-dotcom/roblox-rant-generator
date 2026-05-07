const openings = [
  "I swear Roblox gets worse every update.",
  "Can we talk about how broken Roblox is now?",
  "Nobody talks about this enough but Roblox is actually cooked.",
  "This platform used to be fun. Now it's a mess.",
  "I miss old Roblox so much."
];

const topics = [
  "exploiters ruining every game",
  "pay-to-win simulators everywhere",
  "toxic players",
  "fake admin games",
  "cash grab updates",
  "laggy servers",
  "copy-and-paste games",
  "broken moderation",
  "bots spamming everything",
  "games filled with ads"
];

const reactions = [
  "It's honestly embarrassing.",
  "Nobody at Roblox seems to care.",
  "This is why players keep quitting.",
  "Every update somehow makes it worse.",
  "I can't even enjoy games anymore.",
  "The platform feels soulless now.",
  "Old Roblox players know exactly what I mean.",
  "This should not still be happening in 2026."
];

const endings = [
  "Fix your platform Roblox.",
  "Do better Roblox.",
  "We deserve better than this.",
  "This is getting ridiculous.",
  "I had to say it."
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRant() {
  const rant = `
${random(openings)}

I'm so tired of ${random(topics)}.

${random(reactions)}

${random(endings)}
  `;

  document.getElementById('rantBox').innerText = rant;
}