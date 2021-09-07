const emojiList = [
    { component: "🎨", description: "Structure / Format of the code" },
    { component: "⚡️", description: " Performance" },
    { component: "🔥", description: "Remove" },
    { component: "🐛", description: "Bug" },
    { component: "🚑️", description: "Critical issue" },
    { component: "🩹", description: "Non-critical issue" },
    { component: "🔒️", description: "Security issues" },
    { component: "🚨", description: "Compiler / Linter warnings" },
    { component: "✨", description: "Features" },
    { component: "📝", description: "Documentation" },
    { component: "🚀", description: "Deployment" },
    { component: "💄", description: "UI and style files" },
    { component: "🎉", description: "New project" },
    { component: "✅", description: "Success test" },
    { component: "🧪", description: "Failing test" },
    { component: "🔖", description: "Release / Version tags" },
    { component: "🚧", description: "Work in progress" },
    { component: "⬆️", description: "Upgrade dependencies" },
    { component: "⬇️", description: "Downgrade dependencies" },
    { component: "📌", description: "Pin dependencies to specific versions" },
    { component: "👷", description: "CI build system" },
    { component: "📈", description: "Analytics/Tracking code" },
    { component: "♻️", description: "Refactoring" },
    { component: "➕", description: "Add dependencies" },
    { component: "➖", description: "Remove dependencies" },
    { component: "🔧", description: "Configuration files" },
    { component: "🔨", description: "Development scripts" },
    { component: "🌐", description: "Internationalization and localization" },
    { component: "✏️", description: "Typos" },
    { component: "💩", description: "Bad code that needs to be improved" },
    { component: "⏪️", description: "Revert changes" },
    { component: "🔀", description: "Merge branches" },
    { component: "📦️", description: "Compiled files or packages" },
    { component: "👽️", description: "Update code due to external API changes" },
    { component: "🚚", description: "Move or rename resources\n(e.g.: files, paths, routes)" },
    { component: "📄", description: "License" },
    { component: "💥", description: "Breaking changes" },
    { component: "🍱", description: "Assets" },
    { component: "♿️", description: "Accessibility" },
    { component: "💡", description: "Comments in source code" },
    { component: "🍻", description: "Coding after drinking" },
    { component: "💬", description: "Text and literals" },
    { component: "🗃️", description: "DB related changes" },
    { component: "🔊", description: "Add or update logs" },
    { component: "🔇", description: "Remove logs" },
    { component: "👥", description: "Contributor(s)" },
    { component: "🚸", description: "User experience / usability" },
    { component: "🏗️", description: "Architectural changes" },
    { component: "📱", description: "Responsive design" },
    { component: "🤡", description: "Mock things" },
    { component: "🥚", description: "Easter egg" },
    { component: "🙈", description: ".gitignore file" },
    { component: "📸", description: "Snapshots" },
    { component: "⚗️", description: "Experiments" },
    { component: "🔍️", description: "SEO" },
    { component: "🏷️", description: "Types" },
    { component: "🌱", description: "Seed files" },
    { component: "🚩", description: "Feature flags" },
    { component: "🥅", description: "Catch errors" },
    { component: "💫", description: "Animations and transitions" },
    { component: "🗑️", description: "Deprecate code that needs to be cleaned up." },
    { component: "⚰️", description: "Remove dead code" },
    { component: "🛂", description: "Code related to authorization, roles and permissions" },
    { component: "🧐", description: "Data exploration/inspection" },
    { component: "👔", description: "Business logic" },
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
    { component: "Move", description: "", example: "" },
    { component: "Rename", description: "", example: "" },
    { component: "Verify", description: "", example: "" },
    { component: "Set", description: "", example: "" },
    { component: "Pass", description: "", example: "" },
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
  alert(`Copy '${resultTxt}'  done.`);
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

const keywordWrap = new Vue({
  el: "#keyword-wrap",
  data: {
    target: "emoji",
    items: emojiList,
  },
  methods: {
    set_component: function (component) {
      this.target === "emoji" ? (emojiElement.emoji = component) : (typeElement.type = component);
    },
  },
});

function change2emoji() {
  keywordWrap.target = "emoji";
  keywordWrap.items = emojiList;
}
function change2type() {
  keywordWrap.target = "type";
  keywordWrap.items = typeList;
}
