import Video from "../models/Video"

export const home = async (req, res) => {
  const videos = await Video.find({});
  res.render("home", {pageTitle: "Home", videos});
}

export const watch = async (req, res) => {
  const {id} = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", {pageTitle: "Video not Found "});
  }
  return res.render("watch", {pageTitle: video.title, video});
}

export const getEdit = async (req, res) => {
  const {id} = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", {pageTitle: "Video not Found "});
  }
  return res.render("edit", {pageTitle: `Editing`, video});
}

export const postEdit = async (req, res) => {
  const {id} = req.params;
  const {title, description, hashtags} = req.body;
  const video = await Video.exists({_id: id});
  if (!video) {
    return res.render("404", {pageTitle: "Video not Found "});
  }
  try {
    await Video.findByIdAndUpdate(id, {
      title: title,
      description: description,
      hashtags: hashtags.split(",").map(word => word.startsWith('#') ? word : `#${word}`),
    })
    return res.redirect(`/videos/${id}`);
  } catch (error) {
    return res.render("edit", {
      pageTitle: `Editing`,
      errorMessage: error._message,
    });
  }

}

export const getUpload = (req, res) => {
  return res.render("upload", {pageTitle: `Upload your Video`});
}

export const postUpload = async (req, res) => {
  const {title, description, hashtags} = req.body;
  try {
    await Video.create({
      title: title,
      description: description,
      hashtags: hashtags.split(",").map(word => word.startsWith('#') ? word : `#${word}`),
    });
    return res.redirect("/")
  } catch (error) {
    return res.render("upload", {
      pageTitle: `Upload your Video`,
      errorMessage: error._message,
    });
  }
}
