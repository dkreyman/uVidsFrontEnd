const API_BASE_URL = process.env.REACT_APP_BASE_URL;
const API_APP_KEY = process.env.REACT_APP_KEY;

const headers = new Headers();
headers.append("Content-Type", "application/json");

export async function fetchVideos(signal) {
  const url = `${API_BASE_URL}/videos?page=2&per_page=8&app_key=${API_APP_KEY}`;
  const options = {
    method: "GET",
    headers: { Accept: "application/json" },
    signal,
  };
  const response = await fetch(url, options);
  const videosFromAPI = await response.json();
  return videosFromAPI;
}
