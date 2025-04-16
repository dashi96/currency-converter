import axios from 'axios'

export async function fetchCurrencies(): Promise<Rates> {
  try {
    const response = await axios.get('https://status.neuralgeneration.com/api/currency')
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch currency rates')
  }
}
