import { TransactionItem } from './TransactionItem'
import { type TransactionItem as TransactionItemType } from '../types'

export function TransactionList({
  transactions,
}: {
  transactions: TransactionItemType[]
}) {
  return (
    <div className="mt-4 space-y-2">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.hash} transaction={transaction} />
      ))}
    </div>
  )
}
