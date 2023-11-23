import bananaBreadshiftImage from '../assets/images/menuImages/Banana Breadshift.png'
import cerealImage from '../assets/images/menuImages/CEREAL.png'
import cloudFruitImage from '../assets/images/menuImages/Cloudfruit.png'
import cloudWaterImage from '../assets/images/menuImages/Cloudwater.png'
import dynamochaImage from '../assets/images/menuImages/Dynamocha.png'
import ECTEAImage from '../assets/images/menuImages/ECTEA.png'
import ElasticakeImage from '../assets/images/menuImages/Elasticake.png'
import huevosAurorancherosImage from '../assets/images/menuImages/Huevos Aurorancheros.png'
import IampanadasImage from '../assets/images/menuImages/Iampanadas.png'
import LambdutchpuffImage from '../assets/images/menuImages/Lambdutchpuff.png'
import RDEGGSImage from '../assets/images/menuImages/RDEGGS.png'
import S3PRESSOImage from '../assets/images/menuImages/S3PRESSO.png'
import ThanksALatteImage from '../assets/images/menuImages/Thanks-a-Latte.png'

const menuItems = [
  {
    name: 'Banana Breadshift',
    description: 'Made with the softest flour and bananas. A bite of it is what bite of a cloud would probably feel like — fluffy goodness.',
    image: bananaBreadshiftImage
  },
  {
    name: 'VPcereal',
    description: 'A network of berries, muesli, dried fruit and yoghurt chunks collected together in a creamy, cloud-like bowl of milk.',
    image: cerealImage
  },
  {
    name: 'CloudFruit',
    description: 'A mixed bowl of seasonal fruits sustainably grown and delivered to us fresh each morning.',
    image: cloudFruitImage
  },
  {
    name: 'CloudWater',
    description: 'Bored of plain, old tap water. Try out our complimentary offering, made from harvesting fresh rainwater and infusing it with fruity extracts.',
    image: cloudWaterImage
  },
  {
    name: 'Dynamocha',
    description: 'This drink is a blend of our nonrelational delicacies like our organically-sourced coffee, sustainably-produced chocolate and sugar-free marshmallows.',
    image: dynamochaImage
  },
  {
    name: 'ECtea',
    description: 'Choose from our eclectic tea selection. We have tea from diverse availability zones spread across different regions globally.',
    image: ECTEAImage
  },
  {
    name: 'Elasticake',
    description: 'Baked from a special highly elastic, flavour-absorbent batter that lets you savour the recently tasted essences a little bit longer.',
    image: ElasticakeImage
  },
  {
    name: 'Huevos Aurorancheros',
    description: 'This rustic Mexican breakfast staple packs a punch and is made with a secret recipe that is recorded in the relational nature of its ingredients.',
    image: huevosAurorancherosImage
  },
  {
    name: 'IAMpanadas',
    description: 'We have maintained the integrity of this Mexican delicacy, it’s almost as if it were source from Mexico itself using strict security protocols.',
    image: IampanadasImage
  },
  {
    name: 'Lambdutch puff',
    description: 'This specialty of ours will just crumble and dissolve in your mouth. You don’t need to do a thing — it’s almost like it’s eating for you!',
    image: LambdutchpuffImage
  },
  {
    name: 'RDeggs',
    description: 'Each table is assigned a specific egg delicacy. Whatever kind of egg you are searching for, make sure to find the table that is linked to it. Grab your table before someone else does!',
    image: RDEGGSImage
  },
  {
    name: 'S3presso',
    description: 'One shot of our espresso and you’ll have enough energy to jump up and high-five a cloud.',
    image: S3PRESSOImage
  },
  {
    name: 'Translatte',
    description: 'Freshly brewed latte topped with a foamy finish for a delectable experience. Dip your lips in that cloudy foam. Bonus: zero trans fats!',
    image: ThanksALatteImage
  },
];

function Menu() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Cafe Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group overflow-hidden rounded-md shadow-lg">
            <img src={item.image} alt={item.name} className="w-full h-56 object-cover transition-transform transform group-hover:scale-105" />
            
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-center px-4">{item.description}</p>
            </div>
            
            <div className="absolute bottom-0 inset-x-0 p-2 bg-black bg-opacity-60">
              <p className="text-white text-center">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;