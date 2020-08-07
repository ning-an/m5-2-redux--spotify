export const fetchArtistProfile = (token, artistId) => {
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const url = `https://api.spotify.com/v1/artists/${artistId}`;
  return fetch(url, options);
};

export const formatNumOfFollowers = (num) => {
  let formattedNum;
  if (num >= 1000000) {
    formattedNum = `${new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 1,
    }).format(num / 1000000)}M`;
  } else if (num >= 1000) {
    formattedNum = `${new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 1,
    }).format(num / 1000)}K`;
  }
  return formattedNum;
};
