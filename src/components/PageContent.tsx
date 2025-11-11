import { AddressInput } from './AddressInput'
import { TransactionList } from './TransactionList'
import { useTransactions } from './../hooks/useTransactions'

const PageContent = () => {
  const { loading, error, transactions, getTransactions } = useTransactions()

  const ethereumDemoAddress = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Ethereum Transaction Visualiser
      </h1>
      <h3>You can use this address for demo purposes:</h3>
      <p className="mb-4 text-sm text-gray-600">{ethereumDemoAddress}</p>
      <AddressInput onSearch={getTransactions} />

      {loading && <p className="mt-4 text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {!loading && transactions.length > 0 && (
        <TransactionList
          transactions={transactions}
          userAddress={ethereumDemoAddress}
        />
      )}
    </div>
  )
}

export default PageContent
