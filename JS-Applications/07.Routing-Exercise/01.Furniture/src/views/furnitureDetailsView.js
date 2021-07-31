import { render } from "./../../node_modules/lit-html/lit-html.js";
import detailsTemplate from "../templates/detailsTemplate.js";
import { getFurnitureById } from "../../service/catalogService.js";

export default async function(context) {
    console.log(context.params.id);
    let rootDiv = document.querySelector('.root');
    let data = await getFurnitureById(context.params.id);
    render(detailsTemplate(data), rootDiv);
}