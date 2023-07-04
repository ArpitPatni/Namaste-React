export function filterData(searchText, restros) {
  const data = restros.filter((restro) =>
    restro?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return data;
}
