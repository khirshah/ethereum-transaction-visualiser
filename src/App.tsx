import { AddressInput } from './components/AddressInput'
import { TransactionList } from './components/TransactionList'
import { useTransactions } from './hooks/useTransactions'

const App = () => {
  const { loading, error, transactions, getTransactions } = useTransactions()

  const ethereumDemoAddress = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Ethereum Transaction Visualizer
      </h1>
      <h3>you can use this address for demo purposes:</h3>
      <p className="mb-4 text-sm text-gray-600">{ethereumDemoAddress}</p>
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
