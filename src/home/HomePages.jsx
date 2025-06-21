import React, {useState} from 'react'
import {Homes} from "../components/homes/Homes"
import { Upcoming } from '../components/Upcoming/Upcoming';
import {upcome} from "../dummyData"


export const HomePages = () => {
const [items, setitems]=useState(upcome)
  return (
    <>
      <Homes />
      <Upcoming items={items} title='Upcoming Movies' />
    </>
  )
}
export default HomePages