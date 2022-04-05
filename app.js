// Giphy Fetch API by Search Term

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "";

let inputEle = document.querySelector("#gifSearch");
let searchBtnEle = document.querySelector("#searchBTN");
let imgEle = document.querySelector("#giphy");
let titleEle = document.querySelector("#gifTitle");

searchBtnEle.addEventListener("click", searchGif);

async function searchGif() {
    let searchTerm = inputEle.value;

    try {
        let response = await fetch(
            (`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchTerm})`
        );
        let responseBody = await response.json();
        console.log(responseBody);
        titleEle.textContent - responseBody.data.title;
        imgEle.src = responseBody.data.images.original.url;
    } catch (error) {
        console.error(error);
    }
}