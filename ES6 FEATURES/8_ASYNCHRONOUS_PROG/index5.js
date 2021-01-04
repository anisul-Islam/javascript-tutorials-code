const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      let lists = "";
      data.map((data, index) => {
        lists += `<li>${data.title}</li>`;
      });
      document.querySelector(".container ol").innerHTML = lists;
    });
};

loadData();
