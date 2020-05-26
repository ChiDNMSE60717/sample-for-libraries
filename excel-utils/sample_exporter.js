import { Exporter } from '@chidoan/excel-utils';

/**
 * VERSION: 3.1.0
 * 
 * NOTE: With DateTime type, you don't require to provide "format" field (default is General Date) or use on of value in below enum
 * Enum: General Date, Long Date, Medium Date, Short Date, Long Time, or other format in Excel for DateTime 
 */


const filename = Date.now();
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
    assets: {
      text: 'ASSETS',
      type: 'Number',
      format: '#,##0'
    },
    joining_date: {
      text: 'JOINING DATE',
      type: 'DateTime',
      width: 150,
      format: '[$-F800]dddd\,\ mmmm\ dd\,\ yyyy'
    }
};
const data = [
  {
    username: 'chidoan',
    birth_year: 1992,
    joining_date: '2018-12-12',
    assets: 203655000
  },
  {
    username: 'toan.nguyen',
    birth_year: 1991,
    joining_date: '2018-05-21',
    assets: 15000000
  },
  {
    username: 'phuc_dao',
    birth_year: 1992,
    joining_date: '2018-03-31',
    assets: 10025654
  }
];

const exportExcel = () => { 
  const exporter = new Exporter(filename);
  exporter.setConfigurations({
    REPLACE_UNKNOWN_TO_EMPTY: true,
    DECORATE_BORDER: true,
    DECORATE_HEADER_COLOR: '#4285F4'
  });

  exporter.addSheet(headers, data, 'sheet_1');

  const result = exporter.exportExcel();
  if (result.success) {
    console.log(`Export file is successful`);
  } else {
    console.error(result.message);
  }
}
