import { LatLngTuple } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

type Props = {
  center: LatLngTuple;
  markerPosition?: LatLngTuple;
  zoom: number;
  isScroll: boolean;
  style: any;
  markerMessage?: JSX.Element;
}

export const Map = ({
  center = [51.505, -0.09],
  markerPosition = center,
  zoom = 13,
  isScroll = false,
  style = { width: 300, height: 300 },
  markerMessage,
}: Partial<Props> = {}) => (
  <MapContainer center={center} zoom={zoom} scrollWheelZoom={isScroll} style={style}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={markerPosition}>
      <Popup>{markerMessage || `[${markerPosition}]`}</Popup>
    </Marker>
  </MapContainer>
)
