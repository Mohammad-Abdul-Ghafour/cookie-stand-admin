import Head from 'next/head'
import { useState } from 'react';

const Home = () => {
  const [cookiesList, setCookiesList] = useState([]);

  const formHandler = (e)=>{
    e.preventDefault();
    let cookie = {
      location : e.target.location.value,
      min : e.target.min.value,
      max : e.target.max.value,
      avg : e.target.avg.value
    }
    setCookiesList([...cookiesList,cookie])
  }

  // const formHandler = (e)=>{
  //     e.preventDefault();
  //     let replies = ['yes', 'no', 'not your business', 'HAHAHAHA!!', 'maybe another time!', 'ASK GOOGLE!'];
  //     const randomReply = replies[Math.floor(Math.random()* replies.length)];
  //     let answer ={
  //       question:e.target.question.value,
  //       id:answersList.length,
  //       reply :randomReply
  //     };
  //     setLatestAnswer(answer.reply)
  //     setAnswersList([...answersList, answer]);
  //     setCounter(answer.id+1);
  // }
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='flex bg-emerald-500 p-5 w-full text-3xl'>
        <h1>Cookie Stand Admin</h1>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <form className='mt-10 bg-emerald-300 rounded-lg w-4/5' onSubmit={formHandler}>
          <div className='p-4 text-xl'>
            <label className=''>Create Cookie Stand</label>
          </div>
          <div className='pb-4 space-x-2'>
            <label className=''>Location</label>
            <input name='location' className='w-11/12' type="text" />
          </div>
          <div className='flex mb-5'>
            <div className=''>
              <label className='px-10'>Minimum Customers Per Hour</label>
              <br />
              <input name='min' className='' type="text" />
            </div>
            <div>
              <label className='px-10'>Maxmimum Customers Per Hour</label>
              <br />
              <input name='max' className='' type="text" />
            </div>
            <div>
              <label className='px-10'>Average Cookies Per Sale</label>
              <br />
              <input name='avg' className='' type="text" />
            </div>
            <div>
              <button type='submit' className='w-full bg-emerald-600 py-3 px-11 mx-5'>Create</button>
            </div>
          </div>
        </form>

        <p className='pt-5 text-neutral-500'>Report Table Coming Soon...</p>

        <table className='w-1/2 mx-auto my-4'>
          <thead>
            <th className='border border-gray-600'>Location</th>
            <th className='border border-gray-600'>Min Customer</th>
            <th className='border border-gray-600'>Max Customer</th>
            <th className='border border-gray-600'>Avg Cookies</th>
          </thead>
          <tbody>
            {
              cookiesList.map(cookie => {
                return (
                  <tr>
                    <td className='border border-gray-600'>{cookie.location}</td>
                    <td className='border border-gray-600'>{cookie.min}</td>
                    <td className='border border-gray-600'>{cookie.max}</td>
                    <td className='border border-gray-600'>{cookie.avg}</td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </main>

      <footer className="flex justify-between bg-emerald-500 py-2 items-center">
        <a href="" className='m-1'>&copy;2021</a>
      </footer>
    </>
  )
}

export default Home;