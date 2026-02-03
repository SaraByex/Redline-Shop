import React, { useEffect, useRef } from "react"

const PayPalButton = ({ total }) => {
  const paypalRef = useRef(null)
  const renderedRef = useRef(false)

  useEffect(() => {
    if (renderedRef.current) return
    if (!window.paypal || !paypalRef.current) return

    renderedRef.current = true

    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: total.toFixed(2)
              }
            }
          ]
        })
      },
      onApprove: async (data, actions) => {
        await actions.order.capture()
      }
    }).render(paypalRef.current)
  }, [total])

  return <div ref={paypalRef}></div>
}

export default PayPalButton
