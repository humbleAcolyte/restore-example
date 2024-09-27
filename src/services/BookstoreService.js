export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "The Wild Robot (Volume 1)",
      author: "Peter Brown",
      price: 3.65,
      coverImage:
        "https://m.media-amazon.com/images/I/91VsjBbwzkL._SL1500_.jpg",
    },
    {
      id: 2,
      title: "The God of the Woods: A Novel",
      author: "Liz Moore",
      price: 14.99,
      coverImage:
        "https://m.media-amazon.com/images/I/81-vBq87wrL._SL1500_.jpg",
    },
    {
      id: 3,
      title: "Melania",
      author: "Melania Trump",
      price: 28,
      coverImage:
        "https://m.media-amazon.com/images/I/419zn8-6gaL._SL1500_.jpg",
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
