const emojiList = [
    { component: "🎨", description: "Improve structure / format of the code." },
    { component: "⚡️", description: "Improve performance." },
    { component: "🔥", description: "Remove code or files." },
    { component: "🐛", description: "Fix or correct a bug." },
    { component: "🚑️", description: "Fix a critical issue." },
    { component: "🩹", description: "Fix or correct a non-critical issue." },
    { component: "🔒️", description: "Fix security issues." },
    { component: "🚨", description: "Fix compiler / linter warnings." },
    { component: "💚", description: "Fix CI Build." },
    { component: "✨", description: "Add or implement new features." },
    { component: "📝", description: "Add or revise documentation." },
    { component: "🚀", description: "Deploy stuff." },
    { component: "💄", description: "Add or update the UI and style files." },
    { component: "🎉", description: "Create new project." },
    { component: "✅", description: "Add or update tests." },
    { component: "🧪", description: "Add a failing test." },
    { component: "🔖", description: "Add or update Release / Version tags." },
    { component: "🚧", description: "Work in progress." },
    { component: "⬆️", description: "Update to higher version dependences" },
    { component: "⬇️", description: "Update to lower version dependences" },
    { component: "📌", description: "Update to fixed version dependences" },
    { component: "👷", description: "Add or update CI build system." },
    { component: "📈", description: "Add or update analytics or track code." },
    { component: "♻️", description: "Refactor or simplify code." },
    { component: "➕", description: "Add dependencies." },
    { component: "➖", description: "Remove dependencies." },
    { component: "🔧", description: "Add or update configuration files." },
    { component: "🔨", description: "Add or update development scripts." },
    { component: "🌐", description: "Internationalization and localization." },
    { component: "✏️", description: "Fix typos." },
    { component: "💩", description: "Update bad code\nthat needs to be improved." },
    { component: "⏪️", description: "Update to before the change." },
    { component: "🔀", description: "Update to merged branches." },
    { component: "📦️", description: "Add or update compiled files or packages." },
    { component: "👽️", description: "Update code due to external API changes." },
    { component: "🚚", description: "Move or rename resources\n(e.g.: files, paths, routes)" },
    { component: "📄", description: "Add or update license." },
    { component: "💥", description: "Add, Update, or implement breaking changes." },
    { component: "🍱", description: "Add or update assets." },
    { component: "♿️", description: "Improve accessibility." },
    { component: "💡", description: "Add or update comments in source code." },
    { component: "🍻", description: "Update code\nthat coding after drinking." },
    { component: "💬", description: "Add or update text and literals." },
    { component: "🗃️", description: "Update DB related changes." },
    { component: "🔊", description: "Add or update logs." },
    { component: "🔇", description: "Remove logs." },
    { component: "👥", description: "Add, update or remove contributor(s)." },
    { component: "🚸", description: "Improve user experience / usability." },
    { component: "🏗️", description: "Update architectural changes." },
    { component: "📱", description: "Add or update responsive design." },
    { component: "🥚", description: "Add or update an easter egg." },
    { component: "🙈", description: "Add or update a .gitignore file." },
    { component: "📸", description: "Add or update snapshots." },
    { component: "⚗️", description: "Add or update experiment to be performed." },
    { component: "🔍️", description: "Improve SEO." },
    { component: "🏷️", description: "Add, update or correct types." },
    { component: "🌱", description: "Add or update seed files." },
    { component: "🚩", description: "Add, update, or remove feature flags." },
    { component: "🥅", description: "Correct errors." },
    { component: "💫", description: "Add or update animations and transitions." },
    { component: "🗑️", description: "Deprecate code\nthat needs to be cleaned up." },
    { component: "⚰️", description: "Remove dead code." },
    {
      component: "🛂",
      description: "Add or update code related to authorization, roles and permissions.",
    },
    { component: "👔", description: "Add or update business logic." },
  ],
  typeList = [
    {
      component: "Fix",
      description: "Fix incorrect something\n(bug, issue, typo)",
      example:
        "🚑️ Fix(#123): payment system\n✏️ Fix(router): typo\n🔒️ Fix(#321): authentication features\n🐛 Fix: crash when removing root nodes",
    },
    {
      component: "Correct",
      description: "Correct something\n(grammatical error, types, name) ",
      example: "📝 Correct: grammatical error\n🏷️ Correct: parameters, return types in get_data",
    },
    {
      component: "Remove",
      description: "Remove code or files",
      example:
        "⚰️ Remove: unused variable\n 🔥 Remove: unused files\n ➖ Remove: axios from dependencies",
    },
    {
      component: "Add",
      description: "Add new code or files",
      example:
        "✅ Add: test for InterpolatorType\n 🚸 Add: displayName to ActivityIndicator\n 🍱 Add: region data\n 🏷️ Add(COVID19): undefined type to region",
    },
    {
      component: "Implement",
      description: "Implement someting\n(Add a bigger code than 'Add')",
      example:
        "✨ Implement: tag search feature\n♻️ Implement: data storage to collect information",
    },
    {
      component: "Use",
      description: "Use someting to implement",
      example: "💥 Use: react.js instead vue.js\n🎨 Use: ES5 to support IE",
    },
    //향상이 없어도 일단 수정된경우
    {
      component: "Refactor",
      description: "Refactor code\n(coupling⬇️, cohesion⬆️)",
      example:
        "♻️ Refactor(head): region data import\n 🎨 Refactor(crawler): get_new_page method\n ♻️ Refactor(Navi): life cycle management",
    },
    {
      component: "Simplify",
      description: "Simplify code\n(weaker than refactor)",
      example: "♻️ Simplify(router): variables\n♻️ Simplify: heap space iteration",
    },
    {
      component: "Update",
      description: "Update or supplement code",
      example:
        "⬆️ Update: immer to 9.0.6\n⬇️ Update: immer to 9.0.2\n📌 Update: immer to 9.0.4\n 👽️ Update: get_API( )\n 📸 Update: snapshot to introduce new feature\n🍱 Update: region data",
    },
    //향상이 있을때
    {
      component: "Improve",
      description: "Improve something",
      example:
        "⚡️ Improve(crawling): get_data method\n 🚸 Improve: searching UI\n 🔍️ Improve: domain management",
    },
    {
      component: "Make",
      description: "Make existing something difference",
      example: "🗃️ Make(dataList): region data read-only",
    },
    {
      component: "Revise",
      description: "Update or supplement Document",
      example: "📝 Revise: guideline",
    },
    {
      component: "Ensure",
      description: "Ensure specific operation",
      example:
        "🚸 Ensure: silent mode in morning\n🎨 Ensure(get_query): return type to string\n🎨 Ensure: options.flag defaults to 'r' in readFile",
    },
    {
      component: "Prevent",
      description: "Prevent specific processing",
      example: "🩹 Prevent(get_data): unintended execution",
    },
    {
      component: "Avoid",
      description: "Avoid specific processing\n('if' statement, etc)",
      example: "🩹 Avoid(get_data): unintended execution",
    },
    { component: "Move", description: "Move something", example: "" },
    { component: "Rename", description: "Rename something", example: "" },
    { component: "Allow", description: "Allow something", example: "" },
    {
      component: "Verify",
      description: "Verify something",
      example: "⚗️ Verify(get_query): parameter type",
    },
    {
      component: "Set",
      description: "Change small things\n(variable values, etc.)",
      example: "🚸 Set: contentsPerPage to 6",
    },
    {
      component: "Pass",
      description: "Pass something\n(parameter, etc.)",
      example: "🚧 Pass: regionData to get_data",
    },
  ];

