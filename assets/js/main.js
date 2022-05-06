// GoatBandit
// Front Page Buttons

// On About Button Click
$ ('.aboutButton').click (function (e) 
{
	$ ('.about').fadeIn (500);
	$ ('.aboutEffect').removeClass ('transform-out').addClass ('transform-in');

	e.preventDefault();
});

	// On About Button Close Click
	$ ('.about .inner .close').click (function (e) 
	{
		$ ('.about').fadeOut (500);
		$ ('.aboutEffect').removeClass ('transform-in').addClass ('transform-out');
	
		e.preventDefault();
	});

// On Skills Button Click
$ ('.skillsButton').click (function (e) 
{
	$ ('.skills').fadeIn (500);
	$ ('.skillsEffect').removeClass ('transform-out').addClass ('transform-in');

	e.preventDefault();
});

	// On Skills Button Close Click
	$ ('.skills .inner .close').click (function (e) 
	{
		$ ('.skills').fadeOut (500);
		$ ('.skillsEffect').removeClass ('transform-in').addClass ('transform-out');
	
		e.preventDefault();
	});

// On Work Button Click
$ ('.thirdButton').click (function (e) 
{
	$ ('.store').fadeIn (500);
	$ ('.storeEffect').removeClass ('transform-out').addClass ('transform-in');

	e.preventDefault();
});

	// On Work Button Close Click
	$ ('.store .inner .close').click (function (e) 
	{
		$ ('.store').fadeOut (500);
		$ ('.storeEffect').removeClass ('transform-in').addClass ('transform-out');
	
		e.preventDefault();
	});

function updateProjectDivHeights() 
{
	for (let div of projectDivs) 
	{
		div.style.height = window.innerHeight - div.getBoundingClientRect().y - 30 + 'px';
	}

	for (let bar of scrollbars) 
	{
		bar.update();
	}
}

updateProjectDivHeights();