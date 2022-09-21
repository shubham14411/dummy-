
//use navigation in common file
import { createNavigationContainerRef } from '@react-navigation/native';


// add other navigation functions that you need and export them
export const navigationRef = createNavigationContainerRef()


export function navigateFile(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

const timmerInSec=()=>{
  return 360000
}


export {
    
    timmerInSec, 
    
    
};
