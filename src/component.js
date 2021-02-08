export default (text="Hello thad World") =>{
    const element = document.createElement("div");
    element.innerHTML = text;
    return element;
}