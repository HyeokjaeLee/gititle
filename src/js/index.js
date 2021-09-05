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
    { component: "Fix", description: "올바르지 않은 동작을 수정" },
    { component: "Add", description: "특정 파일, 코드등을 추가" },
    { component: "Remove", description: "특정 파일, 코드등을 삭제" },
    { component: "Use", description: "특별히 무언가를 사용한 구현" },
    { component: "Refactor", description: "대규모 리팩토링 (응집도, 결합도 개선등)" },
    { component: "Simplify", description: "소규모 리팩토링 (중복코드 개선등)" },
    { component: "Update", description: "올바른 동작을 보완" },
    { component: "Improve", description: "호환성, 접근성 성능등을 개선" },
    { component: "Make", description: "기존 동작을 수정" },
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
