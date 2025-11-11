import { format } from 'date-fns'
import { type TransactionItem } from '../types'

export function TransactionItem({
  transaction,
  userAddress,
}: {
  transaction: TransactionItem
  userAddress: string
}) {
  const date = format(
    parseInt(transaction.timeStamp) * 1000,
    'MMM d, yyyy HH:mm'
  )
  const isOutgoing =
    transaction.from.toLowerCase() === userAddress.toLowerCase()
  const valueEth = (parseFloat(transaction.value) / 1e18).toFixed(10)

  return (
    <div className="flex justify-between border-b py-2 text-sm">
      <div className="w-1/2 truncate">
        <div>From: {transaction.from}</div>
        <div>To: {transaction.to}</div>
      </div>
      <div
        className={`font-medium ${isOutgoing ? 'text-red-600' : 'text-green-600'}`}
      >
        {isOutgoing ? '-' : '+'} {valueEth} ETH
      </div>
      <div className="text-gray-500">{date}</div>
    </div>
  )
}
