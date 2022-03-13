module.exports = (Discord, Client, message) => {
  console.log("Systems online");
  Client.user.setActivity("Menu SMP | m.help", {
    type: "PLAYING"//msmp.
  });
}