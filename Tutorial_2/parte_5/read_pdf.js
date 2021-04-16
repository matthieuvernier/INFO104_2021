var fs = require("fs");
var PdfReader = require('pdfreader').PdfReader;

 fs.readFile("./DR-07-de-2021.pdf", (err, pdfBuffer) => {
   // pdfBuffer contains the file content
   new PdfReader().parseBuffer(pdfBuffer, function(err, item){
      if (err)
          console.log(err);
       else if (!item)
           console.log("Terminado!");
        else if (item.text)
           console.log(item.text);
         });
      });
