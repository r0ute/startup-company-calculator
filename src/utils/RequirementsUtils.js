import { Components } from '../models/Components';

class RequirementsUtils {
    static getFromFeaturesAndRackDevices = (
        features = [],
        rackDevices = []
    ) => {
        return [...features, ...rackDevices].reduce((result, val) => {
            RequirementsUtils._getComponentRequirements(
                val.requirements,
                result
            );

            return result;
        }, {});
    };

    static _getComponentRequirements(
        componentRequirements,
        allRequirements,
        multiplier = 1
    ) {
        let produceHours = 0;

        Object.keys(componentRequirements).forEach(key => {
            const component = Components.find(
                component => component.name === key
            );

            if (allRequirements[key]) {
                allRequirements[key].count +=
                    componentRequirements[key] * multiplier;
            } else {
                allRequirements[key] = {
                    component,
                    count: componentRequirements[key] * multiplier,
                };
            }

            if (component.requirements) {
                allRequirements[
                    key
                ].produceHours = RequirementsUtils._getComponentRequirements(
                    component.requirements,
                    allRequirements,
                    componentRequirements[key]
                );
            } else {
                allRequirements[key].produceHours = component.produceHours;
            }

            produceHours += allRequirements[key].produceHours;
        });

        return produceHours;
    }
}

export default RequirementsUtils;
