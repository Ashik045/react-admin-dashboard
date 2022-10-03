import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.module.scss';
import Home from './Components/Home/Home';
import AddNew from './Pages/AddNew/AddNew';
import Detail from './Pages/Detail/Detail';
import Login from './Pages/Login/Login';
import Lists from './Pages/UserLists/UserLists';
// import PageNotFound from './Pages/NotFound';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                        {/* nested routes */}
                        <Route path="users">
                            <Route index element={<Lists />} />
                            <Route path=":userId" element={<Detail />} />
                            <Route path="addnew" element={<AddNew />} />
                        </Route>

                        {/* nested routes */}
                        <Route path="products">
                            <Route index element={<Lists />} />
                            <Route path=":productId" element={<Detail />} />
                            <Route path="addnew" element={<AddNew />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
