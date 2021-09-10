const typeList = [
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
    example: "✨ Implement: tag search feature\n♻️ Implement: data storage to collect information",
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
