import { type Dispatch, type SetStateAction } from 'react'
import { Search } from 'lucide-react'

export function AddressSearch({
  onSearch,
  setInputValue,
  inputValue,
}: {
  onSearch: (address: string) => void
  inputValue: string
  setInputValue: Dispatch<SetStateAction<string>>
}) {
  return (
    <div className="flex max-md:flex-col gap-2 sm:gap-4 md:min-w-[450px] max-w-[600px]">
      <input
        type="text"
        placeholder="Enter Ethereum address"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-2 border border-gray-400 rounded-sm text-sm"
      />
      <button
        onClick={() => onSearch(inputValue)}
        className="bg-cyan-700 text-white px-5 py-2 rounded-md hover:bg-cyan-800 flex items-center justify-center gap-1 cursor-pointer"
      >
        <Search size={16} />
        <div>Search</div>
      </button>
    </div>
  )
}
