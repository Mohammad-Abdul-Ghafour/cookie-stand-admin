import React from 'react';
import { hours } from '../data';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios';

const ReportTable = (props) => {
    const { cookiesList , config } = props
    let totalsOfTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let totals = 0
    let footTotal = 0
    const baseUrl = process.env.NEXT_PUBLIC_HOST;
    const deleteUrl = baseUrl + 'api/v1/cookie_stands/';

    const deleteHandler = (id) => {
        console.log(id);
        axios.delete(deleteUrl+`${id}/`, config)
    }

    return (

        <table className='w-1/2 mx-auto my-4'>
            <thead className='rounded-full bg-emerald-500'>
                <tr>
                    <th className=''>Location</th>
                    {hours.map((element, index) => {
                        return (
                            <th key={index}>{element}</th>
                        )
                    })
                    }
                    <th>Totals</th>
                </tr>

            </thead>
            <tbody className='text-center'>
                {
                    cookiesList.map((cookie, index) => {
                        { totals = 0 }
                        let color = ""
                        if (index % 2 == 0) {
                            color = "bg-emerald-400"
                        } else {
                            color = "bg-emerald-300"
                        }
                        return (
                            <tr key={index} className={color}>
                                <td key={index + 100} className='border border-gray-600 flex justify-between'>{cookie.location}<FontAwesomeIcon className='my-auto' onClick={()=>{deleteHandler(cookie.id)}} style={{ width: "20px", height: '20px', display: 'inline' }} icon={faTrash} color="tomato"></FontAwesomeIcon></td>

                                {
                                    cookie.hourly_sales.map((hour, idx) => {
                                        totals += hour
                                        totalsOfTotals[idx] += hour
                                        return (
                                            <td key={idx} className='border border-gray-600'>{hour}</td>
                                        )
                                    })

                                }
                                <td key={index + 200} className='border border-gray-600'>{totals}</td>

                            </tr>

                        )

                    })
                }

            </tbody>
            {
                totalsOfTotals.length > 0 &&
                <tfoot>
                    <tr className='bg-emerald-500'>
                        <td className='border border-gray-600'>Totals of Totals</td>
                        {
                            totalsOfTotals.map((element, index) => {
                                footTotal += element
                                console.log(222222, element);
                                return (
                                    <td key={index + 300} className='bg-emerald-500 border border-gray-600'>{element}</td>
                                )
                            })
                        }
                        <td className='border border-gray-600'>{footTotal}</td>
                    </tr>
                </tfoot>
            }

        </table>

    )
}

export default ReportTable;
