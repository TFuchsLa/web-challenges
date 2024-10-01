console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

function createSocialMediaPost() {
  const article = document.createElement("article");
  article.classList.add("post");

  const paragraph = document.createElement("p");
  paragraph.classList.add("post__content");
  paragraph.textContent = "lorem ipsum dolor, .....";

  const footer = document.createElement("footer");
  footer.classList.add("post__footer");

  const username = document.createElement("span");
  username.classList.add("post__username");
  username.textContent = "@username";

  const likeButton = document.createElement("button");
  likeButton.type = "button";
  likeButton.classList.add("post__button");
  likeButton.setAttribute("data-js", "like-button");
  likeButton.textContent = "♥ Like";

  footer.append(username);
  footer.append(likeButton);

  article.append(paragraph);
  article.append(footer);

  document.body.append(article);

  likeButton.addEventListener("click", handleLikeButtonClick);
}
document.addEventListener("DOMContentLoaded", createSocialMediaPost);
