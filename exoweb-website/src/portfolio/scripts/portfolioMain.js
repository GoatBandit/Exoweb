let openLang = false;
let currentEl = null;
const languageButtons = document.getElementsByClassName('.lang-button'); // Language buttons
const mainIMG = document.getElementById('#details'); // For language large box animation
const textBox = document.getElementById('#textBox'); // For button information

// Close lang panel upon clicking outside
document.click((event) =>
{
	if ((event.target).closest('.lang-panel.shown').length === 0 && (event.target).closest('.lang-button').length === 0 && (event.target).closest('#textBox').length === 0)
	{
		undoLargeBoxAnim();
		if (currentEl) currentEl.className = 'lang-button';
	}
});

for (let button of languageButtons)
{
	// On Button Click
	button.addEventListener('click', () =>
	{
		if (!openLang)
		{
			return;
		}
		openLang = true;

		if (button.className.includes('active'))
		{
			button.className = 'lang-button';
			undoLargeBoxAnim();

			setTimeout(() =>
			{
				openLang = false;
			}, 50);
			return;
		}

		// Remove underline from old lang
		if (currentEl) currentEl.className = 'lang-button';
		button.className = 'lang-button active';

		// Open Lang Button
		currentEl = button;
		undoLargeBoxAnim();

		setTimeout(() =>
		{
			let panel = document.getElementById(button.getAttribute('data-panel'));
			panel.classList.add('shown');
			mainIMG.classList.remove('shown');
			openLang = false;

			// Animate all the children
			let divs = panel.querySelectorAll('.projects>.proj');
			let timeout = 400;
			for (let div of divs)
			{
				setTimeout(() => div.classList.add('loaded'), timeout);
				timeout += 50;
			}
		}, 50);
	});
}

// Close the opening animation for the language buttons
function undoLargeBoxAnim()
{
	// Hide current panel
	let shownPanel = document.querySelector('.lang-panel.shown');
	if (shownPanel)
	{
		shownPanel.classList.remove('shown');
		shownPanel.querySelectorAll('.projects>.proj').forEach(c => c.className = 'proj');
		textBox.classList.remove('shown');

		mainIMG.classList.add('shown');
	}
}

// Allow for buttons inside the project info to be shown only when there is a corresponding link to it in 'portfolioProjectDetails.js'
let projectInfo = document.querySelectorAll('.proj');

// After clicking on a project, display the project information
for (let projectNumber of projectInfo)
{
	projectNumber.addEventListener('click', () =>
	{
		let projectText = projectNumber.getAttribute('data-project');
		let projectDetails = projectText[projectNumber.getAttribute('data-project')];
		let colour = projectNumber.parentElement.getAttribute('data-cat');

		textBox.children[0].innerHTML = projectDetails.title;
		textBox.children[1].innerHTML = projectDetails.description;

		if (projectDetails.github)
		{
			textBox.children[4].style.display = 'block';
			textBox.children[4].href = projectDetails.github;
		}
		else
		{
			textBox.children[4].style.display = 'none';
		}

		if (projectDetails.youtube)
		{
			textBox.children[5].style.display = 'block';
			textBox.children[5].href = projectDetails.youtube;
		}
		else
		{
			textBox.children[5].style.display = 'none';
		}

		if (projectDetails.firstImage && projectDetails.secondImage)
		{
			textBox.children[6].style.display = 'block';
			textBox.children[6].src = projectDetails.firstImage;
		}
		else
		{
			textBox.children[6].style.display = 'none';
		}

		if (projectDetails.firstImage && projectDetails.secondImage)
		{
			textBox.children[7].style.display = 'block';
			textBox.children[7].src = projectDetails.secondImage;
		}
		else
		{
			textBox.children[7].style.display = 'none';
		}

		textBox.classList.add(colour);
		textBox.classList.add('shown');
		textBox.openingElement = projectNumber;
	});
}

('.close').click(function (e)
{
	textBox.classList.remove('shown');
})
