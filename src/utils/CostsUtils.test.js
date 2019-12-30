import CostsUtils from './CostsUtils'
import {ComponentNames, Components} from "../models/Components";
import Enums from '../models/Enums';

describe('calculating costs', () => {

    it('should not calculate any costs because of missing requirements', () => {
        const commonFactorCallback = jest.fn();
        const costs = CostsUtils.getCosts({}, commonFactorCallback);

        expect(costs).toEqual({});
        expect(commonFactorCallback).not.toHaveBeenCalled();
    });

    it('should calculate costs with gcd', () => {
        const costs = CostsUtils.getOptimalCosts({
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
        });

        expect(costs).toEqual({
            [Enums.EmployeeTypeNames.Designer]: 1,
            [Enums.EmployeeTypeNames.Developer]: 1
        });
    });
});
