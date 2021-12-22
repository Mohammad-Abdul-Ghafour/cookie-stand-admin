import React from 'react'
import CreateForm from './CreateForm'
import ReportTable from './ReportTable'

const Main = (props) => {
    const {formHandler , cookiesList , totalsOfTotals} = props
    return (
        <>
        <CreateForm formHandler={formHandler} />
        {
            cookiesList.length == 0 ?<p className='pt-5 text-neutral-700 text-lg text-center'>No Cookie Stands Available</p> : 
        <ReportTable cookiesList={cookiesList} />
        }
        </>
    )
}

export default Main
