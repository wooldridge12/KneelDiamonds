import { KneelDiamonds } from "./KneelDiamonds.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}


renderAllHTML()

//You implemented a new event listener for the browser-generated click event on the order button. part 3/3
// You implemented a new event listener in the main module for the custom stateChanged event
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    // That event listener invokes the renderAllHTML() function to regenerate the HTML so that new state is displayed to the user.
    renderAllHTML()
})