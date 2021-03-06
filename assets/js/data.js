const emojiList = [
    { content: "๐จ", description: "Improve structure / format of the code." },
    { content: "โก๏ธ", description: "Improve performance." },
    { content: "๐ฅ", description: "Remove code or files." },
    { content: "๐", description: "Fix or correct a bug." },
    { content: "๐๏ธ", description: "Fix a critical issue." },
    { content: "๐ฉน", description: "Fix or correct a non-critical issue." },
    { content: "๐๏ธ", description: "Fix security issues." },
    { content: "๐จ", description: "Fix compiler / linter warnings." },
    { content: "๐", description: "Fix CI Build." },
    { content: "โจ", description: "Add or implement new features." },
    { content: "๐", description: "Add or revise documentation." },
    { content: "๐", description: "Deploy stuff." },
    { content: "๐", description: "Add or update the UI and style files." },
    { content: "๐", description: "Create new project." },
    { content: "โ", description: "Add or update tests." },
    { content: "๐งช", description: "Add a failing test." },
    { content: "๐", description: "Add or update Release / Version tags." },
    { content: "๐ง", description: "Work in progress." },
    { content: "โฌ๏ธ", description: "Update to higher version dependencies" },
    { content: "โฌ๏ธ", description: "Update to lower version dependencies" },
    { content: "๐", description: "Update to fixed version dependencies" },
    { content: "๐ท", description: "Add or update CI build system." },
    { content: "๐", description: "Add or update analytics or track code." },
    { content: "โป๏ธ", description: "Refactor or simplify code." },
    { content: "โ", description: "Add dependencies." },
    { content: "โ", description: "Remove dependencies." },
    { content: "๐ง", description: "Add or update configuration files." },
    { content: "๐จ", description: "Add or update development scripts." },
    { content: "๐", description: "Internationalization and localization." },
    { content: "โ๏ธ", description: "Correct typos." },
    { content: "๐ฉ", description: "Update bad code\nthat needs to be improved." },
    { content: "โช๏ธ", description: "Update to before the change." },
    { content: "๐", description: "Update to merged branches." },
    { content: "๐ฆ๏ธ", description: "Add or update compiled files or packages." },
    { content: "๐ฝ๏ธ", description: "Update code due to external API changes." },
    { content: "๐", description: "Move or rename resources\n(e.g.: files, paths, routes)" },
    { content: "๐", description: "Add or update license." },
    { content: "๐ฅ", description: "Add, Update, or implement breaking changes." },
    { content: "๐ฑ", description: "Add or update assets." },
    { content: "โฟ๏ธ", description: "Improve accessibility." },
    { content: "๐ก", description: "Add or update comments in source code." },
    { content: "๐ป", description: "Update code\nthat coding after drinking." },
    { content: "๐ฌ", description: "Add or update text and literals." },
    { content: "๐๏ธ", description: "Update DB related changes." },
    { content: "๐", description: "Add or update logs." },
    { content: "๐", description: "Remove logs." },
    { content: "๐ฅ", description: "Add, update or remove contributor(s)." },
    { content: "๐ธ", description: "Improve user experience / usability." },
    { content: "๐๏ธ", description: "Update architectural changes." },
    { content: "๐ฑ", description: "Add or update responsive design." },
    { content: "๐ฅ", description: "Add or update an easter egg." },
    { content: "๐", description: "Add or update a .gitignore file." },
    { content: "๐ธ", description: "Add or update snapshots." },
    { content: "โ๏ธ", description: "Add or update experiment to be performed." },
    { content: "๐๏ธ", description: "Improve SEO." },
    { content: "๐ท๏ธ", description: "Add, update or correct types." },
    { content: "๐ฑ", description: "Add or update seed files." },
    { content: "๐ฉ", description: "Add, update, or remove feature flags." },
    { content: "๐ฅ", description: "Correct errors." },
    { content: "๐ซ", description: "Add or update animations and transitions." },
    { content: "๐๏ธ", description: "Deprecate code\nthat needs to be cleaned up." },
    { content: "โฐ๏ธ", description: "Remove dead code." },
    {
      content: "๐",
      description: "Add or update code related to authorization, roles and permissions.",
    },
    { content: "๐", description: "Add or update business logic." },
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
      description: "Refactor code\n(couplingโฌ๏ธ, cohesionโฌ๏ธ)",
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
    //ํฅ์์ด ์์๋
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
      description: "Changes to CI configuration files and scripts",
    },
    {
      content: "docs",
      description: "Changes to only document",
    },
    {
      content: "feat",
      description: "Related to new feature",
    },
    {
      content: "fix",
      description: "Related to bug fix",
    },
    {
      content: "perf",
      description: "Changes to improves performance",
    },
    {
      content: "refactor",
      description: "Changes that neither fixes a bug, improves performance nor adds a feature",
    },
    {
      content: "test",
      description: "Changes that related test",
    },
    {
      content: "revert",
      description: "Revert to previous commit",
    },
    {
      content: "merge",
      description: "Merge to the other branch"
    }
  ];
