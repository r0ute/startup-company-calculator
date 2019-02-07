const Enums = {
    EmployeeTypeNames: {
        Developer: "Developer",
        LeadDeveloper: "LeadDeveloper",
        Designer: "Designer",
        SalesExecutive: "SalesExecutive",
        Manager: "Manager",
        Researcher: "Researcher",
        SysAdmin: "SysAdmin",
        HrManager: "HrManager",
        Marketer: "Marketer",
        Supporter: "Supporter",
        ChiefExecutiveOfficer: "ChiefExecutiveOfficer",
        Recruiter: "Recruiter"
    },
    GameEvents: {
        WorkstationChange: "WorkstationChange",
        EmployeeChange: "EmployeeChange",
        GridChange: "GridChange",
        ResearchChange: "ResearchChange",
        ProductChange: "ProductChange",
        ContractChange: "ContractChange",
        ClientChange: "ClientChange",
        SelectedWorkstationChange: "SelectedWorkstationChange",
        LoanChange: "LoanChange",
        InventoryChange: "InventoryChange",
        SpeedChange: "SpeedChange",
        CandidateChange: "CandidateChange",
        OnNewHour: "OnNewHour",
        MenuChange: "MenuChange",
        UiUpdate: "UiUpdate",
        MailChange: "MailChange",
        NotificationChange: "NotificationChange",
        ProductMilestoneCompleted: "ProductMilestoneCompleted",
        ModChange: "ModChange",
        MilestoneTrigger: "MilestoneTrigger",
        RackChange: "RackChange",
        OnNewDay: "OnNewDay",
        OnLoadGame: "OnLoadGame"
    },
    EmployeeLevels: {Beginner: "Beginner", Intermediate: "Intermediate", Expert: "Expert"},
    Priorities: {Low: "Low", Medium: "Medium", High: "High"},
    ContractStatuses: {
        NotSet: "NotSet",
        Declined: "Declined",
        OfferSent: "OfferSent",
        Won: "Won",
        Lost: "Lost",
        Cancelled: "Cancelled"
    },
    ContractTypes: {FixedPrice: "FixedPrice", LimitedRFQ: "LimitedRFQ"},
    ComponentTypes: {Component: "Component", Module: "Module", Server: "Server"},
    EmployeeTypeGroups: {Development: "Development", Sales: "Sales", Management: "Management"},
    EmployeeStates: {
        SentHome: "SentHome",
        Sick: "Sick",
        Working: "Working",
        Idle: "Idle",
        Awaiting: "Awaiting",
        Unassigned: "Unassigned"
    },
    TaskStates: {Running: "Running", Stalled: "Stalled", Completed: "Completed", Stopped: "Stopped"},
    NotificationTypes: {Info: "Info", Warning: "Warning"},
    FeatureProperties: {Quality: "Quality", Efficiency: "Efficiency"},
    ProductStates: {Stable: "Stable", Unstable: "Unstable", Critical: "Critical"},
    DemandTypes: {
        Benefit: "Benefit",
        Furniture: "Furniture",
        WorkHours: "WorkHours",
        DeskType: "DeskType",
        FireEmployee: "FireEmployee"
    },
    Difficulties: {Easy: "Easy", Medium: "Medium", Hard: "Hard"},
    BuildingType: {Office: "Office", Hosting: "Hosting"},
    RackDeviceState: {
        ReducedPerformance: "ReducedPerformance",
        OverheatProtection: "OverheatProtection",
        Running: "Running",
        NotConfigured: "NotConfigured"
    },
    FeatureTypes: {Revenue: "Revenue", Users: "Users"},
    PriceRanges: {Cheap: "Cheap", Moderate: "Moderate", Expensive: "Expensive"}
};

export default Enums;