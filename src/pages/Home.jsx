import backgroundImage from '../assets/images/imageSlider/img2.png';

function Home() {
  return (
    <div 
      className="min-h-screen flex flex-col justify-between bg-center bg-cover bg-opacity-40 p-8" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold tracking-tight text-white mb-4">Cafe Cloud</h1>
        <p className="text-2xl text-white">Where Coffee Dreams Take Flight</p>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-2xl text-white bg-black bg-opacity-50 p-6 rounded-lg prose">
        <p>Welcome to Cafe Cloud, where the enchantment of coffee meets the serenity of the skies. Nestled in the heart of our bustling city, Cafe Cloud is a haven for coffee buffs and dreamers alike. As you step through our doors, you'll be moved to a peaceful space where the aroma of freshly brewed coffee mingles with the comforting embrace of fluffy clouds. Its not just coffee, we know you want to have a quick bite with your coffee and so we have few but lip smacking breakfast in our cafe.</p>
        
        <h2>A Skyward Selection of Coffees</h2>
        <p>Our menu at Cafe Cloud boasts a celestial array of coffee creations, carefully curated to cater to every palate. Whether you're a devout espresso aficionado, a latte lover, or an adventurous spirit seeking the latest coffee trends, our baristas are here to guide you through a journey of aromatic discovery.</p>

        <h2>Cloud-Inspired Ambiance</h2>
        <p>Step into our cafe and be whisked away by the celestial decor. Our interior is adorned with billowing white drapes, evoking the feeling of floating among the clouds. Soft, ambient music will serenade you as you relax in our cozy nooks, perfect for savoring your coffee and losing yourself in contemplation.</p>
      </main>
    </div>
  );
}

export default Home;