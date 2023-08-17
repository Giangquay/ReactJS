// import logo from './logo.svg';
import './App.css';
import Layout  from './components/layout'
import Button from './components/button';
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
        <main style={{
          width: "100%",
          height: "500px",
          backgroundColor: "violet",
        }}>
          <Button
            icon={<i class="fa-brands fa-apple fa-xl" />}
            name="Continue with Apple"
            classes="bg-black"
          />
        </main>
      </Layout>
    </div>
  );
}

export default App;
