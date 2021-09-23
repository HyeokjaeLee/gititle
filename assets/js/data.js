const emojiList = [
    { content: "🎨", description: "Improve structure / format of the code." },
    { content: "⚡️", description: "Improve performance." },
    { content: "🔥", description: "Remove code or files." },
    { content: "🐛", description: "Fix or correct a bug." },
    { content: "🚑️", description: "Fix a critical issue." },
    { content: "🩹", description: "Fix or correct a non-critical issue." },
    { content: "🔒️", description: "Fix security issues." },
    { content: "🚨", description: "Fix compiler / linter warnings." },
    { content: "💚", description: "Fix CI Build." },
    { content: "✨", description: "Add or implement new features." },
    { content: "📝", description: "Add or revise documentation." },
    { content: "🚀", description: "Deploy stuff." },
    { content: "💄", description: "Add or update the UI and style files." },
    { content: "🎉", description: "Create new project." },
    { content: "✅", description: "Add or update tests." },
    { content: "🧪", description: "Add a failing test." },
    { content: "🔖", description: "Add or update Release / Version tags." },
    { content: "🚧", description: "Work in progress." },
    { content: "⬆️", description: "Update to higher version dependences" },
    { content: "⬇️", description: "Update to lower version dependences" },
    { content: "📌", description: "Update to fixed version dependences" },
    { content: "👷", description: "Add or update CI build system." },
    { content: "📈", description: "Add or update analytics or track code." },
    { content: "♻️", description: "Refactor or simplify code." },
    { content: "➕", description: "Add dependencies." },
    { content: "➖", description: "Remove dependencies." },
    { content: "🔧", description: "Add or update configuration files." },
    { content: "🔨", description: "Add or update development scripts." },
    { content: "🌐", description: "Internationalization and localization." },
    { content: "✏️", description: "Fix typos." },
    { content: "💩", description: "Update bad code\nthat needs to be improved." },
    { content: "⏪️", description: "Update to before the change." },
    { content: "🔀", description: "Update to merged branches." },
    { content: "📦️", description: "Add or update compiled files or packages." },
    { content: "👽️", description: "Update code due to external API changes." },
    { content: "🚚", description: "Move or rename resources\n(e.g.: files, paths, routes)" },
    { content: "📄", description: "Add or update license." },
    { content: "💥", description: "Add, Update, or implement breaking changes." },
    { content: "🍱", description: "Add or update assets." },
    { content: "♿️", description: "Improve accessibility." },
    { content: "💡", description: "Add or update comments in source code." },
    { content: "🍻", description: "Update code\nthat coding after drinking." },
    { content: "💬", description: "Add or update text and literals." },
    { content: "🗃️", description: "Update DB related changes." },
    { content: "🔊", description: "Add or update logs." },
    { content: "🔇", description: "Remove logs." },
    { content: "👥", description: "Add, update or remove contributor(s)." },
    { content: "🚸", description: "Improve user experience / usability." },
    { content: "🏗️", description: "Update architectural changes." },
    { content: "📱", description: "Add or update responsive design." },
    { content: "🥚", description: "Add or update an easter egg." },
    { content: "🙈", description: "Add or update a .gitignore file." },
    { content: "📸", description: "Add or update snapshots." },
    { content: "⚗️", description: "Add or update experiment to be performed." },
    { content: "🔍️", description: "Improve SEO." },
    { content: "🏷️", description: "Add, update or correct types." },
    { content: "🌱", description: "Add or update seed files." },
    { content: "🚩", description: "Add, update, or remove feature flags." },
    { content: "🥅", description: "Correct errors." },
    { content: "💫", description: "Add or update animations and transitions." },
    { content: "🗑️", description: "Deprecate code\nthat needs to be cleaned up." },
    { content: "⚰️", description: "Remove dead code." },
    {
      content: "🛂",
      description: "Add or update code related to authorization, roles and permissions.",
    },
    { content: "👔", description: "Add or update business logic." },
  ],
  keywordList = [
    {
      content: "Fix",
      description: "Fix incorrect something\n(bug, issue, typo)",
      example:
        "🚑️ Fix(#123): payment system\n✏️ Fix(router): typo\n🔒️ Fix(#321): authentication features\n🐛 Fix: crash when removing root nodes",
    },
    {
      content: "Correct",
      description: "Correct something\n(grammatical error, types, name) ",
      example: "📝 Correct: grammatical error\n🏷️ Correct: parameters, return types in get_data",
    },
    {
      content: "Remove",
      description: "Remove code or files",
      example:
        "⚰️ Remove: unused variable\n 🔥 Remove: unused files\n ➖ Remove: axios from dependencies",
    },
    {
      content: "Add",
      description: "Add new code or files",
      example:
        "✅ Add: test for InterpolatorType\n 🚸 Add: displayName to ActivityIndicator\n 🍱 Add: region data\n 🏷️ Add(COVID19): undefined type to region",
    },
    {
      content: "Implement",
      description: "Implement someting\n(Add a bigger code than 'Add')",
      example:
        "✨ Implement: tag search feature\n♻️ Implement: data storage to collect information",
    },
    {
      content: "Use",
      description: "Use someting to implement",
      example: "💥 Use: react.js instead vue.js\n🎨 Use: ES5 to support IE",
    },
    {
      content: "Refactor",
      description: "Refactor code\n(coupling⬇️, cohesion⬆️)",
      example:
        "♻️ Refactor(head): region data import\n 🎨 Refactor(crawler): get_new_page method\n ♻️ Refactor(Navi): life cycle management",
    },
    {
      content: "Simplify",
      description: "Simplify code\n(weaker than refactor)",
      example: "♻️ Simplify(router): variables\n♻️ Simplify: heap space iteration",
    },
    {
      content: "Update",
      description: "Update or supplement code",
      example:
        "⬆️ Update: immer to 9.0.6\n⬇️ Update: immer to 9.0.2\n📌 Update: immer to 9.0.4\n 👽️ Update: get_API( )\n 📸 Update: snapshot to introduce new feature\n🍱 Update: region data",
    },
    //향상이 있을때
    {
      content: "Improve",
      description: "Improve something",
      example:
        "⚡️ Improve(crawling): get_data method\n 🚸 Improve: searching UI\n 🔍️ Improve: domain management",
    },
    {
      content: "Make",
      description: "Make existing something difference",
      example: "🗃️ Make(dataList): region data read-only",
    },
    {
      content: "Revise",
      description: "Update or supplement Document",
      example: "📝 Revise: guideline",
    },
    {
      content: "Ensure",
      description: "Ensure specific operation",
      example:
        "🚸 Ensure: silent mode in morning\n🎨 Ensure(get_query): return type to string\n🎨 Ensure: options.flag defaults to 'r' in readFile",
    },
    {
      content: "Prevent",
      description: "Prevent specific processing",
      example: "🩹 Prevent(get_data): unintended execution",
    },
    {
      content: "Avoid",
      description: "Avoid specific processing\n('if' statement, etc)",
      example: "🩹 Avoid(get_data): unintended execution",
    },
    { content: "Move", description: "Move something", example: "" },
    { content: "Rename", description: "Rename something", example: "" },
    { content: "Allow", description: "Allow something", example: "" },
    {
      content: "Verify",
      description: "Verify something",
      example: "⚗️ Verify(get_query): parameter type",
    },
    {
      content: "Set",
      description: "Change small things\n(variable values, etc.)",
      example: "🚸 Set: contentsPerPage to 6",
    },
    {
      content: "Pass",
      description: "Pass something\n(parameter, etc.)",
      example: "🚧 Pass: regionData to get_data",
    },
  ],
  typeList = [
    {
      content: "build",
      description:
        "Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
    },
    {
      content: "ci",
      description:
        "Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)",
    },
    {
      content: "docs",
      description: "Documentation only changes",
    },
    {
      content: "feat",
      description: "A new feature",
    },
    {
      content: "fix",
      description: "A bug fix",
    },
    {
      content: "perf",
      description: "A code change that improves performance",
    },
    {
      content: "refactor",
      description:
        "A code change that neither fixes a bug, improves performance nor adds a feature",
    },
    {
      content: "test",
      description: "Changes that related test",
    },
    {
      content: "revert",
      description: "Revert to previous commit",
    },
  ];
