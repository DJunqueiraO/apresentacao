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
                    routes
                        .reduce(
                            ($0, $1) => {
                                if($1.element) $0.push($1)
                                return $0
                            },
                            []
                        )
                        .map(
                            ($0, index) => (
                                <Route key={index} path={$0.href} element={$0.element}/>
                            )
                        )
                }
            </Routes>
            </div>
        </Router>
    )
}