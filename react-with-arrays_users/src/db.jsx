export const USERS = [
  {
    id: 0,
    name: "Herman Webb",
    roles: ["guest", "owner"],
    about:
      "Laborum incididunt eu quis consectetur ut proident sint proident. Proident exercitation elit reprehenderit proident occaecat Lorem.",
  },
  {
    id: 1,
    name: "Kaye Kline",
    roles: ["member"],
    about:
      "Aliquip Lorem ipsum pariatur reprehenderit nisi nulla eiusmod sint. Enim nulla reprehenderit velit consectetur velit ad laborum tempor ex irure laboris pariatur sit.",
  },
  {
    id: 2,
    name: "Best Benton",
    roles: ["admin", "owner"],
    about:
      "Magna minim laborum enim dolor ea officia adipisicing do exercitation. Qui amet esse nisi qui nisi cupidatat elit occaecat eu et.",
  },
  {
    id: 3,
    name: "Roman Black",
    roles: ["guest", "admin"],
    about:
      "Ipsum aute mollit id commodo ad cupidatat culpa incididunt. Tempor aliqua id ex sit Lorem est quis in.",
  },
  {
    id: 4,
    name: "Paige Ferrell",
    roles: ["guest", "owner", "member"],
    about:
      "Velit aliquip proident in elit nulla esse id non occaecat proident do sunt. Incididunt eu consequat ipsum qui deserunt.",
  },
  {
    id: 5,
    name: "Johns Newton",
    roles: ["guest"],
    about:
      "Eu pariatur ex eiusmod mollit et irure ullamco id anim ipsum cillum do amet sint. Lorem ut culpa mollit duis dolore exercitation ipsum excepteur anim.",
  },
  {
    id: 6,
    name: "Jarvis Mathis",
    roles: ["owner"],
    about:
      "Sint sit est cillum officia sunt labore in exercitation aliquip. Consectetur minim occaecat reprehenderit aliqua laboris exercitation deserunt laboris in officia veniam nulla aliqua.",
  },
  {
    id: 7,
    name: "Heidi Mcmillan",
    roles: ["admin"],
    about:
      "Nostrud nostrud duis ipsum enim amet culpa reprehenderit ullamco. Labore aute dolor incididunt nostrud mollit nulla mollit id officia et.",
  },
  {
    id: 8,
    name: "Kristen Wood",
    roles: ["member", "admin"],
    about:
      "Laboris anim consequat magna non aute ad excepteur qui. Excepteur enim Lorem quis ex voluptate est et esse id ex qui consequat aute.",
  },
];

// # React Arrays: Users

// The `./src/App.js` file should dynamically display a card for each of the nine `USERS` imported from the `db.js` file.

// For now, however, there is only one card. Let's fix this with our newly acquired knowledge about arrays in React.

// After that, you can implement two more features to make the user overview even more shiny!

// ## Task

// 1. Use `Array.map` to create a card for each user in the `USERS` array. Make sure to add a unique key to each card.

// 2) Switch to the card component and use `Array.map` to create a `Tag` for each role in the roles array of a user. Make sure to add a unique key to each tag - in this instance, feel free to use the role itself as a key.

// 3. At last, refactor the `Tag` component: it should receive an additional class called 'tag--highlight' if the `tag` prop equals the string 'admin' (compare the `Tag.css` file).
