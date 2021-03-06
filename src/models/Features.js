import Enums from './Enums';

const FeatureNames = {
        LandingPage: 'LandingPage',
        LoginSystem: 'LoginSystem',
        CommentFunctionality: 'CommentFunctionality',
        SharingFunctionality: 'SharingFunctionality',
        PaymentSystem: 'PaymentSystem',
        ImageUpload: 'ImageUpload',
        ContentManagementSystem: 'ContentManagementSystem',
        ChatSystem: 'ChatSystem',
        VideoFunctionality: 'VideoFunctionality',
        ImapService: 'ImapService',
        VideoEditor: 'VideoEditor',
        TextAds: 'TextAds',
        BannerAds: 'BannerAds',
        VideoAds: 'VideoAds',
        Subscriptions: 'Subscriptions',
        ItemListing: 'ItemListing',
        OfflineContent: 'OfflineContent',
        LiveStreaming: 'LiveStreaming',
        AdBlockObfuscator: 'AdBlockObfuscator',
        DdosProtection: 'DdosProtection',
        HelpSystem: 'HelpSystem',
        ProfilePage: 'ProfilePage',
    },
    AdsFeatureNames = [
        FeatureNames.TextAds,
        FeatureNames.BannerAds,
        FeatureNames.VideoAds,
    ],
    FeatureCategories = [
        {
            name: Enums.FeatureCategories.Users,
            title: 'users_features',
            description: 'feature_type_users_description',
            faIcon: 'fa-users',
        },
        {
            name: Enums.FeatureCategories.Revenue,
            title: 'revenue_features',
            description: 'feature_type_revenue_description',
            faIcon: 'fa-money',
        },
        {
            name: Enums.FeatureCategories.Enhancement,
            title: 'enhancement_features',
            description: 'feature_type_enhancement_description',
            faIcon: 'fa-magic',
        },
    ],
    Features = [
        {
            name: FeatureNames.LandingPage,
            level: Enums.EmployeeLevels.Beginner,
            requirements: {
                UiComponent: 1,
                BackendComponent: 1,
                BlueprintComponent: 1,
                GraphicsComponent: 1,
            },
            faIcon: 'fa-paper-plane-o',
            categoryName: Enums.FeatureCategories.Users,
        },
        {
            name: FeatureNames.CommentFunctionality,
            level: Enums.EmployeeLevels.Beginner,
            requirements: {
                BackendModule: 3,
                InputModule: 3,
            },
            faIcon: 'fa-commenting-o',
            categoryName: Enums.FeatureCategories.Users,
        },
        {
            name: FeatureNames.SharingFunctionality,
            level: Enums.EmployeeLevels.Intermediate,
            requirements: {
                BackendModule: 2,
                FrontendModule: 1,
                InputModule: 1,
                EmailModule: 2,
                UiSet: 1,
            },
            faIcon: 'fa-share',
            categoryName: Enums.FeatureCategories.Users,
        },
        {
            name: FeatureNames.PaymentSystem,
            level: Enums.EmployeeLevels.Expert,
            requirements: {
                DatabaseLayer: 2,
                FrontendModule: 1,
                PaymentGatewayModule: 1,
                EmailModule: 1,
                DesignGuidelines: 1,
            },
            faIcon: 'fa-credit-card',
            categoryName: Enums.FeatureCategories.Users,
        },
        {
            name: FeatureNames.ImageUpload,
            level: Enums.EmployeeLevels.Intermediate,
            requirements: {
                InputModule: 1,
                StorageModule: 2,
                DatabaseLayer: 2,
                FrontendModule: 1,
                UiSet: 1,
            },
            faIcon: 'fa-picture-o',
            categoryName: Enums.FeatureCategories.Users,
        },
        {
            name: FeatureNames.ChatSystem,
            level: Enums.EmployeeLevels.Expert,
            requirements: {
                DatabaseLayer: 1,
                InputModule: 1,
                NotificationModule: 2,
                NetworkComponent: 3,
                ApiClientModule: 2,
                DesignGuidelines: 1,
            },
            faIcon: 'fa-comments-o',
            categoryName: Enums.FeatureCategories.Users,
        },
        {
            name: FeatureNames.VideoFunctionality,
            level: Enums.EmployeeLevels.Beginner,
            requirements: {
                FrontendModule: 1,
                VideoPlaybackModule: 1,
            },
            faIcon: 'fa-file-video-o',
            categoryName: Enums.FeatureCategories.Users,
        },
        {
            name: FeatureNames.OfflineContent,
            level: Enums.EmployeeLevels.Intermediate,
            requirements: {
                BackendModule: 2,
                FrontendModule: 1,
                StorageModule: 2,
                DatabaseLayer: 2,
                UiSet: 1,
            },
            faIcon: 'fa-spinner',
            categoryName: Enums.FeatureCategories.Users,
        },
        {
            name: FeatureNames.LiveStreaming,
            level: Enums.EmployeeLevels.Beginner,
            requirements: {
                BackendModule: 1,
                FrontendModule: 1,
                NetworkComponent: 4,
            },
            faIcon: 'fa-podcast',
            categoryName: Enums.FeatureCategories.Users,
        },
        {
            name: FeatureNames.VideoEditor,
            level: Enums.EmployeeLevels.Intermediate,
            requirements: {
                VideoPlaybackModule: 1,
                StorageModule: 1,
                FrontendModule: 1,
                BackendModule: 1,
                UiSet: 1,
            },
            faIcon: 'fa-video-camera',
            categoryName: Enums.FeatureCategories.Users,
        },
        {
            name: FeatureNames.ItemListing,
            level: Enums.EmployeeLevels.Beginner,
            requirements: {
                BackendModule: 1,
                FrontendModule: 1,
                ContentManagementModule: 1,
            },
            faIcon: 'fa-file-text-o',
            categoryName: Enums.FeatureCategories.Users,
        },
        {
            name: FeatureNames.TextAds,
            faIcon: 'fa-align-left',
            dissatisfaction: 8,
            categoryName: Enums.FeatureCategories.Revenue,
        },
        {
            name: FeatureNames.BannerAds,
            faIcon: 'fa-picture-o',
            dissatisfaction: 12,
            categoryName: Enums.FeatureCategories.Revenue,
        },
        {
            name: FeatureNames.VideoAds,
            faIcon: 'fa-video-camera',
            dissatisfaction: 16,
            categoryName: Enums.FeatureCategories.Revenue,
        },
        {
            name: FeatureNames.Subscriptions,
            faIcon: 'fa-calendar-check-o',
            categoryName: Enums.FeatureCategories.Revenue,
            orderOverride: 1,
        },
        {
            name: FeatureNames.ContentManagementSystem,
            requirements: {
                ContentManagementModule: 5,
                InputModule: 4,
            },
            faIcon: 'fa-outdent',
            categoryName: Enums.FeatureCategories.Users,
        },
        {
            name: FeatureNames.LoginSystem,
            requirements: {
                FrontendModule: 1,
                InputModule: 1,
                BackendModule: 1,
                AuthenticationModule: 1,
            },
            faIcon: 'fa-sign-in',
            categoryName: Enums.FeatureCategories.Users,
        },
        {
            name: FeatureNames.AdBlockObfuscator,
            faIcon: 'fa-eye-slash',
            categoryName: Enums.FeatureCategories.Enhancement,
            requirements: {
                CodeOptimizationModule: 2,
                UiSet: 4,
                ApiClientModule: 2,
                ResearchPoint: 200,
            },
        },
        {
            name: FeatureNames.DdosProtection,
            faIcon: 'fa-shield',
            categoryName: Enums.FeatureCategories.Enhancement,
            requirements: {
                CodeOptimizationModule: 1,
                ApiClientModule: 2,
                ResearchPoint: 200,
                SwarmManagement: 1,
                Firewall: 5,
            },
        },
        {
            name: FeatureNames.HelpSystem,
            faIcon: 'fa-life-ring',
            categoryName: Enums.FeatureCategories.Enhancement,
            requirements: {
                ContentManagementModule: 4,
                InputModule: 4,
                FrontendModule: 3,
                BackendModule: 3,
                UiSet: 2,
            },
        },
        {
            name: FeatureNames.ProfilePage,
            faIcon: 'fa-user-circle',
            categoryName: Enums.FeatureCategories.Users,
            requirements: {
                InputModule: 4,
                FrontendModule: 3,
                BackendModule: 3,
                UiSet: 2,
                AuthenticationModule: 1,
            },
            level: Enums.EmployeeLevels.Intermediate,
        },
    ];

export { AdsFeatureNames, FeatureCategories, FeatureNames, Features };
