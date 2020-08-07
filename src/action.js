export const requestAccessToken = () => {
  return { type: "REQUEST_ACCESS_TOKEN" };
};

export const receiveAccessToken = (token) => {
  return { type: "RECEIVE_ACCESS_TOKEN", token };
};

export const receiveAccessTokenError = () => ({
  type: "RECEIVE_ACCESS_TOKEN_ERROR",
});

export const requestArtistData = () => {
  return { type: "REQUEST_ARTIST_DATA" };
};

export const receiveArtistData = (currentArtist) => {
  return { type: "RECEIVE_ARTIST_DATA", currentArtist };
};

export const receiveArtistError = () => {
  return { type: "RECEIVE_ARTIST_ERROR" };
};
