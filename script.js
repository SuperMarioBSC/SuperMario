// data
const timeline = [
	{
		year: 1985,
		month: 09,
		month_name: "Super Mario",
		title:
			"Super Mario is a community meme token, ownership will be removed. The project will be developed in the direction of NFT and adventure game to give Super Mario fans an experience "
	},
	{
		year: 1986,
		month: 06,
		month_name: "Who are Super Mario?",
		title:
			"Mario is a fictional character created by Japanese video game designer Shigeru Miyamoto."
	},
	{
		year: 1988,
		month: 10,
		month_name: "Welcome To The SuperMario",
		title:
			"Super Mario (MARIO) is a collection of 666 Mario NFT fans that includes variations on outfits and accessories."
	},
	{
		year: 1988,
		month: 10,
		month_name: "TOKENOMICS",
		title:
			"$MARIO is built in a sustainable way to benefit both holders and project sustainability (6% BUY | 6% SELL) "
	},
	{ year: 1989, month: 04, month_name: "Total Supply", title: "100,000,000B" },
	{
		year: 1990,
		month: 11,
		month_name: "#1",
		title:
			"2% FOR CHARITY ACTIVITIES FOR POOR CHILDREN AND PROMOTE THE PROJECT TO MORE USERS IN THE FUTURE"
	},
	{
		year: 1992,
		month: 10,
		month_name: "#2",
		title:
			"Liquidity will be locked, the developer team will only hold 2% to use for project marketing and the community will be the one to decide the project"
	},
	{
		year: 1995,
		month: 08,
		month_name: "#3",
		title:
			"The remaining 2% will be divided equally among the holders, which creates a passive profit for long-term investors."
	},
	{
		year: 1996,
		month: 06,
		month_name: "TRANSPARENCY",
		title: "A CONNECTED DEV TEAM"
	},
	{
		year: 2002,
		month: 07,
		month_name: "A CONNECTED DEV TEAM",
		title:
			"Our team have a strong set of skills and many have worked for large financial companies specialising in marketing. extension and create a wallet. Then proceed to fund your wallet with BNB. Make sure you have enough for gas fees."
	},
	{
		year: 2006,
		month: 05,
		month_name: "ANTI-FUD CHAT",
		title:
			"We do not tolerate FUD in the chats, all FUD will be banned in order to protect the community and the growth of Sanji. We represent positivity and a strong community."
	},
	{
		year: 2007,
		month: 11,
		month_name: "SUPPLY & LIQUIDITY",
		title:
			"$MARIO supply starts at 100,000,000B tokens and will decrease with our built in burn function on $MARIO transactions."
	},
	{
		year: 2009,
		month: 11,
		month_name: "ROADMAP",
		title:
			"STAGE 1 - Attracting more than 1,000 holders White Paper 1.0 Release 2,000 Telegram members Coingecko listing Coinmarketcap listing Contract Audit"
	},
	{
		year: 2010,
		month: 05,
		month_name: "STAGE 2",
		title:
			"10,000 holders Marketing campaign (Socials: Youtube, Twitter, Facebook, Instagram, Tiktok) Attract 20,000 Telegram followers Marketplace website integration Market Cap Stable Above 50 million First Vote to Donate to Charities"
	},
	{
		year: 2011,
		month: 11,
		month_name: "STAGE 3",
		title:
			"40,000 holders Listed Mario token on small and medium exchanges New partnership Preparing to list on major exchanges Big Marketing Push (i.e BTOK Ads) Update ON Trustwallet"
	},
	{
		year: 2012,
		month: 07,
		month_name: "STAGE 4",
		title:
			"Designing our first NFTs Launch of the NFT collection Strong marketing into the global NFT community Open the first 1000 NFT mint Full Marketing Push Making bigger Strategic Partnerships Update Moonmap new version"
	},
	{
		year: 2012,
		month: 11,
		month_name: "OUR TEAM",
		title:
			"(CEO & Founder Juanz) (Co-Founder Mickey) (Community Manager Robert) (Social Media Manager Vicky)"
	},
	{
		year: 2013,
		month: 11,
		month_name: "PARTNER",
		title: "Binance Smart Chain"
	},
	{
		year: 2015,
		month: 09,
		month_name: "Telegram",
		title: "#"
	},
	{
		year: 2016,
		month: 12,
		month_name: "Twitter",
		title: "#"
	},
	{
		year: 2017,
		month: 10,
		month_name: "Github",
		title: "#"
	},
	{
		year: 2019,
		month: 06,
		month_name: "Medium",
		title: "#"
	},
	{
		year: 2021,
		month: 02,
		month_name: "OpenSea",
		title: "#"
	}
];

