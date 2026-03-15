import React from 'react'

function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;

}
//()- parentheses in return can be removed if the content inside it is just of one line

export default Container