import usePreviousAndNextPages from '@/composables/usePreviousAndNextPages'

describe('usePreviousAndNextPages', () => {
  it('calculates page before current one', () => {
    const currentPage = { value: 8 }
    const maxPage = { value: 10 }
    const { previousPage } = usePreviousAndNextPages(currentPage, maxPage)
    expect(previousPage.value).toBe(7)
  })
  describe('when current page is the first page', () => {
    it('does not provide previous page', () => {
      const currentPage = { value: 1 }
      const maxPage = { value: 1 }
      const { previousPage } = usePreviousAndNextPages(currentPage, maxPage)
      expect(previousPage.value).toBeUndefined()
    })
  })
  it('calculates page after current one', () => {
    const currentPage = { value: 8 }
    const maxPage = { value: 10 }
    const { nextPage } = usePreviousAndNextPages(currentPage, maxPage)
    expect(nextPage.value).toBe(9)
  })
  describe('when current page is the last page', () => {
    it('does not provide next page', () => {
      const currentPage = { value: 8 }
      const maxPage = { value: 8 }
      const { nextPage } = usePreviousAndNextPages(currentPage, maxPage)
      expect(nextPage.value).toBeUndefined()
    })
  })
})
