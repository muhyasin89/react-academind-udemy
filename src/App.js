import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: '1234',
      title: 'Toilet Papper',
      amount: 100.000,
      date: new Date(2020, 8, 12)
    },
    {
      id: '5678',
      title: 'Ban Mobil',
      amount: 70.000,
      date: new Date(2020, 8, 12)
    },
    {
      id: '910',
      title: 'Meja Makan',
      amount: 200.000,
      date: new Date(2020, 8, 12)
    },
    {
      id: '101112',
      title: 'Keranjang Baju',
      amount: 50.000,
      date: new Date(2020, 8, 12)
    },
  ]
  return (
    <div>
      <h2>Let Get Started</h2>
      <ExpenseItem expenses={expenses}></ExpenseItem>
    </div>
  );
}

export default App;
