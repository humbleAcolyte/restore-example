export default class BookstoreService {
  data = [
    {
      id: 1,
      name: "Some Book",
      author: "Some Author",
    },
  ];

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 3500);
    });
  }
}
