/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import browser from "webextension-polyfill";

let loadTime = new Date();
let manifest = browser.runtime.getManifest();

function notify() {
  chrome.notifications.create('onInstalled', {
    title: `Heads-up from Rally!`,
    message: `You forgot a step.    `,
    type: 'basic',
    iconUrl: "../rally-logo.png",
    priority: 2,
  }, () => console.debug("done:", chrome.runtime.lastError));
}

// browser.runtime.onInstalled.addListener(onInstalledNotification);
browser.browserAction.onClicked.addListener(() => chrome.runtime.openOptionsPage());
chrome.runtime.openOptionsPage();

window.setTimeout(() => {
  notify();
  chrome.runtime.openOptionsPage();
}, 3000);