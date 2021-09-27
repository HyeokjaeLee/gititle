const contents = new Vue({
  el: "#contents",
  data: {
    scope: "",
    emojiList: emojiList,
    keywordList: keywordList,
    typeList: typeList,
  },
  methods: {
    set_type: function (item) {
      type.innerHTML = item + ":";
    },
    set_emoji: function (item) {
      emoji.innerHTML = item;
    },
    set_scope: function () {
      !!this.scope ? (scope.innerHTML = `(${this.scope})`) : (scope.innerHTML = "");
    },
  },
});

const get_commit_items = () => ({
  emoji: emoji.innerHTML,
  type: type.innerHTML,
  scope: scope.innerHTML,
  shortSummary: shortSummary.value,
  body: commitBody.value,
  footer: commitFooter.value,
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

function test() {
  const commitItems = get_commit_items();
  copy_message(commitItems);
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

function hide_all() {
  keywordSection.setAttribute("style", "display:none");
  emojiSection.setAttribute("style", "display:none");
  typeSection.setAttribute("style", "display:none");
}
keywordSection.setAttribute("style", "display:none");
typeSection.setAttribute("style", "display:none");
