function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function downloadPDF() {
    // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
    var pdfURL = 'JAYESH.pdf';
    
    // Use an invisible <a> element to trigger the download
    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'JAYESH.pdf'; // Specify the filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}