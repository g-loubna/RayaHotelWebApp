import React from 'react'

const Item =({Links,title}) => {
  return (
<ul>
    
<h1 className='mt-4 mb-1 font-semibold text-white dark:text-white'>{title}</h1>
{
    Links.map((link)=>(
        <li key={link.name} className='mb-3' >
            <a className='text-white hover:text-purple duration-300 text-sm cursor-pointer dark:text-white' href={link.link}> {link.name}</a>
        </li>
    ))
}
</ul>
  )
}

export default Item
