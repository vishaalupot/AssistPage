import { GoogleSpreadsheet } from "google-spreadsheet"

const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const appeadRowToSpreadsheet = async (row) => {
    console.log(SPREADSHEET_ID)
    console.log(SHEET_ID)
   try{
    await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY
    });
    // loads document properties and worksheets
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    await sheet.addRow({Name: row.name, Email: row.email});
   }catch(e){
       console.error('ERROR:', e)
   }
}

export default appeadRowToSpreadsheet