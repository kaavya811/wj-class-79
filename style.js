var reasons = [
    "this is my mom ",
    "this is my grandfather",
    "this is my grandmother",
    "this is my full family in happyness"
  ];
  var images = [
    "",
    "https://images.unsplash.com/photo-1592646917115-df9519df7392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
    "https://images.unsplash.com/photo-1551861568-332d2a6e2330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400",
    "https://images.unsplash.com/photo-1611699280210-ddb6bbff69b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
  ];
  var i = 0;
  function nextslide() {
    document.getElementById("reason_text").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
  }
  