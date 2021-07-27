const API_BASE_URL = process.env.REACT_APP_BASE_URL;
const API_APP_KEY = process.env.REACT_APP_KEY;

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

export async function fetchVideos(signal) {
  const url = `${API_BASE_URL}/videos?page=2&per_page=4&app_key=${API_APP_KEY}`;
  const options = {
    method: "GET",
    headers: { Accept: "application/json" },
    signal,
  };
  const response = await fetch(url, options);
  const videosFromAPI = await response.json();
  return videosFromAPI;
}
