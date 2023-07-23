
const
  rpcGenerator = require("discordrpcgenerator"),

  // Add your client id in the index.js file
  IMAGE_NAME = "aq",
  LARGE_TEXT = "Discord",
  SMALL_TEXT = "Ссылка в описании профиля",
  LINK = "https://www.twitch.tv/stitchkaa";
 
module.exports = (client, CLIENT_ID) => rpcGenerator.getRpcImage(CLIENT_ID, IMAGE_NAME)
  .then(image => client.user.setPresence(
    new rpcGenerator.Rpc()
      .setName("twitch")
      .setUrl(LINK)
      .setType("STREAMING")
      .setApplicationId(CLIENT_ID)
      .setAssetsLargeImage(image.id)
      .setAssetsLargeText(SMALL_TEXT)
      .setDetails(LARGE_TEXT)
      .toDiscord()
  ));
