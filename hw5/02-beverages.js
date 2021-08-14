const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

let app = document.querySelector("#results");
const loading = document.querySelector("#loading");

const addDrinkToDOM = (item) => {
  let element = document.createElement("div");
  let title = document.createElement("h4");
  let myImage = document.createElement("img");

  myImage.style.display = "flex";
  myImage.style.flexDirection = "column";
  title.style.display = "flex";
  title.style.flexDirection = "column";

  title.textContent = item.strDrink;
  myImage.src = item.strDrinkThumb;

  element.setAttribute("class", "figure");
  myImage.style.height = "250px";
  myImage.style.width = "200px";
  myImage.style.padding = "5px 0px 30px 0px";
  title.style.fontSize = "24px";
  title.style.fontWeight = "bold";

  element.append(myImage);
  element.append(title);

  app.append(element);
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.drinks.forEach((item) => {
        addDrinkToDOM(item);
      });
    })
    .catch((error) => {
      let li = document.createElement("li");
      li.textContent = "An error occured. Please try again.";
      app.append(li);
    })
    .finally(() => {
      app.removeChild(loading);
    });
};

fetchData(url);
