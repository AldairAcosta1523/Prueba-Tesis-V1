import Box from "@/components/components-encabezado-pagina/Dash";
import Section1About from "@/components/components-about/Section1About";
import Section2About from "@/components/components-about/Section2About";
import Section3About from "@/components/components-about/Section3About";
import Section4About from "@/components/components-about/Section4About";
import Section5About from "@/components/components-about/Section5About";
import Section6About from "@/components/components-about/Section6About";

export default function About() {
    return (
      <div>
        
        <div className="flex flex-col lg:flex-row bg-white">
          <div className="flex-1">
          <Box name="Acerca de nosotros" description="Bienvenidos a nuestra tienda en línea, conoce un poco mas de nosotros." />
          </div>
        </div>
        <Section1About></Section1About>
        <Section2About></Section2About>
        <Section3About></Section3About>
        <Section4About></Section4About>
        <Section5About></Section5About>
        <Section6About></Section6About>
      </div>
    );
  }