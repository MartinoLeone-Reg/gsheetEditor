const express = require("express")

const {google} = require("googleapis")
const app=express()

app.get('/',function(req,res){
   
});
app.get('/python/:text',function(req,res){
    var msg=req.params.text;
    console.log("python: " + msg);
});
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
    res.send("successo")
})

app.listen(1337,(req,res)=>console.log("running on 1337"))

