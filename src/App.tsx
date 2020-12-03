import React from 'react';


import Button, { ButtonType, ButtonSize} from './components/Button/button'

function App() {
  return (
    <div className="App">
     <Button disabled> Hello </Button>
     <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Hello </Button>
     <Button btnType={ButtonType.Link} target="_blank" href="http://www.baidu.com"> 百度 </Button>
     <Button onClick={(e) => {e.preventDefault(); alert(7)}}> Hello </Button>
    
     <Button autoFocus> autoFocus </Button>
     <Button> Hello </Button>
    </div>
  );
}

export default App;
