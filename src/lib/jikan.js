const baseUrl = `https://api.jikan.moe/v4`;

export const getTop = async () => {
  try {
    const res = await fetch(`${baseUrl}/movie/latest`);
    return await res.json();
  } catch (err) {
    throw err;
  }
};
