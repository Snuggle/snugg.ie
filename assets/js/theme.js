/*

function set_theme() {
	if (localStorage['theme']) {
		document.getElementById('main').classList.add('force-theme-' + localStorage['theme']);
		document.body.classList.add('force-theme-' + localStorage['theme']);
		if (document.getElementById("nav")) {
			document.getElementById('nav').classList.add('force-theme-' + localStorage['theme']);
		}
	}

	//   if (localStorage['theme'] === 'dark') {
	// 	  document.getElementById('avatar').src='https://github.com/Snuggle.png'
	//   } else {
	// 	  document.getElementById('avatar').src='https://github.com/Snuggle.png'
	//   }
}

function reset_theme() {
	localStorage.removeItem('theme');
	document.getElementById('main').classList.forEach(className => {
		if (className.startsWith('force-theme-')) {
			document.getElementById('main').classList.remove(className);
		}
	});

	localStorage.removeItem('theme');
	document.querySelector('body').classList.forEach(className => {
		if (className.startsWith('force-theme-')) {
			document.querySelector('body').classList.remove(className);
		}
	});

	if (document.getElementById("nav")) {
		localStorage.removeItem('theme');
		[...document.querySelector('nav').classList].forEach((className, i) => {
			document.getElementById('nav').classList.remove(className);
		});
	}


}

function toggle_theme(theme) {
	reset_theme();
	localStorage['theme'] = theme;
	set_theme();
}

set_theme();

*/


function set_theme() {
	if (localStorage['theme']) {
		document.getElementById('main').classList.add('force-theme-' + localStorage['theme']);
		document.body.classList.add('force-theme-' + localStorage['theme']);
		if (document.getElementById("nav")) {
			document.getElementById('nav').classList.add('force-theme-' + localStorage['theme']);
		}
	}
}

const runColorMode = (fn) => {
	if (!window.matchMedia) {
	  return;
	}
	
	const query = window.matchMedia('(prefers-color-scheme: dark)');
  
	fn(query.matches);
  
	query.addEventListener('change', (event) => fn(event.matches));
  }
  
  runColorMode((isDarkMode) => {
	if (isDarkMode) {
		document.getElementById('main').classList.add('force-theme-dark');
		document.body.classList.add('force-theme-dark');
		if (document.getElementById("nav")) {
			document.getElementById('nav').classList.add('force-theme-dark');
		}
	} else {
		document.getElementById('main').classList.add('force-theme-light');
		document.body.classList.add('force-theme-light');
		if (document.getElementById("nav")) {
			document.getElementById('nav').classList.add('force-theme-light');
		}
	}
  })