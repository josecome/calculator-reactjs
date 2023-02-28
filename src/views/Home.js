import { useState } from 'react';
import Calculator from '../components/Calculator'
import S_Calculator from '../components/Scientific_Calculator'
import Button from '../components/Button'

const Home = () => {
  const [calc, setCalc] = useState(false);
    return (
      <div>
        <Button
          color={'white'}
          text={calc ? 'Standard' : 'Scientific'}
          onClick={() => setCalc(!calc)}
          p={'right'}
        /><br /><br />
        { !calc && <Calculator /> }
        { calc && <S_Calculator /> }
      </div>
    )
} 

export default Home