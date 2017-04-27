var arr = [{
	title: "Samurai",
	name: "Tomoe Gozen",
	bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	lifespan: {
			birth: 1747,
			death: 1797
			}
	},
	{
	title: "Mr",
	name: "Ralph Waldo Emerson",
	bio: "Ralph Waldo Emerson was an American essayist, lecturer, and poet who led the transcendentalist movement of the mid-19th century. He was seen as a champion of individualism and a prescient critic of the countervailing pressures of society, and he disseminated his thoughts through dozens of published essays and more than 1,500 public lectures across the United States.",
	image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ralph_Waldo_Emerson_ca1857_retouched.jpg/220px-Ralph_Waldo_Emerson_ca1857_retouched.jpg",
	lifespan: {
		birth: 1803,
		death: 1882
		}
	},
	{
	title: "Sir",
	name: "Alex Ferguson",
	bio: "Sir Alexander Chapman Ferguson, CBE is a former Scottish football manager and player who managed Manchester United from 1986 to 2013. He is regarded by many players, managers and analysts to be the greatest and most successful manager of all time.",
	image: "http://campusghanta.com/wp-content/uploads/2013/05/alex.jpg",
	lifespan: {
		birth: 1941,
		death: "Nah Fam"
		}
	},
	{
	title: "Lady",
	name: "Audrey Hepburn",
	bio: "Audrey Hepburn (/ˈɔːdri ˈhɛpˌbɜːrn/; born Audrey Kathleen Ruston; was a British actress, model, dancer and humanitarian. Recognized as a film and fashion icon, Hepburn was active during Hollywood's Golden Age. She was ranked by the American Film Institute as the third-greatest female screen legend in Golden Age Hollywood and was inducted into the International Best Dressed List Hall of Fame. Born in Ixelles, a district of Brussels, Hepburn spent her childhood between Belgium, England and the Netherlands. In Amsterdam, she studied ballet with Sonia Gaskell before moving to London in 1948, continuing her ballet training with Marie Rambert, and then performing as a chorus girl in West End musical theatre productions.",
	image: "http://chemistry.st-andrews.ac.uk/staff/rem/group/wp-content/uploads/uploaded/Audrey-Hepburn-1.jpg",
	lifespan: {
		birth: 1929,
		death: 1993
		}
	}
],
	here = document.getElementById("here"),
	input = document.getElementById("text"),
	samurai = document.getElementById("samurai"),
	waldo = document.getElementById("waldo"),
	fergie = document.getElementById("fergie"),
	hepburn = document.getElementById("hepburn"),
	peeps = document.getElementsByClassName("person"),
	border = document.getElementsByClassName("border");

arr.forEach(function(prop, index) {
		person = 	`<div class="person" id="person--${index}">
						<header>
							<h2>${prop.title} ${prop.name}</h2>
						</header>
						<section>
							<p>${prop.bio}</p>
							<div class="portrait">
								<img src="${prop.image}">
							</div>
						</section>
						<footer>
							${prop.lifespan.birth} - ${prop.lifespan.death}
					  	</footer>
					</div>`;
	here.innerHTML += person;
});

for (var i = 0; i < peeps.length; i++) {
	peeps[i].addEventListener("click", function(event) {
		event.currentTarget.classList.toggle("border");
		text.focus();
	})
}

input.onkeyup = function(key) {
	if (key.keyCode == 13) {
		input.value = "";
	} else {
		for (var i = 0; i < border.length; i++) {
			var bio = border[i].getElementsByTagName("p");

			for(var j = 0; j < bio.length; j++) {
				bio[j].innerHTML = input.value;
			}
		}
	}
}