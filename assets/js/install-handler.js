var deferredInstallPrompt = null;

window.addEventListener("beforeinstallprompt", function (event) {
  event.preventDefault();
  deferredInstallPrompt = event;
  show_download_button();
});

document.querySelector(".downloadButton").addEventListener("click", downloadButtonClicked);

function downloadButtonClicked() {
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then(function (choiceResult) {
    if (choiceResult.outcome === "accepted") {
      deferredInstallPrompt = null;
      document.querySelector(".downloadButton").style.display = "none";
    } else {
      console.log(choiceResult);
    }
  });
}

function show_download_button() {
  document.querySelector(".downloadButton").style.display = "block";
}

async function foo() {
  if ("getInstalledRelatedApps" in window.navigator) {
    const relatedApps = await navigator.getInstalledRelatedApps();
    relatedApps.forEach((app) => {
      //if your PWA exists in the array it is installed
      alert(app.platform, app.url);
    });
  }
}

foo();

const isInStandaloneMode = () =>
  window.matchMedia("(display-mode: standalone)").matches ||
  window.navigator.standalone ||
  document.referrer.includes("android-app://");
