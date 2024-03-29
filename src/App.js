// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { privateRoutes, publicRoutes } from './routes/routes';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// function App() {
//     return (
//         <Router>
//             <div>
//                 <Routes>
//                     {publicRoutes.map((route, index) => {
//                         const Page = route.component;
//                         let Layout = route.layout;
//                         if (!Layout) {
//                             Layout = React.Fragment;
//                         }
//                         const type = route.type || '';
//                         return (
//                             <Route
//                                 key={index}
//                                 path={route.path}
//                                 element={
//                                     <Layout>
//                                         <Page type={type} />
//                                     </Layout>
//                                 }
//                             ></Route>
//                         );
//                     })}

//                     {privateRoutes.map((route, index) => {
//                         const Page = route.component;
//                         let Layout = route.layout;
//                         if (!Layout) {
//                             Layout = React.Fragment;
//                         }
//                         return (
//                             <Route
//                                 key={index}
//                                 path={route.path}
//                                 element={
//                                     <Layout>
//                                         <Page />
//                                     </Layout>
//                                 }
//                             ></Route>
//                         );
//                     })}
//                 </Routes>
//                 <ScrollToTop />
//             </div>
//         </Router>
//     );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes/routes';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = route.layout;
                        if (!Layout) {
                            Layout = React.Fragment;
                        }
                        const type = route.type || '';
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page type={type} />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}

                    {privateRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = route.layout;
                        if (!Layout) {
                            Layout = React.Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
                <ScrollToTop />
            </div>
        </Router>
    );
}

export default App;
