export async function getDataService(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error()
  return res.json()
}
