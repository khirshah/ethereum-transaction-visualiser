import { useState } from 'react'
import { fetchTransactions } from '../api/fetchTransactions'
import type { TransactionItem } from '../types.ts'

export const useTransactions = () => {
  const [loading, setLoading] = useState(false)
  const [transactions, setTransactions] = useState<TransactionItem[]>([])
  const [error, setError] = useState('')

  const getTransactions = async (address: string) => {
    setLoading(true)
    setError('')
    try {
      const data = await fetchTransactions(address)
      setTransactions(data)
    } catch (error) {
      setError(`Failed to fetch transactions: ${error}`)
      setTransactions([])
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, transactions, getTransactions }
}
