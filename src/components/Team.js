import React from 'react';
import pol from "../rsc/team/pol.jpg";
import angels from "../rsc/team/angels.jpg";
import elena from "../rsc/team/helena.jpg";
import monica from "../rsc/team/monica.jpg";
import toni from "../rsc/team/toni.jpg";
import anastasia from "../rsc/team/anastasia.jpg";
import angelica from "../rsc/team/angelica.jpg";
import olga from "../rsc/team/olga.jpg";
import carla from "../rsc/team/carla.jpg";
import maxi from "../rsc/team/maxi.jpg";
import tamara from "../rsc/team/tamara.jpg"
import xalsui from "../rsc/team/xalsui.jpg"

export default class Team extends React.Component {


  render() {
    return (
      <div className="content">

        <div className="app team">
          <div className="memberRow">
            <div className="member">
              <div className="portraitWrapper">
                <img className="teamImage" src={pol} />
              </div>
              <h2>Pol</h2>
              <p>Director</p>
            </div>
            <div className="member">
              <div className="portraitWrapper">
                <img className="teamImage" src={angels} />
              </div>
              <h2>Angels</h2>
              <p>Administración y coordinación</p>
            </div>
            <div className="member">
              <div className="portraitWrapper">
                <img className="teamImage" src={toni} />
              </div>
              <h2>Toni</h2>
              <p>Departamento Ventas</p>
            </div>
            <div className="member">
              <div className="portraitWrapper">
                <img className="teamImage" src={anastasia} />
              </div>
              <h2>Anastasia</h2>
              <p>Departamento Ventas</p>
            </div>
   
          <div className="member">
            <div className="portraitWrapper">
              <img className="teamImage" src={elena} />
            </div>
            <h2>Elena</h2>
            <p>Encargada de tienda</p>
          </div>
          <div className="member">
            <div className="portraitWrapper">
              <img className="teamImage" src={angelica} />
            </div>
            <h2>Angélica</h2>
            <p>Contabilidad</p>
          </div>
          <div className="member">
            <div className="portraitWrapper">
              <img className="teamImage" src={monica} />
            </div>
            <h2>Mónica</h2>
            <p>Encargada de Almacén</p>
          </div>
          <div className="member">
            <div className="portraitWrapper">
              <img className="teamImage" src={olga} />
            </div>
            <h2>Olga</h2>
            <p>Marketing</p>
          </div>
          <div className="member">
            <div className="portraitWrapper">
              <img className="teamImage" src={tamara} />
            </div>
            <h2>Tamara</h2>
            <p>Diseño gráfico</p>
          </div>
          <div className="member">
            <div className="portraitWrapper">
              <img className="teamImage" src={maxi} />
            </div>
            <h2>Maxi</h2>
            <p>Fotografía</p>
          </div>
          <div className="member">
            <div className="portraitWrapper">
              <img className="teamImage" src={xalsui} />
            </div>
            <h2>Xalsui</h2>
            <p>RRSS</p>
          </div>
          <div className="member">
            <div className="portraitWrapper">
              <img className="teamImage" src={carla} />
            </div>
            <h2>Carla</h2>
            <p>Web</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
