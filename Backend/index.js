import express from "express"
import cors from "cors"
import admin from "firebase-admin"
import paypal from "paypal-rest-sdk"
const Port = 5000

const app = express()

app.use(cors())
app.use(express.json())


//Post Product///
app.post("/products", async (req, res) => {
  try {
    const { name, price, stock, sizes, colors, image } = req.body

    if (!name || !price || !stock || !sizes || !colors || !image) {
      return res.status(400).json({ error: "Missing fields" })
    }

    const response = await fetch(
      "https://shop-sbb-default-rtdb.firebaseio.com/Products.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          price,
          stock,
          sizes,
          colors,
          image
        })
      }
    )

    const data = await response.json()
    res.status(201).json({ id: data.name, status: "Product added" })

  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to add product" })
  }
})

//Get products//
app.get("/products", async (req, res) => {
  try {
    const response = await fetch(
      "https://shop-sbb-default-rtdb.firebaseio.com/Products.json"
    )

    const data = await response.json()

    if (!data) {
      return res.json([])
    }

    const products = Object.entries(data).map(([id, value]) => ({
      id,
      ...value
    }))

    res.json(products)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to fetch products" })
  }
})

//Create payment//
app.post("/pay", async (req, res) => {
  const { cart } = req.body

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  const payment = {
    intent: "sale",
    payer: { payment_method: "paypal" },
    redirect_urls: {
      return_url: "https://yourdomain.com/success",
      cancel_url: "https://yourdomain.com/cancel",
    },
    transactions: [{
      amount: {
        total: total.toFixed(2),
        currency: "USD",
      },
      description: "Redline Boutique Order",
    }],
  }

  paypal.payment.create(payment, (err, payment) => {
    if (err) {
      res.status(500).json(err)
    } else {
      res.json(payment)
    }
  })
})

//Capture payment and update stock//

app.post("/capture", async (req, res) => {
  const { cart } = req.body; // cart = [{ id, qty }, ...]

  try {
    for (const item of cart) {
      const productRef = `Products/${item.id}`; // Realtime DB path
      const productSnapshot = await fetch(
        `https://shop-sbb-default-rtdb.firebaseio.com/${productRef}.json`
      );
      const product = await productSnapshot.json();

      if (!product) return res.status(400).json({ error: "Product not found" });
      if (product.stock < item.qty)
        return res.status(400).json({ error: "Insufficient stock" });

      // Reduce stock
      await fetch(
        `https://shop-sbb-default-rtdb.firebaseio.com/${productRef}/stock.json`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product.stock - item.qty),
        }
      );
    }

    res.json({ status: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update stock" });
  }
});


app.listen(Port, () => {
  console.log(`App is running on port ${Port}`)
})


