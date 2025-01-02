const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347045728507";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_28_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDg5LFxuICAgICAgICA2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NixcbiAgICAgICAgMTQsXG4gICAgICAgIDg2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICA5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDY5LFxuICAgICAgICA2LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMjA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDk5LFxuICAgICAgICA0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMixcbiAgICAgICAgNjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM5LFxuICAgICAgICA0LFxuICAgICAgICAzNixcbiAgICAgICAgODksXG4gICAgICAgIDM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkdk14RnJnK3Y5aWZod0d6ZVNUWmFvU2pIak5mb3BjZmI5SENZQ3plUU5VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNDU3Mjg1MDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY3M0RFRTE2MzhBODEzREMxMzFDODE2RkE4RjZGMzVBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTgwMjkxOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTc3k5LTY3dlRVMmYyNDZMbUhfcHV3XCIsXG4gIFwicGhvbmVJZFwiOiBcImYyZWVjMjk1LTE2NzgtNGJjYi1hNjFmLTBjN2I5MGJlNzM1Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDIwNCxcbiAgICAgIDExOSxcbiAgICAgIDI1MSxcbiAgICAgIDE4OSxcbiAgICAgIDQ0LFxuICAgICAgMjAzLFxuICAgICAgMjAwLFxuICAgICAgMTQ0LFxuICAgICAgMTc4LFxuICAgICAgMjA2LFxuICAgICAgMjQyLFxuICAgICAgMjEsXG4gICAgICAxNjAsXG4gICAgICAxNDksXG4gICAgICAzNixcbiAgICAgIDIyMSxcbiAgICAgIDIzNSxcbiAgICAgIDIyMyxcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDIsXG4gICAgICA1OCxcbiAgICAgIDc2LFxuICAgICAgMTE1LFxuICAgICAgMTM0LFxuICAgICAgMCxcbiAgICAgIDE0MSxcbiAgICAgIDIwNSxcbiAgICAgIDY0LFxuICAgICAgMjI0LFxuICAgICAgMTcwLFxuICAgICAgMTcyLFxuICAgICAgMjQxLFxuICAgICAgMTIxLFxuICAgICAgNzIsXG4gICAgICA5NSxcbiAgICAgIDEwOCxcbiAgICAgIDIwMSxcbiAgICAgIDMzLFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1A4NzRUNlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDU3Mjg1MDc6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIYWxhbCBEb2xsYXJzXCIsXG4gICAgXCJsaWRcIjogXCIxMTA2OTA0MDA1MDU5OTY6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0xzb0lZQ0VKMkEyYnNHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSVVFSZVpxSmVCdE5SZ2dXUmNMcjJjdDdXcTRmWHpyZkVHYTdRV3NqSWdjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1BeUY4aXNBNkU2K1FSekgveWdvVUZVT1FzNnFxVnh6N09UbE9QaXd1alVDZ0UwczBkMkJLMUVYbnVhTHlNK24ySm1oUU1YTGs4VkJCOUpETThKQkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZGRHRqL0ZvdU5nLzRmT043Ky9ZMHllcHd5WmlKdFVtZE5uUFhjRzhsdC9EbGpyWnRKUFp2a3ZFWnVheFc2WmR3RjdnVjlwNlYxc01nQjlwbi8wbUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDU3Mjg1MDc6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1ODAyOTEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHR5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQdHkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxY0taYUxIU3VqaENjSzFrNDhJK3M1SHJORlFlenJBc2VPb1JXL1A5dmVZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU0OTk5MjAzNCxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsNV19LFwidGltZXN0YW1wXCI6XCIxNzM1ODAyODU4MjU5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
