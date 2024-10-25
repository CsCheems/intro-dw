import {DatePicker} from 'antd';
import {ConfigProvider} from 'antd';
import LayoutComponent from './Layouts/LayoutComponent';
import './styles/variables.css'
import './App.css'
import ImageLogin from './Components/ImageLogin';
import FormLogin from './Components/FormLogin';

function App() {

  return (
    <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#9F81F7'
        }
      }}>
      <LayoutComponent
        leftColSize={{xs:0, sm:0, md:20, lg:18}}
        rightColSize={{xs:24, sm:24, md:4, lg:6}}
        leftContent={<ImageLogin/>}
        rightContent={<FormLogin/>}
      />
    </ConfigProvider>
      
    </>
  )
}

export default App
