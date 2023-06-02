const uploadImage = (images) => {
  const formData = new FormData();
  formData.append("image", images[0]);

  const url = `https://api.imgbb.com/1/upload?expiration=600&key=${
    import.meta.env.VITE_IMAGE_KEY
  }`;

  return fetch(url, {
    method: "POST",
    body: formData,
  });
};

export default uploadImage;
