const emojiList = [
    { component: "🎨", description: "Structure / Format of the code" },
    { component: "⚡️", description: " Performance" },
    { component: "🔥", description: "Remove" },
    { component: "🐛", description: "Bug" },
    { component: "🚑️", description: "Critical issue" },
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
    { component: "📈", description: "" },
    { component: "♻️", description: "리팩토링" },
    { component: "➕", description: "" },
    { component: "➖", description: "" },
    { component: "🔧", description: "" },
    { component: "🔨", description: "" },
    { component: "🌐", description: "" },
    { component: "✏️", description: "" },
    { component: "💩", description: "" },
    { component: "⏪️", description: "" },
    { component: "🔀", description: "" },
    { component: "📦️", description: "" },
    { component: "👽️", description: "" },
    { component: "🚚", description: "" },
    { component: "📄", description: "" },
    { component: "💥", description: "큰 수정" },
    { component: "🍱", description: "" },
    { component: "♿️", description: "" },
    { component: "💡", description: "" },
    { component: "🍻", description: "음주 코딩 결과물" },
    { component: "💬", description: "" },
    { component: "🗃️", description: "" },
    { component: "🔊", description: "" },
    { component: "🔇", description: "" },
    { component: "👥", description: "" },
    { component: "🚸", description: "" },
    { component: "🏗️", description: "" },
    { component: "📱", description: "" },
    { component: "🤡", description: "" },
    { component: "🥚", description: "" },
    { component: "🙈", description: "" },
    { component: "📸", description: "" },
    { component: "⚗️", description: "" },
    { component: "🔍️", description: "" },
    { component: "🏷️", description: "" },
    { component: "🌱", description: "" },
    { component: "🚩", description: "" },
    { component: "🥅", description: "" },
    { component: "💫", description: "" },
    { component: "🗑️", description: "" },
    { component: "🛂", description: "" },
    { component: "🩹", description: "" },
    { component: "🧐", description: "" },
    { component: "⚰️", description: "" },
    { component: "👔", description: "" },
  ],
  typeList = [
    {
      component: "Fix",
      description: "Fix incorrect something",
      example:
        "🚑️ Fix(#123): payment system\n🐛 Fix: log format\n🔒️ Fix(#321): authentication features",
    },
    { component: "Add", description: "Add new code or files", example: "" },
    { component: "Remove", description: "Remove code or files" },
    { component: "Use", description: "Use someting to implement" },
    { component: "Refactor", description: "Refactor code\n(coupling⬇️, cohesion⬆️)", example: "" },
    { component: "Simplify", description: "Simplify code\n(deduplication)", example: "" },
    { component: "Update", description: "Update or supplement code", example: "" },
    { component: "Improve", description: "Improve Something", example: "" },
    { component: "Make", description: "Make existing something difference", example: "" },
    { component: "Implement", description: "Implement someting", example: "ss" },
    { component: "Revise", description: "", example: "" },
    { component: "Correct", description: "", example: "" },
    { component: "Ensure", description: "", example: "" },
    { component: "Prevent", description: "", example: "" },
    { component: "Avoid", description: "", example: "" },
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
    emoji: "⚡️",
  },
});

const typeElement = new Vue({
  el: "#type",
  data: {
    type: "Feat",
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
