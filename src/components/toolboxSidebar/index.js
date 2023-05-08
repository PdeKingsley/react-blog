import React, {useState} from "react";
import "./index.css";
import {Box, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, Typography} from "@material-ui/core";
import {toolCategory,toolMap} from "../../data/toolbox";
import {Link} from "react-router-dom";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps({index}) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function BasicList({category}) {
    const block = toolMap[category];

    return (
        <List>
            {block?.map((obj) => (
                <ListItem
                    key={obj.toolName}
                    disableGutters="true"
                    style={{justifyContent:'center'}}
                >
                    <Link to={obj.url}>{obj.toolName}</Link>
                </ListItem>
            ))}
        </List>
    );
}

function ToolboxSidebar({index}){
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="toolbox-sidebar-wrapper">
            <Tabs value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="scrollable force tabs"
            >
                {toolCategory.map(category => {
                    return <Tab label={category} {...a11yProps(toolCategory.indexOf(category))} style={{minWidth:"50%"}} />
                })}
            </Tabs>
            {
                toolCategory.map(category => {
                    return <TabPanel value={value} index={toolCategory.indexOf(category)}>
                        {toolMap[category].length > 0 && <BasicList category={category}/>}
                    </TabPanel>
                })
            }
        </div>
    );
}

export default ToolboxSidebar;