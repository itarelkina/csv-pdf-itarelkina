const fs = require("fs")
const csv = require("fast-csv")
const tempBody1 = require('./template/body1');
const tempTitle1 = require("./template/title1");
const tempImage1 = require('./template/image');
const tempTable1 = require('./template/table1');


const tempBody2 = require("./template/body2");
const tempTitle2 = require("./template/title2");
const tempImage2 = require('./template/image');
const tempTable2 = require('./template/table2');

const pdfMaker = require("./pdfMaker")
const config = require("./config")

const path = config.path

fs.createReadStream(path.csv)
	.pipe(csv())
	.on("data", (data) => {
		// Read csv
		
			const fileNumber = data [0],
			FirstName = data [1],
			LastName = data [2],
			Bonus = data [3],
			Percent = data [4],
			Rate = data [5],
			Date = data [6],
			Template = data [7]
		
		// body content
		if (Template == 'body1')
		{
		var body = tempBody1 (FirstName,LastName,Bonus,Percent,Rate,Date,Template),
		title = tempTitle1
		image = tempImage1
		table1 = tempTable1

		}
		if (Template == 'body2')
		{
		var body = tempBody2 (FirstName,LastName,Bonus,Percent,Rate,Date,Template),
		title = tempTitle2
		image = tempImage2
		table2 = tempTable2
		}


		// Create pdf file
		pdfMaker(title, body, fileNumber)
		console.log(`create file ${fileNumber}.pdf`)
	})
	
	// Close reading csv
	.on("end", () => {
		console.log("Read Finsihed")
	})

