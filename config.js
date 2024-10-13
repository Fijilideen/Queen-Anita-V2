//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0dLK2E4aUJUS1J6VHQxT3NkK1ptOTBRUWhLRU54WFBPZVFtRzM2ZjNGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkxkQ1lTWUlXeGphMWk1OHJFUlRTMzEvWEVrUmttZ0prRDRWV3hHeTNBdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQzJUMTQxZVEvaDJCK25BeHZjM0RQc09ta1h5OVFPYVhiSGo1MjBHODF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuRzRHVkxvS0FlaEErSVZGOURJWnBTaERYbTRIT29CR1BVa3kzUXlwR3hrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNOXd4dlcxRnVyaVhRZjk5S1B0NVFIRkI2Rm9DM04wM1VvR0RNK2twM2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBRa2h0MWdyUk9SVGtncFc4VUN3NGs3WmN1MndqMkwzc0loL2VxK052RGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVBaN2JZa3c1RWhHNzRWTjNsK0dDOTlxS21WN2FhdHdNcjU3TEZ1MFRVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDJLZXc1RnFkWlRScm1CaGxjYkNnQUw4VCtOSHl1UXdHVmMrTG1kTy94Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkEvbENQTjNRd3NvTVFzVXBBRUpRdmczZmxvMnRUSXRZc1NxUVc2VWFxY1NnS3djc2RoR3dZWGRsdnU2QTNpSzNRbEduT0lwQ1crRHlpRitaMURqdURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMwLCJhZHZTZWNyZXRLZXkiOiJZeGxKeFJ3R3dVNEhSWlFZcmcwMEdNTGRGNjAwTnJCaVR1ZlF0RENDK3ZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDU4MTQ2MjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E1M0QzNzNBRDlDNzEwNkU0REMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODg1MjM4M30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA0NTgxNDYyMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTRENDA3RjlERTA3ODNDMDExOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4ODUyMzg1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmdTJQN1pDQVNieWhBcUI3M0d0YnlBIiwicGhvbmVJZCI6ImVhZjQ2NjNhLWVhMDktNDBiZC1hYmVjLWQxZmEyYjhkN2Q1NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6eGJWRGJhcTZaREE5MGxIQ3loYlU0QThRb1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUxTQXA1ZFI5WVZTZmVNUG1rb2ZIcWFkMTNvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVOWjhSQ0dWIiwibWUiOnsiaWQiOiIyMzQ3MDQ1ODE0NjIyOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoifvCdlInwnZSm8J2Up/CdlKbwn5id8J+YnX4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pIdHZmNEVFSS9qc0xnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBSL1ZocnQrbHRYTmF1VFVMckRRbXlBSzEySTBRYzNSV2JObm14YzA5a0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6InNoRi82a1dDeW14MnVGV3JwRWFnWkpJV1o2Q1d3a0hDM3ZHL2wveDUyVmRLK1AwQ2ljUzNWNHdrUDhQNmg2Y09vS09vbzFTRUFEbFBPYjRSUXVlbmhBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzNVMzZ3RvamM4QnVEVllDbk5hSjhlMSt0aXhQL2lwazltOXNqRTFxREI2UEF4VlRJR2MrUnE1WnFaeitIaGM0WmR0Zm9QQ2gzMDVuMzlVREY0RURCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDU4MTQ2MjI6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUMGYxWWE3ZnBiVnpXcmsxQzZ3MEpzZ0N0ZGlORUhOMFZtelo1c1hOUFpCIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjg4NTIzODAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS1puIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
