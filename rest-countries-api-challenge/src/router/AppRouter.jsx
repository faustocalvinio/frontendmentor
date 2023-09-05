import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homepage } from "../pages/Homepage"
import { CountryPage } from "../pages/CountryPage"

export const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Homepage /> } />
                <Route path="/country/:countryName" element={ <CountryPage /> } /> 
            </Routes>
        </BrowserRouter>
    </>
  )
}
