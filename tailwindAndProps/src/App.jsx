import { useState } from 'react'
import Card from './components/card'

function App() {
  const user={
    user1:["Brijesh", "https://source.unsplash.com/random/?men","Click me"],
    user2:["Vaishnavi", "https://source.unsplash.com/random/?girl","Viste here"],
    user3:["Shivam", "https://source.unsplash.com/random/?boy","Find me here"],
  }

  return (
    <>
    <h1 className='bg-gray-500'>Tailwind</h1>
      {Object.keys(user).map((key) => (
          <Card
            key={key}
            name={user[key][0]}        // Pass the name
            imageURL={user[key][1]}    // Pass the image URL
            btnText={user[key][2]}  // Pass the button text
          />
        ))}
    </>
  )
}

export default App
