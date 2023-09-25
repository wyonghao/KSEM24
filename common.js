//YW, load common sections for all pages
function loadCommonSections() {
    fetch('header.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('#header').innerHTML = html;
      });
  
    fetch('footer.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('#footer').innerHTML = html;
      });

    fetch('rightside.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('#rightside').innerHTML = html;
      });
    // Repeat for other sections like sidebar
  }
  
  // Call the function when the document is loaded
function loadLogosSection() {
    fetch('logo.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('#logos').innerHTML = html;
      });
}

// Call the functions when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadCommonSections();
    loadLogosSection();
});
