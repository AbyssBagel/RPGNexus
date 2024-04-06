// Function to fill PDF 
var pdfBuffer;
function fillPdf() {
  // Fill the PDF document with data

  try {
    var fields = {};
    var field_names = list_fields(pdfBuffer);
    var field_values = [['Aa'], ['123'],['Bb']];

    for (var i = 0; i < field_names.length; i++) {
      fields[field_names[i]] = field_values[i];
    }
  } catch (e) {
    console.error('Error:', e);
  }

  try {
    filledPdfBuffer = pdfform(minipdf).transform(pdfBuffer, fields);
  } catch (e) {
    console.error('Error:', e);
  }

  // Download the filled PDF document
  var blob = new Blob([filledPdfBuffer], { type: 'application/pdf' });
  var link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = 'Filled_PDF_Document.pdf';
  link.click();
}

function list_fields(buf) {
  var field_names = [];
  try {
    var field_specs = pdfform().list_fields(buf);

    for (var field_key in field_specs) {
      field_names.push(field_key);
    }
    console.log('Fields:', field_names);
    return field_names;
  } catch (e) {
    on_error(e);
  }
}

// Attach click event listener to the button
document.addEventListener('DOMContentLoaded', function() {
  var url = './Doc1_Copy.pdf';

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'arraybuffer';

  xhr.onload = function() {
    if (this.status == 200) {
      pdfBuffer = this.response;
    } else {
      on_error('failed to load URL (code: ' + this.status + ')');
    }
  };
  xhr.send();

});

document.getElementById('fillPdfButton').addEventListener('click', fillPdf);
