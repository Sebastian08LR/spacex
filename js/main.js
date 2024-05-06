import { getAllRockets } from "./modules/rockets.js";
import { rocketGeneralInformation } from "./modulesComponents/content.js";
import { 
    progressRocketWeight, 
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket
} from "./modulesComponents/progressBar.js";


let information__2 = document.querySelector("#information__2");
let dataRockets = await getAllRockets();
let Totales = dataRockets.pop()

let [Rockets1, Rockets2, Rockets3, Rockets4] = dataRockets; 

console.log(dataRockets);
console.log(Totales);

information__2.append(...progressRocketWeight(Totales.kg_max, Rockets4))
information__2.append(...progressPayloadWeights(Totales.payload_weights, Rockets4))
information__2.append(...progressHeightRocket(Totales.height, Rockets4))
information__2.append(...progressDiameterRocket(Totales.diameter, Rockets4))
information__2.append(...progressSecondStageDiameterRocket(Totales.composite_diameter, Rockets4))
information__2.append(...progressSecondStageHeightRocket(Totales.composite_height, Rockets4))

information__1.innerHTML = rocketGeneralInformation([Rockets4]); // Pasamos un array con un solo cohete