import { Impoter } from '@chidoan/excel-utils';

const headers = {
	username: {
		name: 'USERNAME',
		type: 'String'
	},
	gender: {
		name: 'GENDER',
		type: 'Boolean'
	},
	birth_year: {
		name: 'BIRTH_YEAR',
		type: 'Number'
	},
	joining_date: {
		name: 'JOINING DATE',
		type: 'Date'
	}
};

var file = document.getElementById('file').files[0];
var json_data = await Importer.readXLSX(file, ['sheet1', 'sheet2']);
if (json_data.success) {
	var result = Importer.correctJsonPropertyName(
		json_data.data.sheet1,
		headers
	);
	if (result.success) {
		console.log(result.data);
	}
} else {
	console.log(json_data.message);
}