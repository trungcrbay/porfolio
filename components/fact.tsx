const RandomFact = () => {
  return (
    <div className="grid 2xl:grid-cols-12 mt-12 text-white">
      <div className="col-span-6 sm:col-span-12">
        <img src="random_fact.png" />
      </div>
      <div className="col-span-6 mt-10 sm:col-span-12 sm:text-base mb-6">
        <p className="text-4xl">Random facts</p>
        <ul className="flex flex-col gap-4 mt-4">
          <li>I drink a lot of coffee</li>
          <li>I love football</li>
          <li>I'm a bit of a clean freak</li>
          <li>I love jogging</li>
          <li>I'm a huge fan of Real Madrid F.C.</li>
          <li>My favourite idol is Cristiano Ronaldo</li>
        </ul>
      </div>
    </div>
  );
};

export default RandomFact;
