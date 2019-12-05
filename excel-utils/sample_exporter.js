import { Exporter } from '@chidoan/excel-utils';

const filename = 'CHIDOAN';
const headers = {
    username: {
      text: 'USERNAME',
      type: 'String',
      width: 200
    },
    birth_year: {
      text: 'BIRTH_YEAR',
      type: 'Number'
    },
    joining_date: {
      text: 'JOINING DATE',
      type: 'String',
      width: 150
    }
};


var exporter = new Exporter(filename);
exporter.setConfigurations(
	{
	    REPLACE_UNKNOWN_TO_EMPTY: true,
	    DECORATE_BORDER: true,
	    DECORATE_HEADER_COLOR: '#50ffff'
	}
);
exporter.addSheet(headers,
    [
      {
        username: 'chidoan',
        birth_year: 1992,
        joining_date: '12/12/2018'
      },
      {
        username: 'toan.nguyen',
        birth_year: 1991,
        joining_date: '12/12/2018'
      },
      {
        username: 'phuc_dao',
        birth_year: 1992,
        joining_date: '12/12/2018'
      }
    ],
    'sheet_1'
);
var result = exporter.exportExcel();
if (result.success) {
	console.log(`Exporte file is successful`);
} else {
	console.error(result.message);
}
