import Header from './Header.jsx'
  import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
 import Student from './Student.jsx'
 import UserGreeting from './UserGreeting.jsx'
function App() {
  return(
    <>
    <Header/>
     <Food/>
     <Food/>
     <Food/>
     <Footer/>
     <Card/>
<Card/>

     <Button/>

     <Student name="Bikash Dahal" age={23} isStudent={true}/>
     <Student name="Sita Dahal" age={28} isStudent={false}/>
      <Student name="Hari Dahal" age={30} isStudent={false}/> 
      <Student name="Sandy Dahal" age={50} isStudent={true}/> 


<UserGreeting isloggedIn={true} username="Bikash Dahal"/>
    </>
    
  );
}

export default App
