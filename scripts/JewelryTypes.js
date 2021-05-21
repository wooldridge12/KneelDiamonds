// import, and pull data to make if else statements working for * prices.
import { getTypes, setType} from "./database.js"


const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
)

export const JewelryTypes = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const type of types) {
        html += `<li>
            <input type="radio" name="type" value="${type.id}" /> ${type.name}
        </li>`
    }

    html += "</ul>"
    return html
}
