import React from 'react';
import "./Solicitud.css";
import ListaSolicitudes from './listaSolicitudes';
const Solicitud = () => {

  return (
  <div className="Todo">
    <div className="Fila">
        <div className="Columna">
        <h3 className='Solicitud'>Solicitudes </h3> 

            <div className="SolicitudNueva">




            </div>
        </div>
        <div className="Columna">
        <h3 className='SolicitudEnCurso'>Solicitudes en Curso</h3> 
            <div className="SolicitudesAceptadas">

            </div>
        </div>
        <div className="Columna">
        <h3 className='SolicitudCumplidas'>Solicitudes Cumplidas </h3> 
            <div className="SolicitudesConcluidas ">

            </div>
        </div>
    </div><div className="Fila">
        <div className="Columna">

            <div className="SolicitudNueva">

                <ListaSolicitudes/>

            </div>
        </div>
        <div className="Columna">

            <div className="SolicitudesAceptadas">

            </div>
        </div>
        <div className="Columna">

            <div className="SolicitudesConcluidas ">

            </div>
        </div>
    </div>
</div>
)

}
export default Solicitud;