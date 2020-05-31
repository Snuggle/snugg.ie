function set_theme() {
  if (localStorage['theme']) {
    document.getElementById('main').classList.add('force-theme-'+localStorage['theme']);
    document.querySelector('body').classList.add('force-theme-'+localStorage['theme']);
    if(document.getElementById("nav")){
    document.getElementById('nav').classList.add('force-theme-'+localStorage['theme']);
	}
  }
}

function reset_theme() {
  localStorage.removeItem('theme');
  document.getElementById('main').classList.add('animate-theme-change');
  document.getElementById('main').classList.forEach(className => {
    if (className.startsWith('force-theme-')) {
        document.getElementById('main').classList.remove(className);
    }
  });

	localStorage.removeItem('theme');
	document.querySelector('body').classList.add('animate-theme-change');
	document.querySelector('body').classList.forEach(className => {
		if (className.startsWith('force-theme-')) {
				document.querySelector('body').classList.remove(className);
		}
	});

	if(document.getElementById("nav")){
		localStorage.removeItem('theme');
	  document.getElementById('nav').classList.add('animate-theme-change');
	  document.getElementById('nav').classList.forEach(className => {
	    if (className.startsWith('force-theme-')) {
	        document.getElementById('nav').classList.remove(className);
	    }
	  });
	}


}

function toggle_theme(theme) {
  reset_theme();
  localStorage['theme'] = theme;
  set_theme();
}

set_theme();
