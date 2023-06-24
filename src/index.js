import "./styles.css";

if (document.readyState !== "loading") {
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
    });
}
        
function initializeCode() {
          
    /* This function is not needed
    const fetchedDogBreeds = () => {
        fetch("https://dog.ceo/api/breeds/list/random")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.error("Promise rejected", e))
        }
    fetchedDogBreeds()  */
        
    let dogs = [];
    getFiveDogs();
    getFiveDogs();
    getFiveDogs();
    getFiveDogs();
    getFiveDogs();
        
    // Breed
    async function getFiveDogs() {
            
        // BREED RANDOM
        const url = "https://dog.ceo/api/breeds/list/random";
        const dogsPromise = await fetch(url);
        const dogJSON = await dogsPromise.json();
        let breed = dogJSON.message; // BREED
        console.log("* * * * NEXT DOG: Random breed name is: " + dogJSON.message); // BREED
        
        // CORRECT IMAGE FOR "BREED RANDOM", AND FROM BREED IMAGES TO TAKE A RANDOM CHOISE
        let urlImages = "https://dog.ceo/api/breed/images";
        let newUrl = urlImages.replace(/breed/, "breed/" + breed);
        urlImages = newUrl.toString(); // Needed
        const imagesPromise = await fetch(urlImages);
        const imagesJSON = await imagesPromise.json(); // Many images
        let imageX = imagesJSON.message;
        let imageRandomNumber = Math.floor( Math.random() * imageX.length)
        console.log("List of all images for this dog: " + JSON.stringify(imageX))
        console.log("First Image is1: " + imagesJSON.message[0]);  // Same as below
        console.log("First Image is2: " + imageX[0]); // The first image
        console.log("Random Image number '" + imageRandomNumber + "' is: " + imageX[imageRandomNumber]); // Choose the random number
        
        // DOG WITH BREED AND RANDOM IMAGE
        let dog = {
            dogBreed: breed.toString(),
            dogImage: imageX[imageRandomNumber]
        };
        
        // DOCUMENT BODY
        let ela = document.body;
        console.log("ela: ", ela);
        
        // ID APP
        let el0 = document.createElement("div");
        el0.setAttribute("id", "app");
        ela.appendChild(el0);
        console.log("el0: ", el0);
        
        // WIKI-ITEM
        let el = document.createElement("div");
        el.setAttribute("class", "wiki-item");
        el0.appendChild(el);
        console.log("el: ", el);
            
        // WIKI-HEADER
        let el2 = document.createElement("h1");
        el2.setAttribute("class", "wiki-header");
        el2.innerHTML = breed;
        el.appendChild(el2);
        console.log("el2: ", el2);
            
        // WIKI-CONTENT
        let el3 = document.createElement("div");
        el3.setAttribute("class", "wiki-content");
        el.appendChild(el3);
        console.log("el3: ", el3);
        
        // WIKI-TEXT
        let el4 = document.createElement("p");
        el4.setAttribute("class", "wiki-text");
        el4.innerHTML = "The dog is a breed of small scent hound, similar in appearance to the much larger foxhound. The beagle was developed primarily for hunting hare, known as beagling. Possessing a great sense of smell and superior tracking instincts, the beagle is the primary breed used as a detection dog for prohibited agricultural imports and foodstuffs in quarantine around the world. The beagle is intelligent and is a popular pet due to its size, good temper, and a lack of inherited health problems.";
        // GET BREED TEXT FROM/WITH WIKIPEDIA API
        const urlWiki1 = "https://en.wikipedia.org/api/rest_v1/page/summary/breed";
        let urlWiki2 = urlWiki1.replace(/breed/, breed);
        const urlWikiText = urlWiki2.toString(); // Needed
        console.log("urlWikiText is: " + urlWikiText);
        const textPromise = await fetch(urlWikiText);
        const textJSON = await textPromise.json();
        console.log("Wiki-text is: " + textJSON.extract); 
        el4.innerHTML = textJSON.extract;
        el3.appendChild(el4);
        console.log("el4: ", el4);
        
        // IMG-CONTAINER
        let el5 = document.createElement("div");
        el5.setAttribute("class", "img-container");
        el3.appendChild(el5);
        console.log("el5: ", el5);
        
        // WIKI-IMG
        let el6 = document.createElement("img");
        el6.setAttribute("class", "wiki-img");
        el6.setAttribute("src", imageX[imageRandomNumber]);
        el5.appendChild(el6);
        console.log("el6: ", el6);
        
        // PUSH EACH OF THE 5 DOGS INTO ARRAY: BREED AND IMAGE
        dogs.push(dog);
        //dogs.push({dogBreed: breed, dogImage: imageX[0]})  // Toimii kuten edellinenkin rivi
        console.log("Breed: " + breed.toString() + " and " + imageX[imageRandomNumber]); // Result Breed and it's Image
        console.log("Dogs nyt:", dogs);
    };
        
    // TAHAN LOPPUI KOODI   
    console.log("Lopputulostus");
    console.log("Dogsit: ", dogs);
};
        