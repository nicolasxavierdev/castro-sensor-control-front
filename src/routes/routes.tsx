
import Components from "../pages/Components";
import Dashboard from "../pages/Dashboard";

const routes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
	},
	{
		path: '/components',
		name: 'Components',
		component: Components,
	}
]

export default routes;