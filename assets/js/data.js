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
      description: "Fix incorrect something\n(bug, issue, etc.)",
      example:
        "* fix changelog entry\n* fix calculation in process.uptime()\n* fix crash when removing root nodes",
    },
    {
      content: "Correct",
      description: "Correct something\n(grammatical error, types, name, typo, etc.) ",
      example:
        "* correct typo in worker.js\n* correct grammatical error in BUILDING.md\n* correct async_hooks resource names",
    },
    {
      content: "Remove",
      description: "Remove code or files",
      example:
        "* remove unused variable\n* remove absolute path parameter from transformers\n* remove duplicated buffer negative allocation test",
    },
    {
      content: "Add",
      description: "Add new code or files",
      example:
        "* add json_update()\n* add test for InterpolatorType\n* add displayName to ActivityIndicator",
    },
    {
      content: "Implement",
      description: "Implement someting\n(Add a bigger code than 'Add')",
      example:
        "* implement Image.defaultSource\n* implement date object\n* implement sub-nav in main page to improve UX",
    },
    {
      content: "Use",
      description: "Use someting to implement",
      example:
        "* use object writer for thrown errors\n* use common operations to define browser globals\n* use babel runtime instead of relying on global babelHelpers and regenerator",
    },
    {
      content: "Refactor",
      description: "Refactor code\n(coupling⬇️, cohesion⬆️)",
      example:
        "* refactor QueryWrap lifetime management\n* refactor thread life cycle management\n* refactor MockNativeMethods in Jest",
    },
    {
      content: "Simplify",
      description: "Simplify code\n(weaker than refactor)",
      example:
        "* simplify code and remove obsolete checks\n* simplify get_json()\n* simplify loop arithmetic in GetCPUInfo",
    },
    {
      content: "Update",
      description: "Update or supplement code",
      example:
        "* update ansi-html to 0.0.7\n* update repo docs to use HTTPS\n* update babelHelpers with Babel 7 support",
    },
    //향상이 있을때
    {
      content: "Improve",
      description: "Improve something",
      example:
        "* improve Unicode handling\n* improve performance of json_parsor()\n* improve Accessibility",
    },
    {
      content: "Make",
      description: "Make existing something difference",
      example:
        "* make 'floating patch' message informational\n* make config object read-only\n* make IsolateData store ArrayBufferAllocator",
    },
    {
      content: "Revise",
      description: "Update or supplement Document",
      example:
        "* revise deprecation semverness info in Collaborator Guide\n* revise README.md\n* revise post-3",
    },
    {
      content: "Ensure",
      description: "Ensure specific operation",
      example:
        "* ensure quiet always takes precedence\n* ensure require.main for CJS top-level loads\n* ensure options.flag defaults to 'r' in readFile",
    },
    {
      content: "Prevent",
      description: "Prevent specific processing",
      example:
        "* prevent constructing console methods\n* prevent a potential error in event handling if Object.prototype is extended\n* prevent event handlers from receiving extra argument in development.",
    },
    {
      content: "Avoid",
      description: "Avoid specific processing\n('if' statement, etc)",
      example:
        "* avoid race condition in OnHeaderCallback\n* avoid importing entire crypto dependency tree if not in Node.js\n* avoid double reload event when reloading JS",
    },
    {
      content: "Move",
      description: "Move something",
      example:
        "* move test-process-uptime to parallel\n* move async hooks trace events setup to pre_execution.js\n* move initialization of node-report into pre_execution.js",
    },
    {
      content: "Rename",
      description: "Rename something",
      example:
        "* rename node-report to report\n* rename location to trigger\n* rename main.js to index.js",
    },
    {
      content: "Allow",
      description: "Allow something",
      example:
        "* allow the output filename to be a {Function}\n* allow Node.js-like runtimes to identify as Node.js as well\n* allow CORS",
    },
    {
      content: "Verify",
      description: "Verify something",
      example:
        "* verify heap buffer allocations occur\n* verify cache storage\n* verify common tensorflow model",
    },
    {
      content: "Set",
      description: "Change small things\n(variable values, etc.)",
      example:
        "* set tls.DEFAULT_ECDH_CURVE to 'auto'\n*set defaultIndex to 2\n* set perPage to 10",
    },
    {
      content: "Pass",
      description: "Pass something\n(parameter, etc.)",
      example:
        "* pass the response toolkit to the context function\n* pass covid19-object to classify_region()\n* pass querystring to search()",
    },
  ],
  typeList = [
    {
      content: "build",
      description: "Changes that affect the build system or external dependencies",
    },
    {
      content: "ci",
      description: "Changes to our CI configuration files and scripts",
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
