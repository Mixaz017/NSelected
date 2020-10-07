document.addEventListener('selectionchange', () => {
	let selectedLength = document.getSelection().toString().length
	chrome.runtime.sendMessage(selectedLength == 0 ? '' : selectedLength < 10000 ? selectedLength.toString() : '10k+')
})