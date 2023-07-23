
const
  rpcGenerator = require("discordrpcgenerator"),

  // Add your client id in the index.js file
  IMAGE = "vk",
  SONG = "ᴍᴏʟᴏᴅᴏʏ'ᴘʀᴏᴅ",
  ARTIST = "ᴍᴏʟᴏᴅᴏʏ'ᴘʀᴏᴅ";

module.exports = (client, CLIENT_ID) => rpcGenerator.getRpcImage(CLIENT_ID, IMAGE)
  .then(image => client.user.setPresence(
    rpcGenerator.createSpotifyRpc(client)
      .setApplicationId(CLIENT_ID)
      .setAssetsLargeImage(image.id)
      .setDetails(SONG)
      .setState(ARTIST)
      .toDiscord()
  ));
