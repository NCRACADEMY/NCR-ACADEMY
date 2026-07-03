const USERS = [
  { id: "u1", username: "stagiaire", password: "stagiaire123", name: "Stagiaire Démo", role: "stagiaire", job: "Formateur / Dirigeant" },
  { id: "u2", username: "admin", password: "admin123", name: "Nacer - Formateur", role: "admin", job: "Formateur N.C.R" }
];

const MODULES = [
  { id:"m1", icon:"01", title:"Comprendre l’IA", duration:"45 min", level:"Essentiel", desc:"IA générative, modèles de langage, limites, hallucinations et posture professionnelle." },
  { id:"m2", icon:"02", title:"Méthode N.C.R AI", duration:"60 min", level:"Essentiel", desc:"Nommer le besoin, cadrer la demande, raffiner le résultat jusqu’au livrable final." },
  { id:"m3", icon:"03", title:"Prompts professionnels", duration:"90 min", level:"Professionnel", desc:"Structurer un prompt expert avec rôle, contexte, contraintes, format et critères." },
  { id:"m4", icon:"04", title:"Produire des livrables", duration:"120 min", level:"Professionnel", desc:"Mails, procédures, supports, posts, plans d’action, QCM et comptes rendus." },
  { id:"m5", icon:"05", title:"Parcours Formateur", duration:"120 min", level:"Métier", desc:"Déroulés, objectifs, ateliers, cas concrets, critères de réussite et évaluations." },
  { id:"m6", icon:"06", title:"Parcours Dirigeant", duration:"120 min", level:"Métier", desc:"Organisation, procédures, stratégie, réponses clients, offres, délégation et suivi." },
  { id:"m7", icon:"07", title:"Sécurité et conformité", duration:"60 min", level:"Obligatoire", desc:"RGPD, données sensibles, vérification, confidentialité et charte interne IA." }
];

const PROMPTS = [
  {
    id:"p1", role:"Formateur", goal:"Concevoir", level:"Avancé",
    title:"Créer un déroulé pédagogique complet",
    text:"Agis comme un ingénieur pédagogique. Je dois créer une séquence de formation sur [thème] pour [public]. Objectif : [objectif]. Durée : [durée]. Propose un déroulé complet avec objectifs opérationnels, phases pédagogiques, consignes formateur, activités, critères de réussite, évaluation et matériel nécessaire. Format attendu : tableau clair et actionnable."
  },
  {
    id:"p2", role:"Formateur", goal:"Évaluer", level:"Intermédiaire",
    title:"Créer un QCM avec corrigé",
    text:"Crée un QCM de [nombre] questions sur [thème], adapté à [niveau]. Pour chaque question, propose 4 réponses dont une seule correcte, indique la bonne réponse, explique brièvement pourquoi et ajoute un critère d’évaluation."
  },
  {
    id:"p3", role:"Formateur", goal:"Animer", level:"Avancé",
    title:"Transformer un contenu en atelier",
    text:"Transforme le contenu suivant en atelier d’apprentissage actif : [contenu]. Donne les consignes, la durée, les rôles, les étapes, les critères de réussite, les erreurs fréquentes et le débrief formateur."
  },
  {
    id:"p4", role:"Dirigeant", goal:"Organiser", level:"Avancé",
    title:"Créer une procédure interne",
    text:"Agis comme un consultant organisation. Crée une procédure interne claire pour [processus]. Contexte entreprise : [contexte]. Contraintes : [contraintes]. Format : objectif, périmètre, responsabilités, étapes, points de contrôle, erreurs à éviter, indicateurs de suivi."
  },
  {
    id:"p5", role:"Dirigeant", goal:"Communiquer", level:"Intermédiaire",
    title:"Rédiger une réponse client professionnelle",
    text:"Aide-moi à répondre à ce client : [message]. Objectif : apaiser, expliquer clairement, proposer une solution et préserver l’image de l’entreprise. Ton : professionnel, humain, direct. Évite les formules trop froides."
  },
  {
    id:"p6", role:"Dirigeant", goal:"Décider", level:"Avancé",
    title:"Analyser une décision business",
    text:"Aide-moi à analyser cette décision : [situation]. Donne les avantages, risques, coûts cachés, alternatives, questions à poser, critères de décision et recommandation finale argumentée. Signale clairement ce qui doit être vérifié."
  },
  {
    id:"p7", role:"Commercial", goal:"Vendre", level:"Intermédiaire",
    title:"Préparer un argumentaire commercial",
    text:"Crée un argumentaire commercial pour vendre [offre] à [cible]. Structure : problème client, bénéfices, preuves, objections probables, réponses aux objections, phrase d’accroche, conclusion et appel à l’action."
  },
  {
    id:"p8", role:"Community Manager", goal:"Communiquer", level:"Débutant",
    title:"Créer un post LinkedIn",
    text:"Rédige un post LinkedIn sur [sujet] pour [cible]. Objectif : crédibilité et engagement. Ton : professionnel, direct, humain. Structure : accroche forte, contexte, valeur concrète, exemple, conclusion, appel à discussion."
  },
  {
    id:"p9", role:"Administratif", goal:"Gagner du temps", level:"Débutant",
    title:"Résumer une réunion",
    text:"À partir de ces notes : [notes], rédige un compte rendu structuré avec décisions prises, actions à réaliser, responsable, échéance, points de vigilance et prochain rendez-vous."
  },
  {
    id:"p10", role:"Tous profils", goal:"Sécuriser", level:"Intermédiaire",
    title:"Vérifier une réponse IA",
    text:"Analyse la réponse suivante : [réponse IA]. Identifie les affirmations à vérifier, les zones floues, les risques d’erreur, les informations manquantes et propose une version plus fiable avec des précautions explicites."
  },
  {
    id:"p11", role:"Tous profils", goal:"Produire", level:"Avancé",
    title:"Transformer une idée brute en livrable",
    text:"Transforme cette idée brute en document professionnel : [idée]. Demande-moi d’abord les informations manquantes, puis propose une structure, une version rédigée, une checklist de validation et une version courte exploitable."
  },
  {
    id:"p12", role:"Formateur", goal:"Concevoir", level:"Intermédiaire",
    title:"Créer une fiche mémo participant",
    text:"Crée une fiche mémo d’une page sur [thème], destinée à [public]. Elle doit contenir les points essentiels, les erreurs à éviter, une méthode simple, un exemple concret et une checklist finale."
  }
];

