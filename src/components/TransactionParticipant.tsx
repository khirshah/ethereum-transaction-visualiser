export const TransactionParticipant = ({
  id,
  label,
}: {
  id: string
  label: string
}) => {
  return (
    <div className="flex max-md:flex-col justify-between">
      <div className="font-semibold">{label}</div>
      <div className="flex justify-self-end ">{id}</div>
    </div>
  )
}
