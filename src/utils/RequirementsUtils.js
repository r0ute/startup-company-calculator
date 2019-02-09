import {Components} from "../models/Components";

class RequirementsUtils {

    static getFromFeatures = (features) => {
        return features.reduce((requirements, feature) => {
            RequirementsUtils.getComponentRequirements(feature.requirements, requirements);

            return requirements;
        }, {})
    };

    static getComponentRequirements(componentRequirements, allRequirements) {
        let produceHours = 0;

        Object.keys(componentRequirements)
            .forEach(requirement => {
                const component = Components.find(component => component.name === requirement);

                if (allRequirements[requirement]) {
                    allRequirements[requirement].count = allRequirements[requirement].count + 1;
                } else {
                    allRequirements[requirement] = {
                        component,
                        count: 1,
                    }
                }

                if (component.requirements) {
                    allRequirements[requirement].produceHours = RequirementsUtils.getComponentRequirements(component.requirements, allRequirements)
                } else {
                    allRequirements[requirement].produceHours = component.produceHours;
                }

                produceHours += allRequirements[requirement].produceHours;
            });

        return produceHours;
    }
}

export default RequirementsUtils;