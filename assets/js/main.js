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
  keywordWrap.search = "";
  change2emoji();
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
