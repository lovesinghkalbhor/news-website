import React, { useState } from 'react'
import Newsitems from './newsitems2';
// import Newsitems from './newsitems';
// import Newsitems from './newsitemcodeharry';
import Nav from './Nav';
import LoadingBar from 'react-top-loading-bar'
import ISO6391 from 'iso-639-1';
import {Route,Routes} from "react-router-dom";

const Home= () => {

    const [progress, setProgress] = useState(0)
    // const [use, setuse] = useState(0)

    let setProg = (prog)=> {
         setProgress(prog)
    }
    return (<>
     <LoadingBar
        color='linear-gradient(324deg, rgba(8,115,255,1) 0%, rgba(95,241,255,1) 100%)'
        progress={progress}
        height="8px"
        style={{borderRadius:'5rem'}}
      />
    
        <Nav />

        <Routes>
            <Route exact  path="/" element={
                <Newsitems setprogress={setProg} key="general" category="general" country="in" />}>
            </Route>


            <Route exact  path="/business" element={
                <Newsitems  setprogress={setProg} key="business" category="business" country="in" />}>
                {/* {!use && setuse(1)} */}
            </Route>

            <Route exact  path="/entertainment" element={
                <Newsitems setprogress={setProg} key="entertainment" category="entertainment" country="in" />}>
            </Route>

            <Route exact  path="/general" element={
                <Newsitems setprogress={setProg} key="general" category="general" country="in" />}>
            </Route>

            <Route exact  path="/health" element={
                <Newsitems setprogress={setProg} key="health" category="health" country="in" />}>
            </Route>

            <Route exact  path="/science" element={
                <Newsitems setprogress={setProg} key="science" category="science" country="in" />}>
            </Route>

            <Route exact  path="/sports" element={
                <Newsitems setprogress={setProg} key="sports" category="sports" country="in" />}>
            </Route>

            <Route exact  path="/technology" element={
                <Newsitems setprogress={setProg} key="technology" category="technology" country="in" />}>
            </Route>


        </Routes>
    </>)


}
export default Home




