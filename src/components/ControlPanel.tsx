import React from 'react'
import { Tabs, TabsTrigger } from './ui/tabs'
import { useTypingStore, type TimerOption } from '@/store/typing-store'
import { TabsList } from '@radix-ui/react-tabs';

const ControlPanel = () => {

    const { timerDuration, setTimerDuration, } = useTypingStore();

    const categories = ['kafka', 'Doestovesky'];
    const timerOptions: TimerOption[] = [30, 60, 180];

    const formatTime = (seconds: number) => {
        if (seconds < 60) return `${seconds}s`;
        return `${Math.floor(seconds / 60)}m`;

    }
    return (
        <div className='flex flex-col sm:flex-row gap-4 items-center'>
            <div>

                <div>

                    {/* timer */}
                    <div>Timer</div>
                    <Tabs
                        value={timerDuration.toString()}
                        onValueChange={(value) => setTimerDuration(Number(value) as TimerOption)}

                    >

                        <TabsList className={status === 'running' ? 'pointer-events-none opacity-50' : ''}>
                            {timerOptions.map((time) => (
                                <TabsTrigger key={time} value={time.toString()}>
                                    {formatTime(time)}
                                </TabsTrigger>
                            ))}
                        </TabsList>

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