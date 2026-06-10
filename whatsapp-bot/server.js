const express = require('express');
const { MessagingResponse } = require('twilio').twiml;
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));

const USERS = [
  {
    id: 1,
    name: "Kartikey Chaudhary",
    role: "Full Stack Developer",
    bio: "I am a passionate developer currently in my first year, aiming to build digital experiences that matter.",
    email: "kartikey@gmail.com",
    skills: {
      frontend: ["React", "Tailwind", "JS"],
      backend: ["Node.js", "Express", "MongoDB"],
      tools: ["Git", "API Design"]
    }
  },
  {
    id: 2,
    name: "Srujan Tagalpallewar",
    role: "UI/UX Designer",
    bio: "I design interfaces that are not just beautiful but intuitive.",
    email: "srujan@gmail.com",
    skills: {
      frontend: ["Figma", "Adobe XD", "CSS3"],
      backend: ["Prototyping", "User Flow"],
      tools: ["Design Systems"]
    }
  },
  {
    id: 3,
    name: "Palak Dasauni",
    role: "Frontend Developer",
    bio: "Specializing in responsive web design and modern JavaScript frameworks.",
    email: "palak@gmail.com",
    skills: {
      frontend: ["HTML5", "SASS", "Vue.js"],
      backend: ["Firebase", "Auth"],
      tools: ["Webpack", "SEO"]
    }
  },
  {
    id: 4,
    name: "Ayush Bharti",
    role: "Backend Engineer",
    bio: "Building robust APIs and scalable database architectures is my forte.",
    email: "ayush@gmail.com",
    skills: {
      frontend: ["HTML", "Basic JS"],
      backend: ["Python", "Django", "Postgres"],
      tools: ["Docker", "AWS"]
    }
  },
  {
    id: 5,
    name: "Eshita Modi",
    role: "Product Manager",
    bio: "Bridging the gap between business requirements and technical solutions.",
    email: "eshita@gmail.com",
    skills: {
      frontend: ["Jira", "Notion"],
      backend: ["Agile", "Scrum"],
      tools: ["User Stories"]
    }
  },
  {
    id: 6,
    name: "Aadya Agrawal",
    role: "Data Analyst",
    bio: "Turning raw data into actionable business insights.",
    email: "aadya@gmail.com",
    skills: {
      frontend: ["Tableau", "PowerBI"],
      backend: ["SQL", "Python"],
      tools: ["Statistics"]
    }
  }
];

const GREETINGS = ['hi', 'hello', 'hey', 'hola', 'sup', 'yo'];
const HELP_KEYWORDS = ['help', 'what can you do', 'commands', 'options'];
const HIRE_KEYWORDS = ['hire', 'enquire', 'enquiry', 'job', 'recruit', 'work with', 'team'];
const CONTACT_KEYWORDS = ['contact', 'email', 'reach', 'touch', 'mail'];
const TEAM_KEYWORDS = ['team', 'member', 'who', 'list', 'all', 'everyone', 'people'];

