import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './components/wrapped-component/Page';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App">
      <Page>
        <Content />
      </Page>
    </div>
  );
}

export default App;
