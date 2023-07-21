import "./App.css";
import FormContacto from "./components/FormContacto";
import Titulo from "./components/Titulo";

function App() {
  return (
    <div className="bg-app d-flex flex-column min-vh-100">
      <section className="container">
        <Titulo />
      </section>

      <FormContacto />
      <footer className="py-5 mt-auto bg-dark">
        <h5 className="text-center text-white">
          {" "}
          © Todos los derechos reservados
        </h5>
      </footer>
    </div>
  );
}

export default App;