function botReply(input) {
  const q = input.toLowerCase().trim();

  // Greetings
  if (GREETINGS.some(g => q === g || q.startsWith(g + ' '))) {
    return "🦁 *DevLeopards | HirePortfolio* 🚀\n" +
           "━━━━━━━━━━━━━━━━━━━\n" +
           "Hey there! 👋 I'm *LeapBot* 🤖, your virtual assistant for the DevLeopards team.\n\n" +
           "I can help you explore and hire top-tier developers, designers, and managers! 💡\n\n" +
           "*How can I assist you today?*\n" +
           "⚡ Find talent by skills (e.g., \"React\", \"Python\")\n" +
           "🖥️ Find talent by role (e.g., \"designer\", \"frontend\")\n" +
           "👥 Browse the full team roster\n" +
           "✉️ Get contact details & links\n\n" +
           "👉 Reply with *help* to see a list of quick commands!";
  }

  // Help Options
  if (HELP_KEYWORDS.some(k => q.includes(k))) {
    return "🛠️ *LeapBot Menu & Commands*\n" +
           "━━━━━━━━━━━━━━━━━━━\n" +
           "Type one of these words or query types to get started:\n\n" +
           "• *team* 👥 — View our complete team roster\n" +
           "• *contact* 📧 — Get our email, GitHub, & social links\n" +
           "• *hire [name]* 💼 — Direct hire information (e.g., \"hire Kartikey\")\n" +
           "• *[skill]* ⚡ — Search by skill (e.g., \"React\", \"Figma\", \"SQL\")\n" +
           "• *[role]* 💻 — Search by role (e.g., \"developer\", \"designer\")\n\n" +
           "🔗 Explore our web portal:\n" +
           "https://SrujanTag.github.io/HirePortfolio";
  }

  // Contact Info
  if (CONTACT_KEYWORDS.some(k => q.includes(k))) {
    return "✉️ *Get in Touch with DevLeopards*\n" +
           "━━━━━━━━━━━━━━━━━━━\n" +
           "We'd love to collaborate with you! Connect with us via:\n\n" +
           "📧 *Email:* team@hireportfolio.dev\n" +
           "🐙 *GitHub:* github.com/SrujanTag\n" +
           "💼 *LinkedIn:* linkedin.com/company/devleopards\n\n" +
           "🔗 *Check out our live portfolio app:* \n" +
           "https://SrujanTag.github.io/HirePortfolio";
  }

  // Team List
  if (TEAM_KEYWORDS.some(k => q.includes(k))) {
    const list = USERS.map(u => `• *${u.name}* — _${u.role}_`).join('\n');
    return `👥 *The DevLeopards Team* (${USERS.length} Members)\n` +
           `━━━━━━━━━━━━━━━━━━━\n` +
           `Here is our current elite lineup:\n\n${list}\n\n` +
           `💡 *To view a member's direct details:*\n` +
           `Reply *"hire [name]"* (e.g., *"hire Kartikey"*).`;
  }

  // Hire Keywords
  if (HIRE_KEYWORDS.some(k => q.includes(k))) {
    const matched = USERS.filter(u => u.name.toLowerCase().split(' ').some(part => q.includes(part)));
    if (matched.length > 0) {
      const person = matched[0];
      const allSkills = [...(person.skills?.frontend || []), ...(person.skills?.backend || []), ...(person.skills?.tools || [])].join(', ');
      
      return `💼 *Hire Profile: ${person.name}*\n` +
             `━━━━━━━━━━━━━━━━━━━\n` +
             `✨ *Role:* ${person.role}\n` +
             `📝 *Bio:* _${person.bio}_\n\n` +
             `🛠️ *Key Arsenal:* ${allSkills}\n\n` +
             `📬 *Direct Contacts:*\n` +
             `📧 *Email:* ${person.email}\n\n` +
             `🚀 *Hire this member directly on our site:* \n` +
             `https://SrujanTag.github.io/HirePortfolio`;
    }
    return "💼 *Hire a Member*\n" +
           "━━━━━━━━━━━━━━━━━━━\n" +
           "I'd love to help you hire! Tell me the name or role you're looking for.\n\n" +
           "Examples:\n" +
           "• _\"hire Kartikey\"_\n" +
           "• _\"hire a UI/UX designer\"_\n\n" +
           "Or visit our official Hire Page directly:\n" +
           "https://SrujanTag.github.io/HirePortfolio";
  }

  // Skill Match
  const skillMatch = USERS.filter(u => {
    const allSkills = [...(u.skills?.frontend || []), ...(u.skills?.backend || []), ...(u.skills?.tools || [])].map(s => s.toLowerCase());
    return allSkills.some(s => q.includes(s) || s.includes(q.split(' ').find(w => w.length > 2) || ''));
  });
  if (skillMatch.length > 0) {
    const names = skillMatch.map(u => `• *${u.name}* — _${u.role}_`).join('\n');
    const directAction = skillMatch.length === 1 
      ? `\n\n📬 *Direct Contact:* ${skillMatch[0].email}` 
      : `\n\n💡 *Tip:* Type *"hire [name]"* to get detailed contact information for any of these members!`;
    return `🔍 *Skill Match Results* (${skillMatch.length} found)\n` +
           `━━━━━━━━━━━━━━━━━━━\n` +
           `Here are our experts skilled in your query:\n\n${names}${directAction}`;
  }

  // Role Match
  const roleMatch = USERS.filter(u => {
    const words = q.split(' ').filter(w => w.length > 3);
    return words.some(w => u.role.toLowerCase().includes(w));
  });
  if (roleMatch.length > 0) {
    const names = roleMatch.map(u => `• *${u.name}* — _${u.role}_\n  📧 Email: ${u.email}`).join('\n\n');
    return `🔍 *Role Match Results*\n` +
           `━━━━━━━━━━━━━━━━━━━\n` +
           `Here are our members matching your query:\n\n${names}\n\n` +
           `👉 Reply *"hire [name]"* to get more details or visit our portal!`;
  }

  // Default Fallback
  return "🤔 *Hmm, I didn't quite catch that...*\n" +
         "━━━━━━━━━━━━━━━━━━━\n" +
         "I'm still learning! Try asking me:\n\n" +
         "• \"Show me React developers\" 💻\n" +
         "• \"Who is on the team?\" 👥\n" +
         "• \"Hire Kartikey\" 💼\n" +
         "• \"Contact details\" ✉\n\n" +
         "Or reply with *help* to view all commands! 🛠️";
}

app.post('/webhook', (req, res) => {
  const incomingMsg = req.body.Body || '';
  const twiml = new MessagingResponse();
  const replyText = botReply(incomingMsg);
  
  twiml.message(replyText);
  
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

app.get('/', (req, res) => {
  res.send('LeapBot WhatsApp Webhook Server is running!');
});

app.listen(PORT, () => {
  console.log(`LeapBot server running on port ${PORT}`);
});
