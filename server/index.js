const express = require("express")

const {google} = require("googleapis")
const app=express()

app.get("/test",async (req,res)=>{
    //let scenario=req.params.scenario;
    //let result=req.params.result;
    const spreadsheetId="10bZv1rpNSSW9_JhpxK5i3IqhdxwnEQbGfD9Lec4AU5Y"
    const sheetName="Foglio1"

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
      });
    //auth

    const client = await auth.getClient();
    // insance of google sheets api

    const googleSheets= google.sheets({version:"v4",auth: client})

    //get metadata 
    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
      });
    // read rows
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: sheetName,
    })
    /*
    await googleSheets.spreadsheets.values.set(
        auth,
        spreadsheetId,
        range: sheetName+"!A:B",
        vali   
    )*/
    //const obj = JSON.parse(test);

    //fot(let i=0;getRows.\)
    res.send(getRows.data)
})

app.get("/update/:scenario/:result",async (req,res)=>{
    let funcName=req.params.scenario;
    let result=req.params.result;
    //const funcName="GG12"
    const spreadsheetId="10bZv1rpNSSW9_JhpxK5i3IqhdxwnEQbGfD9Lec4AU5Y"
    const gName="Foglio1"
    const rn="!A:B"
    const sheetName=gName+rn
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
      });

    //auth

    const client = await auth.getClient();

    const googleSheets= google.sheets({version:"v4",auth: client})
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: sheetName,
    })
    let rows=getRows.data.values
    for(let i=1; i<rows.length; i++) {
        console.log(rows[i][0],rows[i][1])
        if(funcName==rows[i][0]){
            console.log("same")
            id=i+1
            await googleSheets.spreadsheets.values.update({
                auth,
                spreadsheetId,
                range: gName+"!B"+id,
                valueInputOption: "USER_ENTERED",  // TODO: Update placeholder value.
                resource: { range: gName+"!B"+id, majorDimension: "ROWS", values: [[result]] },

            })
        }
    }
})

app.listen(1337,(req,res)=>console.log("running on 1337"))

