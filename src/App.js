import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'assets/scss/style.scss';

const Landing = lazy(() => import('pages/LandingPage'));

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </Suspense>
  );
}
