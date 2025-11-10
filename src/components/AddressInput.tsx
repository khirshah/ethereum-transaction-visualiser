import { useState } from 'react'
import { Search } from 'lucide-react'

export function AddressInput({
  onSearch,
}: {
  onSearch: (address: string) => void
}) {
  const [value, setValue] = useState('')

  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        placeholder="Enter Ethereum address"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-2 border rounded-xl text-sm"
      />
      <button
        onClick={() => onSearch(value)}
        className="bg-amber-700 text-white px-3 py-2 rounded-xl hover:bg-amber-800 flex items-center gap-1 cursor-pointer border border-amber-950"
      >
        <Search size={16} /> Fetch
      </button>
    </div>
  )
}
