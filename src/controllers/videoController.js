export const trending = (req, res) => {
  res.render('watch' ,{message : 'Watch! Video!'});
}
export const see = (req, res) => {
  return res.send(`Watch the Video #${req.params.id}`);
}
export const edit = (req, res) => {
  console.log(req.params)
  return res.send(`Edit the Video #${req.params.id}`);
}
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send(`Delete the Video #${req.params.id}`);
}
