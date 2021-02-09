export default (text="Hello za Warudo") =>{
    const container = document.createElement("div");
    const header = document.createElement("p");
    header.innerHTML = text;
    container.appendChild(header);
    return container;
}