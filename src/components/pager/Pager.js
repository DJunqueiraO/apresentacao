import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

export function Pager(
        {
            children,
            routes
        }
    ) {
    return(
        <Router>
            {children}
            <div className='App'>
            <Routes>
                {
                    routes.map(($0, index) => <Route key={index} path={$0.path} element={$0.element}/>)
                }
            </Routes>
            </div>
        </Router>
    )
}