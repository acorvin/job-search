import { render, screen } from '@testing-library/vue'
// import userEvent from '@testing-library/user-event'
import HeaderContainer from '@/components/Shared/HeaderContainer.vue'

describe('HeaderContainer', () => {
  it('allows parent component to provide title content', () => {
    render(HeaderContainer, {
      slots: {
        title: '<h1>Title</h1>'
      }
    })

    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  it('allows parent component to provide subtitle content', () => {
    render(HeaderContainer, {
      slots: {
        subtitle: '<h2>Subtitle</h2>'
      }
    })

    expect(screen.getByText('Subtitle')).toBeInTheDocument()
  })
})
