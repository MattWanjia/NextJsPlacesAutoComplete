import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useRef, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [searchPlace, setSearchPlace] = useState('')

  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "ke" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"]
  };

  useEffect(() => {
    autoCompleteRef.current = window.google.maps.places.Autocomplete(
      inputRef.current,
      options
     );
  }, [])

  return (
    <div className='w-screen h-screen bg-white'>
      <p>Test</p>
      <input ref={inputRef} className='border-2 border-black w-1/2'/>
    </div>
  )
}
