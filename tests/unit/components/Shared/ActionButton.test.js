import { render, screen } from '@testing-library/vue'
import ActionButton from '@/components/Shared/ActionButton.vue'

describe('ActionButton', () => {
  // Test for text
  it('renders text', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    })
    const button = screen.getByRole('button', {
      name: /click me/i
    })
    expect(button).toBeInTheDocument()
  })

  // Test for class
  it('applies one of several styles to button'),
    () => {
      render(ActionButton, {
        props: {
          text: 'Click me',
          type: 'primary'
        }
      })

      const button = screen.getByRole('button', {
        name: /click me/i
      })
      expect(button).toHaveClass('primary')
    }
})
