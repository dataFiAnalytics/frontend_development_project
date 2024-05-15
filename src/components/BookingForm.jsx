import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function BookingForm({availableTimes, dispatch, submitForm}) {
    console.log(dispatch)
    const [formData, setFormData] = useState({
        firstName: "",
        contactNumber: "",
        date: "",
        time: "18:00",
        noOfGuests: 1,
        occasion: "Romantic dinner"
    })


    const handleFormChange = (event) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
    }


    const handleDateChange = async (event) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
     dispatch({ type: 'UPDATE_TIMES', payload: value })
    }


    const handleSubmit = (event) => {
      event.preventDefault()
      submitForm(formData)
    }

    const currentDate = new Date().toISOString().split("T")[0]
    const options = availableTimes.map(time => <option key={time}>{time}</option>)
    return (
      <main>
        <p className="desc-text form-desc">Please enter your booking information below.</p>
        <form onSubmit={handleSubmit}>

          <div className="seperate">
            <label htmlFor="first-name">Name:</label>
            <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleFormChange} required />
          </div>

          <div className="seperate">
            <label htmlFor="contact-number">Phone Number:</label>
            <input type="text" id="contact-number" name="contactNumber" placeholder="0123 345 678"
            value={formData.contactNumber} onChange={handleFormChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
          </div>

          <div className="seperate date-time">
            <div className="seperate-child">
              <label htmlFor="res-date">Please choose a date:</label>
              <input type="date" id="res-date" name="date" value={formData.date} onChange={handleDateChange} required min={currentDate}/>
            </div>

            <div className="seperate-child">
              <label htmlFor="res-time">Choose time:</label>
              <select id="res-time " name="time" value={formData.time} onChange={handleFormChange} required>
                {options}
              </select>
            </div>
          </div>

          <div className="seperate guests-occasion">
            <div className="seperate-child">
              <label htmlFor="guests">How many guests?:</label>
              <input type="number" placeholder="1" min="1" max="10" required id="guests" name="noOfGuests" value={formData.noOfGuests} onChange={handleFormChange}/>
            </div>

            <div className="seperate-child">
              <label htmlFor="occasion">Choose booking purpose:</label>
              <select id="occasion" name="occasion" required value={formData.occasion} onChange={handleFormChange}>
                <option>Birthday</option>
                <option>Family dinner</option>
                <option>Dinner with collegues</option>
                <option>Romantic dinner</option>
              </select>
            </div>
          </div>
          <input className="submit" type="submit" value="Reserve" aria-label="submit button"/>
      </form>
      </main>
    )
  }