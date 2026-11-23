// Runs before first paint (blocking, from app.html): put the saved theme on <html data-theme>
// so tokens.css picks the right palette. Mirrors src/lib/ui/theme.svelte.ts, which takes over.
(function () {
	var pref = null;
	try {
		pref = localStorage.getItem('tt:theme');
	} catch (e) {}
	var dark =
		pref === 'dark' ||
		(pref !== 'light' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
	document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
})();
