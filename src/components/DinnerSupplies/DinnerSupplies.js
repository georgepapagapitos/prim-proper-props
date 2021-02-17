import SilverWare from '../SilverWare/SilverWare';

function DinnerSupplies({ guestList, count }) {
  return (
    <>
      <h2>Dinner Supplies</h2>
      <SilverWare name="Spoons" count={count} guestList={guestList} />
      <SilverWare name="Forks" count={count} guestList={guestList} />
      <SilverWare name="Knives" count={count} guestList={guestList} />
    </>
  );
}

export default DinnerSupplies;
