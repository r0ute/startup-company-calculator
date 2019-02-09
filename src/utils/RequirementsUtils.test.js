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

it('should get requirements: {requirements: {FrontendModule: 1, StorageModule: 1, NetworkComponent: 1} from FeatureNames.VideoFunctionality', () => {

    // name: ComponentNames.FrontendModule,
    // requirements: {UiComponent: 1, InterfaceModule: 1}

    // name: ComponentNames.InterfaceModule,
    // requirements: {BlueprintComponent: 1, WireframeComponent: 1, GraphicsComponent: 1}

    // name: ComponentNames.StorageModule,
    // requirements: {FilesystemComponent: 1, BackendComponent: 1}

    const requirements = RequirementsUtils.getFromFeatures(Features.filter(feat => feat.name === FeatureNames.VideoFunctionality));

    expect(requirements).toEqual({
        [ComponentNames.FrontendModule]: {
            component: Components.find(cmp => cmp.name === ComponentNames.FrontendModule),
            count: 1,
        },
        [ComponentNames.InterfaceModule]: {
            component: Components.find(cmp => cmp.name === ComponentNames.InterfaceModule),
            count: 1,
        },
        [ComponentNames.StorageModule]: {
            component: Components.find(cmp => cmp.name === ComponentNames.StorageModule),
            count: 1,
        },
        [ComponentNames.NetworkComponent]: {
            component: Components.find(cmp => cmp.name === ComponentNames.NetworkComponent),
            count: 1,
        },
        [ComponentNames.UiComponent]: {
            component: Components.find(cmp => cmp.name === ComponentNames.UiComponent),
            count: 1,
        },
        [ComponentNames.BlueprintComponent]: {
            component: Components.find(cmp => cmp.name === ComponentNames.BlueprintComponent),
            count: 1,
        },
        [ComponentNames.WireframeComponent]: {
            component: Components.find(cmp => cmp.name === ComponentNames.WireframeComponent),
            count: 1,
        },
        [ComponentNames.GraphicsComponent]: {
            component: Components.find(cmp => cmp.name === ComponentNames.GraphicsComponent),
            count: 1,
        },
        [ComponentNames.FilesystemComponent]: {
            component: Components.find(cmp => cmp.name === ComponentNames.FilesystemComponent),
            count: 1,
        },
        [ComponentNames.BackendComponent]: {
            component: Components.find(cmp => cmp.name === ComponentNames.BackendComponent),
            count: 1,
        },
    })

});