
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
	const darkIcon = document.getElementById('dark_icon');
	const lightIcon = document.getElementById('light_icon');
	
	const enableDarkmode = () => {
		document.body.classList.add('darkmode');
		document.body.classList.remove('whitemode');
		localStorage.setItem('darkmode', 'active');
		darkIcon.style.display = "none";
		lightIcon.style.display = "inline";
	};
	
	const disableDarkmode = () => {
		document.body.classList.add('whitemode');
		document.body.classList.remove('darkmode');
		localStorage.setItem('darkmode', 'inactive');
		darkIcon.style.display = "inline";
		lightIcon.style.display = "none";
	};
	
	// Ensure correct icon visibility on page load
	if (darkmode === "active") {
		enableDarkmode();
	} else {
		disableDarkmode();
	}
	
	// Toggle theme on button click
	themeSwitch.addEventListener("click", () => {
		darkmode = localStorage.getItem('darkmode');
		darkmode !== "active" ? enableDarkmode() : disableDarkmode();
	});
	



