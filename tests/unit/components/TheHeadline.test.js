import { nextTick } from 'vue'
import { render, screen } from '@testing-library/vue'

import TheHeadline from '@/components/TheHeadline.vue'

describe('TheHeadline', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('displays intro action verb', () => {
    render(TheHeadline)

    const actionPhrase = screen.getByRole('heading', {
      name: /build for everyone/i
    })
    expect(actionPhrase).toBeInTheDocument()
  })

  it('changes action verb at a consistent interval', () => {
    const mock = vi.fn()
    vi.stubGlobal('setInterval', mock)

    render(TheHeadline)

    expect(mock).toHaveBeenCalled()
  })

  it('swaps action verb after interval', async () => {
    render(TheHeadline)

    vi.advanceTimersToNextTimer()

    await nextTick()
    const actionPhrase = screen.getByRole('heading', {
      name: /create for everyone/i
    })

    expect(actionPhrase).toBeInTheDocument()
  })

  it('removes interval when component disappears', () => {
    const clearInterval = vi.fn()

    vi.stubGlobal('clearInterval', clearInterval)

    const { unmount } = render(TheHeadline)
    unmount()

    expect(clearInterval).toHaveBeenCalled()
  })
})
