export const getDataService = async url => {
  const res = await fetch(url)
  if (!res.ok) throw new Error()
  return res.json()
}
