'use strict';

// This makes it so the popup is only accessible and the Chrome extension's icon only has a color on pages where it can be used.
chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
                urlContains: '/app/kibana'
            }
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});
