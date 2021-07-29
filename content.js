document.addEventListener('selectionchange', () => {
	let selectedLength = document.getSelection().toString().length
	chrome.runtime.sendMessage(selectedLength == 0 ? '' : selectedLength < 1e4 ? selectedLength.toString() : '10k+')
})