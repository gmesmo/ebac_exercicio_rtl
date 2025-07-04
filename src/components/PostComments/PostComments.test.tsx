import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Post from '.'
import PostComment from '.'

const comentarios = [
  { id: 1, comment: 'Comentario 1' },
  { id: 2, comment: 'Comentario 2' }
]

describe('Teste para o componente PostComment', () => {
  test('Deve renderizar o componente corretamente', () => {
    render(<PostComment />)
    expect(screen.getByText('Comentar')).toBeInTheDocument()
  })

  test('Deve comentar o post', async () => {
    const { debug } = render(<PostComment />)
    // eslint-disable-next-line testing-library/no-debugging-utils

    comentarios.forEach((comentario) => {
      fireEvent.change(screen.getByTestId('comment-input'), {
        target: { value: comentario.comment }
      })
      fireEvent.click(screen.getByTestId('comment-button'))
    })

    await waitFor(() => {
      comentarios.forEach((comentario) => {
        expect(screen.getByText(comentario.comment)).toBeInTheDocument()
      })
    })

    // Confirmar renderização correta
    // eslint-disable-next-line testing-library/no-debugging-utils
    // debug()
  })
})
