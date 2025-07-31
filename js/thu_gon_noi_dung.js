function toggleDivs() {
    const divs = document.getElementsByClassName("hiddenDiv");
    for (let i = 0; i < divs.length; i++) {
      const div = divs[i];
      if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "flex";
      } else {
        div.style.display = "none";
      }
    }
  }