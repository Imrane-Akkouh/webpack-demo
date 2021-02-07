export default (text="Hello from Webpack") =>{
    const element = document.createElement("div");
    element.innerHTML = text;
    return element;
}