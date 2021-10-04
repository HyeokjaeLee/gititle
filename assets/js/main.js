const contents = new Vue({
  el: "#contents",
  data: {
    copiedLogList: !!localStorage.getItem("gititleCopiedLog")
      ? JSON.parse(localStorage.getItem("gititleCopiedLog"))
      : [],
    scope: "",
    emojiList: emojiList,
    keywordList: keywordList,
    typeList: typeList,
  },
  methods: {
    set_type: function (item) {
      type.innerHTML = item;
    },
    set_emoji: function (item) {
      emoji.innerHTML = item;
    },
    set_scope: function () {
      !!this.scope ? (scope.innerHTML = `(${this.scope})`) : (scope.innerHTML = "");
    },
    set_from_log(commitItems) {
      emoji.innerHTML = commitItems.emoji;
      type.innerHTML = commitItems.type;
      scope.innerHTML = commitItems.scope;
      shortSummary.value = commitItems.shortSummary;
      commitBody.value = commitItems.body;
      commitFooter.value = commitItems.footer;
    },
  },
});

function copy_message(commitItems) {
  let { emoji, type, scope, shortSummary, body, footer } = commitItems;
  const header = `${emoji} ${type + scope}: ${shortSummary}`;
  body = !!body ? `\n\n${body}` : "";
  footer = !!footer ? `\n\n${footer}` : "";
  const temp4copy = document.createElement("textarea");
  temp4copy.value = header + body + footer;
  document.body.appendChild(temp4copy);
  temp4copy.select();
  document.execCommand("copy");
  document.body.removeChild(temp4copy);
}
/*복사 내역을 로컬 스토리지에 저장*/
function save_log2local(commitItems) {
  contents.copiedLogList.push(commitItems);
  if (contents.copiedLogList.length > 15) {
    contents.copiedLogList.shift();
  }
  localStorage.setItem("gititleCopiedLog", JSON.stringify(contents.copiedLogList));
}

function copy_button() {
  const commitItems = {
    emoji: emoji.innerHTML,
    type: type.innerHTML,
    scope: scope.innerHTML,
    shortSummary: shortSummary.value,
    body: commitBody.value,
    footer: commitFooter.value,
  };
  copy_message(commitItems);
  save_log2local(commitItems);
  view_notification();
}

function view_notification() {
  notification.setAttribute("class", "show");
  setTimeout(() => {
    notification.setAttribute("class", "hide");
  }, 3000);
}

function view_keyword() {
  hide_all();
  keywordSection.removeAttribute("style");
}

function view_type() {
  hide_all();
  typeSection.removeAttribute("style");
}

function view_emoji() {
  hide_all();
  emojiSection.removeAttribute("style");
}

function view_log() {
  hide_all();
  logSection.removeAttribute("style");
}

function hide_all() {
  keywordSection.setAttribute("style", "display:none");
  emojiSection.setAttribute("style", "display:none");
  typeSection.setAttribute("style", "display:none");
  logSection.setAttribute("style", "display:none");
  window.scrollTo(0, -1000);
}
keywordSection.setAttribute("style", "display:none");
typeSection.setAttribute("style", "display:none");
logSection.setAttribute("style", "display:none");
