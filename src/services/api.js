export const fetchCapsules = async () => {
  const response = await fetch("https://api.spacexdata.com/v3/capsules");
  return response.json();
};
