import React from 'react'
import QRCode from 'react-qr-code'

export default function page() {
  return (
    <div style={{ background: 'white', padding: '16px' }}>
  <QRCode value="https://finance-flow-fawn.vercel.app/transactions/efectivo-menu" />
</div>
  )
}
