
function menu() {
	sidebar.classList.toggle("show_sidebar")
	overlay.classList.toggle("hide_overlay")
}


/* let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme_switch')

const enableDarkmode = () => {
	document.body.classList.add('darkmode')
	localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
	document.body.classList.remove('darkmode')
	localStorage.setItem('darkmode', null)
}

if (darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
	darkmode = localStorage.getItem('darkmode')
	darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})   */




let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme_switch');

const enableDarkmode = () => {
	document.body.classList.add('darkmode');
	document.body.classList.remove('whitemode'); // Remove "whitemode" when enabling dark mode
	localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
	document.body.classList.add('whitemode'); // Add "whitemode" when disabling dark mode
	document.body.classList.remove('darkmode');
	localStorage.setItem('darkmode', null);
};

// Initial theme check
if (darkmode === "active") {
	enableDarkmode();
} else {
	disableDarkmode(); // Ensure "whitemode" is added if dark mode isn't active
}

// Toggle theme on button click
themeSwitch.addEventListener("click", () => {
	darkmode = localStorage.getItem('darkmode');
	darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});




