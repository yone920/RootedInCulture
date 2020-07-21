import React from 'react'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import { navigate } from 'gatsby-link'
import { withTheme } from 'styled-components'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


const EventsScheduleCall = () => {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  console.log(state);


  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }


  console.log()

  return (
    <Layout>
    <SEO title="Schedule A Call" />
    <InquiryContainer>
      <div className="inquiry-wrapper">
          <div className="catering-inquiry-title">
            <h4>Schedule A Call</h4>
          </div>
          <form
              name="EventsScheduleCall"
              method="post"
              action="/success/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="EventsScheduleCall" />
              <p hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                </label>
              </p>
              <div className="inquiry">
                  <label htmlFor="name">First Name</label>
                  <input type="text" name="name" id="name" onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" name="last-name" id="lsat-name" onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" onChange={handleChange}/>
              </div>
              <div className="inquiry">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" name="phone" id="phone" onChange={handleChange} />
              </div>
              <div className="inquiry">
                <label htmlFor="event-type">Event Type</label>
                <label className="additional-info">Please select the type of event you are planning</label>
                <select name="event-type" className="event-type" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="inquiry">
                  <label htmlFor="date">Date of the event</label>
                  <input type="date" name="date" id="date" onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="time">Time of the event</label>
                  <input type="time" name="time" id="time" onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="address">Event Address</label>
                  <input type="address" name="address" id="address" onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="city">City</label>
                  <input type="city" name="city" id="city" onChange={handleChange} />
              </div>
              <div className="inquiry">
              <label htmlFor="state">State</label>
              <select name="state" className="inquiry" onChange={handleChange}>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              </div>
              <div className="inquiry">
                  <label htmlFor="about-event">Tell me about your event!</label>
                  <textarea name="about-event" id="about-event" rows="6" required onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="guest-number">Number of Guests</label>
                  <input type="guest-number" name="guest-number" id="guest-number" onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="pallete">What is your desired palette?</label>
                  <label className="additional-info">Please describe the color scheme.</label>
                  <input type="pallete" name="pallete" id="pallete" onChange={handleChange} />
              </div>
              <div className="inquiry">
                <label htmlFor="event-planner">Are you working with a planner?</label>
                <select name="event-planner" className="event-planner" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Not Yet">Not Yet</option>
                </select>
              </div>
              <div className="inquiry">
                <label htmlFor="photographer">Have you hired a photographer?</label>
                <select name="photographer" className="photographer" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Not Yet">Not Yet</option>
                </select>
              </div>
              <div className="inquiry">
                <label htmlFor="budget">What is your target budget?</label>
                <select name="budget" className="budget" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="$2500-$5000">$2500-$5000</option>
                  <option value="$5000-$10000">$5000-$10000</option>
                  <option value="N$15000-$20000o">$15000-$20000</option>
                  <option value="$20000+">$20000+</option>
                </select>
              </div>
              <div className="bridal-party">
                <p>Bridal Party</p>
                <label className="additional-info">Please describe the color scheme.</label>
                <div>
                    <input type="checkbox" id="bridesmaids" name="bridesmaids" onChange={handleChange} />
                    <label htmlFor="bridesmaids">Bridesmaids</label>
                  </div>
                  <div>
                    <input type="checkbox" id="groomsmen" name="groomsmen" onChange={handleChange} />
                    <label htmlFor="groomsmen">Groomsmen</label>
                  </div>
                  <div>
                    <input type="checkbox" id="flower-girl" name="flower-girl" onChange={handleChange} />
                    <label htmlFor="flower-girl">Flower Girl</label>
                  </div>
                  <div>
                    <input type="checkbox" id="ring-bearer" name="ring-bearer" onChange={handleChange} />
                    <label htmlFor="ring-bearer">Ring Bearer</label>
                  </div>
                  <div>
                    <input type="checkbox" id="in-laws" name="in-laws" onChange={handleChange} />
                    <label htmlFor="in-laws">In-laws</label>
                  </div>
              </div>
              <div className="inquiry">
                  <label htmlFor="ceremony-flower-wishes">Ceremony Flower Wishes</label>
                  <textarea name="ceremony-flower-wishes" id="ceremony-flower-wishes" rows="6" required onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="table-flower-wishes">Table Flower Wishes</label>
                  <textarea name="table-flower-wishes" id="table-flower-wishes" rows="6" required onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="what-to-achieve">What is the overall look you are hoping to achieve?</label>
                  <textarea name="what-to-achieve" id="what-to-achieve" rows="6" required onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="how-did-you-hear-about-me">How did you hear about me?</label>
                  <textarea name="how-did-you-hear-about-me" id="how-did-you-hear-about-me" rows="6" required onChange={handleChange} />
              </div>
              <div className="inquiry">
                <button type="submit">Send</button>
              </div>
          </form>
      </div>
    </InquiryContainer>
  </Layout>
  )
}

const InquiryContainer =  styled.div`
    margin: 3rem;


    .inquiry-wrapper {
      .catering-inquiry-title {
            max-width: 500px;
            margin: 2rem auto 6rem auto;
      }
        form {
            max-width: 500px;
            margin: 0 auto;
        }

    .inquiry {

        input {
        display: block;
        box-sizing: border-box;
        width: 100%;
        border-radius: 4px;
        border: 1px solid #ccc;
        padding: 10px 15px;
        margin-bottom: 10px;
        font-size: 14px;
        }

        textarea {
        display: block;
        box-sizing: border-box;
        width: 100%;
        border-radius: 4px;
        border: 1px solid #ccc;
        padding: 10px 15px;
        margin-bottom: 10px;
        font-size: 14px;
        }

        label {
        color: black;
        line-height: 2;
        text-align: left;
        display: block;
        margin-bottom: 13px;
        margin-top: 20px;
        font-size: 14px;
        font-weight: 200;
      }

      .additional-info {
        font-size: 12px;
        margin-top: 10px;

        }

        input:disabled {
        opacity: 0.4;
        }

        input[type="button"]:hover {
        transition: 0.3s all;
        }

        button[type="submit"],
        input[type="button"],
        input[type="submit"] {
        -webkit-appearance: none;
        }

        button {
          display: inline-block;
          width: 100%;
          background-color: ${props => props.theme.color.secondary};
          text-align: center;
          padding: 2rem 2rem;
          text-decoration: none;
          color: white;
          text-transform: uppercase;
          border-radius: .5rem;
          cursor: pointer;
          border: none;
          margin: 6rem 0;
          :hover {
          background-color: ${props => props.theme.color.primary};
          color: white;
          }

        hr {
        margin-top: 30px;
        }
        }

    }

    .bridal-party {
      margin-top: 2rem;

      .additional-info {
        font-size: 12px;
        margin-top: 10px;
        margin-bottom: 10px;
        }
    }
  }
`


export default withTheme(EventsScheduleCall);