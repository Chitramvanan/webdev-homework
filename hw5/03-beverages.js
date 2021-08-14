$(document).ready(function () {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

  const addDrinkToDOM = (item) => {
    $("#results").append(
      $("<div>")
        .addClass("figure")
        .append(
          $("<img>").attr("src", item.strDrinkThumb).css({
            display: "flex",
            flexDirection: "column",
            height: "250px",
            width: "200px",
            padding: "5px 0px 30px 0px",
          })
        )
        .append(
          $("<h3>").text(item.strDrink).css({
            display: "flex",
            flexDirection: "column",
            "font-weight": "bold",
            "font-size": "24px",
          })
        )
    );
  };

  const fetchData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      success: (data) => {
        data.drinks.forEach((item) => {
          addDrinkToDOM(item);
        });
      },
      error: (error) => {
        $("#results")
          .append("<section")
          .text(`An error occured. Please try again.`);
      },
      complete: () => {
        $("#loading").remove();
      },
    });
  };

  fetchData(url);
});
