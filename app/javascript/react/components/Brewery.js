import React, { PureComponent } from 'react'

class Brewery extends PureComponent {
  render() {
    const { brewery } = this.props
    const {
      name,
      street,
      city,
      state,
      postal_code,
      country,
      longitude,
      latitude,
      brewery_type
    } = brewery
    let bgColor
    let address

    if (city !== '' && state !== '') {
      if (street === '')
        address = encodeURIComponent(`${name}, ${city}, ${state}`)
      else {
        address = encodeURIComponent(`${name}, ${street}, ${city}, ${state}`)
      }
    } else {
      address = null;
    }

    switch(brewery.brewery_type) {
      case 'micro':
      case 'regional':
      case 'large':
        bgColor = 'bg-red text-white'
        break
      case 'brewpub':
        bgColor = 'bg-orange text-white'
        break
      default:
        bgColor = 'bg-blue text-grey'
    }

    return (
      <div className={`p-4 mb-2 rounded ${bgColor}`}>
        { (Object.keys(brewery).length !== 0) ?
          <div>
            <address className="roman">
              <div className="text-lg mb-2">
                <span className="font-bold">{name}</span>
                <span> ({brewery_type})</span>
              </div>
              <div className="breweryInfo">
                { street !== '' ? <div>{street}</div> : '' }
                { city !== '' ? <span>{city}, </span> : '' }
                { state !== '' ? <span>{state}, </span> : '' }
                { postal_code !== '' ? <span>{postal_code}, </span> : '' }
                { country !== '' ? <span>{country} </span> : '' }
                { latitude ? <div>
                  Geo Coordinates: {latitude} / {longitude}
                </div> : '' }
              </div>
            </address>
            { address ?
              <div>
                <a
                  className="text-white"
                  href={`https://www.google.com/maps/search/?api=1&query=${address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Map
                </a>
              </div>
              : ''
            }
          </div>
          :
          <span>No brewery selected.</span>
        }
      </div>
    )
  }
}

export default Brewery
