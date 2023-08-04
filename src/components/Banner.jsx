import { Link } from "react-router-dom"

export const Banner = () => {
  return (
    <div className='banner'>
            <h2 className='text-[72px] w-[500px] font-black leading-none mb-[50px]'>Great coffee made simple.</h2>
            <p className='w-[450px] mb-[70px]'>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
            <Link className='bg-green-300 text-white px-6 py-3 border rounded' to={"/plan"}>Create your plane</Link>
    </div>
  )
}
