import { useState } from 'react';
import CookieStandAdmin from './component/CookieStandAdmin';
import { hours } from '../data';
import LoginForm from './component/logInForm';
import axios from 'axios';
import jsonwebtoken from 'jsonwebtoken';

// let avgSale = e.target.avg.value;
const baseUrl = 'http://127.0.0.1:8000/';
const tokenUrl = baseUrl + 'api/token/';
const creatUrl = baseUrl + 'api/v1/cookie_stands/';

// #jwt.decode(<encoded token>,<secret key>,<algorthm>)
const Home = () => {
  const [cookiesList, setCookiesList] = useState([]);
  const [counter, setCounter] = useState(0)
  const [token, setToken] = useState('');

  const config = {
    headers: { "Authorization": `Bearer ${token}` }
  }

  const getRandomIntInclusive = (min, max) => {
    let min1 = Math.ceil(min);
    let max1 = Math.floor(max);
    return Math.floor(Math.random() * (max1 - min1 + 1) + min1); //The maximum is inclusive and the minimum is inclusive
  }

  const hourlySales = (minCustomer, maxCustomer, avgSale) => {
    let avgCustomer = getRandomIntInclusive(minCustomer, maxCustomer);
    let hour = Math.ceil(avgCustomer * avgSale)
    return hour;
  }

  const formHandler = (e) => {
    e.preventDefault();
    let minCustomer = e.target.min.value;
    let maxCustomer = e.target.max.value;
    let avgSale = e.target.avg.value;
    let hourlyArr = []
    for (let i = 0; i < hours.length; i++) {
      let hourlySale = hourlySales(minCustomer, maxCustomer, avgSale)
      hourlyArr.push(hourlySale)
    }
    console.log(hourlyArr)
    let cookie = {
      location: e.target.location.value,
      hourlyArr: hourlyArr,
    }
    setCookiesList([...cookiesList, cookie])
    console.log(cookiesList);
    setCounter(counter + 1)
    let decodedPayload = jsonwebtoken.decode(token)
    console.log(decodedPayload);
    let savedData = {
      location: cookie.location,
      hourly_sales: cookie.hourlyArr,
      minimum_customers_per_hour: minCustomer,
      maximum_customers_per_hour: maxCustomer,
      average_cookies_per_sale: avgSale,
      owner_id:decodedPayload.user_id
    }

    axios.post(creatUrl,savedData, config)
  }

  const logInHandler = async (e, credintials) => {
    e.preventDefault();
    axios.post(tokenUrl, credintials).then(data => {
      setToken(data.data.access)
    });
    console.log(token)
  }

  if (!token) return <LoginForm logInHandler={logInHandler} />
  return (

    <CookieStandAdmin counter={counter} formHandler={formHandler} cookiesList={cookiesList} token={token} />
  )
}

export default Home;