function copy_txt() {
  let scope = document.getElementById("scope").value;
  scope = scope ? `(${scope})` : "";
  const subject = document.getElementById("subject").value;
  const resultTxt = `${emojiElement.emoji} ${typeElement.type}${scope}: ${subject}`;
  const temp4copy = document.createElement("textarea");
  document.body.appendChild(temp4copy);
  temp4copy.value = resultTxt;
  temp4copy.select();
  document.execCommand("copy");
  document.body.removeChild(temp4copy);
  alert(`'${resultTxt}' copied to the clipboard.`);
  document.getElementById("scope").value = "";
  document.getElementById("subject").value = "";
  copiedLog.history.unshift({
    emoji: emojiElement.emoji,
    type: typeElement.type,
    scope: scope,
    subject: subject,
  });
  if (copiedLog.history.length > 10) {
    copiedLog.history.pop();
  }
}

const emojiElement = new Vue({
  el: "#emoji",
  data: {
    emoji: "🍻",
  },
});

const typeElement = new Vue({
  el: "#type",
  data: {
    type: "Make",
  },
});

const copiedLog = new Vue({
  el: "#copied-log",
  data: {
    open: false,
    history: [],
  },
  methods: {
    get_history: function (title) {
      console.log(this.open);
      emojiElement.emoji = title.emoji;
      typeElement.type = title.type;
      document.getElementById("scope").value = title.scope.replace(/\(|\)/g, "");
      document.getElementById("subject").value = title.subject;
    },
  },
});

const keywordWrap = new Vue({
  el: "#keyword-wrap",
  data: {
    search: "",
    target: "emoji",
    originalItems: emojiList,
    items: emojiList,
  },
  methods: {
    set_component: function (component) {
      this.target === "emoji" ? (emojiElement.emoji = component) : (typeElement.type = component);
    },
    search_keyword: function () {
      this.items = this.originalItems;
      this.search
        ? (this.items = this.items.filter((item) =>
            item.description.toLowerCase().includes(this.search.toLowerCase())
          ))
        : (this.items = this.originalItems);
    },
  },
});

function change2emoji() {
  keywordWrap.target = "emoji";
  keywordWrap.originalItems = emojiList;
  keywordWrap.items = emojiList;
  keywordWrap.search_keyword();
}
function change2type() {
  keywordWrap.target = "type";
  keywordWrap.originalItems = typeList;
  keywordWrap.items = typeList;
  keywordWrap.search_keyword();
}

function set_log_list() {
  copiedLog.open = copiedLog.open ? false : true;
}
