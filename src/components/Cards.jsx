'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardHeader, 
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import CardShop from './CardShop';

const handleAddToCart = (character) => {
  CardShop.addToCart(character);
}

function Cards() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const apiUrl = 'https://rickandmortyapi.com/api/character';

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setCharacters(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <div className='flex flex-wrap justify-center bg-white bg-gradient-to-r from-white via-gray-100 to-gray-300'>
    {characters.map((character) => (
          <Card key={character.id} className="w-96 mt-16 mb-16 mr-10 ml-10" >
          <CardHeader shadow={false} floated={false} className="h-96"> 
            <img
              src={character.image}
              alt="card-image"
              className="h-full w-full object-cover"
              
            />
          </CardHeader>

          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {character.name}
              </Typography>
              <Typography color="blue-gray" className="font-medium"> 
                {character.species}
              </Typography>
            </div>

            <Typography variant="small" color="gray" className="font-normal opacity-75">
              {character.origin.name}
            </Typography>
          </CardBody>
        
          <CardFooter className="pt-0">
            <Button onClick={() => handleAddToCart(character, addToCart)} ripple={false} fullWidth={true} className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100" >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
