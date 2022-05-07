const projectText = {
	/* EXAMPLE 
	"Empty": 
	{
		title: "Example",
		description: "This is just an example box.",
		github: "https://github.com/GoatBandit/GoatBandit.github.io",
	}, 
	*/

	//* GAMES

	// ASGE (UNIVERSITY)
	"Not Mario":
	{
		title: "Not Mario - Portfolio Game 1",
		description: "'More Games in C++' Portfolio Game 1 - 'Not Mario'. This project served to introduce us to the ASGE game engine and developing in C++. I am happy with how the project ended up as it taught me a great deal about modern C++ programming. Specifically, 'frameworks,' 'tools and middleware,' and 'object orientation.'<br><br> Using Tiled as middleware, the first task was to establish Tiled level load support, in order to render the game world. Player-wise, movement, collision, statistics, destructibles, etc. Were all a must-have, since this game is attempting to... not be Mario... I suppose. <br><br> Below you will see the landing page, and the gameplay.",
		github: "https://github.com/GoatBandit/-MGiC-Not-Mario",
		firstImage: "/assets/images/portfolio/games/university/more_games_cpp_not_mario_menu.JPG",
		secondImage: "/assets/images/portfolio/games/university/more_games_cpp_not_mario.JPG",
	},
	"Biohazard":
	{
		title: "Biohazard - Portfolio Game 2 (NetGame)",
		description: "'More Games in C++' Portfolio Game 2 - 'Net Game'. This project served to introduce us to networking with Kissnet being used, alongside a focus on a lobby system. I am happy with how the project ended up, though there were two final versions. One without online multiplayer gameplay and one with. This was the case because the deadline came as my group and I were attempting to find the source of a memory leak. Perhaps I will come back to this at the end of the academic year and patch it up.<br><br> Once again, Tiled was used as middleware in order to render the game world in a nice way. The gameplay in the end was similar to turn-based strategy games of old, like the first XCOM game. <br><br> Below you will see the landing page, and the gameplay.",
		github: "https://github.com/GoatBandit/-MGiC-Biohazard",
		firstImage: "/assets/images/portfolio/games/university/more_games_cpp_biohazard.PNG",
		secondImage: "/assets/images/portfolio/games/university/more_games_cpp_biohazard_game.JPG",
	},
	"Observers":
	{
		title: "Observers - Portfolio Game 3 (MovieGame)",
		description: "'More Games in C++' Portfolio Game 3 - 'Movie Game'. This project served to introduce us to interdisciplinary teams and stack-based scene management. I am happy with how the project ended up. Perhaps I will come back to this at the end of the academic year and enhance it.<br><br> Once again, Tiled was used as middleware in order to render the game world in a nice way. The gameplay in the end was similar to a speedrunning-type game as the user had to explore the map and observe differences before the time limit ran out. <br><br> Below you will see the landing page, and the gameplay.",
		github: "https://github.com/GoatBandit/-MGiC-Observers",
		firstImage: "/assets/images/portfolio/games/university/more_games_cpp_biohazard.PNG",
		secondImage: "/assets/images/portfolio/games/university/more_games_cpp_biohazard_game.JPG",
	},

	// Gameplay Programming (UNIVERSITY)
	"Gameplay Programming":
	{
		title: "3D Combat Platformer",
		description: "BSc Games Technology module - Gameplay Programming. <br><br> ",
		// github: "https://github.com/GoatBandit/-MGiC-Not-Mario",
		youtube: "https://youtu.be/slkqRAnRuL0",
		firstImage: "/assets/images/portfolio/games/university/gameplay_programming_game.JPG",
		secondImage: "/assets/images/portfolio/games/university/gameplay_programming_game2.JPG",
	},

	// Game Level Design (UNIVERSITY)
	"Game Level Design":
	{
		title: "Game Level Design",
		description: "BSc Games Technology module. <br><br> ",
		// github: "https://github.com/GoatBandit/-MGiC-Not-Mario",
		firstImage: "/assets/images/portfolio/games/university/game_level_design_game.JPG",
		secondImage: "/assets/images/portfolio/games/university/game_level_design_game2.JPG",
	},

	// SOFTWARE
	"Landmass Generator":
	{
		title: "Landmass Generator",
		description: "What started out initially as a two-dimensional fantasy map generator quickly became a much larger project than I anticipated. This procedural landmass generator features a small range of options to dictate how you want your landmass developed, in either 2D or 3D. This project remains incomplete, in my opinion, due to it not being at a place that I would have liked it to be. Nonetheless, it is a piece of software in its own right that accomplishes its goal. <br><br> This project was created in Unity so its all coded in C#. It uses noise calculations to create a noise map and generate values for each 'tile'. I would like to recreate this project in the future when my skills have developed further in order to better optimise it and allow it to have more generation options. <br><br> More information can be found on the GitHub repository linked with the github image.",
		// github: "https://github.com/GoatBandit/games/LandmassGenerator",
		firstImage: "/assets/images/portfolio/software/landmass_generator.JPG",
		secondImage: "/assets/images/portfolio/software/landmass_generator2.JPG",
	},

	"Plandit":
	{
		title: "Plandit",
		description: "This is just an example box.",
		// github: "https://github.com/GoatBandit/Plandit",
	},

	// WEB DEVELOPMENT
	"This Website":
	{
		title: "This Website",
		description: "This website was my first delve into front-end development and it took a fairly long time, with many issues, to reach a point that I am happy with. <br><br> This website uses both JQuery and JavaScript for effects and scripting due to my desire to experiment and discover which is the preferable one for me to code with in future front-end development projects. The Stylesheets are written in CSS and the rest is hand coded in HTML5. I created the website in this way for the previously-stated reason of wanting to experiment but I also felt it would be the most ideal way to begin learning front-end development. <br><br> More information can be found on the GitHub repository linked with the github image.",
		// github: "https://github.com/GoatBandit/GoatBandit.github.io",
	},

	"ASOT":
	{
		title: "ASOT Property Services",
		description: "With an initial design created by another company, I took over management of this website and have been providing a service that ASOT Property Services have been happy with. I manage all aspects of the website and implement anything that is requested.",
		firstImage: "/assets/images/portfolio/web/ASOT_landing.JPG",
		secondImage: "/assets/images/portfolio/web/ASOT_gimmick.JPG",
	},

	// OTHERS
	"Non-Euclidean Project":
	{
		title: "Comprehensive Creative Technologies Project",
		description: "DEADLINE 28/04/2022<br><br>BSc Games Technology final year project. <br><br> 'CCTP' was the module that formed the self-made final year project on my course 'BSc Games Technology.' <br> My project 'Evolving Video Games with Complementary Geometries: Non-Euclidean Level Design' focused on creating sub-projects consisting of a selected game genre combined with a visual form of non-Euclidean geometry. Many sub-projects were developed, the majority of which only to a superficial level that showcases the intended combination but without needless further development. The sub-projects would be evaluated after development and compared to others to decide whether it should proceed into further development. The end result was the best sub-project being taken into full development and turned into a playable video game. <br><br> More information can be found on the GitHub Repo.",
		// github: "https://github.com/GoatBandit/GoatBandit.github.io",
	},

	// CREDIT
	"Credits":
	{
		title: "Credits",
		description: "This section is just to give credit where credit is due. <br><br> .",
	},

	// BLANK
	"BLANK":
	{
		title: "BLANK",
		description: "This section is blank.",
	},
};
