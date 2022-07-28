import Formulario from "../components/Formulario.jsx"
import Resultado from "./Resultado.jsx"
import Loading from "./Loading.jsx"
import useClima from "../hooks/UseClima.jsx"

const AppClima = () => {

  const { resultado, cargando, noResultado} = useClima()

  return (
    <>
    
    <main className="dos-columnas">
        <Formulario />

        { 
        cargando ? <Loading /> :
        resultado?.name ? <Resultado /> :
        noResultado ? <p>{noResultado}</p>
        : <p>El clima se va a mostrar aqui</p>
        }
    </main>
    
    </>
  )
}

export default AppClima