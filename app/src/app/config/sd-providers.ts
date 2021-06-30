import { SDBaseService } from 'app/n-services/SDBaseService';
//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-tripsOfUser
import { tripsOfUser } from '../sd-services/tripsOfUser';
//CORE_REFERENCE_IMPORT-registerUser
import { registerUser } from '../sd-services/registerUser';

export const sdProviders = [
  SDBaseService,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-tripsOfUser
  tripsOfUser,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-registerUser
  registerUser,
];
