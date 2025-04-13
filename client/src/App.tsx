import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Academics from "@/pages/Academics";
import NewsEvents from "@/pages/NewsEvents";
import Admissions from "@/pages/Admissions";
import Contact from "@/pages/Contact";
import Layout from "@/components/Layout";

// Specific detail pages
import NewsDetail from "@/pages/NewsDetail";
import AcademicProgram from "@/pages/AcademicProgram";
import CampusDetail from "@/pages/CampusDetail";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/academics" component={Academics} />
        <Route path="/academics/:program" component={AcademicProgram} />
        <Route path="/news-events" component={NewsEvents} />
        <Route path="/news-events/:slug" component={NewsDetail} />
        <Route path="/admissions" component={Admissions} />
        <Route path="/contact" component={Contact} />
        <Route path="/campuses/:campus" component={CampusDetail} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
