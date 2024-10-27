export const fetchCapsules = async () => {
  const response = await fetch("https://api.spacexdata.com/v4/capsules");
  return response.json();
};
