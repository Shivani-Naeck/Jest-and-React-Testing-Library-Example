import './App.css';
import './styles.css';
import dataTesting from './testData.json';

function App() {
  return (
     <div className='container' data-testid = "test-container">
      <div className='sub-top'>
         <img src={dataTesting.url} alt='banner-image' className='pic'  data-testid = "img-pic"/>
      </div>

      <div className='sub-bottom'>
        <h2 className='p-content' data-testid = "title-test">{dataTesting.title}</h2>
        <h5 className='p-content' data-testid = "subtitle-test">{dataTesting.subtitle}</h5>
      </div>
     </div>
  );
}

export default App;
