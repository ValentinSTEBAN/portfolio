const CVBtn = document.getElementById('CVPdf');

CVBtn.addEventListener('click', function() {
    const pdfUrl = 'CV_VSTEBAN_2026.pdf';
    const fileName = 'CV_VSTEBAN_2026.pdf';
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

const LinkedinBTN = document.getElementById('linkedin');

LinkedinBTN.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/valentin-steban/');
});
