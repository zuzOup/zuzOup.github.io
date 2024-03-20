class I {
  constructor(path, name, item) {
    this.path = path;
    this.name = name;
    this.item = item;
  }
}

const list = [
  new I(1, "Codecademy", "Front-End Engineer"),
  new I(2, "Wes Bos", "Beginner Javascript"),
  new I(3, "Wes Bos", "React For Beginners"),
  new I(4, "Wes Bos", "Advanced React & GraphQL"),
  new I(7, "Codecademy", "Learn Node-SQLite"),
  new I(5, "Coursera", "Google UX Design"),
  new I(6, "Coursera", "Meta Front-End Developer"),
  new I(8, "Coursera", "MongoDB"),
  new I(9, "Coursera", "Bootstrap"),
  new I(10, "Coursera", "Tailwind"),
  new I(11, "Coursera", "Jest"),
];

export default list;
