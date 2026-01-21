
import { useEffect,useState, useRef, useReducer } from 'react';
// Custom hook for fetching data from APIs
import { useFetch } from '../../hooks/useFetch';
// FontAwesome icons for UI elements
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //components
import { faBookmark, faChevronLeft, faChevronRight, faMicrochip, faShareNodes } from '@fortawesome/free-solid-svg-icons';

// API configuration for facts service
let factOption =  {
    headers: { 'X-Api-Key': "JGMOyff1YcMlwH3ITwuUh3TROrBMalAwpwiSOyrl" }

  }
let factUrl='https://api.api-ninjas.com/v1/facts';

// Main component for displaying daily random facts with navigation
function DailyRandomFact() {
  // State to trigger fetching new facts (changes cause API calls)
  const [nextKey, setNextKey] = useState(0);

  // Fetch fact data using custom hook
  // data: the fetched fact array
  // loading: boolean indicating if request is in progress
  // errorObj: error information if request failed
  const { data, loading, errorObj } = useFetch(
    `${factUrl}?t=${nextKey}`,
    factOption
  );

  // Reducer to manage facts state in a predictable way
  // Handles all fact-related state changes: loading facts, navigation, etc.
  const factsReducer = (state, action) => {
    switch (action.type) {
      case 'SET_FIRST_FACT':
        // Initialize with the very first fact loaded
        return {
          previousFacts: [],  // No previous facts yet
          currentFact: action.fact,  // The fact to display
          navigationIndex: 0  // Start navigation at beginning
        };
      case 'SET_NEW_FACT':
        // When a new fact is fetched, move current fact to history
        return {
          previousFacts: [...state.previousFacts, state.currentFact], // Add old current to history
          currentFact: action.fact,  // Set new current fact
          navigationIndex: state.navigationIndex + 1  // Move navigation to new current
        };
      case 'NAVIGATE_PREVIOUS':
        // Move back in the facts history (can't go below 0)
        return {
          ...state,
          navigationIndex: Math.max(0, state.navigationIndex - 1)
        };
      case 'NAVIGATE_NEXT':
        // Move forward in the facts history
        return {
          ...state,
          navigationIndex: state.navigationIndex + 1
        };
      default:
        return state;
    }
  };

  // Initialize facts state with reducer
  const [factsState, dispatchFacts] = useReducer(factsReducer, {
    previousFacts: [],    // Array of previously viewed facts
    currentFact: null,    // The currently displayed fact
    navigationIndex: 0    // Position in navigation (0 to previousFacts.length)
  });

  // Extract state values for easier access
  const { previousFacts, currentFact, navigationIndex } = factsState;

  // Ref to track if this is the first time data is loaded
  const isFirstLoad = useRef(true);

  // Effect to handle data changes from API
  // Updates the facts state whenever new data arrives
  useEffect(()=>{
    console.log(data) // Debug log to see what data we received
    if(data && data.length>0){
      if(isFirstLoad.current) {
        // First time the component loads data - set initial fact
        dispatchFacts({ type: 'SET_FIRST_FACT', fact: data[0].fact });
        isFirstLoad.current = false;
      } else {
        // Subsequent data loads - this means a new fact was fetched
        dispatchFacts({ type: 'SET_NEW_FACT', fact: data[0].fact });
      }
    }
  },[data]) // Only re-run when data changes

  // Handle clicking the next button
  const handleNext = () => {
    if (navigationIndex < previousFacts.length) {
      // If we're viewing a previous fact, move forward in history
      dispatchFacts({ type: 'NAVIGATE_NEXT' });
    } else {
      // If we're at the current fact, fetch a new fact from API
      setNextKey(k => k + 1);
    }
  };

  // Handle clicking the previous button
  const handlePrevious = () => {
    if (navigationIndex > 0) {
      // Move backward in facts history (if not already at the beginning)
      dispatchFacts({ type: 'NAVIGATE_PREVIOUS' });
    }
    // If navigationIndex is 0, we can't go back further
  };

  // Debug log to see the previous facts array
  console.log(previousFacts)

  // Show loading message while fetching data
  if(loading){
    return ( <div>Polishing a new fact for you...</div> )
  }

  // Show error message if API request failed
  if(errorObj.error){
    return ( <div>Oops! The knowledge bank is closed, try again</div> )
  } 
   
  // console.log(previousFacts.at(-1))


  // Main component render
  return (
    // Main container for the fact display
    <div className="fact-article-wrapper flex flex-col pt-3 gap-10 h-full w-full">

      {/* Fact content section */}
      <article className="facts flex flex-col gap-8">

        {/* Display the current fact or navigated fact */}
        <p className='text-black text-lg text-center'>{
          // If navigationIndex is within previousFacts array, show that fact
          // Otherwise, show the current fact
          navigationIndex < previousFacts.length
            ? previousFacts[navigationIndex]
            : currentFact
        }</p>

        {/* Action icons below the fact */}
        <div className="fact-icon-bottom flex justify-around">
          <FontAwesomeIcon icon={faBookmark} className="text-gray-500 text-lg" /> {/* Bookmark icon */}
          <FontAwesomeIcon icon={faShareNodes} className="text-gray-500 text-lg" /> {/* Share icon */}
          <FontAwesomeIcon icon={faMicrochip} className="text-amber-500 text-xl" /> {/* AI/Microchip icon */}
        </div>
      </article>

      {/* Navigation controls */}
      <div className="card-control flex justify-between items-center">
        {/* Previous button - navigate to older facts */}
        <div className="move-left-container flex size-10 items-center justify-center bg-purple-500 hover:shadow-lg shadow-purple-500 rounded-full p-2">
          <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrevious} className="text-lg text-white" />
        </div>

        {/* Next button - navigate to newer facts or fetch new fact */}
        <div className="move-right-container flex size-10 items-center justify-center bg-purple-500 hover:shadow-lg shadow-purple-500 rounded-full p-2">
          <FontAwesomeIcon icon={faChevronRight} onClick={handleNext} className="text-lg text-white" />
        </div>
      </div>

    </div>
  )
}

// Export the component as default
export default DailyRandomFact