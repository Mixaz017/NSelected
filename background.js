chrome.runtime.onMessage.addListener((badge, sender) => chrome.browserAction.setBadgeText({
	text: badge,
	tabId: sender.tab.id
}))