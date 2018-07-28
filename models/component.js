import mongoose from 'mongoose';
import {EmployeeType} from "../enums/employee-type";
import {EmployeeLevel} from "../enums/employee-level";

export const Component = mongoose.model('Component', new mongoose.Schema({
    name: String,
    prodTime: Number,
    employeeType: EmployeeType.keys.map((key) => EmployeeType[key]),
    employeeLevel: EmployeeLevel.keys.map((key) => EmployeeLevel[key]),
}));