const DOCS = [
  { title:"Cahier participant", type:"PDF", desc:"Support complet de prise de notes, exercices et fiches pratiques." },
  { title:"Fiche mémo N.C.R AI", type:"PDF", desc:"La méthode N.C.R AI en une page pour guider chaque prompt." },
  { title:"Charte d’usage IA", type:"DOCX", desc:"Modèle de charte interne pour encadrer l’usage de l’IA en entreprise." },
  { title:"Plan d’action 90 jours", type:"PDF", desc:"Feuille de route pour intégrer l’IA dans son activité." },
  { title:"Bibliothèque de prompts", type:"DOCX", desc:"Prompts professionnels classés par métier et objectif." },
  { title:"Grille diagnostic IA", type:"XLSX", desc:"Score de départ, priorités et recommandations personnalisées." },
  { title:"Kit sécurité IA", type:"PDF", desc:"Données sensibles, vérification, RGPD et bonnes pratiques." },
  { title:"Certificat interne", type:"PDF", desc:"Certificat généré après validation du QCM et cas pratique." }
];

const DIAG_QUESTIONS = [
  { id:"usage", label:"Fréquence d’utilisation de l’IA", low:"Jamais", high:"Quotidienne" },
  { id:"prompt", label:"Qualité de formulation des prompts", low:"Improvisée", high:"Structurée" },
  { id:"security", label:"Gestion des données sensibles", low:"Risque élevé", high:"Sécurisée" },
  { id:"verify", label:"Vérification des réponses IA", low:"Rare", high:"Systématique" },
  { id:"produce", label:"Capacité à produire un livrable", low:"Faible", high:"Autonome" },
  { id:"integrate", label:"Intégration dans les méthodes de travail", low:"Aucune", high:"Routine installée" }
];

