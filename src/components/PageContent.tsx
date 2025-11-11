import { AddressSearch } from './AddressSearch.tsx'
import { TransactionList } from './TransactionList'
import { useTransactions } from './../hooks/useTransactions'

const PageContent = () => {
  const {
    loading,
    error,
    transactions,
    getTransactions,
    inputValue,
    setInputValue,
  } = useTransactions()

  const ethereumDemoAddress = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'

  return (
    <div className="md:w-[80%] max-w-[760px] p-4">
      <h1 className="text-2xl font-bold mb-4">
        Ethereum Transaction Visualiser
      </h1>
      <h3>You can use this address for demo purposes:</h3>
      <p className="mb-4 text-sm text-gray-600">{ethereumDemoAddress}</p>
      <AddressSearch
        onSearch={getTransactions}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />

      {loading && <p className="mt-4 text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {!loading && transactions.length > 0 && (
        <TransactionList transactions={transactions} userAddress={inputValue} />
      )}
    </div>
  )
}

export default PageContent
