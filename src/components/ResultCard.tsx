import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTypingStore } from '@/store/typing-store';
import { Trophy, Target, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

const ResultCard = () => {
  const { wpm, accuracy, timerDuration, timeLeft, wpmHistory } = useTypingStore();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    // Clean up the event listener
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  const timeTaken = timerDuration - timeLeft;

  const stats = [
    {
      icon: Trophy,
      label: 'WPM',
      value: wpm,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Target,
      label: 'Accuracy',
      value: `${accuracy}%`,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Clock,
      label: 'Time',
      value: `${timeTaken}s`,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  // Define chart colors
  const chartLineColor = '#3b82f6'; // blue-500
  const chartAxisColor = isDarkMode ? '#aaa' : '#555';
  const chartGridColor = isDarkMode ? '#333' : '#ccc';
  const tooltipBgColor = isDarkMode ? '#222' : 'white';
  const tooltipTextColor = isDarkMode ? 'white' : 'black';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Test Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className={`${stat.bgColor} rounded-lg p-4 text-center`}
                >
                  <IconComponent className={`h-6 w-6 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {wpmHistory.length > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-4">WPM Over Time</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={wpmHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke={chartGridColor} />
                    <XAxis 
                      dataKey="time" 
                      stroke={chartAxisColor}
                      label={{ value: 'Time (s)', position: 'insideBottom', offset: -5, fill: chartAxisColor }}
                    />
                    <YAxis 
                      stroke={chartAxisColor}
                      label={{ value: 'WPM', angle: -90, position: 'insideLeft', fill: chartAxisColor }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: tooltipBgColor,
                        border: `1px solid ${chartGridColor}`,
                        borderRadius: '8px',
                        color: tooltipTextColor
                      }}
                      labelStyle={{ color: tooltipTextColor }} // ✅ time label
                      itemStyle={{ color: tooltipTextColor }}  // ✅ "wpm:" + value
                    />
                    <Line 
                      type="monotone" 
                      dataKey="wpm" 
                      stroke={chartLineColor} 
                      strokeWidth={2}
                      dot={{ fill: chartLineColor, strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ResultCard;
