import React from 'react'
import { Tabs } from './ui/tabs'

const ControlPanel = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-4 items-center'>
        <div>

            <div>

                {/* timer */}
                <div>Timer</div>
                <Tabs
                    
                >

                </Tabs>
            </div>

            <div>

                {/* category */}
            </div>
        </div>

        <div>

            {/* handle start test */}
        </div>

    </div>
  )
}

export default ControlPanel