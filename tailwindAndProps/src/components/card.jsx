import React from 'react'

function Card({name,imageURL,btnText="Click me"}) {
    return (
        <div className='inline-flex flex-wrap  bg-slate-400 h-[30%] border-2 '>
            <div className="relative h-[400px] w-[300px] rounded-md m-2">
            <img
              src={imageURL}
              alt="AirMax Pro"
              className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white">{name}</h1>
              <p className="mt-2 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                debitis?
              </p>
              <button className="m-2 p-1 rounded-md inline-flex cursor-pointer items-center text-sm font-semibold bg-black  text-white">
                {btnText} →
              </button>
            </div>
                  </div>
        </div>
    )
}

export default Card
