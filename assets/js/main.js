const contents = new Vue({
  el: "#contents",
  data: {
    emojiList: emojiList,
    keywordList: keywordList,
    typeList: typeList,
  },
  methods: {
    set_type: function (item) {
      type.innerHTML = item + ":";
    },
    set_emoji: function () {
      emoji.innerHTML = item;
    },
  },
});

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
