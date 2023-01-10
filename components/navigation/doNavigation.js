import { handlingErrorAsync } from "../../hof/index.js";
import { createNavigation } from "./index.js";

const doNavigation = async (dataArray) => {
  const navigation = createNavigation();
  const command = dataArray[0];
  await navigation[command](dataArray);
};

export default handlingErrorAsync(doNavigation);
