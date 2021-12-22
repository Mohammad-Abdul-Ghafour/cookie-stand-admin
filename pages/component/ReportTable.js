import React from 'react';
import { hours } from '../../data';
import { useState } from 'react';

const ReportTable = (props) => {
    const { cookiesList} = props
    let totalsOfTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let totals = 0
    let footTotal = 0
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
                        {totals = 0}
                        let color = ""
                        if (index % 2 == 0) {
                            color = "bg-emerald-400"
                        } else {
                            color = "bg-emerald-300"
                        }
                        return (
                            <tr key={index} className={color}>
                                <td key={index + 100} className='border border-gray-600'>{cookie.location}</td>
                                {
                                    cookie.hourlyArr.map((hour, idx) => {
                                        totals += hour
                                        totalsOfTotals[idx] += hour
                                        // totalsOfTotals.length < cookiesList.length ? totalsOfTotals.push(hour):totalsOfTotals.push(totals)
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
                                console.log(222222,element);
                                return (
                                <td key={index+300} className='bg-emerald-500 border border-gray-600'>{element}</td>
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
