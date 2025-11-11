import { format } from 'date-fns'
import { type Transaction } from '../types'
import { TransactionParticipant } from './TransactionParticipant.tsx'

export const TransactionItem = ({
  transaction,
  userAddress,
}: {
  transaction: Transaction
  userAddress: string
}) => {
  const time = format(parseInt(transaction.timeStamp) * 1000, 'HH:mm')
  const date = format(parseInt(transaction.timeStamp) * 1000, 'dd/MM/yyyy')
  const isOutgoing =
    transaction.from.toLowerCase() === userAddress.toLowerCase()
  const valueEth = (parseFloat(transaction.value) / 1e18).toFixed(5)

  return (
    <div
      className={`flex max-md:flex-col-reverse max-md:gap-4 max-md:p-2 justify-between items-center
        max-md:border border-gray-300 max-md:rounded-md md:border-b md:py-2 text-sm`}
    >
      <div className="flex flex-col md:min-w-[360px]">
        <TransactionParticipant label="From:" id={transaction.from} />
        <TransactionParticipant label="To:" id={transaction.to} />
      </div>
      <div
        className={`max-md:text-2xl font-medium ${isOutgoing ? 'text-red-600' : 'text-green-600'}`}
      >
        {isOutgoing ? '-' : '+'} {valueEth} ETH
      </div>
      <div className="flex self-end max-md:gap-3 md:flex-col md:items-end">
        <div className="md:text-lg font-semibold text-gray-700">{time}</div>
        <div className="text-gray-500">{date}</div>
      </div>
    </div>
  )
}