//
const mario = document.getElementById("mario");
const ground = document.getElementById("ground");
const grass = document.getElementById("grass");
const eventsContainer = document.getElementById("events");
let currentIndex = -1;
let currentPipe;
let int1;

// click handler
const pipeHandler = (event) => {
	clearInterval(int1);

	document.getElementById("info").style.display = "none";

	// clear old
	!currentPipe || currentPipe.classList.remove("active");

	// get index
	const index = parseInt(event.currentTarget.dataset.index);

	// walk
	const xpos = -100 - index * 150 - 25;
	const curXpos = -100 - currentIndex * 150 - 25;
	const distance = curXpos - xpos;
	const duration = Math.abs(distance) * 3;
	// console.log(distance);
	eventsContainer.style.transitionDuration = `${duration}ms`;
	eventsContainer.style.transform = `translateX(${xpos}px)`;
	ground.style.transitionDuration = `${duration}ms`;
	ground.style.backgroundPosition = `${xpos}px 32px`;
	grass.style.transitionDuration = `${duration}ms`;
	grass.style.backgroundPosition = `${xpos}px 0`;

	//
	playSfx("jump");

	// walk style
	const dir = distance < 0 ? "left" : "right";
	mario.classList.remove(
		"idle",
		"walk-left",
		"walk-right",
		"search-left",
		"search-right"
	);
	mario.classList.add(`walk-${dir}`);
	int1 = setTimeout(
		(dir, target) => {
			mario.classList.remove(`walk-${dir}`);
			mario.classList.add(`search-${dir}`);
			target.classList.add("active");
			playSfx("pipe");
		},
		duration,
		dir,
		event.currentTarget
	);

	// store position
	currentIndex = index;
	currentPipe = event.currentTarget;
};

// setup timeline
timeline.forEach((event, index) => {
	const e = document.createElement("div");
	e.classList.add("event");
	e.dataset.index = index;
	e.dataset.title = event.title;
	e.dataset.month = event.month_name;
	eventsContainer.appendChild(e);
	e.addEventListener("click", pipeHandler.bind(this));
});

/**
 * Audio handling
 */
const canAudio = "AudioContext" in window || "webkitAudioContext" in window;
const buffers = {};
let context = void 0;

if (canAudio) {
	var AudioContext = window.AudioContext || window.webkitAudioContext;
	context = new AudioContext(); // Make it crossbrowser
	var gainNode = context.createGain();
	gainNode.gain.value = 1; // set volume to 100%
}

const playSfx = function play(id) {
	if (!canAudio || !buffers.hasOwnProperty(id)) return;
	const buffer = buffers[id];
	const source = context.createBufferSource();
	source.buffer = buffer;
	source.connect(context.destination);
	source.start();
};

const loadBuffers = (urls, ids) => {
	if (typeof urls == "string") urls = [urls];
	if (typeof ids == "string") ids = [ids];
	urls.forEach((url, index) => {
		window
			.fetch(url)
			.then((response) => response.arrayBuffer())
			.then((arrayBuffer) =>
				context.decodeAudioData(
					arrayBuffer,
					(audioBuffer) => {
						buffers[ids[index]] = audioBuffer;
					},
					(error) => console.log(error)
				)
			);
	});
};

loadBuffers(
	[
		"https://assets.codepen.io/439000/jump.mp3",
		"https://assets.codepen.io/439000/smb_pipe.mp3"
	],
	["jump", "pipe"]
);