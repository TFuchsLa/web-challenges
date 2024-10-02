import "./Tag.css";

export default function Tag({ tag }) {
  const className = tag === "admin" ? "tag tag--highlight" : "tag";
  return <li className={className}>{tag}</li>;
}

// 3. At last, refactor the `Tag` component: it should receive an additional
// class called 'tag--highlight' if the `tag` prop equals the string
// 'admin' (compare the `Tag.css` file).
