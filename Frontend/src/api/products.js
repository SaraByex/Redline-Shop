export async function fetchProducts() {
  const res = await fetch("/products")

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`)
  }

  return await res.json()
}