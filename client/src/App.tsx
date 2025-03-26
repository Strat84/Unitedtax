import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Press from "@/pages/Press";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/press" component={Press} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Use the scroll to top hook
  useScrollToTop();
  
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
