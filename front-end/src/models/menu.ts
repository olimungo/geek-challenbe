import { IconType } from 'react-icons';
import {
    MdHome,
    MdPeople,
    MdInfoOutline,
    MdMoreHoriz,
    MdBugReport,
    MdAlarm,
    MdFace,
    MdPanTool,
    MdLeaderboard,
    MdTheaters,
    MdRadio,
    MdEmail,
    MdVoicemail,
} from 'react-icons/md';
import { RiBuilding3Fill } from 'react-icons/ri';

export type Section = {
    label: string;
    icon: IconType;
    uri: string;
};

export type SectionGroup = {
    label: string;
    sections: Section[];
};

const sectionsPeople: Section[] = [
    {
        label: 'menu.homepage',
        icon: MdHome,
        uri: `${process.env.REACT_APP_ROUTE_URL}/home`,
    },
    {
        label: 'menu.people',
        icon: MdPeople,
        uri: `${process.env.REACT_APP_ROUTE_URL}/people`,
    },
    {
        label: 'menu.factory',
        icon: RiBuilding3Fill,
        uri: `${process.env.REACT_APP_ROUTE_URL}/people/factory`,
    },
    {
        label: 'menu.about',
        icon: MdInfoOutline,
        uri: `${process.env.REACT_APP_ROUTE_URL}/about`,
    },
];

const sectionsBrol: Section[] = [
    {
        label: 'menu.page-not-found',
        icon: MdBugReport,
        uri: `${process.env.REACT_APP_ROUTE_URL}/page-not-found`,
    },
];

const sectionsTrucs: Section[] = [
    {
        label: 'menu.alarm',
        icon: MdAlarm,
        uri: `${process.env.REACT_APP_ROUTE_URL}/alarm`,
    },
    {
        label: 'menu.face',
        icon: MdFace,
        uri: `${process.env.REACT_APP_ROUTE_URL}/alarm`,
    },
    {
        label: 'menu.graph',
        icon: MdLeaderboard,
        uri: `${process.env.REACT_APP_ROUTE_URL}/alarm`,
    },
    {
        label: 'menu.hand',
        icon: MdPanTool,
        uri: `${process.env.REACT_APP_ROUTE_URL}/alarm`,
    },
];

const sectionsCarabistouilles: Section[] = [
    {
        label: 'menu.movie',
        icon: MdTheaters,
        uri: `${process.env.REACT_APP_ROUTE_URL}/favorite`,
    },
    {
        label: 'menu.radio',
        icon: MdRadio,
        uri: `${process.env.REACT_APP_ROUTE_URL}/favorite`,
    },
    {
        label: 'menu.mail',
        icon: MdEmail,
        uri: `${process.env.REACT_APP_ROUTE_URL}/favorite`,
    },
    {
        label: 'menu.tape',
        icon: MdVoicemail,
        uri: `${process.env.REACT_APP_ROUTE_URL}/favorite`,
    },
];

export const sectionGroups: SectionGroup[] = [
    { label: 'menu.people', sections: sectionsPeople },
    { label: 'menu.brol', sections: sectionsBrol },
    { label: 'menu.trucs', sections: sectionsTrucs },
    { label: 'menu.carabistouilles', sections: sectionsCarabistouilles },
];

export type FooterSection = {
    label: string;
    icon: IconType;
    uri: string;
};

export const footerSections: FooterSection[] = [
    {
        label: 'menu.homepage',
        icon: MdHome,
        uri: `${process.env.REACT_APP_ROUTE_URL}/home`,
    },
    {
        label: 'menu.people',
        icon: MdPeople,
        uri: `${process.env.REACT_APP_ROUTE_URL}/people`,
    },
    {
        label: 'menu.factory',
        icon: RiBuilding3Fill,
        uri: `${process.env.REACT_APP_ROUTE_URL}/people/factory'`,
    },
    {
        label: 'menu.about',
        icon: MdInfoOutline,
        uri: `${process.env.REACT_APP_ROUTE_URL}/about`,
    },
    {
        label: 'menu.more',
        icon: MdMoreHoriz,
        uri: `${process.env.REACT_APP_ROUTE_URL}/menu`,
    },
];
