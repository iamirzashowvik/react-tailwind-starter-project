import { margin } from '@mui/system'
import React from 'react'
export default function Form() {
  const [formData, setFormData] = React.useState({
    phone: '',
  })
  const axios = require('axios').default
  const [starWarsData, setStarWarsData] = React.useState({})

  async function searchNumberFunc(searchNumber) {
    const headers = {
      'content-type': 'application/json',
    }
    axios
      .post(
        'https://who-is-it-095.herokuapp.com/',
        {
          number: '88' + searchNumber,
        },
        { headers }
      )
      .then(function (response) {
        console.log(response)
        alert(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData.phone)
    searchNumberFunc(formData.phone)
  }

  return (
    <div>
      <div
        className=""
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="01234567890"
            className="form--input"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
          />

          <button className="form--submit">Search</button>
        </form>
      </div>
    </div>
  )
}
