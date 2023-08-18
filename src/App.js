// import logo from './logo.svg';
import './App.css';
import Layout  from './components/layout'
import Button from './components/button';
import CardList from './components/cardlist'
function App() {
  return (
    <div className="App" >
      {/* <header className="App-header" style={{width:"100%",height:"200px",backgroundColor:"#D5FFD0"}}>
        Header
      </header> */}
      <Layout 
      headerTitle="Xin chao day la header" 
      footerTitle="Xin chao day la footer"
      >
        <main className='container'>
        <CardList title="Nhân viên xuất sắc" />
        </main>
      </Layout>
    </div>
  );
}

export default App;
