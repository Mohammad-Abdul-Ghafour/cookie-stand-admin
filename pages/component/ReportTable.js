import React from 'react';
import { hours } from '../../data';
import { useState } from 'react';

const ReportTable = (props) => {
    const { cookiesList } = props
    const [totalsOfTotals, setTotlasOfTotals] = useState([])
    let totals = 0
    return (

        <table className='w-1/2 mx-auto my-4'>
            <thead className='rounded-full bg-emerald-500'>
                    <th className=''>Location</th>
                    {hours.map(element => {
                        return (
                            <th>{element}</th>
                        )
                    })
                    }
                    <th>Totals</th>
            </thead>
            <tbody className='text-center'>
                {
                    cookiesList.map((cookie, index) => {
                        let color = ""
                        if (index % 2 == 0) {
                            color = "bg-emerald-400"
                        } else {
                            color = "bg-emerald-300"
                        }
                        return (
                            <tr className={color}>
                                <td className='border border-gray-600'>{cookie.location}</td>
                                {
                                    cookie.hourlyArr.map((hour, index) => {
                                        totals += hour
                                        // totalsOfTotals.length < cookiesList.length ? totalsOfTotals.push(hour):""
                                        return (
                                            <td key={index} className='border border-gray-600'>{hour}</td>
                                        )
                                    })
                                }
                                <td className='border border-gray-600'>{totals}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
            {
                cookiesList.length > 0 &&
                <tfoot>
                    <tr className='bg-emerald-500'>
                        <td className='border border-gray-600'>Totals of Totals</td>
                        {
                            totalsOfTotals.map(element => {
                                <td className='border border-gray-600'>{element}</td>
                            })
                        }
                    </tr>
                </tfoot>
            }

        </table>

    )
}

export default ReportTable;
