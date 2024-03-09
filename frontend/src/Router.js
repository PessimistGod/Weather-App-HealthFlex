import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import RealtimeWeather from "./Pages/RealtimeWeather";
import WeatherForecast from "./Pages/WeatherForecast";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />}/>
        <Route path="/realtime-weather" element={<RealtimeWeather />} />
        <Route path="/weather-forecast" element={<WeatherForecast />} />

        <Route path="*" element={<NotFound />} />



      </Route>
    )
  );