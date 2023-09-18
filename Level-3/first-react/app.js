function MyApp() {
  return <h1>Hello, everyone!</h1>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);

// ReactDOM.render(<p>Hi, my name is Kevin!</p>, document.getElementById("root"))