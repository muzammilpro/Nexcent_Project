import Image from 'next/image'
import Header from './(Components)/Header/Header'
import OurClients from './(Components)/OurClients/OurClients'
import Membership from './(Components)/Membership/Membership'

export default function Home() {
  return (
 <>
 <Header/>
 <OurClients/> <br />
 <Membership/>

 </>
  )
}
