import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayOut from "../../layouts/MainLayOut";
import Home from "../../pages/Home";
import { useEffect, useState } from "react";
import NotFound from "../../pages/NotFound";
import axios from "axios";

  const App = () => {
    const [baza, setBaza] = useState([]),
          [data, setData] = useState(),
          [loading, setLoading] = useState(true)
    useEffect(() => {
      axios.get('https://raw.githubusercontent.com/RasulDevv/oxusData/master/data.json')
        .then(d => setData(d.data.data))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, []);

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayOut />}>
            <Route index element={<Home baza={baza} setBaza={setBaza} data={data} loading={loading} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }

export default App