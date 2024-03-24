
import { TypeAnimation } from 'react-type-animation';
import "./typing.css";
import { useEffect, useState} from 'react';


const ExampleComponent = () => {

  const [timer, setTimer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 1000)
  }, [])
  
    if (timer) {
      return (
        <TypeAnimation className="typing"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'My name is Nathaniel Gonzalez',
            800, // wait 1s before replacing "Mice" with "Hamsters"
            'My name is Nathaniel Gonzalez and I am a devepo',
            800,
            'My name is Nathaniel Gonzalez and I am a devpole',
            900,
            'My name is Nathaniel Gonzalez and I am a developer.',
            1200
          ]}
          wrapper="span"
          speed={70}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={0}
        />
      );
      }
  };

  export default ExampleComponent;