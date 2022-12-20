window.addEventListener("DOMContentLoaded", (e) => {
  const collapseBtn = document.getElementById("collapseBtn");
  function collapse() {
    const aboutContactBox = document.getElementById("aboutContact");
    if (aboutContactBox.style.display === "none") {
      aboutContactBox.style.display = "block";
    } else {
      aboutContactBox.style.display = "none";
    }
  }

  collapseBtn.addEventListener("click", collapse);
});
