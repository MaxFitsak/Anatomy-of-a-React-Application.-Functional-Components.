import CityInfo from "./components/CityInfo";
import CityGallery from "./components/CityGallery";
import "./App.css";

export default function App() {
  return (
    <main className="container">
      <CityInfo />
      <CityGallery />
    </main>
  );
}