// **Question 2**

// Make a call to the Rawg API.

// Go to [https://rawg.io/apidocs](https://rawg.io/apidocs) and get an API key which you’ll use as part of the endpoint you’re making an API call to. You can use https://noroff.no for the URL and Noroff Assignment for the description.

// You'll be given an API Key you can add as a "key" parameter in your fetch request.

// Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.

// [https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE](https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE)

// Loop through the results and display the following properties in HTML, but only for the first eight results:

// - name
// - rating
// - number of tags (not the tag details, just the amount of tags)

// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// You can use either regular promise or async/await syntax to make the call.

// Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=49fe0cc939b64be68c6e0ac7d7ee2937"

const gameContainer = document.querySelector(".container");

const loader = document.querySelector(".loader");

function createHTML(games) {
    const content = games.all;

    gameContainer.innerHTML = "";

        for (let i = 0; i < games.length; i++) {

            var item = games[i];
                console.log(item.name);

                console.log(item.rating);

                console.log(item.tags);


            if (i === 8) {
                break;
            }

            gameContainer.innerHTML += `<div class="result">${content[i].text}</div>`;
        }
}

async function getGames() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        const facts = data.all;

        createHTML(content);

    } catch(error) {
        console.log("error occurred");
        loader.innerHTML = "Nah there was an error!";
    }
}

getGames();