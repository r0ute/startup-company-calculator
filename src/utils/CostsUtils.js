import gcd from 'compute-gcd';

class CostsUtils {

    static getOptimalCosts(requirements) {
        return this.getCosts(requirements, gcd);
    }

    static getCosts = (requirements, commonFactorCallback, formatterCallback = (num) => num) => {
        const costs = {};

        Object.keys(requirements).forEach(key => {
            const employee = requirements[key].component.employeeTypeName;
            const produceHours = requirements[key].count * requirements[key].produceHours;

            if (costs[employee]) {
                costs[employee] = costs[employee] + produceHours;
            } else {
                costs[employee] = produceHours;
            }
        });

        const commonFactor = commonFactorCallback(...Object.keys(costs)
            .map(key => costs[key]));

        Object.keys(costs).forEach(key => {
            const cost = costs[key] / commonFactor;

            costs[key] = (formatterCallback !== undefined) 
                ? formatterCallback(cost) : cost;
        });

        return costs;
    };
}

export default CostsUtils;