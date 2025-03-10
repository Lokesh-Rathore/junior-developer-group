const Member = [
	{
		about: "Hi, I'm Likii! 👋 Junior Developer Group founder and front-end developer working with Vue 💚 ",
		name: "Likii",
		speciality: "Front-End Developer",
		image: "https://avatars1.githubusercontent.com/u/51357920?s=460&u=0c0ba2fa0b0f222dd9ceaf301a6e609ec6a6ca9a&v=4",
		social_links: {
			github: "https://github.com/mateahoward",
			instagram: "https://www.instagram.com/likiipedia/",
			twitter: "https://twitter.com/Likiipedia",
			linkedin: "https://linkedin.com/in/matea-howard",
		},
		contact: "https://likiipedia.com/",
	},

	{
		about: "I’m a junior developer who is particularly interested in making education and the arts more accessible through the use of technology.",
		name: "Lizard",
		speciality: "Front-end development, designing for accessibility",
		image: "https://idealkoala.files.wordpress.com/2021/01/img-1064-copy.jpg",
		social_links: { github: "https://github.com/onlyasmalllizard" },
	},

	{
		about: "I’m a Junior developer, working with Javascript, Node and Express",
		name: "Denice",
		speciality: "Junior developer",
		image: "https://github.com/Denice-S.png",
		social_links: {
			github: "https://github.com/Denice-S",
			linkedin: "https://linkedin.com/in/denice-soper",
		},
		contact: "",
	},

	{
		about: "I’m a junior fullstack dev from Israel. Currently working with Vue and Firebase.",
		name: "Uriel",
		speciality: "Front-End Developer",
		image: "https://avatars.githubusercontent.com/u/30144878",
		social_links: {
			github: "https://github.com/urielofir",
			facebook: "https://www.facebook.com/urielofir86/",
			linkedin: "https://www.linkedin.com/in/uriel-ofir/",
		},
	},

	{
		about: "I’m a junior developer currently working with JavaScript and React. I love making things look beautiful",
		name: "Francesca",
		speciality: "Front-End Developer",
		image: "https://avatars.githubusercontent.com/u/46782373?s=400&u=1bb0e2a85f9e2d60f252810b39ffc000671839cf&v=4",
		social_links: {
			github: "https://github.com/frannyfra",
			linkedin: "https://www.linkedin.com/in/frannyfra/",
		},
		contact: "http://francesca-de-laurentis.com/",
	},

	{
		about: "I’m a junior software dev, serving in a non-profit religious organisation coding with js, python and solidity. I run a local community (southern code) in Nigeria, teaching programming.",
		name: "Oghenekparobo",
		speciality: "Software Developer",
		image: "https://avatars.githubusercontent.com/u/68813273?v=4",
		social_links: {
			github: "https://github.com/Jaytru1997",
			instagram: "https://instagram.com/an_onosemuode?igshid=1r6teffyhnmdm",
			twitter: "https://twitter.com/IAM_JoelZamani?s=08",
			linkedin: "https://www.linkedin.com/in/oghenekparobo-o-997a6b17b",
			facebook: "https://www.facebook.com/oghenekparobo.onosemuode",
		},
		contact: "https://lesoustechnology.com/",
	},

	{
		about: "I'm a junior developer from New Orleans, Louisiana, currently learning HTML and CSS among other things.",
		name: "John",
		speciality: "Front-End Developer",
		image: "https://avatars.githubusercontent.com/u/84462084?v=4",
		social_links: {
			github: "https://github.com/john-fowle/",
		},
	},

	{
		about: "I'm a junior SWE and ui designer from Costa Rica, currently learning front-end.",
		name: "Alejandro 🙋‍♂️",
		speciality: "Software Engineering Student",
		image: "https://avatars.githubusercontent.com/Alegarciy",
		social_links: {
			github: "https://github.com/Alegarciy",
		},
	},

	{
		about: " I am a Junior Front End Developer from Tennessee, currently working through React and TypeScript",
		name: "Jeff 👋",
		speciality: "Front End Development / JavaScript All the Things",
		image: "https://avatars.githubusercontent.com/J3ffJessie",
		social_links: {
			github: "https://github.com/J3ffJessie",
			linkedin: "https://www.linkedin.com/in/j3ffjessie",
			twitter: "https://www.twitter.com/j3ffjessie",
		},
	},

	{
		about: "Software Developer working with Java, Spring, Vaadin and JavaScript on both personal and open-source projects",
		name: "Alex",
		speciality: "Software Developer",
		image: "https://avatars.githubusercontent.com/aleksandar-trifunovic",
		social_links: {
			github: "https://github.com/aleksandar-trifunovic",
			linkedin: "https://www.linkedin.com/in/aleksandar-trifunovic-rs/",
			twitter: "https://twitter.com/alex_javadev",
		},
	},

	{
		about: "I'm a Junior Software Developer from Nottingham, currently working with C#, .Net Core and Angular",
		name: "Ruman",
		speciality: "Software Developer",
		image: "https://avatars.githubusercontent.com/loop-infinity",
		social_links: {
			github: "https://github.com/loop-infinity",
			linkedin: "https://www.linkedin.com/in/ruman-mulla",
		},
	},

	{
		about: "Junior React developer. Obsessed with video games (and streaming them), my furbaby Dermott (English Bulldog) and sushi.",
		name: "Thomas",
		speciality: "React Developer",
		image:
			"https://avatars.githubusercontent.com/fitzcodes",
		social_links: {
			github: "https://github.com/fitzcodes",
			instagram: "https://www.instagram.com/fitzcodes/",
			twitter: "https://twitter.com/fitzcodes",
			linkedin: "https://www.linkedin.com/in/thomas-fitzgerald-fitzcodes/",
		},
		contact: "https://fitzcodes.github.io/",
	},
	{
		about: "Aspiring web developer",
		name: "Amon",
		speciality: "Frontend web developer",
		image:
			"https://avatars.githubusercontent.com/u/64846892?v=4",
		social_links: {
			github: "https://github.com/A-amon"
		},
		contact: "https://github.com/A-amon",
	},
];

