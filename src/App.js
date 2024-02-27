import classes from "./App.module.css"
import { LeftComponent } from './components/leftComponent/LeftComponent';
import { NavBar } from './components/navBar/NavBar';
import { RightComponent } from "./components/rightComponent/RightComponent";
import { data, cardData } from "./data"


function App() {
  const cashier = data.cashier


  return (
    <div className={classes.App}>
      <NavBar />
      <div
        className={classes.componentsBlock}
      >
        <LeftComponent data={data} cardData={cardData} />
        <RightComponent cashier={cashier} />
      </div>

    </div>
  );
}

export default App;
