document.getElementById("notification").addEventListener("click", () => {
    chrome.notifications.create('onInstalled', {
        title: `Heads-up from Rally!`,
        message: `You forgot a step.    `,
        type: 'basic',
        iconUrl: "../rally-logo.png",
        priority: 2,
    }, () => console.debug("done:", chrome.runtime.lastError));
});