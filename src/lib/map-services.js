export function getMapServices() {
  return [{
    name: 'OpenStreetMap',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  }];
}

export function getMapServiceByName(name, userServices = []) {
  const services = [...getMapServices(), ...userServices];
  return services.find((service) => service.name === name);
}
