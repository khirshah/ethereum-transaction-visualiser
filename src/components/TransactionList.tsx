import { TransactionItem } from './TransactionItem'
import { type TransactionItem as TransactionItemType } from '../types'

export function TransactionList({
  transactions,
  userAddress,
}: {
  transactions: TransactionItemType[]
  userAddress: string
}) {
  return (
    <div className="mt-4 space-y-2">
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
