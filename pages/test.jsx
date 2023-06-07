import React from 'react'
import AutoComplete from 'react-google-autocomplete'

export default function Test() {
    const options = {
        componentRestrictions: { country: "ke" },
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["establishments"]
      };

  return (
    <div>
        <AutoComplete
            apiKey={YOUR_API_KEY}
            onPlaceSelected={(place) => {
                console.log(place)
            }}
            options={options}
        />
    </div>
  )
}
