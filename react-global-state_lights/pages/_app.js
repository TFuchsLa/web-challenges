import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  // Definiere die initiale Liste der Lichter mit einem id, name und isOn-Wert
  const initialLights = [
    { id: "1", name: "Living Room", isOn: false },
    { id: "2", name: "Kitchen", isOn: false },
    { id: "3", name: "Bedroom", isOn: false },
    { id: "4", name: "Bathroom", isOn: false },
    { id: "5", name: "Garage", isOn: false },
    { id: "6", name: "Porch", isOn: false },
    { id: "7", name: "Garden", isOn: false },
    { id: "8", name: "Office", isOn: false },
  ];

  // Verwende useState, um den Status der Lichter zu speichern
  const [lights, setLights] = useState(initialLights);

  // Funktion, um den Status eines spezifischen Lichts umzuschalten
  const toggleLight = (id) => {
    setLights((prevLights) =>
      prevLights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  };

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} lights={lights} toggleLight={toggleLight} />
    </Layout>
  );
}
