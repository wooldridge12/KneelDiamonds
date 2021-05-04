import { getStyles, setStyle } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        //If you click on a style NAME you will trigger the setStyle function.
        if (event.target.name === "style") {
            //The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN . If not NaN , the return value will be the integer that is the first argument taken as a number in the specified radix. In this case returning the value of the target being the style ID.
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = styles.map(style => {
        return `<li>
        <input type="radio" name="style" value="${style.id}" /> ${style.style} </li>`
    })


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}

