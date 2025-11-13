const copyBtn = document.querySelector(".copyBtn");
const Snippet = document.querySelector(".Snippet");

copyBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(Snippet.textContent)
    .then(() => {
      copyBtn.textContent = "Copied!";
      copyBtn.style.backgroundColor = "#32cd32";
      setTimeout(() => {
        copyBtn.textContent = "Copy Code";
        copyBtn.style.backgroundColor = "orange";
      }, 2000);
    })
    .catch(() => {
      copyBtn.textContent = "Failed to copy";
      setTimeout(() => {
        copyBtn.textContent = "Copy Code";
      }, 2000);
    });
});

