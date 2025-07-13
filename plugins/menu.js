
const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const imageUrl = 'https://res.cloudinary.com/df2rnoijw/image/upload/v1752404824/shkqo3nbxkhhbyej2lxm.jpg';

cmd({
    pattern: "menu",
    react: "⚡",
    alias: ["panel", "commands"],
    desc: "බොට් විධාන ලැයිස්තුව ලබා ගන්න",
    category: "main",
    use: '.menu',
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        const selectionMessage = `
*_HASHAN-MD COMMAND LIST ⚡_*

> *NAME BOT : HASHAN-MD*
> *VERSION : 1.0*
> *PREFIX : [.]*
> *OWNER : HASHIYA TECH*
> *RAM : UNLIMITED*


┌────────────────···▸*
*│╭─────────────···▸*
*┴│▸* 
*◈│▸* *1. DOWNLOAD MENU*
*◈│▸* *2. SEARCH MENU* 
*◈│▸* *3. AI MENU*
*◈│▸* *4. OWNER MENU*
*◈│▸* *5. GROUP MENU*
*◈│▸* *6. INFO MENU*
*◈│▸* *7. CONVERTER MENU*
*◈│▸* *8. RANDOM MENU*
*◈│▸* *9. WALLPAPERS MENU*
*◈│▸* *10. OTHER MENU*
*┬│▸*
*│╰────────────···▸▸*
*└────────────────···▸*

> ©POWERD BY HASHAN-MD
`;

        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: selectionMessage,
            contextInfo: { forwardingScore: 999, isForwarded: true },
        }, { quoted: mek });

        // පරිශීලක ප්‍රතිචාර ලබා ගැනීම
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userResponse = msg.message.extendedTextMessage.text.trim();
            if (msg.message.extendedTextMessage.contextInfo &&
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {

                let responseText;

                switch (userResponse) {
                    case '1': // DOWNLOAD MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *📥 DOWNLOADER-MENU 📥* *❒⁠⁠⁠⁠* 
*┋* *.FB*
*┋* *.SONG*
*┋* *.comming soon*
*┋* *.comming soon*
*┋* *.comming soon*
*┋* *.comming soon*
*┋* *.comming soon*
*┋* *.comming soon*
*╰───────────────────❒*

> ©POWERED BY HASHAN-MD
`;
                        break;
                    case '2': // SEARCH MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-MENU 🔍* *❒⁠⁠⁠⁠* 
*┋* *.ANIME*
*┋* *.ANIME2*
*┋* *.IMG*
*┋* *.comming soon*
*┋* *.comming soon*
*┋* *.comming soon*
*╰───────────────────❒*

> ©POWERED BY HASHAN-MD
`;
                        break;
                    case '3': // AI MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🧠 AI-MENU 🧠* *❒⁠⁠⁠⁠* 
*┋* *.AI*
*┋* *.comming soon*
*┋* *.comming soon*
*╰───────────────────❒*

> ©POWERED BY HASHAN-MD
`;
                        break;
                    case '4': // OWNER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👨‍💻 OWNER-MENU 👨‍💻* *❒⁠⁠⁠⁠* 
*┋* *.SETTINGS*
*┋* *.OWNER*
*┋* *.SYSTEM*
*┋* *.UNBLOCK*
*┋* *.SETPP*
*┋* *.RESTART*
*╰───────────────────❒*

> ©POWERED BY HASHAN-MD
`;
                        break;
                    case '5': // GROUP MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👥 GROUP-MENU 👥* *❒⁠⁠⁠⁠* 
*┋* *.REMOVE*
*┋* *.DELETE*
*┋* *.ADD*
*┋* *.KICK*
*┋* *.MUTE*
*╰───────────────────❒*

> ©POWERED BY HASHAN-MD
`;
                        break;
                    case '6': // INFO MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *📃 INFO-MENU 📃* *❒⁠⁠⁠⁠* 
*┋* *.MENU*
*┋* *.ALIVE*
*┋* *.SYSTEM*
*┋* *.PING*
*┋* *.ANIME*
*╰───────────────────❒*

> ©POWERED BY HASHAN-MD
`;
                        break;
                    case '7': // CONVERTER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🎡 CONVERTER-MENU 🎡* *❒⁠⁠⁠⁠* 
*┋* *.comming soon*
*┋* *.comming soon*
*┋* *.comming soon*
*╰───────────────────❒*

> ©POWERED BY HASHAN-MD
`;
                        break;
                    case '8': // WALLPAPERS MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *⛱️ RANDOM-MENU ⛱️* *❒⁠⁠⁠⁠* 
*┋* *.ᴀɴɪᴍᴇ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ1*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ2*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ3*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ4*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ5*
*╰───────────────────❒*

> ©POWERED BY HASHAN-MD
`;
                        break;
                    case '9': // WALLPAPER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🏜️ WALLPAPERS-MENU 🏜️* *❒⁠⁠⁠⁠* 
*┋* *.ɪᴍɢ*
*╰───────────────────❒*

> ©POWERED BY HASHAN-MD
`;
                        break;
                    case '10': // OTHER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🌐 OTHER-MENU 🌐* *❒⁠⁠⁠⁠* 
*┋* *.HACK*
*╰───────────────────❒*

> ©POWERED BY HASHAN-MD
`;

     // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://res.cloudinary.com/df2rnoijw/image/upload/v1752404824/shkqo3nbxkhhbyej2lxm.jpg` },  // Ensure this URL is always accessible
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender], // Ensure m.sender is always a valid JID
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363369981563818@newsletter', // This JID needs to be valid and accessible
                    newsletterName: 'HASHAN-MD-V1',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
