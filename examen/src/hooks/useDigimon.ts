import { useEffect, useState } from "react";
import type{ Digimon } from "../types/digimon";

const useDigimon = () => {
  const [digimon, setDigimon] = useState<Digimon[]>([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const traerDigimon = async () => {
      try {
        const response = await fetch("https://digimon-api.vercel.app/api/digimon");
        const data = await response.json();

        const listadoReal = data.map((p: DigimonApiResponse) => ({
          nombre: p.name,
          imagen: p.img,
          nivel: p.level,
        }));

        setDigimon(listadoReal);
      } catch (error) {
        console.error("Error al traer los Digimon:", error);
      }
    };

    void traerDigimon();
  }, []);

    const digimonFiltrados = digimon.filter((p) =>{
        return p.nombre.toLocaleLowerCase().includes(filtro.toLowerCase());
    })

    console.log(digimonFiltrados);
    return{
        digimon: digimonFiltrados,
        setFiltro
    }

}
export default useDigimon