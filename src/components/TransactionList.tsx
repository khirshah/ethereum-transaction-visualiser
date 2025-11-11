import { TransactionItem } from './TransactionItem'
import { type Transaction } from '../types'

export const TransactionList = ({
  transactions,
  userAddress,
}: {
  transactions: Transaction[]
  userAddress: string
}) => {
  return (
    <div className="flex flex-col max-md:gap-4 mt-6">
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.hash}
          transaction={transaction}
          userAddress={userAddress}
        />
      ))}
    </div>
  )
}
