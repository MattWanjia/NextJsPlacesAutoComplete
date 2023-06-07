import React from 'react'
import { usePlacesWidget } from "react-google-autocomplete";


export default function test2() {
    const options = {
        componentRestrictions: { country: "ke" },
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["establishment"]
      };

    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey:{YOUR_API_KEY},
        onPlaceSelected: (place) => {
          console.log(place);
        },
        options: options

      });

      

  return (
    <div>
        <input ref={ref}/>
    </div>
  )
}
