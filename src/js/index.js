const emojiList = [
    { component: "🎨", description: "코드 형식 변경/구조" },
    { component: "⚡️", description: "성능" },
    { component: "🔥", description: "파일 또는 코드 삭제" },
    { component: "🐛", description: "버그 수정" },
    { component: "🚑️", description: "긴급 수정" },
    { component: "✨", description: "기능" },
    { component: "📝", description: "문서 수정 또는 추가" },
    { component: "🚀", description: "사용자 배포" },
    { component: "💄", description: "디자인 수정" },
    { component: "🎉", description: "프로젝트 시작" },
    { component: "✅", description: "" },
    { component: "🔒️", description: "" },
    { component: "🔖", description: "" },
    { component: "🚨", description: "" },
    { component: "🚧", description: "" },
    { component: "💚", description: "" },
    { component: "⬇️", description: "" },
    { component: "⬆️", description: "" },
    { component: "📌", description: "" },
    { component: "👷", description: "" },
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
    { component: "🧪", description: "" },
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

let target = "emoji";

function copy_txt() {
  let scope = document.getElementById("scope").value;
  const subject = document.getElementById("subject").value;
  scope = scope ? `(${scope})` : "";
  const resultTxt = `${emojiElement.emoji} ${typeElement.type}${scope}: ${subject}`;
  var temp = document.createElement("textarea");
  document.body.appendChild(temp);
  temp.value = resultTxt;
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
  alert(resultTxt);
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

const componentWrap = new Vue({
  el: "#component-wrap",
  data: {
    parentMessage: "Parent",
    items: emojiList,
  },
  methods: {
    set_component: function (component) {
      if (target === "emoji") {
        emojiElement.emoji = component;
      } else {
        typeElement.type = component;
      }
    },
  },
});
function change2emoji() {
  target = "emoji";
  componentWrap.items = emojiList;
}
function change2type() {
  target = "type";
  componentWrap.items = typeList;
}

console.log(emojiElement);
