import Enums from './Enums';

let ComponentNames = {}, Components = [];

ComponentNames.BlueprintComponent = "BlueprintComponent";
ComponentNames.WireframeComponent = "WireframeComponent";
ComponentNames.GraphicsComponent = "GraphicsComponent";
ComponentNames.UiComponent = "UiComponent";
ComponentNames.BackendComponent = "BackendComponent";
ComponentNames.DatabaseComponent = "DatabaseComponent";
ComponentNames.NetworkComponent = "NetworkComponent";
ComponentNames.EncryptionComponent = "EncryptionComponent";
ComponentNames.SemanticComponent = "SemanticComponent";
ComponentNames.SearchAlgorithmComponent = "SearchAlgorithmComponent";
ComponentNames.SmtpComponent = "SmtpComponent";
ComponentNames.I18nComponent = "I18nComponent";
ComponentNames.VideoComponent = "VideoComponent";
ComponentNames.FilesystemComponent = "FilesystemComponent";
ComponentNames.CompressionComponent = "CompressionComponent";
ComponentNames.VirtualHardware = "VirtualHardware";
ComponentNames.Firewall = "Firewall";
ComponentNames.OperatingSystem = "OperatingSystem";
ComponentNames.Copywriting = "Copywriting";
ComponentNames.TextFormat = "TextFormat";
ComponentNames.VideoFormat = "VideoFormat";
ComponentNames.ImageFormat = "ImageFormat";
ComponentNames.AudioFormat = "AudioFormat";
ComponentNames.ContractAgreement = "ContractAgreement";
ComponentNames.Survey = "Survey";
ComponentNames.UserFeedback = "UserFeedback";
ComponentNames.PhoneInterview = "PhoneInterview";
ComponentNames.AnalyticsResearch = "AnalyticsResearch";
ComponentNames.BehaviorObservation = "BehaviorObservation";
ComponentNames.AbTesting = "AbTesting";
Components.push({
    name: ComponentNames.BlueprintComponent,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/blueprint.png",
    employeeTypeName: Enums.EmployeeTypeNames.Designer,
    type: Enums.ComponentTypes.Component,
    produceHours: 2
});
Components.push({
    name: ComponentNames.WireframeComponent,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/wireframe.png",
    employeeTypeName: Enums.EmployeeTypeNames.Designer,
    type: Enums.ComponentTypes.Component,
    produceHours: 3
});
Components.push({
    name: ComponentNames.GraphicsComponent,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/graphics.png",
    employeeTypeName: Enums.EmployeeTypeNames.Designer,
    type: Enums.ComponentTypes.Component,
    produceHours: 4
});
Components.push({
    name: ComponentNames.UiComponent,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/ui.png",
    employeeTypeName: Enums.EmployeeTypeNames.Developer,
    type: Enums.ComponentTypes.Component,
    produceHours: 2
});
Components.push({
    name: ComponentNames.BackendComponent,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/backend.png",
    employeeTypeName: Enums.EmployeeTypeNames.Developer,
    type: Enums.ComponentTypes.Component,
    produceHours: 4
});
Components.push({
    name: ComponentNames.NetworkComponent,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/network.png",
    employeeTypeName: Enums.EmployeeTypeNames.Developer,
    type: Enums.ComponentTypes.Component,
    produceHours: 6
});
Components.push({
    name: ComponentNames.DatabaseComponent,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/database.png",
    employeeTypeName: Enums.EmployeeTypeNames.Developer,
    type: Enums.ComponentTypes.Component,
    produceHours: 4
});
Components.push({
    name: ComponentNames.SemanticComponent,
    employeeLevel: Enums.EmployeeLevels.Intermediate,
    icon: "images/icons/components/semantic.png",
    employeeTypeName: Enums.EmployeeTypeNames.Developer,
    type: Enums.ComponentTypes.Component,
    produceHours: 3
});
Components.push({
    name: ComponentNames.EncryptionComponent,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/encryption.png",
    employeeTypeName: Enums.EmployeeTypeNames.Developer,
    type: Enums.ComponentTypes.Component,
    produceHours: 8
});
Components.push({
    name: ComponentNames.FilesystemComponent,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/filesystem.png",
    employeeTypeName: Enums.EmployeeTypeNames.Developer,
    type: Enums.ComponentTypes.Component,
    produceHours: 4
});
Components.push({
    name: ComponentNames.VideoComponent,
    employeeLevel: Enums.EmployeeLevels.Intermediate,
    icon: "images/icons/components/video.png",
    employeeTypeName: Enums.EmployeeTypeNames.Developer,
    type: Enums.ComponentTypes.Component,
    produceHours: 14
});
Components.push({
    name: ComponentNames.SmtpComponent,
    employeeLevel: Enums.EmployeeLevels.Intermediate,
    icon: "images/icons/components/smtp.png",
    employeeTypeName: Enums.EmployeeTypeNames.Developer,
    type: Enums.ComponentTypes.Component,
    produceHours: 8
});
Components.push({
    name: ComponentNames.I18nComponent,
    employeeLevel: Enums.EmployeeLevels.Expert,
    icon: "images/icons/components/i18n.png",
    employeeTypeName: Enums.EmployeeTypeNames.Developer,
    type: Enums.ComponentTypes.Component,
    produceHours: 4
});
Components.push({
    name: ComponentNames.SearchAlgorithmComponent,
    employeeLevel: Enums.EmployeeLevels.Expert,
    icon: "images/icons/components/searchalgorithm.png",
    employeeTypeName: Enums.EmployeeTypeNames.Developer,
    type: Enums.ComponentTypes.Component,
    produceHours: 12
});
Components.push({
    name: ComponentNames.CompressionComponent,
    employeeLevel: Enums.EmployeeLevels.Expert,
    icon: "images/icons/components/compression.png",
    employeeTypeName: Enums.EmployeeTypeNames.Developer,
    type: Enums.ComponentTypes.Component,
    produceHours: 8
});
Components.push({
    name: ComponentNames.VirtualHardware,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/hardware.png",
    employeeTypeName: Enums.EmployeeTypeNames.SysAdmin,
    type: Enums.ComponentTypes.Component,
    produceHours: 4
});
Components.push({
    name: ComponentNames.OperatingSystem,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/operatingsystem.png",
    employeeTypeName: Enums.EmployeeTypeNames.SysAdmin,
    type: Enums.ComponentTypes.Component,
    produceHours: 4
});
Components.push({
    name: ComponentNames.Firewall,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/firewall.png",
    employeeTypeName: Enums.EmployeeTypeNames.SysAdmin,
    type: Enums.ComponentTypes.Component,
    produceHours: 4
});
Components.push({
    name: ComponentNames.Copywriting,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/copywriting.png",
    employeeTypeName: Enums.EmployeeTypeNames.Marketer,
    type: Enums.ComponentTypes.Component,
    produceHours: 4
});
Components.push({
    name: ComponentNames.TextFormat,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/textformat.png",
    employeeTypeName: Enums.EmployeeTypeNames.Marketer,
    type: Enums.ComponentTypes.Component,
    produceHours: 4
});
Components.push({
    name: ComponentNames.ImageFormat,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/imageformat.png",
    employeeTypeName: Enums.EmployeeTypeNames.Marketer,
    type: Enums.ComponentTypes.Component,
    produceHours: 4
});
Components.push({
    name: ComponentNames.VideoFormat,
    employeeLevel: Enums.EmployeeLevels.Intermediate,
    icon: "images/icons/components/videoformat.png",
    employeeTypeName: Enums.EmployeeTypeNames.Marketer,
    type: Enums.ComponentTypes.Component,
    produceHours: 8
});
Components.push({
    name: ComponentNames.AudioFormat,
    employeeLevel: Enums.EmployeeLevels.Intermediate,
    icon: "images/icons/components/audioformat.png",
    employeeTypeName: Enums.EmployeeTypeNames.Marketer,
    type: Enums.ComponentTypes.Component,
    produceHours: 8
});
Components.push({
    name: ComponentNames.ContractAgreement,
    employeeLevel: Enums.EmployeeLevels.Expert,
    icon: "images/icons/components/contractagreement.png",
    employeeTypeName: Enums.EmployeeTypeNames.Marketer,
    type: Enums.ComponentTypes.Component,
    produceHours: 12
});
Components.push({
    name: ComponentNames.Survey,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/survey.png",
    employeeTypeName: Enums.EmployeeTypeNames.Marketer,
    type: Enums.ComponentTypes.Component,
    produceHours: 4
});
Components.push({
    name: ComponentNames.UserFeedback,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/userfeedback.png",
    employeeTypeName: Enums.EmployeeTypeNames.Marketer,
    type: Enums.ComponentTypes.Component,
    produceHours: 8
});
Components.push({
    name: ComponentNames.PhoneInterview,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/components/phoneinterview.png",
    employeeTypeName: Enums.EmployeeTypeNames.Marketer,
    type: Enums.ComponentTypes.Component,
    produceHours: 6
});
Components.push({
    name: ComponentNames.AnalyticsResearch,
    employeeLevel: Enums.EmployeeLevels.Intermediate,
    icon: "images/icons/components/analyticsresearch.png",
    employeeTypeName: Enums.EmployeeTypeNames.Marketer,
    type: Enums.ComponentTypes.Component,
    produceHours: 12
});
Components.push({
    name: ComponentNames.BehaviorObservation,
    employeeLevel: Enums.EmployeeLevels.Expert,
    icon: "images/icons/components/behaviorobservation.png",
    employeeTypeName: Enums.EmployeeTypeNames.Marketer,
    type: Enums.ComponentTypes.Component,
    produceHours: 12
});
Components.push({
    name: ComponentNames.AbTesting,
    employeeLevel: Enums.EmployeeLevels.Expert,
    icon: "images/icons/components/abtesting.png",
    employeeTypeName: Enums.EmployeeTypeNames.Marketer,
    type: Enums.ComponentTypes.Component,
    produceHours: 10
});
ComponentNames.FrontendModule = "FrontendModule";
ComponentNames.BackendModule = "BackendModule";
ComponentNames.SeoModule = "SeoModule";
ComponentNames.AuthenticationModule = "AuthenticationModule";
ComponentNames.ContentManagementModule = "ContentManagementModule";
ComponentNames.ApiClientModule = "ApiClientModule";
ComponentNames.PaymentGatewayModule = "PaymentGatewayModule";
ComponentNames.VideoPlaybackModule = "VideoPlaybackModule";
ComponentNames.StorageModule = "StorageModule";
ComponentNames.EmailModule = "EmailModule";
ComponentNames.LocalizationModule = "LocalizationModule";
ComponentNames.SearchModule = "SearchModule";
ComponentNames.BandwidthCompressionModule = "BandwidthCompressionModule";
ComponentNames.DatabaseLayer = "DatabaseLayer";
ComponentNames.InputModule = "InputModule";
ComponentNames.NotificationModule = "NotificationModule";
ComponentNames.InterfaceModule = "InterfaceModule";
Components.push({
    name: ComponentNames.InterfaceModule,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/modules/webdesign.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {BlueprintComponent: 1, WireframeComponent: 1, GraphicsComponent: 1}
});
Components.push({
    name: ComponentNames.FrontendModule,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/modules/frontend.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {UiComponent: 1, InterfaceModule: 1}
});
Components.push({
    name: ComponentNames.BackendModule,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/modules/backend.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {BackendComponent: 1, NetworkComponent: 1}
});
Components.push({
    name: ComponentNames.InputModule,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/modules/input.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {UiComponent: 1, BackendComponent: 1}
});
Components.push({
    name: ComponentNames.StorageModule,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/modules/storage.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {FilesystemComponent: 1, BackendComponent: 1}
});
Components.push({
    name: ComponentNames.ContentManagementModule,
    employeeLevel: Enums.EmployeeLevels.Intermediate,
    icon: "images/icons/modules/contentmanagement.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {DatabaseComponent: 1, BackendModule: 1}
});
Components.push({
    name: ComponentNames.SeoModule,
    employeeLevel: Enums.EmployeeLevels.Intermediate,
    icon: "images/icons/modules/seo.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {FrontendModule: 1, SemanticComponent: 1}
});
Components.push({
    name: ComponentNames.AuthenticationModule,
    employeeLevel: Enums.EmployeeLevels.Beginner,
    icon: "images/icons/modules/authentication.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {DatabaseComponent: 1, EncryptionComponent: 1, BackendModule: 1}
});
Components.push({
    name: ComponentNames.ApiClientModule,
    employeeLevel: Enums.EmployeeLevels.Intermediate,
    icon: "images/icons/modules/apiclient.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {BackendModule: 1, NetworkComponent: 1}
});
Components.push({
    name: ComponentNames.PaymentGatewayModule,
    employeeLevel: Enums.EmployeeLevels.Expert,
    icon: "images/icons/modules/payment.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {BackendModule: 1, ApiClientModule: 1}
});
Components.push({
    name: ComponentNames.VideoPlaybackModule,
    employeeLevel: Enums.EmployeeLevels.Intermediate,
    icon: "images/icons/modules/video.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {VideoComponent: 1, FrontendModule: 1, BackendModule: 1}
});
Components.push({
    name: ComponentNames.EmailModule,
    employeeLevel: Enums.EmployeeLevels.Intermediate,
    icon: "images/icons/modules/email.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {SmtpComponent: 1, BackendComponent: 1}
});
Components.push({
    name: ComponentNames.LocalizationModule,
    employeeLevel: Enums.EmployeeLevels.Expert,
    icon: "images/icons/modules/localization.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {I18nComponent: 1, FrontendModule: 1}
});
Components.push({
    name: ComponentNames.SearchModule,
    employeeLevel: Enums.EmployeeLevels.Expert,
    icon: "images/icons/modules/search.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {DatabaseComponent: 1, SearchAlgorithmComponent: 1, BackendComponent: 1}
});
Components.push({
    name: ComponentNames.BandwidthCompressionModule,
    employeeLevel: Enums.EmployeeLevels.Expert,
    icon: "images/icons/modules/compression.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {CompressionComponent: 1, NetworkComponent: 1, BackendComponent: 1}
});
Components.push({
    name: ComponentNames.DatabaseLayer,
    employeeLevel: Enums.EmployeeLevels.Intermediate,
    icon: "images/icons/modules/datalayer.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {DatabaseComponent: 1, BackendComponent: 1, NetworkComponent: 1}
});
Components.push({
    name: ComponentNames.NotificationModule,
    employeeLevel: Enums.EmployeeLevels.Intermediate,
    icon: "images/icons/modules/notification.png",
    type: Enums.ComponentTypes.Module,
    employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
    requirements: {UiComponent: 1, BackendComponent: 1, EmailModule: 1}
});

export {Components, ComponentNames};