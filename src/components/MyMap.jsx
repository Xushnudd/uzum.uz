import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Muhim: Marker ikonkalari ba'zan React-da yo'qolib qoladi, 
// uni to'g'rilash uchun quyidagi importlarni qo'shish kerak bo'lishi mumkin
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

function MyMap({ width = "100%", height = "100%", latitude, longitude }) {
    const position = [latitude, longitude];

    return (
        // Dinamik o'lchamlar uchun style ishlatamiz
        <div style={{ width: width, height: height }}>
            <MapContainer 
                center={position} 
                zoom={13} 
                scrollWheelZoom={false} 
                style={{ height: "100%", width: "100%" }} // Xarita konteynerni to'ldirishi kerak
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Belgilangan manzil.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default MyMap;