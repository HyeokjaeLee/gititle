const contents = new Vue({
  el: "#contents",
  data: {
    emojiList: emojiList,
    typeList: typeList,
  },
  methods: {
    set_emoji: function (item) {
      emoji.innerHTML = item;
    },
  },
});
