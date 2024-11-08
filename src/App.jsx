import {ConfigProvider} from 'antd';
import './styles/variables.css'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './pages/Routes';


function App() {

  return (
    <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#9F81F7'
        }
      }}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ConfigProvider>
      
    </>
  )
}

export default App
