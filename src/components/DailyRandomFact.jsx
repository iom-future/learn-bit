
import { useFetch } from '../hooks/useFetch';
 let factOption =  {
    headers: { 'X-Api-Key': "JGMOyff1YcMlwH3ITwuUh3TROrBMalAwpwiSOyrl" }
    
  }
  let factUrl='https://api.api-ninjas.com/v1/facts';

function DailyRandomFact() {

   
  let {data,loading,errorObj} = useFetch(factUrl,factOption)
  if(loading) return ( <div>Polishing a new fact for you...</div> )
  if(errorObj.error) return ( <div>Oops! The knowledge bank is closed, try again</div> )
  return (
    //return the fact
    <div>
        <p className='text-black text-lg text-center'>{data[0].fact}</p>
    </div>
  )
}

export default DailyRandomFact