import { Button } from '@/components/ui/button';

import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();
  return (
    <div className=''>LandingPage
    <Button onClick={() => navigate("/typing")}> Start Typing</Button>
    </div>
  )
}

export default LandingPage