import { format } from 'date-fns'
import { type TransactionItem } from '../types'

export function TransactionItem({
  transaction,
  userAddress,
}: {
  transaction: TransactionItem
  userAddress: string
}) {
  const time = format(parseInt(transaction.timeStamp) * 1000, 'HH:mm')
  const date = format(parseInt(transaction.timeStamp) * 1000, 'dd/MM/yyyy')
  const isOutgoing =
    transaction.from.toLowerCase() === userAddress.toLowerCase()
  const valueEth = (parseFloat(transaction.value) / 1e18).toFixed(5)

  return (
    <div className="flex justify-between items-center border-b py-2 text-sm">
      <div className="flex flex-col min-w-[360px]">
        <div className="flex justify-between">
          <div className="font-semibold">From:</div>
          <div className="flex justify-self-end"> {transaction.from}</div>
        </div>
        <div className="flex justify-between">
          <div className="font-semibold">To:</div>
          <div className="flex justify-self-end ">{transaction.to}</div>
        </div>
      </div>
      <div
        className={`font-medium ${isOutgoing ? 'text-red-600' : 'text-green-600'}`}
      >
        {isOutgoing ? '-' : '+'} {valueEth} ETH
      </div>
      <div className="flex flex-col items-end">
        <div className="text-lg font-semibold text-gray-700">{time}</div>
        <div className="text-gray-500">{date}</div>
      </div>
    </div>
  )
}
