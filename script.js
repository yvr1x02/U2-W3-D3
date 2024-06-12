const fetchBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((responseObj) => {
      console.log("response obj", responseObj);

      if (responseObj.ok) {
        return responseObj.json();
      } else {
        throw new Error("Errore reperimento dati");
      }
    })
    .then((bookObj) => {
      console.log("bookObj", bookObj);

      const row = document.getElementById("book-container");

      bookObj.forEach((book) => {
        const col = document.createElement("div");
        const card = document.createElement("div");
        const img = document.createElement("img");
        const cardBody = document.createElement("div");
        const title = document.createElement("h3");
        const price = document.createElement("h4");
        const category = document.createElement("h5");
        const btn = document.createElement("a");

        col.classList.add("col-3");
        card.classList.add("card");
        img.classList.add("card-img-top");
        cardBody.classList.add("card-body");
        title.classList.add("card-title");
        category.classList.add("card-category");
        price.classList.add("card-price");
        btn.classList.add("btn", "btn-primary");

        img.setAttribute("src", book.img);
        title.textContent = book.title;
        category.textContent = book.category;
        price.textContent = `$${book.price}`;
        btn.textContent = "Remove";
        btn.setAttribute("href", "#");

        btn.addEventListener("click", () => {
          col.remove();
        });

        cardBody.appendChild(title);
        cardBody.appendChild(category);
        cardBody.appendChild(price);
        cardBody.appendChild(btn);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
      });
    })
    .catch((err) => console.log(err));
};

fetchBooks();
