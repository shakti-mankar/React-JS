import Child1 from "./assets/components/child1"
import Child2 from "./assets/components/child2"
import Child3 from "./assets/components/child3"
import demo  from "./assets/components/demo"



function App() {

  return(

    <>
    <h1> this is app page </h1>

    <Child1 name="shakti" city="indore" age="45" contact="98765432" state="Madhya pradesh"/>

    <Child2 course="FSD"  duration="6m"/>


    <Child3 country="India" />

    <demo career="FSD"   />
    
    </>
  )
}

export default App