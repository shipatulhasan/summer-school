export const getImageUrl = async (image) => {
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_APP_imgbb
  }`;

  const formData = new FormData();
  formData.append("image", image);

  const res = await fetch(url, {
    method: "post",
    body: formData,
  });
  const data = await res.json();
  return data?.data.url;
};
