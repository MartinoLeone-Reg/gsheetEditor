# GWT-Generator 
## Purpose
This is a Google Script designed to scan google sheets where a stored some GWT instructions and from this file, the script will generate a file with a test for every case scenario which we have written this test, the user will be also able to choose the language which he wants to use and the script will immediately generate it.
Then we want to make things harder and we want to update the gsheet file when we execute the tests updating the project when we run the tests and write the results and for doing this we are going to need to use the Google Api and we are going to implement the connection with the differents langueges implemented
![alt text](https://i.ibb.co/Z8Qn3v4/Cattura.png)

### Technology
We just have to use the gSouite, Google API and a NodeJs server for the implementation of the update with Javascript tests
# 🛠️ Installation Steps
### Languages Implmented
1. Python
2. Javascript
#Installation
clone the directory  with
```bash
git clone https://github.com/MartinoLeone-Reg/gsheetEditor.git
```

## GSheets Exstension
1.Create a gSheet project

2.write our scenario  in every line ì

![alt text](https://i.ibb.co/vkQP6pd/Cattura.png)

3. Once we had created our scenario let's import che code:

![alt text](https://i.ibb.co/1RWcZ84/Cattura.png)

4. Upload the file:"Codice.gs"

5. Reload the project and we are going to see the new file 

![alt text](https://i.ibb.co/6sqscZY/Cattura.png)


## Update Implementation

First of all we are going to need to do some things which are the same regardless the languages:
1. Open the same project which we have created previously and click on the "share" button
![alt text](https://i.ibb.co/37v8CfQ/Cattura.png)
2. Add a new Editor with the mail:root-233@sheets-editor-328713.iam.gserviceaccount.com
![alt text](https://i.ibb.co/NYsLY6N/Cattura.png)

## Server Implementation
let's take  look at the Server folder and open 2 cmd console, from the server directory let's run the following  line:
```nodeJS
npm start
```
and we should see this on screen:

![alt text](https://i.ibb.co/RT3ZgXv/Cattura.png)

At this moment we just need to generate the file from the sheet and run it 🌟
 
