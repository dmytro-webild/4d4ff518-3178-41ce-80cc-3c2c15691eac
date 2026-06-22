import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesRevealCards from '@/components/sections/features/FeaturesRevealCards';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBillboardTiltedCarousel from '@/components/sections/hero/HeroBillboardTiltedCarousel';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import { Calendar, Layout, Search, Smartphone } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardTiltedCarousel
      tag="Modern Digital Growth"
      title="Professional Websites That Help Local Businesses Grow"
      description="We build modern websites that help local businesses attract more customers, increase credibility, and generate more leads online."
      primaryButton={{
        text: "Get Your Free Website Preview",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Book A Consultation",
        href: "#contact",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/manager-watches-tablet-with-greenscreen_482257-76577.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/homemade-recipe-food-nutrition-appetite_53876-133764.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-psd/gradient-car-wash-instagram-stories_23-2151284860.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-selfcare-products_23-2149313012.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/import-export-shipment-truck-graphic-concept_53876-124866.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/color-palette-laptop-home-renovation_23-2148814354.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
      tag="Why Your Business Needs A Better Site"
      title="Digital Credibility Matters"
      description="Don't lose customers because of an outdated website. Convert visitors into loyal clients."
      metrics={[
        {
          value: "75%",
          title: "Credibility Judge",
          description: "Consumers judge your business based on your website's professional appeal.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-studying-infographics-performance-metrics_482257-122632.jpg",
        },
        {
          value: "88%",
          title: "Poor Experience",
          description: "Users are significantly less likely to return to a site with a bad user experience.",
          imageSrc: "http://img.b2bpic.net/free-photo/office-with-face-mask-disinfectant_23-2148727697.jpg",
        },
        {
          value: "High",
          title: "Growth Engine",
          description: "Strong online presence generates significantly more leads and revenue consistently.",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-office-cleaning-process_23-2149343041.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <AboutFeaturesSplit
      tag="Our Expertise"
      title="Everything You Need To Grow"
      description="Comprehensive web solutions tailored to local service businesses. We handle the technology so you can focus on your craft."
      items={[
        {
          icon: Layout,
          title: "Website Design",
          description: "Custom designs built for your specific industry.",
        },
        {
          icon: Smartphone,
          title: "Mobile Optimization",
          description: "Your site will look and perform great on all mobile devices.",
        },
        {
          icon: Calendar,
          title: "Booking Integration",
          description: "Allow your customers to book appointments directly online.",
        },
        {
          icon: Search,
          title: "Growth Consulting",
          description: "Expert advice on how to turn your site into a lead magnet.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/aerial-view-food-breakfast-wooden-table_53876-16232.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesRevealCards
      tag="Our Advantage"
      title="Why Choose SC Web Creative"
      description="We are committed to delivering premium quality with a focus on conversion and speed."
      items={[
        {
          title: "Fast Turnaround",
          description: "We prioritize efficiency to get your business up and running quickly.",
          imageSrc: "http://img.b2bpic.net/free-photo/responsive-design-layout-internet-concept_53876-124371.jpg",
        },
        {
          title: "Conversion Focused",
          description: "Every element is crafted to drive lead generation for your business.",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-bearded-man-with-before-hair-wash-hairdressers-salon_613910-14545.jpg",
        },
        {
          title: "Local Focus",
          description: "Dedicated to helping Southern California businesses scale online.",
          imageSrc: "http://img.b2bpic.net/free-photo/building-construction_1122-1179.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="process" data-section="process">
    <SectionErrorBoundary name="process">
          <FeaturesRevealCardsBento
      tag="Simple Workflow"
      title="Our Proven Growth Process"
      description="Get started with your new high-converting website in just four simple steps."
      items={[
        {
          title: "Free Consultation",
          description: "Strategy session to define your goals.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-ai-tech-agency-workspace-providing-custom-software-development-services_482257-120228.jpg",
        },
        {
          title: "Custom Demo",
          description: "See a preview of your modern site.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/business-associates-meeting-using-isolated-chroma-key-display_482257-122860.jpg",
        },
        {
          title: "Feedback & Revision",
          description: "Refining details to your satisfaction.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/isolated-screen-devices-office-desk-employee-editing-documents_482257-126622.jpg",
        },
        {
          title: "Launch & Growth",
          description: "Deploy and start capturing leads.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/hotel-deal-accommodation-lodge-motel-inn-concept_53876-125075.jpg",
        },
        {
          title: "Dedicated Support",
          description: "Ongoing maintenance and updates.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/crop-hands-near-tablet-with-plan_23-2147785623.jpg",
        },
        {
          title: "Performance Tracking",
          description: "Monitor and scale your conversion rates.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/family-showcasing-their-home_23-2151624847.jpg",
        },
        {
          title: "Continuous Scaling",
          description: "Optimizing for peak business revenue.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/showroom-agent-organizing-test-drive-using-mockup-notebook_482257-123977.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="portfolio" data-section="portfolio">
    <SectionErrorBoundary name="portfolio">
          <FeaturesRevealCardsBento
      tag="Our Portfolio"
      title="Designed For Success"
      description="Take a look at some of the premium websites we've built for local clients."
      items={[
        {
          title: "Auto Detailing",
          description: "Lead-focused design.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/car-detailing-concept-man-face-mask-with-orbital-polisher-repair-shop-polishing-orange-suv-car_627829-12604.jpg",
        },
        {
          title: "Local Barbershop",
          description: "Online booking focus.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-combing-beard-stylish-man_23-2147737052.jpg",
        },
        {
          title: "Fine Restaurant",
          description: "Elegant visual showcase.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/business-work-area_1388-82.jpg",
        },
        {
          title: "General Contractor",
          description: "Professional service site.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/blueprint-architect-construction-project-sketch-concept_53876-133821.jpg",
        },
        {
          title: "Real Estate Agent",
          description: "High-trust professional brand.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/young-female-student-studies-upcoming-exams-with-green-screen-library_482257-123243.jpg",
        },
        {
          title: "Local Dentist",
          description: "Appointment booking focus.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/financial-software-ui-pc-screen-apartment-office-desk_482257-122945.jpg",
        },
        {
          title: "Chiropractor",
          description: "Lead-gen optimization.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/specialist-office_1098-14064.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Client Success"
      title="What Our Clients Say"
      description="Helping local businesses achieve real results."
      testimonials={[
        {
          name: "Mike Anderson",
          role: "Restaurant Owner",
          quote: "The new website has brought in more customers than I ever expected. Professional and fast.",
          imageSrc: "http://img.b2bpic.net/free-photo/small-business-manager-his-workshop_23-2149094590.jpg",
        },
        {
          name: "Jason Smith",
          role: "Barbershop Owner",
          quote: "Online bookings have skyrocketed since the launch. My shop is busier than ever.",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman_1098-16876.jpg",
        },
        {
          name: "David Miller",
          role: "General Contractor",
          quote: "The site finally looks professional and establishes trust with new clients instantly.",
          imageSrc: "http://img.b2bpic.net/free-photo/mature-architect-posing-camera_23-2148242990.jpg",
        },
        {
          name: "Dr. Sarah Lee",
          role: "Dental Clinic Owner",
          quote: "SC Web Creative built a site that perfectly reflects my professional service.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-holding-tablet_23-2148934307.jpg",
        },
        {
          name: "Emma Wilson",
          role: "Design Studio Owner",
          quote: "Absolutely top-tier work. The process was seamless and the results are premium.",
          imageSrc: "http://img.b2bpic.net/free-photo/interior-designer-working-out-office_23-2150379234.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Started"
      text="Ready To Grow Your Business Online?"
      primaryButton={{
        text: "Schedule Consultation",
        href: "mailto:Alejandron@scwebcreative.com,seanw@scwebcreative.com",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "mailto:Alejandron@scwebcreative.com,seanw@scwebcreative.com",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
