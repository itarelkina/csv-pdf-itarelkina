// Table

function createTable(doc, rows, fontName, fontSize) {
    doc.font(fontName || 'Helvetica', fontSize || 10);
  
    const pageWidth = Math.round(doc.page.width - doc.page.margins.left - doc.page.margins.right);
    const textSpacer = 10;
  
    let { y } = doc;
    const { x } = doc;
  
    rows.forEach(row => {
      // table border
      const arr = row.map(column => doc.heightOfString(column.text, { width: column.width * pageWidth }));
  
      const cellHeight = Math.max(...arr) + textSpacer * 1;
      doc.lineWidth(0.3);
      doc.strokeColor('lightgrey');
  
      doc
        .lineJoin('miter')
        .rect(x, y, pageWidth, cellHeight)
        .stroke();
  
      let writerPos = x;
      for (let i = 0; i < row.length - 1; i++) {
        writerPos += row[i].width * pageWidth;
  
        doc
          .lineCap('butt')
          .moveTo(writerPos + textSpacer, y)
          .lineTo(writerPos + textSpacer, y + cellHeight)
          .stroke();
      }
  
      // table design
      let textWriterPos = x;
      for (let i = 0; i < row.length; i++) {
        doc.text(row[i].text, textWriterPos + textSpacer, y + textSpacer, {
          continued: false,
          width: row[i].width * pageWidth - (textSpacer + 5),
        });
        textWriterPos += row[i].width * pageWidth + (textSpacer - 5);
      }
  
      y += cellHeight;
    });
  
    doc.moveDown(2);
    doc.text('', doc.page.margins.left);
  };
  
  const testData = (fileNumber, First_Name, Bonus) =>
  [
    [
      {
        text: 'Your ID',
        width: 0.3,
      },
      {
        text: 'Your Name',
        width: 0.3,
      },
      {
        text: 'Bonus',
        width: 0.3,
      },
    ],
    [
      {
        text: `${fileNumber}`,
        width: 0.3,
      },
      {
        text: `${First_Name}`,
        width: 0.3,
      },
      {
        text: `${Bonus}`,
        width: 0.3,
    },
    ],
  ];
  
  createTable(doc, testData);

module.exports = doc





//It depends on when the self executing anonymous function is running. It is possible that it is running before window.document is defined.

//In that case, try adding a listener

//window.addEventListener('load', yourFunction, false);
// ..... or 
//window.addEventListener('DOMContentLoaded', yourFunction, false);

//yourFunction () {
  // some oode

//}