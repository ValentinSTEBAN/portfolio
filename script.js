const CVBtn = document.getElementById('CVPdf');

CVBtn.addEventListener('click', function() {
    const pdfUrl = 'cv_test.pdf';
    const fileName = 'cv_test.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


const GitHubBTN = document.getElementById('GitHub');

GitHubBTN.addEventListener('click', function() {
    window.open('https://github.com/ValentinSTEBAN');
});

const LinkedinBTN = document.getElementById('Linkedin');

LinkedinBTN.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/valentin-steban-42891540a/');
});
