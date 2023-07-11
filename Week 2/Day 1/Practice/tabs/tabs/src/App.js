import Tabs from "./Components/tabs"
import './App.css';

function App() {
  const tabItems = [
    {
      label: 'Tab 1',
      content: <div>Content for Tab 1</div>
    },
    {
      label: 'Tab 2',
      content: <div>Content for Tab 2</div>
    },
    {
      label: 'Tab 3',
      content: <div>Content for Tab 3</div>
    }
  ];

  return (
    <div className="App">
  return (
    <div>
      <h1>My Tabs</h1>
      <Tabs items={tabItems} />
    </div>
  );
    </div>
  );
}

export default App;
