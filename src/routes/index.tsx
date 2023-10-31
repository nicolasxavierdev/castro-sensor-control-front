import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageDefault from '../components/PageDefault';
import routes from './routes';


const Router = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element = { <PageDefault /> }>
          {routes.map((item) => (
            <Route {...item} key = {item.path} element = {< item.component />} />
          ))}
        </Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
