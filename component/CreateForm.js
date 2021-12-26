import React from 'react'

const CreateForm = (props) => {
    const { formHandler } = props
    return (
            <form className='text-center ml-auto mr-auto mt-10 bg-emerald-300 rounded-lg w-4/5 pb-1' onSubmit={formHandler}>
                <div className='p-4 text-xl'>
                    <label className=''>Create Cookie Stand</label>
                </div>
                <div className='pb-4 space-x-2'>
                    <label className=''>Location</label>
                    <input name='location' className='w-11/12' type="text" required/>
                </div>
                <div className='flex mb-5'>
                    <div className=''>
                        <label className='px-10'>Minimum Customers Per Hour</label>
                        <br />
                        <input name='min' className='' type="text" required/>
                    </div>
                    <div>
                        <label className='px-10'>Maxmimum Customers Per Hour</label>
                        <br />
                        <input name='max' className='' type="text" required/>
                    </div>
                    <div>
                        <label className='px-10'>Average Cookies Per Sale</label>
                        <br />
                        <input name='avg' className='' type="text" required/>
                    </div>
                    <div>
                        <button type='submit' className='w-full bg-emerald-600 py-3 px-11 mx-5'>Create</button>
                    </div>
                </div>
            </form>
    )
}

export default CreateForm;
