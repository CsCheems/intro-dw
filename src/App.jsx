import {DatePicker} from 'antd';
import {ConfigProvider} from 'antd';
import './styles/variables.css';
import './App.css';

function App() {

  return (
    <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#9F81F7'
        }
      }}>
      <DatePicker />
    </ConfigProvider>
      
    </>
  )
}

export default App
