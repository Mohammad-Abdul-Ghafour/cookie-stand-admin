import { useState , useEffect } from 'react';
import CookieStandAdmin from '../component/CookieStandAdmin';
import { hours } from '../data';
import LoginForm from '../component/logInForm';
import axios from 'axios';
import jsonwebtoken from 'jsonwebtoken';

// let avgSale = e.target.avg.value;
const baseUrl = process.env.NEXT_PUBLIC_HOST;
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
  
  useEffect(() => {
    if(token){
      axios.get(creatUrl, config).then(data => {
        console.log(55555, data);
        setCookiesList(data.data)
      });
    }
  },[token])

   
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
    // let cookie = {
    //   location: e.target.location.value,
    //   hourlyArr: hourlyArr,
    // }
    let decodedPayload = jsonwebtoken.decode(token)
    let savedData = {
      location: e.target.location.value,
      hourly_sales: hourlyArr,
      minimum_customers_per_hour: minCustomer,
      maximum_customers_per_hour: maxCustomer,
      average_cookies_per_sale: avgSale,
      owner_id: decodedPayload.user_id
    }
    setCookiesList([...cookiesList, savedData])
    console.log(cookiesList);
    setCounter(counter + 1)
    console.log(decodedPayload);

    axios.post(creatUrl, savedData, config)
  }

  const logInHandler = async (e, credintials) => {
    e.preventDefault();
    await axios.post(tokenUrl, credintials).then(data => {
      setToken(data.data.access)
   
      // config.headers.Authorization = `Bearer ${data.data.access}`
      // console.log(config);
      // x(creatUrl, config)
      
      // setCookiesList([])
    })
  }

  if (!token) return <LoginForm logInHandler={logInHandler} />
  return (

    <CookieStandAdmin counter={counter} formHandler={formHandler} cookiesList={cookiesList} token={token} config={config} />
  )
}

export default Home;