import RequirementsUtils from './RequirementsUtils'
import {FeatureNames, Features} from "../models/Features";
import {ComponentNames, Components} from "../models/Components";

describe('getting requirements', () => {

    it('should get requirements: {UiComponent: 1, BackendComponent: 1, BlueprintComponent: 1, GraphicsComponent: 1} from FeatureNames.LandingPage', () => {
        const requirements = RequirementsUtils.getFromFeatures(Features.filter(feat => feat.name === FeatureNames.LandingPage));

        expect(requirements).toEqual({
            [ComponentNames.UiComponent]: {
                component: Components.find(cmp => cmp.name === ComponentNames.UiComponent),
                count: 1,
                produceHours: 2,
            },
            [ComponentNames.BackendComponent]: {
                component: Components.find(cmp => cmp.name === ComponentNames.BackendComponent),
                count: 1,
                produceHours: 4,
            },
            [ComponentNames.BlueprintComponent]: {
                component: Components.find(cmp => cmp.name === ComponentNames.BlueprintComponent),
                count: 1,
                produceHours: 2,
            },
            [ComponentNames.GraphicsComponent]: {
                component: Components.find(cmp => cmp.name === ComponentNames.GraphicsComponent),
                count: 1,
                produceHours: 4,
            },
        })

    });

    it('should get requirements: {requirements: {BackendModule: 3, InputModule: 3} from FeatureNames.CommentFunctionality', () => {

        // name: ComponentNames.BackendModule,
        // requirements: {BackendComponent: 1, NetworkComponent: 1}

        // name: ComponentNames.InputModule,
        // requirements: {UiComponent: 1, BackendComponent: 1}

        const requirements = RequirementsUtils.getFromFeatures(Features.filter(feat => feat.name === FeatureNames.CommentFunctionality));

        expect(requirements).toEqual({
            [ComponentNames.BackendComponent]: {
                component: Components.find(cmp => cmp.name === ComponentNames.BackendComponent),
                count: 2,
                produceHours: 4,
            },
            [ComponentNames.UiComponent]: {
                component: Components.find(cmp => cmp.name === ComponentNames.UiComponent),
                count: 1,
                produceHours: 2,
            },
            [ComponentNames.NetworkComponent]: {
                component: Components.find(cmp => cmp.name === ComponentNames.NetworkComponent),
                count: 1,
                produceHours: 6,
            },
            [ComponentNames.BackendModule]: {
                component: Components.find(cmp => cmp.name === ComponentNames.BackendModule),
                count: 1,
                produceHours: 10,
            },
            [ComponentNames.InputModule]: {
                component: Components.find(cmp => cmp.name === ComponentNames.InputModule),
                count: 1,
                produceHours: 6,
            },
        })

    });

});