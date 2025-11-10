import { AddressInput } from './components/AddressInput'
import { TransactionList } from './components/TransactionList'
import { useTransactions } from './hooks/useTransactions'

const App = () => {
  const { loading, error, transactions, getTransactions } = useTransactions()

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Ethereum Transaction Visualizer
      </h1>
      <AddressInput onSearch={getTransactions} />

      {loading && <p className="mt-4 text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {!loading && transactions.length > 0 && (
        <TransactionList transactions={transactions} />
      )}
    </main>
  )
}

export default App
