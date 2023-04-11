import UseCallBack from './UseCallBack';
import UseContext from './UseContext';
import UseImperativeHandle from './UseImperativeHandle';
import UseLayereffect from './UseLayereffect';
import UseMemo from './UseMemo';
import UseReducer from './UseReducer';
import UseRef from './UseRef';


function App() {

  return (
    <div className="App">
      <UseReducer/>
      <UseRef/>
      <UseLayereffect/>
      <UseImperativeHandle/>
      <UseContext/>
      <UseMemo/>
      <UseCallBack/>
    </div>
  )
}

export default App
