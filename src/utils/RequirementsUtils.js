import {Components} from "../models/Components";

class RequirementsUtils {

    static getFromFeatures = (features) => {
        return features.reduce((requirements, feature) => {
            RequirementsUtils.getComponentRequirements(feature.requirements, requirements);

            return requirements;
        }, {})
    };

    static getComponentRequirements(componentRequirements, allRequirements, multiplier = 1) {
        let produceHours = 0;

        Object.keys(componentRequirements)
            .forEach(key => {
                console.debug("Requirement produce hours", componentRequirements[key]);

                const component = Components.find(component => component.name === key);

                if (allRequirements[key]) {             
                    allRequirements[key].count = allRequirements[key].count + 1 * multiplier;

                    console.debug("Increased count for requirement", allRequirements[key]);
                } else {
                    allRequirements[key] = {
                        component,
                        count: multiplier !== 1 ? multiplier : componentRequirements[key]
                    }

                    console.debug("Set initial count for requirement", allRequirements[key]);
                }

                if (component.requirements) {
                    allRequirements[key].produceHours = RequirementsUtils.getComponentRequirements(component.requirements,
                         allRequirements, componentRequirements[key])
                } else {
                    allRequirements[key].produceHours = component.produceHours;
                }

                produceHours += allRequirements[key].produceHours;
            });

        console.info('Total hours', produceHours, 'requirements', componentRequirements);

        return produceHours;
    }
}

export default RequirementsUtils;