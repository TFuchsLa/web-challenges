import Chance from "chance";

const chance = new Chance();

export default function handler(req, res) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    gender: chance.gender(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
    profession: chance.profession(),
  };

  res.status(200).json(character);
}
