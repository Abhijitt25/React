import React from 'react'

const RightCard = () => {
  return (
    <div className="h-full w-60 overflow-hidden bg-red-400 rounded-4xl">
      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" className="h-full w-full object-cover rounded-r-4xl" />
      <div className='h-full w-full top-0 absolute left-0 p-6'>
        <h2>1</h2>
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo veritatis ut beatae voluptate quaerat ipsa?</p>
          <div> 
            <button>Read More</button>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default RightCard