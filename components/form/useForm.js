import { useState } from 'react'

export default function useForm(initData = {}, endpoint = '') {
  const [data, setData] = useState(initData)
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState(undefined)
  const [successMsg, setSuccessMsg] = useState(undefined)

  return {
    data,
    error,
    successMsg,
    processing,
    setData: (prop, value) => {
      setData((prev) => ({ ...prev, [prop]: value }))
    },
    submit: (e) => {
      e.preventDefault()

      setProcessing(true)
      setError(undefined)

      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data,
        }),
      })
        .then(async (r) => {
          const data = await r.json()
          setProcessing(false)
          if (r.ok) setSuccessMsg(data.message)
          setError(data.message)
        })
    },
  }
}
