const content = (First_Name, Last_Name, Bonus, Percent, Rate, Template, PdfTable ) =>
	` 
	Dear ${First_Name} ${Last_Name},
	
	Template 2: ${Template}
	
	Thank you for your contribution to our business in last year.
	${Bonus}$ is the bonus amount you are eligibel for as of 2019 results.
	Be happy, it is all yours.
 ${PdfTable}
	Corporate Table 1	${Percent}
	Personal Table 2	${Rate}
	
	Your rate is ${Bonus}%
	
	${Date}
	
	CEO

	Purolator Inc.
	`
	
module.exports = content
