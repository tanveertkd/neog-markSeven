const textInput = document.querySelector(".input-textarea");
const textOutput = document.querySelector(".output-textarea");
const btnTranslate = document.querySelector(".btn-translate");

const URL = "https://api.funtranslations.com/translate/vulcan.json";

const urlBuilder = (input) => {
    return URL+"?text="+input;
}

const errorHandler = (error) => {
    console.log("Looks like there's been an issue. Please try again later.", error);
}

const clickHandler = () => {
    const data = textInput.value;
    console.log(data);

    fetch(urlBuilder(data))
    .then(response => response.json())
    .then(json => {
        const responseData = json.contents.translated;
        textOutput.innerText = responseData;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);