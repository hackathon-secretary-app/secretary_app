import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';

export const SideBarList = [
    {
        "title": "Individual",
        "icon": <PersonIcon />,
        "link": "/home"
    },
    {
        "title": "Share",
        "icon": <PeopleAltIcon />,
        "link": "/share"
    },
    {
        "title": "Setting",
        "icon": <SettingsIcon />,
        "link": "/setting"
    }
];