const QUIZ = [
  {
    q:"Quel est le rôle principal d’un bon prompt professionnel ?",
    options:["Faire une demande vague", "Cadrer l’objectif, le contexte, les contraintes et le format", "Demander une réponse très longue", "Éviter toute vérification"],
    answer:1
  },
  {
    q:"Quelle donnée faut-il éviter de transmettre telle quelle dans une IA publique ?",
    options:["Une idée générale", "Une consigne pédagogique", "Une donnée personnelle ou confidentielle", "Une demande de reformulation"],
    answer:2
  },
  {
    q:"Que signifie “raffiner” dans la méthode N.C.R AI ?",
    options:["Copier sans relire", "Améliorer, vérifier et transformer la réponse en livrable", "Réduire le texte uniquement", "Changer d’outil systématiquement"],
    answer:1
  },
  {
    q:"Quel comportement est le plus professionnel face à une réponse IA incertaine ?",
    options:["La publier directement", "La vérifier et signaler les points non confirmés", "La rendre plus longue", "L’effacer sans analyse"],
    answer:1
  },
  {
    q:"Quel est l’objectif final de la formation ?",
    options:["Utiliser l’IA comme gadget", "Créer des livrables utiles, fiables et adaptés au métier", "Remplacer toute décision humaine", "Automatiser sans contrôle"],
    answer:1
  }
];

const PLAN = [
  { date:"Jours 1 à 7", title:"Installer les bases", tasks:["Utiliser la méthode N.C.R AI sur 3 tâches simples", "Créer 5 prompts utiles", "Définir les données à ne jamais transmettre"] },
  { date:"Jours 8 à 21", title:"Créer les premiers livrables", tasks:["Produire un mail type", "Créer une procédure ou une fiche mémo", "Tester un prompt métier avancé"] },
  { date:"Jours 22 à 45", title:"Structurer son système IA", tasks:["Classer les prompts par objectif", "Standardiser les modèles récurrents", "Mettre en place une checklist de vérification"] },
  { date:"Jours 46 à 70", title:"Mesurer les gains", tasks:["Comparer temps avant / après", "Identifier les tâches les plus rentables", "Corriger les prompts faibles"] },
  { date:"Jours 71 à 90", title:"Professionnaliser l’usage", tasks:["Créer une charte IA interne", "Former ou sensibiliser l’équipe", "Préparer le bilan et les prochaines améliorations"] }
];

