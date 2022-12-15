// import { Html5QrcodeScanner } from "html5-qrcode";
document.getElementById("reader").innerHTML = `
  <div id="reader" width="600px"></div>
`;

function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    // alert('Code matched = ' +decodedText);
    const url = new URL(decodedText)
    console.log(decodedText)
    console.log(decodedResult)
    alert('tu rut es: '+ url.search.split('&')[0]);
}

function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    // console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: { width: 400, height: 400 } },
    /* verbose= */ false
);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
