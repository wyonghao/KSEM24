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
  
    // Repeat for other sections like sidebar
  }
  
  // Call the function when the document is loaded
  document.addEventListener('DOMContentLoaded', loadCommonSections);
  