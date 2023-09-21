import { useState } from 'react'

const SavedContact = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <>
      <tr>
        <td>Gatinha do tinder so vem</td>
        <td>99999999</td>
        <td>gogo@emais.com</td>
        <td>
          <label
            className={isFavorite ? 'star-filled' : ''}
            onClick={toggleFavorite}
          >
            {isFavorite ? '★' : '☆'}
          </label>
        </td>
        <td>
          <input type="checkbox"></input>
        </td>
      </tr>
    </>
  )
}

export default SavedContact
