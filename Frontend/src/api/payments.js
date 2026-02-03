
export async function createPayment(cart) {
  try {
    const res = await fetch("/api/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    })

    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`)
    }

    const data = await res.json()
    return data
  } catch (err) {
    console.error("Failed to create payment:", err)
    return null
  }
}