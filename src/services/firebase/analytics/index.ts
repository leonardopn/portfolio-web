import { getAnalytics } from "firebase/analytics";
import firebaseApp from "..";

export const ANALYTICS = getAnalytics(firebaseApp);
