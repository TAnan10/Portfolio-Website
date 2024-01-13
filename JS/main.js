// Navigation bar
const menu = document.querySelector(".fa-bars");

menu.addEventListener("click", () => {
  const navbar = document.querySelector(".sections");
  navbar.classList.toggle("active");
})

// Skills
let circularProgressList = document.querySelectorAll(".circular-progress");

circularProgressList.forEach((circularProgress) => {
  let progressValue = circularProgress.querySelector(".progress-value");
  let progressStartValue = 0;
  let progressEndValueHtml = 100;
  let progressEndValueCss = 90;
  let progressEndValueJavascript = 80;
  let progressEndValueWeb = 70;
  let progressEndValueFigma = 60;
  let progressEndValueSeo = 60;
  let speed = 30;

  let progress = setInterval(() => {
    progressStartValue++;

    if (circularProgress.classList.contains("html")) {
      progressValue.textContent = progressStartValue + "%";
      progressValue.style.color = "#f36c0c";
      circularProgress.style.background = `conic-gradient(#f36c0c ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (progressStartValue === progressEndValueHtml) {
        clearInterval(progress);
      }
    } else if (circularProgress.classList.contains("css")) {
      progressValue.textContent = progressStartValue + "%";
      progressValue.style.color = "#153cea";
      circularProgress.style.background = `conic-gradient(#153cea ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (progressStartValue === progressEndValueCss) {
        clearInterval(progress);
      }
    } else if (circularProgress.classList.contains("javascript")) {
      progressValue.textContent = progressStartValue + "%";
      progressValue.style.color = "#f2ed0d";
      circularProgress.style.background = `conic-gradient(#f2ed0d ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (progressStartValue === progressEndValueJavascript) {
        clearInterval(progress);
      }
    } else if (circularProgress.classList.contains("web")) {
      progressValue.textContent = progressStartValue + "%";
      progressValue.style.color = "#f63f09";
      circularProgress.style.background = `conic-gradient(#f63f09 ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (progressStartValue === progressEndValueWeb) {
        clearInterval(progress);
      }
    } else if (circularProgress.classList.contains("figma")) {
      progressValue.textContent = progressStartValue + "%";
      progressValue.style.color = "#080003";
      circularProgress.style.background = `conic-gradient(#080003 ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (progressStartValue === progressEndValueFigma) {
        clearInterval(progress);
      }
    } else if (circularProgress.classList.contains("seo")) {
      progressValue.textContent = progressStartValue + "%";
      progressValue.style.color = "#0d9d0a";
      circularProgress.style.background = `conic-gradient(#0d9d0a ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (progressStartValue === progressEndValueSeo) {
        clearInterval(progress);
      }
    }
  }, speed);
});
