import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.module.scss';
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home';
import Lists from './Pages/Lists/Lists';
import Login from './Pages/Login/Login';
import New from './Pages/New/New';
// import PageNotFound from './Pages/NotFound';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="users">
                            <Route index element={<Lists />} />
                            <Route path=":userId" element={<Detail />} />
                            <Route path="new" element={<New />} />
                        </Route>

                        <Route path="products">
                            <Route index element={<Lists />} />
                            <Route path=":productId" element={<Detail />} />
                            <Route path="new" element={<New />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
