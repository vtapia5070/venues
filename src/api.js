const baseUrl = `https://api.foursquare.com/v2/venues`;
const clientID = `client_id=${process.env.REACT_APP_CLIENT_ID}`;
const clientSecret = `client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
const version = `v=20190107`; // A way to version control api updates
const routes = {
  search: '/search',
};

export const searchVenuesByQuery = (query, locationObj) => {
  let locationParams;
  if (locationObj.longitude && locationObj.latitude) {
    locationParams = `ll=${locationObj.latitude},${locationObj.longitude}`;
  } else if (locationObj.city && locationObj.state) {
    locationParams = `near=${locationObj.city},${locationObj.state}`;
  }

  const url = `${baseUrl}${routes.search}?${version}&${clientID}&${clientSecret}&limit=10&${locationParams}&query=${query}`;

  return fetch(url)
    .then((res) => res.json())
    .then(res => {
      console.log('code', res.meta.code);
      if (res.meta.code >= 400) {
        return new Error(res.meta.errorDetail);
      }
      return Promise.resolve(res);
    })
    .catch((err) => {
      console.log('Error:', err);
    });
}