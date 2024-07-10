export default class BookstoreService {
  data = [
    {
      id: 1,
      name: "Some Book",
      author: "Some Author",
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error("Something bad!"));
        } else {
          resolve(this.data);
        }
      }, 3500);
    });
  }
}
