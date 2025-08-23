import { KeyboardIcon } from 'lucide-react'
import { ModeToggle } from './mode-toggle'

const Header = () => {
  return (
    <div className='container mx-auto px-4 py-4 flex items-center justify-between'>

        <div className='flex items-center gap-2'>
            <KeyboardIcon className='h-6 w-6' />
            <h1 className='text-xl'>
                typeVIEW
            </h1>
        </div>

        <ModeToggle />


    </div>
  )
}

export default Header