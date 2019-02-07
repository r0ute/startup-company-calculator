import Enums from './Enums';

let FeatureNames = {
    LandingPage: "LandingPage",
    LoginSystem: "LoginSystem",
    CommentFunctionality: "CommentFunctionality",
    SharingFunctionality: "SharingFunctionality",
    PaymentSystem: "PaymentSystem",
    ImageUpload: "ImageUpload",
    ContentManagementSystem: "ContentManagementSystem",
    ChatSystem: "ChatSystem",
    VideoFunctionality: "VideoFunctionality",
    ImapService: "ImapService",
    VideoEditor: "VideoEditor",
    TextAds: "TextAds",
    BannerAds: "BannerAds",
    VideoAds: "VideoAds",
    Subscriptions: "Subscriptions",
    ItemListing: "ItemListing",
    OfflineContent: "OfflineContent",
    LiveStreaming: "LiveStreaming"
}, AdsFeatureNames = [FeatureNames.TextAds, FeatureNames.BannerAds, FeatureNames.VideoAds], Features = [{
    name: FeatureNames.LandingPage,
    requirements: {UiComponent: 1, BackendComponent: 1, BlueprintComponent: 1, GraphicsComponent: 1},
    usersFactor: 200,
    faIcon: "fa-paper-plane-o",
    maxLevel: 4,
    type: Enums.FeatureTypes.Users
}, {
    name: FeatureNames.LoginSystem,
    requirements: {FrontendModule: 1, InputModule: 1, BackendModule: 1, AuthenticationModule: 1},
    faIcon: "fa-sign-in",
    usersFactor: 200,
    maxLevel: 5e3,
    type: Enums.FeatureTypes.Users
}, {
    name: FeatureNames.CommentFunctionality,
    requirements: {BackendModule: 2, InputModule: 2},
    faIcon: "fa-commenting-o",
    usersFactor: 320,
    maxLevel: 5e3,
    type: Enums.FeatureTypes.Users
}, {
    name: FeatureNames.SharingFunctionality,
    requirements: {BackendModule: 1, FrontendModule: 1, InputModule: 2},
    faIcon: "fa-share",
    usersFactor: 160,
    maxLevel: 5e3,
    type: Enums.FeatureTypes.Users
}, {
    name: FeatureNames.PaymentSystem,
    requirements: {BackendModule: 2, PaymentGatewayModule: 1, EmailModule: 1},
    faIcon: "fa-credit-card",
    usersFactor: 200,
    maxLevel: 5e3,
    type: Enums.FeatureTypes.Users
}, {
    name: FeatureNames.ImageUpload,
    requirements: {InputModule: 1, StorageModule: 2, BackendModule: 1, FrontendModule: 1},
    faIcon: "fa-picture-o",
    usersFactor: 280,
    maxLevel: 5e3,
    type: Enums.FeatureTypes.Users
}, {
    name: FeatureNames.ContentManagementSystem,
    requirements: {ContentManagementModule: 5, InputModule: 4},
    faIcon: "fa-outdent",
    usersFactor: 280,
    maxLevel: 5e3,
    type: Enums.FeatureTypes.Users
}, {
    name: FeatureNames.ChatSystem,
    requirements: {DatabaseLayer: 1, InputModule: 2, NotificationModule: 2, NetworkComponent: 3},
    faIcon: "fa-comments-o",
    usersFactor: 320,
    maxLevel: 5e3,
    type: Enums.FeatureTypes.Users
}, {
    name: FeatureNames.VideoFunctionality,
    requirements: {FrontendModule: 1, StorageModule: 1, NetworkComponent: 1},
    faIcon: "fa-video-o",
    usersFactor: 320,
    maxLevel: 5e3,
    researchPoints: 20,
    type: Enums.FeatureTypes.Users
}, {
    name: FeatureNames.OfflineContent,
    requirements: {FrontendModule: 1, DatabaseLayer: 1, StorageModule: 1, BandwidthCompressionModule: 1},
    faIcon: "fa-spinner",
    usersFactor: 320,
    maxLevel: 5e3,
    type: Enums.FeatureTypes.Users
}, {
    name: FeatureNames.LiveStreaming,
    requirements: {FrontendModule: 1, VideoPlaybackModule: 1, BandwidthCompressionModule: 1},
    faIcon: "fa-podcast",
    usersFactor: 320,
    maxLevel: 5e3,
    type: Enums.FeatureTypes.Users
}, {
    name: FeatureNames.ImapService,
    requirements: {DatabaseLayer: 4, AuthenticationModule: 3, FilesystemComponent: 1, EmailModule: 6},
    faIcon: "fa-envelope-o",
    usersFactor: 200,
    maxLevel: 5e3,
    type: Enums.FeatureTypes.Users
}, {
    name: FeatureNames.VideoEditor,
    requirements: {
        VideoPlaybackModule: 2,
        StorageModule: 1,
        BandwidthCompressionModule: 1,
        InterfaceModule: 1,
        BackendModule: 3
    },
    faIcon: "fa-video-camera",
    usersFactor: 200,
    maxLevel: 5e3,
    type: Enums.FeatureTypes.Users
}, {
    name: FeatureNames.ItemListing,
    requirements: {BackendModule: 2, InterfaceModule: 1},
    faIcon: "fa-file-text-o",
    type: Enums.FeatureTypes.Users
}, {
    name: FeatureNames.TextAds,
    requirements: {BackendModule: 3, FrontendModule: 3, StorageModule: 3},
    faIcon: "fa-align-left",
    satisfactionDecrease: 30,
    type: Enums.FeatureTypes.Revenue
}, {
    name: FeatureNames.BannerAds,
    requirements: {BackendModule: 8, FrontendModule: 8, DatabaseLayer: 12, SeoModule: 8, StorageModule: 8},
    faIcon: "fa-picture-o",
    satisfactionDecrease: 15,
    type: Enums.FeatureTypes.Revenue
}, {
    name: FeatureNames.VideoAds,
    requirements: {
        BackendModule: 16,
        FrontendModule: 16,
        DatabaseLayer: 24,
        SeoModule: 24,
        StorageModule: 38,
        VideoPlaybackModule: 40
    },
    faIcon: "fa-video-camera",
    satisfactionDecrease: 5,
    type: Enums.FeatureTypes.Revenue
}, {
    name: FeatureNames.Subscriptions,
    requirements: {BackendModule: 12, FrontendModule: 12, StorageModule: 20},
    faIcon: "fa-calendar-check-o",
    type: Enums.FeatureTypes.Revenue,
    orderOverride: 1
}];

export {AdsFeatureNames, FeatureNames, Features};