import React from 'react'
import '../Rules/Rules.css'
function Rules() {
  return (
    <div>
        <div className='row'>
            <div className='col-4'>
                <h6>House Rules</h6>
                <br/>
                <ul>
                    <li>
                        <img className='ruleSymbol' alt='checkin' src='https://cdn3.vectorstock.com/i/1000x1000/97/67/clock-line-icon-in-flat-style-symbol-vector-23439767.jpg'/>
                    Check-in: After 2:00 PM
                    </li>
                    <br/>
                    <li>
                    <img className='ruleSymbol' alt='checkin' src='https://cdn3.vectorstock.com/i/1000x1000/97/67/clock-line-icon-in-flat-style-symbol-vector-23439767.jpg'/>
                    Checkout: 11:00 AM
                    </li>
                    <br/>
                    <li>
                    <img className='ruleSymbol' alt='checkin' src='https://cdn.iconscout.com/icon/premium/png-256-thumb/self-check-in-2978403-2476226.png'/>
                    Self check-in with keypad
                    </li>
                    <br/>
                    <li>
                    <img className='ruleSymbol' alt='checkin' src='https://cdn2.vectorstock.com/i/1000x1000/31/81/no-smoking-icon-vector-22623181.jpg'/>
                    No smoking
                    </li>
                    <br/>
                    <li>
                    <img className='ruleSymbol' alt='checkin' src='https://static.thenounproject.com/png/922068-200.png'/>
                    No pets
                    </li>
                    <br/>
                    <li>
                    <img className='ruleSymbol' alt='checkin' src='https://cdn.iconscout.com/icon/premium/png-256-thumb/no-party-3597289-3008858.png'/>
                    No parties or events
                    </li>
                </ul>
            </div>
            <div className='col-4'>
                <h6>Health and safety</h6>
                <br/>
                <ul>
                    <li>
                    <img className='ruleSymbol' alt='checkin' src='https://www1.nyc.gov/assets/doc/images/content/pages/prevention_icon_5.png'/>
                    Airbnb's social-distancing and other COVID-19-related guidelines apply
                    </li>
                    <br/>
                    <li>
                    <img className='ruleSymbol' alt='checkin' src='https://static.thenounproject.com/png/3191821-200.png'/>
                    Security camera/recording device
                    </li>
                    <br/>
                    <li>
                    <img className='ruleSymbol' alt='checkin' src='https://cdn5.vectorstock.com/i/1000x1000/58/34/carbon-monoxide-on-cloud-pollution-icon-vector-22665834.jpg'/>
                    Carbon monoxide alarm
                    </li>
                    <br/>
                    
                </ul>
            </div>
            <div className='col-4'>
                <h6>Cancellation policy</h6>
                <br/>
                <ul>
                    <li>
                    <img className='ruleSymbol' alt='checkin' src='http://cdn.onlinewebfonts.com/svg/img_308954.png'/>
                &nbsp;Non-refundable: Cancel before check-in and get back only the cleaning fee, if you paid one.
                    </li>
                </ul>
            </div>
        </div>
        <hr/>
    </div>
  )
}

export default Rules