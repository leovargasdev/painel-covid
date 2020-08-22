import React, { useState, memo } from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';

import Map from './Map';
import mapChapeco from '../../../geomap.json';
import mapOeste from '../../../geomapOeste.json';
import { Container, ContainerMap, Notas } from './styles';

let VAR_GLOBAL = 0;
const linkPlanoDiretor = 'https://static.fecam.net.br/uploads/1536/imagens/1377226.jpg';
const linkDados = 'https://docs.google.com/spreadsheets/d/1yb_08OcZg9D1eksyLWAYiFOeAxQl0pQb70SKxHfLPNA/edit#gid=0';
const colors = ['#dedede', '#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'];

const HeatMap = ({ lat, lng, zoom, data: casesLocation }) => {
  const [map, setMap] = useState(null);
  let info;
  const VAR_LOCATION = zoom === 12 ? 'xap' : 'oeste';
  VAR_GLOBAL += 1;

  function highlightFeature(e) {
    const layer = e.target;

    layer.setStyle({
      weight: 3,
      color: '#333',
      dashArray: '',
      fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
    info.update(layer.feature.properties);
  }

  const zoomToFeature = (e) => map.fitBounds(e.target.getBounds());

  const handleBoxInfo = () => {
    info = L.control();
    info.onAdd = () => {
      info._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
      info.update();
      return info._div;
    };
    info.update = (props) => {
      if (props) {
        const { cases } = props.id < 100 ? casesLocation[props.id] : { cases: 0 };
        info._div.innerHTML = ` <p>${props.name}</p><span>Casos Confirmados: ${cases}</span>`;
      } else {
        const typeLocation = VAR_LOCATION === 'xap' ? 'Bairro' : 'Município';
        info._div.innerHTML = `Selecione um ${typeLocation} para obter informações`;
      }
    };
    info.addTo(map);
  };

  function getColor({ id }) {
    const { cases } = id < 100 ? casesLocation[id] : { cases: 0 };
    if (cases === 0) return colors[0];
    if (cases < 10) return colors[1];
    if (cases < 25) return colors[2];
    if (cases < 40) return colors[3];
    if (cases < 55) return colors[4];
    if (cases < 70) return colors[5];
    if (cases < 85) return colors[6];
    if (cases < 100) return colors[7];
    return colors[8];
  }

  const style = (feature) => ({
    fillColor: getColor(feature.properties),
    weight: 2,
    opacity: 1,
    color: '#fafaff',
    dashArray: '5',
    fillOpacity: 0.9
  });

  async function mapEffect({ leafletElement } = {}) {
    setMap(leafletElement);
    if (!map) return;
    const mapboxAccessToken = 'pk.eyJ1IjoibGV1dmFyZ2FzIiwiYSI6ImNrYThzbGN2ejBqdmoyc3VsanRuYTJ0NXoifQ.11fbYTjxJIX4wyxb-IVr8A';

    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`, {
      id: 'mapbox/light-v9',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(map);

    if (VAR_GLOBAL === 2) {
      if (!info) handleBoxInfo();

      const geojson = L.geoJson(VAR_LOCATION === 'xap' ? mapChapeco : mapOeste, {
        style,
        onEachFeature(feature, layer) {
          layer.on({
            mouseover: highlightFeature,
            mouseout: function resetHighlight(e) {
              geojson.resetStyle(e.target);
              info.update();
            },
            click: function handleClick(e) {
              zoomToFeature(e);
              highlightFeature(e);
            }
          });
        }
      }).addTo(map);

      const legend = L.control({ position: 'bottomleft' });

      legend.onAdd = () => {
        const div = L.DomUtil.create('div', 'info legend');
        const grades = [0, 1, 10, 25, 40, 55, 70, 85, 100];

        colors.forEach((color, index) => {
          const texto = !index ? '0 casos' : grades[index + 1] ? `${grades[index]} - ${grades[index + 1]} casos` : `+ ${grades[index]} casos`;
          div.innerHTML += `<i style="background:${color}"></i> ${texto} <br>`;
        });
        return div;
      };

      await legend.addTo(map);
    }
  }

  return (
    <Container>
      <h3>Mapa de Calor: Acumulado de casos confirmados por localidade</h3>
      <ContainerMap>
        {
          typeof window !== 'undefined'
          && <Map className="location" center={[lat, lng]} zoom={zoom} defaultBaseMap="OpenStreetMap" mapEffect={mapEffect} />
        }
      </ContainerMap>
      {VAR_LOCATION === 'xap' && (
        <Notas>
          <h6>Notas</h6>
          <ul>
            <li>Dados referentes à data 21/08/2020</li>
            <li>
              Para o mapeamento dos bairros foi usado o <a href={linkPlanoDiretor} target="_new">plano diretor</a> de 2014.
            </li>
            <li>
              Os dados das regiões Alta Floresta e Jardim do Lago foram considerados
              perímetro do bairro Efapi.
            </li>
            <li>
              Todos os dados usados para alimentar o mapa foram extraídos desta <a href={linkDados} target="_new">planilha</a> fornecida pela prefeitura.
            </li>
          </ul>
        </Notas>
      )}
    </Container>
  );
};

HeatMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default memo(HeatMap);
