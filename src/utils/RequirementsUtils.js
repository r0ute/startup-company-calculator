import {Components} from "../models/Components";

class RequirementsUtils {

    static getFromFeatures = (features) => {
        return features.reduce((requirements, feature) => {
            for (const requirement in feature.requirements) {
                requirements[requirement] = {
                    component: Components.filter(component => component.name === requirement)[0],
                    count: (requirements[requirement] && !isNaN(requirements[requirement].count) ? requirements[requirement].count : 0) + 1,
                }
            }

            return requirements;
        }, {})
    };
}

export default RequirementsUtils;