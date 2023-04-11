import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import TextInput from '@/components/Shared/TextInput.vue'

describe('TextInput', () => {
  it('communicates that user has entered a character', async () => {
    const { emitted } = render(TextInput, {
      props: {
        modelValue: ''
      }
    })
    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'NYC')
    const messages = emitted()['update:modelValue']

    expect(messages).toEqual([['N'], ['NY'], ['NYC']])
  })
})
