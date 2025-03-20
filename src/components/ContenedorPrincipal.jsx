import MainPanelContenido from "./MainPanelContenido";
import MenuLateral from "./MenuLateral";

function ContenedorPrincipal() {
  return (
    <div className="main-contenido-principal">
      <MenuLateral />
      <MainPanelContenido />
    </div>
  );
}
export default ContenedorPrincipal;
