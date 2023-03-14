import axios from 'axios'
import getJobs from '@/api/getJobs'

vi.mock('axios')

describe('getJobs', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: 'Python Programmer'
        }
      ]
    })
  })
  it('fetches jobs people can apply to', async () => {
    await getJobs()
    expect(axios.get).toHaveBeenCalledWith('http://mytestapi.com/jobs')
  })
  it('extracts jobs from response', async () => {
    const jobs = await getJobs()
    expect(jobs).toEqual([{ id: 1, title: 'Python Programmer' }])
  })
})
