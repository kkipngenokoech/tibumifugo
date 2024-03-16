import SymptomsPage from "@/app/components/symptoms";
import { useRouter } from "next/router";
import data from "@/app/components/data.json";


export default function Animal() { 
  const router = useRouter();
  const { name } = router.query;
  if (!name) {
    return null;
  }
   const animalData = data.animals;
   const animalFetched = animalData.find(
     (animal) => animal.name.toLowerCase() === name.toLowerCase()
   );
  console.log(animalFetched);
    return (
      <SymptomsPage animal={animalFetched} />
    );
}