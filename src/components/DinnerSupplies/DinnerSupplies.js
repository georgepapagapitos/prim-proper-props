import SilverWare from '../SilverWare/SilverWare';

function DinnerSupplies({ guestList, count }) {
  return (
    <>
      <h2>Dinner Supplies</h2>
      <SilverWare count={count} guestList={guestList} />
    </>
  );
}

export default DinnerSupplies;
