import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import BackToTop from './components/BackToTop';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const OurTeams = React.lazy(() => import('./pages/OurTeams'));
const Tryouts = React.lazy(() => import('./pages/Tryouts'));
const CozyFeet = React.lazy(() => import('./pages/CozyFeet'));
const USTCares = React.lazy(() => import('./pages/USTCares'));
const OurStaff = React.lazy(() => import('./pages/OurStaff'));
const CampsClinics = React.lazy(() => import('./pages/CampsClinics'));
const IndoorFacilities = React.lazy(() => import('./pages/IndoorFacilities'));
const OutdoorFacilities = React.lazy(() => import('./pages/OutdoorFacilities'));
const ShopDaza = React.lazy(() => import('./pages/ShopDaza'));
const Sponsors = React.lazy(() => import('./pages/Sponsors'));
const Contact = React.lazy(() => import('./pages/Contact'));
const News = React.lazy(() => import('./pages/News'));
const NewsPost = React.lazy(() => import('./pages/NewsPost'));
const Newsletter = React.lazy(() => import('./pages/Newsletter'));
const Testimonials = React.lazy(() => import('./pages/Testimonials'));
const Events = React.lazy(() => import('./pages/Events'));
const EventDetails = React.lazy(() => import('./pages/EventDetails'));
const EventRegistration = React.lazy(() => import('./pages/EventRegistration'));
const PhotoGallery = React.lazy(() => import('./pages/PhotoGallery'));
const TeamPage = React.lazy(() => import('./pages/TeamPage'));
const Schedule = React.lazy(() => import('./pages/Schedule'));
const WinterSkillClinic = React.lazy(() => import('./pages/WinterSkillClinic'));
const WinterIntramuralTraining = React.lazy(() => import('./pages/WinterIntramuralTraining'));
const FinancialAid = React.lazy(() => import('./pages/FinancialAid'));

// Policy Pages
const Terms = React.lazy(() => import('./pages/Terms'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Disclaimer = React.lazy(() => import('./pages/Disclaimer'));
const CodeOfConduct = React.lazy(() => import('./pages/CodeOfConduct'));

// Camp Pages
const SpringBreakCamp = React.lazy(() => import('./pages/camps/SpringBreakCamp2025'));
const ResidentialCamp = React.lazy(() => import('./pages/camps/ResidentialCamp2025'));
const IntenseSummerCamp = React.lazy(() => import('./pages/camps/IntenseSummer2025'));

// Program Pages
const SpringIntramuralProgram = React.lazy(() => import('./pages/programs/SpringIntramuralProgram'));

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-teams" element={<OurTeams />} />
            <Route path="/tryouts" element={<Tryouts />} />
            <Route path="/cozy-feet" element={<CozyFeet />} />
            <Route path="/ust-cares" element={<USTCares />} />
            <Route path="/our-staff" element={<OurStaff />} />
            <Route path="/camps-clinics" element={<CampsClinics />} />
            <Route path="/indoor-facilities" element={<IndoorFacilities />} />
            <Route path="/outdoor-facilities" element={<OutdoorFacilities />} />
            <Route path="/shop" element={<ShopDaza />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsPost />} />
            <Route path="/newsletters" element={<Newsletter />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/events/:id/register" element={<EventRegistration />} />
            <Route path="/gallery" element={<PhotoGallery />} />
            <Route path="/team/:teamId" element={<TeamPage />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/winter-skill-clinic" element={<WinterSkillClinic />} />
            <Route path="/winter-intramural-training" element={<WinterIntramuralTraining />} />
            <Route path="/financial-aid" element={<FinancialAid />} />
            
            {/* Policy Routes */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/code-of-conduct" element={<CodeOfConduct />} />
            
            {/* Camp Routes */}
            <Route path="/camps/spring-break-2025" element={<SpringBreakCamp />} />
            <Route path="/camps/residential-camp-2025" element={<ResidentialCamp />} />
            <Route path="/camps/intense-summer-2025" element={<IntenseSummerCamp />} />
            
            {/* Program Routes */}
            <Route path="/programs/spring-intramural-program" element={<SpringIntramuralProgram />} />
          </Routes>
        </Suspense>
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}
























