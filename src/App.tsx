import React from 'react';
import logo from './logo.svg';


import Button, { ButtonType, ButtonSize} from './components/Button/button'

function App() {
  return (
    <div className="App">
     <Button disabled> Hello </Button>
     <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Hello </Button>
     <Button btnType={ButtonType.Link} href="http://www.baidu.com"> Hello </Button>
     <Button> Hello </Button>
     <Button> Hello </Button>
     <Button> Hello </Button>
    </div>
  );
}

export default App;