for (members of Member) {
	const team_member = `
                <div class="team-card">
                    <p>
                      ${members.about}
                    </p>

                    <div class="image-wrapper">
                      <img src=${members.image} alt="members profile image"/>
                    </div>

                    <div class="details">
                      <h2> ${members.name} <br />
                        <span> ${members.speciality}</span>
                      </h2>
                      
                    <div class="social_links">
                      ${members.social_links.github
			? `<span><a href= "${members.social_links.github}" aria-label="github"<i class="fab fa-github fa-2x"></i></a></span>`
			: ""
		}
                      ${members.social_links.instagram
			? `<span><a href= "${members.social_links.instagram}" aria-label="instagram"<i class="fab fa-instagram fa-2x"></i></a></span>`
			: ""
		}
                      ${members.social_links.facebook
			? `<span><a href= "${members.social_links.facebook}"aria-label="facebook" <i class="fab fa-facebook fa-2x"></i></a></span>`
			: ""
		}                    
                      ${members.social_links.twitter
			? `<span><a href= "${members.social_links.twitter}"aria-label="Twitter"<i class="fab fa-twitter fa-2x"></i></a></span>`
			: ""
		}
                      ${members.social_links.linkedin
			? `<span><a href= "${members.social_links.linkedin}"aria-label="linkedin"<i class="fab fa-linkedin fa-2x"></i></a></span>`
			: ""
		}
                    </div>
                    <div class="contact-team-member">
                      ${members.contact
			? `<a href="${members.contact}"> Find out more 🖱️ </a`
			: ""
		}
                    </div>
                </div>`;

	document.querySelector(".team-card-wrapper").innerHTML += team_member;
}