let state = {
  user: null,
  view: "dashboard",
  completedModules: JSON.parse(localStorage.getItem("ncr_completedModules") || "[]"),
  favorites: JSON.parse(localStorage.getItem("ncr_favorites") || "[]"),
  diagnostic: JSON.parse(localStorage.getItem("ncr_diagnostic") || "{}"),
  quizScore: Number(localStorage.getItem("ncr_quizScore") || 0),
  learners: JSON.parse(localStorage.getItem("ncr_learners") || "[]"),
  darkMode: localStorage.getItem("ncr_theme") === "dark"
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

function init(){
  if(state.darkMode) document.body.classList.add("dark");
  $("#loginForm").addEventListener("submit", onLogin);
  $("#logoutBtn").addEventListener("click", logout);
  $("#themeToggle").addEventListener("click", toggleTheme);
  $("#mobileMenuBtn").addEventListener("click", () => $(".sidebar").classList.toggle("open"));
  $("#globalSearch").addEventListener("input", (e) => quickSearch(e.target.value));
  $$(".nav-link").forEach(btn => btn.addEventListener("click", () => setView(btn.dataset.view)));
  updateThemeLabel();
}
init();

function onLogin(e){
  e.preventDefault();
  const username = $("#username").value.trim();
  const password = $("#password").value;
  const user = USERS.find(u => u.username === username && u.password === password);
  if(!user){
    $("#loginError").textContent = "Identifiants incorrects. Essaie stagiaire / stagiaire123 ou admin / admin123.";
    return;
  }
  state.user = user;
  $("#loginScreen").classList.add("hidden");
  $("#mainApp").classList.remove("hidden");
  $("#welcomeTitle").textContent = `Bienvenue, ${user.name}`;
  $("#sessionLabel").textContent = user.role === "admin" ? "Espace formateur" : "Espace stagiaire";
  $("#avatarInitials").textContent = user.name.split(" ").map(x=>x[0]).join("").slice(0,2).toUpperCase();
  $$(".admin-only").forEach(el => el.classList.toggle("hidden", user.role !== "admin"));
  setView("dashboard");
}

function logout(){
  state.user = null;
  $("#loginScreen").classList.remove("hidden");
  $("#mainApp").classList.add("hidden");
  $("#password").value = "";
}

function setView(view){
  if(view === "admin" && state.user?.role !== "admin") return;
  state.view = view;
  $$(".nav-link").forEach(btn => btn.classList.toggle("active", btn.dataset.view === view));
  $(".sidebar").classList.remove("open");
  const template = $(`#${view}Template`);
  $("#viewContainer").innerHTML = "";
  $("#viewContainer").appendChild(template.content.cloneNode(true));
  bindJumpButtons();
  renderCurrentView();
}

function renderCurrentView(){
  const map = {
    dashboard: renderDashboard,
    modules: renderModules,
    prompts: renderPrompts,
    diagnostic: renderDiagnostic,
    documents: renderDocuments,
    certification: renderCertification,
    plan: renderPlan,
    admin: renderAdmin
  };
  map[state.view]?.();
}

function bindJumpButtons(){
  $$("[data-jump]").forEach(btn => btn.addEventListener("click", () => setView(btn.dataset.jump)));
}

function renderDashboard(){
  const progress = Math.round((state.completedModules.length / MODULES.length) * 100);
  const score = getDiagnosticScore().total;
  $("#dashboardScore").textContent = score;
  $("#moduleProgress").textContent = `${progress}%`;
  $("#moduleProgressBar").style.width = `${progress}%`;
  $("#favoriteCount").textContent = state.favorites.length;
  $("#certStatus").textContent = state.quizScore >= 80 ? "Validée" : "À valider";
  $("#nextSteps").innerHTML = [
    "Terminer le diagnostic IA et identifier vos priorités.",
    "Valider les modules essentiels et le module sécurité.",
    "Créer 10 prompts personnalisés pour votre activité.",
    "Passer le QCM et formaliser un livrable métier final."
  ].map(x => `<li>${x}</li>`).join("");
  $("#recommendedModules").innerHTML = MODULES.slice(0,3).map(m => `
    <div class="module-mini">
      <div><strong>${m.title}</strong><span>${m.level} • ${m.duration}</span></div>
      <button class="mini-btn" data-jump="modules">Ouvrir</button>
    </div>
  `).join("");
  bindJumpButtons();
}

function renderModules(){
  $("#modulesGrid").innerHTML = MODULES.map(m => {
    const done = state.completedModules.includes(m.id);
    return `
      <article class="module-card">
        <div class="module-icon">${m.icon}</div>
        <span class="tag">${m.level}</span>
        <h3>${m.title}</h3>
        <p>${m.desc}</p>
        <div class="module-actions">
          <span class="tag">${m.duration}</span>
          <button class="mini-btn complete-btn ${done ? "completed" : ""}" data-module="${m.id}">
            ${done ? "Terminé" : "Marquer terminé"}
          </button>
        </div>
      </article>
    `;
  }).join("");
  $$(".complete-btn").forEach(btn => btn.addEventListener("click", () => toggleModule(btn.dataset.module)));
}

function toggleModule(id){
  if(state.completedModules.includes(id)){
    state.completedModules = state.completedModules.filter(x => x !== id);
  } else {
    state.completedModules.push(id);
  }
  localStorage.setItem("ncr_completedModules", JSON.stringify(state.completedModules));
  renderModules();
  toast("Progression mise à jour");
}

function renderPrompts(){
  const roles = ["Tous", ...new Set(PROMPTS.map(p => p.role))];
  const goals = ["Tous", ...new Set(PROMPTS.map(p => p.goal))];
  const levels = ["Tous", ...new Set(PROMPTS.map(p => p.level))];
  fillSelect("#promptRoleFilter", roles);
  fillSelect("#promptGoalFilter", goals);
  fillSelect("#promptLevelFilter", levels);
  ["#promptRoleFilter","#promptGoalFilter","#promptLevelFilter","#promptSearch"].forEach(sel => $(sel).addEventListener("input", renderPromptCards));
  renderPromptCards();
}

function fillSelect(sel, values){
  $(sel).innerHTML = values.map(v => `<option value="${v}">${v}</option>`).join("");
}

function renderPromptCards(){
  const role = $("#promptRoleFilter").value;
  const goal = $("#promptGoalFilter").value;
  const level = $("#promptLevelFilter").value;
  const q = $("#promptSearch").value?.toLowerCase() || "";
  const filtered = PROMPTS.filter(p =>
    (role === "Tous" || p.role === role) &&
    (goal === "Tous" || p.goal === goal) &&
    (level === "Tous" || p.level === level) &&
    (`${p.title} ${p.text} ${p.role} ${p.goal}`.toLowerCase().includes(q))
  );
  $("#promptsGrid").innerHTML = filtered.map(p => `
    <article class="prompt-card">
      <div class="prompt-meta">
        <span class="tag">${p.role}</span>
        <span class="tag">${p.goal}</span>
        <span class="tag">${p.level}</span>
      </div>
      <h3>${p.title}</h3>
      <div class="prompt-text">${escapeHtml(p.text)}</div>
      <div class="copy-row">
        <button class="mini-btn copy-btn" data-id="${p.id}">Copier</button>
        <button class="mini-btn fav-btn ${state.favorites.includes(p.id) ? "active" : ""}" data-id="${p.id}">Favori</button>
      </div>
    </article>
  `).join("");
  $$(".copy-btn").forEach(btn => btn.addEventListener("click", () => copyPrompt(btn.dataset.id)));
  $$(".fav-btn").forEach(btn => btn.addEventListener("click", () => toggleFavorite(btn.dataset.id)));
}

function copyPrompt(id){
  const p = PROMPTS.find(x => x.id === id);
  navigator.clipboard?.writeText(p.text);
  toast("Prompt copié");
}

function toggleFavorite(id){
  state.favorites = state.favorites.includes(id) ? state.favorites.filter(x=>x!==id) : [...state.favorites, id];
  localStorage.setItem("ncr_favorites", JSON.stringify(state.favorites));
  renderPromptCards();
}

function renderDiagnostic(){
  $("#diagnosticForm").innerHTML = DIAG_QUESTIONS.map(q => {
    const val = state.diagnostic[q.id] ?? 3;
    return `
      <div class="question-block">
        <label for="${q.id}">${q.label}</label>
        <div class="range-row">
          <input id="${q.id}" name="${q.id}" type="range" min="1" max="5" value="${val}" />
          <strong id="${q.id}Value">${val}/5</strong>
        </div>
        <div class="range-row"><small>${q.low}</small><small>${q.high}</small></div>
      </div>
    `;
  }).join("") + `<button class="primary-btn" type="submit">Calculer mon score</button>`;
  DIAG_QUESTIONS.forEach(q => {
    $(`#${q.id}`).addEventListener("input", e => {
      $(`#${q.id}Value`).textContent = `${e.target.value}/5`;
    });
  });
  $("#diagnosticForm").addEventListener("submit", e => {
    e.preventDefault();
    DIAG_QUESTIONS.forEach(q => state.diagnostic[q.id] = Number($(`#${q.id}`).value));
    localStorage.setItem("ncr_diagnostic", JSON.stringify(state.diagnostic));
    renderDiagResult();
    toast("Diagnostic enregistré");
  });
  renderDiagResult();
}

function getDiagnosticScore(){
  const values = DIAG_QUESTIONS.map(q => Number(state.diagnostic[q.id] || 0));
  const totalRaw = values.reduce((a,b)=>a+b,0);
  return { total: Math.round((totalRaw / (DIAG_QUESTIONS.length*5))*100), values };
}

function renderDiagResult(){
  const { total } = getDiagnosticScore();
  $("#diagScore").textContent = total;
  let level = "Non évalué", advice = "Complétez le diagnostic pour générer votre recommandation.";
  if(total > 0 && total < 40){ level = "Niveau découverte"; advice = "Priorité : bases de l’IA, méthode de prompt, règles de sécurité et premiers livrables simples."; }
  if(total >= 40 && total < 70){ level = "Niveau opérationnel"; advice = "Priorité : structurer vos prompts, vérifier les réponses et créer une bibliothèque métier."; }
  if(total >= 70){ level = "Niveau avancé"; advice = "Priorité : standardiser, mesurer les gains, transmettre la méthode et intégrer l’IA aux procédures."; }
  $("#diagLevel").textContent = level;
  $("#diagAdvice").textContent = advice;
  $("#diagBreakdown").innerHTML = DIAG_QUESTIONS.map(q => {
    const val = Number(state.diagnostic[q.id] || 0) * 20;
    return `
      <div class="break-item">
        <span><b>${q.label}</b><em>${val}%</em></span>
        <div class="progress"><i style="width:${val}%"></i></div>
      </div>
    `;
  }).join("");
}

function renderDocuments(){
  $("#documentsGrid").innerHTML = DOCS.map(d => `
    <article class="doc-card">
      <span class="doc-type">${d.type}</span>
      <h3>${d.title}</h3>
      <p>${d.desc}</p>
      <button class="mini-btn" data-doc="${d.title}">Prévisualiser</button>
    </article>
  `).join("");
  $$("[data-doc]").forEach(btn => btn.addEventListener("click", () => toast("Document prêt à connecter à ton hébergement")));
}

function renderCertification(){
  $("#certName").textContent = state.user?.name || "Stagiaire";
  updateCertificate();
  $("#quizForm").innerHTML = QUIZ.map((q, i) => `
    <div class="quiz-question">
      <h4>${i+1}. ${q.q}</h4>
      <div class="quiz-options">
        ${q.options.map((opt, j) => `
          <label><input type="radio" name="q${i}" value="${j}" required /> ${opt}</label>
        `).join("")}
      </div>
    </div>
  `).join("") + `<button class="primary-btn" type="submit">Valider le QCM</button>`;
  $("#quizForm").addEventListener("submit", e => {
    e.preventDefault();
    let score = 0;
    QUIZ.forEach((q, i) => {
      const val = Number(new FormData($("#quizForm")).get(`q${i}`));
      if(val === q.answer) score++;
    });
    state.quizScore = Math.round((score / QUIZ.length) * 100);
    localStorage.setItem("ncr_quizScore", state.quizScore);
    updateCertificate();
    toast(`Score QCM : ${state.quizScore}%`);
  });
  $("#printCertBtn").addEventListener("click", () => window.print());
}

function updateCertificate(){
  if(!$("#certMention")) return;
  const ok = state.quizScore >= 80;
  $("#certMention").textContent = ok ? `Validation obtenue avec ${state.quizScore}% de réussite.` : `Score actuel : ${state.quizScore}%. Validation à partir de 80%.`;
}

function renderPlan(){
  $("#planTimeline").innerHTML = PLAN.map(p => `
    <div class="timeline-item">
      <div class="timeline-date">${p.date}</div>
      <article class="timeline-card">
        <h3>${p.title}</h3>
        <ul>${p.tasks.map(t => `<li>${t}</li>`).join("")}</ul>
      </article>
    </div>
  `).join("");
}

function renderAdmin(){
  $("#learnerForm").addEventListener("submit", e => {
    e.preventDefault();
    const learner = {
      id: crypto.randomUUID?.() || String(Date.now()),
      name: $("#learnerName").value,
      job: $("#learnerJob").value,
      progress: Math.floor(20 + Math.random()*70),
      score: Math.floor(35 + Math.random()*55),
      status: "Actif"
    };
    state.learners.push(learner);
    localStorage.setItem("ncr_learners", JSON.stringify(state.learners));
    $("#learnerForm").reset();
    renderAdmin();
    toast("Stagiaire ajouté");
  });
  const learners = state.learners.length ? state.learners : [
    {name:"Stagiaire Démo", job:"Formateur", progress:64, score:72, status:"Actif"},
    {name:"Dirigeant Démo", job:"Dirigeant", progress:38, score:51, status:"À accompagner"}
  ];
  $("#adminStats").innerHTML = `
    <div><strong>${learners.length}</strong><span>stagiaires</span></div>
    <div><strong>${Math.round(avg(learners.map(l=>l.progress)))}%</strong><span>progression</span></div>
    <div><strong>${Math.round(avg(learners.map(l=>l.score)))}</strong><span>score moyen</span></div>
  `;
  $("#learnersTable").innerHTML = `
    <table>
      <thead><tr><th>Nom</th><th>Profil</th><th>Progression</th><th>Score IA</th><th>Statut</th></tr></thead>
      <tbody>
        ${learners.map(l => `<tr><td>${l.name}</td><td>${l.job}</td><td>${l.progress}%</td><td>${l.score}/100</td><td>${l.status}</td></tr>`).join("")}
      </tbody>
    </table>
  `;
}

function quickSearch(q){
  q = q.toLowerCase();
  if(!q) return;
  const promptMatch = PROMPTS.some(p => `${p.title} ${p.text}`.toLowerCase().includes(q));
  const moduleMatch = MODULES.some(m => `${m.title} ${m.desc}`.toLowerCase().includes(q));
  if(promptMatch) setView("prompts");
  else if(moduleMatch) setView("modules");
}

function toggleTheme(){
  state.darkMode = !state.darkMode;
  document.body.classList.toggle("dark", state.darkMode);
  localStorage.setItem("ncr_theme", state.darkMode ? "dark" : "light");
  updateThemeLabel();
}

function updateThemeLabel(){
  const btn = $("#themeToggle");
  if(btn) btn.textContent = state.darkMode ? "Mode clair" : "Mode sombre";
}

function toast(msg){
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

function escapeHtml(str){
  return str.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
}
function avg(arr){ return arr.reduce((a,b)=>a+b,0) / Math.max(arr.length,1); }
