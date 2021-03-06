import Enums from './Enums';

const EmployeeTypes = [
    {
        name: Enums.EmployeeTypeNames.Researcher,
        group: Enums.EmployeeTypeGroups.Management,
        description: 'researcher_description',
        cssClass: 'fa-flask',
    },
    {
        name: Enums.EmployeeTypeNames.Developer,
        group: Enums.EmployeeTypeGroups.Development,
        description: 'developer_description',
        cssClass: 'fa-code',
    },
    {
        name: Enums.EmployeeTypeNames.Designer,
        group: Enums.EmployeeTypeGroups.Development,
        description: 'designer_description',
        cssClass: 'fa-paint-brush',
    },
    {
        name: Enums.EmployeeTypeNames.LeadDeveloper,
        group: Enums.EmployeeTypeGroups.Development,
        description: 'leaddeveloper_description',
        cssClass: 'fa-code-fork',
    },
    {
        name: Enums.EmployeeTypeNames.SysAdmin,
        group: Enums.EmployeeTypeGroups.Development,
        description: 'sysadmin_description',
        cssClass: 'fa-server',
    },
    {
        name: Enums.EmployeeTypeNames.SalesExecutive,
        group: Enums.EmployeeTypeGroups.Sales,
        description: 'salesexecutive_description',
        cssClass: 'fa-phone',
    },
    {
        name: Enums.EmployeeTypeNames.Marketer,
        group: Enums.EmployeeTypeGroups.Sales,
        description: 'marketer_description',
        cssClass: 'fa-newspaper-o',
    },
    {
        name: Enums.EmployeeTypeNames.Manager,
        group: Enums.EmployeeTypeGroups.Management,
        description: 'manager_description',
        cssClass: 'fa-list-ol',
    },
    {
        name: Enums.EmployeeTypeNames.HrManager,
        group: Enums.EmployeeTypeGroups.Management,
        description: 'hrmanager_description',
        cssClass: 'fa-clock-o',
    },
    {
        name: Enums.EmployeeTypeNames.Supporter,
        group: Enums.EmployeeTypeGroups.Management,
        description: 'supporter_description',
        cssClass: 'fa-life-ring',
    },
    {
        name: Enums.EmployeeTypeNames.ChiefExecutiveOfficer,
        group: Enums.EmployeeTypeGroups.Management,
        description: 'chiefexecutiveofficer_description',
        cssClass: 'fa-black-tie',
    },
    {
        name: Enums.EmployeeTypeNames.Recruiter,
        group: Enums.EmployeeTypeGroups.Management,
        description: 'recruiter_description',
        cssClass: 'fa-binoculars',
    },
    {
        name: Enums.EmployeeTypeNames.OutsourcingExecutive,
        group: Enums.EmployeeTypeGroups.Management,
        description: 'outsourcingexecutive_description',
        cssClass: 'fa-handshake-o',
    },
];

export default EmployeeTypes;
