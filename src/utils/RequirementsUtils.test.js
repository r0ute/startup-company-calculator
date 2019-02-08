import RequirementsUtils from './RequirementsUtils'
import {FeatureNames, Features} from "../models/Features";
import {ComponentNames, Components} from "../models/Components";

it('should get requirements: {UiComponent: 1, BackendComponent: 1, BlueprintComponent: 1, GraphicsComponent: 1} from FeatureNames.LandingPage', () => {
    const requirements = RequirementsUtils.getFromFeatures(Features.filter(feat => feat.name === FeatureNames.LandingPage));

    expect(requirements).toEqual({
        [ComponentNames.UiComponent]: {
            component: Components.find(cmp => cmp.name === ComponentNames.UiComponent),
            count: 1,
        },
        [ComponentNames.BackendComponent]: {
            component: Components.find(cmp => cmp.name === ComponentNames.BackendComponent),
            count: 1,
        },
        [ComponentNames.BlueprintComponent]: {
            component: Components.find(cmp => cmp.name === ComponentNames.BlueprintComponent),
            count: 1,
        },
        [ComponentNames.GraphicsComponent]: {
            component: Components.find(cmp => cmp.name === ComponentNames.GraphicsComponent),
            count: 1,
        },
    })

});