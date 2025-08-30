
import { Tabs, TabsTrigger } from './ui/tabs'
import { useTypingStore, type TimerOption } from '@/store/typing-store'
import { TabsList } from '@radix-ui/react-tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';

import { Play, RotateCcw } from 'lucide-react';

const ControlPanel = () => {

    const { timerDuration, setTimerDuration, category, startTest, setCategory, status, resetTest } = useTypingStore();

    const categories = ['kafka', 'Dostoevsky'];
    const timerOptions: TimerOption[] = [30, 60, 180];

    const formatTime = (seconds: number) => {
        if (seconds < 60) return `${seconds}s`;
        return `${Math.floor(seconds / 60)}m`;

    }

    const handleStart = () => {

        startTest();


    }
    return (
        <div className='flex flex-col sm:flex-row gap-4 items-center justify-between'>
            <div className='flex flex-col sm:flex-row gap-4 items-center'>

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

                <div className='flex flex-col gap2-2'>

                    {/* category */}
                    <div className="text-sm font-medium">Category</div>
                    <Select
                        value={category}
                        onValueChange={setCategory}
                        disabled={status === 'running'}
                    >
                        <SelectTrigger className="w-[140px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((cat) => (
                                <SelectItem key={cat} value={cat}>
                                    {cat}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className='flex gap-2'>

                {/* handle start test */}
                {status == 'idle' && (
                    <Button onClick={handleStart} className='flex items-center'>
                        <Play className='w-4 h-4' />
                        Start Test



                    </Button>
                )}

                {(status == 'running' || status == 'completed') && (
                    <Button onClick={resetTest} variant="outline" className="flex items-center gap-2">
                        <RotateCcw className="h-4 w-4" />
                        Reset
                    </Button>
                )}


            </div>

        </div>
    )
}

export default ControlPanel