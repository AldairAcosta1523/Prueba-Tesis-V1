import Cards from "@/components/Cards";
import Box from "@/components/components-encabezado-pagina/Dash";



export default function About() {
    return (
      <div>
        
        <div className="flex flex-col lg:flex-row bg-white">
          <div className="flex-1">
          <Box name="Preguntas Frecuentes" description="Aqui encontrara respuestas a tus preguntas más comunes." />
                    </div>
        </div>
    {/* Codigo */}
    <Cards></Cards>
      </div>
    );
  }