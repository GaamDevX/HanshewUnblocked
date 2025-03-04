
// Games List with Categories
const games = [
    { name: "1v1.lol", url: "https://skys.follobusiness.com/semag/1v1lol/index.html", category: "action", image: "https://img.utdstc.com/icon/983/22a/98322a3b2be892eed31589906ffd949b68bcccc9a21ba562987965b5ec6bc6de:200" },
    { name: "Amazing Rope Police", url: "https://skys.follobusiness.com/semag/amazing-rope-police/index.html", category: "puzzle", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10dN4kjY-lCBWXN9X1FHTGaqJukp55Ic2rA&s" },
    { name: "Basketball Stars", url: "https://skys.follobusiness.com/semag/basketball-stars/index.html", category: "sports", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKMfiklMLmio5eJsDFtmN0QYrbSjEfp3EQg&s" },
    { name: "Bitlife", url: "https://skys.follobusiness.com/semag/bitlife/index.html", category: "puzzle", image: "https://static.wikia.nocookie.net/logopedia/images/9/99/Bitlife.png/revision/latest?cb=20230208011106" },
    { name: "Cookie Clicker", url: "https://skys.follobusiness.com/semag/cookieclicker/index.html", category: "puzzle", image: "" },
    { name: "Drift Hunters", url: "https://skys.follobusiness.com/semag/drifthunters/index.html", category: "sports", image: "" },
    { name: "Drive Mad", url: "https://skys.follobusiness.com/semag/drivemad/index.html", category: "action", image: "" },
    { name: "StackTris", url: "https://dexter.is.sigma.df.webconstructions.co.uk/data/g/stacktris/", category: "puzzle", image: "" },
    { name: "TABS", url: "https://skys.follobusiness.com/semag/tabs/index.html", category: "action", image: "" },
    { name: "Gladihoppers", url: "https://skys.follobusiness.com/semag/gladihoppers/index.html", category: "action", image: "" },
    { name: "Ocarina of Time", url: "https://skys.follobusiness.com/semag/ocarinaoftime/index.html", category: "action", image: "" },
    { name: "Eaglercraft", url: "https://skys.follobusiness.com/semag/eaglercraft/index.html", category: "action", image: "" },
    { name: "OVO", url: "https://skys.follobusiness.com/semag/ovo/index.html", category: "puzzle", image: "" },
    { name: "Poly Track", url: "https://skys.follobusiness.com/semag/polytrack/index.html", category: "sports", image: "" },
    { name: "Monkey Mart", url: "https://skys.follobusiness.com/semag/monkeymart/index.html", category: "puzzle", image: "" },
    { name: "Paper.io", url: "https://skys.follobusiness.com/semag/paperio/index.html", category: "action", image: "" },
    { name: "Snow Rider 3D", url: "https://skys.follobusiness.com/semag/snowrider3d/index.html", category: "sports", image: "" },
    { name: "Windows 11", url: "https://skys.follobusiness.com/sppa/11/index.html", category: "puzzle", image: "" },
    { name: "Stickman Climb", url: "https://skys.follobusiness.com/semag/stickmanclimb/index.html", category: "action", image: "" },
    { name: "Madalin Cars", url: "https://skys.follobusiness.com/semag/madalincars/index.html", category: "sports", image: "" },
    { name: "Drift Boss", url: "https://skys.follobusiness.com/semag/drift-boss/index.html", category: "sports", image: "" },
    { name: "Age Of War", url: "https://skys.follobusiness.com/semag/ageofwar/index.html", category: "action", image: "" },
    { name: "Kick That Buddy", url: "https://skys.follobusiness.com/semag/kickthatbuddy/index.html", category: "action", image: "" },
    { name: "MajorasMask", url: "https://skys.follobusiness.com/semag/majorasmask/index.html", category: "action", image: "" },
    { name: "Rooftop Snipers 2", url: "https://skys.follobusiness.com/semag/rooftopsnipers2/index.html", category: "sports", image: "" },
    { name: "RandomFacts", url: "https://plawizard.github.io/RandomFactsGenerator/", category: "puzzle", image: "" },
    { name: "Jetpack Joyride", url: "https://skys.follobusiness.com/semag/jetpackjoyride/index.html", category: "puzzle", image: "" },
    { name: "Rocket League", url: "https://skys.follobusiness.com/semag/2drocketleague/index.html", category: "sports", image: "" },
    { name: "Retro Bowl", url: "https://skys.follobusiness.com/semag/retrobowl/index.html", category: "sports", image: "" },
    { name: "Retro Bowl College", url: "https://skys.follobusiness.com/semag/retrobowlcollege/index.html", category: "sports", image: "" },
    { name: "Fancy Pants 2", url: "https://skys.follobusiness.com/semag/fancypantsadventures2/index.html", category: "sports", image: "" },
    { name: "Just Fall.lol", url: "https://skys.follobusiness.com/semag/justfalllol/index.html", category: "sports", image: "" },
    { name: "fnaf", url: "https://skys.follobusiness.com/semag/fnaf/index.html", category: "horror", image: "" },
    { name: "fnaf 2", url: "https://skys.follobusiness.com/semag/fnaf2/index.html", category: "horror", image: "" },
    { name: "fnaf 3", url: "https://skys.follobusiness.com/semag/fnaf3/index.html", category: "horror", image: "" },
    { name: "fnaf 4", url: "https://skys.follobusiness.com/semag/fnaf4/index.html", category: "horror", image: "" },
    { name: "FunnyShooter1", url: "https://skys.follobusiness.com/semag/funnyshooter/index.html", category: "shooting", image: "" },
    { name: "FunnyShooter2", url: "https://skys.follobusiness.com/semag/funnyshooter2/index.html", category: "shooting", image: "" },
    { name: "StackTris", url: "https://artedu1808.github.io/g6/stacktris/", category: "puzzle", image: "" },
    { name: "8-Ball-Pool", url: "https://artedu1808.github.io/g8/8-ball-pool/", category: "sports", image: "" },
    { name: "Bullet Force", url: "https://artedu1808.github.io/g7/bullet-force/", category: "shooting", image: "" },
    { name: "Offroader-V5", url: "https://artedu1808.github.io/g5/offroader-v5/", category: "cars", image: "" },
    { name: "BowlingStars", url: "https://artedu1808.github.io/g2/bowling-stars/", category: "sports", image: "" },
];

// Changelog Data
const changelog = [
    "2024-12-14: Initial release of Hanshew Unblocked.",
    "2025-1-02: Added Dark Mode / Light Mode Toggle.",
    "2025-1-03: Added Random Game Button.",
    "2025-2-04: Organized games into categories (Action, Puzzle, Sports).",
    "2025-2-04: Improved animations and transitions.",
    "2025-2-11: Added more color options to Settings.",
    "2025-2-13: Fixed Random Game Button functionality.",
    "2025-2-14: Updated changelog to include all changes and additions.",
    "2025-2-16: Started work on the 1.1 upcoming update.",
    "2025-2-19: Added a new category *Horror* and added some new games like FNAF 1 through 4.",
];

// Show Content Function
function showContent(section) {
    let content = document.getElementById('content');
    content.style.opacity = 0; // Fade out
    setTimeout(() => {
        if (section === 'games') {
            content.innerHTML = `<h2>Games</h2>
            <div class="game-grid" id="gameGrid">
                ${games.map(game => `
                    <div class="game-card">
                        <img src="${game.image}" alt="${game.name}">
                        <button onclick="openGame('${game.url}')">${game.name}</button>
                    </div>
                `).join('')}
            </div>`;
            document.getElementById('searchContainer').style.display = 'block';
            document.getElementById('categoryButtons').style.display = 'flex';
            document.getElementById('randomGameButton').style.display = 'block'; // Show Random Game Button
        } else if (section === 'changelog') {
            content.innerHTML = `<h2>Changelog</h2>
            <ul>
                ${changelog.map(entry => `<li>${entry}</li>`).join('')}
            </ul>`;
            document.getElementById('searchContainer').style.display = 'none';
            document.getElementById('categoryButtons').style.display = 'none';
            document.getElementById('randomGameButton').style.display = 'none'; // Hide Random Game Button
        } else if (section === 'request') {
            content.innerHTML = `<h2>Request a Game</h2>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScSAzH0fxhqhj2s_sypXYFnCp6Ugnuhk4Wb2PLA3ZR9fkNe9A/viewform?embedded=true" width="640" height="430" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;
            document.getElementById('searchContainer').style.display = 'none';
            document.getElementById('categoryButtons').style.display = 'none';
            document.getElementById('randomGameButton').style.display = 'none'; // Hide Random Game Button
        } else if (section === 'settings') {
            content.innerHTML = `<h2>Settings</h2>
            <div class="color-options">
                <button onclick="changeColors('#ff0000', '#fff')">Red</button>
                <button onclick="changeColors('#0000ff', '#fff')">Blue</button>
                <button onclick="changeColors('#000000', '#fff')">Black</button>
                <button onclick="changeColors('#008000', '#fff')">Green</button>
                <button onclick="changeColors('#800080', '#fff')">Purple</button>
            </div>`;
            document.getElementById('searchContainer').style.display = 'none';
            document.getElementById('categoryButtons').style.display = 'none';
            document.getElementById('randomGameButton').style.display = 'none'; // Hide Random Game Button
        } else if (section === 'profile') {
            content.innerHTML = `
            <h2>Profile</h2>
            <form id="profile-form">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"><br><br>
                <label for="profile-picture">Profile Picture:</label>
                <input type="file" id="profile-picture" name="profile-picture"><br><br>
                <button type="submit">Save Profile</button>
            </form>
            <div id="profile-info"></div>
            `;
            document.getElementById('searchContainer').style.display = 'none';
            document.getElementById('categoryButtons').style.display = 'none';
            document.getElementById('randomGameButton').style.display = 'none'; // Hide Random Game Button
        }
        content.style.opacity = 1; // Fade in
    }, 300);
}

// Open Game Function
function openGame(url) {
    window.location.href = url; // Replace the current page
}

// Random Game Function (Fixed)
function openRandomGame() {
    const randomGame = games[Math.floor(Math.random() * games.length)];
    window.location.href = randomGame.url; // Replace the current page
}

// Filter Games by Category
function filterGames(category) {
    const gameGrid = document.getElementById('gameGrid');
    if (category === 'all') {
        gameGrid.innerHTML = games.map(game => `
            <div class="game-card">
                <img src="${game.image}" alt="${game.name}">
                <button onclick="openGame('${game.url}')">${game.name}</button>
            </div>
        `).join('');
    } else {
        const filteredGames = games.filter(game => game.category === category);
        gameGrid.innerHTML = filteredGames.map(game => `
            <div class="game-card">
                <img src="${game.image}" alt="${game.name}">
                <button onclick="openGame('${game.url}')">${game.name}</button>
            </div>
        `).join('');
    }
}

// Change Colors Function
function changeColors(background, textColor) {
    document.body.style.background = background;
    document.body.style.color = textColor;
    document.querySelectorAll("button").forEach(btn => {
        btn.style.backgroundColor = background;
        btn.style.color = textColor;
    });
    document.getElementById('search').style.backgroundColor = background;
    document.getElementById('search').style.color = textColor;
}

// Search Games Function
function searchGames() {
    const query = document.getElementById('search').value.toLowerCase();
    const gameButtons = document.querySelectorAll('.game-grid .game-card');
    gameButtons.forEach(button => {
        const gameName = button.querySelector('button').textContent.toLowerCase();
        if (gameName.includes(query)) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
}

// Function to show the profile section
function showProfile() {
    const profile = document.getElementById('profile');
    profile.style.display = 'block';
    const username = localStorage.getItem('username');
    const profilePicture = localStorage.getItem('profilePicture');
    if (username && profilePicture) {
        document.getElementById('username').value = username;
        document.getElementById('profile-info').innerHTML = `<img src="${profilePicture}" alt="Profile Picture">`;
    }
}

// Function to handle profile form submission
document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const profilePicture = document.getElementById('profile-picture').files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        localStorage.setItem('username', username);
        localStorage.setItem('profilePicture', event.target.result);
        document.getElementById('profile-info').innerHTML = `<img src="${event.target.result}" alt="Profile Picture">`;
    };
    reader.readAsDataURL(profilePicture);
});

// Function to show the image adder section
function showImageAdder() {
    const imageAdder = document.getElementById('image-adder');
    imageAdder.style.display = 'block';
}

// Function to handle image adder form submission
document.getElementById('image-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const gameName = document.getElementById('game-name').value;
    const gameImage = document.getElementById('game-image').files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const gameIndex = games.findIndex(game => game.name === gameName);
        if (gameIndex !== -1) {
            games[gameIndex].image = event.target.result;
            showContent('games');
        } else {
            alert('Game not found!');
        }
    };
    reader.readAsDataURL(gameImage);
});
