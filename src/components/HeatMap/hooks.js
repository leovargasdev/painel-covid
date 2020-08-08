import { useEffect } from 'react';
import L from 'leaflet';

import { isDomAvailable } from '~/lib/util';
import { getMapServiceByName } from '~/lib/map-services';
import MapService from '~/models/map-service';

const useConfigureLeaflet = () => {
  if (!isDomAvailable()) return;
  // Removendo icone, pois está bugado....
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  });
};

const useMapServices = ({ names = [], services: userServices } = {}) => {
  const services = names.map((name) => getMapServiceByName(name, userServices));

  return services.map((service) => new MapService(service));
};

const useRefEffect = ({ effect, ref = {} }) => {
  useEffect(() => {
    effect(ref.current);
  }, [effect, ref]);
};

export { useRefEffect, useMapServices, useConfigureLeaflet };
