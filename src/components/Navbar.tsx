import SunIcon from '@/components/icons/SunIcon'
import MoonIcon from '@/components/icons/MoonIcon'

export default function Navbar() {
  return (
    <header className="flex items-center gap-2 mb-10">
      <h1 className='text-4xl  font-bold text-white grow'>devfinder</h1>
        <span className='uppercase text-white '>light</span>
        <button>
          <SunIcon className="fill-white" width={25}/>
        </button>
    </header>
  )
}
