import Student from './Student.jsx'

function App() {
  return(
    <>
      <Student name="Aarsh" age="30" isStudent={true}/>
      <Student name="Ben" age={11} isStudent={false}/>
      <Student name="Brandon" age={27} isStudent={true}/>
      <Student name="Jayden" age={43} isStudent={false}/>
      <Student name="Aatman" age={12} isStudent={false}/>
    </>
  );
}

export default App
