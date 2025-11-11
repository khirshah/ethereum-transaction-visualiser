import axios from 'axios'

const ETHERSCAN_BASE = 'https://api.etherscan.io/v2/api'

export const fetchTransactions = async (address: string) => {
  const res = await axios.get(ETHERSCAN_BASE, {
    params: {
      chainid: 1,
      module: 'account',
      action: 'txlist',
      address,
      startblock: 0,
      endblock: 99999999,
      sort: 'desc',
      apikey: import.meta.env.VITE_ETHERSCAN_API_KEY,
      page: 1,
      offset: 20,
    },
  })

  if (res.data && res.data.status === '1' && Array.isArray(res.data.result)) {
    return res.data.result
  } else {
    const errorMsg =
      (res.data && res.data.message) || 'Unexpected API response structure'
    throw new Error(`Failed to fetch transactions: ${errorMsg}`)
  }
}
