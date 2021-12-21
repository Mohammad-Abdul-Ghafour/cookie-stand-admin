import React from 'react'

const Footer =(props)=> {
    const {counter} = props
    return (
        <>
            <footer className="flex justify-between bg-emerald-500 py-2 items-center">
               <p>{counter} Locations World Wide</p>
            </footer>
        </>
    )
}
export default Footer

