"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ShowQR } from "../qr/show-qr"



export const Ticket = () => {
  const [voucherNumber, setVoucherNumber] = useState("")
  const [amount, setAmount] = useState("")
  const [balance, setBalance] = useState("100.00")
  const [message, setMessage] = useState("")
  const [isValidated, setIsValidated] = useState(false)
  const onSubmit = (data:{ voucherNumber: string, amount: string }) => {
    console.log(data)
  }


  const handleValidate = () => {
    if (voucherNumber) {
      setIsValidated(true)
      setMessage("Vale validado correctamente")
    }
  }

  const handlePayment = () => {
    if (!amount || !voucherNumber) {
      setMessage("Por favor complete todos los campos")
      return
    }
    
    if (parseFloat(amount) > parseFloat(balance)) {
      setMessage("El monto excede el saldo disponible")
      return
    }

    onSubmit?.({ voucherNumber, amount })
    setMessage("Pago procesado exitosamente")
  }

  return (
    <Card className="w-full max-w-sm mx-auto bg-zinc-900 text-white">
      <CardHeader>
        <CardTitle className="text-center text-lg">GRUPO RETAIL</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Voucher Form */}
        <div className="space-y-2">
          <Label htmlFor="voucherNumber" className="text-white">Número de Vale:</Label>
          <div className="flex gap-2">
            <Input
              id="voucherNumber"
              value={voucherNumber}
              onChange={(e) => setVoucherNumber(e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-white"
              placeholder="Ingrese número de vale"
            />
            <Button 
              onClick={handleValidate}
              variant="outline"
              className="whitespace-nowrap"
            >
              Validar
            </Button>
          </div>
        </div>

        {/* QR Section */}
        {isValidated && (
          <div className="border-2 border-dashed border-zinc-700 rounded-lg p-8 flex items-center justify-center">
            <ShowQR value="https://finance-flow-fawn.vercel.app/transactions/efectivo-menu" />
          </div>
        )}

        {/* Balance Display */}
        <div className="flex justify-between items-center">
          <span>Saldo:</span>
          <span className="font-semibold">{balance}</span>
        </div>

        {/* Payment Form */}
        <div className="space-y-2">
          <Label htmlFor="amount" className="text-white">Monto:</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-zinc-800 border-zinc-700 text-white"
            placeholder="Ingrese monto a pagar"
          />
        </div>

        <Button 
          onClick={handlePayment}
          className="w-full bg-red-700 hover:bg-red-800"
        >
          Pagar
        </Button>

        {/* Message Display */}
        {message && (
          <Alert variant="default" className="bg-zinc-800 border-zinc-700">
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}