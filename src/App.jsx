import "./App.css";
import EmailForm from "./components/EmailForm";

const App = () => {
  return (
    <div className="App">
      <h1>Send email from React App using EmailJS</h1>
      <EmailForm />
    </div>
  );
};

export default App;
