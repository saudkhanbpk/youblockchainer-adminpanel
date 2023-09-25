import {
  Home,
  Airplay,
  Box,
  FolderPlus,
  Command,
  Cloud,
  BarChart,
  Users,
  ShoppingBag,
  List,
  Mail,
  MessageCircle,
  GitPullRequest,
  Monitor,
  Heart,
  Clock,
  Zap,
  CheckSquare,
  Calendar,
  Image,
  HelpCircle,
  Radio,
  Map,
  Edit,
  Sunrise,
  Package,
  Sliders,
  Layout,
  Server,
  Database,
  Search,
  File,
  Layers,
  UserCheck,
  Settings,
  PieChart,
  User,
  Codesandbox,
  Crosshair,
  Video,
  MessageSquare,
  Codepen,
  Target,
  Wind,
} from "react-feather";

export const MENUITEMS = [
  {
    menutitle: "Content Management",
    Items: [
      {
        title: "Homepage Cards",
        icon: Home,
        type: "sub",
        active: false,
        children: [
          // {
          //   path: `${process.env.PUBLIC_URL}/home/add_homecardtitle`,
          //   title: "Home Cards Title",
          //   type: "link",
          // },
          // {
          //   path: `${process.env.PUBLIC_URL}/home/homecardtitle_list`,
          //   title: "Home Cards Title List",
          //   type: "link",
          // },
          {
            path: `${process.env.PUBLIC_URL}/home/add_homecarditem`,
            title: "Home Cards Item",
            type: "link",
          },
          // {
          //   path: `${process.env.PUBLIC_URL}/home/homecarditem_list`,
          //   title: "Home Cards Item List",
          //   type: "link",
          // },
        ],
      },
      {
        title: "Video Onboarding",
        icon: Video,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/video_onboarding`,
            title: "Onboarding Videos",
            type: "link",
          },
        ],
      },
      {
        title: "Blogs",
        icon: Codesandbox,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/blogs/add_category`,
            title: "Add Categories",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/blogs/category_list`,
            title: "Categories List",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/blogs/add_blogs`,
            title: "Add Blogs",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/blogs/blogs_list`,
            title: "Blogs List",
            type: "link",
          },
        ],
      },
      {
        title: "Knowledge",
        icon: Crosshair,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/knowledge/add_knowledge`,
            title: "Add Knowledge",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/knowledge/knowledge_list`,
            title: "Knowledge List",
            type: "link",
          },
        ],
      },
      {
        title: "SEO Pages",
        icon: Wind,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/seo/homepage_seo`,
            title: "Home Page",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/seo/knowledge_seo`,
            title: "Knowledge Page",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/seo/termsconditions_seo`,
            title: "Terms & Conditions Page",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/seo/privacypolicy_seo`,
            title: "Privacy & Policies Page",
            type: "link",
          },
        ],
      },
      {
        title: "Subscription Packages",
        icon: Codepen,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/subscription/add_packages`,
            title: "Add Packages",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/subscription/packages_list`,
            title: "Packages List",
            type: "link",
          },
        ],
      },
      {
        title: "Popup Message Signup",
        icon: MessageSquare,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/popup_messages`,
            title: "Popup Messages",
            type: "link",
          },
        ],
      },
      {
        title: "Terms & Conditions",
        icon: HelpCircle,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/terms_conditions`,
            title: "Terms & Conditions",
            type: "link",
          },
        ],
      },
      {
        title: "Privacy Policy",
        icon: HelpCircle,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/privacy_policy`,
            title: "Privacy & Policy",
            type: "link",
          },
        ],
      },
      {
        title: "Hirings",
        icon: HelpCircle,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/hirings/hirings_list`,
            title: "Payment Requests",
            type: "link",
          },
        ],
      },
      {
        title: "Earnings",
        icon: HelpCircle,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/earnings/subscribers_earnings_list`,
            title: "Subscribers Earnings",
            type: "link",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Settings",
    Items: [
      {
        title: "GPT Scripts",
        icon: Target,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/scripts/users_scripts`,
            title: "Users Scritps",
            type: "link",
          },
        ],
      },
      {
        title: "Users",
        icon: Users,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/users/users_list`,
            title: "Users List",
            type: "link",
          },
        ],
      },
      {
        title: "Organizations",
        icon: Users,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/organizations_list`,
            title: "Organizations List",
            type: "link",
          },
        ],
      },
      {
        title: "Welcome Email",
        icon: Mail,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/emails/send_email`,
            title: "Send Emails",
            type: "link",
          },
        ],
      },
      {
        title: "Support Chat",
        icon: HelpCircle,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/support/ticket_list`,
            title: "Support Chat List",
            type: "link",
          },
        ],
      },
      {
        title: "Google Analytics",
        icon: BarChart,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/analytics/analytics_list`,
            title: "Users List",
            type: "link",
          },
        ],
      },
    ],
  },
  /*
  {
    menutitle: "General",
    menucontent: "Dashboards,Widgets",
    Items: [
      {
        title: "Home Page",
        icon: Home,
        type: "sub",
        active: false,
        children: [
          { path: `/dashboard/slider`, title: "Slider Section", type: "link" },
          { path: `/dashboard/sliderlist`, title: "Slider List", type: "link" },
        ],
      },
      //Basic setting
      {
        title: "Basic Setting",
        icon: Home,
        type: "sub",
        active: false,
        children: [
          { path: `/dashboard/add-logo`, title: "Add Logo", type: "link" },
          {
            path: `/dashboard/add-social-links`,
            title: "Add SocialLinks",
            type: "link",
          },
          {
            path: `/dashboard/add-web-title`,
            title: "Add WebsiteTitle",
            type: "link",
          },
          {
            path: `/dashboard/add-fav-icon`,
            title: "Add FavIcon",
            type: "link",
          },
        ],
      },

      //Aboout us
      {
        title: "About Us",
        icon: Home,
        type: "sub",
        active: false,
        children: [
          {
            path: `/dashboard/aboutus-data`,
            title: "About Us Text",
            type: "link",
          },
          { path: `/dashboard/addcrew`, title: "Add Crew", type: "link" },
          { path: `/dashboard/crewlist`, title: " Crew List", type: "link" },
        ],
      },
      //Dao Form
      {
        title: "Dao",
        icon: Home,
        type: "sub",
        active: false,
        children: [
          {
            path: `/dashboard/deoform`,
            title: "Dao",
            type: "link",
          },
        ],
      },
      //FAQ
      {
        title: "FAQ",
        icon: HelpCircle,
        type: "sub",
        active: false,
        children: [
          {
            path: `/dashboard/faq`,
            title: "FAQ",
            type: "link",
          },
          {
            path: `/dashboard/faqlist`,
            title: "FAQList",
            type: "link",
          },
        ],
      },
      //CRM
      {
        title: "CRM",
        icon: Home,
        type: "sub",
        active: false,
        children: [
          {
            path: `/dashboard/crm-form`,
            title: "Add Campaigns",
            type: "link",
          },
          {
            path: `/dashboard/crm-list`,
            title: "CRM List",
            type: "link",
          },
          {
            path: `/dashboard/make-group`,
            title: "Make Groups",
            type: "link",
          },
          {
            path: `/dashboard/assign-email`,
            title: "Assign Email",
            type: "link",
          },
          {
            path: `/dashboard/view-email`,
            title: "View Email",
            type: "link",
          },
          {
            path: `/dashboard/run-compagin`,
            title: "Run Compagins",
            type: "link",
          },
          {
            path: `/dashboard/log-screen`,
            title: "Log Screen",
            type: "link",
          },
        ],
      },
      {
        title: "Dashboard",
        icon: Home,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/dashboard/default`,
            title: "Default",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`,
            title: "Ecommerce",
            type: "link",
          },
        ],
      },
      {
        title: "Widgets",
        icon: Airplay,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/widgets/general`,
            title: "General",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/widgets/chart`,
            title: "Chart",
            type: "link",
          },
        ],
      },
      {
        title: "Page layout",
        icon: Layout,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/page-layout/footer-light`,
            title: "Footer Light",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/page-layout/footer-dark`,
            title: "Footer Dark",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/page-layout/footer-fixed`,
            title: "Footer Fixed",
            type: "link",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Components",
    Items: [
      {
        title: "Ui Kits",
        icon: Box,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/typography`,
            type: "link",
            title: "Typography",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/avatars`,
            type: "link",
            title: "Avatars",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/helper-classes`,
            type: "link",
            title: "Helper Classes",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/grid`,
            type: "link",
            title: "Grid",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/tag-pills`,
            type: "link",
            title: "Tag & Pills",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/progress`,
            type: "link",
            title: "Progress",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/modal`,
            type: "link",
            title: "Modal",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/alert`,
            type: "link",
            title: "Alert",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/popover`,
            type: "link",
            title: "Popover",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/tooltip`,
            type: "link",
            title: "Tooltip",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/spinners`,
            type: "link",
            title: "Spinners",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/dropdown`,
            type: "link",
            title: "Dropdown",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/accordion`,
            type: "link",
            title: "Accordion",
          },
          {
            type: "sub",
            title: "Tabs",
            children: [
              {
                path: `${process.env.PUBLIC_URL}/ui-kits/tab-bootstrap`,
                type: "link",
                title: "Tab Bootstrap",
              },
              {
                path: `${process.env.PUBLIC_URL}/ui-kits/line-tabs`,
                type: "link",
                title: "Line Tabs",
              },
            ],
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/navs`,
            type: "link",
            title: "Navs",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/shadow`,
            type: "link",
            title: "Shadow",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/lists`,
            type: "link",
            title: "Lists",
          },
        ],
      },
      {
        title: "Bonus Ui",
        icon: FolderPlus,
        type: "sub",
        badge1: true,
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/scrollable`,
            title: "Scrollable ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/tree-view`,
            title: "Tree View ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/bootstrap-notify`,
            title: "Bootstrap Notify ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/rating`,
            title: "Rating",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/dropzone`,
            title: "Dropzone",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/tour`,
            title: "Tour ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/sweet-alert`,
            title: "SweetAlert ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/carousel`,
            title: "Owl Carousel",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/ribbons`,
            title: "Ribbons",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/pagination`,
            title: "Pagination",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/steps`,
            title: "Steps",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/breadcrumb`,
            title: "Breadcrumb ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/rangeSlider`,
            title: "Range Slider ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/imageCropper`,
            title: "Image Cropper ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/stickyNotes`,
            title: "Sticky ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/dragNDropComp`,
            title: "Drag and Drop ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/image-upload`,
            title: "Upload",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/card/basicCards`,
            title: "Basic Card ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/card/creativeCards`,
            title: "Creative Card ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/card/tabCard`,
            title: "Tabbed Card ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/card/draggingCards`,
            title: "Draggable Card",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/timelines/timeline1`,
            title: "Timeline",
            type: "link",
          },
        ],
      },
      {
        title: "Icons",
        icon: Command,
        path: `${process.env.PUBLIC_URL}/icons/flagIcons`,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/icons/flagIcons`,
            title: "Flag Icon",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/icons/fontAwsomeIcon`,
            title: "Fontawesome Icon ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/icons/icoIcons`,
            title: "Ico Icon ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/icons/themifyIcons`,
            title: "Themify Icon ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/icons/featherIcons`,
            title: "Feather Icon ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/icons/weatherIcons`,
            title: "Whether Icon ",
            type: "link",
          },
        ],
      },
      {
        title: "Buttons",
        icon: Cloud,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/buttons/default-btn`,
            title: "Default Style ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/buttons/flatBtn`,
            title: "Flat Style",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/buttons/edgeBtn`,
            title: "Edge Style",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/buttons/raisedBtn`,
            title: "Raised Style",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/buttons/groupBtn`,
            title: "Button Group",
            type: "link",
          },
        ],
      },
      {
        title: "Charts",
        icon: BarChart,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/charts/apexCharts`,
            type: "link",
            title: "Apex Chart",
          },
          {
            path: `${process.env.PUBLIC_URL}/charts/googleChart`,
            type: "link",
            title: "Google Chart",
          },
          {
            path: `${process.env.PUBLIC_URL}/charts/knobChart`,
            type: "link",
            title: "Knob Chart",
          },
          {
            path: `${process.env.PUBLIC_URL}/charts/chartJs`,
            type: "link",
            title: "Chartjs Chart",
          },
          {
            path: `${process.env.PUBLIC_URL}/charts/chartist`,
            type: "link",
            title: "Chartist Chart",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Forms",
    Items: [
      {
        title: " Form Controls ",
        icon: Sliders,
        type: "sub",
        children: [
          {
            title: "Form Validation",
            type: "link",
            path: `${process.env.PUBLIC_URL}/forms/formValidation`,
          },
          {
            title: "Basic Input",
            type: "link",
            path: `${process.env.PUBLIC_URL}/forms/baseInput`,
          },
          {
            title: "Checkbox & Radio",
            type: "link",
            path: `${process.env.PUBLIC_URL}/forms/radio-checkbox`,
          },
          {
            title: "Input Groups",
            type: "link",
            path: `${process.env.PUBLIC_URL}/forms/inputGroup`,
          },
          {
            title: "Mega Option",
            type: "link",
            path: `${process.env.PUBLIC_URL}/forms/megaOptions`,
          },
        ],
      },
      {
        title: "Form Widgets",
        icon: Package,
        type: "sub",
        children: [
          {
            title: "Datepicker",
            type: "link",
            path: `${process.env.PUBLIC_URL}/form-widget/datepicker`,
          },
          {
            title: "Timepicker",
            type: "link",
            path: `${process.env.PUBLIC_URL}/form-widget/timepicker`,
          },
          {
            title: "Typeahead",
            type: "link",
            path: `${process.env.PUBLIC_URL}/form-widget/typeahead`,
          },
          {
            title: "Date Time Picker",
            type: "link",
            path: `${process.env.PUBLIC_URL}/form-widget/datetimepicker`,
          },
          {
            title: "Date Rangepicker",
            type: "link",
            path: `${process.env.PUBLIC_URL}/form-widget/rangepicker`,
          },
          {
            title: "TouchSpin",
            type: "link",
            path: `${process.env.PUBLIC_URL}/form-widget/touchspin`,
          },
          {
            title: "Select 2",
            type: "link",
            path: `${process.env.PUBLIC_URL}/form-widget/select2`,
          },
          {
            title: "Switch",
            type: "link",
            path: `${process.env.PUBLIC_URL}/form-widget/switch`,
          },
          {
            title: "ClipBoard",
            type: "link",
            path: `${process.env.PUBLIC_URL}/form-widget/clipBoard`,
          },
        ],
      },
      {
        title: "Form Layout",
        icon: Layout,
        type: "sub",
        children: [
          {
            path: `${process.env.PUBLIC_URL}/form-layout/formDefault`,
            title: "Form Default",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/form-layout/formWizard`,
            title: "Form Wizard",
            type: "link",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Table",
    Items: [
      {
        title: "Bootstrap Table ",
        icon: Server,
        type: "sub",
        children: [
          {
            title: "Basic Table",
            type: "link",
            path: `${process.env.PUBLIC_URL}/table/basic`,
          },
          {
            title: "Sizing Table",
            type: "link",
            path: `${process.env.PUBLIC_URL}/table/sizing`,
          },
          {
            title: "Border Table",
            type: "link",
            path: `${process.env.PUBLIC_URL}/table/border`,
          },
          {
            title: "Styling Table",
            type: "link",
            path: `${process.env.PUBLIC_URL}/table/styling`,
          },
        ],
      },
      {
        title: "Data Tables",
        icon: Database,
        type: "link",
        path: `${process.env.PUBLIC_URL}/table/data-table`,
      },
    ],
  },
  {
    menutitle: "Applications",
    Items: [
      {
        title: "Project",
        icon: Box,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/project/project-list`,
            type: "link",
            title: "Project List",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/project/new-project`,
            type: "link",
            title: "Create New",
          },
        ],
      },
      {
        title: "Ecommerce",
        icon: ShoppingBag,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/product`,
            title: "Product",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/product-page/1`,
            title: "Product Page",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/product-list`,
            title: "Product List",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/payment-details`,
            title: "Payment Detail",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/orderhistory`,
            title: "Order History",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/pricing`,
            title: "Pricing",
            type: "link",
          },
        ],
      },
      {
        title: "Users",
        icon: Users,
        path: `${process.env.PUBLIC_URL}/app/users/userProfile`,
        type: "sub",
        bookmark: true,
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/users/userProfile`,
            type: "link",
            title: "Users Profile ",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/users/userEdit`,
            type: "link",
            title: "Users Edit",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/users/userCards`,
            type: "link",
            title: "Users Cards",
          },
        ],
      },
      {
        title: "Calender",
        icon: Calendar,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/calendar/basic-calendar`,
            bookmark: true,
            type: "link",
            title: "Calender",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/calendar/draggable-calendar`,
            type: "link",
            title: "Draggable",
          },
        ],
      },
      {
        icon: List,
        type: "sub",
        title: "Contacts",
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/contact-firebase`,
            type: "link",
            title: "Contact with Firebase",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/contact`,
            type: "link",
            title: "Contact",
          },
        ],
      },
      {
        bookmark: true,
        icon: MessageCircle,
        title: "Chat",
        type: "sub",
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/chat-app`,
            type: "link",
            title: "Chat-app",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/chat-video-app`,
            type: "link",
            title: "Chat-video-app",
          },
        ],
      },
      {
        icon: Mail,
        title: "Email-app",
        type: "sub",
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/email/mailbox`,
            type: "link",
            title: "Mail Box",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/email/readmail`,
            type: "link",
            title: "Read Mail",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/email/compose`,
            type: "link",
            title: "Compose",
          },
        ],
      },
      {
        path: `${process.env.PUBLIC_URL}/app/file-manager`,
        icon: GitPullRequest,
        title: "File Manager",
        type: "link",
      },
      {
        path: `${process.env.PUBLIC_URL}/app/kanban-board`,
        icon: Monitor,
        badge: "badge badge-info text-light mb-0",
        badgetxt: "latest",
        title: "Kanban Board",
        type: "link",
      },
      {
        path: `${process.env.PUBLIC_URL}/app/bookmark`,
        icon: Heart,
        type: "link",
        title: "Bookmark",
      },
      {
        path: `${process.env.PUBLIC_URL}/app/task`,
        icon: CheckSquare,
        type: "link",
        title: "Task",
      },
      {
        path: `${process.env.PUBLIC_URL}/app/social-app`,
        bookmark: true,
        icon: Zap,
        type: "link",
        title: "Social App",
      },
      {
        path: `${process.env.PUBLIC_URL}/app/todo`,
        icon: Clock,
        type: "link",
        title: "To-Do",
      },
      {
        path: `${process.env.PUBLIC_URL}/app/todo-firebase`,
        icon: Clock,
        type: "link",
        title: "To-Do-Firebase",
      },
      {
        path: `${process.env.PUBLIC_URL}/app/search-result`,
        icon: Search,
        type: "link",
        title: "Seach Result",
      },
    ],
  },
  {
    menutitle: "Pages",
    Items: [
      {
        title: "Sample Page",
        icon: File,
        type: "link",
        path: `${process.env.PUBLIC_URL}/pages/sample-page`,
      },
      {
        title: "Others",
        icon: Layers,
        type: "sub",
        children: [
          {
            title: "Error Pages",
            type: "sub",
            children: [
              {
                title: "Error Page 1",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/error/error-page1`,
              },
              {
                title: "Error Page 2",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/error/error-page2`,
              },
              {
                title: "Error Page 3",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/error/error-page3`,
              },
              {
                title: "Error Page 4",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/error/error-page4`,
              },
            ],
          },
          {
            title: "Authentication",
            type: "sub",
            children: [
              {
                title: "Login Simple",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/authentication/login-simple`,
              },
              {
                title: "Login with bg image",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/authentication/login-bg-img`,
              },
              {
                title: "Login with image two",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/authentication/login-img`,
              },
              {
                title: "Login with validation",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/authentication/login-validation`,
              },
              {
                title: "Login with tooltip",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/authentication/login-tooltip`,
              },
              {
                title: "Login with sweetalert",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/authentication/login-sweetalert`,
              },
              {
                title: "Register Simple",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/authentication/register-simple`,
              },
              {
                title: "Register with Bg Image",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/authentication/register-bg-img`,
              },
              {
                title: "Register with Bg Video",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/authentication/register-video`,
              },
              {
                title: "Unloack User",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/authentication/unlock-user`,
              },
              {
                title: "Forget Password",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/authentication/forget-pwd`,
              },
              {
                title: "Creat Password",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/authentication/create-pwd`,
              },
              {
                title: "Maintenance",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/authentication/maintenance`,
              },
            ],
          },
          {
            title: "Coming Soon",
            type: "sub",
            children: [
              {
                title: "Coming Simple",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/coming/coming-simple`,
              },
              {
                title: "Coming with Bg Video",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/coming/coming-bg-video`,
              },
              {
                title: "Coming with bg Image",
                type: "link",
                path: `${process.env.PUBLIC_URL}/pages/coming/coming-bg-img`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    menutitle: "Miscellaneous",
    Items: [
      {
        title: "Gallery",
        icon: Image,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/gallery/imageGallery`,
            title: "Gallery Grid ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/gallery/imageWithDesc`,
            title: "Gallery Grid  Desc ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/gallery/mesonryGallery`,
            title: "Masonry Gallery",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/gallery/mesonryDesc`,
            title: "Masonry With Desc",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/gallery/imageHover`,
            title: "Hover Effect",
            type: "link",
          },
        ],
      },
      {
        title: "Blog",
        icon: Edit,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/blog/blogDetail`,
            title: "Blog Details",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/blog/blogSingle`,
            title: "Blog Single",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/blog/blogPost`,
            title: "Add Post",
            type: "link",
          },
        ],
      },
      {
        title: "Job Search",
        icon: UserCheck,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/jobSearch/cardView`,
            title: "Cards View",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/jobSearch/job-list`,
            title: "List View",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/jobSearch/job-detail`,
            title: "Job Details",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/jobSearch/job-apply`,
            title: "Apply",
            type: "link",
          },
        ],
      },
      {
        title: "Learning",
        icon: Radio,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/learning/learning-list`,
            title: "Learning List",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/learning/learning-detail`,
            title: "Detailed Course",
            type: "link",
          },
        ],
      },
      {
        title: "Maps",
        icon: Map,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/map/googleMap`,
            type: "link",
            title: "Google Maps ",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/map/leaflet-map`,
            type: "link",
            title: "Leaflet Maps",
          },
        ],
      },
      {
        title: "Editor",
        icon: Edit,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/editor/ckEditor`,
            type: "link",
            title: "CK  Editor",
          },
          {
            path: `${process.env.PUBLIC_URL}/editor/mdeEditor`,
            type: "link",
            title: "MDE Editor",
          },
          {
            path: `${process.env.PUBLIC_URL}/editor/ace-code-editor`,
            type: "link",
            title: "ACE code Editor ",
          },
        ],
      },

      {
        path: `${process.env.PUBLIC_URL}/app/faq`,
        icon: HelpCircle,
        type: "link",
        active: false,
        title: "FAQ",
      },
      {
        icon: Sunrise,
        type: "sub",
        active: false,
        title: "Knowledgebase",
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/knowledgebase`,
            title: "Knowledgebase",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/knowledgebase-category`,
            title: "Knowledgebase Category",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/knowledgebase-detail`,
            title: "Knowledgebase Detail",
            type: "link",
          },
        ],
      },
      {
        path: `${process.env.PUBLIC_URL}/app/support-ticket`,
        icon: Users,
        type: "link",
        active: false,
        title: "Support Ticket",
      },
    ],
  },
  */
];
