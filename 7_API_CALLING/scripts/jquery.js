// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// add jquery libraray cdn
// ajax - asynchronous javascript and xml

console.clear();

const makeRequest = async (url, method, data) => {
  try {
    const result = await $.ajax({
      url: url,
      method: method,
      data: data,
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE").then(
    (res) => console.log(res)
  );
};
deleteData();
// const createData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
//     id: 1,
//     title: "fooma",
//     body: "barma",
//     userId: 1,
//   }).then((res) => console.log(res));
// };
// createData();

// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", "GET").then(
//     (res) => console.log(res)
//   );
// };
// getData();
