import { Route, RouteProps, BrowserRouter, BrowserRouterProps, Routes } from 'react-router-dom'

type PagerProps = BrowserRouterProps & {
    routes: RouteProps[]
}

export function Pager(props: PagerProps) {

    return(
        <BrowserRouter
            {...props}>
            {props.children}
            <div className='App'>
            <Routes>
                {
                    props.routes
                        .reduce(
                            (
                                $0: RouteProps[], 
                                $1: RouteProps                           
                            ) => {
                                if($1.element) $0.push($1)
                                return $0
                            },
                            []
                        )
                        .map(
                            ($0, index) => (
                                <Route key={index} path={$0.path} element={$0.element}/>
                            )
                        )
                }
            </Routes>
            </div>
        </BrowserRouter>
    )
}