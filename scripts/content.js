setInterval(update, 5000);

function update() {
	const controls = document.querySelector("*[class^='_playbackControls_'] *[class*='_title_']");
	if(controls && controls.textContent) {
		document.title = controls.textContent + " | SiriusXM";
	} 
}